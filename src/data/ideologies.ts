import { IdeologyRecord } from '../shared/types.ts';

export const IDEOLOGIES_DATA: IdeologyRecord[] = [
  {
    id: 'social-democracia',
    nome: 'Social-democracia',
    familia: 'Centro-Esquerda / Reformismo Democrático',
    periodoOrigem: 'Final do século XIX — consolidação pós-1945',
    resumo:
      'Corrente política que combina democracia representativa, economia de mercado regulada, sindicalismo forte e Estado de bem-estar social universal financiado por tributação progressiva.',
    origemHistorica:
      'Originou-se no movimento operário europeu do final do século XIX (especialmente no SPD alemão com Eduard Bernstein), rompendo gradualmente com a via revolucionária marxista no pós-Segunda Guerra Mundial para defender reformas democráticas dentro da economia mista (Programa de Bad Godesberg, 1959, e modelo nórdico).',
    principaisPensadores: ['Eduard Bernstein', 'Tage Erlander', 'Olof Palme', 'Willy Brandt', 'Norberto Bobbio'],
    principiosEconomicos:
      'Economia mista capitalista regulada, negociação coletiva tripartite (Estado, sindicatos e empresas), impostos progressivos sobre renda e patrimônio, e investimentos públicos em saúde, educação e infraestrutura.',
    principiosSociais:
      'Igualdade de oportunidades, redução da desigualdade via serviços públicos universais e gratuitos, proteção trabalhista e ampliação de direitos civis.',
    visaoEstado:
      'Estado regulador e provedor de seguridade social universal (Welfare State), operando em parceria com sindicatos e empresas privadas eficientes.',
    relacaoDemocracia:
      'Compromisso inegociável com o pluralismo partidário, eleições livres, Estado de direito e liberdades civis.',
    exemplosHistoricos: [
      'Suécia sob Tage Erlander e Olof Palme (1946–1986)',
      'Noruega sob Einar Gerhardsen (1945–1965)',
      'Alemanha Ocidental sob Willy Brandt e Helmut Schmidt (1969–1982)',
    ],
    diferencasCorrentes:
      'Ao contrário do socialismo marxista, não busca abolir a propriedade privada dos meios de produção, mas regulá-la e redistribuir seus frutos; diferencia-se do neoliberalismo por rejeitar a desregulação e defender alta carga tributária progressiva.',
    fontes: [
      'Esping-Andersen, Gøsta. The Three Worlds of Welfare Capitalism (1990).',
      'Berman, Sheri. The Primacy of Politics: Social Democracy and the Making of Europe’s Twentieth Century (2006).',
      'Przeworski, Adam. Capitalism and Social Democracy (1985).',
    ],
    vector: {
      economia: -25,
      estado: 65,
      sociedade: 68,
      democracia: 88,
      nacionalismo: 10,
      internacional: 72,
      seguranca: -25,
      liberdades: 58,
      redistribuicao: 74,
      trabalho: 78,
      laicidade: 72,
      ecologia: 66,
    },
  },
  {
    id: 'socialismo-democratico',
    nome: 'Socialismo democrático',
    familia: 'Esquerda Democrática',
    periodoOrigem: 'Século XX (anos 1920–1970)',
    resumo:
      'Projeto de transição democrática para além do capitalismo, combinando propriedade social ou cooperativa de setores estratégicos com liberdades políticas plenas e autogestão.',
    origemHistorica:
      'Desenvolveu-se como alternativa tanto ao capitalismo liberal quanto ao autoritarismo soviético, defendendo que o socialismo só é autêntico quando construído por via eleitoral, parlamentar e participativa.',
    principaisPensadores: ['Rosa Luxemburgo (ala democrática)', 'Salvador Allende', 'Michael Harrington', 'Tony Benn', 'Paul Singer'],
    principiosEconomicos:
      'Socialização democrática de setores estratégicos (energia, bancos, mineração), forte apoio a cooperativas de trabalhadores, economia solidária e planejamento participativo.',
    principiosSociais:
      'Desmercantilização de direitos básicos (moradia, saúde, educação, transporte) e combate estrutural às desigualdades de classe, gênero e raça.',
    visaoEstado:
      'Estado democratizado por conselhos populares, orçamentos participativos e controle social sobre empresas públicas.',
    relacaoDemocracia:
      'Defende o aprofundamento da democracia representativa por meio da democracia direta e econômica nos locais de trabalho.',
    exemplosHistoricos: [
      'Governo da Unidade Popular de Salvador Allende no Chile (1970–1973)',
      'Experiências municipais de Orçamento Participativo no Brasil (1989–2004)',
    ],
    diferencasCorrentes:
      'Diferencia-se da social-democracia por almejar a superação gradual do modo de produção capitalista, e do marxismo-leninismo por rejeitar o partido único e a supressão das liberdades individuais.',
    fontes: [
      'Bobbio, Norberto. Qual Socialismo? (1976).',
      'Singer, Paul. Introdução à Economia Solidária (2002).',
      'Wright, Erik Olin. Envisioning Real Utopias (2010).',
    ],
    vector: {
      economia: -68,
      estado: 72,
      sociedade: 76,
      democracia: 84,
      nacionalismo: 25,
      internacional: 64,
      seguranca: -45,
      liberdades: 52,
      redistribuicao: 86,
      trabalho: 84,
      laicidade: 76,
      ecologia: 72,
    },
  },
  {
    id: 'socialismo-marxista',
    nome: 'Socialismo marxista',
    familia: 'Tradição Marxista',
    periodoOrigem: 'Meados do século XIX (1848)',
    resumo:
      'Corrente fundada na crítica da economia política capitalista por Karl Marx e Friedrich Engels, propondo a superação da propriedade privada dos meios de produção pela ação organizada da classe trabalhadora.',
    origemHistorica:
      'Sistematizada a partir do Manifesto Comunista (1848) e de O Capital (1867), fundamenta-se no materialismo histórico e na teoria do valor-trabalho e da mais-valia.',
    principaisPensadores: ['Karl Marx', 'Friedrich Engels', 'Rosa Luxemburgo', 'Antonio Gramsci'],
    principiosEconomicos:
      'Propriedade social coletiva dos grandes meios de produção, planificação racional da economia segundo necessidades sociais e eliminação da exploração assalariada.',
    principiosSociais:
      'Emancipação humana universal, abolição da sociedade de classes e superação da alienação do trabalho.',
    visaoEstado:
      'Considera o Estado moderno um instrumento de mediação dos conflitos de classe que, após uma fase transitória de poder operário, tenderia a perder seu caráter coercitivo.',
    relacaoDemocracia:
      'Crítica à democracia puramente formal burguesa, defendendo conselhos operários e controle direto dos produtores associados.',
    exemplosHistoricos: [
      'Comuna de Paris (1871)',
      'Conselhos operários europeus de 1917–1921',
    ],
    diferencasCorrentes:
      'Distingue-se da social-democracia por rejeitar a conciliação permanente com o capital e do marxismo-leninismo stalinista em vertentes conselhistas e críticas.',
    fontes: [
      'Marx, Karl; Engels, Friedrich. Manifesto do Partido Comunista (1848).',
      'Marx, Karl. O Capital, Livro I (1867).',
      'Hobsbawm, Eric. Como Mudar o Mundo (2011).',
    ],
    vector: {
      economia: -92,
      estado: 60,
      sociedade: 72,
      democracia: 35,
      nacionalismo: -20,
      internacional: 45,
      seguranca: -25,
      liberdades: 15,
      redistribuicao: 92,
      trabalho: 90,
      laicidade: 85,
      ecologia: 20,
    },
  },
  {
    id: 'marxismo-leninismo',
    nome: 'Marxismo-leninismo',
    familia: 'Comunismo de Vanguarda',
    periodoOrigem: 'Década de 1920 (URSS)',
    resumo:
      'Doutrina formulada após a Revolução Russa de 1917 e sistematizada na União Soviética, centrada no partido de vanguarda, no centralismo democrático e na planificação estatal integral.',
    origemHistorica:
      'Baseada nas contribuições teóricas de Vladimir Lenin sobre o imperialismo e o partido revolucionário, consolidada como ideologia oficial do Estado soviético e dos partidos ligados à Internacional Comunista.',
    principaisPensadores: ['Vladimir Lenin', 'Josef Stalin', 'Ho Chi Minh', 'Fidel Castro'],
    principiosEconomicos:
      'Estatização completa da indústria, bancos e comércio exterior, reforma agrária coletivizada e planos quinquenais centralizados.',
    principiosSociais:
      'Universalização acelerada de alfabetização, saúde básica e pleno emprego, subordinando a autonomia civil aos objetivos da construção socialista.',
    visaoEstado:
      'Estado altamente centralizado e dirigido pelo partido único de vanguarda para industrializar rapidamente e defender o regime contra pressões externas.',
    relacaoDemocracia:
      'Rejeita o pluralismo liberal em favor do centralismo democrático e da liderança do partido único.',
    exemplosHistoricos: [
      'União Soviética (1922–1991)',
      'Cuba pós-1959',
      'Vietnã pós-1975',
    ],
    diferencasCorrentes:
      'Diferencia-se radicalmente do eurocomunismo e do socialismo democrático ao rejeitar a alternância pluripartidária e manter forte centralização coercitiva do Estado.',
    fontes: [
      'Lenin, V. I. O Estado e a Revolução (1917).',
      'Service, Robert. A History of Twentieth-Century Russia (1997).',
      'Brown, Archie. The Rise and Fall of Communism (2009).',
    ],
    vector: {
      economia: -95,
      estado: 95,
      sociedade: 25,
      democracia: -82,
      nacionalismo: 45,
      internacional: 10,
      seguranca: 75,
      liberdades: -78,
      redistribuicao: 88,
      trabalho: 70,
      laicidade: 88,
      ecologia: -35,
    },
  },
  {
    id: 'eurocomunismo',
    nome: 'Eurocomunismo',
    familia: 'Esquerda Democrática Europeia',
    periodoOrigem: 'Década de 1970 (Itália, França, Espanha)',
    resumo:
      'Tendência adotada por partidos comunistas da Europa Ocidental nos anos 1970 que rompeu com Moscou, aceitando a democracia parlamentar, o pluralismo e as liberdades individuais como parte irreversível do socialismo.',
    origemHistorica:
      'Inspirada nas reflexões de Antonio Gramsci sobre hegemonia cultural e consolidada por Enrico Berlinguer (PCI), Santiago Carrillo (PCE) e Georges Marchais (PCF) após a invasão da Tchecoslováquia em 1968.',
    principaisPensadores: ['Antonio Gramsci (precursor)', 'Enrico Berlinguer', 'Santiago Carrillo', 'Nicos Poulantzas'],
    principiosEconomicos:
      'Reformas estruturais graduais, planejamento democrático indicativo, ampliação de direitos trabalhistas e controle público de setores monopolistas.',
    principiosSociais:
      'Aliança ampla com classes médias, movimentos estudantis, feministas e sindicatos em torno de direitos civis e bem-estar social.',
    visaoEstado:
      'Concebe o Estado como arena de disputa hegemônica que deve ser transformada por dentro mediante alianças sociais e reformas institucionais.',
    relacaoDemocracia:
      'Aceita integralmente o sufrágio universal, o pluripartidarismo, a alternância de poder e as garantias constitucionais.',
    exemplosHistoricos: [
      'Partido Comunista Italiano (PCI) sob Enrico Berlinguer na década de 1970',
      'Participação do PCE na transição democrática espanhola (Pactos de Moncloa, 1977)',
    ],
    diferencasCorrentes:
      'Rompe com o marxismo-leninismo soviético ao rejeitar a ditadura do proletariado; mantém crítica mais estrutural ao capitalismo do que a social-democracia clássica.',
    fontes: [
      'Carrillo, Santiago. Eurocomunismo e Estado (1977).',
      'Sassoon, Donald. One Hundred Years of Socialism (1996).',
    ],
    vector: {
      economia: -62,
      estado: 66,
      sociedade: 74,
      democracia: 82,
      nacionalismo: 5,
      internacional: 68,
      seguranca: -35,
      liberdades: 62,
      redistribuicao: 80,
      trabalho: 82,
      laicidade: 78,
      ecologia: 58,
    },
  },
  {
    id: 'comunismo',
    nome: 'Comunismo',
    familia: 'Tradição Revolucionária',
    periodoOrigem: 'Século XIX (1848) e experiências do século XX',
    resumo:
      'Horizonte político e socioeconômico que propõe uma sociedade sem classes sociais, sem propriedade privada dos meios de produção e baseada na distribuição segundo as necessidades de cada indivíduo.',
    origemHistorica:
      'Teorizado como estágio superior pós-capitalista por Marx e Engels e reinterpretado por distintas tradições (conselhista, leninista, maoísta) ao longo dos séculos XIX e XX.',
    principaisPensadores: ['Karl Marx', 'Friedrich Engels', 'Vladimir Lenin', 'Mao Tsé-Tung'],
    principiosEconomicos:
      'Propriedade comum integral dos recursos produtivos, fim da produção voltada ao lucro privado e alocação socialmente planejada.',
    principiosSociais:
      'Superação das divisões de classe, da divisão rígida entre trabalho manual e intelectual e das desigualdades materiais hereditárias.',
    visaoEstado:
      'Na teoria marxista clássica, o Estado desapareceria como aparato de coerção de classe após a transição socialista; na prática do século XX, resultou em Estados centralizados.',
    relacaoDemocracia:
      'Divide-se historicamente entre correntes de democracia direta conselhista e regimes autoritários de partido único.',
    exemplosHistoricos: [
      'Experiências da URSS, China maoísta e Leste Europeu (enquanto sistemas comunistas históricos)',
      'Comunas agrárias e industriais autogestionárias',
    ],
    diferencasCorrentes:
      'Mais radical na abolição do mercado e da propriedade privada do que o socialismo de mercado e a social-democracia.',
    fontes: [
      'Marx, Karl. Crítica do Programa de Gotha (1875).',
      'Priestland, David. The Red Flag: A History of Communism (2009).',
    ],
    vector: {
      economia: -96,
      estado: 75,
      sociedade: 55,
      democracia: -45,
      nacionalismo: 5,
      internacional: 35,
      seguranca: 30,
      liberdades: -35,
      redistribuicao: 95,
      trabalho: 86,
      laicidade: 88,
      ecologia: 10,
    },
  },
  {
    id: 'liberalismo-classico',
    nome: 'Liberalismo clássico',
    familia: 'Liberalismo',
    periodoOrigem: 'Séculos XVII–XIX (Iluminismo e Revoluções Atlânticas)',
    resumo:
      'Filosofia política e econômica centrada nos direitos naturais individuais, no governo limitado pela Constituição, no Estado de direito e na economia de livre mercado.',
    origemHistorica:
      'Emergiu na Europa contra o absolutismo monárquico e o mercantilismo estatal, consolidando-se com John Locke, Montesquieu, Adam Smith e os debates constitucionais norte-americanos e europeus.',
    principaisPensadores: ['John Locke', 'Adam Smith', 'Montesquieu', 'Benjamin Constant', 'John Stuart Mill'],
    principiosEconomicos:
      'Livre iniciativa, proteção estrita à propriedade privada e aos contratos, livre comércio internacional e restrição de monopólios estatais.',
    principiosSociais:
      'Igualdade perante a lei, tolerância religiosa, liberdade de imprensa e autonomia individual contra arbitrariedades do poder público.',
    visaoEstado:
      'Estado constitucional limitado às funções essenciais de justiça, segurança, defesa e bens públicos básicos que o mercado não provê eficientemente.',
    relacaoDemocracia:
      'Defende o constitucionalismo, a separação dos poderes e o governo representativo com freios e contrapesos para impedir a tirania da maioria ou do Executivo.',
    exemplosHistoricos: [
      'Reino Unido da era vitoriana após a revogação das Corn Laws (1846)',
      'Fundação constitucional dos Estados Unidos (1787)',
    ],
    diferencasCorrentes:
      'Aceita funções públicas essenciais e freios institucionais, diferenciando-se do anarcocapitalismo; é mais restrito quanto a gastos sociais do que o liberalismo social.',
    fontes: [
      'Smith, Adam. A Riqueza das Nações (1776).',
      'Locke, John. Segundo Tratado sobre o Governo Civil (1689).',
      'Mill, John Stuart. Sobre a Liberdade (1859).',
    ],
    vector: {
      economia: 78,
      estado: -62,
      sociedade: 35,
      democracia: 72,
      nacionalismo: -35,
      internacional: 48,
      seguranca: 15,
      liberdades: 88,
      redistribuicao: -68,
      trabalho: -62,
      laicidade: 68,
      ecologia: -10,
    },
  },
  {
    id: 'liberalismo-social',
    nome: 'Liberalismo social',
    familia: 'Liberalismo Progressista',
    periodoOrigem: 'Final do século XIX — século XX',
    resumo:
      'Vertente do liberalismo que reconhece que a liberdade real exige condições materiais mínimas, justificando políticas públicas de educação, saúde e redução de desigualdades dentro de uma economia de mercado.',
    origemHistorica:
      'Surgiu no Reino Unido com o "Novo Liberalismo" (T. H. Green, L. T. Hobhouse) e expandiu-se no século XX com John Maynard Keynes, William Beveridge e John Rawls.',
    principaisPensadores: ['John Stuart Mill (transição)', 'L. T. Hobhouse', 'John Rawls', 'Amartya Sen', 'Norberto Bobbio'],
    principiosEconomicos:
      'Economia de mercado competitiva combinada com regulação antitruste, impostos progressivos, rede de proteção social e investimento público em capital humano.',
    principiosSociais:
      'Forte compromisso com direitos civis, igualdade de oportunidades, laicidade do Estado, inclusão de minorias e liberdades individuais.',
    visaoEstado:
      'Estado garantidor de direitos fundamentais e igualdade de ponto de partida, evitando tanto o dirigismo estatal excessivo quanto o laissez-faire puro.',
    relacaoDemocracia:
      'Defesa irrestrita da democracia liberal, dos direitos humanos, da independência judicial e do pluralismo cultural.',
    exemplosHistoricos: [
      'Reformas liberais britânicas de Lloyd George (1906–1914)',
      'Tradição do New Deal e da Great Society nos EUA (com nuances keynesianas)',
    ],
    diferencasCorrentes:
      'Valoriza mais o mercado e a autonomia individual do que a social-democracia clássica, porém diverge do neoliberalismo ao defender tributação progressiva e Estado social.',
    fontes: [
      'Rawls, John. Uma Teoria da Justiça (1971).',
      'Sen, Amartya. Desenvolvimento como Liberdade (1999).',
      'Hobhouse, L. T. Liberalism (1911).',
    ],
    vector: {
      economia: 25,
      estado: 35,
      sociedade: 78,
      democracia: 88,
      nacionalismo: -20,
      internacional: 76,
      seguranca: -22,
      liberdades: 82,
      redistribuicao: 42,
      trabalho: 28,
      laicidade: 82,
      ecologia: 64,
    },
  },
  {
    id: 'neoliberalismo',
    nome: 'Neoliberalismo',
    familia: 'Liberalismo de Mercado',
    periodoOrigem: 'Colóquio Walter Lippmann (1938) — hegemonia nos anos 1980',
    resumo:
      'Programa econômico e institucional voltado à desregulação dos mercados, privatização de estatais, austeridade fiscal, abertura comercial e autonomia de bancos centrais.',
    origemHistorica:
      'Desenvolvido por economistas da Escola de Chicago e da Sociedade Mont Pèlerin, ganhou centralidade política global nos governos de Margaret Thatcher (1979) e Ronald Reagan (1981) e no Consenso de Washington.',
    principaisPensadores: ['Friedrich Hayek', 'Milton Friedman', 'James Buchanan', 'Gary Becker'],
    principiosEconomicos:
      'Privatizações amplas, flexibilização trabalhista, metas de inflação e superávit fiscal, livre circulação de capitais e redução de alíquotas sobre empresas.',
    principiosSociais:
      'Ênfase na escolha individual, capital humano privado e responsabilidade pessoal, frequentemente mantendo programas sociais focalizados em vez de universais.',
    visaoEstado:
      'Estado focado em garantir direitos de propriedade, estabilidade monetária, abertura comercial e contratos privados, transferindo infraestrutura e serviços à gestão privada.',
    relacaoDemocracia:
      'Opera historicamente tanto em democracias liberais quanto, em casos pontuais da Guerra Fria (como o Chile nos anos 1970), sob regimes autoritários.',
    exemplosHistoricos: [
      'Reformas de Margaret Thatcher no Reino Unido (1979–1990)',
      'Reformas econômicas da Nova Zelândia (1984–1993)',
    ],
    diferencasCorrentes:
      'Diferencia-se do ordoliberalismo por confiar menos na regulação estatal da concorrência e mais na desregulação financeira; diverge do desenvolvimentismo ao rejeitar política industrial ativa.',
    fontes: [
      'Friedman, Milton. Capitalismo e Liberdade (1962).',
      'Harvey, David. O Neoliberalismo: História e Implicações (2005).',
      'Mirowski, Philip; Plehwe, Dieter. The Road from Mont Pèlerin (2009).',
    ],
    vector: {
      economia: 88,
      estado: -74,
      sociedade: 15,
      democracia: 52,
      nacionalismo: -48,
      internacional: 55,
      seguranca: 32,
      liberdades: 72,
      redistribuicao: -82,
      trabalho: -84,
      laicidade: 45,
      ecologia: -42,
    },
  },
  {
    id: 'conservadorismo',
    nome: 'Conservadorismo',
    familia: 'Tradição Conservadora',
    periodoOrigem: 'Final do século XVIII (Edmund Burke, 1790)',
    resumo:
      'Tradição política que valoriza a continuidade histórica, as instituições tradicionais (família, comunidade, direito consuetudinário), a prudência nas reformas e a responsabilidade moral.',
    origemHistorica:
      'Formulada como reação filosófica ao radicalismo abstrato da Revolução Francesa, enfatizando que as sociedades se apoiam em sabedoria acumulada ao longo de gerações.',
    principaisPensadores: ['Edmund Burke', 'Michael Oakeshott', 'Russell Kirk', 'Roger Scruton'],
    principiosEconomicos:
      'Respeito à propriedade privada e à livre iniciativa, aceitando historicamente pragmatismo fiscal e redes comunitárias ou estatais moderadas de proteção.',
    principiosSociais:
      'Preservação dos costumes tradicionais, autoridade moral, valorização da família e ceticismo diante de engenharia social acelerada.',
    visaoEstado:
      'Estado forte na garantia da ordem pública, da defesa nacional e das instituições históricas, porém limitado em ambições utópicas.',
    relacaoDemocracia:
      'Na tradição anglo-americana e europeia moderna, apoia a democracia constitucional e o parlamentarismo moderado com freios institucionais.',
    exemplosHistoricos: [
      'Partido Conservador Britânico (tradição "One Nation" de Disraeli a Macmillan)',
      'Konrad Adenauer na reconstrução alemã pós-1945 (em diálogo com a democracia cristã)',
    ],
    diferencasCorrentes:
      'Ao contrário do libertarianismo, subordina a liberdade abstrata à ordem moral e comunitária; ao contrário do fascismo, rejeita o totalitarismo estatal e rupturas revolucionárias.',
    fontes: [
      'Burke, Edmund. Reflexões sobre a Revolução na França (1790).',
      'Scruton, Roger. Como Ser um Conservador (2014).',
      'Oakeshott, Michael. Rationalism in Politics (1962).',
    ],
    vector: {
      economia: 48,
      estado: -10,
      sociedade: -68,
      democracia: 55,
      nacionalismo: 45,
      internacional: -10,
      seguranca: 62,
      liberdades: 22,
      redistribuicao: -38,
      trabalho: -24,
      laicidade: -68,
      ecologia: -18,
    },
  },
  {
    id: 'democracia-crista',
    nome: 'Democracia cristã',
    familia: 'Centro-Direita / Personalismo Social',
    periodoOrigem: 'Final do século XIX — pós-1945 na Europa e América Latina',
    resumo:
      'Corrente inspirada na doutrina social cristã (Rerum Novarum), combinando democracia constitucional, economia social de mercado, subsidiariedade e proteção à família e ao trabalho.',
    origemHistorica:
      'Consolidou-se na Europa pós-Segunda Guerra Mundial (CDU alemã, DC italiana) como força moderadora entre o liberalismo individualista e o comunismo soviético, tendo forte presença também na América Latina.',
    principaisPensadores: ['Jacques Maritain', 'Konrad Adenauer', 'Alcide De Gasperi', 'Eduardo Frei Montalva'],
    principiosEconomicos:
      'Economia social de mercado: propriedade privada com função social, negociação trabalhista, previdência social e regulação antimonopólio.',
    principiosSociais:
      'Valorização da família, solidariedade intergeracional, combate à pobreza extrema e ética personalista nos direitos humanos.',
    visaoEstado:
      'Princípio da subsidiariedade: o Estado deve atuar onde famílias, associações locais e municípios não dão conta, garantindo justiça social sem estatismo total.',
    relacaoDemocracia:
      'Pilar histórico da reconstrução democrática europeia pós-fascismo e da integração regional europeia.',
    exemplosHistoricos: [
      'Alemanha Ocidental sob Konrad Adenauer e Ludwig Erhard (1949–1963)',
      'Itália no pós-guerra sob Alcide De Gasperi',
      'Chile sob Eduardo Frei Montalva (1964–1970)',
    ],
    diferencasCorrentes:
      'Mais favorável a direitos sociais e regulação econômica do que o neoliberalismo; mais tradicionalista nos costumes do que o liberalismo social.',
    fontes: [
      'Maritain, Jacques. Humanismo Integral (1936).',
      'Kalyvas, Stathis. The Rise of Christian Democracy in Europe (1996).',
    ],
    vector: {
      economia: 20,
      estado: 38,
      sociedade: -28,
      democracia: 80,
      nacionalismo: 5,
      internacional: 72,
      seguranca: 24,
      liberdades: 45,
      redistribuicao: 26,
      trabalho: 38,
      laicidade: -36,
      ecologia: 32,
    },
  },
  {
    id: 'nacionalismo-economico',
    nome: 'Nacionalismo econômico',
    familia: 'Soberania Produtiva',
    periodoOrigem: 'Século XVIII–XIX (Hamilton, List) ao século XXI',
    resumo:
      'Doutrina que subordina políticas comerciais, industriais e financeiras à construção da autonomia produtiva, tecnológica e estratégica da nação.',
    origemHistorica:
      'Estruturada por Alexander Hamilton nos EUA (1791) e Friedrich List na Alemanha (1841), demonstrou que potências tardias precisam proteger suas indústrias nascentes antes de abrir mercados.',
    principaisPensadores: ['Alexander Hamilton', 'Friedrich List', 'Ha-Joon Chang'],
    principiosEconomicos:
      'Tarifas seletivas para indústrias nascentes, compras governamentais estratégicas, controle de recursos naturais, bancos de fomento e proteção cambial.',
    principiosSociais:
      'Foco na geração de empregos industriais qualificados domésticos e na coesão econômica territorial.',
    visaoEstado:
      'Estado estrategista e protetor do parque produtivo nacional frente a assimetrias do comércio global.',
    relacaoDemocracia:
      'Compatível tanto com democracias industriais (EUA no século XIX, Japão pós-1945) quanto com regimes autoritários desenvolvimentistas (Coreia do Sul nos anos 1960–1980).',
    exemplosHistoricos: [
      'Sistema Americano de tarifas industriais no século XIX',
      'Política industrial do MITI no Japão pós-1945',
    ],
    diferencasCorrentes:
      'Opõe-se frontalmente ao livre-cambismo neoliberal e ao cosmopolitismo irrestrito, embora frequentemente utilize empresas privadas nacionais como executoras.',
    fontes: [
      'List, Friedrich. Sistema Nacional de Economia Política (1841).',
      'Chang, Ha-Joon. Chutando a Escada (2002).',
    ],
    vector: {
      economia: -15,
      estado: 68,
      sociedade: -10,
      democracia: 20,
      nacionalismo: 88,
      internacional: -22,
      seguranca: 55,
      liberdades: 10,
      redistribuicao: 15,
      trabalho: 28,
      laicidade: -10,
      ecologia: -45,
    },
  },
  {
    id: 'desenvolvimentismo',
    nome: 'Desenvolvimentismo',
    familia: 'Soberania & Industrialização',
    periodoOrigem: 'Décadas de 1930–1970 (América Latina e Ásia)',
    resumo:
      'Modelo econômico e político segundo o qual países periféricos só superam o subdesenvolvimento mediante industrialização dirigida pelo Estado, infraestrutura e planejamento nacional.',
    origemHistorica:
      'Teorizado pela CEPAL (Raúl Prebisch e Celso Furtado) para enfrentar a deterioração dos termos de troca entre matérias-primas e manufaturas, com forte aplicação prática no Brasil (1930–1980) e no Leste Asiático.',
    principaisPensadores: ['Raúl Prebisch', 'Celso Furtado', 'Ignácio Rangel', 'Luiz Carlos Bresser-Pereira'],
    principiosEconomicos:
      'Substituição de importações ou promoção estratégica de exportações industriais, bancos públicos de desenvolvimento (BNDES), empresas estatais de base e câmbio competitivo.',
    principiosSociais:
      'Ampliação do mercado interno de massas por meio de urbanização, expansão educacional e valorização salarial associada ao ganho de produtividade.',
    visaoEstado:
      'Estado planejador e investidor em gargalos estruturais (energia, siderurgia, ciência e tecnologia) em aliança com o empresariado produtivo nacional.',
    relacaoDemocracia:
      'Teve historicamente fases democráticas (JK, Brizola, redemocratização) e fases autoritárias (Estado Novo, regime militar de 1964–1985), sendo hoje majoritariamente formulado como novo desenvolvimentismo democrático.',
    exemplosHistoricos: [
      'Plano de Metas de Juscelino Kubitschek no Brasil (1956–1961)',
      'Industrialização da Coreia do Sul e Taiwan (1960–1985)',
    ],
    diferencasCorrentes:
      'Diferencia-se do socialismo por manter propriedade privada e lucros industriais como motor central; diverge do liberalismo ortodoxo por rejeitar a especialização em commodities.',
    fontes: [
      'Furtado, Celso. Formação Econômica do Brasil (1959).',
      'Bielschowsky, Ricardo. Pensamento Econômico Brasileiro: O Ciclo Ideológico do Desenvolvimentismo (1988).',
    ],
    vector: {
      economia: -22,
      estado: 78,
      sociedade: 25,
      democracia: 35,
      nacionalismo: 75,
      internacional: 22,
      seguranca: 28,
      liberdades: 18,
      redistribuicao: 38,
      trabalho: 42,
      laicidade: 25,
      ecologia: -28,
    },
  },
  {
    id: 'trabalhismo',
    nome: 'Trabalhismo',
    familia: 'Esquerda / Centro-Esquerda Trabalhista',
    periodoOrigem: 'Século XX (Reino Unido, Austrália, Brasil)',
    resumo:
      'Corrente política centrada na dignidade do trabalho, na organização sindical, na legislação protetiva e no papel do Estado em garantir pleno emprego e serviços públicos universais.',
    origemHistorica:
      'Nasceu dos sindicatos operários britânicos e australianos (Labour Party) e, no Brasil, consolidou-se com o PTB de Vargas, Goulart e Brizola como projeto de inclusão trabalhista urbana e soberania nacional.',
    principaisPensadores: ['Clement Attlee', 'Alberto Pasqualini', 'João Goulart', 'Darcy Ribeiro'],
    principiosEconomicos:
      'Proteção ao salário mínimo real, consolidação de leis trabalhistas, fortalecimento de sindicatos, empresas estatais estratégicas e política de pleno emprego.',
    principiosSociais:
      'Educação pública em tempo integral, saúde pública universal, previdência solidária e inclusão social do trabalhador na cidadania plena.',
    visaoEstado:
      'Estado mediador entre capital e trabalho, comprometido com a justiça social e a soberania sobre riquezas naturais.',
    relacaoDemocracia:
      'Compromisso com a democracia eleitoral, sindicalismo ativo e reformas de base por via constitucional.',
    exemplosHistoricos: [
      'Governo Clement Attlee no Reino Unido (criação do NHS, 1945–1951)',
      'Reformas de Base propostas por João Goulart no Brasil (1961–1964)',
    ],
    diferencasCorrentes:
      'No Brasil, combina bem-estar trabalhista com nacionalismo econômico mais acentuado do que a social-democracia europeia contemporânea.',
    fontes: [
      'Ferreira, Jorge. O Imaginário Trabalhista (2005).',
      'Pasqualini, Alberto. Bases e Sugestões para uma Política Social (1948).',
    ],
    vector: {
      economia: -42,
      estado: 76,
      sociedade: 56,
      democracia: 72,
      nacionalismo: 58,
      internacional: 45,
      seguranca: -15,
      liberdades: 42,
      redistribuicao: 72,
      trabalho: 90,
      laicidade: 52,
      ecologia: 25,
    },
  },
  {
    id: 'getulismo',
    nome: 'Getulismo',
    familia: 'Trabalhismo Nacionalista Brasileiro',
    periodoOrigem: 'Brasil (1930–1954)',
    resumo:
      'Tradição política brasileira associada a Getúlio Vargas, marcada pela industrialização estatal de base, legislação trabalhista (CLT), centralização nacional e nacionalismo de recursos estratégicos.',
    origemHistorica:
      'Consolidada entre a Revolução de 1930, o Estado Novo (1937–1945) e o segundo governo constitucional de Vargas (1951–1954), que instituiu a Petrobras e a Eletrobras.',
    principaisPensadores: ['Getúlio Vargas', 'Lindolfo Collor', 'Barbosa Lima Sobrinho', 'Rômulo Almeida'],
    principiosEconomicos:
      'Industrialização acelerada liderada pelo Estado (CSN, Vale, Petrobras), crédito industrial estatal e integração do mercado nacional.',
    principiosSociais:
      'Reconhecimento legal dos direitos trabalhistas urbanos (salário mínimo, férias, jornada, previdência), com forte tutela estatal sobre a estrutura sindical.',
    visaoEstado:
      'Estado nacional forte, centralizador e árbitro das relações trabalhistas e da soberania sobre o subsolo e energia.',
    relacaoDemocracia:
      'História ambivalente: combinou a ditadura do Estado Novo (1937–1945) com o retorno eleitoral democrático e constitucional em 1950.',
    exemplosHistoricos: [
      'Criação da CLT (1943), CSN (1941) e Petrobras (1953) no Brasil',
    ],
    diferencasCorrentes:
      'Mais estatista e tutelar sobre os sindicatos do que o trabalhismo britânico; diferenciou-se do brizolismo por seu legado autoritário do Estado Novo e maior conciliação com elites agrárias.',
    fontes: [
      'Fausto, Boris. Getúlio Vargas: O Poder e o Sorriso (2006).',
      'D’Araújo, Maria Celina. O Estado Novo (2000).',
    ],
    vector: {
      economia: -30,
      estado: 84,
      sociedade: 5,
      democracia: -22,
      nacionalismo: 84,
      internacional: 10,
      seguranca: 42,
      liberdades: -15,
      redistribuicao: 42,
      trabalho: 76,
      laicidade: 12,
      ecologia: -45,
    },
  },
  {
    id: 'brizolismo',
    nome: 'Brizolismo',
    familia: 'Trabalhismo Democrático e Nacional-Popular',
    periodoOrigem: 'Brasil (1955–2004)',
    resumo:
      'Vertente radicalizada e democrática do trabalhismo brasileiro liderada por Leonel Brizola, centrada na educação pública integral (CIEPs), defesa da legalidade constitucional, reforma agrária e controle nacional da economia.',
    origemHistorica:
      'Emergiu com a Campanha da Legalidade (1961), as encampações de concessionárias estrangeiras no RS e o exílio, renovando-se na redemocratização com a fundação do PDT e o projeto educacional com Darcy Ribeiro.',
    principaisPensadores: ['Leonel Brizola', 'Darcy Ribeiro', 'Alberto Pasqualini (influência)'],
    principiosEconomicos:
      'Nacionalização ou controle estatal de setores estratégicos e serviços públicos essenciais, combate às remessas abusivas de lucros e reforma agrária produtiva.',
    principiosSociais:
      'Prioridade absoluta à escola pública em tempo integral com alimentação e cultura (CIEPs), proteção aos trabalhadores rurais e urbanos e respeito às liberdades civis.',
    visaoEstado:
      'Estado indutor social e soberano, rigorosamente subordinado à soberania popular e à legalidade constitucional.',
    relacaoDemocracia:
      'Forte compromisso com a legalidade democrática e mobilização popular (simbolizado pela Campanha da Legalidade em 1961).',
    exemplosHistoricos: [
      'Governo do Rio Grande do Sul (1959–1963) e Campanha da Legalidade (1961)',
      'Governos do Rio de Janeiro e implantação dos CIEPs (1983–1987 e 1991–1994)',
    ],
    diferencasCorrentes:
      'Distingue-se do getulismo por sua ruptura com o autoritarismo do Estado Novo e maior defesa das reformas estruturais e da educação como eixo emancipatório.',
    fontes: [
      'Ribeiro, Darcy. O Livro dos CIEPs (1986).',
      'Bandeira, Moniz. Brizola e o Trabalhismo (1979).',
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
      ecologia: 28,
    },
  },
  {
    id: 'keynesianismo',
    nome: 'Keynesianismo',
    familia: 'Macroeconomia da Demanda Efetiva',
    periodoOrigem: 'Década de 1930 (Teoria Geral, 1936)',
    resumo:
      'Corrente econômica baseada na obra de John Maynard Keynes que sustenta que economias capitalistas não atingem o pleno emprego automaticamente, exigindo política fiscal e monetária anticíclica do Estado.',
    origemHistorica:
      'Formulada durante a Grande Depressão dos anos 1930, tornou-se consenso macroeconômico nas democracias ocidentais entre 1945 e meados dos anos 1970 ("Era de Ouro do Capitalismo").',
    principaisPensadores: ['John Maynard Keynes', 'Michał Kalecki', 'Joan Robinson', 'Paul Krugman'],
    principiosEconomicos:
      'Gasto público contracíclico em recessões, estímulo à demanda agregada, regulação financeira internacional e busca de pleno emprego.',
    principiosSociais:
      'Redistribuição moderada para elevar a propensão marginal a consumir e estabilizar o pacto social capitalista.',
    visaoEstado:
      'Estado estabilizador do ciclo econômico e provedor de investimentos públicos quando o setor privado retrai por incerteza.',
    relacaoDemocracia:
      'Desenvolvida para preservar economias democráticas contra os extremos do colapso depressivo e do autoritarismo.',
    exemplosHistoricos: [
      'Políticas fiscais dos EUA e Europa Ocidental entre 1945 e 1973',
      'Pacotes de estímulo econômico após a crise financeira de 2008',
    ],
    diferencasCorrentes:
      'Não propõe estatização total da economia (diferente do socialismo), mas rejeita a tese neoliberal de que mercados desregulados se autorregulam em pleno emprego.',
    fontes: [
      'Keynes, John Maynard. A Teoria Geral do Emprego, do Juro e da Moeda (1936).',
      'Skidelsky, Robert. John Maynard Keynes: 1883–1946 (2003).',
    ],
    vector: {
      economia: -12,
      estado: 66,
      sociedade: 45,
      democracia: 76,
      nacionalismo: 18,
      internacional: 58,
      seguranca: -5,
      liberdades: 55,
      redistribuicao: 52,
      trabalho: 48,
      laicidade: 48,
      ecologia: 22,
    },
  },
  {
    id: 'ordoliberalismo',
    nome: 'Ordoliberalismo',
    familia: 'Liberalismo Institucional Alemão',
    periodoOrigem: 'Décadas de 1930–1950 (Escola de Friburgo)',
    resumo:
      'Variante alemã do liberalismo segundo a qual o livre mercado não existe naturalmente sem um marco jurídico forte criado pelo Estado para impedir cartéis, monopólios e inflação.',
    origemHistorica:
      'Desenvolvida na Universidade de Friburgo por Walter Eucken e Franz Böhm contra os cartéis da República de Weimar e o dirigismo nazista, influenciando diretamente a reconstrução alemã pós-1948.',
    principaisPensadores: ['Walter Eucken', 'Franz Böhm', 'Wilhelm Röpke', 'Ludwig Erhard'],
    principiosEconomicos:
      'Competição protegida por forte lei antitruste, moeda estável (banco central independente), disciplina fiscal rígida e responsabilidade jurídica individual.',
    principiosSociais:
      'Seguridade social compatível com a ordem de mercado, evitando privilégios corporativos e clientelismo estatal.',
    visaoEstado:
      'Estado árbitro e guardião das regras constitucionais da concorrência ("Ordnungspolitik"), evitando intervir diretamente nos preços.',
    relacaoDemocracia:
      'Apoia o Estado de direito democrático ancorado em regras econômicas constitucionais estáveis.',
    exemplosHistoricos: [
      'Reforma monetária e política econômica da Alemanha Ocidental sob Ludwig Erhard (1948–1963)',
      'Arquitetura jurídica da concorrência na União Europeia',
    ],
    diferencasCorrentes:
      'Diferencia-se do neoliberalismo anglo-saxão por exigir um Estado juridicamente robusto para conter monopólios privados e proteger a ordem social.',
    fontes: [
      'Eucken, Walter. Grundsätze der Wirtschaftspolitik (1952).',
      'Bonefeld, Werner. The Strong State and the Free Economy (2017).',
    ],
    vector: {
      economia: 56,
      estado: 12,
      sociedade: -10,
      democracia: 75,
      nacionalismo: -15,
      internacional: 62,
      seguranca: 28,
      liberdades: 64,
      redistribuicao: -28,
      trabalho: -20,
      laicidade: 22,
      ecologia: 12,
    },
  },
  {
    id: 'economia-social-de-mercado',
    nome: 'Economia social de mercado',
    familia: 'Centro / Modelo Renano',
    periodoOrigem: 'Pós-1945 (Alemanha Ocidental)',
    resumo:
      'Modelo socioeconômico que associa iniciativa privada e eficiência competitiva a um robusto sistema de proteção social, cogestão trabalhista e equilíbrio regional.',
    origemHistorica:
      'Cunhada por Alfred Müller-Armack e implementada por Ludwig Erhard como síntese entre o ordoliberalismo, a democracia cristã e concessões sociais negociadas com os sindicatos alemães.',
    principaisPensadores: ['Alfred Müller-Armack', 'Ludwig Erhard', 'Konrad Adenauer'],
    principiosEconomicos:
      'Mercado livre com correções sociais, cogestão nas grandes empresas (Mitbestimmung), formação técnica profissionalizante e estabilidade monetária.',
    principiosSociais:
      'Segurança previdenciária e de saúde ampla, mantendo incentivos à poupança, qualificação profissional e produtividade.',
    visaoEstado:
      'Estado regulador e garantidor de compensação social sem substituir os empresários e trabalhadores na alocação diária.',
    relacaoDemocracia:
      'Fortemente vinculada ao parlamentarismo consensual e à concertação social entre capital e trabalho.',
    exemplosHistoricos: [
      'Modelo econômico da República Federal da Alemanha (1949 em diante)',
      'Pactos sociais da Áustria e dos Países Baixos no pós-guerra',
    ],
    diferencasCorrentes:
      'Mais inclinada ao mercado e à responsabilidade fiscal do que a social-democracia nórdica, mas muito mais protetora socialmente do que o liberalismo norte-americano.',
    fontes: [
      'Erhard, Ludwig. Wohlstand für Alle (1957).',
      'Albert, Michel. Capitalisme contre Capitalisme (1991).',
    ],
    vector: {
      economia: 34,
      estado: 42,
      sociedade: 18,
      democracia: 84,
      nacionalismo: 5,
      internacional: 74,
      seguranca: 15,
      liberdades: 62,
      redistribuicao: 24,
      trabalho: 42,
      laicidade: 20,
      ecologia: 38,
    },
  },
  {
    id: 'distributismo',
    nome: 'Distributismo',
    familia: 'Terceira Via Comunitária',
    periodoOrigem: 'Início do século XX (Reino Unido)',
    resumo:
      'Doutrina socioeconômica que defende a desconcentração máxima da propriedade produtiva — terras, oficinas, cooperativas e pequenos negócios — contra tanto os grandes monopólios capitalistas quanto a estatização socialista.',
    origemHistorica:
      'Elaborada por G. K. Chesterton e Hilaire Belloc a partir da encíclica Rerum Novarum (1891) e da crítica à proletarização industrial.',
    principaisPensadores: ['G. K. Chesterton', 'Hilaire Belloc', 'E. F. Schumacher'],
    principiosEconomicos:
      'Apoio a pequenas propriedades familiares, cooperativas de crédito e produção, tributação penalizadora de megacorporações e economia de escala humana.',
    principiosSociais:
      'Preservação das famílias, ofícios locais, associações comunitárias e autonomia material do cidadão.',
    visaoEstado:
      'Estado subsidiário que impede a concentração oligopolista e protege a autonomia municipal e cooperativa.',
    relacaoDemocracia:
      'Defende participação cívica local descentralizada, desconfiando tanto de burocratas centrais quanto de plutocracias.',
    exemplosHistoricos: [
      'Corporação Cooperativa de Mondragón no País Basco (afinidade cooperativa)',
      'Movimento distributista britânico do entreguerras',
    ],
    diferencasCorrentes:
      'Rejeita a concentração de capital do neoliberalismo e a concentração estatal do marxismo-leninismo, propondo ampla propriedade privada pulverizada.',
    fontes: [
      'Belloc, Hilaire. The Servile State (1912).',
      'Chesterton, G. K. The Outline of Sanity (1926).',
    ],
    vector: {
      economia: 10,
      estado: -15,
      sociedade: -45,
      democracia: 62,
      nacionalismo: 25,
      internacional: 10,
      seguranca: 15,
      liberdades: 52,
      redistribuicao: 18,
      trabalho: 30,
      laicidade: -55,
      ecologia: 48,
    },
  },
  {
    id: 'libertarianismo',
    nome: 'Libertarianismo',
    familia: 'Anti-Estatismo de Mercado',
    periodoOrigem: 'Meados do século XX (EUA / Escola Austríaca)',
    resumo:
      'Filosofia política radicalmente centrada na autopropriedade individual, nos contratos voluntários e na redução extrema ou abolição do Estado e da tributação compulsória.',
    origemHistorica:
      'Articulada nos Estados Unidos a partir do cruzamento entre a Escola Austríaca (Ludwig von Mises, Murray Rothbard) e o filosofar de Robert Nozick e Ayn Rand.',
    principaisPensadores: ['Robert Nozick', 'Murray Rothbard', 'Ludwig von Mises', 'David Friedman'],
    principiosEconomicos:
      'Livre mercado absoluto, abolição de bancos centrais estatais e regulações trabalhistas ou ambientais estatais, privatização integral e impostos mínimos ou nulos.',
    principiosSociais:
      'Liberdade individual radical em escolhas privadas (consumo, expressão, estilo de vida), desde que não haja agressão física a terceiros.',
    visaoEstado:
      'No minarquismo, restringe o Estado a polícia, tribunais e defesa; no anarcocapitalismo, propõe substituir integralmente o Estado por agências privadas.',
    relacaoDemocracia:
      'Subordina decisões majoritárias aos direitos absolutos de propriedade e associação voluntária; vê a democracia sem limites como potencial ameaça à minoria proprietária.',
    exemplosHistoricos: [
      'Partido Libertário nos Estados Unidos (fundado em 1971)',
      'Experiências pontuais de desregulação e zonas econômicas especiais libertárias',
    ],
    diferencasCorrentes:
      'Diferencia-se do conservadorismo por defender liberdades comportamentais amplas e rejeitar o nacionalismo militarista; diverge do anarquismo clássico ao defender o capitalismo sem limites.',
    fontes: [
      'Nozick, Robert. Anarquia, Estado e Utopia (1974).',
      'Rothbard, Murray. A Ética da Liberdade (1982).',
    ],
    vector: {
      economia: 96,
      estado: -95,
      sociedade: 42,
      democracia: 25,
      nacionalismo: -72,
      internacional: 25,
      seguranca: -10,
      liberdades: 96,
      redistribuicao: -94,
      trabalho: -95,
      laicidade: 76,
      ecologia: -48,
    },
  },
  {
    id: 'anarquismo',
    nome: 'Anarquismo',
    familia: 'Socialismo Libertário / Antiautoritarismo',
    periodoOrigem: 'Século XIX (Proudhon, Bakunin, Kropotkin)',
    resumo:
      'Corrente política que rejeita toda autoridade hierárquica coercitiva — especialmente o Estado e o capitalismo — propondo uma sociedade baseada em associações livres, federalismo horizontal e ajuda mútua.',
    origemHistorica:
      'Estruturada por Pierre-Joseph Proudhon ("A propriedade é um roubo", 1840), Mikhail Bakunin na Primeira Internacional e Piotr Kropotkin, com forte expressão sindicalista na Espanha e na América Latina no início do século XX.',
    principaisPensadores: ['Pierre-Joseph Proudhon', 'Mikhail Bakunin', 'Piotr Kropotkin', 'Emma Goldman', 'Errico Malatesta'],
    principiosEconomicos:
      'Autogestão operária, propriedade coletiva ou de posse pelo uso, federações de comunas e sindicatos livres, sem patrões nem burocratas estatais.',
    principiosSociais:
      'Igualdade radical, educação racionalista libertária, emancipação de gênero e abolição das prisões e forças armadas permanentes.',
    visaoEstado:
      'Rejeita o Estado mesmo como instrumento de transição revolucionária, considerando que todo poder estatal reproduz dominação.',
    relacaoDemocracia:
      'Substitui a democracia representativa parlamentar por democracia direta em assembleias locais e delegados revogáveis.',
    exemplosHistoricos: [
      'Coletividades anarcossindicalistas na Catalunha e Aragão (1936–1937)',
      'Território Livre de Makhnovshchina na Ucrânia (1918–1921)',
    ],
    diferencasCorrentes:
      'Rompe com o marxismo-leninismo por rejeitar o Estado transitório e o partido de vanguarda; opõe-se ao libertarianismo capitalista ao rejeitar propriedade privada acumulativa.',
    fontes: [
      'Kropotkin, Piotr. Ajuda Mútua: Um Fator de Evolução (1902).',
      'Guérin, Daniel. O Anarquismo (1965).',
    ],
    vector: {
      economia: -88,
      estado: -96,
      sociedade: 86,
      democracia: 65,
      nacionalismo: -75,
      internacional: 55,
      seguranca: -88,
      liberdades: 92,
      redistribuicao: 88,
      trabalho: 92,
      laicidade: 90,
      ecologia: 68,
    },
  },
  {
    id: 'fascismo',
    nome: 'Fascismo',
    familia: 'Autoritarismo Ultranacionalista',
    periodoOrigem: 'Período Entreguerras (Itália, 1919–1945)',
    resumo:
      'Ideologia autoritária ultranacionalista do século XX caracterizada pela supremacia absoluta do Estado totalitário, culto ao líder, militarismo, corporativismo hierárquico e supressão da oposição.',
    origemHistorica:
      'Surgiu na Itália após a Primeira Guerra Mundial sob Benito Mussolini, expandindo-se em variantes europeias marcadas por mobilização de massas, anticomunismo, antiliberalismo e violência política.',
    principaisPensadores: ['Giovanni Gentile', 'Benito Mussolini', 'Alfredo Rocco'],
    principiosEconomicos:
      'Dirigismo corporativista que mantém propriedade privada subordinada às metas geopolíticas e bélicas do Estado, proibindo greves e sindicatos autônomos.',
    principiosSociais:
      'Hierarquia social rígida, nacionalismo excludente, submissão do indivíduo à coletividade nacional e mobilização paramilitar da juventude.',
    visaoEstado:
      'Estado totalitário ("Tudo no Estado, nada contra o Estado, nada fora do Estado"), centralização absoluta do Executivo e censura.',
    relacaoDemocracia:
      'Rejeita frontalmente a democracia liberal, o parlamentarismo, o pluripartidarismo e os direitos humanos individuais.',
    exemplosHistoricos: [
      'Itália Fascista (1922–1943)',
      'Regimes fascistas e parafascistas europeus do entreguerras (1922–1945)',
    ],
    diferencasCorrentes:
      'Opõe-se igualmente ao liberalismo democrático, ao conservadorismo tradicional moderado e ao socialismo marxista.',
    fontes: [
      'Paxton, Robert O. A Anatomia do Fascismo (2004).',
      'Gentile, Emilio. Fascismo: História e Interpretação (2002).',
    ],
    vector: {
      economia: 10,
      estado: 94,
      sociedade: -88,
      democracia: -96,
      nacionalismo: 96,
      internacional: -88,
      seguranca: 96,
      liberdades: -95,
      redistribuicao: -20,
      trabalho: -55,
      laicidade: -65,
      ecologia: -52,
    },
  },
  {
    id: 'nacionalismo-revolucionario',
    nome: 'Nacionalismo revolucionário',
    familia: 'Soberania Anti-Imperialista / Terceira Posição',
    periodoOrigem: 'Século XX (Movimentos anticoloniais e latino-americanos)',
    resumo:
      'Corrente heterogênea que articula ruptura anti-imperialista, mobilização popular nacionalista, estatização de riquezas estratégicas e afirmação soberana frente às grandes potências.',
    origemHistorica:
      'Manifestou-se em processos de descolonização e revoluções nacionais do século XX, como o cardenismo mexicano, o nasserismo egípcio, o nacionalismo boliviano de 1952 e correntes do peronismo.',
    principaisPensadores: ['Gamal Abdel Nasser', 'Víctor Raúl Haya de la Torre', 'Lázaro Cárdenas (prática)', 'Frantz Fanon (vertente anticolonial)'],
    principiosEconomicos:
      'Nacionalização do petróleo, mineração e bancos centrais, reforma agrária nacional, industrialização estatal e ruptura com tutelas financeiras externas.',
    principiosSociais:
      'Integração nacional de camadas populares e camponesas anteriormente marginalizadas e afirmação cultural autóctone.',
    visaoEstado:
      'Estado altamente ativo, mobilizador e centralizado na defesa da soberania econômica e territorial.',
    relacaoDemocracia:
      'Oscila historicamente entre nacional-populismos eleitorais, regimes de partido dominante e governos militares nacionalistas.',
    exemplosHistoricos: [
      'Nacionalização do petróleo no México sob Lázaro Cárdenas (1938)',
      'Revolução Nacional da Bolívia (1952) e Egito de Nasser (1952–1970)',
    ],
    diferencasCorrentes:
      'Mais estatizante e anti-imperialista do que o conservadorismo nacional; menos internacionalista e classista ortodoxo do que o marxismo-leninismo.',
    fontes: [
      'Moraes, Reginaldo; et al. Nacionalismo e Desenvolvimento (2010).',
      'Chatterjee, Partha. Nationalist Thought and the Colonial World (1986).',
    ],
    vector: {
      economia: -48,
      estado: 85,
      sociedade: 15,
      democracia: -12,
      nacionalismo: 94,
      internacional: -10,
      seguranca: 55,
      liberdades: -18,
      redistribuicao: 56,
      trabalho: 52,
      laicidade: 28,
      ecologia: -38,
    },
  },
  {
    id: 'ecossocialismo',
    nome: 'Ecossocialismo',
    familia: 'Esquerda Ecológica',
    periodoOrigem: 'Final do século XX — século XXI',
    resumo:
      'Corrente que integra a crítica marxista à acumulação ilimitada de capital com a ecologia política, propondo planejamento democrático voltado à sustentabilidade planetária e justiça climática.',
    origemHistorica:
      'Desenvolvida a partir dos anos 1970–1990 por teóricos como André Gorz, James O’Connor, Joel Kovel e Michael Löwy diante da crise ecológica global.',
    principaisPensadores: ['Michael Löwy', 'André Gorz', 'John Bellamy Foster', 'Kohei Saito'],
    principiosEconomicos:
      'Redução da jornada de trabalho, desmercadorização do transporte e energia, transição energética pública rápida, agroecologia e limites ao extrativismo predatório.',
    principiosSociais:
      'Justiça ambiental (proteção a povos indígenas e periferias vulneráveis), bem-viver e consumo sustentável.',
    visaoEstado:
      'Estado e comunidades locais coordenando a reconversão ecológica da matriz produtiva e impondo limites estritos a corporações poluidoras.',
    relacaoDemocracia:
      'Defende planejamento ecológico democrático e participação direta das comunidades afetadas.',
    exemplosHistoricos: [
      'Redes ecossocialistas internacionais e plataformas verdes de esquerda na Europa e América Latina',
    ],
    diferencasCorrentes:
      'Distingue-se do capitalismo verde por afirmar que o crescimento ilimitado orientado ao lucro é incompatível com os limites biofísicos do planeta; difere do socialismo produtivista do século XX por rejeitar o industrialismo poluente.',
    fontes: [
      'Löwy, Michael. O que é o Ecossocialismo? (2014).',
      'Foster, John Bellamy. A Ecologia de Marx (2000).',
    ],
    vector: {
      economia: -74,
      estado: 64,
      sociedade: 88,
      democracia: 80,
      nacionalismo: -15,
      internacional: 82,
      seguranca: -58,
      liberdades: 58,
      redistribuicao: 88,
      trabalho: 82,
      laicidade: 78,
      ecologia: 96,
    },
  },
  {
    id: 'socialismo-de-mercado',
    nome: 'Socialismo de mercado',
    familia: 'Economia Mista Socialista',
    periodoOrigem: 'Século XX (Oskar Lange; reformas pós-1978)',
    resumo:
      'Modelo que combina propriedade pública ou cooperativa dominante sobre grandes ativos produtivos com o uso de mecanismos de mercado e competição de preços para alocar bens e incentivar eficiência.',
    origemHistorica:
      'Teorizado no debate do cálculo econômico dos anos 1930 (Oskar Lange e Abba Lerner), teve aplicações históricas distintas na autogestão iugoslava e, em formato estatal-capitalista híbrido, nas reformas chinesas pós-1978.',
    principaisPensadores: ['Oskar Lange', 'John Roemer', 'Alec Nove', 'Deng Xiaoping (prática estatal)'],
    principiosEconomicos:
      'Empresas estatais, cooperativas ou fundos soberanos públicos competindo em mercados abertos, convivendo com setor privado regulado sob metas de planejamento de longo prazo.',
    principiosSociais:
      'Distribuição de dividendos sociais ou expansão rápida da renda e infraestrutura pública com preservação de incentivos produtivos.',
    visaoEstado:
      'Estado estrategista proprietário de setores-chave (finanças, energia, infraestrutura) que usa sinais de mercado para evitar ineficiências da planificação rígida.',
    relacaoDemocracia:
      'Divide-se entre modelos teóricos democráticos (John Roemer) e experiências históricas autoritárias de partido único (China, Vietnã).',
    exemplosHistoricos: [
      'Reforma e Abertura da China a partir de 1978 ("Socialismo com características chinesas")',
      'Socialismo autogestionário de mercado da Iugoslávia (1950–1980)',
    ],
    diferencasCorrentes:
      'Diferencia-se do comunismo planificado por preservar preços de mercado e lucro operacional; diferencia-se do capitalismo liberal pela primazia de ativos públicos e bancos estatais.',
    fontes: [
      'Lange, Oskar. On the Economic Theory of Socialism (1938).',
      'Roemer, John E. A Future for Socialism (1994).',
      'Naughton, Barry. The Chinese Economy: Adaptation and Growth (2018).',
    ],
    vector: {
      economia: -48,
      estado: 82,
      sociedade: 15,
      democracia: -20,
      nacionalismo: 58,
      internacional: 25,
      seguranca: 42,
      liberdades: -12,
      redistribuicao: 45,
      trabalho: 32,
      laicidade: 58,
      ecologia: -20,
    },
  },
  {
    id: 'republicanismo',
    nome: 'Republicanismo',
    familia: 'Filosofia Cívica e Constitucional',
    periodoOrigem: 'Antiguidade Clássica, Renascimento e Iluminismo',
    resumo:
      'Tradição política centrada na liberdade como não-dominação, na coisa pública (res publica) acima de interesses privados, na virtude cívica, na separação de poderes e na igualdade cidadã.',
    origemHistorica:
      'Enraizada em Cícero, Maquiavel (Discursos), Harrington, Rousseau e nos debates constitucionais modernos, foi sistematizada contemporaneamente pelo neorrepublicanismo de Philip Pettit e Quentin Skinner.',
    principaisPensadores: ['Nicolau Maquiavel', 'Jean-Jacques Rousseau', 'Montesquieu', 'Philip Pettit', 'Hannah Arendt'],
    principiosEconomicos:
      'Aceita economia de mercado ou mista desde que a concentração extrema de riqueza privada não permita que oligarquias capturem o Estado e dominem outros cidadãos.',
    principiosSociais:
      'Laicidade do Estado, igualdade de cidadania, educação cívica pública e rejeição a privilégios hereditários ou estamentais.',
    visaoEstado:
      'Estado constitucional impessoal governado por leis públicas transparentes, com rigoroso controle contra corrupção e captura patrimonialista.',
    relacaoDemocracia:
      'Exige instituições republicanas sólidas, participação cívica ativa, imprensa livre e controle mútuo entre os poderes.',
    exemplosHistoricos: [
      'Terceira República Francesa e instituição do Estado laico (1905)',
      'Consolidação constitucional da redemocratização brasileira (Constituição de 1988)',
    ],
    diferencasCorrentes:
      'Diferencia-se do liberalismo estrito por conceber liberdade não apenas como "ausência de interferência", mas como "ausência de dominação arbitrária" (inclusive privada).',
    fontes: [
      'Pettit, Philip. Republicanism: A Theory of Freedom and Government (1997).',
      'Skinner, Quentin. Liberty Before Liberalism (1998).',
      'Bignotto, Newton. As Aventuras da Virtude (2010).',
    ],
    vector: {
      economia: 5,
      estado: 35,
      sociedade: 48,
      democracia: 92,
      nacionalismo: 25,
      internacional: 52,
      seguranca: 5,
      liberdades: 72,
      redistribuicao: 32,
      trabalho: 25,
      laicidade: 88,
      ecologia: 44,
    },
  },
];
