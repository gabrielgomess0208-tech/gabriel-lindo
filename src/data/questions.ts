import { DimensionVector, QuizMode, QuizQuestion } from '../shared/types.ts';
import { QUESTIONS_TIER_1_2 } from './questions_tier1_2.ts';
import { QUESTIONS_TIER_3A } from './questions_tier3a.ts';
import { QUESTIONS_TIER_3B } from './questions_tier3b.ts';

/**
 * Curated 12-pillar enrichment map so every single pillar
 * (economia, estado, redistribuicao, trabalho, sociedade, laicidade,
 * democracia, liberdades, nacionalismo, internacional, seguranca, ecologia)
 * is accurately represented and polarity-balanced across 36, 72, and 240 modes.
 */
const TIER1_PILLAR_OVERRIDES: Record<string, Partial<DimensionVector>> = {
  // Economia (5)
  q001: { economia: 1.0, estado: -0.6, redistribuicao: -0.45, trabalho: -0.3 },
  q002: { economia: -0.9, estado: 0.9, nacionalismo: 0.5, trabalho: 0.45 },
  q003: { economia: -0.75, estado: 0.8, redistribuicao: 1.0, sociedade: 0.4 },
  q004: { economia: -0.35, estado: 0.75, nacionalismo: 0.95, internacional: -0.35, trabalho: 0.55 },
  q005: { economia: 0.85, estado: -0.65, trabalho: -1.0, liberdades: 0.35 },

  // Estado e Governança (5)
  q006: { economia: 0.85, estado: -1.0, redistribuicao: -0.75, liberdades: 0.45 },
  q007: { democracia: 1.0, liberdades: 0.7, laicidade: 0.3 },
  q008: { democracia: 0.85, liberdades: 0.25, trabalho: 0.25 },
  q009: { estado: -0.55, democracia: 0.35, nacionalismo: -0.25, redistribuicao: -0.3 },
  q010: { democracia: -0.95, estado: 0.45, liberdades: -0.45, seguranca: 0.3 },

  // Questões Sociais (5)
  q011: { economia: -0.6, estado: 0.9, redistribuicao: 0.75, sociedade: 0.5 },
  q012: { sociedade: -0.85, laicidade: -1.0, liberdades: -0.65, democracia: -0.2 },
  q013: { sociedade: 0.9, redistribuicao: 0.45, estado: 0.4, laicidade: 0.35 },
  q014: { sociedade: 0.9, laicidade: 0.85, liberdades: 0.75, democracia: 0.35 },
  q015: { economia: 0.65, estado: -0.65, redistribuicao: -0.9, trabalho: -0.35, sociedade: -0.45 },

  // Segurança e Defesa (5)
  q016: { seguranca: -0.95, sociedade: 0.5, estado: 0.25, redistribuicao: 0.35 },
  q017: { seguranca: 0.95, democracia: -0.35, liberdades: -0.55 },
  q018: { seguranca: 0.8, nacionalismo: 0.7, internacional: -0.35, ecologia: -0.25 },
  q019: { seguranca: -0.25, democracia: 0.55, liberdades: 0.55 },
  q020: { democracia: 0.9, seguranca: -0.4, liberdades: 0.45, laicidade: 0.25 },

  // Relações Internacionais (5)
  q021: { internacional: 0.95, nacionalismo: -0.65, democracia: 0.4, ecologia: 0.35 },
  q022: { economia: 0.75, nacionalismo: -0.8, internacional: 0.45, trabalho: -0.45, ecologia: -0.35 },
  q023: { internacional: 0.85, nacionalismo: -0.2, ecologia: 0.25 },
  q024: { nacionalismo: 0.45, internacional: 0.4, seguranca: -0.5, democracia: 0.35 },
  q025: { economia: 0.75, nacionalismo: -0.9, estado: -0.4, ecologia: -0.4 },

  // Meio Ambiente (5)
  q026: { ecologia: 1.0, economia: -0.5, estado: 0.65, internacional: 0.35 },
  q027: { ecologia: 0.95, economia: -0.4, estado: 0.6, internacional: 0.5 },
  q028: { ecologia: -0.95, nacionalismo: 0.6, economia: 0.3, internacional: -0.45 },
  q029: { ecologia: 0.95, economia: -0.7, sociedade: 0.6, estado: 0.4 },
  q030: { ecologia: -0.25, economia: 0.65, estado: -0.35, internacional: 0.3 },

  // Filosofia Política (5)
  q031: { economia: -0.75, redistribuicao: 0.9, estado: 0.75, liberdades: -0.45, sociedade: 0.5 },
  q032: { liberdades: 0.95, laicidade: 0.65, economia: 0.4, nacionalismo: -0.45 },
  q033: { economia: -0.85, trabalho: 0.8, redistribuicao: 0.5, sociedade: 0.35 },
  q034: { sociedade: -0.95, laicidade: -0.75, democracia: -0.1, liberdades: -0.25 },
  q035: { democracia: 0.9, liberdades: 0.65, laicidade: 0.45, estado: 0.3, economia: -0.25 },
};

function derive12PillarWeights(q: QuizQuestion): QuizQuestion {
  const override = TIER1_PILLAR_OVERRIDES[q.id];
  if (override) {
    return { ...q, weights: override };
  }

  const w: Partial<DimensionVector> = { ...q.weights };
  const text = `${q.subtopic} ${q.statement}`.toLowerCase();

  // Derive redistribuicao if not set
  if (w.redistribuicao === undefined) {
    if (
      /impost|tribut|heranç|renda|desigual|pobrez|transferênc|assistênc|riquez|lucr|saúde|educaç|universal|meritocrac/.test(
        text
      )
    ) {
      const base =
        w.estado !== undefined
          ? w.estado * 0.75
          : w.economia !== undefined
          ? -w.economia * 0.75
          : 0;
      if (Math.abs(base) >= 0.2) w.redistribuicao = Number(base.toFixed(2));
    } else if (q.area === 'Economia' && w.economia !== undefined) {
      w.redistribuicao = Number((-w.economia * 0.45).toFixed(2));
    }
  }

  // Derive trabalho if not set
  if (w.trabalho === undefined) {
    if (
      /trabalh|sindic|salár|empreg|clt|jornad|aposent|previdênc|grev|contrataç|indústr|produç|cooperativ/.test(
        text
      )
    ) {
      const base =
        w.economia !== undefined
          ? -w.economia * 0.8
          : w.estado !== undefined
          ? w.estado * 0.7
          : 0;
      if (Math.abs(base) >= 0.2) w.trabalho = Number(base.toFixed(2));
    } else if (q.area === 'Economia' && w.economia !== undefined) {
      w.trabalho = Number((-w.economia * 0.4).toFixed(2));
    }
  }

  // Derive laicidade if not set
  if (w.laicidade === undefined) {
    if (
      /laic|religi|igrej|moral|tradiç|costum|famíli|abort|drog|gêner|minor|sexual|express|censur|consciênc/.test(
        text
      )
    ) {
      const base =
        w.sociedade !== undefined
          ? w.sociedade * 0.85
          : w.liberdades !== undefined
          ? w.liberdades * 0.65
          : 0;
      if (Math.abs(base) >= 0.2) w.laicidade = Number(base.toFixed(2));
    } else if (q.area === 'Questões Sociais' && w.sociedade !== undefined) {
      w.laicidade = Number((w.sociedade * 0.45).toFixed(2));
    }
  }

  // Derive ecologia if not set
  if (w.ecologia === undefined) {
    if (q.area === 'Meio Ambiente') {
      // Explicit polarity detection for environmental statements
      if (
        /explorar suas reservas|prioridade.*crescimento|flexibiliz|desburocratiz|reduzir multas|energia nuclear|combustíveis fósseis|agronegócio.*sem|crescimento econômico.*acima/.test(
          text
        ) ||
        (w.economia !== undefined && w.economia > 0.35 && (w.estado ?? 0) < 0)
      ) {
        w.ecologia = -0.85;
      } else {
        w.ecologia = 0.9;
      }
    } else if (
      /ambient|clim|ecológ|carbon|florest|amazôn|renová|fóss|petróle|mineraç|sustent|poluiç/.test(
        text
      )
    ) {
      const base = w.estado !== undefined && w.estado < 0 ? -0.6 : 0.75;
      w.ecologia = base;
    }
  }

  return { ...q, weights: w };
}

export const ALL_SERIOUS_QUESTIONS: QuizQuestion[] = [
  ...QUESTIONS_TIER_1_2,
  ...QUESTIONS_TIER_3A,
  ...QUESTIONS_TIER_3B,
].map(derive12PillarWeights);

export const HUMOR_QUESTION: QuizQuestion = {
  id: 'q_humor_ralo',
  modeTier: 1,
  area: 'Filosofia Política',
  subtopic: 'Intervalo Aleatório',
  statement: 'Ralo e bonita?',
  isHumor: true,
  customOptions: [
    'Discordo totalmente.',
    'Precisa nem perguntar, muito feia.',
    'Claro que não.',
    'Sim, sou ralo respondendo essa pergunta.',
    'Sim, pq gabriel e mt fofo.',
  ],
  weights: {},
};

export const SERIOUS_LIKERT_OPTIONS = [
  { value: 5, label: 'Concordo totalmente' },
  { value: 4, label: 'Concordo parcialmente' },
  { value: 3, label: 'Neutro / Depende do contexto' },
  { value: 2, label: 'Discordo parcialmente' },
  { value: 1, label: 'Discordo totalmente' },
];

export function getSeriousQuestionsForMode(mode: QuizMode): QuizQuestion[] {
  if (mode === 'rapido') {
    return ALL_SERIOUS_QUESTIONS.filter((q) => q.modeTier === 1).slice(0, 35);
  }
  if (mode === 'completo') {
    return ALL_SERIOUS_QUESTIONS.filter((q) => q.modeTier <= 2).slice(0, 71);
  }
  return ALL_SERIOUS_QUESTIONS.slice(0, 239);
}

/**
 * Generates an ordered list of questions with exact counts:
 * - rapido: 36 (35 serious + 1 humor at random position)
 * - completo: 72 (71 serious + 1 humor at random position)
 * - extensivo: 240 (239 serious + 1 humor at random position)
 */
export function buildQuizSessionQuestions(mode: QuizMode): QuizQuestion[] {
  const serious = [...getSeriousQuestionsForMode(mode)];
  const totalCount = serious.length + 1;
  // Insert the humor question at a randomized index (avoiding index 0 so user starts on a real question)
  const randomIdx = 1 + Math.floor(Math.random() * (totalCount - 1));
  const result = [...serious];
  result.splice(randomIdx, 0, { ...HUMOR_QUESTION });
  return result;
}
