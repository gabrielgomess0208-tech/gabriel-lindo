import { PoliticianRecord } from '../shared/types.ts';

export const POLITICIANS_DATA: PoliticianRecord[] = [
  // BRASIL
  {
    id: 'getulio-vargas',
    nome: 'Getúlio Vargas',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1882–1954 (Governos: 1930–1945 e 1951–1954)',
    era: 'Início do Século XX',
    partidoOuMovimento: 'Aliança Liberal / Estado Novo / PTB',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Getulismo / Trabalhismo Nacionalista',
    biografiaResumida:
      'Presidente brasileiro que liderou a Revolução de 1930, modernizou o Estado nacional, instituiu a legislação trabalhista urbana (CLT) e criou grandes empresas estatais de base industrial e energética.',
    principaisIdeias: [
      'Industrialização dirigida pelo Estado como eixo da emancipação nacional',
      'Integração dos trabalhadores urbanos via legislação social e sindicalismo corporativo',
      'Soberania estatal sobre recursos minerais e energéticos estratégicos',
    ],
    modeloEconomico:
      'Capitalismo de Estado e desenvolvimentismo industrial: crédito público, criação da CSN, Vale do Rio Doce, Petrobras e Eletrobras.',
    visaoEstado:
      'Estado centralizador, burocraticamente racionalizado (DASP) e indutor da modernização econômica frente às oligarquias agrárias.',
    posicionamentoSocial:
      'Reconhecimento pioneiro de direitos trabalhistas urbanos (salário mínimo, férias, Justiça do Trabalho), porém mantendo os trabalhadores rurais fora da CLT à época.',
    politicaExterna:
      'Pragmatismo equidistante ("barganha nacionalista"): negociou financiamento industrial dos EUA na Segunda Guerra Mundial e manteve autonomia estratégica nos anos 1950.',
    principaisRealizacoes: [
      'Promulgação da Consolidação das Leis do Trabalho (CLT, 1943)',
      'Fundação da Companhia Siderúrgica Nacional (1941) e da Petrobras (1953)',
      'Instituição do voto feminino e da Justiça Eleitoral no Código Eleitoral de 1932',
    ],
    contradicoesEMudancas:
      'Governou sob regime autoritário e censura no Estado Novo (1937–1945), inclusive deportando militantes como Olga Benário, e retornou pelo voto popular em 1950 adotando postura democrática e nacionalista mais acentuada.',
    fontesBibliograficas: [
      'Fausto, Boris. Getúlio Vargas: O Poder e o Sorriso (Companhia das Letras, 2006).',
      'Lira Neto. Getúlio: Volumes 1, 2 e 3 (Companhia das Letras, 2012–2014).',
    ],
    vector: {
      economia: -28,
      estado: 84,
      sociedade: 6,
      democracia: -22,
      nacionalismo: 85,
      internacional: 12,
      seguranca: 42,
      liberdades: -15,
      redistribuicao: 38,
      trabalho: 78,
      laicidade: 14,
      ecologia: -48,
    },
  },
  {
    id: 'joao-goulart',
    nome: 'João Goulart',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1919–1976 (Presidente: 1961–1964)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Trabalhista Brasileiro (PTB)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Trabalhismo / Reformismo Estrutural',
    biografiaResumida:
      'Ministro do Trabalho de Vargas, vice-presidente e presidente da República deposto pelo golpe civil-militar de 1964 ao propor as Reformas de Base.',
    principaisIdeias: [
      'Reformas de Base: agrária, urbana, bancária, tributária e educacional',
      'Extensão dos direitos trabalhistas ao campo e voto aos analfabetos',
      'Política Externa Independente e limitação da remessa de lucros ao exterior',
    ],
    modeloEconomico:
      'Economia mista trabalhista e desenvolvimentista com controle nacional de setores estratégicos e redistribuição de terras e renda.',
    visaoEstado:
      'Estado democrático reformista capaz de reduzir desigualdades estruturais e ampliar a cidadania política e social.',
    posicionamentoSocial:
      'Forte aproximação com sindicatos urbanos, ligas camponesas e movimento estudantil na defesa da inclusão social.',
    politicaExterna:
      'Não alinhamento pragmático, defesa da autodeterminação dos povos (inclusive oposição a sanções contra Cuba na OEA) e diversificação comercial.',
    principaisRealizacoes: [
      'Instituição do 13º salário (1962) e do Estatuto do Trabalhador Rural (1963)',
      'Criação da Eletrobras e do Plano Trienal de Desenvolvimento (com Celso Furtado)',
    ],
    contradicoesEMudancas:
      'Embora grande proprietário rural no Rio Grande do Sul, passou a defender a reforma agrária constitucional; oscilou entre a moderação parlamentar do Plano Trienal (1963) e a radicalização reformista do Comício da Central (1964).',
    fontesBibliograficas: [
      'Ferreira, Jorge. João Goulart: Uma Biografia (Civilização Brasileira, 2011).',
      'Bandeira, Moniz. O Governo João Goulart (Editora UNESP, 2010).',
    ],
    vector: {
      economia: -46,
      estado: 76,
      sociedade: 58,
      democracia: 72,
      nacionalismo: 64,
      internacional: 48,
      seguranca: -18,
      liberdades: 42,
      redistribuicao: 74,
      trabalho: 88,
      laicidade: 48,
      ecologia: 10,
    },
  },
  {
    id: 'leonel-brizola',
    nome: 'Leonel Brizola',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1922–2004 (Governador do RS e do RJ)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'PTB / Partido Democrático Trabalhista (PDT)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Brizolismo / Trabalhismo Democrático',
    biografiaResumida:
      'Líder trabalhista brasileiro que comandou a Campanha da Legalidade em 1961 para garantir a posse de João Goulart e, após o exílio, implementou os CIEPs no Rio de Janeiro.',
    principaisIdeias: [
      'Educação pública em tempo integral como instrumento central de transformação social',
      'Nacionalismo econômico e soberania sobre serviços públicos e subsolo',
      'Incondicional defesa da legalidade constitucional',
    ],
    modeloEconomico:
      'Trabalhismo nacional-desenvolvimentista, crítico das privatizações e das altas taxas de juros.',
    visaoEstado:
      'Estado republicano protetor dos serviços públicos universais, especialmente escola integral, transporte e energia.',
    posicionamentoSocial:
      'Foco prioritário na infância pobre, trabalhadores urbanos e população periférica, aliado à afirmação de direitos civis (como a nomeação histórica de lideranças negras no RJ).',
    politicaExterna:
      'Anti-imperialista, defensor da integração sul-americana e ligado à Internacional Socialista no pós-exílio.',
    principaisRealizacoes: [
      'Campanha da Legalidade (1961) e expansão da rede escolar no Rio Grande do Sul',
      'Construção de mais de 500 Centros Integrados de Educação Pública (CIEPs) no RJ em parceria com Darcy Ribeiro',
    ],
    contradicoesEMudancas:
      'Defendeu a resistência armada legalista em 1961 e articulou focos oposicionistas no exílio inicial, convertendo-se depois na principal voz eleitoral do trabalhismo constitucional nos anos 1980–1990.',
    fontesBibliograficas: [
      'Ferreira, Jorge. Leonel Brizola: Os Tempos de Luta (Civilização Brasileira, 2023).',
      'Ribeiro, Darcy. O Livro dos CIEPs (Bloch, 1986).',
    ],
    vector: {
      economia: -54,
      estado: 78,
      sociedade: 62,
      democracia: 78,
      nacionalismo: 82,
      internacional: 35,
      seguranca: -20,
      liberdades: 48,
      redistribuicao: 76,
      trabalho: 86,
      laicidade: 58,
      ecologia: 24,
    },
  },
  {
    id: 'lula',
    nome: 'Luiz Inácio Lula da Silva',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1945–presente (Presidente: 2003–2010 e 2023–presente)',
    era: 'Contemporâneo',
    partidoOuMovimento: 'Partido dos Trabalhadores (PT)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-desenvolvimentismo / Reformismo Lulista',
    biografiaResumida:
      'Ex-líder sindical metalúrgico do ABC Paulista, cofundador do PT e presidente do Brasil em múltiplos mandatos, combinando políticas de transferência de renda e valorização salarial com pactuação macroeconômica.',
    principaisIdeias: [
      'Combate à fome e redução da pobreza via transferência direta e aumento real do salário mínimo',
      'Expansão do acesso ao ensino superior público e técnico',
      'Multilateralismo Sul-Sul e protagonismo diplomático em fóruns como BRICS e G20',
    ],
    modeloEconomico:
      'Social-desenvolvimentismo pragmático: manteve tripé macroeconômico no primeiro mandato (câmbio flutuante, metas de inflação e superávit primário) aliado a crédito público (BNDES) e expansão do consumo interno.',
    visaoEstado:
      'Estado indutor de investimentos sociais e de infraestrutura, atuando por meio de coalizões amplas no Congresso Nacional.',
    posicionamentoSocial:
      'Políticas de inclusão racial (cotas), valorização salarial e ampliação de programas sociais universais e focalizados (Bolsa Família).',
    politicaExterna:
      'Diplomacia ativa e altiva voltada à integração sul-americana (Mercosul/UNASUL), parceria com o Sul Global e mediação multilateral.',
    principaisRealizacoes: [
      'Consolidação do Bolsa Família, ProUni, expansão de universidades federais e retirada do Brasil do Mapa da Fome (FAO, 2014)',
      'Política de valorização contínua do salário mínimo (2003–2010)',
    ],
    contradicoesEMudancas:
      'Passou do sindicalismo socialista combativo dos anos 1980 para o pacto de conciliação de classes e estabilidade fiscal da "Carta ao Povo Brasileiro" (2002), enfrentando crises políticas e processos judiciais posteriormente anulados pelo STF.',
    fontesBibliograficas: [
      'Singer, André. Os Sentidos do Lulismo (Companhia das Letras, 2012).',
      'Bourne, Richard. Lula of Brazil (University of California Press, 2008).',
    ],
    vector: {
      economia: -24,
      estado: 68,
      sociedade: 64,
      democracia: 78,
      nacionalismo: 36,
      internacional: 72,
      seguranca: -24,
      liberdades: 54,
      redistribuicao: 66,
      trabalho: 76,
      laicidade: 42,
      ecologia: 42,
    },
  },
  {
    id: 'dilma-rousseff',
    nome: 'Dilma Rousseff',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1947–presente (Presidente: 2011–2016)',
    era: 'Contemporâneo',
    partidoOuMovimento: 'PDT (1980–2000) / PT (2001–presente)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Desenvolvimentismo Estatal / Social-desenvolvimentismo',
    biografiaResumida:
      'Economista formada com raízes trabalhistas, ex-ministra de Minas e Energia e da Casa Civil e primeira mulher presidente do Brasil, sofrendo impeachment em 2016.',
    principaisIdeias: [
      'Reindustrialização via redução forçada de juros, desonerações e conteúdo nacional',
      'Planejamento estatal de infraestrutura logística e energética (PAC)',
      'Transparência administrativa e políticas de memória e verdade',
    ],
    modeloEconomico:
      'Nova Matriz Econômica (2011–2014) baseada em estímulo creditício via bancos públicos, desonerações setoriais e controle tarifário, seguida por ajuste fiscal ortodoxo em 2015.',
    visaoEstado:
      'Estado gestor e planejador com forte ênfase técnica na condução de infraestrutura e políticas sociais.',
    posicionamentoSocial:
      'Continuidade da agenda de inclusão social, expansão de creches, habitação (Minha Casa Minha Vida) e criação da Comissão Nacional da Verdade.',
    politicaExterna:
      'Defesa do BRICS (atualmente presidente do Novo Banco de Desenvolvimento) e crítica à vigilância digital global na ONU.',
    principaisRealizacoes: [
      'Criação da Comissão Nacional da Verdade e Lei de Acesso à Informação (2011)',
      'Expansão do Pronatec, Ciência sem Fronteiras e Lei das Cotas (2012)',
    ],
    contradicoesEMudancas:
      'Após vencer a eleição de 2014 criticando ajustes fiscais ortodoxos, adotou forte contenção fiscal em 2015 sob Joaquim Levy, perdendo apoio simultâneo de movimentos sociais e do Congresso.',
    fontesBibliograficas: [
      'Singer, André. O Lulismo em Crise (Companhia das Letras, 2018).',
      'Carvalho, Laura. Valsa Brasileira: Do Boom ao Caos Econômico (Todavia, 2018).',
    ],
    vector: {
      economia: -34,
      estado: 74,
      sociedade: 66,
      democracia: 74,
      nacionalismo: 45,
      internacional: 64,
      seguranca: -22,
      liberdades: 52,
      redistribuicao: 64,
      trabalho: 72,
      laicidade: 52,
      ecologia: 22,
    },
  },
  {
    id: 'juscelino-kubitschek',
    nome: 'Juscelino Kubitschek',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1902–1976 (Presidente: 1956–1961)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Social Democrático (PSD)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Desenvolvimentismo Associado',
    biografiaResumida:
      'Presidente brasileiro autor do Plano de Metas ("50 anos em 5") e construtor de Brasília, símbolo da fase mais acelerada da industrialização brasileira no século XX.',
    principaisIdeias: [
      'Industrialização acelerada baseada no tripé Estado, capital privado nacional e capital estrangeiro',
      'Integração territorial do interior brasileiro via rodovias e nova capital',
      'Estabilidade democrática negociada entre PSD e PTB',
    ],
    modeloEconomico:
      'Desenvolvimentismo associado: o Estado assumiu energia, rodovias e siderurgia enquanto atraiu multinacionais automobilísticas e de bens duráveis.',
    visaoEstado:
      'Estado planejador pragmático (Conselho de Desenvolvimento e BNDE), utilizando grupos executivos técnicos.',
    posicionamentoSocial:
      'Aposta no crescimento urbano e industrial como vetor de mobilidade social, embora mantendo pactos conservadores com estruturas agrárias tradicionais.',
    politicaExterna:
      'Lançou a Operação Pan-Americana (1958) propondo cooperação econômica dos EUA para o desenvolvimento latino-americano e rompeu negociações com o FMI em 1959.',
    principaisRealizacoes: [
      'Construção e inauguração de Brasília (1960)',
      'Implantação da indústria automobilística, naval e expansão hidrelétrica (Furnas, Três Marias)',
    ],
    contradicoesEMudancas:
      'Acelerou o crescimento do PIB (média ~8% a.a.) sob forte expansão monetária e endividamento externo, legando pressões inflacionárias aos sucessores; teve seus direitos políticos cassados pelo regime militar em 1964.',
    fontesBibliograficas: [
      'Bojunga, Cláudio. JK: O Artista do Impossível (Objetiva, 2001).',
      'Benevides, Maria Victoria. O Governo Kubitschek (Paz e Terra, 1976).',
    ],
    vector: {
      economia: 8,
      estado: 66,
      sociedade: 12,
      democracia: 72,
      nacionalismo: 34,
      internacional: 58,
      seguranca: 10,
      liberdades: 52,
      redistribuicao: 15,
      trabalho: 28,
      laicidade: 22,
      ecologia: -45,
    },
  },
  {
    id: 'fernando-henrique-cardoso',
    nome: 'Fernando Henrique Cardoso',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1931–presente (Presidente: 1995–2002)',
    era: 'Contemporâneo',
    partidoOuMovimento: 'PSDB',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-liberalismo / Reformismo Prático',
    biografiaResumida:
      'Sociólogo renomado da Teoria da Dependência, ministro da Fazenda do Plano Real e presidente do Brasil por dois mandatos marcados por estabilização monetária e reformas de mercado.',
    principaisIdeias: [
      'Estabilidade macroeconômica e controle rigoroso da inflação (Plano Real e Lei de Responsabilidade Fiscal)',
      'Reforma do Estado: privatização de estatais produtivas e criação de agências reguladoras',
      'Inserção competitiva do Brasil na globalização combinada com programas sociais focalizados',
    ],
    modeloEconomico:
      'Economia aberta regulada com privatizações (telecomunicações, mineração, bancos estaduais), câmbio administrado inicialmente e depois tripé macroeconômico.',
    visaoEstado:
      'Transição do Estado empresário-produtor para o Estado regulador e promotor de políticas sociais básicas.',
    posicionamentoSocial:
      'Universalização do ensino fundamental, combate ao HIV/AIDS com quebra de patentes e criação de programas iniciais de transferência de renda (Bolsa Escola).',
    politicaExterna:
      'Adesão ao Tratado de Não Proliferação Nuclear, fortalecimento do Mercosul e diplomacia de integração global multilateral.',
    principaisRealizacoes: [
      'Estabilização da moeda com o Plano Real (1994) e promulgação da Lei de Responsabilidade Fiscal (2000)',
      'Criação da ANVISA, agências reguladoras e programa de medicamentos genéricos',
    ],
    contradicoesEMudancas:
      'Na juventude acadêmica foi crítico marxista-dependentista das burguesias associadas ao capital internacional; no governo, liderou ampla abertura comercial e privatizações em coalizão com partidos conservadores (PFL).',
    fontesBibliograficas: [
      'Cardoso, Fernando Henrique. A Arte da Política: A História que Vivi (Civilização Brasileira, 2006).',
      'Sallum Jr., Brasilio. O Brasil sob Cardoso (Tempo Social, 1999).',
    ],
    vector: {
      economia: 48,
      estado: 10,
      sociedade: 56,
      democracia: 84,
      nacionalismo: -22,
      internacional: 78,
      seguranca: 10,
      liberdades: 72,
      redistribuicao: 12,
      trabalho: -28,
      laicidade: 68,
      ecologia: 45,
    },
  },
  {
    id: 'darcy-ribeiro',
    nome: 'Darcy Ribeiro',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1922–1997 (Antropólogo, Educador e Senador)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'PTB / PDT',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Trabalhismo / Nacional-Desenvolvimentismo Cultural',
    biografiaResumida:
      'Antropólogo, indigenista, educador e formulador de políticas públicas, fundador da UnB e idealizador dos CIEPs e da LDB de 1996.',
    principaisIdeias: [
      'A crise educacional brasileira não é crise, é um projeto histórico das elites',
      'Universidade pública crítica integrada ao desenvolvimento nacional autônomo',
      'Valorização das matrizes indígenas, africanas e populares na formação do povo brasileiro',
    ],
    modeloEconomico:
      'Desenvolvimentismo soberano com prioridade orçamentária absoluta à ciência, tecnologia e educação pública universal.',
    visaoEstado:
      'Estado republicano civilizador voltado à erradicação da exclusão educacional e étnico-racial.',
    posicionamentoSocial:
      'Defensor histórico dos povos indígenas (criação do Parque do Xingu), da escola pública em tempo integral e da igualdade racial.',
    politicaExterna:
      'Integração latino-americana ("Pátria Grande") e intercâmbio universitário autônomo no Terceiro Mundo.',
    principaisRealizacoes: [
      'Fundação da Universidade de Brasília (UnB, 1961) e do Memorial da América Latina',
      'Relatoria da Lei de Diretrizes e Bases da Educação Nacional (LDB, 1996) e projeto dos CIEPs',
    ],
    contradicoesEMudancas:
      'Teve participação em governos trabalhistas em momentos de agudo conflito institucional (1961–1964) e manteve atuação heterodoxa e polêmica entre academia e política partidária.',
    fontesBibliograficas: [
      'Ribeiro, Darcy. O Povo Brasileiro (Companhia das Letras, 1995).',
      'Bomeny, Helena. Darcy Ribeiro: Sociologia de um Indisciplinado (UFMG, 2001).',
    ],
    vector: {
      economia: -52,
      estado: 80,
      sociedade: 82,
      democracia: 80,
      nacionalismo: 68,
      internacional: 58,
      seguranca: -40,
      liberdades: 64,
      redistribuicao: 76,
      trabalho: 74,
      laicidade: 74,
      ecologia: 62,
    },
  },
  {
    id: 'celso-furtado',
    nome: 'Celso Furtado',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1920–2004 (Economista, Criador da SUDENE e Ministro)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'CEPAL / Estruturalismo Latino-Americano',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Estruturalismo Desenvolvimentista',
    biografiaResumida:
      'Um dos mais influentes economistas do século XX, formulador do pensamento estruturalista sobre subdesenvolvimento, criador da SUDENE e Ministro do Planejamento no governo João Goulart.',
    principaisIdeias: [
      'O subdesenvolvimento não é uma etapa prévia ao desenvolvimento, mas um processo histórico próprio da inserção periférica',
      'Superação da heterogeneidade estrutural mediante industrialização, reforma agrária e integração regional',
      'Cultura e criatividade endógena como núcleos do projeto nacional',
    ],
    modeloEconomico:
      'Planejamento econômico democrático, economia mista com bancos de fomento e combate à concentração regional de renda.',
    visaoEstado:
      'Estado planejador tecnicamente qualificado capaz de orientar investimentos produtivos e redistribuir ganhos de produtividade.',
    posicionamentoSocial:
      'Crítico severo da concentração fundiária e de renda no Brasil; via o mercado interno ampliado como condição do desenvolvimento sustentável.',
    politicaExterna:
      'Autonomia intelectual latino-americana diante dos centros financeiros internacionais e reforma das regras do comércio global.',
    principaisRealizacoes: [
      'Criação da Superintendência do Desenvolvimento do Nordeste (SUDENE, 1959)',
      'Autor de "Formação Econômica do Brasil" (1959) e Ministro da Cultura na redemocratização (1986–1988)',
    ],
    contradicoesEMudancas:
      'Inicialmente otimista quanto ao potencial modernizador da industrialização nos anos 1950, tornou-se profundamente crítico nos anos 1970–1990 da "modernização conservadora" que industrializou sem reduzir desigualdades.',
    fontesBibliograficas: [
      'Furtado, Celso. Formação Econômica do Brasil (1959).',
      'Furtado, Celso. O Mito do Desenvolvimento Econômico (1974).',
    ],
    vector: {
      economia: -36,
      estado: 78,
      sociedade: 62,
      democracia: 82,
      nacionalismo: 68,
      internacional: 62,
      seguranca: -25,
      liberdades: 62,
      redistribuicao: 68,
      trabalho: 62,
      laicidade: 58,
      ecologia: 32,
    },
  },
  {
    id: 'roberto-campos',
    nome: 'Roberto Campos',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1917–2001 (Economista, Diplomata, Ministro e Senador)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'UDN / ARENA / PDS / PPB',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Liberalismo Econômico / Pragmatismo Monetarista',
    biografiaResumida:
      'Diplomata e economista que participou da criação do BNDE nos anos 1950, foi Ministro do Planejamento no governo Castelo Branco (PAEG) e tornou-se o principal defensor parlamentar das privatizações e abertura comercial no Brasil.',
    principaisIdeias: [
      'Combate prioritário à inflação, disciplina monetária e atração de capital estrangeiro',
      'Crítica ao monopólio estatal do petróleo, das telecomunicações e ao nacionalismo econômico',
      'Desregulamentação trabalhista e privatização como motores de eficiência',
    ],
    modeloEconomico:
      'Economia de mercado aberta ao investimento externo, com reformas tributária, bancária e criação do Banco Central e FGTS (no PAEG).',
    visaoEstado:
      'Nos anos 1950 aceitou o planejamento estatal pragmático em infraestrutura; a partir dos anos 1960–1990 tornou-se defensor enfático da redução drástica do Estado empresário.',
    posicionamentoSocial:
      'Conservadorismo institucional moderado com foco em crescimento via mercado como solução para a pobreza.',
    politicaExterna:
      'Alinhamento estratégico com o Ocidente e os Estados Unidos durante a Guerra Fria e abertura comercial unilateral.',
    principaisRealizacoes: [
      'Estruturação do Banco Central, da correção monetária e do FGTS (PAEG, 1964–1967)',
      'Participação na Conferência de Bretton Woods (1944) e criação do BNDE (1952)',
    ],
    contradicoesEMudancas:
      'Ajudou a formular o Plano de Metas desenvolvimentista e o BNDE nos anos 1950, mas depois se converteu no crítico mais feroz do estatismo brasileiro; defendeu o liberalismo econômico enquanto serviu como ministro de um regime militar autoritário (1964–1967).',
    fontesBibliograficas: [
      'Campos, Roberto. A Lanterna na Popa: Memórias (Topbooks, 1994).',
      'Perez, Reginaldo. O Pensamento Político de Roberto Campos (FGV, 1999).',
    ],
    vector: {
      economia: 76,
      estado: -48,
      sociedade: -18,
      democracia: 8,
      nacionalismo: -58,
      internacional: 32,
      seguranca: 45,
      liberdades: 52,
      redistribuicao: -74,
      trabalho: -78,
      laicidade: 34,
      ecologia: -42,
    },
  },
  {
    id: 'tancredo-neves',
    nome: 'Tancredo Neves',
    pais: 'Brasil',
    regiao: 'Brasil',
    periodoHistorico: '1910–1985 (Ministro, Governador e Presidente Eleito)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'PSD / MDB / PP / PMDB',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Centro Democrático / Constitucionalismo Conciliador',
    biografiaResumida:
      'Estadista mineiro que foi ministro da Justiça de Vargas, primeiro-ministro no parlamentarismo de 1961 e líder da transição negociada que encerrou o regime militar em 1985.',
    principaisIdeias: [
      'Transição democrática pactuada sem rupturas violentas ("Nova República")',
      'Equilíbrio fiscal associado à recuperação gradual da dívida social',
      'Centralidade do Congresso Nacional e do pacto federativo',
    ],
    modeloEconomico:
      'Economia mista moderada com responsabilidade fiscal e preservação de empresas estratégicas eficientes.',
    visaoEstado:
      'Estado constitucional parlamentar ou presidencialista moderado por amplo consenso partidário.',
    posicionamentoSocial:
      'Moderado e gradualista, articulando forças de centro-direita e centro-esquerda em torno de direitos sociais constitucionais.',
    politicaExterna:
      'Retomada do prestígio democrático do Brasil e cooperação interamericana.',
    principaisRealizacoes: [
      'Articulação da Aliança Democrática e vitória no Colégio Eleitoral de 1985',
      'Preservação da estabilidade institucional durante a crise de 1961 como Primeiro-Ministro',
    ],
    contradicoesEMudancas:
      'Foi fiel aliado de Vargas e depois crítico da polarização pré-1964; buscou conciliação inclusive com setores dissidentes do regime militar (Frente Liberal) para assegurar a redemocratização.',
    fontesBibliograficas: [
      'Couto, Ronaldo Costa. Tancredo Vivo (Record, 1995).',
      'Carvalho, José Murilo de. Cidadania no Brasil (Civilização Brasileira, 2001).',
    ],
    vector: {
      economia: 18,
      estado: 25,
      sociedade: 10,
      democracia: 82,
      nacionalismo: 20,
      internacional: 55,
      seguranca: 15,
      liberdades: 62,
      redistribuicao: 12,
      trabalho: 18,
      laicidade: 16,
      ecologia: 12,
    },
  },

  // AMÉRICA LATINA
  {
    id: 'juan-domingo-peron',
    nome: 'Juan Domingo Perón',
    pais: 'Argentina',
    regiao: 'América Latina',
    periodoHistorico: '1895–1974 (Presidente: 1946–1955 e 1973–1974)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Justicialista (Peronismo)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Justicialismo / Nacionalismo Popular',
    biografiaResumida:
      'Militar e três vezes presidente da Argentina, fundador do peronismo ("Terceira Posição"), que combinou sindicalismo forte, industrialização nacionalista e justiça social com liderança personalista.',
    principaisIdeias: [
      'Três bandeiras do Justicialismo: soberania política, independência econômica e justiça social',
      'Comunidade Organizada: pacto corporativo entre Estado, trabalho sindicalizado e empresariado nacional',
      'Terceira Posição geopolítica equidistante dos EUA e da URSS',
    ],
    modeloEconomico:
      'Nacionalismo industrial com estatização de ferrovias e serviços públicos, proteção tarifária e elevação expressiva da participação dos salários na renda nacional.',
    visaoEstado:
      'Estado altamente interventor, árbitro dos conflitos trabalhistas e mobilizador das massas urbanas.',
    posicionamentoSocial:
      'Forte ampliação dos direitos trabalhistas, férias pagas, previdência e voto feminino (impulsionado por Eva Perón), embora sob estrutura política centralizada e controle da imprensa opositora.',
    politicaExterna:
      'Terceira Posição não alinhada na Guerra Fria e tentativa de integração regional sul-americana (ABC: Argentina, Brasil, Chile).',
    principaisRealizacoes: [
      'Constitucionalização dos direitos sociais e trabalhistas na Reforma de 1949',
      'Inclusão massiva da classe trabalhadora argentina no consumo e na vida política',
    ],
    contradicoesEMudancas:
      'Seu movimento abrigou simultaneamente alas de esquerda revolucionária e setores sindicais ortodoxos e de direita nacionalista, gerando violentos conflitos internos em seu retorno ao poder em 1973–1974.',
    fontesBibliograficas: [
      'James, Daniel. Resistance and Integration: Peronism and the Argentine Working Class (Cambridge, 1988).',
      'Potash, Robert. The Army and Politics in Argentina (Stanford, 1980).',
    ],
    vector: {
      economia: -38,
      estado: 84,
      sociedade: -5,
      democracia: -28,
      nacionalismo: 88,
      internacional: -10,
      seguranca: 52,
      liberdades: -32,
      redistribuicao: 52,
      trabalho: 82,
      laicidade: -20,
      ecologia: -38,
    },
  },
  {
    id: 'eva-peron',
    nome: 'Eva Perón',
    pais: 'Argentina',
    regiao: 'América Latina',
    periodoHistorico: '1919–1952 (Primeira-Dama e Líder Política)',
    era: 'Início do Século XX',
    partidoOuMovimento: 'Partido Peronista Feminino / CGT',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Justicialismo Social / Trabalhismo Popular',
    biografiaResumida:
      'Atriz de origem humilde que se tornou figura central do peronismo, liderando a conquista do voto feminino na Argentina e a assistência social em larga escala via Fundação Eva Perón.',
    principaisIdeias: [
      'Direitos políticos plenos das mulheres e organização feminina autônoma no Partido Peronista Feminino',
      'Justiça social direta como reparação aos "descamisados"',
      'Vínculo orgânico entre liderança popular e movimento sindical',
    ],
    modeloEconomico:
      'Redistribuição agressiva de renda em favor do trabalho, habitação operária, hospitais públicos e proteção à maternidade.',
    visaoEstado:
      'Estado protetor ativo que atua em sintonia direta com sindicatos e organizações assistenciais populares.',
    posicionamentoSocial:
      'Protagonismo feminino na esfera eleitoral argentina e combate à marginalidade infantil e da velhice, dentro de uma retórica lealista ao peronismo.',
    politicaExterna:
      'Giro diplomático ("Turnê do Arco-Íris", 1947) para projetar o modelo social argentino na Europa do pós-guerra.',
    principaisRealizacoes: [
      'Aprovação da Lei do Sufrágio Feminino (1947) e eleição de dezenas de parlamentares mulheres em 1951',
      'Construção de hospitais, escolas, lares de idosos e cidades infantis pela Fundação Eva Perón',
    ],
    contradicoesEMudancas:
      'Conquistou direitos históricos para mulheres e trabalhadores enquanto contribuiu para o fechamento de espaços opositores e dependência da assistência social de caráter personalista.',
    fontesBibliograficas: [
      'Navarro, Marysa. Evita (Edhasa, 2005).',
      'Fraser, Nicholas; Navarro, Marysa. Eva Perón (Norton, 1996).',
    ],
    vector: {
      economia: -48,
      estado: 80,
      sociedade: 28,
      democracia: -15,
      nacionalismo: 75,
      internacional: 10,
      seguranca: 25,
      liberdades: -12,
      redistribuicao: 68,
      trabalho: 80,
      laicidade: -12,
      ecologia: -20,
    },
  },
  {
    id: 'salvador-allende',
    nome: 'Salvador Allende',
    pais: 'Chile',
    regiao: 'América Latina',
    periodoHistorico: '1908–1973 (Presidente: 1970–1973)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Socialista do Chile / Unidade Popular',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Socialismo Democrático ("Via Chilena ao Socialismo")',
    biografiaResumida:
      'Médico sanitarista e senador que se tornou o primeiro presidente marxista eleito democraticamente nas Américas, tentando construir o socialismo dentro das instituições constitucionais chilenas até o golpe de 1973.',
    principaisIdeias: [
      'Transição pacífica e constitucional ao socialismo sem supressão de eleições nem da liberdade de imprensa',
      'Nacionalização integral das grandes minas de cobre e aprofundamento da reforma agrária',
      'Saúde e nutrição infantil como direitos universais (programa do meio litro de leite)',
    ],
    modeloEconomico:
      'Área de Propriedade Social (estatização de bancos, mineração e grandes monopólios) coexistindo com área mista e pequena/média propriedade privada.',
    visaoEstado:
      'Estado democrático de direito ampliado pela participação dos trabalhadores e comitês populares de abastecimento.',
    posicionamentoSocial:
      'Forte agenda igualitária de saúde pública, alfabetização, habitação e direitos trabalhistas.',
    politicaExterna:
      'Independência diante dos Estados Unidos, reatamento diplomático com Cuba e defesa da soberania dos países em desenvolvimento na ONU (1972).',
    principaisRealizacoes: [
      'Nacionalização do cobre aprovada por unanimidade no Congresso chileno (1971)',
      'Redução expressiva da mortalidade infantil e ampliação do ensino técnico e universitário gratuito',
    ],
    contradicoesEMudancas:
      'Enfrentou intensa polarização interna entre a ala moderada da Unidade Popular e setores que exigiam aceleração revolucionária extraparlamentar, além de boicote econômico interno/externo e hiperinflação em 1973.',
    fontesBibliograficas: [
      'Winn, Peter. Weavers of Revolution (Oxford University Press, 1986).',
      'Amorós, Mario. Allende: La Biografía (Ediciones B, 2013).',
    ],
    vector: {
      economia: -76,
      estado: 78,
      sociedade: 76,
      democracia: 82,
      nacionalismo: 68,
      internacional: 58,
      seguranca: -42,
      liberdades: 54,
      redistribuicao: 86,
      trabalho: 88,
      laicidade: 72,
      ecologia: 24,
    },
  },
  {
    id: 'jose-mujica',
    nome: 'José Mujica',
    pais: 'Uruguai',
    regiao: 'América Latina',
    periodoHistorico: '1935–2025 (Presidente: 2010–2015)',
    era: 'Contemporâneo',
    partidoOuMovimento: 'Frente Ampla / Movimento de Participação Popular',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Esquerda Democrática / Social-democracia Progressista',
    biografiaResumida:
      'Ex-guerrilheiro tupamaro que passou 14 anos preso durante a ditadura uruguaia e, na democracia, tornou-se presidente do Uruguai reconhecido pela sobriedade pessoal e reformas sociais avançadas.',
    principaisIdeias: [
      'Crítica filosófica ao consumismo e defesa da sobriedade republicana no poder',
      'Estabilidade econômica combinada com ampliação de liberdades civis e direitos humanos',
      'Transição energética limpa (matriz eólica) e investimento em educação tecnológica (Plano Ceibal)',
    ],
    modeloEconomico:
      'Economia mista aberta, preservando disciplina fiscal, atração de investimentos produtivos, negociação salarial coletiva e forte proteção social.',
    visaoEstado:
      'Estado laico, eficiente e redistributivo, sem rupturas com o mercado exportador agropecuário.',
    posicionamentoSocial:
      'Pioneirismo global em direitos civis: legalização do casamento igualitário, descriminalização do aborto e regulação estatal do mercado de cannabis.',
    politicaExterna:
      'Integração sul-americana (Mercosul), abertura comercial pragmática e defesa da paz multilateral.',
    principaisRealizacoes: [
      'Transformação da matriz elétrica uruguaia para mais de 90% de fontes renováveis',
      'Redução acentuada da pobreza e ampliação de liberdades individuais em marco democrático sólido',
    ],
    contradicoesEMudancas:
      'Rompeu com a luta armada dos anos 1960–1970 para tornar-se defensor convicto da democracia representativa, da negociação institucional e da estabilidade jurídica para investimentos privados.',
    fontesBibliograficas: [
      'Danza, Andrés; Tulbovitz, Ernesto. Uma Ovelha Negra no Poder (2015).',
      'PNUD / Banco Mundial. Relatórios sobre o Uruguai (2010–2016).',
    ],
    vector: {
      economia: -22,
      estado: 54,
      sociedade: 86,
      democracia: 90,
      nacionalismo: 18,
      internacional: 76,
      seguranca: -48,
      liberdades: 82,
      redistribuicao: 64,
      trabalho: 72,
      laicidade: 86,
      ecologia: 78,
    },
  },
  {
    id: 'lazaro-cardenas',
    nome: 'Lázaro Cárdenas',
    pais: 'México',
    regiao: 'América Latina',
    periodoHistorico: '1895–1970 (Presidente: 1934–1940)',
    era: 'Início do Século XX',
    partidoOuMovimento: 'PRM (precursor do PRI)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Nacionalismo Revolucionário / Cardenismo',
    biografiaResumida:
      'Presidente mexicano que consolidou os ideais sociais da Revolução Mexicana por meio da maior reforma agrária da história do país e da expropriação da indústria petrolífera em 1938.',
    principaisIdeias: [
      'Soberania nacional absoluta sobre petróleo, ferrovias e subsolo',
      'Reforma agrária coletiva (ejidos) e organização autônoma de camponeses e operários',
      'Educação pública laica, técnica e rural',
    ],
    modeloEconomico:
      'Nacionalismo econômico com empresas estatais estratégicas (PEMEX), crédito agrário público e industrialização substitutiva.',
    visaoEstado:
      'Estado mobilizador pós-revolucionário estruturado em setores populares (operário, camponês, militar e popular).',
    posicionamentoSocial:
      'Inclusão de comunidades indígenas e camponesas na distribuição de terras e asilo político a refugiados republicanos espanhóis e a Leon Trotsky.',
    politicaExterna:
      'Firme resistência diplomática às pressões de potências petrolíferas (EUA e Reino Unido) e apoio à República Espanhola contra o fascismo.',
    principaisRealizacoes: [
      'Expropriação petrolífera de 18 de março de 1938 e criação da PEMEX',
      'Distribuição de cerca de 18 milhões de hectares de terra a camponeses via sistema de ejidos',
    ],
    contradicoesEMudancas:
      'Ao institucionalizar os setores sociais dentro do partido oficial (PRM), fortaleceu simultaneamente os trabalhadores e o sistema de partido hegemônico que dominaria o México por décadas.',
    fontesBibliograficas: [
      'Knight, Alan. The Mexican Revolution / Cardenismo (Oxford, 1994).',
      'Krauze, Enrique. Biografía del Poder: Lázaro Cárdenas (1987).',
    ],
    vector: {
      economia: -52,
      estado: 82,
      sociedade: 52,
      democracia: 15,
      nacionalismo: 88,
      internacional: 25,
      seguranca: 25,
      liberdades: 18,
      redistribuicao: 68,
      trabalho: 74,
      laicidade: 72,
      ecologia: -22,
    },
  },
  {
    id: 'fidel-castro',
    nome: 'Fidel Castro',
    pais: 'Cuba',
    regiao: 'América Latina',
    periodoHistorico: '1926–2016 (Líder cubano: 1959–2008)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Movimento 26 de Julho / Partido Comunista de Cuba',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Marxismo-Leninismo / Nacionalismo Anti-Imperialista',
    biografiaResumida:
      'Líder da Revolução Cubana de 1959 que derrubou a ditadura de Fulgencio Batista, nacionalizou a economia e instaurou um Estado socialista de partido único em Cuba.',
    principaisIdeias: [
      'Soberania nacional intransigente frente aos Estados Unidos e anti-imperialismo tricontinental',
      'Universalização gratuita de saúde pública, alfabetização e educação superior',
      'Planificação estatal centralizada da economia e liderança do partido único',
    ],
    modeloEconomico:
      'Economia centralmente planificada e estatizada, com abertura limitada ao turismo e investimentos mistos após o colapso soviético nos anos 1990.',
    visaoEstado:
      'Estado socialista centralizado sob partido único (PCC), com controle estatal dos meios de comunicação e mobilização comunitária.',
    posicionamentoSocial:
      'Notável avanço nos indicadores de alfabetização, medicina preventiva e igualdade material básica, combinado com restrições severas às liberdades políticas e perseguição inicial a dissidentes e minorias na década de 1960.',
    politicaExterna:
      'Aliança estratégica com a URSS durante a Guerra Fria e envio de missões médicas e militares internacionalistas à África e América Latina.',
    principaisRealizacoes: [
      'Campanha Nacional de Alfabetização (1961) e sistema universal de saúde e biotecnologia pública',
      'Reforma agrária e eliminação do domínio econômico estrangeiro sobre terras e serviços cubanos',
    ],
    contradicoesEMudancas:
      'Na década de 1950 apresentou um programa nacional-democrático e constitucionalista moderado (A História me Absolverá, 1953), declarando o caráter marxista-leninista da revolução apenas em 1961; reconheceu tardiamente erros na discriminação contra homossexuais nos anos 1960.',
    fontesBibliograficas: [
      'Gott, Richard. Cuba: A New History (Yale University Press, 2004).',
      'Ramonet, Ignacio. Fidel Castro: Biografia a Duas Vozes (Boitempo, 2006).',
    ],
    vector: {
      economia: -92,
      estado: 94,
      sociedade: 25,
      democracia: -84,
      nacionalismo: 82,
      internacional: 15,
      seguranca: 74,
      liberdades: -76,
      redistribuicao: 88,
      trabalho: 72,
      laicidade: 84,
      ecologia: -10,
    },
  },

  // EUROPA E AMÉRICA DO NORTE
  {
    id: 'franklin-roosevelt',
    nome: 'Franklin D. Roosevelt',
    pais: 'Estados Unidos',
    regiao: 'América do Norte',
    periodoHistorico: '1882–1945 (Presidente: 1933–1945)',
    era: 'Início do Século XX',
    partidoOuMovimento: 'Partido Democrata (Coalizão do New Deal)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Liberalismo Social / Reformismo Keynesiano',
    biografiaResumida:
      'Único presidente eleito quatro vezes nos Estados Unidos, arquiteto do New Deal para enfrentar a Grande Depressão e líder estratégico dos Aliados na Segunda Guerra Mundial.',
    principaisIdeias: [
      'Intervenção estatal ativa para recuperar emprego, renda e confiança bancária em crises sistêmicas',
      'Regulação financeira rigorosa (Glass-Steagall) e proteção aos sindicatos (Wagner Act)',
      'As Quatro Liberdades e a criação de uma ordem multilateral pós-guerra (ONU)',
    ],
    modeloEconomico:
      'Capitalismo regulado com investimento público massivo em infraestrutura (TVA, WPA), seguridade social (Social Security Act) e tributação progressiva sobre altas rendas.',
    visaoEstado:
      'Estado federal ativo e protetor das liberdades materiais ("liberdade frente à necessidade").',
    posicionamentoSocial:
      'Avanço dos direitos trabalhistas e seguridade social, embora fazendo concessões políticas à ala segregacionista do Partido Democrata no Sul para aprovar leis.',
    politicaExterna:
      'Transição do isolacionismo para a Política da Boa Vizinhança na América Latina e liderança na fundação da ONU e de Bretton Woods.',
    principaisRealizacoes: [
      'Criação da Previdência Social americana (1935), salário mínimo federal e regulação de Wall Street (SEC)',
      'Vitória aliada na Segunda Guerra Mundial e arquitetura institucional da ONU',
    ],
    contradicoesEMudancas:
      'Defensor das liberdades democráticas globais, assinou contudo a Ordem Executiva 9066 determinando o internamento de nipo-americanos durante a guerra e evitou confrontar diretamente as leis Jim Crow no Sul.',
    fontesBibliograficas: [
      'Leuchtenburg, William E. Franklin D. Roosevelt and the New Deal (1963).',
      'Kennedy, David M. Freedom from Fear (Oxford University Press, 1999).',
    ],
    vector: {
      economia: -12,
      estado: 66,
      sociedade: 45,
      democracia: 76,
      nacionalismo: 22,
      internacional: 72,
      seguranca: 35,
      liberdades: 52,
      redistribuicao: 62,
      trabalho: 72,
      laicidade: 42,
      ecologia: 28,
    },
  },
  {
    id: 'clement-attlee',
    nome: 'Clement Attlee',
    pais: 'Reino Unido',
    regiao: 'Europa',
    periodoHistorico: '1883–1967 (Primeiro-Ministro: 1945–1951)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Trabalhista (Labour Party)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Trabalhismo / Socialismo Democrático Britânico',
    biografiaResumida:
      'Primeiro-ministro trabalhista que derrotou Winston Churchill em 1945 e construiu o Estado de bem-estar social britânico e o Serviço Nacional de Saúde (NHS).',
    principaisIdeias: [
      'Saúde e seguridade social universais "do berço ao túmulo" (Relatório Beveridge)',
      'Nacionalização democrática de monopólios naturais e indústrias de base (carvão, aço, ferrovias, Banco da Inglaterra)',
      'Descolonização negociada do Império Britânico (independência da Índia em 1947)',
    ],
    modeloEconomico:
      'Economia mista keynesiana-trabalhista com pleno emprego, forte setor público em infraestrutura e tributação progressiva.',
    visaoEstado:
      'Estado de bem-estar parlamentar altamente legítimo, capaz de remodelar o pacto social sem romper com a democracia liberal.',
    posicionamentoSocial:
      'Igualdade de acesso a saúde, habitação pública e ensino secundário gratuito.',
    politicaExterna:
      'Iniciou a descolonização da Índia e Birmânia enquanto ajudou a fundar a OTAN no início da Guerra Fria.',
    principaisRealizacoes: [
      'Criação do National Health Service (NHS, 1948) e do sistema de seguridade social moderno',
      'Independência da Índia e Paquistão (1947)',
    ],
    contradicoesEMudancas:
      'Combinou reformas socialistas domésticas profundas e descolonização asiática com firme alinhamento militar ocidental e desenvolvimento secreto da bomba atômica britânica.',
    fontesBibliograficas: [
      'Bew, John. Citizen Clem: A Biography of Attlee (Riverrun, 2016).',
      'Morgan, Kenneth O. Labour in Power 1945–1951 (Oxford, 1984).',
    ],
    vector: {
      economia: -48,
      estado: 76,
      sociedade: 62,
      democracia: 88,
      nacionalismo: 18,
      internacional: 64,
      seguranca: 18,
      liberdades: 64,
      redistribuicao: 76,
      trabalho: 86,
      laicidade: 54,
      ecologia: 12,
    },
  },
  {
    id: 'tony-blair',
    nome: 'Tony Blair',
    pais: 'Reino Unido',
    regiao: 'Europa',
    periodoHistorico: '1953–presente (Primeiro-Ministro: 1997–2007)',
    era: 'Contemporâneo',
    partidoOuMovimento: 'New Labour (Partido Trabalhista)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Terceira Via / Social-liberalismo',
    biografiaResumida:
      'Líder que reformou o Partido Trabalhista britânico (New Labour), aceitando privatizações e mercados flexíveis combinados com investimentos públicos em saúde, educação e salário mínimo.',
    principaisIdeias: [
      'Terceira Via (formulada com Anthony Giddens): combinar dinamismo de mercado com inclusão social',
      'Independência do Banco da Inglaterra e disciplina fiscal',
      'Devolução de autonomia parlamentar à Escócia e País de Gales e paz na Irlanda do Norte',
    ],
    modeloEconomico:
      'Economia de mercado competitiva e aberta à praça financeira de Londres, com salário mínimo nacional e parcerias público-privadas.',
    visaoEstado:
      'Estado capacitador e regulador, focado em metas de desempenho nos serviços públicos.',
    posicionamentoSocial:
      'Forte ampliação de direitos civis (união civil igualitária, Lei de Direitos Humanos) e combate à pobreza infantil.',
    politicaExterna:
      'Multilateralismo europeu combinado com alinhamento próximo aos EUA, incluindo a polêmica participação na Guerra do Iraque (2003).',
    principaisRealizacoes: [
      'Acordo da Sexta-Feira Santa na Irlanda do Norte (1998) e criação do salário mínimo nacional britânico',
      'Reconstrução orçamentária do NHS e expansão do acesso universitário',
    ],
    contradicoesEMudancas:
      'Rompeu com a histórica Cláusula IV socialista do trabalhismo britânico para conquistar o centro eleitoral; sua aprovação popular doméstica foi severamente abalada pela invasão do Iraque em 2003.',
    fontesBibliograficas: [
      'Giddens, Anthony. A Terceira Via (Record, 1999).',
      'Seldon, Anthony. Blair (Free Press, 2004).',
    ],
    vector: {
      economia: 36,
      estado: 22,
      sociedade: 70,
      democracia: 82,
      nacionalismo: -28,
      internacional: 62,
      seguranca: 38,
      liberdades: 66,
      redistribuicao: 18,
      trabalho: -12,
      laicidade: 62,
      ecologia: 48,
    },
  },
  {
    id: 'olof-palme',
    nome: 'Olof Palme',
    pais: 'Suécia',
    regiao: 'Europa',
    periodoHistorico: '1927–1986 (Primeiro-Ministro: 1969–1976 e 1982–1986)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Social-Democrata Sueco (SAP)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-democracia Nórdica',
    biografiaResumida:
      'Principal rosto internacional da social-democracia sueca no pós-guerra, defensor radical da igualdade social, dos direitos trabalhistas, da igualdade de gênero e do não alinhamento anticolonial.',
    principaisIdeias: [
      'Estado de bem-estar universal financiado por alta tributação progressiva sem estatizar toda a indústria',
      'Democracia econômica gradual (fundos salariais) e coesão sindical',
      'Política externa independente: crítica simultânea à Guerra do Vietnã, ao apartheid e às invasões soviéticas',
    ],
    modeloEconomico:
      'Economia capitalista altamente competitiva e exportadora associada a serviços públicos universais e negociação salarial centralizada.',
    visaoEstado:
      'Estado social sólido, transparente e profundamente democrático ("A Casa do Povo").',
    posicionamentoSocial:
      'Pioneirismo em licença parental compartilhada, igualdade de gênero no mercado de trabalho e educação gratuita universal.',
    politicaExterna:
      'Neutralidade ativa, desarmamento nuclear, cooperação maciça com o Terceiro Mundo e oposição frontal ao apartheid sul-africano.',
    principaisRealizacoes: [
      'Expansão das licenças parentais, creches públicas e participação trabalhista nos conselhos empresariais',
      'Projeção da Suécia como mediadora de paz da ONU e referência global de desenvolvimento humano',
    ],
    contradicoesEMudancas:
      'Enfrentou tensões internas entre manter o pacto histórico com o grande capital exportador sueco e a tentativa dos anos 1970–1980 de criar os "Fundos dos Trabalhadores" (Meidner Plan), recuando diante da reação empresarial.',
    fontesBibliograficas: [
      'Berggren, Henrik. Underbara dagar framför oss: En biografi över Olof Palme (2010).',
      'Esping-Andersen, Gøsta. Politics Against Markets (Princeton, 1985).',
    ],
    vector: {
      economia: -34,
      estado: 72,
      sociedade: 84,
      democracia: 92,
      nacionalismo: 5,
      internacional: 88,
      seguranca: -46,
      liberdades: 72,
      redistribuicao: 80,
      trabalho: 86,
      laicidade: 82,
      ecologia: 68,
    },
  },
  {
    id: 'tage-erlander',
    nome: 'Tage Erlander',
    pais: 'Suécia',
    regiao: 'Europa',
    periodoHistorico: '1901–1985 (Primeiro-Ministro: 1946–1969)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Social-Democrata Sueco (SAP)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-democracia Clássica (Modelo Rehn-Meidner)',
    biografiaResumida:
      'Primeiro-ministro democrático com maior longevidade contínua do século XX (23 anos), consolidador do modelo socioeconômico sueco do pós-guerra.',
    principaisIdeias: [
      'Modelo Rehn-Meidner: salários solidários que forçam empresas ineficientes a modernizar e Estado que requalifica trabalhadores',
      'Política da "Sociedade Forte" (Det starka samhället): quanto mais cresce a economia, mais serviços universais devem existir',
      'Pacto pacífico e estável entre capital industrial privado e sindicatos (LO)',
    ],
    modeloEconomico:
      'Economia de mercado aberta combinada com gasto social elevado, previdência pública suplementar (ATP) e políticas ativas de emprego.',
    visaoEstado:
      'Estado provedor pragmático e consensual, ancorado em pesquisa científica e planejamento educacional.',
    posicionamentoSocial:
      'Universalização da escola compreensiva de 9 anos, expansão habitacional (Programa Milhão) e seguridade universal.',
    politicaExterna:
      'Neutralidade sueca armada durante a Guerra Fria e apoio firme à ONU.',
    principaisRealizacoes: [
      'Aprovação do sistema público de pensões ligadas à renda (ATP, 1959)',
      'Transformação da Suécia em uma das nações mais igualitárias e prósperas do mundo entre 1946 e 1969',
    ],
    contradicoesEMudancas:
      'Durante seu longo governo enfrentou críticas sobre o ritmo da expansão burocrática estatal e debateu internamente os limites da política de neutralidade diante da arquitetura de segurança ocidental.',
    fontesBibliograficas: [
      'Ruin, Olof. Tage Erlander: Serving the Welfare State (University of Pittsburgh Press, 1990).',
    ],
    vector: {
      economia: -22,
      estado: 70,
      sociedade: 68,
      democracia: 90,
      nacionalismo: 12,
      internacional: 72,
      seguranca: -15,
      liberdades: 64,
      redistribuicao: 74,
      trabalho: 84,
      laicidade: 68,
      ecologia: 42,
    },
  },
  {
    id: 'einar-gerhardsen',
    nome: 'Einar Gerhardsen',
    pais: 'Noruega',
    regiao: 'Europa',
    periodoHistorico: '1897–1987 (Primeiro-Ministro: 1945–1951, 1955–1963, 1963–1965)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Trabalhista Norueguês (Arbeiderpartiet)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-democracia Nórdica / Reconstrução Estatal',
    biografiaResumida:
      'Conhecido como o "Pai da Nação" na Noruega moderna, ex-prisioneiro de campos nazistas que liderou a reconstrução econômica pós-guerra e instituiu o Estado de bem-estar norueguês.',
    principaisIdeias: [
      'Reconstrução nacional planejada e industrialização hidrelétrica estatal',
      'Pacto tripartite estável entre empregadores, sindicatos e governo',
      'Descentralização regional para integrar norte e sul do país',
    ],
    modeloEconomico:
      'Economia mista planejada com forte participação pública em energia, bancos de habitação e infraestrutura.',
    visaoEstado:
      'Estado soberano e solidário que garante educação, saúde e moradia digna como base da democracia.',
    posicionamentoSocial:
      'Redução radical da desigualdade regional e de classe por meio de imposto progressivo e previdência universal.',
    politicaExterna:
      'Apesar de raízes socialistas, levou a Noruega a ingressar na OTAN em 1949 após o trauma da ocupação nazista de 1940.',
    principaisRealizacoes: [
      'Construção da infraestrutura energética e industrial norueguesa do pós-guerra',
      'Instituição do sistema universal de seguridade social (Folketrygden)',
    ],
    contradicoesEMudancas:
      'Na juventude nos anos 1920 adotou posições revolucionárias radicais (chegando à filiação temporária à Internacional Comunista); após a guerra liderou um reformismo parlamentar moderado e alinhou a defesa do país à OTAN.',
    fontesBibliograficas: [
      'Sejersted, Francis. The Age of Social Democracy: Norway and Sweden in the Twentieth Century (Princeton, 2011).',
    ],
    vector: {
      economia: -26,
      estado: 72,
      sociedade: 64,
      democracia: 88,
      nacionalismo: 22,
      internacional: 64,
      seguranca: 10,
      liberdades: 62,
      redistribuicao: 74,
      trabalho: 82,
      laicidade: 60,
      ecologia: 24,
    },
  },
  {
    id: 'willy-brandt',
    nome: 'Willy Brandt',
    pais: 'Alemanha',
    regiao: 'Europa',
    periodoHistorico: '1913–1992 (Chanceler da Alemanha Ocidental: 1969–1974)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Social-Democrata da Alemanha (SPD)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Social-democracia Moderna / Ostpolitik',
    biografiaResumida:
      'Ex-combatente antifascista exilado, prefeito de Berlim Ocidental e Chanceler da Alemanha, laureado com o Nobel da Paz (1971) pela política de distensão com o Leste Europeu (Ostpolitik).',
    principaisIdeias: [
      '"Ousar mais democracia" (Mehr Demokratie wagen): democratização das instituições, universidades e locais de trabalho',
      'Ostpolitik: reconhecimento pragmático de fronteiras e diálogo pacífico com URSS, Polônia e Alemanha Oriental',
      'Diálogo Norte-Sul e erradicação da pobreza global (Relatório Brandt, 1980)',
    ],
    modeloEconomico:
      'Economia social de mercado com ampliação da cogestão trabalhista nas empresas e reformas educacionais e previdenciárias.',
    visaoEstado:
      'Estado democrático aberto à participação cívica e à modernização social.',
    posicionamentoSocial:
      'Descriminalização de costumes, expansão universitária gratuita, proteção aos direitos de mulheres e trabalhadores.',
    politicaExterna:
      'Integração europeia combinada com distensão histórica (gesto de ajoelhar-se em Varsóvia em 1970) e cooperação global.',
    principaisRealizacoes: [
      'Tratados de Moscou e Varsóvia (1970) e Tratado Básico com a Alemanha Oriental (1972)',
      'Prêmio Nobel da Paz (1971) e Presidência da Internacional Socialista',
    ],
    contradicoesEMudancas:
      'Embora defensor da abertura democrática, seu governo aprovou em 1972 o decreto "Radikalenerlass" que restringiu o acesso de extremistas políticos ao funcionalismo público, gerando fortes críticas da esquerda estudantil.',
    fontesBibliograficas: [
      'Marshall, Barbara. Willy Brandt: A Political Biography (Macmillan, 1997).',
      'Brandt, Willy. My Life in Politics (1992).',
    ],
    vector: {
      economia: -18,
      estado: 62,
      sociedade: 76,
      democracia: 90,
      nacionalismo: -15,
      internacional: 92,
      seguranca: -32,
      liberdades: 74,
      redistribuicao: 62,
      trabalho: 74,
      laicidade: 76,
      ecologia: 58,
    },
  },
  {
    id: 'francois-mitterrand',
    nome: 'François Mitterrand',
    pais: 'França',
    regiao: 'Europa',
    periodoHistorico: '1916–1996 (Presidente: 1981–1995)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Socialista Francês (PS)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Socialismo Democrático Francês / Pragmatismo Europeu',
    biografiaResumida:
      'Primeiro presidente socialista da Quinta República Francesa (1981), que iniciou o governo com amplas nacionalizações e reformas sociais e depois pivotou para o rigor monetário europeu (Tournant de la Rigueur, 1983).',
    principaisIdeias: [
      'União da esquerda francesa (Programa Comum inicial) e abolição da pena de morte',
      'Redução da jornada de trabalho, 5ª semana de férias pagas e imposto sobre grandes fortunas',
      'Construção profunda da União Europeia e da moeda única (Tratado de Maastricht)',
    ],
    modeloEconomico:
      'Iniciou com keynesianismo nacional e estatizações bancárias/industriais (1981–1982); a partir de 1983 adotou disciplina orçamentária e integração ao mercado único europeu mantendo forte Estado social.',
    visaoEstado:
      'Estado republicano central forte, defensor do serviço público francês e da soberania compartilhada na Europa.',
    posicionamentoSocial:
      'Abolição da pena de morte (1981), descriminalização da homossexualidade e descentralização regional na França.',
    politicaExterna:
      'Eixo franco-alemão com Helmut Kohl, construção de Maastricht e autonomia estratégica nuclear francesa.',
    principaisRealizacoes: [
      'Abolição da pena de morte e reformas trabalhistas de 1981–1982',
      'Assinatura do Tratado de Maastricht (1992) e grandes projetos arquitetônicos culturais em Paris',
    ],
    contradicoesEMudancas:
      'Teve trajetória juvenil na direita nacionalista francesa e brevemente em funções no regime de Vichy antes de aderir à Resistência em 1943; no poder, abandonou a ruptura anticapitalista de 1981 pela ortodoxia monetária europeia em 1983.',
    fontesBibliograficas: [
      'Short, Philip. Mitterrand: A Study in Ambiguity (Bodley Head, 2013).',
    ],
    vector: {
      economia: -22,
      estado: 66,
      sociedade: 68,
      democracia: 78,
      nacionalismo: 10,
      internacional: 72,
      seguranca: 22,
      liberdades: 62,
      redistribuicao: 64,
      trabalho: 74,
      laicidade: 80,
      ecologia: 28,
    },
  },
  {
    id: 'charles-de-gaulle',
    nome: 'Charles de Gaulle',
    pais: 'França',
    regiao: 'Europa',
    periodoHistorico: '1890–1970 (Líder da França Livre e Presidente: 1959–1969)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Gaullismo (RPF / UNR / UDR)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Gaullismo / Nacionalismo Republicano Conservador',
    biografiaResumida:
      'Líder da Resistência Francesa contra o nazismo e fundador da Quinta República Francesa, conhecido pela defesa da independência nacional ("grandeur"), planejamento econômico indicativo (dirigismo) e Estado presidencial forte.',
    principaisIdeias: [
      'Soberania nacional e independência estratégica (força nuclear própria e saída do comando integrado da OTAN em 1966)',
      'Planejamento econômico indicativo estatal ("dirigismo") combinado com estabilidade monetária e livre iniciativa',
      'Presidencialismo forte legitimado por referendos diretos',
    ],
    modeloEconomico:
      'Capitalismo dirigista de Estado: planos indicativos plurianuais, campeãs industriais nacionais (aeroespacial, energia nuclear) e proteção social.',
    visaoEstado:
      'Estado soberano e impessoal acima dos partidos parlamentares, encarnando a continuidade histórica da nação.',
    posicionamentoSocial:
      'Conservadorismo cultural tradicional aliado à preocupação paternalista com a participação dos trabalhadores nos lucros e proteção social.',
    politicaExterna:
      'Multipolaridade soberana: rejeição da tutela norte-americana, reconciliação com a Alemanha de Adenauer e reconhecimento precoce da República Popular da China (1964).',
    principaisRealizacoes: [
      'Fundação da Quinta República (1958) e descolonização negociada da Argélia (Acordos de Évian, 1962)',
      'Modernização tecnológica, industrial e energética francesa nos "Trinta Gloriosos"',
    ],
    contradicoesEMudancas:
      'Chegou ao poder em 1958 apoiado por setores militares que queriam manter a Argélia francesa, mas negociou sua independência enfrentando tentativas de golpe da OAS; deixou o poder voluntariamente após perder o referendo de 1969.',
    fontesBibliograficas: [
      'Jackson, Julian. De Gaulle (Harvard University Press, 2018).',
      'Lacouture, Jean. De Gaulle: The Ruler 1945–1970 (1992).',
    ],
    vector: {
      economia: -6,
      estado: 64,
      sociedade: -42,
      democracia: 32,
      nacionalismo: 82,
      internacional: 18,
      seguranca: 68,
      liberdades: 28,
      redistribuicao: 18,
      trabalho: 22,
      laicidade: 26,
      ecologia: -20,
    },
  },
  {
    id: 'konrad-adenauer',
    nome: 'Konrad Adenauer',
    pais: 'Alemanha',
    regiao: 'Europa',
    periodoHistorico: '1876–1967 (Chanceler da Alemanha Ocidental: 1949–1963)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'União Democrata-Cristã (CDU)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Democracia Cristã / Economia Social de Mercado',
    biografiaResumida:
      'Primeiro Chanceler da República Federal da Alemanha pós-nazismo, responsável pela consolidação democrática, pelo milagre econômico sob a economia social de mercado e pela reconciliação franco-alemã.',
    principaisIdeias: [
      'Economia Social de Mercado (em parceria com Ludwig Erhard): livre iniciativa aliada a robusta previdência e cogestão trabalhista',
      'Integração irreversível da Alemanha ao Ocidente e às comunidades europeias',
      'Democracia parlamentar sólida baseada no princípio da subsidiariedade',
    ],
    modeloEconomico:
      'Capitalismo renano competitivo com disciplina monetária, reforma previdenciária indexada aos salários (1957) e diálogo sindical.',
    visaoEstado:
      'Estado constitucional descentralizado (federalismo forte) que garante ordem jurídica e seguridade social.',
    posicionamentoSocial:
      'Conservadorismo cristão familiar e comunitário, combinado com ampla compensação social às vítimas da guerra.',
    politicaExterna:
      'Tratado de Roma (1957), Tratado do Eliseu com a França (1963) e integração atlântica (OTAN).',
    principaisRealizacoes: [
      'Reconstrução institucional democrática alemã e "Milagre Econômico" (Wirtschaftswunder)',
      'Reconciliação histórica com a França e acordos de reparação a Israel',
    ],
    contradicoesEMudancas:
      'Na juventude opôs-se ao militarismo prussiano e resistiu ao nazismo (sendo preso pela Gestapo); contudo, nos anos 1950 adotou postura pragmática criticada por reintegrar ex-funcionários da burocracia anterior para acelerar a reconstrução administrativa.',
    fontesBibliograficas: [
      'Schwarz, Hans-Peter. Konrad Adenauer: A German Politician and Statesman (1995).',
    ],
    vector: {
      economia: 28,
      estado: 36,
      sociedade: -34,
      democracia: 82,
      nacionalismo: -12,
      internacional: 84,
      seguranca: 35,
      liberdades: 52,
      redistribuicao: 22,
      trabalho: 36,
      laicidade: -42,
      ecologia: 15,
    },
  },
  {
    id: 'margaret-thatcher',
    nome: 'Margaret Thatcher',
    pais: 'Reino Unido',
    regiao: 'Europa',
    periodoHistorico: '1925–2013 (Primeira-Ministra: 1979–1990)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Conservador Britânico',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Neoliberalismo / Conservadorismo de Mercado',
    biografiaResumida:
      'Primeira mulher a ocupar o cargo de primeira-ministra britânica, líder da virada neoliberal que desregulamentou finanças, privatizou estatais e reduziu drasticamente o poder sindical no Reino Unido.',
    principaisIdeias: [
      'Privatização ampla de empresas públicas (telecomunicações, aço, aviação, energia)',
      'Controle monetário da inflação, redução de impostos diretos e desregulação financeira ("Big Bang", 1986)',
      'Conservadorismo moral individualista e defesa dura da lei e da ordem',
    ],
    modeloEconomico:
      'Liberalização de mercados, venda de habitações públicas (Right to Buy), redução da influência sindical e atração de capital financeiro global.',
    visaoEstado:
      'Estado mínimo na produção econômica, porém fortemente centralizado em segurança, defesa nacional e redução da autonomia de conselhos locais trabalhistas.',
    posicionamentoSocial:
      'Ênfase na família tradicional, responsabilidade individual e rejeição do Estado paternalista.',
    politicaExterna:
      'Firmeza antissoviética aliada a Ronald Reagan, Guerra das Malvinas (1982) e euroceticismo crescente diante do projeto supranacional europeu.',
    principaisRealizacoes: [
      'Transformação estrutural da economia britânica e fim da estagflação dos anos 1970',
      'Venda de mais de 1,5 milhão de moradias populares aos inquilinos',
    ],
    contradicoesEMudancas:
      'Embora defendesse a redução do Estado, seu governo centralizou fortemente poderes locais para impor reformas e ampliou gastos policiais; apesar da retórica conservadora, apoiou inicialmente o mercado único europeu (Ato Único de 1986) antes de romper com Bruxelas.',
    fontesBibliograficas: [
      'Moore, Charles. Margaret Thatcher: The Authorized Biography (Allen Lane, 2013–2019).',
    ],
    vector: {
      economia: 88,
      estado: -62,
      sociedade: -46,
      democracia: 62,
      nacionalismo: 42,
      internacional: -15,
      seguranca: 72,
      liberdades: 52,
      redistribuicao: -82,
      trabalho: -86,
      laicidade: -18,
      ecologia: -38,
    },
  },

  // ÁSIA
  {
    id: 'lee-kuan-yew',
    nome: 'Lee Kuan Yew',
    pais: 'Singapura',
    regiao: 'Ásia',
    periodoHistorico: '1923–2015 (Primeiro-Ministro: 1959–1990)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido de Ação Popular (PAP)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Desenvolvimentismo Pragmático / Capitalismo Estatal Híbrido',
    biografiaResumida:
      'Arquiteto da independência e ascensão de Singapura de porto colonial pobre a um dos países de maior PIB per capita, educação e transparência administrativa do mundo, sob regime de partido dominante.',
    principaisIdeias: [
      'Pragmatismo absoluto acima de dogmas ideológicos: livre comércio e atração de multinacionais somados a forte planejamento estatal',
      'Tolerância zero com corrupção e meritocracia tecnocrática no serviço público',
      'Poupança compulsória (CPF) e habitação pública massiva (HDB) para mais de 80% da população',
    ],
    modeloEconomico:
      'Economia extremamente aberta ao comércio e capital estrangeiro (sem tarifas), combinada com fundos soberanos (Temasek) e controle estatal de terras e habitação.',
    visaoEstado:
      'Estado forte, centralizado e altamente capacitado tecnicamente, guiado por valores comunitários confucianos.',
    posicionamentoSocial:
      'Integração étnica obrigatória em conjuntos habitacionais, bilinguismo educacional e disciplina social rigorosa, com controle sobre imprensa e oposição.',
    politicaExterna:
      'Equilíbrio estratégico entre Estados Unidos, China e ASEAN, garantindo livre navegação e segurança militar dissuasória.',
    principaisRealizacoes: [
      'Multiplicação exponencial da renda per capita, erradicação de favelas via HDB e consolidação educacional de topo no PISA',
    ],
    contradicoesEMudancas:
      'Começou a carreira com plataforma socialista democrática e sindicalista anticolonial nos anos 1950, mas rompeu com a ala esquerda de seu próprio partido em 1961 e construiu um modelo capitalista autoritário-tecnocrático.',
    fontesBibliograficas: [
      'Lee Kuan Yew. From Third World to First: The Singapore Story (HarperCollins, 2000).',
      'Barr, Michael D. Lee Kuan Yew: The Beliefs Behind the Man (2000).',
    ],
    vector: {
      economia: 62,
      estado: 58,
      sociedade: -42,
      democracia: -54,
      nacionalismo: 45,
      internacional: 55,
      seguranca: 78,
      liberdades: -48,
      redistribuicao: -28,
      trabalho: -32,
      laicidade: 28,
      ecologia: 24,
    },
  },
  {
    id: 'deng-xiaoping',
    nome: 'Deng Xiaoping',
    pais: 'China',
    regiao: 'Ásia',
    periodoHistorico: '1904–1997 (Líder Supremo: 1978–1992)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Partido Comunista da China (PCCh)',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Socialismo de Mercado / Reformismo Pragmático',
    biografiaResumida:
      'Líder chinês que lançou a política de "Reforma e Abertura" em 1978, encerrando a coletivização maoísta e iniciando a maior trajetória de industrialização e redução da pobreza extrema da história moderna.',
    principaisIdeias: [
      '"Não importa a cor do gato, desde que cace ratos": experimentação empírica de mecanismos de mercado sob direção estatal',
      'Zonas Econômicas Especiais (Shenzhen) abertas ao investimento e tecnologia estrangeiros',
      'As Quatro Modernizações (agricultura, indústria, defesa e ciência/tecnologia) mantendo o monopólio político do PCCh',
    ],
    modeloEconomico:
      'Socialismo com características chinesas: liberalização agrícola familiar, empresas privadas e exportadoras coexistindo com grandes estatais e bancos públicos.',
    visaoEstado:
      'Estado centralizado e dirigido pelo Partido Comunista, focado em planejamento de longo prazo e estabilidade política.',
    posicionamentoSocial:
      'Aceitou desigualdade temporária ("deixar alguns enriquecerem primeiro") para elevar o padrão material geral e tirou centenas de milhões da pobreza.',
    politicaExterna:
      '"Esconder as capacidades e aguardar o momento": integração pacífica ao comércio global e fórmula "Um País, Dois Sistemas" para Hong Kong.',
    principaisRealizacoes: [
      'Lançamento da Reforma e Abertura (1978) que transformou a China na segunda maior economia mundial',
      'Institucionalização de limites etários e rotatividade na liderança chinesa após a era Mao (posteriormente revertida)',
    ],
    contradicoesEMudancas:
      'Foi expurgado duas vezes durante a Revolução Cultural por defender reformas econômicas pragmáticas; ao mesmo tempo que liberalizou amplamente a economia, autorizou a repressão militar aos protestos estudantis da Praça Tiananmen em 1989.',
    fontesBibliograficas: [
      'Vogel, Ezra F. Deng Xiaoping and the Transformation of China (Harvard University Press, 2011).',
    ],
    vector: {
      economia: -12,
      estado: 84,
      sociedade: -18,
      democracia: -76,
      nacionalismo: 64,
      internacional: 38,
      seguranca: 74,
      liberdades: -64,
      redistribuicao: 22,
      trabalho: 12,
      laicidade: 76,
      ecologia: -48,
    },
  },
  {
    id: 'jawaharlal-nehru',
    nome: 'Jawaharlal Nehru',
    pais: 'Índia',
    regiao: 'Ásia',
    periodoHistorico: '1889–1964 (Primeiro-Ministro: 1947–1964)',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Congresso Nacional Indiano',
    categoria: 'Chefe de Estado / Político',
    correntePrincipal: 'Socialismo Fabiano / Nacionalismo Secular Democrático',
    biografiaResumida:
      'Companheiro de Mahatma Gandhi na independência e primeiro Primeiro-Ministro da Índia independente, fundador da democracia secular indiana, do planejamento econômico fabiano e do Movimento dos Não Alinhados.',
    principaisIdeias: [
      'Democracia parlamentar secular em país multirreligioso e multilíngue, abolindo legalmente a intocabilidade de castas',
      'Economia mista com planejamento quinquenal para construir indústria pesada e institutos científicos (IITs)',
      'Não Alinhamento internacional: recusa de blocos militares na Guerra Fria (Panchsheel)',
    ],
    modeloEconomico:
      'Economia mista inspirada no socialismo fabiano britânico e no planejamento soviético democrático: siderúrgicas, energia e ferrovias estatais ao lado de setor privado regulado.',
    visaoEstado:
      'Estado laico, federalista, científico e promotor do desenvolvimento industrial em economia pós-colonial.',
    posicionamentoSocial:
      'Reforma dos direitos civis e familiares hindus (Hindu Code Bills), promoção da igualdade de gênero e proteção às minorias religiosas.',
    politicaExterna:
      'Cofundador do Movimento dos Não Alinhados (Conferência de Bandung, 1955) ao lado de Tito, Nasser e Sukarno.',
    principaisRealizacoes: [
      'Consolidação institucional da maior democracia do mundo sob sufrágio universal desde 1951',
      'Criação dos Indian Institutes of Technology (IITs) e da infraestrutura científica nacional',
    ],
    contradicoesEMudancas:
      'Defensor ardoroso da paz e do desarmamento, enfrentou impasses militares na Caxemira e a derrota na Guerra Sino-Indiana de 1962; o modelo regulatório excessivo ("Licence Raj") limitou o crescimento privado nas décadas seguintes.',
    fontesBibliograficas: [
      'Guha, Ramachandra. India After Gandhi (Ecco, 2007).',
      'Gopal, Sarvepalli. Jawaharlal Nehru: A Biography (Oxford, 1975–1984).',
    ],
    vector: {
      economia: -42,
      estado: 74,
      sociedade: 68,
      democracia: 84,
      nacionalismo: 45,
      internacional: 72,
      seguranca: 5,
      liberdades: 68,
      redistribuicao: 64,
      trabalho: 66,
      laicidade: 84,
      ecologia: 18,
    },
  },

  // PENSADORES ECONÔMICOS E POLÍTICOS
  {
    id: 'john-maynard-keynes',
    nome: 'John Maynard Keynes',
    pais: 'Reino Unido',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1883–1946',
    era: 'Início do Século XX',
    partidoOuMovimento: 'Partido Liberal Britânico / Escola de Cambridge',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Keynesianismo / Liberalismo Social',
    biografiaResumida:
      'Economista britânico que revolucionou a macroeconomia moderna com a Teoria Geral (1936) e desenhou a arquitetura financeira internacional de Bretton Woods (1944).',
    principaisIdeias: [
      'A demanda efetiva determina o nível de emprego; em crises, a poupança privada não gera automaticamente investimento',
      'Política fiscal contracíclica e socialização do investimento público em infraestrutura',
      'Sistema monetário internacional cooperativo que evite deflações competitivas (proposta da moeda Bancor)',
    ],
    modeloEconomico:
      'Capitalismo administrado com pleno emprego, controle de fluxos financeiros especulativos e taxas de juros baixas.',
    visaoEstado:
      'Estado tecnicamente ativo para estabilizar expectativas econômicas e preservar as liberdades individuais dentro da economia de mercado.',
    posicionamentoSocial:
      'Liberalismo civil e cultural avançado (Círculo de Bloomsbury), defendendo que o problema econômico deve ser resolvido para liberar o ser humano para a cultura.',
    politicaExterna:
      'Multilateralismo financeiro cooperativo (crítico precoce das reparações punitivas do Tratado de Versalhes em 1919).',
    principaisRealizacoes: [
      'Publicação de "A Teoria Geral do Emprego, do Juro e da Moeda" (1936)',
      'Criação do FMI e do Banco Mundial em Bretton Woods (1944)',
    ],
    contradicoesEMudancas:
      'Formado na ortodoxia neoclássica marshalliana de Cambridge, rompeu com o padrão-ouro e o laissez-faire após o desemprego crônico britânico dos anos 1920 e a Grande Depressão.',
    fontesBibliograficas: [
      'Skidelsky, Robert. John Maynard Keynes: 1883–1946 (Penguin, 2003).',
    ],
    vector: {
      economia: -14,
      estado: 66,
      sociedade: 56,
      democracia: 82,
      nacionalismo: 12,
      internacional: 72,
      seguranca: -12,
      liberdades: 72,
      redistribuicao: 56,
      trabalho: 48,
      laicidade: 68,
      ecologia: 24,
    },
  },
  {
    id: 'karl-marx',
    nome: 'Karl Marx',
    pais: 'Alemanha',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1818–1883',
    era: 'Século XIX',
    partidoOuMovimento: 'Liga dos Comunistas / I Internacional (AIT)',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Socialismo Marxista / Materialismo Histórico',
    biografiaResumida:
      'Filósofo, economista, historiador e teórico político alemão cuja análise crítica do modo de produção capitalista e da luta de classes moldou profundamente a teoria social e os movimentos operários modernos.',
    principaisIdeias: [
      'Materialismo histórico: as relações econômicas de produção formam a base sobre a qual se erguem instituições jurídicas e políticas',
      'Teoria da mais-valia e tendência à concentração de capital e crises cíclicas no capitalismo',
      'Emancipação da classe trabalhadora pelos próprios trabalhadores rumo a uma associação livre de produtores',
    ],
    modeloEconomico:
      'Superação da propriedade privada capitalista e da produção mercantil em favor do planejamento racional coletivo pelos produtores associados.',
    visaoEstado:
      'Crítico do Estado como comitê gestor dos interesses de classe; propôs após a Comuna de Paris (1871) instituições com mandato revogável e sem exército permanente.',
    posicionamentoSocial:
      'Igualdade universal radical, abolição do trabalho infantil, educação pública politécnica e superação das opressões de classe.',
    politicaExterna:
      'Internacionalismo operário e crítica ao colonialismo britânico e às guerras dinásticas.',
    principaisRealizacoes: [
      'Coautoria do "Manifesto do Partido Comunista" (1848) e publicação de "O Capital", Livro I (1867)',
      'Liderança intelectual na Associação Internacional dos Trabalhadores (1864–1872)',
    ],
    contradicoesEMudancas:
      'Após observar a Comuna de Paris (1871), revisou teses de 1848 admitindo que o Estado burguês não pode ser simplesmente tomado pronto, mas transformado; no fim da vida estudou a possibilidade de transição na Rússia a partir de comunas rurais sem passar integralmente pelo capitalismo ocidental.',
    fontesBibliograficas: [
      'Sperber, Jonathan. Karl Marx: A Nineteenth-Century Life (Liveright, 2013).',
      'Heinrich, Michael. Introdução à Crítica da Economia Política de Karl Marx (2012).',
    ],
    vector: {
      economia: -95,
      estado: 55,
      sociedade: 74,
      democracia: 38,
      nacionalismo: -25,
      internacional: 48,
      seguranca: -28,
      liberdades: 18,
      redistribuicao: 94,
      trabalho: 92,
      laicidade: 88,
      ecologia: 22,
    },
  },
  {
    id: 'friedrich-engels',
    nome: 'Friedrich Engels',
    pais: 'Alemanha',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1820–1895',
    era: 'Século XIX',
    partidoOuMovimento: 'I e II Internacionais / SPD (mentor)',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Socialismo Marxista',
    biografiaResumida:
      'Teórico social, historiador militar e empresário têxtil alemão, cofundador do materialismo histórico com Karl Marx e editor póstumo dos volumes II e III de O Capital.',
    principaisIdeias: [
      'Análise empírica pioneira das condições da classe trabalhadora industrial (Manchester, 1845)',
      'Crítica da origem histórica da família patriarcal e da propriedade privada',
      'Apoio ao crescimento eleitoral e organizativo dos partidos operários europeus',
    ],
    modeloEconomico:
      'Socialização dos meios de produção industriais concentrados para eliminar a anarquia produtiva e as crises periódicas.',
    visaoEstado:
      'Sustentava que, superados os antagonismos de classe, o governo sobre pessoas daria lugar à administração racional das coisas.',
    posicionamentoSocial:
      'Defesa da emancipação feminina como condição inseparável da transformação social e econômica.',
    politicaExterna:
      'Internacionalismo operário e defesa da paz entre povos europeus contra a corrida armamentista imperialista.',
    principaisRealizacoes: [
      'Autor de "A Situação da Classe Trabalhadora na Inglaterra" (1845) e "A Origem da Família, da Propriedade Privada e do Estado" (1884)',
      'Edição dos Livros II e III de O Capital e orientação estratégica da II Internacional',
    ],
    contradicoesEMudancas:
      'Financiou durante décadas a pesquisa revolucionária de Marx usando os lucros de sua participação na fábrica têxtil familiar em Manchester; nos seus últimos anos (1895), passou a enfatizar a força estratégica do sufrágio universal e da via parlamentar na Alemanha.',
    fontesBibliograficas: [
      'Hunt, Tristram. Marx’s General: The Revolutionary Life of Friedrich Engels (2009).',
    ],
    vector: {
      economia: -92,
      estado: 52,
      sociedade: 76,
      democracia: 45,
      nacionalismo: -25,
      internacional: 50,
      seguranca: -25,
      liberdades: 22,
      redistribuicao: 92,
      trabalho: 90,
      laicidade: 88,
      ecologia: 25,
    },
  },
  {
    id: 'adam-smith',
    nome: 'Adam Smith',
    pais: 'Reino Unido (Escócia)',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1723–1790',
    era: 'Século XIX',
    partidoOuMovimento: 'Iluminismo Escocês',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Liberalismo Clássico',
    biografiaResumida:
      'Filósofo moral escocês e fundador da economia política moderna, autor de "Teoria dos Sentimentos Morais" (1759) e "A Riqueza das Nações" (1776).',
    principaisIdeias: [
      'Divisão do trabalho e produtividade como verdadeiras fontes da riqueza (contra o mercantilismo metalista)',
      'Coordenação espontânea das trocas voluntárias pelo sistema de preços quando há concorrência sem privilégios estatais',
      'Papel necessário do Estado na justiça, defesa nacional e obras públicas/educação básica não lucrativas',
    ],
    modeloEconomico:
      'Economia de mercado competitiva, livre comércio e combate severo a monopólios mercantis e privilégios corporativos.',
    visaoEstado:
      'Estado constitucional limitado às funções de defesa, administração imparcial da justiça e infraestrutura e instrução pública básica.',
    posicionamentoSocial:
      'Crítico severo do trabalho escravo, das leis que reprimiam associações de trabalhadores enquanto toleravam cartéis de patrões, e defensor de salários dignos para trabalhadores.',
    politicaExterna:
      'Livre comércio pacífico entre nações baseado em vantagens produtivas e fim do colonialismo mercantilista.',
    principaisRealizacoes: [
      'Publicação de "Uma Investigação sobre a Natureza e as Causas da Riqueza das Nações" (1776)',
    ],
    contradicoesEMudancas:
      'Frequentemente caricaturado como defensor do egoísmo irrestrito ou do laissez-faire absoluto, Smith dedicou sua filosofia moral à simpatia humana e defendeu impostos progressivos modestos, teto aos juros usurários (em sua época) e educação pública contra a embrutecedora divisão fabril.',
    fontesBibliograficas: [
      'Norman, Jesse. Adam Smith: Father of Economics (Basic Books, 2018).',
      'Sen, Amartya. Sobre Ética e Economia (1987).',
    ],
    vector: {
      economia: 72,
      estado: -45,
      sociedade: 28,
      democracia: 65,
      nacionalismo: -32,
      internacional: 58,
      seguranca: 10,
      liberdades: 84,
      redistribuicao: -58,
      trabalho: -45,
      laicidade: 58,
      ecologia: 0,
    },
  },
  {
    id: 'friedrich-hayek',
    nome: 'Friedrich Hayek',
    pais: 'Áustria / Reino Unido',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1899–1992',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Escola Austríaca / Sociedade Mont Pèlerin',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Neoliberalismo / Liberalismo Clássico Evolutivo',
    biografiaResumida:
      'Economista e filósofo político laureado com o Nobel de Economia (1974), célebre pela crítica epistemológica ao planejamento econômico centralizado ("O Caminho da Servidão", 1944).',
    principaisIdeias: [
      'O conhecimento econômico é disperso e tácito: nenhum planejador central consegue substituir o sistema de preços como transmissor de informação',
      'Ordem espontânea das instituições e do Estado de direito (Rule of Law) contra o construtivismo racionalista',
      'Risco de que a planificação econômica total corroa inevitavelmente as liberdades políticas individuais',
    ],
    modeloEconomico:
      'Economia de mercado competitiva com moeda estável (chegando a propor desestatização da moeda), contratos livres e proteção mínima contra a indigência extrema.',
    visaoEstado:
      'Estado submetido a regras gerais abstratas e impessoais, evitando privilégios discricionários a grupos de interesse.',
    posicionamentoSocial:
      'Valorização de tradições evolutivas morais combinada com defesa da liberdade individual frente a burocracias.',
    politicaExterna:
      'Propositor histórico de uma federação interestatal liberal para limitar o nacionalismo econômico e guerras tarifárias.',
    principaisRealizacoes: [
      'Publicação de "O Caminho da Servidão" (1944) e "Os Fundamentos da Liberdade" (1960)',
      'Prêmio Nobel de Economia (1974)',
    ],
    contradicoesEMudancas:
      'Apesar de alertar contra o autoritarismo, nos anos 1970–1980 declarou preferir temporariamente um regime autoritário que mantivesse o livre mercado (citando o Chile de Pinochet) a uma democracia ilimitada sem freios à propriedade — posição duramente criticada até por outros liberais.',
    fontesBibliograficas: [
      'Caldwell, Bruce. Hayek’s Challenge (University of Chicago Press, 2004).',
    ],
    vector: {
      economia: 90,
      estado: -78,
      sociedade: 12,
      democracia: 42,
      nacionalismo: -55,
      internacional: 48,
      seguranca: 25,
      liberdades: 88,
      redistribuicao: -88,
      trabalho: -88,
      laicidade: 48,
      ecologia: -32,
    },
  },
  {
    id: 'milton-friedman',
    nome: 'Milton Friedman',
    pais: 'Estados Unidos',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1912–2006',
    era: 'Guerra Fria',
    partidoOuMovimento: 'Escola de Chicago',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Neoliberalismo / Monetarismo',
    biografiaResumida:
      'Economista americano vencedor do Prêmio Nobel (1976), líder do monetarismo e principal divulgador das reformas de livre mercado, imposto de renda negativo e vouchers educacionais.',
    principaisIdeias: [
      'A inflação é sempre e em toda parte um fenômeno monetário: crítica à curva de Phillips keynesiana',
      'Liberdade econômica como condição indispensável da liberdade política',
      'Substituição de serviços públicos burocráticos por escolhas individuais (vouchers escolares e imposto negativo para pobres)',
    ],
    modeloEconomico:
      'Desregulação de mercados, câmbio flutuante, privatizações, redução de impostos e controle estrito da expansão monetária.',
    visaoEstado:
      'Governo limitado a defesa, contratos, moeda estável e rede monetária simples contra pobreza extrema (imposto negativo).',
    posicionamentoSocial:
      'Defensor de liberdades individuais amplas, incluindo o fim do alistamento militar obrigatório e a descriminalização das drogas.',
    politicaExterna:
      'Livre comércio unilateral e crítica à ajuda externa estatal entre governos.',
    principaisRealizacoes: [
      'Obras "Capitalismo e Liberdade" (1962) e "Uma História Monetária dos Estados Unidos" (com Anna Schwartz, 1963)',
      'Prêmio Nobel de Economia (1976)',
    ],
    contradicoesEMudancas:
      'Propôs no pós-guerra um mecanismo de imposto negativo de renda mais generoso do que muitos críticos supõem; enfrentou forte controvérsia por proferir palestras econômicas no Chile em 1975 sob o regime militar.',
    fontesBibliograficas: [
      'Ebenstein, Lanny. Milton Friedman: A Biography (Palgrave Macmillan, 2007).',
    ],
    vector: {
      economia: 92,
      estado: -82,
      sociedade: 34,
      democracia: 58,
      nacionalismo: -52,
      internacional: 54,
      seguranca: 15,
      liberdades: 88,
      redistribuicao: -90,
      trabalho: -92,
      laicidade: 62,
      ecologia: -46,
    },
  },
  {
    id: 'antonio-gramsci',
    nome: 'Antonio Gramsci',
    pais: 'Itália',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1891–1937',
    era: 'Início do Século XX',
    partidoOuMovimento: 'Partido Comunista Italiano (PCI)',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Marxismo Ocidental / Teoria da Hegemonia',
    biografiaResumida:
      'Filósofo e dirigente político italiano preso pelo regime fascista de Mussolini por mais de uma década, autor dos "Cadernos do Cárcere" e teórico da hegemonia cultural e da sociedade civil.',
    principaisIdeias: [
      'Distinção entre sociedade política (coerção estatal) e sociedade civil (escolas, imprensa, associações onde se disputa o consenso)',
      'Guerra de posição versus guerra de movimento em democracias ocidentais complexas',
      'Papel dos "intelectuais orgânicos" na elevação cultural e política das classes subalternas',
    ],
    modeloEconomico:
      'Economia socializada baseada originalmente na democracia fabril dos conselhos operários (Biennio Rosso em Turim).',
    visaoEstado:
      'Concebe o "Estado integral" como soma de sociedade política + sociedade civil; a transformação exige construir consenso democrático e cultural prévio.',
    posicionamentoSocial:
      'Valorização da escola unitária humanista e técnica para superar a divisão entre quem pensa e quem executa.',
    politicaExterna:
      'Análise articulada da "questão meridional" (desigualdade regional) e das transformações globais do fordismo americano.',
    principaisRealizacoes: [
      'Redação dos 33 "Cadernos do Cárcere" (1929–1935), obra fundadora da ciência política e sociologia cultural contemporânea',
    ],
    contradicoesEMudancas:
      'Embora cofundador do PCI ligado à Internacional Comunista, divergiu em 1926 do endurecimento burocrático stalinista em carta ao PCUS e seus Cadernos do Cárcere forneceram a base teórica para o eurocomunismo democrático décadas depois.',
    fontesBibliograficas: [
      'Coutinho, Carlos Nelson. Gramsci: Um Estudo sobre seu Pensamento Político (Civilização Brasileira, 1999).',
    ],
    vector: {
      economia: -82,
      estado: 58,
      sociedade: 80,
      democracia: 58,
      nacionalismo: 5,
      internacional: 62,
      seguranca: -35,
      liberdades: 42,
      redistribuicao: 86,
      trabalho: 88,
      laicidade: 82,
      ecologia: 32,
    },
  },
  {
    id: 'norberto-bobbio',
    nome: 'Norberto Bobbio',
    pais: 'Itália',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1909–2004',
    era: 'Contemporâneo',
    partidoOuMovimento: 'Partito d’Azione / Socialismo Liberal Italiano',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Socialismo Liberal / Democracia Constitucional',
    biografiaResumida:
      'Filósofo do direito e cientista político italiano, senador vitalício e uma das maiores autoridades mundiais sobre teoria da democracia, direitos humanos e a distinção entre esquerda e direita.',
    principaisIdeias: [
      'A democracia define-se por "regras do jogo" claras (sufrágio universal, voto igual, pluralismo e proteção a minorias)',
      'Não há socialismo aceitável sem garantias liberais individuais e Estado de direito ("Qual Socialismo?", 1976)',
      'A distinção entre esquerda e direita permanece válida pelo grau de prioridade à igualdade social versus liberdade/tradição',
    ],
    modeloEconomico:
      'Economia mista social-democrata ou liberal-socialista compatível com pluralismo político e direitos trabalhistas.',
    visaoEstado:
      'Estado democrático de direito transparente, combatendo o "poder invisível" (máfias, serviços secretos sem controle e corrupção).',
    posicionamentoSocial:
      'Defesa sistemática da "Era dos Direitos" humanos universais, laicidade e tolerância cívica.',
    politicaExterna:
      'Pacifismo jurídico institucional (supranacionalismo democrático inspirado em Kant).',
    principaisRealizacoes: [
      'Obras referenciais: "O Futuro da Democracia" (1984), "A Era dos Direitos" (1990) e "Direita e Esquerda" (1994)',
    ],
    contradicoesEMudancas:
      'Manteve constante diálogo crítico tanto com comunistas italianos (cobrando compromisso democrático irreversível) quanto com liberais conservadores (cobrando atenção às desigualdades materiais que esvaziam a cidadania).',
    fontesBibliograficas: [
      'Bobbio, Norberto. O Futuro da Democracia (Paz e Terra, 2000).',
    ],
    vector: {
      economia: -15,
      estado: 48,
      sociedade: 76,
      democracia: 96,
      nacionalismo: -22,
      internacional: 84,
      seguranca: -32,
      liberdades: 88,
      redistribuicao: 58,
      trabalho: 62,
      laicidade: 88,
      ecologia: 56,
    },
  },
  {
    id: 'amartya-sen',
    nome: 'Amartya Sen',
    pais: 'Índia',
    regiao: 'Pensadores Clássicos e Contemporâneos',
    periodoHistorico: '1933–presente',
    era: 'Contemporâneo',
    partidoOuMovimento: 'Economia do Bem-Estar / Abordagem das Capacidades',
    categoria: 'Pensador / Economista',
    correntePrincipal: 'Liberalismo Social / Desenvolvimento Humano',
    biografiaResumida:
      'Economista e filósofo indiano laureado com o Nobel de Economia (1998), criador intelectual do Índice de Desenvolvimento Humano (IDH) junto a Mahbub ul Haq e autor de "Desenvolvimento como Liberdade".',
    principaisIdeias: [
      'O desenvolvimento deve ser medido pela expansão das liberdades reais (capacidades) das pessoas, não apenas pelo PIB',
      'Fomes coletivas graves não ocorrem em democracias com imprensa livre e eleições disputadas',
      'Liberdade substantiva exige acesso público a educação básica, saúde, nutrição e oportunidades civis',
    ],
    modeloEconomico:
      'Economia de mercado eficiente combinada com forte provisão pública de bens sociais essenciais (saúde, educação básica e segurança alimentar).',
    visaoEstado:
      'Estado democrático capacitador que corrige privações básicas sem sufocar trocas livres.',
    posicionamentoSocial:
      'Defesa de igualdade de gênero, pluralismo cultural e inclusão social como motores do próprio crescimento econômico.',
    politicaExterna:
      'Cosmopolitismo ético ("A Ideia de Justiça"), diálogo intercultural e cooperação contra pobreza e epidemias globais.',
    principaisRealizacoes: [
      'Fundamentação teórica do Índice de Desenvolvimento Humano (IDH / PNUD, 1990)',
      'Prêmio Nobel de Economia (1998) por estudos sobre fomes coletivas e teoria da escolha social',
    ],
    contradicoesEMudancas:
      'Critica tanto a ortodoxia de mercado que ignora desigualdades iniciais de capacidades quanto abordagens autoritárias asiáticas que subordinam liberdades políticas ao crescimento do PIB.',
    fontesBibliograficas: [
      'Sen, Amartya. Desenvolvimento como Liberdade (Companhia das Letras, 2000).',
    ],
    vector: {
      economia: 5,
      estado: 55,
      sociedade: 84,
      democracia: 92,
      nacionalismo: -20,
      internacional: 84,
      seguranca: -35,
      liberdades: 86,
      redistribuicao: 64,
      trabalho: 54,
      laicidade: 78,
      ecologia: 66,
    },
  },
];
