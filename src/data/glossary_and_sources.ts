import { AcademicSource, GlossaryTerm } from '../shared/types.ts';

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    id: 'estado-de-bem-estar',
    termo: 'Estado de Bem-Estar Social (Welfare State)',
    categoria: 'Estado e Economia',
    definicao:
      'Arranjo institucional em que o Estado assume a responsabilidade primária por garantir padrões mínimos de renda, saúde, educação, habitação e previdência como direitos universais de cidadania.',
    autoresChave: 'T. H. Marshall, William Beveridge, Gøsta Esping-Andersen',
    exemploPratico: 'Sistema universal nórdico (Suécia, Noruega) e criação do NHS britânico em 1948.',
  },
  {
    id: 'desenvolvimentismo',
    termo: 'Desenvolvimentismo',
    categoria: 'Economia Política',
    definicao:
      'Estratégia econômica de industrialização planejada conduzida em parceria entre Estado e setor produtivo, buscando superar a especialização primário-exportadora por meio de infraestrutura, crédito público e inovação.',
    autoresChave: 'Raúl Prebisch, Celso Furtado, Ha-Joon Chang, Luiz Carlos Bresser-Pereira',
    exemploPratico: 'Plano de Metas no Brasil (1956–1961) e industrialização da Coreia do Sul (1960–1985).',
  },
  {
    id: 'materialismo-historico',
    termo: 'Materialismo Histórico',
    categoria: 'Filosofia Política',
    definicao:
      'Método de análise histórica e social desenvolvido por Karl Marx e Friedrich Engels segundo o qual a organização material da produção e as relações de classe condicionam as instituições políticas, jurídicas e culturais.',
    autoresChave: 'Karl Marx, Friedrich Engels, Antonio Gramsci',
    exemploPratico: 'Análise da transição do feudalismo ao capitalismo industrial na Europa.',
  },
  {
    id: 'ordoliberalismo',
    termo: 'Ordoliberalismo',
    categoria: 'Economia Política',
    definicao:
      'Vertente alemã do liberalismo que defende que o mercado competitivo exige um marco jurídico forte e ativo do Estado (Ordnungspolitik) para impedir cartéis, monopólios privados e instabilidade monetária.',
    autoresChave: 'Walter Eucken, Franz Böhm, Ludwig Erhard',
    exemploPratico: 'Reformas da Alemanha Ocidental pós-1948 e direito antitruste da União Europeia.',
  },
  {
    id: 'subsidiariedade',
    termo: 'Princípio da Subsidiariedade',
    categoria: 'Estado e Governança',
    definicao:
      'Princípio organizativo oriundo da doutrina social cristã e do federalismo europeu: instâncias maiores (governo nacional) só devem assumir tarefas que comunidades locais, famílias ou municípios não consigam realizar com eficácia.',
    autoresChave: 'Jacques Maritain, Tratado de Maastricht (UE)',
    exemploPratico: 'Repartição de competências entre União Europeia, Estados-membros e regiões.',
  },
  {
    id: 'doenca-holandesa',
    termo: 'Doença Holandesa (Dutch Disease)',
    categoria: 'Economia Internacional',
    definicao:
      'Fenômeno em que receitas abundantes de exportação de commodities (petróleo, minérios, grãos) valorizam excessivamente a moeda local, tornando a indústria manufatureira doméstica não competitiva.',
    autoresChave: 'W. Max Corden, J. Peter Neary, Celso Furtado',
    exemploPratico: 'Descoberta de gás nos Países Baixos nos anos 1960 e sua mitigação posterior pelo Fundo Soberano da Noruega.',
  },
  {
    id: 'hegemonia-cultural',
    termo: 'Hegemonia',
    categoria: 'Filosofia Política',
    definicao:
      'Conceito gramsciano pelo qual um grupo social mantém liderança não apenas pela coerção estatal, mas pela construção de consenso intelectual, moral e cultural na sociedade civil.',
    autoresChave: 'Antonio Gramsci',
    exemploPratico: 'Disputa de valores através de escolas, imprensa, sindicatos e associações cívicas.',
  },
  {
    id: 'nao-dominacao',
    termo: 'Liberdade como Não-Dominação',
    categoria: 'Filosofia Política',
    definicao:
      'Concepção neorrepublicana segundo a qual ser livre significa não estar sujeito à interferência arbitrária de ninguém — nem de governantes despóticos nem de empregadores ou oligopólios sem freios legais.',
    autoresChave: 'Philip Pettit, Quentin Skinner, Nicolau Maquiavel',
    exemploPratico: 'Leis trabalhistas e tribunais independentes que impedem arbítrio patronal ou estatal.',
  },
  {
    id: 'politica-anticiclica',
    termo: 'Política Fiscal Anticíclica',
    categoria: 'Macroeconomia',
    definicao:
      'Uso deliberado de aumento do gasto público ou redução tributária em recessões para sustentar a demanda agregada e o emprego, compensado por superávits em períodos de expansão.',
    autoresChave: 'John Maynard Keynes, Michał Kalecki',
    exemploPratico: 'New Deal nos EUA (1933–1939) e respostas fiscais globais às crises de 2008 e 2020.',
  },
  {
    id: 'flexisseguranca',
    termo: 'Flexissegurança (Flexicurity)',
    categoria: 'Trabalho e Economia',
    definicao:
      'Modelo laboral dinamarquês que combina regras ágeis de contratação e demissão com seguro-desemprego elevado e programas públicos intensivos de requalificação profissional.',
    autoresChave: 'Economistas e sindicatos dinamarqueses (Pactos dos anos 1990)',
    exemploPratico: 'Mercado de trabalho contemporâneo da Dinamarca.',
  },
  {
    id: 'laicidade',
    termo: 'Laicidade do Estado',
    categoria: 'Questões Sociais',
    definicao:
      'Separação jurídica e institucional entre Estado e instituições religiosas, assegurando simultaneamente liberdade de culto aos crentes e neutralidade da legislação civil para todos os cidadãos.',
    autoresChave: 'John Locke, Aristide Briand, Norberto Bobbio',
    exemploPratico: 'Separação Igreja-Estado na França (1905) e na Constituição Brasileira (1891 e 1988).',
  },
  {
    id: 'multilateralismo',
    termo: 'Multilateralismo',
    categoria: 'Relações Internacionais',
    definicao:
      'Coordenação cooperativa entre três ou mais Estados mediante regras comuns, tratados e organizações internacionais estáveis, em contraste com acordos puramente bilaterais ou ações unilaterais.',
    autoresChave: 'John Ruggie, Robert Keohane',
    exemploPratico: 'ONU, Organização Mundial do Comércio (OMC) e Acordo de Paris.',
  },
  {
    id: 'indice-gini',
    termo: 'Índice de Gini',
    categoria: 'Indicadores Socioeconômicos',
    definicao:
      'Medida estatística de concentração de renda ou riqueza numa escala de 0 (igualdade absoluta) a 1 (ou 0 a 100, onde valores maiores indicam maior desigualdade).',
    autoresChave: 'Corrado Gini (1912)',
    exemploPratico: 'Países nórdicos registram Gini ~27–29; países latino-americanos frequentemente situam-se entre 40 e 52.',
  },
  {
    id: 'patrimonialismo',
    termo: 'Patrimonialismo',
    categoria: 'Estado e Governança',
    definicao:
      'Forma de dominação tradicional analisada por Max Weber e adaptada ao Brasil por Raymundo Faoro em que não há separação clara entre o patrimônio público e os interesses privados de governantes e estamentos.',
    autoresChave: 'Max Weber, Raymundo Faoro',
    exemploPratico: 'Captura de cargos, subsídios e cartórios públicos por grupos privados sem impessoalidade.',
  },
  {
    id: 'abordagem-capacidades',
    termo: 'Abordagem das Capacidades (Capabilities)',
    categoria: 'Filosofia e Economia',
    definicao:
      'Teoria formulada por Amartya Sen e Martha Nussbaum que avalia a justiça e o desenvolvimento pela liberdade real que as pessoas têm para realizar projetos de vida (saúde, educação, participação), não apenas pela renda.',
    autoresChave: 'Amartya Sen, Martha Nussbaum',
    exemploPratico: 'Base conceitual do Índice de Desenvolvimento Humano (IDH) do PNUD.',
  },
  {
    id: 'garantismo-penal',
    termo: 'Garantismo Penal',
    categoria: 'Segurança e Direito',
    definicao:
      'Teoria jurídica desenvolvida por Luigi Ferrajoli que subordina o poder punitivo do Estado a limites estritos de legalidade, prova rigorosa, presunção de inocência e proporcionalidade das penas.',
    autoresChave: 'Luigi Ferrajoli, Cesare Beccaria',
    exemploPratico: 'Proibição constitucional de provas ilícitas e exigência de devido processo legal.',
  },
];

export const ACADEMIC_SOURCES_DATA: AcademicSource[] = [
  {
    id: 'src-imf',
    titulo: 'World Economic Outlook & Fiscal Monitor',
    autorOuInstituicao: 'Fundo Monetário Internacional (FMI)',
    ano: '2024',
    area: 'Economia Internacional',
    tipo: 'Base Estatística',
    descricao:
      'Base macroeconômica global utilizada para séries comparáveis de PIB per capita em paridade de poder de compra (PPC) e gasto público total em % do PIB.',
    urlReferencia: 'https://www.imf.org/en/Publications/WEO',
  },
  {
    id: 'src-undp',
    titulo: 'Human Development Report (HDR)',
    autorOuInstituicao: 'Programa das Nações Unidas para o Desenvolvimento (PNUD)',
    ano: '2023/2024',
    area: 'Desenvolvimento Humano',
    tipo: 'Base Estatística',
    descricao:
      'Fonte oficial para o Índice de Desenvolvimento Humano (IDH), expectativa de escolaridade e indicadores multidimensionais de bem-estar.',
    urlReferencia: 'https://hdr.undp.org/',
  },
  {
    id: 'src-oecd',
    titulo: 'Revenue Statistics, Productivity & PISA Databases',
    autorOuInstituicao: 'Organização para a Cooperação e Desenvolvimento Econômico (OCDE)',
    ano: '2022–2024',
    area: 'Políticas Públicas Comparadas',
    tipo: 'Base Estatística',
    descricao:
      'Séries padronizadas de carga tributária (% PIB), produtividade por hora trabalhada e desempenho educacional internacional (PISA 2022).',
    urlReferencia: 'https://www.oecd.org/',
  },
  {
    id: 'src-eiu-vdem',
    titulo: 'Democracy Index & Varieties of Democracy (V-Dem)',
    autorOuInstituicao: 'Economist Intelligence Unit / Instituto V-Dem (Universidade de Gotemburgo)',
    ano: '2023–2024',
    area: 'Ciência Política',
    tipo: 'Pesquisa Acadêmica',
    descricao:
      'Índices comparativos sobre qualidade eleitoral, liberdades civis, separação de poderes e participação democrática.',
    urlReferencia: 'https://www.v-dem.net/',
  },
  {
    id: 'src-worldbank',
    titulo: 'World Development Indicators (WDI)',
    autorOuInstituicao: 'Banco Mundial',
    ano: '2023–2024',
    area: 'Desenvolvimento Econômico',
    tipo: 'Base Estatística',
    descricao:
      'Indicadores históricos de valor adicionado da manufatura (% PIB), índice de Gini, expectativa de vida e demografia.',
    urlReferencia: 'https://databank.worldbank.org/source/world-development-indicators',
  },
  {
    id: 'src-bobbio',
    titulo: 'Direita e Esquerda: Razões e Significados de uma Distinção Política',
    autorOuInstituicao: 'Norberto Bobbio',
    ano: '1994',
    area: 'Filosofia Política',
    tipo: 'Obra Clássica',
    descricao:
      'Obra de referência para a distinção analítica entre eixos de igualdade/desigualdade e liberdade/autoridade.',
    urlReferencia: 'https://unesp.br/',
  },
  {
    id: 'src-esping',
    titulo: 'The Three Worlds of Welfare Capitalism',
    autorOuInstituicao: 'Gøsta Esping-Andersen',
    ano: '1990',
    area: 'Política Comparada',
    tipo: 'Pesquisa Acadêmica',
    descricao:
      'Tipologia clássica dos regimes de proteção social: liberal (anglo-saxão), conservador-corporativo (continental) e social-democrata (nórdico).',
    urlReferencia: 'https://press.princeton.edu/',
  },
  {
    id: 'src-furtado',
    titulo: 'Formação Econômica do Brasil & O Mito do Desenvolvimento Econômico',
    autorOuInstituicao: 'Celso Furtado',
    ano: '1959 / 1974',
    area: 'Economia Brasileira e CEPAL',
    tipo: 'Obra Clássica',
    descricao:
      'Fundamentos do pensamento estruturalista latino-americano sobre industrialização, concentração de renda e inserção periférica.',
    urlReferencia: 'http://www.centrocelsofurtado.org.br/',
  },
  {
    id: 'src-sen',
    titulo: 'Desenvolvimento como Liberdade (Development as Freedom)',
    autorOuInstituicao: 'Amartya Sen',
    ano: '1999',
    area: 'Economia do Bem-Estar',
    tipo: 'Obra Clássica',
    descricao:
      'Fundamentação teórica que articula liberdades políticas, oportunidades econômicas e serviços sociais básicos.',
    urlReferencia: 'https://scholar.harvard.edu/',
  },
  {
    id: 'src-fgv-cpdoc',
    titulo: 'Dicionário Histórico-Biográfico Brasileiro (DHBB)',
    autorOuInstituicao: 'CPDOC / Fundação Getulio Vargas',
    ano: 'Arquivo Contínuo',
    area: 'História Política do Brasil',
    tipo: 'Arquivo Histórico',
    descricao:
      'Principal arquivo acadêmico brasileiro para verificação biográfica de presidentes, ministros, movimentos e partidos do século XX e XXI.',
    urlReferencia: 'https://cpdoc.fgv.br/',
  },
];

export interface EconomicModelComparison {
  id: string;
  nome: string;
  paisesExemplo: string[];
  eixoPrincipal: string;
  papelMercado: string;
  papelEstado: string;
  financiamentoSocial: string;
  pontosFortes: string[];
  riscosDesafios: string[];
}

export const LAB_ECONOMIC_MODELS: EconomicModelComparison[] = [
  {
    id: 'nordico',
    nome: 'Social-democracia Nórdica',
    paisesExemplo: ['Suécia', 'Noruega', 'Dinamarca', 'Finlândia'],
    eixoPrincipal: 'Alta liberdade de negócios + Universalismo social + Sindicatos fortes',
    papelMercado: 'Economia aberta exportadora, baixa burocracia empresarial e flexibilidade contratual (flexissegurança).',
    papelEstado: 'Tributação elevada (41–44% PIB) financiando saúde, educação, creches e requalificação profissional universais.',
    financiamentoSocial: 'Impostos progressivos amplos sobre renda e consumo financiando serviços universais sem estigma.',
    pontosFortes: ['Menor desigualdade do mundo industrializado (Gini ~28)', 'Altíssimo IDH e confiança institucional', 'Alta produtividade e inovação'],
    riscosDesafios: ['Pressão fiscal com envelhecimento populacional', 'Dependência de alto consenso cívico e baixa informalidade'],
  },
  {
    id: 'renano',
    nome: 'Economia Social de Mercado (Modelo Renano)',
    paisesExemplo: ['Alemanha', 'Áustria', 'Países Baixos'],
    eixoPrincipal: 'Competição regulada + Cogestão trabalhista + Ensino técnico dual',
    papelMercado: 'Pequenas e médias indústrias altamente especializadas (Mittelstand) sob rigor antitruste.',
    papelEstado: 'Ordoliberalismo: moeda estável, disciplina orçamentária e garantia jurídica da cogestão entre patrões e trabalhadores.',
    financiamentoSocial: 'Contribuições paritárias trabalhistas e seguridade social ligada à renda formal.',
    pontosFortes: ['Base industrial resiliente de alta tecnologia', 'Estabilidade de preços e conflito trabalhista negociado', 'Baixo desemprego juvenil via ensino dual'],
    riscosDesafios: ['Subinvestimento em infraestrutura digital em períodos de austeridade rígida', 'Vulnerabilidade a choques energéticos externos'],
  },
  {
    id: 'anglosaxao',
    nome: 'Capitalismo Liberal Anglo-Saxão',
    paisesExemplo: ['Estados Unidos', 'Reino Unido', 'Austrália'],
    eixoPrincipal: 'Mercados de capitais profundos + Flexibilidade laboral + Baixa tributação relativa',
    papelMercado: 'Principal motor alocador; alta mobilidade de capital, inovação financeira e mercado de trabalho pouco rígido.',
    papelEstado: 'Menor gasto social universal (exceto NHS britânico); nos EUA, forte gasto indireto federal em P&D militar e tecnológico.',
    financiamentoSocial: 'Previdência e saúde fortemente complementadas por seguros privados e planos ocupacionais.',
    pontosFortes: ['Dinamismo na criação de empresas e fronteira tecnológica', 'Alta flexibilidade para realocar capital rapidamente'],
    riscosDesafios: ['Maior desigualdade de renda e riqueza (Gini ~40 nos EUA)', 'Custos elevados de saúde privada e ensino superior para famílias'],
  },
  {
    id: 'desenvolvimentista-asiatico',
    nome: 'Desenvolvimentismo Estatal Asiático',
    paisesExemplo: ['Coreia do Sul (1960–87)', 'Singapura', 'China pós-1978'],
    eixoPrincipal: 'Planejamento estratégico estatal + Metas exportadoras + Educação intensiva',
    papelMercado: 'Empresas privadas e estatais disciplinadas por competição internacional e metas rigorosas de exportação.',
    papelEstado: 'Direcionamento de crédito, fundos soberanos, proteção seletiva inicial e investimento maciço em infraestrutura e STEM.',
    financiamentoSocial: 'Historicamente mais focado em poupança compulsória, habitação pública (Singapura) e expansão rápida de renda salarial.',
    pontosFortes: ['Saltos históricos de industrialização e erradicação da pobreza extrema em poucas décadas', 'Altíssimo desempenho educacional (PISA)'],
    riscosDesafios: ['Risco de concentração oligopólica (chaebols) ou superinvestimento imobiliário/endividamento local', 'Déficits democráticos durante as fases autoritárias iniciais'],
  },
  {
    id: 'latino-desenvolvimentista',
    nome: 'Desenvolvimentismo Latino-Americano',
    paisesExemplo: ['Brasil (1930–1980)', 'México (1940–1980)', 'Uruguai (Batllismo)'],
    eixoPrincipal: 'Substituição de importações + Estatais de base + Mercado interno',
    papelMercado: 'Protegido por tarifas alfandegárias para estimular produção substitutiva voltada ao consumo doméstico.',
    papelEstado: 'Criador de siderúrgicas, energia, bancos públicos de fomento e legislação trabalhista urbana.',
    financiamentoSocial: 'Financiamento frequente via impostos indiretos sobre consumo e dívida externa nos anos 1970.',
    pontosFortes: ['Rápida urbanização e montagem de parque industrial diversificado em meados do século XX'],
    riscosDesafios: ['Menor exigência de competitividade exportadora comparado à Ásia', 'Crises inflacionárias, gargalos educacionais básicos e persistência da desigualdade fundiária'],
  },
];

export interface HistoricalGovernmentComparison {
  id: string;
  titulo: string;
  pais: string;
  periodo: string;
  lideranca: string;
  corrente: string;
  contexto: string;
  politicaEconomica: string;
  politicaSocial: string;
  legado: string;
  limitesECriticas: string;
}

export const LAB_HISTORICAL_GOVERNMENTS: HistoricalGovernmentComparison[] = [
  {
    id: 'new-deal',
    titulo: 'New Deal',
    pais: 'Estados Unidos',
    periodo: '1933–1945',
    lideranca: 'Franklin D. Roosevelt',
    corrente: 'Liberalismo Social / Keynesianismo',
    contexto: 'Resposta à Grande Depressão após a quebra da bolsa de 1929 (desemprego de 25%).',
    politicaEconomica: 'Regulação bancária (Glass-Steagall), obras públicas massivas (WPA/TVA), seguro de depósitos e abandono do padrão-ouro.',
    politicaSocial: 'Criação da Previdência Social (Social Security), salário mínimo federal e reconhecimento legal dos sindicatos (Wagner Act).',
    legado: 'Redefiniu o capitalismo americano com rede de proteção federal e infraestrutura energética moderna.',
    limitesECriticas: 'Recuperação plena do emprego só veio com a mobilização da Segunda Guerra Mundial; concessões políticas mantiveram exclusões raciais no Sul.',
  },
  {
    id: 'era-vargas',
    titulo: 'Era Vargas & Segundo Governo',
    pais: 'Brasil',
    periodo: '1930–1945 / 1951–1954',
    lideranca: 'Getúlio Vargas',
    corrente: 'Getulismo / Nacional-Desenvolvimentismo',
    contexto: 'Crise do café de 1929 e necessidade de superar a economia puramente agrário-exportadora.',
    politicaEconomica: 'Criação da CSN, Vale, BNDE e Petrobras; crédito estatal e substituição de importações.',
    politicaSocial: 'Promulgação da CLT (1943), salário mínimo e Justiça do Trabalho sob tutela sindical corporativa.',
    legado: 'Lançou as bases da indústria pesada e do direito do trabalho urbano no Brasil.',
    limitesECriticas: 'Ditadura do Estado Novo (1937–1945) com censura e repressão política; exclusão dos trabalhadores rurais da CLT.',
  },
  {
    id: 'suecia-palme',
    titulo: 'Social-democracia Sueca (Era Erlander-Palme)',
    pais: 'Suécia',
    periodo: '1946–1986',
    lideranca: 'Tage Erlander e Olof Palme',
    corrente: 'Social-democracia Nórdica',
    contexto: 'Neutralidade sueca preservada após 1945 e consenso histórico entre trabalho organizado e indústria exportadora.',
    politicaEconomica: 'Modelo Rehn-Meidner: compressão salarial solidária, inovação tecnológica e economia aberta exportadora.',
    politicaSocial: 'Saúde, creches, universidades gratuitas, licença parental igualitária e pensões públicas universais.',
    legado: 'Tornou a Suécia referência mundial em igualdade social combinada com alta tecnologia.',
    limitesECriticas: 'Tensões inflacionárias nos anos 1970–1980 e impasse político em torno dos fundos sindicais (Meidner Plan).',
  },
  {
    id: 'deng-reforma',
    titulo: 'Reforma e Abertura Chinesa',
    pais: 'China',
    periodo: '1978–1992',
    lideranca: 'Deng Xiaoping',
    corrente: 'Socialismo de Mercado Pragmático',
    contexto: 'Estagnação econômica e traumas institucionais ao final da Revolução Cultural maoísta.',
    politicaEconomica: 'Descoletivização agrícola familiar, Zonas Econômicas Especiais (Shenzhen) e atração de tecnologia estrangeira mantendo bancos e estatais sob o Estado.',
    politicaSocial: 'Retirada gradual de centenas de milhões de pessoas da pobreza extrema mediante crescimento rápido de renda e infraestrutura.',
    legado: 'Maior expansão industrial e redução da pobreza em escala da história contemporânea.',
    limitesECriticas: 'Aumento da desigualdade urbano-rural, poluição intensa inicial e manutenção do monopólio autoritário do Partido Comunista.',
  },
  {
    id: 'allende-up',
    titulo: 'Governo da Unidade Popular',
    pais: 'Chile',
    periodo: '1970–1973',
    lideranca: 'Salvador Allende',
    corrente: 'Socialismo Democrático',
    contexto: 'Primeira experiência de transição socialista por via eleitoral democrática durante a Guerra Fria.',
    politicaEconomica: 'Nacionalização unânime do cobre, estatização de bancos e grandes indústrias e ampliação da reforma agrária.',
    politicaSocial: 'Expansão do acesso universitário, saúde preventiva e programa nutricional infantil ("Meio Litro de Leite").',
    legado: 'Referência histórica mundial de tentativa de conciliar socialismo econômico e democracia constitucional pluralista.',
    limitesECriticas: 'Expansão monetária excessiva, escassez de abastecimento, boicote externo (Nixon/CIA) e polarização extrema culminando no golpe militar de 1973.',
  },
  {
    id: 'thatcher-uk',
    titulo: 'Governo Thatcher',
    pais: 'Reino Unido',
    periodo: '1979–1990',
    lideranca: 'Margaret Thatcher',
    corrente: 'Neoliberalismo / Conservadorismo',
    contexto: 'Estagflação britânica dos anos 1970 ("Inverno do Descontentamento") e perda de competitividade industrial.',
    politicaEconomica: 'Privatização de estatais (BT, British Airways, gás, aço), desregulação financeira (Big Bang) e redução de impostos diretos.',
    politicaSocial: 'Venda de habitações públicas aos moradores (Right to Buy) e enfraquecimento jurídico do poder dos sindicatos.',
    legado: 'Transformou Londres em centro financeiro global e influenciou reformas pró-mercado no mundo todo.',
    limitesECriticas: 'Desemprego agudo em antigas regiões industriais/mineradoras e aumento acentuado da desigualdade de renda.',
  },
];

export interface NationalDilemmaScenario {
  id: string;
  titulo: string;
  contexto: string;
  respostasPorCorrente: {
    corrente: string;
    diagnostico: string;
    medidasConcretas: string[];
    riscosReconhecidos: string;
  }[];
}

export const LAB_NATIONAL_DILEMMAS: NationalDilemmaScenario[] = [
  {
    id: 'desindustrializacao',
    titulo: 'Desindustrialização Precoce e Baixa Produtividade',
    contexto:
      'Economias emergentes perdem participação da manufatura no PIB antes de atingir renda alta, concentrando exportações em commodities primárias.',
    respostasPorCorrente: [
      {
        corrente: 'Desenvolvimentismo',
        diagnostico: 'Câmbio valorizado pela exportação primária ("doença holandesa") e ausência de política industrial e crédito de longo prazo.',
        medidasConcretas: ['Bancos públicos financiando inovação e cadeias verdes', 'Compras governamentais com conteúdo tecnológico local', 'Taxa de câmbio competitiva e reforma educacional técnica'],
        riscosReconhecidos: 'Captura por lobbies empresariais sem cobrança de metas exportadoras.',
      },
      {
        corrente: 'Neoliberalismo / Liberalismo Clássico',
        diagnostico: 'Custo regulatório elevado, carga tributária complexa, baixa abertura comercial e rigidez trabalhista travam a produtividade.',
        medidasConcretas: ['Abertura comercial unilateral e acordos de livre comércio', 'Simplificação tributária e redução de encargos trabalhistas', 'Privatização de infraestrutura logística para baratear fretes'],
        riscosReconhecidos: 'Fechamento de indústrias locais no curto prazo sem garantia de transição para setores de alta tecnologia.',
      },
      {
        corrente: 'Social-democracia Nórdica',
        diagnostico: 'Subinvestimento crônico em educação básica, ciência/P&D e requalificação contínua da força de trabalho.',
        medidasConcretas: ['Pactos tripartites ligando salários à produtividade (Modelo Rehn-Meidner)', 'Investimento >3% do PIB em P&D público-privado', 'Segurança jurídica com alta proteção social ao trabalhador em transição'],
        riscosReconhecidos: 'Exige elevada confiança institucional e alta carga tributária progressiva bem aceita.',
      },
      {
        corrente: 'Socialismo Democrático',
        diagnostico: 'Subordinação da estrutura produtiva ao rentismo financeiro de curto prazo e à dependência tecnológica externa.',
        medidasConcretas: ['Empresas públicas estratégicas de transição ecológica e tecnologia', 'Redução dos juros reais e controle sobre remessas especulativas', 'Fomento a cooperativas industriais e autogestão'],
        riscosReconhecidos: 'Fuga de capitais privados e tensões cambiais caso não haja coordenação macroeconômica.',
      },
    ],
  },
  {
    id: 'desigualdade-tributaria',
    titulo: 'Sistema Tributário Regressivo e Financiamento Social',
    contexto:
      'Metade da arrecadação recai sobre consumo e folha salarial, enquanto rendas de capital e grandes patrimônios pagam alíquotas efetivas baixas.',
    respostasPorCorrente: [
      {
        corrente: 'Social-democracia & Trabalhismo',
        diagnostico: 'O sistema tributário agrava a concentração de renda em vez de corrigi-la.',
        medidasConcretas: ['Desoneração de alimentos e bens essenciais (IVA com cashback)', 'Tributação progressiva de lucros, dividendos e grandes heranças', 'Uso da receita adicional para saúde e escola em tempo integral'],
        riscosReconhecidos: 'Planejamento tributário agressivo de contribuintes de altíssima renda.',
      },
      {
        corrente: 'Liberalismo Social / Ordoliberalismo',
        diagnostico: 'Distorções setoriais, cumulatividade e renúncias fiscais reduzem eficiência e equidade.',
        medidasConcretas: ['Substituição de tributos cumulativos por IVA único transparente', 'Fim de isenções fiscais setoriais opacas', 'Imposto de renda moderadamente progressivo sem bitributação excessiva'],
        riscosReconhecidos: 'Resistência de setores hoje beneficiados por regimes especiais.',
      },
      {
        corrente: 'Libertarianismo / Neoliberalismo',
        diagnostico: 'O problema central é o tamanho absoluto do gasto público e da carga tributária total, não apenas sua distribuição.',
        medidasConcretas: ['Redução linear de alíquotas e simplificação para imposto único baixo (Flat Tax)', 'Corte drástico de despesas estatais e privatizações', 'Substituição de serviços públicos por vouchers ou contas individuais'],
        riscosReconhecidos: 'Aumento expressivo da desigualdade de renda disponível e redução de serviços universais.',
      },
    ],
  },
  {
    id: 'transicao-climatica',
    titulo: 'Descarbonização Econômica sem Desemprego Regional',
    contexto:
      'Regiões dependentes de petróleo, carvão ou pecuária extensiva enfrentam riscos econômicos e sociais com a transição climática global.',
    respostasPorCorrente: [
      {
        corrente: 'Ecossocialismo',
        diagnostico: 'O lucro privado curto-prazista é incompatível com a velocidade da descarbonização necessária.',
        medidasConcretas: ['Planejamento público democrático de reconversão de trabalhadores fósseis', 'Transporte público gratuito e energia renovável comunitária/estatal', 'Moratória de novas frentes fósseis e desmatamento zero'],
        riscosReconhecidos: 'Perda de receitas fiscais petrolíferas imediatas para financiar o Estado social.',
      },
      {
        corrente: 'Liberalismo Verde / Economia de Mercado',
        diagnostico: 'Ausência de sinal de preço claro para emissões externas impede o capital privado de migrar rapidamente.',
        medidasConcretas: ['Mercado regulado de emissões (Cap-and-Trade) e taxa de carbono com devolução social', 'Abertura de leilões privados de energia eólica/solar', 'Financiamento verde via títulos de mercado'],
        riscosReconhecidos: 'Impactos regressivos sobre combustíveis populares se a devolução social falhar.',
      },
      {
        corrente: 'Nacional-Desenvolvimentismo Sustentável',
        diagnostico: 'A transição verde é a maior janela do século XXI para reindustrialização soberana ("powershoring").',
        medidasConcretas: ['Uso da receita fóssil atual em fundo soberano exclusivo para transição industrial limpa', 'Produção nacional de baterias, turbinas, aço verde e bioeconomia amazônica', 'Proteção territorial soberana com inclusão produtiva local'],
        riscosReconhecidos: 'Tentação fiscal de adiar indefinidamente o pico de redução fóssil.',
      },
    ],
  },
];
