import {
  DimensionKey,
  DimensionVector,
  IdeologyMatch,
  IdeologyRecord,
  PersonalizedNarrative,
  PoliticianMatch,
  PoliticianRecord,
  QuizMode,
  QuizQuestion,
  QuizResult,
  SimilarityBreakdown,
  SpectrumClassification,
  SpectrumLabel,
} from './types.ts';

export const DIMENSION_META: Record<
  DimensionKey,
  {
    label: string;
    shortLabel: string;
    leftPole: string;
    rightPole: string;
    description: string;
  }
> = {
  economia: {
    label: 'Economia & Mercado',
    shortLabel: 'Economia',
    leftPole: 'Planejamento & Propriedade Social',
    rightPole: 'Livre Mercado & Propriedade Privada',
    description:
      'Mede a preferência entre coordenação estatal/coletiva da produção e alocação descentralizada via mercados privados.',
  },
  estado: {
    label: 'Papel do Estado',
    shortLabel: 'Estado',
    leftPole: 'Estado Mínimo & Privatizações',
    rightPole: 'Estado Indutor & Serviços Universais',
    description:
      'Avalia o grau de intervenção governamental desejado na indução industrial, serviços universais e regulação econômica.',
  },
  redistribuicao: {
    label: 'Justiça Fiscal & Renda',
    shortLabel: 'Impostos',
    leftPole: 'Baixos Impostos & Meritocracia',
    rightPole: 'Tributação Progressiva & Redistribuição',
    description:
      'Examina o posicionamento sobre progressividade tributária, heranças, transferências sociais e redução material da desigualdade.',
  },
  trabalho: {
    label: 'Trabalho & Sindicalismo',
    shortLabel: 'Trabalho',
    leftPole: 'Livre Contratação & Flexibilidade',
    rightPole: 'Direitos Trabalhistas & Sindicatos',
    description:
      'Avalia o equilíbrio entre autonomia contratual flexível das empresas e proteção sindical/legal coletiva dos trabalhadores.',
  },
  sociedade: {
    label: 'Costumes & Inclusão',
    shortLabel: 'Costumes',
    leftPole: 'Conservadorismo & Tradição',
    rightPole: 'Progressismo & Direitos Civis',
    description:
      'Analisa posturas diante de mudanças culturais, políticas de inclusão racial e social e direitos de minorias.',
  },
  laicidade: {
    label: 'Laicidade & Moral Pública',
    shortLabel: 'Laicidade',
    leftPole: 'Valores Religiosos & Ordem Moral',
    rightPole: 'Estado Laico & Autonomia Moral',
    description:
      'Mede a separação entre doutrinas religiosas tradicionais e a legislação civil pública em sociedades pluralistas.',
  },
  democracia: {
    label: 'Regime & Democracia',
    shortLabel: 'Democracia',
    leftPole: 'Centralização Executiva / Tecnocracia',
    rightPole: 'Democracia Participativa & Instituições',
    description:
      'Mede o compromisso com separação de poderes, eleições livres, plebiscitos e controle popular sobre o Executivo.',
  },
  liberdades: {
    label: 'Liberdades Individuais',
    shortLabel: 'Liberdades',
    leftPole: 'Primazia Coletiva & Dever Cívico',
    rightPole: 'Autonomia Individual & Privacidade',
    description:
      'Avalia o equilíbrio entre autonomia pessoal, privacidade digital, liberdade de expressão e deveres impostos pela coletividade.',
  },
  nacionalismo: {
    label: 'Soberania & Indústria',
    shortLabel: 'Soberania',
    leftPole: 'Abertura Global & Livre Fluxo',
    rightPole: 'Soberania Nacional & Protecionismo',
    description:
      'Avalia o peso atribuído à proteção da indústria doméstica, controle de recursos estratégicos e autonomia frente a capitais externos.',
  },
  internacional: {
    label: 'Geopolítica & Diplomacia',
    shortLabel: 'Diplomacia',
    leftPole: 'Unilateralismo & Realpolitik',
    rightPole: 'Multilateralismo & Integração',
    description:
      'Compara a preferência por diplomacia cooperativa e blocos regionais versus competição geopolítica bilateral ou unilateral.',
  },
  seguranca: {
    label: 'Segurança & Sistema Penal',
    shortLabel: 'Segurança',
    leftPole: 'Garantismo & Prevenção Social',
    rightPole: 'Dissuasão Penal & Defesa Estratégica',
    description:
      'Diferencia abordagens focadas em prevenção social e reformas penais daquelas centradas em rigor punitivo e capacidade militar.',
  },
  ecologia: {
    label: 'Meio Ambiente & Energia',
    shortLabel: 'Ecologia',
    leftPole: 'Extrativismo & Crescimento Fóssil',
    rightPole: 'Transição Verde & Regulação Climática',
    description:
      'Avalia a prioridade concedida à transição energética, preservação de biomas e regulação ambiental diante do crescimento extrativo.',
  },
};

export const ALL_DIMENSIONS: DimensionKey[] = [
  'economia',
  'estado',
  'redistribuicao',
  'trabalho',
  'sociedade',
  'laicidade',
  'democracia',
  'liberdades',
  'nacionalismo',
  'internacional',
  'seguranca',
  'ecologia',
];

const LIKERT_SCORES: Record<number, number> = {
  1: -1.0, // Discordo totalmente
  2: -0.5, // Discordo parcialmente
  3: 0.0, // Neutro / Depende
  4: 0.5, // Concordo parcialmente
  5: 1.0, // Concordo totalmente
};

function clamp(val: number, min = -100, max = 100): number {
  return Math.max(min, Math.min(max, val));
}

/**
 * Ensures any partial or legacy 8-axis DimensionVector cleanly hydrates all 12 pillars.
 */
export function normalizeVector(raw?: Partial<DimensionVector> | null): DimensionVector {
  const r = raw || {};
  const economia = Number.isFinite(r.economia) ? Number(r.economia) : 0;
  const estado = Number.isFinite(r.estado) ? Number(r.estado) : 0;
  const sociedade = Number.isFinite(r.sociedade) ? Number(r.sociedade) : 0;
  const democracia = Number.isFinite(r.democracia) ? Number(r.democracia) : 0;
  const nacionalismo = Number.isFinite(r.nacionalismo) ? Number(r.nacionalismo) : 0;
  const internacional = Number.isFinite(r.internacional) ? Number(r.internacional) : 0;
  const seguranca = Number.isFinite(r.seguranca) ? Number(r.seguranca) : 0;
  const liberdades = Number.isFinite(r.liberdades) ? Number(r.liberdades) : 0;

  const redistribuicao = Number.isFinite(r.redistribuicao)
    ? Number(r.redistribuicao)
    : Math.round(clamp(0.55 * estado - 0.45 * economia));
  const trabalho = Number.isFinite(r.trabalho)
    ? Number(r.trabalho)
    : Math.round(clamp(0.45 * estado - 0.5 * economia));
  const laicidade = Number.isFinite(r.laicidade)
    ? Number(r.laicidade)
    : Math.round(clamp(0.65 * sociedade + 0.35 * liberdades));
  const ecologia = Number.isFinite(r.ecologia)
    ? Number(r.ecologia)
    : Math.round(clamp(0.45 * sociedade + 0.35 * internacional - 0.2 * economia));

  return {
    economia: clamp(economia),
    estado: clamp(estado),
    redistribuicao: clamp(redistribuicao),
    trabalho: clamp(trabalho),
    sociedade: clamp(sociedade),
    laicidade: clamp(laicidade),
    democracia: clamp(democracia),
    liberdades: clamp(liberdades),
    nacionalismo: clamp(nacionalismo),
    internacional: clamp(internacional),
    seguranca: clamp(seguranca),
    ecologia: clamp(ecologia),
  };
}

function emptyRecord(): Record<DimensionKey, number> {
  return {
    economia: 0,
    estado: 0,
    redistribuicao: 0,
    trabalho: 0,
    sociedade: 0,
    laicidade: 0,
    democracia: 0,
    liberdades: 0,
    nacionalismo: 0,
    internacional: 0,
    seguranca: 0,
    ecologia: 0,
  };
}

/**
 * Calculates balanced user vector across all 12 pillars.
 * Uses bidirectional pole averaging (50% positive-keyed items + 50% negative-keyed items when both exist)
 * to eliminate acquiescence bias regardless of asymmetric item wording.
 */
export function calculateUserVector(
  questions: QuizQuestion[],
  answers: Record<string, number>
): {
  vector: DimensionVector;
  confidenceByDimension: Record<DimensionKey, number>;
  overallConfidence: number;
  answeredSeriousCount: number;
  humorAnswer?: string;
} {
  const posSums = emptyRecord();
  const posAbsSums = emptyRecord();
  const negSums = emptyRecord();
  const negAbsSums = emptyRecord();
  const maxAbsSums = emptyRecord();
  const answeredWeightSums = emptyRecord();
  const questionCounts = emptyRecord();

  let answeredSeriousCount = 0;
  let humorAnswer: string | undefined;

  for (const q of questions) {
    const ans = answers[q.id];
    if (q.isHumor) {
      if (ans !== undefined && q.customOptions && q.customOptions[ans - 1]) {
        humorAnswer = q.customOptions[ans - 1];
      }
      continue;
    }

    const strength = q.weightStrength ?? 1;
    for (const dim of ALL_DIMENSIONS) {
      const w = q.weights[dim];
      if (w !== undefined && w !== 0) {
        maxAbsSums[dim] += Math.abs(w) * strength;
      }
    }

    if (ans === undefined || LIKERT_SCORES[ans] === undefined) {
      continue;
    }

    answeredSeriousCount += 1;
    const responseVal = LIKERT_SCORES[ans]; // -1 to +1

    for (const dim of ALL_DIMENSIONS) {
      const w = q.weights[dim];
      if (w !== undefined && w !== 0) {
        const contrib = responseVal * w * strength;
        const absW = Math.abs(w) * strength;
        if (w > 0) {
          posSums[dim] += contrib;
          posAbsSums[dim] += absW;
        } else {
          negSums[dim] += contrib;
          negAbsSums[dim] += absW;
        }
        answeredWeightSums[dim] += absW;
        questionCounts[dim] += 1;
      }
    }
  }

  const vector = {} as DimensionVector;
  const confidenceByDimension = {} as Record<DimensionKey, number>;

  let totalConfidence = 0;
  for (const dim of ALL_DIMENSIONS) {
    const hasPos = posAbsSums[dim] > 0;
    const hasNeg = negAbsSums[dim] > 0;

    if (hasPos && hasNeg) {
      const posAvg = posSums[dim] / posAbsSums[dim]; // -1 to +1
      const negAvg = negSums[dim] / negAbsSums[dim]; // -1 to +1
      vector[dim] = Math.round(clamp(((posAvg + negAvg) / 2) * 100));
    } else if (answeredWeightSums[dim] > 0) {
      const totalSum = posSums[dim] + negSums[dim];
      vector[dim] = Math.round(clamp((totalSum / answeredWeightSums[dim]) * 100));
    } else {
      vector[dim] = 0;
    }

    const coverageRatio = maxAbsSums[dim] > 0 ? answeredWeightSums[dim] / maxAbsSums[dim] : 0;
    const sampleDepthFactor = Math.min(1, questionCounts[dim] / 12);
    const dimConf = Math.round(coverageRatio * (52 + 48 * sampleDepthFactor));
    confidenceByDimension[dim] = Math.max(0, Math.min(100, dimConf));
    totalConfidence += confidenceByDimension[dim];
  }

  const overallConfidence = Math.round(totalConfidence / ALL_DIMENSIONS.length);

  return {
    vector,
    confidenceByDimension,
    overallConfidence,
    answeredSeriousCount,
    humorAnswer,
  };
}

/**
 * Classifies a 12-pillar profile into the 7 classic political spectrum categories:
 * Extrema-Esquerda, Esquerda, Centro-Esquerda, Centro, Centro-Direita, Direita, Extrema-Direita.
 */
export function classifyPoliticalSpectrum(rawVector: DimensionVector): SpectrumClassification {
  const v = normalizeVector(rawVector);

  // Economic Left (-100) to Right (+100)
  const economicScore = Math.round(
    clamp(
      0.56 * v.economia +
        0.14 * -v.estado +
        0.16 * -v.redistribuicao +
        0.14 * -v.trabalho
    )
  );

  // Socio-cultural / Moral / Ecological / Penal Left (-100) to Right (+100)
  const socialScore = Math.round(
    clamp(
      0.36 * -v.sociedade +
        0.26 * -v.laicidade +
        0.22 * v.seguranca +
        0.16 * -v.ecologia
    )
  );

  // Structural extreme modifiers so classic radical traditions separate cleanly from reformist currents
  const radicalLeftPull = v.economia <= -78 ? -14 : 0;
  const radicalMarketPull = v.economia >= 90 && v.estado <= -85 ? 16 : 0;
  const authoritarianRightPull =
    v.democracia < -45 && v.nacionalismo > 55 && v.sociedade < -50 ? 46 : 0;

  const rawScore =
    0.66 * economicScore +
    0.34 * socialScore +
    radicalLeftPull +
    radicalMarketPull +
    authoritarianRightPull;
  const score = Math.round(clamp(rawScore));

  let label: SpectrumLabel;
  let summary: string;

  if (score <= -74) {
    label = 'Extrema-Esquerda';
    summary =
      'Posição fortemente voltada à superação estrutural do capitalismo, socialização ampla dos meios de produção, redistribuição máxima de renda e transformação profunda da ordem econômica e social.';
  } else if (score <= -51) {
    label = 'Esquerda';
    summary =
      'Posicionamento comprometido com forte protagonismo público e social, direitos trabalhistas robustos, tributação progressiva, serviços universais, laicidade e transição ecológica ativa.';
  } else if (score <= -11) {
    label = 'Centro-Esquerda';
    summary =
      'Equilíbrio reformista que preserva economia de mercado regulada, combinando iniciativa privada com Estado de bem-estar social, proteção sindical, direitos civis e justiça tributária.';
  } else if (score < 11) {
    label = 'Centro';
    summary =
      'Posição pragmática e equilibrada entre mercado e Estado: busca combinar responsabilidade fiscal e competitividade econômica com redes de proteção social, pluralismo institucional e moderação cultural.';
  } else if (score < 36) {
    label = 'Centro-Direita';
    summary =
      'Orientação favorável à economia de mercado, disciplina fiscal e livre iniciativa, mantendo abertura a políticas sociais focalizadas, estabilidade institucional e gradualismo nas reformas culturais.';
  } else if (score < 66) {
    label = 'Direita';
    summary =
      'Defesa consistente da propriedade privada, redução do tamanho do Estado e da carga tributária, valorização da livre contratação e, em vertentes conservadoras, preservação da ordem e tradições.';
  } else {
    label = 'Extrema-Direita';
    summary =
      authoritarianRightPull > 0 || v.democracia < -40
        ? 'Posicionamento radicalizado na defesa de autoridade centralizada, tradicionalismo moral rígido, nacionalismo excludente e endurecimento penal acentuado.'
        : 'Posicionamento radical pró-mercado e antiestatal, propondo privatização praticamente total, supressão de regulações trabalhistas/tributárias e retração extrema do setor público.';
  }

  return {
    label,
    score,
    economicScore,
    socialScore,
    summary,
  };
}

function axisDistanceToPercentage(diffs: number[]): number {
  if (diffs.length === 0) return 50;
  const rms = Math.sqrt(diffs.reduce((acc, d) => acc + d * d, 0) / diffs.length);
  const score = Math.max(0, Math.min(100, Math.round(100 * (1 - rms / 165))));
  return score;
}

export function computeSimilarityBreakdown(
  userRaw: DimensionVector,
  targetRaw: DimensionVector,
  dimensionWeights?: Partial<Record<DimensionKey, number>>
): { overall: number; breakdown: SimilarityBreakdown } {
  const user = normalizeVector(userRaw);
  const target = normalizeVector(targetRaw);

  let sumWeightSq = 0;
  let sumWeightedDistSq = 0;

  for (const dim of ALL_DIMENSIONS) {
    const w = dimensionWeights?.[dim] ?? 1;
    const diff = user[dim] - target[dim];
    sumWeightedDistSq += w * diff * diff;
    sumWeightSq += w;
  }

  const rmsWeighted = Math.sqrt(sumWeightedDistSq / Math.max(1, sumWeightSq));
  let dot = 0;
  let normU = 0;
  let normT = 0;
  for (const dim of ALL_DIMENSIONS) {
    dot += user[dim] * target[dim];
    normU += user[dim] * user[dim];
    normT += target[dim] * target[dim];
  }
  const cosine =
    normU > 0 && normT > 0 ? (dot / (Math.sqrt(normU) * Math.sqrt(normT)) + 1) * 50 : 50;
  const euclideanPct = Math.max(0, Math.min(100, 100 * (1 - rmsWeighted / 165)));
  const overall = Math.round(0.78 * euclideanPct + 0.22 * cosine);

  const economica = axisDistanceToPercentage([
    user.economia - target.economia,
    user.estado - target.estado,
    user.redistribuicao - target.redistribuicao,
    user.trabalho - target.trabalho,
    (user.nacionalismo - target.nacionalismo) * 0.65,
  ]);
  const social = axisDistanceToPercentage([
    user.sociedade - target.sociedade,
    user.laicidade - target.laicidade,
    user.liberdades - target.liberdades,
    (user.ecologia - target.ecologia) * 0.65,
  ]);
  const institucional = axisDistanceToPercentage([
    user.democracia - target.democracia,
    user.seguranca - target.seguranca,
    user.internacional - target.internacional,
  ]);
  const historica = Math.round(overall * 0.6 + economica * 0.2 + institucional * 0.2);

  return {
    overall: Math.max(0, Math.min(99, overall)),
    breakdown: {
      afinidadeIdeologica: Math.max(0, Math.min(99, overall)),
      semelhancaEconomica: economica,
      semelhancaSocial: social,
      semelhancaInstitucional: institucional,
      semelhancaHistorica: historica,
    },
  };
}

function deriveComparisonInsights(
  userRaw: DimensionVector,
  pol: PoliticianRecord
): { semelhancas: string[]; diferencas: string[] } {
  const user = normalizeVector(userRaw);
  const polVec = normalizeVector(pol.vector);

  const diffs = ALL_DIMENSIONS.map((dim) => ({
    dim,
    delta: Math.abs(user[dim] - polVec[dim]),
    userVal: user[dim],
    polVal: polVec[dim],
  }));

  const sortedClosest = [...diffs].sort((a, b) => a.delta - b.delta).slice(0, 3);
  const sortedFurthest = [...diffs].sort((a, b) => b.delta - a.delta).slice(0, 3);

  const semelhancas = sortedClosest.map((item) => {
    const meta = DIMENSION_META[item.dim];
    const poleDesc =
      item.polVal >= 15
        ? meta.rightPole
        : item.polVal <= -15
        ? meta.leftPole
        : 'posição intermediária e pragmática';
    return `Convergência em ${meta.label} (${poleDesc.toLowerCase()}, diferença de ${item.delta} pts).`;
  });

  const diferencas = sortedFurthest
    .filter((item) => item.delta >= 22)
    .map((item) => {
      const meta = DIMENSION_META[item.dim];
      const userDir =
        item.userVal >= 10
          ? meta.rightPole
          : item.userVal <= -10
          ? meta.leftPole
          : 'equilíbrio moderado';
      const polDir =
        item.polVal >= 10
          ? meta.rightPole
          : item.polVal <= -10
          ? meta.leftPole
          : 'equilíbrio moderado';
      return `Divergência em ${meta.label}: seu perfil tende a ${userDir.toLowerCase()}, enquanto ${pol.nome} operava sob ${polDir.toLowerCase()}.`;
    });

  if (diferencas.length === 0) {
    diferencas.push(
      `Distância moderada nas prioridades institucionais e no contexto histórico de ${pol.periodoHistorico}.`
    );
  }

  return { semelhancas, diferencas };
}

export function generatePersonalizedNarrative(
  rawVector: DimensionVector,
  topIdeologies: IdeologyMatch[],
  confidence: number
): PersonalizedNarrative {
  const {
    economia,
    estado,
    redistribuicao,
    trabalho,
    sociedade,
    laicidade,
    democracia,
    nacionalismo,
    internacional,
    seguranca,
    liberdades,
    ecologia,
  } = normalizeVector(rawVector);

  const econText =
    economia <= -45
      ? 'Sua visão econômica atribui centralidade ao planejamento público, ao controle estratégico de setores-chave e à superação da lógica puramente mercantil na distribuição de bens essenciais.'
      : economia <= -15
      ? 'Você favorece uma economia mista com forte presença coordenadora do setor público, regulação de monopólios e proteção a direitos trabalhistas, admitindo a iniciativa privada sob metas sociais.'
      : economia <= 20
      ? 'Sua leitura econômica busca equilíbrio pragmático entre mecanismos de mercado eficientes e políticas públicas corretivas, evitando tanto o estatismo rígido quanto a desregulação irrestrita.'
      : economia <= 55
      ? 'Você valoriza a livre iniciativa, a concorrência e a alocação de recursos pelo sistema de preços, aceitando intervenções estatais pontuais apenas para corrigir falhas de mercado evidentes.'
      : 'Seu perfil econômico defende ampla primazia da propriedade privada, desregulação de mercados, redução da carga tributária e mínima interferência estatal sobre preços, contratos e investimentos.';

  const estadoText =
    estado >= 45
      ? 'Quanto ao papel do Estado, você o compreende como indutor ativo do desenvolvimento industrial, provedor universal de saúde e educação e garantidor da coesão macroeconômica.'
      : estado >= 10
      ? 'Você defende um Estado estruturado e eficiente, capaz de sustentar redes de proteção social e infraestrutura estratégica sem sufocar a dinâmica do setor produtivo.'
      : estado >= -25
      ? 'Sua posição favorece um Estado enxuto e descentralizado, com foco estrito em funções clássicas, responsabilidade fiscal rigorosa e parcerias com a sociedade civil.'
      : 'Você propõe forte retração do aparelho estatal, priorizando descentralização, privatizações e transferência de atribuições econômicas e sociais à iniciativa privada.';

  const capSocText =
    economia < -20 && (estado > 20 || redistribuicao > 25)
      ? 'Na relação entre capitalismo, trabalho e socialismo, você inclina-se a modelos que subordinam o capital a metas sociais coletivas e fortalecem negociações trabalhistas — aproximando-se de tradições socialistas democráticas, trabalhistas ou desenvolvimentistas.'
      : economia >= -20 && economia <= 25 && (estado >= 15 || redistribuicao >= 15)
      ? 'Sobre capitalismo e socialismo, suas respostas apontam para a tradição da economia social de mercado e da social-democracia clássica: manter a economia de mercado capitalista, porém regulada por sindicatos fortes, tributação progressiva e Estado de bem-estar.'
      : 'Entre capitalismo e socialismo, você demonstra clara confiança nos fundamentos do capitalismo competitivo, flexibilidade contratual e criação descentralizada de riqueza, vendo o planejamento socialista como ineficiente ou restritivo à iniciativa individual.';

  const sobText =
    nacionalismo >= 35
      ? 'Em soberania nacional, você prioriza autonomia tecnológica, proteção de cadeias industriais domésticas e controle nacional sobre recursos energéticos e financeiros frente a pressões externas.'
      : nacionalismo >= -15
      ? 'Sua abordagem de soberania combina defesa de interesses estratégicos nacionais com abertura seletiva ao comércio internacional, investimento estrangeiro produtivo e cooperação multilateral.'
      : 'Você adota uma postura cosmopolita e aberta, priorizando livre fluxo de capitais, integração às cadeias globais de valor e redução de barreiras protecionistas.';

  const demText =
    democracia >= 40
      ? 'Sua concepção de democracia valoriza fortemente a separação de poderes, garantias constitucionais, imprensa independente e ampliação de mecanismos participativos como plebiscitos e orçamentos participativos.'
      : democracia >= 0
      ? 'Você sustenta o compromisso com a democracia representativa e o Estado de direito, equilibrando legitimidade eleitoral com estabilidade institucional e eficiência administrativa.'
      : 'Suas respostas revelam certa impaciência com a lentidão das mediações parlamentares tradicionais, privilegiando autoridade executiva centralizada ou decisões tecnocráticas em momentos de crise.';

  const justText =
    sociedade >= 30 || redistribuicao >= 35
      ? `Sua concepção de justiça social combina redistribuição fiscal (${redistribuicao > 0 ? `+${redistribuicao}` : redistribuicao}) com defesa de direitos civis, ${laicidade >= 20 ? 'Estado estritamente laico' : 'respeito ao pluralismo'} e ${ecologia >= 25 ? 'responsabilidade socioambiental ativa' : 'políticas de inclusão'}.`
      : sociedade >= -15
      ? 'Você entende a justiça social prioritariamente através da igualdade de oportunidades materiais (educação e saúde de qualidade) combinada a regras fiscais equilibradas e cautela diante de rupturas culturais abruptas.'
      : 'Você interpreta a ordem social com forte apreço à tradição, às instituições comunitárias históricas, à responsabilidade individual e à meritocracia, priorizando liberdade de mercado e ordem moral consolidada.';

  const tensions: string[] = [];
  if (economia > 25 && estado > 25) {
    tensions.push(
      'Tensão produtiva entre defesa do livre mercado e expectativa de um Estado indutor ativo — combinação típica de modelos asiáticos pragmáticos ou do ordoliberalismo.'
    );
  }
  if (economia < -20 && liberdades > 35) {
    tensions.push(
      'Combinação entre redistribuição econômica e forte autonomia individual, aproximando seu pensamento do socialismo libertário ou do liberalismo igualitário.'
    );
  }
  if (nacionalismo > 30 && internacional > 30) {
    tensions.push(
      'Busca simultânea por nacionalismo econômico robusto e multilateralismo cooperativo, característica do desenvolvimentismo sul-americano e da integração regional soberana.'
    );
  }
  if (sociedade > 30 && seguranca > 30) {
    tensions.push(
      'Alinhamento progressista em costumes civis combinado com demanda por rigor policial e dissuasão em segurança pública.'
    );
  }
  if (economia > 30 && ecologia > 35) {
    tensions.push(
      'Combinação de economia pró-mercado com forte consciência climática e ambiental — perfil próximo ao liberalismo verde e precificação de carbono.'
    );
  }
  if (trabalho > 30 && redistribuicao < -20) {
    tensions.push(
      'Defesa de direitos trabalhistas acompanhada de preferência por menor carga tributária geral.'
    );
  }
  if (democracia < -10 && liberdades > 25) {
    tensions.push(
      'Contraste entre desconfiança nas instituições representativas tradicionais e valorização de liberdades individuais.'
    );
  }
  if (tensions.length === 0) {
    tensions.push(
      'Seu conjunto de respostas apresenta elevada coerência interna entre os 12 pilares econômicos, institucionais, sociais e ambientais.'
    );
  }
  if (confidence < 78) {
    tensions.push(
      `Nota metodológica: com nível de confiança atual de ${confidence}%, modalidades mais extensas (72 ou 240 perguntas) permitem refinar nuances entre pilares próximos.`
    );
  }

  const top1 = topIdeologies[0];
  const top2 = topIdeologies[1];
  const bottom = topIdeologies[topIdeologies.length - 1];

  return {
    economia: econText,
    papelEstado: estadoText,
    capitalismoVsSocialismo: capSocText,
    soberaniaNacional: sobText,
    visaoDemocracia: demText,
    justicaSocial: justText,
    contradicoesIdeologicas: tensions.join(' '),
    correntesProximas:
      top1 && top2
        ? `As correntes com maior proximidade matemática ao seu vetor de 12 pilares são ${top1.ideology.nome} (${top1.compatibilidade}%) e ${top2.ideology.nome} (${top2.compatibilidade}%), refletindo afinidades estruturais na organização econômica, social e institucional.`
        : 'Análise comparativa concluída.',
    diferencasFundamentais: bottom
      ? `As maiores divergências estruturais aparecem frente a correntes como ${bottom.ideology.nome} (${bottom.compatibilidade}% de compatibilidade), sobretudo na concepção do papel do Estado, justiça fiscal e liberdades públicas.`
      : 'Nenhuma divergência extrema detectada.',
  };
}

export function buildQuizResult(
  mode: QuizMode,
  questions: QuizQuestion[],
  answers: Record<string, number>,
  ideologies: IdeologyRecord[],
  politicians: PoliticianRecord[]
): QuizResult {
  const {
    vector,
    confidenceByDimension,
    overallConfidence,
    answeredSeriousCount,
    humorAnswer,
  } = calculateUserVector(questions, answers);

  const spectrum = classifyPoliticalSpectrum(vector);

  const allIdeologies: IdeologyMatch[] = ideologies
    .map((ideology) => {
      const { overall, breakdown } = computeSimilarityBreakdown(vector, ideology.vector);
      return {
        ideology,
        compatibilidade: overall,
        breakdown,
      };
    })
    .sort((a, b) => b.compatibilidade - a.compatibilidade);

  const topIdeologies = allIdeologies.slice(0, 5);

  const topPoliticians: PoliticianMatch[] = politicians
    .map((politician) => {
      const { overall, breakdown } = computeSimilarityBreakdown(vector, politician.vector);
      const { semelhancas, diferencas } = deriveComparisonInsights(vector, politician);
      return {
        politician,
        compatibilidade: overall,
        breakdown,
        semelhancasPrincipais: semelhancas,
        diferencasPrincipais: diferencas,
      };
    })
    .sort((a, b) => b.compatibilidade - a.compatibilidade)
    .slice(0, 10);

  const narrative = generatePersonalizedNarrative(vector, allIdeologies, overallConfidence);

  return {
    id: `res_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    mode,
    totalQuestions: questions.length,
    answeredSeriousCount,
    humorAnswer,
    confiancaGeral: overallConfidence,
    confiancaPorDimensao: confidenceByDimension,
    vector,
    spectrum,
    topIdeologies,
    topPoliticians,
    narrative,
  };
}
