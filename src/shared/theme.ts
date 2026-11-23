import { DimensionKey, SpectrumLabel, ThematicArea } from './types.ts';

export const AREA_STYLE: Record<
  ThematicArea,
  { text: string; border: string; surface: string; dot: string; accentHex: string }
> = {
  Economia: {
    text: 'text-emerald-700',
    border: 'border-emerald-300',
    surface: 'bg-emerald-50',
    dot: 'bg-emerald-600',
    accentHex: '#059669',
  },
  'Estado e Governança': {
    text: 'text-blue-700',
    border: 'border-blue-300',
    surface: 'bg-blue-50',
    dot: 'bg-blue-600',
    accentHex: '#2563EB',
  },
  'Questões Sociais': {
    text: 'text-violet-700',
    border: 'border-violet-300',
    surface: 'bg-violet-50',
    dot: 'bg-violet-600',
    accentHex: '#7C3AED',
  },
  'Segurança e Defesa': {
    text: 'text-rose-700',
    border: 'border-rose-300',
    surface: 'bg-rose-50',
    dot: 'bg-rose-600',
    accentHex: '#E11D48',
  },
  'Relações Internacionais': {
    text: 'text-cyan-700',
    border: 'border-cyan-300',
    surface: 'bg-cyan-50',
    dot: 'bg-cyan-600',
    accentHex: '#0891B2',
  },
  'Meio Ambiente': {
    text: 'text-teal-700',
    border: 'border-teal-300',
    surface: 'bg-teal-50',
    dot: 'bg-teal-600',
    accentHex: '#0D9488',
  },
  'Filosofia Política': {
    text: 'text-amber-700',
    border: 'border-amber-300',
    surface: 'bg-amber-50',
    dot: 'bg-amber-600',
    accentHex: '#D97706',
  },
};

export const SPECTRUM_ORDER: SpectrumLabel[] = [
  'Extrema-Esquerda',
  'Esquerda',
  'Centro-Esquerda',
  'Centro',
  'Centro-Direita',
  'Direita',
  'Extrema-Direita',
];

export const SPECTRUM_STYLE: Record<
  SpectrumLabel,
  {
    short: string;
    hex: string;
    segmentBg: string;
    softBg: string;
    border: string;
    text: string;
    badgeBg: string;
  }
> = {
  'Extrema-Esquerda': {
    short: 'Ext. Esq',
    hex: '#9F1239',
    segmentBg: 'bg-rose-800',
    softBg: 'bg-rose-50',
    border: 'border-rose-300',
    text: 'text-rose-900',
    badgeBg: 'bg-rose-800 text-white',
  },
  Esquerda: {
    short: 'Esq',
    hex: '#E11D48',
    segmentBg: 'bg-rose-600',
    softBg: 'bg-rose-50',
    border: 'border-rose-300',
    text: 'text-rose-700',
    badgeBg: 'bg-rose-600 text-white',
  },
  'Centro-Esquerda': {
    short: 'C-Esq',
    hex: '#EA580C',
    segmentBg: 'bg-orange-500',
    softBg: 'bg-orange-50',
    border: 'border-orange-300',
    text: 'text-orange-700',
    badgeBg: 'bg-orange-500 text-white',
  },
  Centro: {
    short: 'Centro',
    hex: '#0D9488',
    segmentBg: 'bg-teal-600',
    softBg: 'bg-teal-50',
    border: 'border-teal-300',
    text: 'text-teal-800',
    badgeBg: 'bg-teal-600 text-white',
  },
  'Centro-Direita': {
    short: 'C-Dir',
    hex: '#0284C7',
    segmentBg: 'bg-sky-500',
    softBg: 'bg-sky-50',
    border: 'border-sky-300',
    text: 'text-sky-700',
    badgeBg: 'bg-sky-600 text-white',
  },
  Direita: {
    short: 'Dir',
    hex: '#2563EB',
    segmentBg: 'bg-blue-600',
    softBg: 'bg-blue-50',
    border: 'border-blue-300',
    text: 'text-blue-700',
    badgeBg: 'bg-blue-600 text-white',
  },
  'Extrema-Direita': {
    short: 'Ext. Dir',
    hex: '#1E3A8A',
    segmentBg: 'bg-blue-900',
    softBg: 'bg-indigo-50',
    border: 'border-indigo-300',
    text: 'text-blue-950',
    badgeBg: 'bg-blue-900 text-white',
  },
};

export interface FamilyStyle {
  hex: string;
  text: string;
  topBorder: string;
  dot: string;
  bar: string;
}

export function getIdeologyFamilyStyle(familiaOrCorrente: string): FamilyStyle {
  const f = familiaOrCorrente.toLowerCase();
  if (
    f.includes('ecos') ||
    f.includes('verde') ||
    f.includes('ecol') ||
    f.includes('ambient')
  ) {
    return {
      hex: '#059669',
      text: 'text-emerald-700',
      topBorder: 'border-t-emerald-600',
      dot: 'bg-emerald-600',
      bar: 'bg-emerald-600',
    };
  }
  if (
    f.includes('social-demo') ||
    f.includes('trabalh') ||
    f.includes('bem-estar') ||
    f.includes('reform') ||
    f.includes('keynes')
  ) {
    return {
      hex: '#EA580C',
      text: 'text-orange-700',
      topBorder: 'border-t-orange-500',
      dot: 'bg-orange-500',
      bar: 'bg-orange-500',
    };
  }
  if (
    f.includes('socialis') ||
    f.includes('marx') ||
    f.includes('comun') ||
    f.includes('anarq') ||
    f.includes('trotsk') ||
    f.includes('mao')
  ) {
    return {
      hex: '#E11D48',
      text: 'text-rose-700',
      topBorder: 'border-t-rose-600',
      dot: 'bg-rose-600',
      bar: 'bg-rose-600',
    };
  }
  if (
    f.includes('liber') ||
    f.includes('libert') ||
    f.includes('mercado') ||
    f.includes('austr') ||
    f.includes('monetar')
  ) {
    return {
      hex: '#D97706',
      text: 'text-amber-700',
      topBorder: 'border-t-amber-500',
      dot: 'bg-amber-500',
      bar: 'bg-amber-500',
    };
  }
  if (
    f.includes('conserv') ||
    f.includes('crist') ||
    f.includes('tradic') ||
    f.includes('monarq') ||
    f.includes('direita')
  ) {
    return {
      hex: '#2563EB',
      text: 'text-blue-700',
      topBorder: 'border-t-blue-600',
      dot: 'bg-blue-600',
      bar: 'bg-blue-600',
    };
  }
  if (
    f.includes('nacion') ||
    f.includes('desenvolv') ||
    f.includes('soberan') ||
    f.includes('autor') ||
    f.includes('populis') ||
    f.includes('estatis')
  ) {
    return {
      hex: '#7C3AED',
      text: 'text-purple-700',
      topBorder: 'border-t-purple-600',
      dot: 'bg-purple-600',
      bar: 'bg-purple-600',
    };
  }
  return {
    hex: '#0284C7',
    text: 'text-sky-700',
    topBorder: 'border-t-sky-600',
    dot: 'bg-sky-600',
    bar: 'bg-sky-600',
  };
}

export const DIMENSION_POLE_THEME: Record<
  DimensionKey,
  {
    leftBar: string;
    rightBar: string;
    leftDot: string;
    rightDot: string;
    leftText: string;
    rightText: string;
    leftHex: string;
    rightHex: string;
    leftSoftBg: string;
    rightSoftBg: string;
  }
> = {
  economia: {
    leftBar: 'bg-rose-500',
    rightBar: 'bg-amber-500',
    leftDot: 'bg-rose-600',
    rightDot: 'bg-amber-500',
    leftText: 'text-rose-700',
    rightText: 'text-amber-700',
    leftHex: '#E11D48',
    rightHex: '#D97706',
    leftSoftBg: 'bg-rose-50/70',
    rightSoftBg: 'bg-amber-50/70',
  },
  estado: {
    leftBar: 'bg-cyan-500',
    rightBar: 'bg-blue-600',
    leftDot: 'bg-cyan-600',
    rightDot: 'bg-blue-600',
    leftText: 'text-cyan-700',
    rightText: 'text-blue-700',
    leftHex: '#0891B2',
    rightHex: '#2563EB',
    leftSoftBg: 'bg-cyan-50/70',
    rightSoftBg: 'bg-blue-50/70',
  },
  redistribuicao: {
    leftBar: 'bg-amber-500',
    rightBar: 'bg-rose-600',
    leftDot: 'bg-amber-600',
    rightDot: 'bg-rose-600',
    leftText: 'text-amber-700',
    rightText: 'text-rose-700',
    leftHex: '#D97706',
    rightHex: '#E11D48',
    leftSoftBg: 'bg-amber-50/70',
    rightSoftBg: 'bg-rose-50/70',
  },
  trabalho: {
    leftBar: 'bg-sky-500',
    rightBar: 'bg-orange-600',
    leftDot: 'bg-sky-600',
    rightDot: 'bg-orange-600',
    leftText: 'text-sky-700',
    rightText: 'text-orange-700',
    leftHex: '#0284C7',
    rightHex: '#EA580C',
    leftSoftBg: 'bg-sky-50/70',
    rightSoftBg: 'bg-orange-50/70',
  },
  sociedade: {
    leftBar: 'bg-blue-600',
    rightBar: 'bg-violet-600',
    leftDot: 'bg-blue-600',
    rightDot: 'bg-violet-600',
    leftText: 'text-blue-700',
    rightText: 'text-violet-700',
    leftHex: '#2563EB',
    rightHex: '#7C3AED',
    leftSoftBg: 'bg-blue-50/70',
    rightSoftBg: 'bg-violet-50/70',
  },
  laicidade: {
    leftBar: 'bg-indigo-600',
    rightBar: 'bg-fuchsia-600',
    leftDot: 'bg-indigo-600',
    rightDot: 'bg-fuchsia-600',
    leftText: 'text-indigo-700',
    rightText: 'text-fuchsia-700',
    leftHex: '#4F46E5',
    rightHex: '#C026D3',
    leftSoftBg: 'bg-indigo-50/70',
    rightSoftBg: 'bg-fuchsia-50/70',
  },
  democracia: {
    leftBar: 'bg-red-600',
    rightBar: 'bg-emerald-600',
    leftDot: 'bg-red-600',
    rightDot: 'bg-emerald-600',
    leftText: 'text-red-700',
    rightText: 'text-emerald-700',
    leftHex: '#DC2626',
    rightHex: '#059669',
    leftSoftBg: 'bg-red-50/70',
    rightSoftBg: 'bg-emerald-50/70',
  },
  liberdades: {
    leftBar: 'bg-rose-600',
    rightBar: 'bg-cyan-600',
    leftDot: 'bg-rose-600',
    rightDot: 'bg-cyan-600',
    leftText: 'text-rose-700',
    rightText: 'text-cyan-700',
    leftHex: '#E11D48',
    rightHex: '#0891B2',
    leftSoftBg: 'bg-rose-50/70',
    rightSoftBg: 'bg-cyan-50/70',
  },
  nacionalismo: {
    leftBar: 'bg-sky-600',
    rightBar: 'bg-purple-600',
    leftDot: 'bg-sky-600',
    rightDot: 'bg-purple-600',
    leftText: 'text-sky-700',
    rightText: 'text-purple-700',
    leftHex: '#0284C7',
    rightHex: '#7C3AED',
    leftSoftBg: 'bg-sky-50/70',
    rightSoftBg: 'bg-purple-50/70',
  },
  internacional: {
    leftBar: 'bg-orange-500',
    rightBar: 'bg-teal-600',
    leftDot: 'bg-orange-600',
    rightDot: 'bg-teal-600',
    leftText: 'text-orange-700',
    rightText: 'text-teal-700',
    leftHex: '#EA580C',
    rightHex: '#0D9488',
    leftSoftBg: 'bg-orange-50/70',
    rightSoftBg: 'bg-teal-50/70',
  },
  seguranca: {
    leftBar: 'bg-emerald-600',
    rightBar: 'bg-rose-600',
    leftDot: 'bg-emerald-600',
    rightDot: 'bg-rose-600',
    leftText: 'text-emerald-700',
    rightText: 'text-rose-700',
    leftHex: '#059669',
    rightHex: '#E11D48',
    leftSoftBg: 'bg-emerald-50/70',
    rightSoftBg: 'bg-rose-50/70',
  },
  ecologia: {
    leftBar: 'bg-amber-600',
    rightBar: 'bg-emerald-600',
    leftDot: 'bg-amber-600',
    rightDot: 'bg-emerald-600',
    leftText: 'text-amber-800',
    rightText: 'text-emerald-700',
    leftHex: '#B45309',
    rightHex: '#059669',
    leftSoftBg: 'bg-amber-50/70',
    rightSoftBg: 'bg-emerald-50/70',
  },
};
