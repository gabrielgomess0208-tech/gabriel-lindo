import fs from 'fs';
import path from 'path';
import { IDEOLOGIES_DATA } from '../src/data/ideologies.ts';
import { POLITICIANS_DATA } from '../src/data/politicians.ts';
import { COUNTRIES_DATA } from '../src/data/countries.ts';
import { GLOSSARY_DATA, ACADEMIC_SOURCES_DATA } from '../src/data/glossary_and_sources.ts';
import { classifyPoliticalSpectrum, normalizeVector } from '../src/shared/scoring.ts';
import {
  AcademicSource,
  CountryRecord,
  GlossaryTerm,
  IdeologyRecord,
  PoliticianRecord,
  QuizResult,
} from '../src/shared/types.ts';

export interface DatabaseSchema {
  version: number;
  updatedAt: string;
  ideologies: IdeologyRecord[];
  politicians: PoliticianRecord[];
  countries: CountryRecord[];
  glossary: GlossaryTerm[];
  sources: AcademicSource[];
  results: QuizResult[];
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'ralos_db.json');

function createSeedDatabase(): DatabaseSchema {
  return {
    version: 2,
    updatedAt: new Date().toISOString(),
    ideologies: IDEOLOGIES_DATA,
    politicians: POLITICIANS_DATA,
    countries: COUNTRIES_DATA,
    glossary: GLOSSARY_DATA,
    sources: ACADEMIC_SOURCES_DATA,
    results: [],
  };
}

export function loadDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const seed = createSeedDatabase();
      fs.writeFileSync(DB_FILE, JSON.stringify(seed, null, 2), 'utf-8');
      return seed;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as Partial<DatabaseSchema>;
    const seed = createSeedDatabase();

    const seedIdeoMap = new Map(seed.ideologies.map((i) => [i.id, i]));
    const seedPolMap = new Map(seed.politicians.map((p) => [p.id, p]));

    const parsedIdeos = (parsed.ideologies || []).map((i) => {
      const seedMatch = seedIdeoMap.get(i.id);
      return {
        ...i,
        vector: seedMatch ? seedMatch.vector : normalizeVector(i.vector),
      };
    });
    const parsedPols = (parsed.politicians || []).map((p) => {
      const seedMatch = seedPolMap.get(p.id);
      return {
        ...p,
        vector: seedMatch ? seedMatch.vector : normalizeVector(p.vector),
      };
    });

    const existingIdeologyIds = new Set(parsedIdeos.map((i) => i.id));
    const existingPolIds = new Set(parsedPols.map((p) => p.id));

    const hydratedResults = (Array.isArray(parsed.results) ? parsed.results : []).map((r) => {
      const normalizedVec = normalizeVector(r.vector);
      return {
        ...r,
        vector: normalizedVec,
        spectrum: r.spectrum || classifyPoliticalSpectrum(normalizedVec),
      };
    });

    const merged: DatabaseSchema = {
      version: 2,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
      ideologies: [
        ...parsedIdeos,
        ...seed.ideologies.filter((i) => !existingIdeologyIds.has(i.id)),
      ],
      politicians: [
        ...parsedPols,
        ...seed.politicians.filter((p) => !existingPolIds.has(p.id)),
      ],
      countries: seed.countries,
      glossary: seed.glossary,
      sources: seed.sources,
      results: hydratedResults,
    };
    return merged;
  } catch (err) {
    console.error('Erro ao carregar banco local, restaurando semente:', err);
    return createSeedDatabase();
  }
}

export function saveDatabase(db: DatabaseSchema): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  db.version = 2;
  db.updatedAt = new Date().toISOString();
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
}
