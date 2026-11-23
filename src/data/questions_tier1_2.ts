import { QuizQuestion } from '../shared/types.ts';

export const QUESTIONS_TIER_1_2: QuizQuestion[] = [
  // =========================================================================
  // TIER 1 (35 PERGUNTAS — 5 POR ÁREA TEMÁTICA) -> BASE DO TESTE RÁPIDO (35 + 1 = 36)
  // =========================================================================

  // ECONOMIA (5)
  {
    id: 'q001',
    modeTier: 1,
    area: 'Economia',
    subtopic: 'Livre mercado vs Planejamento',
    statement:
      'A coordenação descentralizada de preços em mercados competitivos aloca recursos produtivos com maior eficiência do que o planejamento econômico estatal.',
    weights: { economia: 1.0, estado: -0.6 },
    weightStrength: 1.2,
    entenda: {
      oQueSignifica:
        'Investiga qual mecanismo deve organizar a produção e a distribuição de bens: o sistema de preços livres ou planos econômicos elaborados pelo Estado.',
      conceito: 'Cálculo econômico e alocação de recursos (Hayek vs. Lange/planejamento).',
      concordarRepresenta:
        'Valoriza o livre mercado, a propriedade privada e os sinais de oferta e demanda como mais ágeis e informativos do que burocracias centrais.',
      discordarRepresenta:
        'Avalia que mercados desregulados geram desigualdades, crises cíclicas e falhas ambientais, exigindo planejamento público estratégico.',
      exemplosHistoricos:
        'Debate do cálculo socialista nos anos 1930; reformas de mercado pós-1978 na China versus planejamento soviético.',
    },
  },
  {
    id: 'q002',
    modeTier: 1,
    area: 'Economia',
    subtopic: 'Empresas estatais vs Privatizações',
    statement:
      'Setores estratégicos como energia elétrica, saneamento básico e petróleo devem permanecer sob controle estatal majoritário.',
    weights: { economia: -0.9, estado: 0.9, nacionalismo: 0.5 },
    weightStrength: 1.2,
    entenda: {
      oQueSignifica:
        'Questiona se infraestruturas essenciais e monopólios naturais devem pertencer ao poder público ou ser concedidos/privatizados ao setor privado.',
      conceito: 'Monopólios naturais, soberania energética e função social das estatais.',
      concordarRepresenta:
        'Prioriza universalização tarifária, segurança nacional e retenção de lucros estratégicos para investimento público.',
      discordarRepresenta:
        'Entende que a gestão privada concorrencial ou regulada traz maior eficiência operacional e reduz o risco de captura política.',
      exemplosHistoricos:
        'Criação da Petrobras (1953) e Equinor norueguesa versus privatizações britânicas dos anos 1980.',
    },
  },
  {
    id: 'q003',
    modeTier: 1,
    area: 'Economia',
    subtopic: 'Tributação progressiva e Distribuição de renda',
    statement:
      'Impostos sobre grandes rendas, heranças e lucros financeiros devem ser significativamente elevados para financiar políticas de redução da desigualdade.',
    weights: { economia: -0.85, estado: 0.85, sociedade: 0.45 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Avalia o papel redistributivo do sistema tributário, comparando tributação progressiva sobre riqueza com alíquotas menores sobre capital e renda.',
      conceito: 'Progressividade tributária e justiça distributiva.',
      concordarRepresenta:
        'Defende que quem possui maior capacidade contributiva deve arcar com proporção maior dos impostos para reduzir concentrações extremas de renda.',
      discordarRepresenta:
        'Argumenta que impostos elevados sobre capital e herança desestimulam poupança, investimento produtivo e atração de empreendedores.',
      exemplosHistoricos:
        'Alíquotas marginais superiores a 70% nos EUA e Europa entre 1945–1975 versus cortes tributários dos anos 1980.',
    },
  },
  {
    id: 'q004',
    modeTier: 1,
    area: 'Economia',
    subtopic: 'Protecionismo e Desenvolvimento industrial',
    statement:
      'Países em desenvolvimento devem proteger suas indústrias nascentes com tarifas e compras governamentais antes de abrir plenamente seus mercados.',
    weights: { economia: -0.4, estado: 0.75, nacionalismo: 0.95, internacional: -0.35 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Trata do conflito clássico entre livre comércio imediato e proteção seletiva da indústria doméstica para construir complexidade tecnológica.',
      conceito: 'Protecionismo de indústria nascente (Hamilton, Friedrich List, CEPAL).',
      concordarRepresenta:
        'Acredita que abrir mercados prematuramente condena economias periféricas à exportação de matérias-primas de baixo valor agregado.',
      discordarRepresenta:
        'Sustenta que tarifas encarecem bens ao consumidor, protegem empresas ineficientes e prejudicam a inserção em cadeias globais.',
      exemplosHistoricos:
        'Industrialização dos EUA no séc. XIX, Coreia do Sul (1960–1985) e debate entre Chile aberto e Brasil desenvolvimentista.',
    },
  },
  {
    id: 'q005',
    modeTier: 1,
    area: 'Economia',
    subtopic: 'Direitos trabalhistas e Sindicalismo',
    statement:
      'A negociação individual direta entre empregador e trabalhador deve prevalecer sobre convenções sindicais coletivas e regras trabalhistas rígidas.',
    weights: { economia: 0.9, estado: -0.7, sociedade: -0.2, liberdades: 0.35 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Examina o equilíbrio de poder nas relações de trabalho entre contratos individuais flexíveis e proteção sindical/legal coletiva.',
      conceito: 'Flexibilização laboral versus proteção coletiva do trabalho.',
      concordarRepresenta:
        'Prioriza redução de custos de contratação, adaptação rápida às variações econômicas e liberdade contratual.',
      discordarRepresenta:
        'Considera que há assimetria de poder entre empresa e trabalhador isolado, tornando sindicatos e leis protetivas indispensáveis.',
      exemplosHistoricos:
        'Modelo dinamarquês de negociação coletiva versus desregulação trabalhista anglo-saxã nos anos 1980.',
    },
  },

  // ESTADO E GOVERNANÇA (5)
  {
    id: 'q006',
    modeTier: 1,
    area: 'Estado e Governança',
    subtopic: 'Tamanho do Estado',
    statement:
      'As atribuições do Estado devem limitar-se essencialmente à justiça, segurança pública, defesa e garantia de contratos.',
    weights: { economia: 0.85, estado: -1.0, liberdades: 0.45 },
    weightStrength: 1.25,
    entenda: {
      oQueSignifica:
        'Define a fronteira fundamental entre o modelo de Estado mínimo e os modelos de Estado social ou desenvolvimentista.',
      conceito: 'Estado Mínimo (Gendarme) vs. Estado de Bem-Estar Social.',
      concordarRepresenta:
        'Defende que educação, saúde, previdência e infraestrutura funcionam melhor sob provisão privada ou comunitária voluntária.',
      discordarRepresenta:
        'Afirma que o Estado deve garantir direitos sociais universais e induzir o desenvolvimento econômico e científico.',
      exemplosHistoricos:
        'Estado liberal do século XIX versus construção do Welfare State europeu pós-1945.',
    },
  },
  {
    id: 'q007',
    modeTier: 1,
    area: 'Estado e Governança',
    subtopic: 'Instituições democráticas e Separação dos poderes',
    statement:
      'Mesmo em crises econômicas ou políticas graves, o Poder Executivo jamais deve restringir a independência do Legislativo, do Judiciário ou da imprensa.',
    weights: { democracia: 1.0, liberdades: 0.7 },
    weightStrength: 1.25,
    entenda: {
      oQueSignifica:
        'Avalia o grau de adesão incondicional aos freios e contrapesos constitucionais diante de apelos por concentração emergencial de poder.',
      conceito: 'Constitucionalismo liberal-democrático e separação dos poderes (Montesquieu).',
      concordarRepresenta:
        'Considera que limites institucionais ao governante são a única proteção eficaz contra abusos autoritários.',
      discordarRepresenta:
        'Admite concentração excepcional de autoridade no Executivo quando instituições parlamentares bloqueiam decisões urgentes.',
      exemplosHistoricos:
        'Queda da República de Weimar (1933) versus preservação institucional na Grande Depressão dos EUA.',
    },
  },
  {
    id: 'q008',
    modeTier: 1,
    area: 'Estado e Governança',
    subtopic: 'Participação popular e Plebiscitos',
    statement:
      'Grandes decisões nacionais e orçamentos públicos locais devem ser submetidos regularmente a plebiscitos, referendos e mecanismos de democracia participativa.',
    weights: { democracia: 0.85, liberdades: 0.25 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Explora a tensão entre democracia puramente representativa (via parlamentares eleitos) e mecanismos de democracia direta.',
      conceito: 'Democracia participativa e soberania popular direta.',
      concordarRepresenta:
        'Busca reduzir o distanciamento entre eleitores e representantes por meio de consultas diretas e orçamentos participativos.',
      discordarRepresenta:
        'Teme que plebiscitos frequentes simplifiquem temas técnicos complexos ou favoreçam decisões impulsivas de curto prazo.',
      exemplosHistoricos:
        'Sistema suíço de referendos frequentes; Orçamento Participativo de Porto Alegre (1989).',
    },
  },
  {
    id: 'q009',
    modeTier: 1,
    area: 'Estado e Governança',
    subtopic: 'Federalismo e Descentralização',
    statement:
      'Estados e municípios devem possuir ampla autonomia fiscal e legislativa, reduzindo a concentração de decisões e recursos no governo federal.',
    weights: { estado: -0.55, democracia: 0.35, nacionalismo: -0.25 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Trata da distribuição vertical de poder entre governo central e entes regionais ou locais.',
      conceito: 'Federalismo descentralizado versus centralização unitária.',
      concordarRepresenta:
        'Valoriza proximidade das decisões aos cidadãos locais e competição saudável entre jurisdições.',
      discordarRepresenta:
        'Preocupa-se com o aumento de desigualdades entre regiões ricas e pobres sem coordenação fiscal central.',
      exemplosHistoricos:
        'Federalismo suíço e americano versus tradição unitária francesa.',
    },
  },
  {
    id: 'q010',
    modeTier: 1,
    area: 'Estado e Governança',
    subtopic: 'Autoridade governamental e Eficiência tecnocrática',
    statement:
      'Um governo central forte com menor interferência partidária toma decisões de longo prazo mais eficientes do que democracias parlamentares fragmentadas.',
    weights: { democracia: -0.95, estado: 0.45, liberdades: -0.45 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Contrapõe a eficácia de decisões centralizadas/tecnocráticas à legitimidade e negociação lenta das democracias pluralistas.',
      conceito: 'Tecnocracia/autoritarismo desenvolvimentista versus pluralismo democrático.',
      concordarRepresenta:
        'Prioriza velocidade executiva, estabilidade administrativa e planejamento contínuo acima da alternância partidária.',
      discordarRepresenta:
        'Sustenta que governos sem controle democrático e oposição legítima tendem à arbitrariedade e à ocultação de erros.',
      exemplosHistoricos:
        'Modelo de Singapura e China contemporânea versus democracias consensuais europeias.',
    },
  },

  // QUESTÕES SOCIAIS (5)
  {
    id: 'q011',
    modeTier: 1,
    area: 'Questões Sociais',
    subtopic: 'Educação e Saúde públicas universais',
    statement:
      'Educação e saúde de alta qualidade devem ser garantidas gratuitamente pelo Estado a toda a população, sem cobrança direta do usuário.',
    weights: { economia: -0.65, estado: 0.9, sociedade: 0.55 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Avalia se saúde e educação devem ser tratados como direitos sociais universais financiados por impostos ou serviços mistos/privados.',
      conceito: 'Universalismo social (Beveridge) versus focalização ou provisão privada.',
      concordarRepresenta:
        'Entende que sistemas universais reduzem desigualdades estruturais e ampliam a coesão social.',
      discordarRepresenta:
        'Defende modelos com participação privada, vouchers ou copagamentos para evitar ineficiências burocráticas e sobrecarga fiscal.',
      exemplosHistoricos:
        'NHS britânico e SUS brasileiro versus sistema de seguros privados predominante nos EUA.',
    },
  },
  {
    id: 'q012',
    modeTier: 1,
    area: 'Questões Sociais',
    subtopic: 'Laicidade do Estado',
    statement:
      'Valores morais e doutrinas religiosas tradicionais devem orientar diretamente as leis civis e o currículo das escolas públicas.',
    weights: { sociedade: -0.9, liberdades: -0.65, democracia: -0.2 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Investiga a separação entre instituições religiosas e legislação civil estatal em sociedades pluralistas.',
      conceito: 'Laicidade republicana versus moralismo confessional ou tradicionalista.',
      concordarRepresenta:
        'Acredita que a coesão moral da sociedade depende da preservação pública de valores espirituais e familiares tradicionais.',
      discordarRepresenta:
        'Defende que o Estado deve permanecer neutro em matéria religiosa para garantir igualdade a crentes de diversas denominações e não crentes.',
      exemplosHistoricos:
        'Lei francesa de separação Igreja-Estado (1905) versus legislações confessionais em diferentes países.',
    },
  },
  {
    id: 'q013',
    modeTier: 1,
    area: 'Questões Sociais',
    subtopic: 'Desigualdade racial e Políticas de inclusão',
    statement:
      'Cotas raciais e ações afirmativas em universidades e cargos públicos são instrumentos legítimos para corrigir desigualdades históricas.',
    weights: { sociedade: 0.9, estado: 0.4, economia: -0.25 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Trata de políticas focalizadas de reparação histórica diante de critérios puramente universais ou baseados apenas em renda.',
      conceito: 'Ação afirmativa e equidade racial versus meritocracia formal ou critérios estritamente socioeconômicos.',
      concordarRepresenta:
        'Reconhece o racismo estrutural como barreira específica que exige medidas proporcionais para democratizar espaços de poder.',
      discordarRepresenta:
        'Prefere políticas universais de educação básica ou critérios exclusivamente de renda, criticando classificações raciais estatais.',
      exemplosHistoricos:
        'Lei de Cotas no Brasil (2012) e Civil Rights Act nos EUA.',
    },
  },
  {
    id: 'q014',
    modeTier: 1,
    area: 'Questões Sociais',
    subtopic: 'Liberdades individuais e Direitos das minorias',
    statement:
      'O Estado deve reconhecer e proteger plenamente os direitos civis de minorias sexuais e de gênero, garantindo casamento igualitário e proteção contra discriminação.',
    weights: { sociedade: 0.9, liberdades: 0.75, democracia: 0.35 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Analisa a extensão da igualdade jurídica civil para orientações sexuais e identidades de gênero minoritárias.',
      conceito: 'Igualdade civil e pluralismo de direitos individuais.',
      concordarRepresenta:
        'Sustenta que a autonomia privada e a igualdade constitucional impedem discriminação legal baseada em orientação ou gênero.',
      discordarRepresenta:
        'Defende a manutenção da definição tradicional das instituições familiares e limites a alterações legais nesse campo.',
      exemplosHistoricos:
        'Legalização do casamento igualitário no Uruguai (2013), Canadá e diversos países europeus.',
    },
  },
  {
    id: 'q015',
    modeTier: 1,
    area: 'Questões Sociais',
    subtopic: 'Políticas de assistência',
    statement:
      'Programas permanentes de transferência de renda geram dependência estatal e devem ser estritamente temporários e condicionados.',
    weights: { economia: 0.65, estado: -0.65, sociedade: -0.5 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Contrapõe a garantia contínua de renda mínima às políticas assistenciais curtas focadas em transição rápida para o mercado de trabalho.',
      conceito: 'Renda básica / transferência contínua versus assistencialismo restrito.',
      concordarRepresenta:
        'Preocupa-se com desincentivos ao trabalho formal e custos fiscais prolongados de transferências amplas.',
      discordarRepresenta:
        'Aponta evidências empíricas de que renda estável melhora nutrição, frequência escolar e capacidade de buscar empregos melhores.',
      exemplosHistoricos:
        'Debate entre Bolsa Família brasileiro, reforma do Welfare de 1996 nos EUA e testes de renda básica na Finlândia.',
    },
  },

  // SEGURANÇA E DEFESA (5)
  {
    id: 'q016',
    modeTier: 1,
    area: 'Segurança e Defesa',
    subtopic: 'Sistema penitenciário e Prevenção criminal',
    statement:
      'A redução sustentável da criminalidade depende mais de políticas sociais, educação e ressocialização do que do endurecimento de penas e construção de presídios.',
    weights: { seguranca: -0.95, sociedade: 0.55, estado: 0.25 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Examina as causas principais do crime e os instrumentos prioritários da política criminal: prevenção social versus dissuasão punitiva.',
      conceito: 'Criminologia preventiva e garantismo penal versus punitivismo dissuasório.',
      concordarRepresenta:
        'Enfatiza vulnerabilidade social, reintegração de egressos e combate ao encarceramento em massa.',
      discordarRepresenta:
        'Argumenta que penas rigorosas e incapacitação de infratores reincidentes são essenciais para proteger vítimas e restaurar a ordem.',
      exemplosHistoricos:
        'Sistema prisional reabilitativo da Noruega versus políticas de encarceramento severo nos EUA nos anos 1990.',
    },
  },
  {
    id: 'q017',
    modeTier: 1,
    area: 'Segurança e Defesa',
    subtopic: 'Segurança pública e Poder policial',
    statement:
      'As forças policiais devem receber maior amplitude legal de atuação e menor restrição judicial ao enfrentar o crime organizado.',
    weights: { seguranca: 0.9, democracia: -0.35, liberdades: -0.55 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Mede o equilíbrio entre eficiência operacional policial no combate ao crime grave e controle judicial rigoroso de garantias fundamentais.',
      conceito: 'Ordem pública e poder de polícia versus garantias processuais constitucionais.',
      concordarRepresenta:
        'Acredita que excessos garantistas paralisam a polícia frente a facções fortemente armadas.',
      discordarRepresenta:
        'Alerta que reduzir controle externo e judicial sobre forças armadas/policiais aumenta letalidade e violações de direitos civis.',
      exemplosHistoricos:
        'Políticas de tolerância zero versus policiamento comunitário e inteligência financeira.',
    },
  },
  {
    id: 'q018',
    modeTier: 1,
    area: 'Segurança e Defesa',
    subtopic: 'Forças Armadas e Defesa nacional',
    statement:
      'O orçamento das Forças Armadas e a indústria nacional de defesa devem ser ampliados significativamente para garantir dissuasão estratégica.',
    weights: { seguranca: 0.75, nacionalismo: 0.7, internacional: -0.35 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Avalia a prioridade orçamentária da defesa militar frente a gastos civis ou confiança em tratados diplomáticos.',
      conceito: 'Realismo defensivo e dissuasão estratégica versus desmilitarização cooperativa.',
      concordarRepresenta:
        'Considera que um país sem capacidade militar própria fica vulnerável em disputas territoriais, energéticas e tecnológicas.',
      discordarRepresenta:
        'Prefere destinar recursos escassos a saúde, educação e diplomacia multilateral, evitando corridas armamentistas.',
      exemplosHistoricos:
        'Programa nuclear e submarino francês/brasileiro versus modelo desmilitarizado da Costa Rica.',
    },
  },
  {
    id: 'q019',
    modeTier: 1,
    area: 'Segurança e Defesa',
    subtopic: 'Inteligência policial e Vigilância',
    statement:
      'O Estado deve investir prioritariamente em inteligência policial e rastreamento financeiro contra corrupção e crime organizado, preservando estritamente a privacidade dos cidadãos comuns.',
    weights: { seguranca: -0.25, democracia: 0.55, liberdades: 0.5 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Compara policiamento ostensivo/vigilância massiva com investigação cirúrgica baseada em inteligência e controle judicial.',
      conceito: 'Policiamento guiado por inteligência e proteção à privacidade.',
      concordarRepresenta:
        'Defende desarticular o topo financeiro das redes criminosas sem militarização de bairros nem vigilância indiscriminada.',
      discordarRepresenta:
        'Ou considera insuficiente sem presença ostensiva dura, ou teme até mesmo ferramentas avançadas de inteligência estatal.',
      exemplosHistoricos:
        'Forças-tarefa financeiras antimáfia na Itália (Giovanni Falcone).',
    },
  },
  {
    id: 'q020',
    modeTier: 1,
    area: 'Segurança e Defesa',
    subtopic: 'Soberania territorial e Controle civil',
    statement:
      'As Forças Armadas devem restringir-se estritamente à defesa externa e ao apoio logístico constitucional, sem qualquer tutela ou papel moderador na política interna.',
    weights: { democracia: 0.9, seguranca: -0.35, liberdades: 0.45 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Examina o princípio democrático do controle civil sobre os militares versus concepções tutelares das Forças Armadas.',
      conceito: 'Supremacia civil constitucional (Samuel Huntington / Alfred Stepan).',
      concordarRepresenta:
        'Entende que democracia sólida exige submissão irrestrita dos militares ao poder civil eleito.',
      discordarRepresenta:
        'Admite que instituições militares exerçam papel fiscalizador ou de garantia da ordem interna em crises políticas.',
      exemplosHistoricos:
        'Transições civis na América Latina e Península Ibérica pós-1970.',
    },
  },

  // RELAÇÕES INTERNACIONAIS (5)
  {
    id: 'q021',
    modeTier: 1,
    area: 'Relações Internacionais',
    subtopic: 'Multilateralismo vs Unilateralismo',
    statement:
      'Os países devem fortalecer organismos multilaterais (como a ONU e tribunais internacionais), mesmo aceitando eventuais limites à sua autonomia decisória.',
    weights: { internacional: 0.95, nacionalismo: -0.65, democracia: 0.4 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Contrapõe a governança global cooperativa baseada em regras comuns à primazia absoluta da soberania unilateral.',
      conceito: 'Institucionalismo liberal / Multilateralismo versus Realismo estatocêntrico.',
      concordarRepresenta:
        'Acredita que desafios como clima, pandemias e guerras exigem regras compartilhadas e instituições supranacionais fortes.',
      discordarRepresenta:
        'Sustenta que organismos multilaterais servem aos interesses das grandes potências ou reduzem a autodeterminação democrática local.',
      exemplosHistoricos:
        'Criação da ONU (1945) e da União Europeia versus políticas unilaterais de grandes potências.',
    },
  },
  {
    id: 'q022',
    modeTier: 1,
    area: 'Relações Internacionais',
    subtopic: 'Globalização e Comércio internacional',
    statement:
      'A redução generalizada de tarifas aduaneiras e barreiras comerciais beneficia a maioria dos países ao baratear produtos e ampliar mercados.',
    weights: { economia: 0.75, nacionalismo: -0.8, internacional: 0.45 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Avalia os efeitos do livre comércio global sobre crescimento, preços ao consumidor e estrutura produtiva interna.',
      conceito: 'Vantagens comparativas (David Ricardo) versus comércio estratégico/protecionismo.',
      concordarRepresenta:
        'Confia que a especialização global eleva eficiência, reduz preços e estimula inovação por competição.',
      discordarRepresenta:
        'Observa que a abertura irrestrita pode destruir empregos industriais locais e aumentar a vulnerabilidade externa.',
      exemplosHistoricos:
        'Expansão da OMC nos anos 1990–2000 versus políticas recentes de reindustrialização e tarifas estratégicas.',
    },
  },
  {
    id: 'q023',
    modeTier: 1,
    area: 'Relações Internacionais',
    subtopic: 'Integração regional',
    statement:
      'Blocos regionais (como Mercosul ou União Europeia) devem aprofundar sua integração econômica, energética e infraestrutural.',
    weights: { internacional: 0.85, nacionalismo: -0.2, economia: -0.1 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Mede o apoio à cooperação institucional e produtiva entre países vizinhos.',
      conceito: 'Regionalismo aberto e integração regional.',
      concordarRepresenta:
        'Vê blocos regionais como forma de ganhar escala industrial, paz fronteiriça e peso negocial conjunto no mundo.',
      discordarRepresenta:
        'Prefere acordos bilaterais flexíveis sem normas regionais comuns ou cedência de competências regulatórias.',
      exemplosHistoricos:
        'Mercado Comum Europeu (1957), ASEAN e Mercosul (1991).',
    },
  },
  {
    id: 'q024',
    modeTier: 1,
    area: 'Relações Internacionais',
    subtopic: 'Imperialismo e Autodeterminação',
    statement:
      'Intervenções militares ou econômicas de grandes potências em outros países raramente promovem democracia genuína e violam o princípio da autodeterminação dos povos.',
    weights: { nacionalismo: 0.45, internacional: 0.4, seguranca: -0.5, democracia: 0.35 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Investiga a legitimidade de sanções unilaterais e intervenções externas sob justificativa humanitária ou geopolítica.',
      conceito: 'Não intervenção e autodeterminação versus intervencionismo liberal ou hegemônico.',
      concordarRepresenta:
        'Critica o uso assimétrico da força e de sanções por potências sobre países mais vulneráveis.',
      discordarRepresenta:
        'Admite pressões econômicas ou intervenções multilaterais para conter genocídios, ditaduras graves ou ameaças globais.',
      exemplosHistoricos:
        'Doutrina de não intervenção da diplomacia brasileira/mexicana versus intervenções da Guerra Fria e pós-2001.',
    },
  },
  {
    id: 'q025',
    modeTier: 1,
    area: 'Relações Internacionais',
    subtopic: 'Investimento estrangeiro direto',
    statement:
      'Empresas e capitais estrangeiros devem operar em igualdade absoluta de condições com empresas nacionais, inclusive em bancos, terras e mídia.',
    weights: { economia: 0.75, nacionalismo: -0.9, estado: -0.4 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Questiona se o capital estrangeiro deve ter acesso irrestrito a todos os setores ou sofrer restrições em áreas estratégicas.',
      conceito: 'Abertura irrestrita ao capital externo versus reserva de setores estratégicos.',
      concordarRepresenta:
        'Valoriza atração de capital, tecnologia e concorrência sem discriminação por origem societária.',
      discordarRepresenta:
        'Teme desnacionalização decisória, remessa excessiva de lucros e perda de soberania sobre terras, dados e finanças.',
      exemplosHistoricos:
        'Limites à compra de terras e mídia em diversos países da OCDE versus zonas totalmente abertas.',
    },
  },

  // MEIO AMBIENTE (5)
  {
    id: 'q026',
    modeTier: 1,
    area: 'Meio Ambiente',
    subtopic: 'Regulação ambiental e Responsabilidade empresarial',
    statement:
      'Leis ambientais rigorosas e fiscalização estatal sobre empresas são indispensáveis, mesmo quando elevam custos de produção no curto prazo.',
    weights: { economia: -0.55, estado: 0.7, sociedade: 0.65, internacional: 0.4 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Avalia a prioridade atribuída à proteção ecológica e climática diante de custos econômicos imediatos.',
      conceito: 'Internalização de externalidades ambientais e regulação ecológica.',
      concordarRepresenta:
        'Considera que danos ambientais geram custos sociais e econômicos imensos no médio prazo que o mercado sozinho não corrige.',
      discordarRepresenta:
        'Acredita que burocracia ambiental excessiva trava infraestrutura, empregos e competitividade, preferindo soluções tecnológicas voluntárias.',
      exemplosHistoricos:
        'Regulação europeia de emissões e Código Florestal brasileiro.',
    },
  },
  {
    id: 'q027',
    modeTier: 1,
    area: 'Meio Ambiente',
    subtopic: 'Transição energética',
    statement:
      'Governos devem acelerar o fim dos subsídios a combustíveis fósseis e liderar investimentos públicos em energia renovável e transporte coletivo limpo.',
    weights: { economia: -0.45, estado: 0.65, sociedade: 0.6, internacional: 0.55 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Discute o ritmo e a condução estatal da descarbonização energética.',
      conceito: 'Transição energética justa e política climática pública.',
      concordarRepresenta:
        'Defende ação estatal rápida para conter mudanças climáticas e criar empregos verdes.',
      discordarRepresenta:
        'Propõe transição mais lenta guiada por preços de mercado ou exploração plena de reservas fósseis nacionais para financiar o desenvolvimento.',
      exemplosHistoricos:
        'Matriz hidrelétrica/eólica uruguaia e brasileira versus debates sobre exploração petrolífera em novas fronteiras.',
    },
  },
  {
    id: 'q028',
    modeTier: 1,
    area: 'Meio Ambiente',
    subtopic: 'Exploração de recursos naturais e Crescimento',
    statement:
      'Países em desenvolvimento têm o direito prioritário de explorar suas reservas minerais, florestais e petrolíferas para combater a pobreza antes de assumir metas climáticas restritivas.',
    weights: { nacionalismo: 0.6, economia: 0.25, sociedade: -0.35, internacional: -0.45 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Aborda o dilema Norte-Sul sobre responsabilidade histórica pelas emissões globais e direito ao desenvolvimento material.',
      conceito: 'Responsabilidades comuns porém diferenciadas (Conferência do Rio, 1992).',
      concordarRepresenta:
        'Rejeita que países ricos, já industrializados com combustíveis fósseis, imponham travas unilaterais ao crescimento de países em desenvolvimento.',
      discordarRepresenta:
        'Argumenta que a preservação de biomas estratégicos e a bioeconomia são interesses nacionais e globais inadiáveis.',
      exemplosHistoricos:
        'Negociações da COP e criação do Fundo Amazônia.',
    },
  },
  {
    id: 'q029',
    modeTier: 1,
    area: 'Meio Ambiente',
    subtopic: 'Desenvolvimento sustentável vs Crescimento ilimitado',
    statement:
      'O modelo econômico baseado na expansão contínua do consumo material é ecologicamente insustentável e precisa ser substituído por critérios de bem-estar e limites ambientais.',
    weights: { economia: -0.75, sociedade: 0.75, estado: 0.4, liberdades: 0.15 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Contrasta a economia tradicional centrada no crescimento do PIB com abordagens ecológicas de economia circular ou pós-crescimento.',
      conceito: 'Limites planetários e economia ecológica (Herman Daly / Ecossocialismo).',
      concordarRepresenta:
        'Questiona a identificação automática entre mais consumo físico e qualidade de vida.',
      discordarRepresenta:
        'Sustenta que crescimento econômico e inovação tecnológica são indispensáveis para gerar recursos que financiem soluções ambientais.',
      exemplosHistoricos:
        'Relatório "Os Limites do Crescimento" (1972) versus teses de "crescimento verde".',
    },
  },
  {
    id: 'q030',
    modeTier: 1,
    area: 'Meio Ambiente',
    subtopic: 'Soluções de mercado para o clima',
    statement:
      'Mecanismos de mercado como créditos de carbono e incentivos fiscais a empresas limpas são mais eficazes do que proibições estatais diretas.',
    weights: { economia: 0.65, estado: -0.35, internacional: 0.3 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Compara instrumentos econômicos baseados em preços (cap-and-trade) com comando e controle estatal direto.',
      conceito: 'Precificação de carbono versus regulação direta.',
      concordarRepresenta:
        'Acredita que empresas reduzem emissões de modo mais barato e inovador quando respondem a incentivos de preço.',
      discordarRepresenta:
        'Critica mercados de carbono por permitirem compensações contábeis sem redução real na fonte poluidora.',
      exemplosHistoricos:
        'Sistema Europeu de Comércio de Emissões (EU ETS).',
    },
  },

  // FILOSOFIA POLÍTICA (5)
  {
    id: 'q031',
    modeTier: 1,
    area: 'Filosofia Política',
    subtopic: 'Liberdade vs Igualdade',
    statement:
      'Quando liberdade econômica individual e redução da desigualdade material entram em conflito, o Estado deve priorizar a redução da desigualdade.',
    weights: { economia: -0.8, estado: 0.75, liberdades: -0.45, sociedade: 0.55 },
    weightStrength: 1.2,
    entenda: {
      oQueSignifica:
        'Toca no eixo filosófico central identificado por Norberto Bobbio e Isaiah Berlin sobre valores políticos fundamentais.',
      conceito: 'Igualdade substantiva (Rawls/socialismo) versus liberdade negativa (Nozick/liberalismo clássico).',
      concordarRepresenta:
        'Afirma que liberdade sem condições materiais básicas é meramente formal para a maioria.',
      discordarRepresenta:
        'Defende que tentar igualar resultados pela força estatal viola direitos individuais e gera coerção burocrática.',
      exemplosHistoricos:
        'Debate filosófico clássico entre John Rawls e Robert Nozick nos anos 1970.',
    },
  },
  {
    id: 'q032',
    modeTier: 1,
    area: 'Filosofia Política',
    subtopic: 'Individualismo vs Coletivismo',
    statement:
      'Os direitos do indivíduo devem prevalecer sobre deveres impostos em nome da nação, da classe social ou da comunidade.',
    weights: { liberdades: 0.95, economia: 0.4, nacionalismo: -0.45, sociedade: 0.25 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Avalia se a unidade moral primária da política é a autonomia individual ou o bem comum coletivo/comunitário.',
      conceito: 'Individualismo metodológico e normativo versus comunitarismo/coletivismo.',
      concordarRepresenta:
        'Protege a consciência individual, a privacidade e a dissidência contra pressões da maioria ou do Estado.',
      discordarRepresenta:
        'Entende que indivíduos só florescem dentro de comunidades solidárias que exigem deveres recíprocos.',
      exemplosHistoricos:
        'Tradição de John Stuart Mill ("Sobre a Liberdade") versus filosofias comunitaristas e coletivistas.',
    },
  },
  {
    id: 'q033',
    modeTier: 1,
    area: 'Filosofia Política',
    subtopic: 'Materialismo histórico',
    statement:
      'As ideias políticas, jurídicas e culturais de uma época são moldadas fundamentalmente pelas relações econômicas e conflitos de classe vigentes.',
    weights: { economia: -0.85, sociedade: 0.35, liberdades: -0.2 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Testa a afinidade com a interpretação materialista da história em contraste com interpretações idealistas, institucionais ou culturais.',
      conceito: 'Materialismo histórico (Marx e Engels).',
      concordarRepresenta:
        'Vê instituições legais e valores dominantes como expressões históricas das formas de produção e propriedade.',
      discordarRepresenta:
        'Atribui peso autônomo ou superior às ideias filosóficas, à religião, às instituições jurídicas e às escolhas individuais.',
      exemplosHistoricos:
        'Debate clássico entre Karl Marx e Max Weber ("A Ética Protestante e o Espírito do Capitalismo").',
    },
  },
  {
    id: 'q034',
    modeTier: 1,
    area: 'Filosofia Política',
    subtopic: 'Conservadorismo vs Progressismo',
    statement:
      'Mudanças sociais profundas devem ocorrer com extrema cautela, preservando instituições e costumes testados por gerações.',
    weights: { sociedade: -0.95, democracia: -0.1, liberdades: -0.25 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Contrapõe a prudência institucional conservadora à disposição progressista por reformas sociais rápidas.',
      conceito: 'Conservadorismo burkeano versus reformismo progressista.',
      concordarRepresenta:
        'Desconfia de projetos abstratos que rompem laços familiares, cívicos e históricos consolidados.',
      discordarRepresenta:
        'Sustenta que tradições frequentemente preservam injustiças históricas e precisam ser transformadas racionalmente.',
      exemplosHistoricos:
        'Edmund Burke versus Thomas Paine durante a Revolução Francesa.',
    },
  },
  {
    id: 'q035',
    modeTier: 1,
    area: 'Filosofia Política',
    subtopic: 'Republicanismo',
    statement:
      'A verdadeira liberdade política consiste em nenhum cidadão ficar sujeito ao poder arbitrário de outro — seja de um governante, seja de grandes corporações.',
    weights: { democracia: 0.9, liberdades: 0.65, estado: 0.3, economia: -0.25 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Formula o conceito neorrepublicano de liberdade como "não-dominação", abrangendo tanto o poder estatal quanto o poder privado.',
      conceito: 'Republicanismo cívico (Maquiavel, Rousseau, Philip Pettit).',
      concordarRepresenta:
        'Exige leis públicas transparentes, controle de oligarquias e equilíbrio republicano entre poderes.',
      discordarRepresenta:
        'Ou restringe a liberdade apenas à ausência de coerção estatal (liberalismo clássico), ou prioriza poder central resolutivo.',
      exemplosHistoricos:
        'Tradição republicana constitucional moderna.',
    },
  },

  // =========================================================================
  // TIER 2 (36 PERGUNTAS ADICIONAIS) -> TESTE COMPLETO (35 + 36 + 1 = 72)
  // =========================================================================

  // ECONOMIA - TIER 2 (6)
  {
    id: 'q036',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Economia mista e Bancos de fomento',
    statement:
      'Bancos públicos de desenvolvimento são essenciais para financiar infraestrutura e inovação tecnológica de longo prazo que o setor privado evita pelo risco.',
    weights: { economia: -0.5, estado: 0.85, nacionalismo: 0.5 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Avalia o papel do crédito público direcionado versus alocação exclusiva por mercados financeiros privados.',
      conceito: 'Sistema financeiro público de fomento e Estado Empreendedor.',
      concordarRepresenta:
        'Destaca que ferrovias, energia limpa e tecnologia de base demandam prazos longos e juros compatíveis.',
      discordarRepresenta:
        'Alerta para riscos de subsídios politicamente capturados ("campeãs nacionais") e distorção da taxa de juros de mercado.',
      exemplosHistoricos:
        'KfW na Alemanha, BNDES no Brasil e bancos de desenvolvimento asiáticos.',
    },
  },
  {
    id: 'q037',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Política fiscal e Austeridade',
    statement:
      'Em períodos de recessão econômica, o governo deve aumentar o investimento público mesmo ampliando temporariamente o déficit fiscal.',
    weights: { economia: -0.55, estado: 0.8 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Explora a disputa macroeconômica clássica entre política fiscal anticíclica keynesiana e consolidação fiscal ortodoxa.',
      conceito: 'Keynesianismo fiscal versus austeridade expansionista.',
      concordarRepresenta:
        'Entende que cortar gastos públicos na recessão agrava o desemprego e reduz ainda mais a arrecadação.',
      discordarRepresenta:
        'Defende que déficits elevam juros futuros, minam a confiança dos investidores e geram inflação.',
      exemplosHistoricos:
        'Estímulos de 2009 e 2020 versus políticas de austeridade na Zona do Euro após 2010.',
    },
  },
  {
    id: 'q038',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Nacionalização vs Concessão',
    statement:
      'Riquezas minerais e reservas de petróleo descobertas no território pertencem à coletividade nacional e seus lucros devem ir para um fundo soberano público.',
    weights: { economia: -0.7, estado: 0.75, nacionalismo: 0.8 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Discute a propriedade da renda extrativa de recursos naturais não renováveis.',
      conceito: 'Renda dos recursos naturais e fundos soberanos intergeracionais.',
      concordarRepresenta:
        'Inspira-se na captura pública da renda mineral para financiar educação, ciência e gerações futuras.',
      discordarRepresenta:
        'Argumenta que a exploração por empresas privadas sob royalties simples atrai mais capital e tecnologia rapidamente.',
      exemplosHistoricos:
        'Fundo Soberano da Noruega (NBIM) e debate sobre o Pré-Sal brasileiro.',
    },
  },
  {
    id: 'q039',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Antitruste e Concentração econômica',
    statement:
      'O Estado deve intervir vigorosamente para desmembrar grandes monopólios privados e plataformas digitais que concentrem poder de mercado.',
    weights: { economia: -0.3, estado: 0.65, liberdades: 0.25, democracia: 0.4 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Avalia a defesa ativa da concorrência e contenção de oligopólios privados.',
      conceito: 'Política antitruste (Ordoliberalismo / Tradição Sherman Act).',
      concordarRepresenta:
        'Entende que monopólios privados destroem a própria concorrência de mercado e acumulam poder político excessivo.',
      discordarRepresenta:
        'Sustenta que grandes escalas corporativas trazem eficiência ao consumidor e que o mercado corrige monopólios naturalmente.',
      exemplosHistoricos:
        'Desmembramento da Standard Oil (1911) e processos antitruste recentes contra Big Techs na UE e EUA.',
    },
  },
  {
    id: 'q040',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Capitalismo e Socialismo de mercado',
    statement:
      'Empresas organizadas como cooperativas de trabalhadores devem receber incentivos fiscais e creditícios preferenciais em relação a sociedades anônimas tradicionais.',
    weights: { economia: -0.75, estado: 0.35, democracia: 0.45 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Analisa modelos de democratização da propriedade empresarial dentro de economias de mercado ou socialistas.',
      conceito: 'Autogestão, cooperativismo e socialismo de mercado / distributismo.',
      concordarRepresenta:
        'Busca alinhar propriedade, trabalho e distribuição local da riqueza.',
      discordarRepresenta:
        'Defende neutralidade tributária entre formatos societários para não punir empresas que captam capital externo.',
      exemplosHistoricos:
        'Grupo Mondragón no País Basco e cooperativas agroindustriais europeias e brasileiras.',
    },
  },
  {
    id: 'q041',
    modeTier: 2,
    area: 'Economia',
    subtopic: 'Autonomia do Banco Central',
    statement:
      'O Banco Central deve ser formalmente autônomo em relação ao governo eleito, tendo como mandato prioritário o controle da inflação.',
    weights: { economia: 0.75, estado: -0.45, democracia: -0.25 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Discute se a política monetária e a taxa de juros devem ficar blindadas do ciclo eleitoral ou integradas à estratégia de emprego do governo.',
      conceito: 'Independência do Banco Central versus mandato dual coordenado.',
      concordarRepresenta:
        'Teme uso eleitoreiro dos juros e expansão monetária inflacionária por governantes.',
      discordarRepresenta:
        'Critica a falta de prestação de contas democrática de diretores não eleitos que priorizam credores financeiros sobre emprego.',
      exemplosHistoricos:
        'Modelo do Bundesbank/BCE e lei de autonomia brasileira de 2021 versus mandato dual do Fed.',
    },
  },

  // ESTADO E GOVERNANÇA - TIER 2 (5)
  {
    id: 'q042',
    modeTier: 2,
    area: 'Estado e Governança',
    subtopic: 'Funcionalismo público e Burocracia',
    statement:
      'A estabilidade no cargo para servidores públicos concursados é necessária para protegê-los contra perseguições políticas de governos transitórios.',
    weights: { estado: 0.65, democracia: 0.55, economia: -0.3 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Analisa a profissionalização weberiana do Estado frente à flexibilidade gerencial inspirada no setor privado.',
      conceito: 'Burocracia weberiana impessoal versus Nova Gestão Pública.',
      concordarRepresenta:
        'Garante que fiscais, professores, juízes e médicos não sejam demitidos por resistirem a pressões partidárias ilícitas.',
      discordarRepresenta:
        'Alega que a estabilidade absoluta dificulta a demissão por baixo desempenho e engessa o orçamento público.',
      exemplosHistoricos:
        'Reforma do serviço civil norte-americano (Pendleton Act, 1883) e Constituição brasileira de 1988.',
    },
  },
  {
    id: 'q043',
    modeTier: 2,
    area: 'Estado e Governança',
    subtopic: 'Financiamento eleitoral e Oligarquias',
    statement:
      'Doações de grandes empresas e bilionários a campanhas eleitorais devem ser proibidas para evitar a captura da democracia pelo poder econômico.',
    weights: { democracia: 0.75, economia: -0.55, estado: 0.4 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Examina os limites entre liberdade de expressão financeira e igualdade de influência política entre cidadãos.',
      conceito: 'Financiamento público/cidadão de campanhas versus doações privadas livres.',
      concordarRepresenta:
        'Busca impedir que lobistas e megadoadores definam a agenda parlamentar em detrimento da maioria.',
      discordarRepresenta:
        'Critica fundos eleitorais pagos com impostos e defende o direito de cidadãos e empresas apoiarem livremente projetos políticos.',
      exemplosHistoricos:
        'Decisão Citizens United nos EUA (2010) versus proibição de doações empresariais no Brasil (STF, 2015).',
    },
  },
  {
    id: 'q044',
    modeTier: 2,
    area: 'Estado e Governança',
    subtopic: 'Centralização administrativa',
    statement:
      'Em países com fortes disparidades regionais, o governo nacional deve concentrar mais receitas e planejamento para garantir padrões iguais de cidadania.',
    weights: { estado: 0.7, nacionalismo: 0.45, democracia: -0.1 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Contrapõe a coesão territorial coordenada pelo centro à autonomia fiscal de regiões mais ricas.',
      conceito: 'Federalismo cooperativo redistributivo versus federalismo competitivo.',
      concordarRepresenta:
        'Defende fundos nacionais de equalização para que cidadãos de regiões pobres tenham escolas e hospitais equivalentes.',
      discordarRepresenta:
        'Sustenta que regiões produtoras não devem sustentar permanentemente máquinas estatais distantes e ineficientes.',
      exemplosHistoricos:
        'FUNDEB e fundos de participação no Brasil; equalização fiscal (Länderfinanzausgleich) na Alemanha.',
    },
  },
  {
    id: 'q045',
    modeTier: 2,
    area: 'Estado e Governança',
    subtopic: 'Transparência e Dados públicos',
    statement:
      'Todos os contratos governamentais, emendas parlamentares e benefícios fiscais concedidos a empresas devem ser integralmente públicos em tempo real.',
    weights: { democracia: 0.85, liberdades: 0.45 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Mede o compromisso com a transparência republicana e o controle social sobre o orçamento.',
      conceito: 'Governo aberto e accountability republicana.',
      concordarRepresenta:
        'Considera a transparência ativa a principal arma contra corrupção e privilégios ocultos.',
      discordarRepresenta:
        'Apenas admite sigilo em áreas estritas de segurança nacional ou segredo industrial competitivo.',
      exemplosHistoricos:
        'Leis de Acesso à Informação (FOIA nos EUA, LAI no Brasil em 2011).',
    },
  },
  {
    id: 'q046',
    modeTier: 2,
    area: 'Estado e Governança',
    subtopic: 'Regime parlamentarista vs Presidencialista',
    statement:
      'Um sistema parlamentarista fortalece a estabilidade democrática mais do que o presidencialismo ao facilitar a troca pacífica de governos sem crises institucionais.',
    weights: { democracia: 0.45, estado: -0.15 },
    weightStrength: 0.85,
    entenda: {
      oQueSignifica:
        'Compara os dois principais modelos de organização entre Executivo e Legislativo nas democracias.',
      conceito: 'Parlamentarismo versus Presidencialismo (Juan Linz vs. defensores do mandato direto).',
      concordarRepresenta:
        'Aponta que o parlamentarismo evita impasses prolongados entre presidente e congresso e reduz o personalismo.',
      discordarRepresenta:
        'Valoriza o voto direto popular para chefe de governo e a separação clara de mandatos fixos.',
      exemplosHistoricos:
        'Democracias parlamentaristas da Europa Ocidental versus presidencialismos das Américas.',
    },
  },

  // QUESTÕES SOCIAIS - TIER 2 (5)
  {
    id: 'q047',
    modeTier: 2,
    area: 'Questões Sociais',
    subtopic: 'Reforma agrária e Função social da propriedade',
    statement:
      'Terras improdutivas ou objeto de conflito fundiário devem ser desapropriadas pelo Estado mediante indenização para fins de reforma agrária e agricultura familiar.',
    weights: { economia: -0.65, estado: 0.6, sociedade: 0.65 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Avalia o conceito constitucional de função social da propriedade rural frente à inviolabilidade irrestrita da posse privada.',
      conceito: 'Função social da propriedade e desconcentração fundiária.',
      concordarRepresenta:
        'Associa desconcentração de terras à produção de alimentos básicos, redução do êxodo rural e justiça histórica.',
      discordarRepresenta:
        'Defende que o agronegócio em grande escala é mais produtivo e que desapropriações geram insegurança jurídica.',
      exemplosHistoricos:
        'Reforma agrária japonesa e sul-coreana pós-1945 (bases da industrialização) versus latifúndios históricos.',
    },
  },
  {
    id: 'q048',
    modeTier: 2,
    area: 'Questões Sociais',
    subtopic: 'Direitos reprodutivos e Autonomia corporal',
    statement:
      'A legislação deve assegurar às mulheres autonomia legal e acesso pelo sistema de saúde à interrupção voluntária da gestação nas primeiras semanas.',
    weights: { sociedade: 0.95, liberdades: 0.8 },
    weightStrength: 1.15,
    entenda: {
      oQueSignifica:
        'Confronta o princípio da autonomia corporal e saúde pública feminina com a concepção moral de proteção absoluta à vida desde a concepção.',
      conceito: 'Direitos reprodutivos e autonomia individual versus ética conservadora pró-vida.',
      concordarRepresenta:
        'Enquadra o tema como questão de saúde pública, igualdade de gênero e liberdade individual.',
      discordarRepresenta:
        'Sustenta que o feto possui direito à vida desde a concepção, cabendo à lei protegê-lo integralmente.',
      exemplosHistoricos:
        'Descriminalização no Uruguai (2012), França e Canadá versus legislações restritivas em outros países.',
    },
  },
  {
    id: 'q049',
    modeTier: 2,
    area: 'Questões Sociais',
    subtopic: 'Políticas de moradia e Direito à cidade',
    statement:
      'O Estado deve construir habitações populares públicas em áreas urbanas dotadas de transporte e regular o valor de aluguéis em grandes metrópoles.',
    weights: { economia: -0.7, estado: 0.75, sociedade: 0.65 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Analisa a habitação como direito social regulado pelo poder público versus bem de mercado sujeito à livre oferta imobiliária.',
      conceito: 'Habitação social pública e função social da cidade.',
      concordarRepresenta:
        'Aponta exemplos de habitação pública de qualidade que evitam segregação espacial e especulação imobiliária.',
      discordarRepresenta:
        'Alega que controle de aluguéis reduz a oferta de imóveis e prefere desregular zoneamentos para ampliar construções privadas.',
      exemplosHistoricos:
        'Habitação social em Viena (60% da população) e HDB em Singapura versus controles de aluguel em Berlim.',
    },
  },
  {
    id: 'q050',
    modeTier: 2,
    area: 'Questões Sociais',
    subtopic: 'Liberdade de expressão e Discurso de ódio',
    statement:
      'A lei deve punir criminalmente discursos racistas, xenófobos ou que incitem violência contra grupos vulneráveis, ainda que sem ameaça física imediata.',
    weights: { sociedade: 0.7, liberdades: -0.35, seguranca: 0.2 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Distingue o modelo europeu/brasileiro de limites à incitação discriminatória do modelo absolutista norte-americano da Primeira Emenda.',
      conceito: 'Dignidade da pessoa humana versus liberdade de expressão quase absoluta.',
      concordarRepresenta:
        'Entende que discursos de ódio degradam a cidadania igualitária e precedem violências reais contra minorias.',
      discordarRepresenta:
        'Teme que o Estado ou juízes usem leis subjetivas sobre discurso para censurar opositores políticos.',
      exemplosHistoricos:
        'Legislação alemã (Volksverhetzung) e brasileira (Lei do Racismo) versus jurisprudência da Suprema Corte dos EUA.',
    },
  },
  {
    id: 'q051',
    modeTier: 2,
    area: 'Questões Sociais',
    subtopic: 'Cultura e Educação cívica',
    statement:
      'O ensino público deve enfatizar valores cívicos nacionais, disciplina escolar e mérito acadêmico acima de debates sobre diversidade identitária.',
    weights: { sociedade: -0.8, nacionalismo: 0.65, liberdades: -0.3 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Contrasta a pedagogia cívico-tradicional centrada na unidade nacional com a educação pluralista e multicultural.',
      conceito: 'Educação cívica tradicional versus pedagogia crítica multicultural.',
      concordarRepresenta:
        'Prioriza coesão cultural nacional, autoridade docente e conteúdos básicos objetivos.',
      discordarRepresenta:
        'Defende que reconhecer diversidade cultural, histórica e de gênero prepara melhor cidadãos críticos em sociedades plurais.',
      exemplosHistoricos:
        'Debates curriculares contemporâneos nos EUA, Europa e Brasil.',
    },
  },

  // SEGURANÇA E DEFESA - TIER 2 (5)
  {
    id: 'q052',
    modeTier: 2,
    area: 'Segurança e Defesa',
    subtopic: 'Política de drogas',
    statement:
      'A descriminalização do porte e a regulação estatal do comércio de certas substâncias psicoativas (como a cannabis) enfraquecem o narcotráfico mais do que a guerra às drogas.',
    weights: { seguranca: -0.8, liberdades: 0.75, sociedade: 0.65 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Compara a abordagem proibicionista penal de drogas com modelos de saúde pública e regulação legal.',
      conceito: 'Redução de danos e regulação legal versus proibicionismo penal.',
      concordarRepresenta:
        'Argumenta que a proibição transfere lucros bilionários a facções armadas e sobrecarrega o sistema prisional.',
      discordarRepresenta:
        'Alerta que a legalização amplia o consumo, custos de saúde pública e dependência química.',
      exemplosHistoricos:
        'Descriminalização em Portugal (2001) e regulação estatal no Uruguai (2013) e Canadá (2018).',
    },
  },
  {
    id: 'q053',
    modeTier: 2,
    area: 'Segurança e Defesa',
    subtopic: 'Controle de armas civis',
    statement:
      'O acesso de civis a armas de fogo deve ser fortemente restringido pelo Estado, reservando-se o porte a forças públicas e casos excepcionais.',
    weights: { seguranca: -0.45, liberdades: -0.45, estado: 0.45 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Avalia o direito individual à autodefesa armada em contraste com políticas de desarmamento civil para reduzir homicídios e acidentes.',
      conceito: 'Controle estatal de armamentos versus direito amplo ao porte civil.',
      concordarRepresenta:
        'Apoia-se em estudos que correlacionam menor circulação civil de armas a quedas em homicídios e suicídios.',
      discordarRepresenta:
        'Defende que cidadãos cumpridores da lei não devem ser impedidos de defender suas famílias e propriedades.',
      exemplosHistoricos:
        'Legislações restritivas no Japão e Reino Unido versus Segunda Emenda nos Estados Unidos.',
    },
  },
  {
    id: 'q054',
    modeTier: 2,
    area: 'Segurança e Defesa',
    subtopic: 'Pena de morte e Prisão perpétua',
    statement:
      'A pena de morte ou a prisão perpétua sem possibilidade de progressão devem ser aplicadas a crimes hediondos gravíssimos.',
    weights: { seguranca: 0.95, liberdades: -0.5, sociedade: -0.45 },
    weightStrength: 1.1,
    entenda: {
      oQueSignifica:
        'Mede o posicionamento sobre limites éticos e constitucionais do poder punitivo do Estado.',
      conceito: 'Retributivismo penal extremo versus abolicionismo da pena capital e reintegração.',
      concordarRepresenta:
        'Entende que crimes brutais rompem irreversivelmente o pacto social e exigem punição proporcional máxima.',
      discordarRepresenta:
        'Aponta risco irreversível de erro judiciário, viés socioeconômico nas condenações e violação de direitos humanos.',
      exemplosHistoricos:
        'Abolição da pena de morte em toda a União Europeia e Brasil (em tempos de paz) versus aplicação em estados dos EUA e China.',
    },
  },
  {
    id: 'q055',
    modeTier: 2,
    area: 'Segurança e Defesa',
    subtopic: 'Segurança cibernética e Dados nacionais',
    statement:
      'Infraestruturas digitais críticas, redes de dados governamentais e satélites devem usar tecnologia soberana nacional, evitando dependência de corporações estrangeiras.',
    weights: { nacionalismo: 0.85, seguranca: 0.65, estado: 0.55 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Trata da soberania digital e segurança cibernética na era da computação em nuvem e inteligência artificial.',
      conceito: 'Soberania digital estratégica versus integração tecnológica global.',
      concordarRepresenta:
        'Previne espionagem estrangeira, bloqueios tecnológicos e vulnerabilidades em comunicações estratégicas.',
      discordarRepresenta:
        'Considera que restringir fornecedores globais encarece sistemas e reduz o acesso às tecnologias mais avançadas.',
      exemplosHistoricos:
        'Investimentos europeus em nuvem soberana (Gaia-X) e debates globais sobre redes 5G.',
    },
  },
  {
    id: 'q056',
    modeTier: 2,
    area: 'Segurança e Defesa',
    subtopic: 'Desmilitarização policial',
    statement:
      'As polícias ostensivas civis devem ser desmilitarizadas, adotando estrutura civil unificada com foco comunitário e forte ouvidoria externa.',
    weights: { seguranca: -0.85, democracia: 0.6, liberdades: 0.45 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Discute a organização institucional das forças policiais: modelo civil unificado ou corporações militarizadas.',
      conceito: 'Polícia civil cidadã versus modelo policial militarizado.',
      concordarRepresenta:
        'Argumenta que doutrina militar trata cidadãos como inimigos internos e dificulta a prevenção comunitária.',
      discordarRepresenta:
        'Sustenta que hierarquia e disciplina militares são necessárias para enfrentar facções armadas e manter ordem.',
      exemplosHistoricos:
        'Polícias civis locais em países anglo-saxões versus Gendarmeries europeias e Polícias Militares no Brasil.',
    },
  },

  // RELAÇÕES INTERNACIONAIS - TIER 2 (5)
  {
    id: 'q057',
    modeTier: 2,
    area: 'Relações Internacionais',
    subtopic: 'Moedas internacionais e Sistema financeiro',
    statement:
      'Economias emergentes devem criar mecanismos próprios de pagamento e comércio em moedas locais para reduzir a dependência do dólar norte-americano.',
    weights: { nacionalismo: 0.75, internacional: 0.3, economia: -0.35 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Analisa a multipolaridade financeira frente à hegemonia monetária estabelecida desde Bretton Woods.',
      conceito: 'Desdolarização parcial e autonomia monetária internacional.',
      concordarRepresenta:
        'Reduz exposição a sanções unilaterais e choques de juros do Federal Reserve.',
      discordarRepresenta:
        'Observa que o dólar oferece liquidez incomparável e menor custo de transação no comércio global.',
      exemplosHistoricos:
        'Proposta do Bancor por Keynes (1944) e acordos recentes em moedas locais no BRICS e Mercosul.',
    },
  },
  {
    id: 'q058',
    modeTier: 2,
    area: 'Relações Internacionais',
    subtopic: 'Imigração e Fronteiras',
    statement:
      'Políticas migratórias devem ser mais abertas e acolhedoras, facilitando regularização e integração de imigrantes e refugiados no mercado de trabalho.',
    weights: { internacional: 0.7, sociedade: 0.75, nacionalismo: -0.8, liberdades: 0.55 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Avalia o equilíbrio entre abertura humanitária/demográfica à imigração e controle restritivo de fronteiras.',
      conceito: 'Cosmopolitismo migratório versus soberanismo restritivo de fronteiras.',
      concordarRepresenta:
        'Destaca direitos humanos de refugiados, dinamismo econômico e compensação do envelhecimento populacional.',
      discordarRepresenta:
        'Teme pressão sobre serviços públicos, salários de trabalhadores locais pouco qualificados e choques culturais.',
      exemplosHistoricos:
        'Política de acolhimento alemã em 2015, integração no Canadá versus restrições europeias e americanas recentes.',
    },
  },
  {
    id: 'q059',
    modeTier: 2,
    area: 'Relações Internacionais',
    subtopic: 'Cooperação Sul-Sul e Não Alinhamento',
    statement:
      'Países em desenvolvimento devem manter postura diplomática não alinhada, negociando com todas as grandes potências sem integrar blocos militares rígidos.',
    weights: { nacionalismo: 0.5, internacional: 0.55, seguranca: -0.3 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Testa a preferência por autonomia diplomática multipolar versus alinhamento estratégico exclusivo a um polo geopolítico.',
      conceito: 'Não Alinhamento Ativo e autonomia pela diversificação.',
      concordarRepresenta:
        'Preserva margem de manobra comercial e tecnológica para o país sem envolvê-lo em conflitos alheios.',
      discordarRepresenta:
        'Argumenta que alianças claras com potências democráticas ou blocos de segurança oferecem maior proteção e previsibilidade.',
      exemplosHistoricos:
        'Conferência de Bandung (1955) e tradição diplomática brasileira e indiana.',
    },
  },
  {
    id: 'q060',
    modeTier: 2,
    area: 'Relações Internacionais',
    subtopic: 'Propriedade intelectual global',
    statement:
      'Regras internacionais de patentes farmacêuticas e tecnológicas devem ser flexibilizadas para permitir que países pobres produzam medicamentos e tecnologias essenciais.',
    weights: { economia: -0.55, internacional: 0.45, sociedade: 0.65, nacionalismo: 0.3 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Contrapõe a proteção rígida da propriedade intelectual internacional (TRIPS) ao direito humano à saúde e difusão tecnológica.',
      conceito: 'Quebra/licenciamento compulsório de patentes versus incentivo à P&D privada.',
      concordarRepresenta:
        'Prioriza salvar vidas e superar monopólios de grandes farmacêuticas em emergências sanitárias.',
      discordarRepresenta:
        'Sustenta que patentes fortes são essenciais para remunerar investimentos bilionários em pesquisa de novos medicamentos.',
      exemplosHistoricos:
        'Licenciamento compulsório de antirretrovirais para HIV no Brasil e África do Sul nos anos 2000.',
    },
  },
  {
    id: 'q061',
    modeTier: 2,
    area: 'Relações Internacionais',
    subtopic: 'Governança da ONU',
    statement:
      'O poder de veto dos cinco membros permanentes no Conselho de Segurança da ONU deve ser abolido ou profundamente reformado para refletir o mundo multipolar.',
    weights: { internacional: 0.8, democracia: 0.75, nacionalismo: -0.2 },
    weightStrength: 0.9,
    entenda: {
      oQueSignifica:
        'Questiona a arquitetura hierárquica criada pelos vencedores da Segunda Guerra Mundial em 1945.',
      conceito: 'Democratização das organizações internacionais.',
      concordarRepresenta:
        'Considera anacrônico que cinco países bloqueiem resoluções globais de paz e direitos humanos.',
      discordarRepresenta:
        'Observa realisticamente que sem o veto as grandes potências abandonariam a ONU, repetindo o fracasso da Liga das Nações.',
      exemplosHistoricos:
        'Propostas de reforma do G4 (Brasil, Alemanha, Índia, Japão) desde os anos 2000.',
    },
  },

  // MEIO AMBIENTE - TIER 2 (5)
  {
    id: 'q062',
    modeTier: 2,
    area: 'Meio Ambiente',
    subtopic: 'Energia nuclear na transição',
    statement:
      'A energia nuclear moderna deve compor a matriz energética de transição por gerar eletricidade contínua com baixíssimas emissões de carbono.',
    weights: { economia: 0.15, estado: 0.4, seguranca: 0.15, sociedade: -0.1 },
    weightStrength: 0.85,
    entenda: {
      oQueSignifica:
        'Divide frequentemente movimentos ambientalistas entre foco exclusivo em solar/eólica e aceitação pragmática da fissão nuclear limpa.',
      conceito: 'Descarbonização tecnológica com energia nuclear de base.',
      concordarRepresenta:
        'Prioriza redução rápida de carvão e gás mantendo estabilidade elétrica em países industriais.',
      discordarRepresenta:
        'Alerta para custos elevados, riscos de acidentes e armazenamento milenar de rejeitos radioativos.',
      exemplosHistoricos:
        'Matriz nuclear da França (>65% elétrica) versus abandono nuclear da Alemanha.',
    },
  },
  {
    id: 'q063',
    modeTier: 2,
    area: 'Meio Ambiente',
    subtopic: 'Povos tradicionais e Demarcação territorial',
    statement:
      'A demarcação e proteção rigorosa de terras indígenas e territórios tradicionais é uma estratégia eficaz e justa para conservar florestas tropicais.',
    weights: { sociedade: 0.85, estado: 0.45, economia: -0.4, nacionalismo: -0.1 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Avalia o papel constitucional de territórios indígenas na preservação ambiental frente a demandas por expansão mineradora e agropecuária.',
      conceito: 'Direitos territoriais originários e conservação ecossistêmica.',
      concordarRepresenta:
        'Apoia-se em dados de satélite que mostram menor desmatamento em terras indígenas demarcadas e respeita direitos constitucionais.',
      discordarRepresenta:
        'Defende abertura econômica controlada dessas áreas para integração produtiva nacional e segurança fronteiriça.',
      exemplosHistoricos:
        'Parque Indígena do Xingu (1961) e Constituição de 1988 no Brasil.',
    },
  },
  {
    id: 'q064',
    modeTier: 2,
    area: 'Meio Ambiente',
    subtopic: 'Água e Saneamento como bem comum',
    statement:
      'O acesso à água potável não deve ser submetido à lógica de lucro privado, cabendo ao setor público sua gestão integral.',
    weights: { economia: -0.8, estado: 0.8, sociedade: 0.5 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Discute a remunicipalização ou estatização da água frente a concessões privadas reguladas.',
      conceito: 'Água como bem comum humano versus gestão privada sob metas contratuais.',
      concordarRepresenta:
        'Teme exclusão de populações pobres por tarifas lucrativas e redução de investimentos em áreas periféricas menos rentáveis.',
      discordarRepresenta:
        'Argumenta que operadoras privadas com contratos rígidos de universalização investem mais rápido do que companhias públicas endividadas.',
      exemplosHistoricos:
        'Remunicipalização da água em Paris (2010) versus concessões regionais no Chile e Brasil.',
    },
  },
  {
    id: 'q065',
    modeTier: 2,
    area: 'Meio Ambiente',
    subtopic: 'Agroecologia vs Agronegócio intensivo',
    statement:
      'O Estado deve direcionar subsídios prioritários à agroecologia e redução de agrotóxicos, mesmo que isso reduza temporariamente a escala exportadora de commodities.',
    weights: { economia: -0.6, sociedade: 0.7, estado: 0.45, nacionalismo: -0.1 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Compara o modelo agroexportador químico intensivo com políticas de transição agroecológica e segurança alimentar doméstica.',
      conceito: 'Transição agroecológica versus produtividade extensiva de commodities.',
      concordarRepresenta:
        'Prioriza biodiversidade, saúde pública rural/urbana e autonomia alimentar.',
      discordarRepresenta:
        'Destaca que o agronegócio moderno garante superávits comerciais e alimentos em larga escala a preços acessíveis.',
      exemplosHistoricos:
        'Planos europeus "Farm to Fork" versus expansão agrícola de escala nas Américas.',
    },
  },
  {
    id: 'q066',
    modeTier: 2,
    area: 'Meio Ambiente',
    subtopic: 'Justiça climática e Impostos ambientais',
    statement:
      'Tributos sobre emissões de carbono devem ter sua arrecadação devolvida diretamente em dividendos sociais às famílias de menor renda para evitar que a transição verde penalize os mais pobres.',
    weights: { economia: -0.4, estado: 0.6, sociedade: 0.7, internacional: 0.4 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Aborda como evitar que políticas ecológicas encareçam combustíveis e energia de forma regressiva sobre trabalhadores.',
      conceito: 'Transição justa (Carbon Fee and Dividend).',
      concordarRepresenta:
        'Concilia descarbonização firme com proteção do poder de compra popular.',
      discordarRepresenta:
        'Ou rejeita novos impostos ambientais, ou prefere investir 100% da receita em infraestrutura verde estatal.',
      exemplosHistoricos:
        'Modelo canadense de devolução climática e reação dos "Coletes Amarelos" na França (2018) a impostos regressivos sobre diesel.',
    },
  },

  // FILOSOFIA POLÍTICA - TIER 2 (5)
  {
    id: 'q067',
    modeTier: 2,
    area: 'Filosofia Política',
    subtopic: 'Liberalismo político vs Perfeccionismo moral',
    statement:
      'O Estado deve ser neutro quanto ao que constitui uma "boa vida" moral, desde que os cidadãos respeitem direitos iguais dos outros.',
    weights: { liberdades: 0.95, sociedade: 0.55, democracia: 0.45 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Expressa o núcleo do liberalismo político contemporâneo (John Rawls) frente a modelos perfeccionistas ou moralmente diretivos.',
      conceito: 'Neutralidade liberal do Estado versus perfeccionismo ético/tradicional.',
      concordarRepresenta:
        'Garante coexistência pacífica de múltiplas religiões, filosofias e estilos de vida numa mesma democracia.',
      discordarRepresenta:
        'Sustenta que toda sociedade política se apoia em virtudes cívicas ou morais compartilhadas que a lei deve cultivar.',
      exemplosHistoricos:
        'John Rawls ("O Liberalismo Político", 1993) versus críticos comunitaristas como Michael Sandel.',
    },
  },
  {
    id: 'q068',
    modeTier: 2,
    area: 'Filosofia Política',
    subtopic: 'Reforma vs Revolução',
    statement:
      'Transformações sociais profundas e duradouras são mais bem alcançadas por reformas graduais e institucionais do que por rupturas revolucionárias.',
    weights: { democracia: 0.8, estado: 0.15, liberdades: 0.45 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Retoma o clássico debate entre reformismo gradualista (social-democracia, liberalismo social, conservadorismo evolutivo) e ruptura revolucionária.',
      conceito: 'Gradualismo reformista (Bernstein / Popper) versus ruptura revolucionária.',
      concordarRepresenta:
        'Evita custos humanos de guerras civis, colapsos institucionais e ditaduras pós-revolucionárias.',
      discordarRepresenta:
        'Argumenta que estruturas de poder muito concentradas bloqueiam reformas reais por dentro do sistema.',
      exemplosHistoricos:
        'Debate Rosa Luxemburgo vs. Eduard Bernstein (1899) e Karl Popper ("Engenharia Social Gradual").',
    },
  },
  {
    id: 'q069',
    modeTier: 2,
    area: 'Filosofia Política',
    subtopic: 'Meritocracia e Igualdade de partida',
    statement:
      'Desigualdades econômicas só são moralmente aceitáveis se decorrerem de esforços e talentos exercidos sob igualdade real de oportunidades educacionais e sociais.',
    weights: { economia: -0.25, estado: 0.65, sociedade: 0.6, liberdades: 0.3 },
    weightStrength: 1.0,
    entenda: {
      oQueSignifica:
        'Formula o princípio de justiça de John Rawls e do liberalismo igualitário/social-democrata.',
      conceito: 'Igualdade equitativa de oportunidades e princípio da diferença.',
      concordarRepresenta:
        'Rejeita privilégios herdados de berço ao mesmo tempo que aceita diferenciais de mérito quando a linha de partida é justa.',
      discordarRepresenta:
        'Ou defende igualdade de resultados muito mais estreita, ou considera legítima a transmissão livre de vantagens familiares privadas.',
      exemplosHistoricos:
        'Teoria da Justiça de John Rawls (1971).',
    },
  },
  {
    id: 'q070',
    modeTier: 2,
    area: 'Filosofia Política',
    subtopic: 'Desobediência civil',
    statement:
      'Quando leis aprovadas legitimamente violam direitos humanos fundamentais, a desobediência civil pacífica e pública é um dever moral legítimo.',
    weights: { democracia: 0.45, liberdades: 0.85, sociedade: 0.45, seguranca: -0.45 },
    weightStrength: 0.95,
    entenda: {
      oQueSignifica:
        'Examina a legitimidade moral de quebrar leis injustas de forma não violenta e aberta, aceitando as consequências jurídicas.',
      conceito: 'Desobediência civil (Henry David Thoreau, Gandhi, Martin Luther King Jr.).',
      concordarRepresenta:
        'Reconhece que legalidade estatal não se confunde automaticamente com justiça moral.',
      discordarRepresenta:
        'Teme que o descumprimento seletivo de leis democráticas enfraqueça o império da lei e a estabilidade civil.',
      exemplosHistoricos:
        'Marcha do Sal de Gandhi (1930) e movimento pelos direitos civis nos EUA (1955–1965).',
    },
  },
  {
    id: 'q071',
    modeTier: 2,
    area: 'Filosofia Política',
    subtopic: 'Nacionalismo cívico vs Nacionalismo étnico',
    statement:
      'A identidade nacional deve definir-se exclusivamente pela adesão livre à Constituição e aos direitos cidadãos comuns, nunca por origem étnica, religiosa ou ancestral.',
    weights: { democracia: 0.75, sociedade: 0.75, liberdades: 0.6, nacionalismo: -0.25 },
    weightStrength: 1.05,
    entenda: {
      oQueSignifica:
        'Diferencia o patriotismo constitucional/cívico inclusivo do etnonacionalismo excludente.',
      conceito: 'Patriotismo constitucional (Jürgen Habermas) versus nacionalismo étnico-cultural.',
      concordarRepresenta:
        'Permite integração igualitária de cidadãos de diversas origens dentro de uma mesma república soberana.',
      discordarRepresenta:
        'Acredita que a solidariedade nacional exige raízes históricas, linguísticas e culturais compartilhadas mais densas.',
      exemplosHistoricos:
        'Patriotismo constitucional alemão pós-guerra e tradições republicanas cívicas.',
    },
  },
];
