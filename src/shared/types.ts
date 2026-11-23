export type DimensionKey =
  | 'economia'
  | 'estado'
  | 'redistribuicao'
  | 'trabalho'
  | 'sociedade'
  | 'laicidade'
  | 'democracia'
  | 'liberdades'
  | 'nacionalismo'
  | 'internacional'
  | 'seguranca'
  | 'ecologia';

export type DimensionVector = Record<DimensionKey, number>;

export type SpectrumLabel =
  | 'Extrema-Esquerda'
  | 'Esquerda'
  | 'Centro-Esquerda'
  | 'Centro'
  | 'Centro-Direita'
  | 'Direita'
  | 'Extrema-Direita';

export interface SpectrumClassification {
  label: SpectrumLabel;
  score: number; // -100 (Extrema-Esquerda) to +100 (Extrema-Direita)
  economicScore: number; // -100 to +100
  socialScore: number; // -100 to +100
  summary: string;
}

export type ThematicArea =
  | 'Economia'
  | 'Estado e Governança'
  | 'Questões Sociais'
  | 'Segurança e Defesa'
  | 'Relações Internacionais'
  | 'Meio Ambiente'
  | 'Filosofia Política';

export type QuizMode = 'rapido' | 'completo' | 'extensivo';

export interface EntendaExplanation {
  oQueSignifica: string;
  conceito: string;
  concordarRepresenta: string;
  discordarRepresenta: string;
  exemplosHistoricos: string;
}

export interface QuizQuestion {
  id: string;
  modeTier: 1 | 2 | 3; // 1 = in 36/72/240, 2 = in 72/240, 3 = in 240
  area: ThematicArea;
  subtopic: string;
  statement: string;
  isHumor?: boolean;
  customOptions?: string[];
  weights: Partial<DimensionVector>; // positive = concordar moves toward +100, negative = moves toward -100
  weightStrength?: number; // multiplier 0.5 - 1.5
  entenda?: EntendaExplanation;
}

export interface IdeologyRecord {
  id: string;
  nome: string;
  familia: string;
  periodoOrigem: string;
  resumo: string;
  origemHistorica: string;
  principaisPensadores: string[];
  principiosEconomicos: string;
  principiosSociais: string;
  visaoEstado: string;
  relacaoDemocracia: string;
  exemplosHistoricos: string[];
  diferencasCorrentes: string;
  fontes: string[];
  vector: DimensionVector;
}

export interface PoliticianRecord {
  id: string;
  nome: string;
  pais: string;
  regiao: 'Brasil' | 'América Latina' | 'Europa' | 'América do Norte' | 'Ásia' | 'Pensadores Clássicos e Contemporâneos';
  periodoHistorico: string;
  era: 'Século XIX' | 'Início do Século XX' | 'Guerra Fria' | 'Contemporâneo';
  partidoOuMovimento: string;
  categoria: 'Chefe de Estado / Político' | 'Pensador / Economista';
  biografiaResumida: string;
  principaisIdeias: string[];
  modeloEconomico: string;
  visaoEstado: string;
  posicionamentoSocial: string;
  politicaExterna: string;
  principaisRealizacoes: string[];
  contradicoesEMudancas: string;
  fontesBibliograficas: string[];
  correntePrincipal: string;
  vector: DimensionVector;
}

export interface CountryIndicatorValue {
  valor: string;
  numero: number;
  ano: number;
  fonte: string;
}

export interface CountryRecord {
  id: string;
  nome: string;
  regiao: string;
  modeloPredominante: string;
  resumoHistorico: string;
  regimePolitico: string;
  indicadores: {
    pibPerCapitaPPC: CountryIndicatorValue;
    idh: CountryIndicatorValue;
    gini: CountryIndicatorValue;
    cargaTributaria: CountryIndicatorValue;
    gastoPublicoPIB: CountryIndicatorValue;
    industrializacao: CountryIndicatorValue;
    educacao: CountryIndicatorValue;
    saude: CountryIndicatorValue;
    produtividade: CountryIndicatorValue;
    liberdadePolitica: CountryIndicatorValue;
  };
  trajetoriaDesenvolvimento: string;
  fontesPrincipais: string[];
}

export interface SimilarityBreakdown {
  afinidadeIdeologica: number; // 0-100
  semelhancaEconomica: number; // 0-100
  semelhancaSocial: number; // 0-100
  semelhancaInstitucional: number; // 0-100
  semelhancaHistorica: number; // 0-100
}

export interface IdeologyMatch {
  ideology: IdeologyRecord;
  compatibilidade: number;
  breakdown: SimilarityBreakdown;
}

export interface PoliticianMatch {
  politician: PoliticianRecord;
  compatibilidade: number;
  breakdown: SimilarityBreakdown;
  semelhancasPrincipais: string[];
  diferencasPrincipais: string[];
}

export interface PersonalizedNarrative {
  economia: string;
  papelEstado: string;
  capitalismoVsSocialismo: string;
  soberaniaNacional: string;
  visaoDemocracia: string;
  justicaSocial: string;
  contradicoesIdeologicas: string;
  correntesProximas: string;
  diferencasFundamentais: string;
}

export interface QuizResult {
  id: string;
  createdAt: string;
  mode: QuizMode;
  totalQuestions: number;
  answeredSeriousCount: number;
  humorAnswer?: string;
  confiancaGeral: number; // 0-100
  confiancaPorDimensao: Record<DimensionKey, number>;
  vector: DimensionVector;
  spectrum?: SpectrumClassification;
  topIdeologies: IdeologyMatch[];
  topPoliticians: PoliticianMatch[];
  narrative: PersonalizedNarrative;
}

export interface GlossaryTerm {
  id: string;
  termo: string;
  categoria: string;
  definicao: string;
  autoresChave: string;
  exemploPratico: string;
}

export interface AcademicSource {
  id: string;
  titulo: string;
  autorOuInstituicao: string;
  ano: string;
  area: string;
  tipo: 'Base Estatística' | 'Obra Clássica' | 'Pesquisa Acadêmica' | 'Arquivo Histórico';
  descricao: string;
  urlReferencia: string;
}
