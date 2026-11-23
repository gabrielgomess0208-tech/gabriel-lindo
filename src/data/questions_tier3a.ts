import { QuizQuestion } from '../shared/types.ts';

export const QUESTIONS_TIER_3A: QuizQuestion[] = [
  // =========================================================================
  // ECONOMIA - TIER 3 (24 PERGUNTAS: q072 - q095)
  // =========================================================================
  {
    id: 'q072',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Salário mínimo e Poder de compra',
    statement: 'Políticas legais de valorização real do salário mínimo acima da inflação estimulam o consumo popular sem comprometer severamente o emprego formal.',
    weights: { economia: -0.65, estado: 0.65, sociedade: 0.45 },
    entenda: {
      oQueSignifica: 'Avalia os efeitos macroeconômicos do piso salarial legal sobre emprego e demanda agregada.',
      conceito: 'Piso salarial institucional versus salário de equilíbrio de mercado.',
      concordarRepresenta: 'Destaca que salários maiores elevam a demanda interna e combatem a exploração em mercados monopsônicos.',
      discordarRepresenta: 'Sustenta que pisos salariais acima da produtividade marginal reduzem contratações formais de jovens e pequenas empresas.',
      exemplosHistoricos: 'Política de salário mínimo brasileiro (2003–2015) e debates no Reino Unido/EUA.',
    },
  },
  {
    id: 'q073',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Impostos sobre consumo vs Renda',
    statement: 'Impostos indiretos sobre consumo e mercadorias devem ser drasticamente reduzidos e substituídos por impostos diretos progressivos sobre renda e patrimônio.',
    weights: { economia: -0.6, estado: 0.45, sociedade: 0.6 },
    entenda: {
      oQueSignifica: 'Discute a regressividade tributária (quando pobres pagam proporcionalmente mais em alimentos e bens do que ricos).',
      conceito: 'Estrutura tributária progressiva versus regressiva.',
      concordarRepresenta: 'Busca aliviar a carga sobre trabalhadores de baixa renda e desonerar a produção.',
      discordarRepresenta: 'Considera impostos sobre consumo (como IVA) mais simples de arrecadar e menos propensos à evasão de capitais.',
      exemplosHistoricos: 'Comparação entre estrutura da OCDE (foco em renda) e América Latina (foco em consumo).',
    },
  },
  {
    id: 'q074',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Controle de preços em crises',
    statement: 'Em choques agudos de abastecimento, o governo deve adotar tabelamento temporário de preços para alimentos básicos, combustíveis e energia.',
    weights: { economia: -0.8, estado: 0.8, nacionalismo: 0.3 },
    entenda: {
      oQueSignifica: 'Examina o uso de controles administrativos diretos de preços diante de inflação de oferta ou especulação.',
      conceito: 'Controle de preços versus livre ajuste de oferta e demanda.',
      concordarRepresenta: 'Prioriza a proteção imediata da segurança alimentar e do poder de compra popular em emergências.',
      discordarRepresenta: 'Aponta que congelamentos históricos frequentemente geram desabastecimento, mercados paralelos e desestímulo à produção.',
      exemplosHistoricos: 'Controles de guerra nos EUA/Reino Unido (1940s) e Plano Cruzado no Brasil (1986).',
    },
  },
  {
    id: 'q075',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Regulação financeira e Fluxo de capitais',
    statement: 'O Estado deve impor controles sobre entradas e saídas de capital especulativo de curto prazo para evitar volatilidade cambial.',
    weights: { economia: -0.55, estado: 0.65, nacionalismo: 0.7, internacional: -0.2 },
    entenda: {
      oQueSignifica: 'Avalia se fluxos financeiros transfronteiriços devem circular livremente ou ser tributados/regulados para estabilizar o câmbio.',
      conceito: 'Controles de capitais (Taxa Tobin / IOF) versus livre mobilidade financeira.',
      concordarRepresenta: 'Protege economias emergentes contra ataques especulativos e valorização artificial da moeda.',
      discordarRepresenta: 'Teme redução da liquidez financeira, aumento do custo de captação externa e perda de confiança de investidores.',
      exemplosHistoricos: 'Controles da Malásia na crise asiática (1998) e encaixe chileno nos anos 1990.',
    },
  },
  {
    id: 'q076',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Jornada de trabalho',
    statement: 'Os ganhos históricos de produtividade e automação devem ser convertidos em redução legal da jornada semanal de trabalho sem redução salarial.',
    weights: { economia: -0.75, estado: 0.55, sociedade: 0.6 },
    entenda: {
      oQueSignifica: 'Trata da distribuição dos ganhos tecnológicos entre lucros corporativos, salários e tempo livre dos trabalhadores.',
      conceito: 'Redução da jornada de trabalho (semana de 4 dias / 35–36 horas).',
      concordarRepresenta: 'Defende saúde mental, geração de vagas e apropriação humana do progresso técnico.',
      discordarRepresenta: 'Alega que reduzir horas por lei sem queda proporcional de custo inviabiliza setores intensivos em mão de obra.',
      exemplosHistoricos: 'Redução para 35h na França (2000) e testes de semana de 4 dias no Reino Unido e Islândia.',
    },
  },
  {
    id: 'q077',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Privatização da previdência',
    statement:
      'Sistemas previdenciários devem migrar gradualmente da repartição pública solidária para contas individuais de capitalização administradas por fundos privados.',
    weights: { economia: 0.85, estado: -0.8, sociedade: -0.35 },
    entenda: {
      oQueSignifica: 'Compara o pacto intergeracional solidário (repartição) com a poupança individual investida no mercado financeiro.',
      conceito: 'Regime de repartição versus capitalização individual.',
      concordarRepresenta:
        'Busca sustentabilidade fiscal diante do envelhecimento demográfico e ligação direta entre contribuição e retorno financeiro.',
      discordarRepresenta:
        'Aponta risco de benefícios insuficientes na velhice devido a taxas administrativas e crises financeiras.',
      exemplosHistoricos:
        'Sistema chileno de AFPs (1981) versus previdência pública europeia e retorno ao pilar público na Polônia/Argentina.',
    },
  },
  {
    id: 'q078',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Parcerias Público-Privadas',
    statement:
      'Concessões reguladas e Parcerias Público-Privadas (PPPs) são preferíveis à execução estatal direta em rodovias, portos e aeroportos.',
    weights: { economia: 0.65, estado: -0.45 },
    entenda: {
      oQueSignifica:
        'Analisa a eficiência de concessões com metas contratuais frente a obras e gestão pública direta.',
      conceito: 'Concessões de infraestrutura e PPPs.',
      concordarRepresenta:
        'Atrai capital privado para acelerar investimentos sem pressionar imediatamente o orçamento fiscal.',
      discordarRepresenta:
        'Critica pedágios elevados, garantias estatais de retorno privado e socialização de prejuízos em crises.',
      exemplosHistoricos:
        'Concessões aeroportuárias e rodoviárias na Europa e América Latina.',
    },
  },
  {
    id: 'q079',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Pesquisa e Desenvolvimento estatal',
    statement:
      'O Estado deve financiar diretamente pesquisa científica básica, universidades e tecnologias de alto risco antes que o setor privado as comercialize.',
    weights: { estado: 0.75, economia: -0.3, nacionalismo: 0.45 },
    entenda: {
      oQueSignifica:
        'Examina o conceito de "Estado Empreendedor" (Mariana Mazzucato) na criação de inovações fundamentais.',
      conceito: 'Estado Empreendedor e sistemas nacionais de inovação.',
      concordarRepresenta:
        'Lembra que internet, GPS, semicondutores iniciais e vacinas dependeram decisivamente de verba pública.',
      discordarRepresenta:
        'Prefere incentivos fiscais horizontais (deduções de P&D) para que empresas privadas escolham onde inovar.',
      exemplosHistoricos:
        'DARPA e NIH nos EUA; Embrapa e Fiocruz no Brasil.',
    },
  },
  {
    id: 'q080',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Economia de plataformas e Uberização',
    statement:
      'Trabalhadores de aplicativos de transporte e entregas devem ser enquadrados legalmente com direitos previdenciários e piso mínimo garantido pelas plataformas.',
    weights: { economia: -0.65, estado: 0.65, sociedade: 0.45 },
    entenda: {
      oQueSignifica:
        'Trata do status jurídico do trabalho mediado por algoritmos digitais.',
      conceito: 'Subordinação algorítmica versus autonomia contratual flexível.',
      concordarRepresenta:
        'Impede precarização trabalhista disfarçada de empreendedorismo individual.',
      discordarRepresenta:
        'Teme que encargos celetistas rígidos reduzam a flexibilidade de horários e diminuam o número de vagas disponíveis.',
      exemplosHistoricos:
        'Diretiva europeia sobre trabalho em plataformas (2024) e decisões da Suprema Corte do Reino Unido.',
    },
  },
  {
    id: 'q081',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Dívida pública e Regras fiscais',
    statement:
      'Limites constitucionais rígidos para o crescimento do gasto público devem prevalecer mesmo sobre demandas emergenciais de investimento social.',
    weights: { economia: 0.8, estado: -0.8, democracia: -0.2 },
    entenda: {
      oQueSignifica:
        'Avalia a rigidez de regras fiscais constitucionais (tetos de gastos e freios da dívida) frente à flexibilidade orçamentária democrática.',
      conceito: 'Regras fiscais rígidas versus orçamento anticíclico flexível.',
      concordarRepresenta:
        'Previne endividamento explosivo, juros altos e transferência de dívida para gerações futuras.',
      discordarRepresenta:
        'Argumenta que tetos rígidos engessam saúde, educação e investimentos produtivos que geram crescimento futuro.',
      exemplosHistoricos:
        'Freio da Dívida (Schuldenbremse) alemão de 2009 e Teto de Gastos no Brasil (2016–2023).',
    },
  },
  {
    id: 'q082',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Imposto sobre grandes fortunas',
    statement:
      'Um imposto anual sobre patrimônio líquido elevado deve ser adotado internacionalmente para conter a concentração extrema de riqueza.',
    weights: { economia: -0.8, estado: 0.65, internacional: 0.45, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Analisa propostas econômicas contemporâneas (como as de Thomas Piketty e Gabriel Zucman) de tributação global sobre bilionários.',
      conceito: 'Tributação de estoque de riqueza e cooperação fiscal internacional.',
      concordarRepresenta:
        'Compensa o fato de que bilionários frequentemente pagam alíquotas efetivas menores do que assalariados.',
      discordarRepresenta:
        'Aponta dificuldades de avaliação de ativos ilíquidos, bitributação e fuga de capitais para paraísos fiscais.',
      exemplosHistoricos:
        'Proposta no G20 (2024) e imposto sobre fortunas na Noruega e Espanha.',
    },
  },
  {
    id: 'q083',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Moedas digitais e Dinheiro público',
    statement:
      'Sistemas públicos de pagamento instantâneo gratuito e moedas digitais estatais devem competir diretamente com taxas cobradas por bancos privados.',
    weights: { economia: -0.35, estado: 0.6, democracia: 0.25 },
    entenda: {
      oQueSignifica:
        'Explora a criação de infraestrutura pública digital financeira para inclusão bancária e redução de custos de transação.',
      conceito: 'Infraestrutura Pública Digital Financeira.',
      concordarRepresenta:
        'Reduz tarifas oligopolistas bancárias e democratiza pagamentos digitais a pequenos comerciantes.',
      discordarRepresenta:
        'Teme risco à privacidade financeira dos cidadãos caso o Estado centralize registros digitais de transações.',
      exemplosHistoricos:
        'PIX no Brasil (2020) e UPI na Índia.',
    },
  },
  {
    id: 'q084',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Câmbio e Competitividade industrial',
    statement:
      'O governo e o Banco Central devem evitar a valorização excessiva da moeda nacional mesmo que isso encareça temporariamente importações e viagens ao exterior.',
    weights: { nacionalismo: 0.75, estado: 0.55, economia: -0.25 },
    entenda: {
      oQueSignifica:
        'Discute o papel da taxa de câmbio competitiva no novo desenvolvimentismo para evitar a "doença holandesa".',
      conceito: 'Doença holandesa e câmbio industrial competitivo (Bresser-Pereira).',
      concordarRepresenta:
        'Protege a rentabilidade da indústria exportadora doméstica frente a importações artificialmente baratas.',
      discordarRepresenta:
        'Prefere câmbio livremente flutuante e alerta que moeda desvalorizada pressiona a inflação sobre bens populares.',
      exemplosHistoricos:
        'Gestão cambial competitiva na China e Coreia do Sul histórica.',
    },
  },
  {
    id: 'q085',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Subsídios corporativos',
    statement:
      'Renúncias fiscais e subsídios públicos a grandes empresas privadas devem ser eliminados, reduzindo impostos gerais para todo o mercado.',
    weights: { economia: 0.7, estado: -0.35, democracia: 0.35 },
    entenda: {
      oQueSignifica:
        'Critica o chamado "capitalismo de laços" (favorecimento fiscal seletivo) em comparação tanto com mercado neutro quanto com política industrial condicionada.',
      conceito: 'Neutralidade tributária versus subsídios setoriais.',
      concordarRepresenta:
        'Combate lobby empresarial, privilégios fiscais opacos e distorções concorrenciais.',
      discordarRepresenta:
        'Sustenta que incentivos bem condicionados a metas de exportação e P&D são ferramentas legítimas de política industrial.',
      exemplosHistoricos:
        'Revisões de gastos tributários na OCDE versus incentivos industriais com contrapartidas asiáticos.',
    },
  },
  {
    id: 'q086',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Direito à greve no setor público',
    statement:
      'Servidores de setores essenciais como saúde, educação e transporte devem ter direito pleno à greve sem restrições severas ou cortes salariais imediatos.',
    weights: { economia: -0.6, liberdades: 0.4, estado: 0.35, democracia: 0.35 },
    entenda: {
      oQueSignifica:
        'Contrapõe a autonomia sindical no setor público ao princípio da continuidade dos serviços essenciais à população.',
      conceito: 'Direito de greve em serviços públicos versus continuidade do serviço essencial.',
      concordarRepresenta:
        'Considera a greve o único contrapeso real de servidores contra governos que arrocham salários unilateralmente.',
      discordarRepresenta:
        'Defende limites rígidos ou arbitragem obrigatória para não paralisar hospitais, escolas e transportes populares.',
      exemplosHistoricos:
        'Convenções da OIT sobre greve versus leis restritivas no Reino Unido e EUA.',
    },
  },
  {
    id: 'q087',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Renda Básica Universal',
    statement:
      'Todo cidadão adulto deve receber uma Renda Básica Universal incondicional paga pelo Estado para garantir subsistência digna diante da automação.',
    weights: { economia: -0.65, estado: 0.6, sociedade: 0.6, liberdades: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia a substituição ou complementação de programas focalizados por um dividendo universal sem exigência de contrapartida.',
      conceito: 'Renda Básica Universal (UBI — Philippe Van Parijs / Eduardo Suplicy).',
      concordarRepresenta:
        'Elimina armadilhas da pobreza, reduz burocracia fiscalizatória e dá autonomia real diante de trabalhos indignos.',
      discordarRepresenta:
        'Questiona o custo fiscal gigantesco e argumenta que recursos públicos devem ir para os mais pobres ou para serviços gratuitos.',
      exemplosHistoricos:
        'Dividendo do Alasca, experimentos no Quênia, Finlândia e Lei da Renda Básica de Cidadania no Brasil (2004).',
    },
  },
  {
    id: 'q088',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Pequenos negócios e Distributismo',
    statement:
      'A legislação tributária e creditícia deve favorecer pequenos comércios locais e produtores familiares, tributando mais pesadamente grandes redes varejistas.',
    weights: { economia: -0.25, estado: 0.25, nacionalismo: 0.25, sociedade: -0.15 },
    entenda: {
      oQueSignifica:
        'Reflete princípios do distributismo e proteção à economia local contra megacorporações.',
      conceito: 'Desconcentração econômica e economia de pequena escala.',
      concordarRepresenta:
        'Mantém renda circulando nas cidades pequenas e evita o esmagamento de pequenos proprietários por oligopólios.',
      discordarRepresenta:
        'Observa que grandes redes obtêm ganhos de escala que reduzem preços finais ao consumidor de baixa renda.',
      exemplosHistoricos:
        'Regime Simples Nacional no Brasil e leis francesas de proteção a livrarias e comércios de bairro.',
    },
  },
  {
    id: 'q089',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Cogestão trabalhista nas empresas',
    statement:
      'Grandes corporações devem ser obrigadas por lei a reservar assentos em seus conselhos de administração para representantes eleitos dos trabalhadores.',
    weights: { economia: -0.55, democracia: 0.65, estado: 0.45 },
    entenda: {
      oQueSignifica:
        'Examina a chamada "democracia econômica" ou modelo renano de cogestão empresarial.',
      conceito: 'Codeterminação / Mitbestimmung alemã.',
      concordarRepresenta:
        'Alinha decisões estratégicas à preservação de empregos, segurança laboral e visão de longo prazo.',
      discordarRepresenta:
        'Alega que decisões de conselho cabem exclusivamente aos acionistas que assumiram o risco do capital.',
      exemplosHistoricos:
        'Lei de Cogestão da Alemanha (1976), onde até metade do conselho supervisor de grandes empresas representa trabalhadores.',
    },
  },
  {
    id: 'q090',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Economia informal e Regularização',
    statement:
      'A melhor forma de reduzir a informalidade trabalhista é simplificar impostos e reduzir encargos sobre a folha de pagamento.',
    weights: { economia: 0.65, estado: -0.45 },
    entenda: {
      oQueSignifica:
        'Analisa as causas da economia informal e a tributação sobre o trabalho.',
      conceito: 'Cunha fiscal sobre o trabalho e formalização.',
      concordarRepresenta:
        'Argumenta que encargos pesados sobre contratação empurram pequenas firmas para a informalidade.',
      discordarRepresenta:
        'Defende que a formalização depende de fiscalização trabalhista firme, crescimento econômico e benefícios previdenciários atrativos.',
      exemplosHistoricos:
        'Reformas de redução da cunha fiscal sobre salários baixos na Europa e América Latina.',
    },
  },
  {
    id: 'q091',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Licenciamento e Burocracia empresarial',
    statement:
      'A abertura, operação e fechamento de empresas privadas devem ser drasticamente simplificados, eliminando alvarás prévios para atividades de baixo risco.',
    weights: { economia: 0.7, estado: -0.45, liberdades: 0.5 },
    entenda: {
      oQueSignifica:
        'Discute a desburocratização administrativa para empreendedores em equilíbrio com fiscalizações sanitárias e urbanísticas.',
      conceito: 'Liberdade econômica e redução de custos de transação.',
      concordarRepresenta:
        'Combate entraves cartoriais que bloqueiam pequenos negócios e favorecem grandes empresas capazes de pagar advogados.',
      discordarRepresenta:
        'Alerta para riscos sanitários, trabalhistas e ambientais se fiscalizações preventivas forem removidas.',
      exemplosHistoricos:
        'Índices Doing Business e Leis de Liberdade Econômica.',
    },
  },
  {
    id: 'q092',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Transporte público gratuito',
    statement:
      'O transporte público urbano deve ser financiado integralmente por impostos e taxas sobre veículos individuais para garantir tarifa zero ao usuário.',
    weights: { economia: -0.7, estado: 0.75, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Avalia o conceito de mobilidade urbana como direito social universal desmercantilizado.',
      conceito: 'Tarifa Zero e subsídio cruzado na mobilidade urbana.',
      concordarRepresenta:
        'Amplia o direito à cidade dos mais pobres, reduz congestionamentos e diminui emissões veiculares.',
      discordarRepresenta:
        'Questiona o peso fiscal sobre municípios e teme superlotação ou degradação da manutenção sem cobrança tarifária.',
      exemplosHistoricos:
        'Tarifa zero em Tallinn (Estônia), Luxemburgo e dezenas de municípios brasileiros.',
    },
  },
  {
    id: 'q093',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Propriedade estatal de bancos comerciais',
    statement:
      'Os grandes bancos comerciais devem ser estatizados para direcionar o crédito nacional segundo prioridades sociais e industriais, não pelo lucro financeiro.',
    weights: { economia: -0.9, estado: 0.9, nacionalismo: 0.45 },
    entenda: {
      oQueSignifica:
        'Distingue sistemas financeiros mistos (com alguns bancos públicos) da estatização integral do sistema bancário.',
      conceito: 'Socialização do sistema financeiro.',
      concordarRepresenta:
        'Vê o crédito privado concentrado como fonte de juros abusivos e financiamento especulativo.',
      discordarRepresenta:
        'Teme alocação política ineficiente do crédito, insolvência fiscal e perda de eficiência e inovação financeira.',
      exemplosHistoricos:
        'Nacionalização bancária inicial na França em 1981 (revertida depois) e sistema bancário público chinês e indiano histórico.',
    },
  },
  {
    id: 'q094',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Inteligência Artificial e Produtividade',
    statement:
      'Empresas que substituem trabalhadores por automação e inteligência artificial devem pagar uma contribuição específica para financiar requalificação e seguridade social.',
    weights: { economia: -0.55, estado: 0.7, sociedade: 0.45 },
    entenda: {
      oQueSignifica:
        'Trata do debate sobre tributação de robôs/automação para evitar erosão da base previdenciária financiada por salários.',
      conceito: 'Imposto sobre automação e adaptação tecnológica justa.',
      concordarRepresenta:
        'Compensa a queda da massa salarial na tributação e financia transição de carreira dos trabalhadores deslocados.',
      discordarRepresenta:
        'Argumenta que taxar automação desacelera ganhos de produtividade que tornam o país competitivo globalmente.',
      exemplosHistoricos:
        'Propostas discutidas no Parlamento Europeu e Coreia do Sul.',
    },
  },
  {
    id: 'q095',
    modeTier: 3,
    area: 'Economia',
    subtopic: 'Consumo e Publicidade infantil',
    statement:
      'A publicidade comercial voltada diretamente a crianças deve ser estritamente proibida pelo Estado por explorar vulnerabilidade cognitiva em formação.',
    weights: { estado: 0.55, economia: -0.45, sociedade: 0.35, liberdades: -0.25 },
    entenda: {
      oQueSignifica:
        'Contrapõe a proteção à infância e saúde alimentar à liberdade comercial de anunciantes e emissoras.',
      conceito: 'Regulação protetiva de mercado versus autorregulação publicitária.',
      concordarRepresenta:
        'Reduz consumismo precoce, obesidade infantil e pressão econômica sobre famílias.',
      discordarRepresenta:
        'Considera que a supervisão cabe aos pais, não a proibições estatais que afetam o financiamento da mídia infantil.',
      exemplosHistoricos:
        'Proibição na Suécia, Noruega e Quebec versus autorregulação em outros mercados.',
    },
  },

  // =========================================================================
  // ESTADO E GOVERNANÇA - TIER 3 (24 PERGUNTAS: q096 - q119)
  // =========================================================================
  {
    id: 'q096',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Voto obrigatório vs Facultativo',
    statement:
      'O comparecimento às urnas deve ser facultativo, pois o direito de votar inclui o direito individual de não participar do processo eleitoral.',
    weights: { liberdades: 0.65, democracia: -0.1, sociedade: 0.1 },
    entenda: {
      oQueSignifica:
        'Compara modelos de voto facultativo (maioria da OCDE) com voto obrigatório (Brasil, Austrália, Bélgica).',
      conceito: 'Voto como direito individual livre versus voto como dever cívico coletivo.',
      concordarRepresenta:
        'Valoriza liberdade de consciência e evita votos desinformados apenas para cumprir obrigação legal.',
      discordarRepresenta:
        'Observa que o voto facultativo reduz drasticamente a participação de eleitores pobres, enviesando políticas públicas.',
      exemplosHistoricos:
        'Austrália e Brasil (obrigatório) versus EUA e Reino Unido (facultativo).',
    },
  },
  {
    id: 'q097',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Controle constitucional judicial',
    statement:
      'Supremas Cortes não eleitas têm o dever legítimo de invalidar leis aprovadas pela maioria do parlamento quando violam direitos fundamentais da Constituição.',
    weights: { democracia: 0.6, liberdades: 0.55, sociedade: 0.35 },
    entenda: {
      oQueSignifica:
        'Explora a tensão entre constitucionalismo contramajoritário e supremacia do parlamento eleito.',
      conceito: 'Controle de constitucionalidade versus "dificuldade contramajoritária".',
      concordarRepresenta:
        'Protege minorias e garantias fundamentais contra maiorias legislativas eventuais.',
      discordarRepresenta:
        'Critica o ativismo judicial quando juízes vitalícios substituem escolhas políticas de representantes eleitos.',
      exemplosHistoricos:
        'Tribunal Constitucional Alemão e STF brasileiro versus tradição da soberania parlamentar britânica.',
    },
  },
  {
    id: 'q098',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Mandatos revogáveis (Recall)',
    statement:
      'Eleitores devem ter o direito legal de convocar referendo para revogar o mandato de prefeitos, governadores e parlamentares no meio do termo (recall).',
    weights: { democracia: 0.8, liberdades: 0.25 },
    entenda: {
      oQueSignifica:
        'Analisa mecanismos de responsabilização contínua entre eleições.',
      conceito: 'Mandato revogável (Recall eleitoral).',
      concordarRepresenta:
        'Impede que eleitos traiam promessas básicas de campanha com impunidade por quatro ou mais anos.',
      discordarRepresenta:
        'Teme instabilidade permanente, campanhas contínuas de oposição e inviabilização de medidas impopulares necessárias.',
      exemplosHistoricos:
        'Recall em estados dos EUA (Califórnia), Suíça e Alemanha regional.',
    },
  },
  {
    id: 'q099',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Limites de reeleição',
    statement:
      'Chefes do Poder Executivo devem estar sujeitos a limites estritos de mandato sem possibilidade de reeleições sucessivas indefinidas.',
    weights: { democracia: 0.9, liberdades: 0.5 },
    entenda: {
      oQueSignifica:
        'Avalia a importância da alternância de poder republicana contra a personalização contínua do Executivo.',
      conceito: 'Alternância republicana e limitação temporal de mandatos.',
      concordarRepresenta:
        'Previne uso da máquina pública para perpetuação personalista e erosão gradual da competição eleitoral.',
      discordarRepresenta:
        'Argumenta que limitar mandatos impede os eleitores de manterem um governante aprovado pela maioria.',
      exemplosHistoricos:
        '22ª Emenda dos EUA (máximo 2 mandatos) e alternância no Uruguai e México (sexênio único).',
    },
  },
  {
    id: 'q100',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Sistema eleitoral proporcional vs Distrital',
    statement:
      'Sistemas eleitorais proporcionais são preferíveis aos distritais majoritários porque garantem representação parlamentar fiel a minorias políticas e regionais.',
    weights: { democracia: 0.7, sociedade: 0.35 },
    entenda: {
      oQueSignifica:
        'Compara sistemas eleitorais proporcionais (foco em representatividade plural) e majoritários distritais (foco em governabilidade e vínculo local).',
      conceito: 'Representação proporcional versus sistema distrital majoritário ("first-past-the-post").',
      concordarRepresenta:
        'Evita desperdício de votos e bipartidarismo fechado, refletindo a diversidade ideológica da sociedade.',
      discordarRepresenta:
        'Critica a fragmentação partidária excessiva e prefere que cada distrito conheça e cobre diretamente seu deputado.',
      exemplosHistoricos:
        'Sistema misto alemão versus sistema distrital britânico e proporcional brasileiro.',
    },
  },
  {
    id: 'q101',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Mídia pública e Regulação de plataformas',
    statement:
      'Plataformas digitais e redes sociais devem responder legalmente pela amplificação algorítmica de desinformação eleitoral e conteúdos ilícitos.',
    weights: { estado: 0.5, democracia: 0.45, liberdades: -0.35 },
    entenda: {
      oQueSignifica:
        'Enfrenta o dilema contemporâneo entre integridade informacional democrática e liberdade de intermediação digital.',
      conceito: 'Regulação de plataformas digitais (Digital Services Act) versus isenção ampla (Seção 230).',
      concordarRepresenta:
        'Distingue liberdade de opinião de amplificação comercial lucrativa de fraudes e ataques à democracia.',
      discordarRepresenta:
        'Teme que governos ou tribunais definam arbitrariamente o que é "verdade" ou "desinformação".',
      exemplosHistoricos:
        'Digital Services Act da União Europeia (2022) versus debate americano da Seção 230.',
    },
  },
  {
    id: 'q102',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Autonomia universitária',
    statement:
      'Universidades públicas devem gozar de plena autonomia administrativa, científica e na eleição de seus reitores, protegidas de interferências do governo de turno.',
    weights: { democracia: 0.8, liberdades: 0.65, estado: 0.25 },
    entenda: {
      oQueSignifica:
        'Protege a liberdade acadêmica e de pesquisa científica diante de pressões ideológicas governamentais.',
      conceito: 'Autonomia universitária constitucional (Reforma de Córdoba, 1918).',
      concordarRepresenta:
        'Garante pensamento crítico, ciência independente e pluralismo de ideias.',
      discordarRepresenta:
        'Sustenta que instituições financiadas por impostos públicos precisam responder a metas estratégicas definidas por governos eleitos.',
      exemplosHistoricos:
        'Reforma Universitária de Córdoba (1918) e Constituição Brasileira de 1988 (Art. 207).',
    },
  },
  {
    id: 'q103',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Foro privilegiado e Igualdade jurídica',
    statement:
      'Autoridades políticas dos três poderes devem ser julgadas pelas mesmas instâncias judiciais comuns que os demais cidadãos em crimes comuns.',
    weights: { democracia: 0.85, liberdades: 0.4 },
    entenda: {
      oQueSignifica:
        'Questiona a extensão de prerrogativas de foro em comparação com o princípio republicano da isonomia perante a lei.',
      conceito: 'Isonomia republicana versus imunidade funcional parlamentar.',
      concordarRepresenta:
        'Reduz percepção de impunidade e privilégio estamental da classe política.',
      discordarRepresenta:
        'Defende que o foro em tribunais superiores protege parlamentares contra perseguições políticas de juízes locais.',
      exemplosHistoricos:
        'Limites ao foro privilegiado na Europa e debates no STF brasileiro.',
    },
  },
  {
    id: 'q104',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Estado unitário vs Federação fiscal',
    statement:
      'Serviços essenciais como polícia e ensino médio deveriam seguir currículo e diretrizes nacionais unificadas, evitando disparidades drásticas entre estados.',
    weights: { estado: 0.55, nacionalismo: 0.45, democracia: 0.1 },
    entenda: {
      oQueSignifica:
        'Avalia o grau de padronização nacional desejável em sistemas federativos ou descentralizados.',
      conceito: 'Coordenação federativa nacional versus autonomia estadual plena.',
      concordarRepresenta:
        'Assegura mobilidade de estudantes e padrão mínimo de cidadania em todo o território.',
      discordarRepresenta:
        'Defende experimentação local adaptada às realidades culturais e econômicas de cada região.',
      exemplosHistoricos:
        'Base Nacional Comum Curricular (BNCC) no Brasil versus autonomia distrital escolar nos EUA.',
    },
  },
  {
    id: 'q105',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Lobby e Grupos de interesse',
    statement:
      'A atividade de lobby corporativo junto a parlamentares e ministérios deve ser estritamente regulamentada com registro público obrigatório de reuniões e gastos.',
    weights: { democracia: 0.75, estado: 0.3 },
    entenda: {
      oQueSignifica:
        'Trata da transparência na representação de interesses privados diante do poder público.',
      conceito: 'Regulação do lobby e prevenção da captura regulatória.',
      concordarRepresenta:
        'Torna rastreável quem influencia leis e coloca sindicatos, ONGs e empresas sob luz pública.',
      discordarRepresenta:
        'Ou busca proibir qualquer interlocução privada comercial, ou considera excessiva a burocracia de registro.',
      exemplosHistoricos:
        'Lobbying Disclosure Act nos EUA e Registro de Transparência da União Europeia.',
    },
  },
  {
    id: 'q106',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Conselhos populares e Orçamento participativo',
    statement:
      'Parcela significativa dos investimentos municipais deve ser decidida diretamente por assembleias de moradores e conselhos populares de bairro.',
    weights: { democracia: 0.85, economia: -0.35, sociedade: 0.4 },
    entenda: {
      oQueSignifica:
        'Aprofunda o papel da democracia deliberativa local na alocação orçamentária.',
      conceito: 'Democracia deliberativa e Orçamento Participativo.',
      concordarRepresenta:
        'Canaliza obras para carências reais de bairros periféricos historicamente ignorados.',
      discordarRepresenta:
        'Sustenta que planejamento técnico integrado da cidade fica prejudicado se fragmentado por votações locais.',
      exemplosHistoricos:
        'Experiências de orçamento participativo em Porto Alegre, Paris e Madri.',
    },
  },
  {
    id: 'q107',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Estado de exceção e Crises sanitárias',
    statement:
      'Durante pandemias ou catástrofes graves, governos têm legitimidade para impor restrições temporárias à circulação e ao comércio com base em consenso científico.',
    weights: { estado: 0.75, liberdades: -0.45, sociedade: 0.3, seguranca: 0.2 },
    entenda: {
      oQueSignifica:
        'Analisa a colisão entre saúde coletiva de emergência e liberdades individuais de locomoção e atividade econômica.',
      conceito: 'Princípio da precaução em saúde pública versus liberdades civis e econômicas.',
      concordarRepresenta:
        'Prioriza a preservação da vida coletiva e evita colapso hospitalar.',
      discordarRepresenta:
        'Adverte contra precedentes autoritários prolongados e danos econômicos severos a pequenos trabalhadores.',
      exemplosHistoricos:
        'Medidas de contenção na pandemia de COVID-19 (2020–2021) em diferentes países.',
    },
  },
  {
    id: 'q108',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Justiça eleitoral e Auditoria',
    statement:
      'O processo eleitoral deve ser administrado por um órgão estatal independente e não partidário, e não por governos ou legislativos partidários.',
    weights: { democracia: 0.9, estado: 0.25 },
    entenda: {
      oQueSignifica:
        'Compara autoridades eleitorais independentes (modelo latino-americano/indiano) com gestão descentralizada por autoridades locais partidárias.',
      conceito: 'Governança eleitoral autônoma e integridade do pleito.',
      concordarRepresenta:
        'Evita manipulação de distritos eleitorais (gerrymandering) e restrições partidárias ao registro de eleitores.',
      discordarRepresenta:
        'Desconfia da concentração de poder decisório em uma única corte central.',
      exemplosHistoricos:
        'Tribunal Superior Eleitoral (Brasil), INE (México) e Election Commission of India.',
    },
  },
  {
    id: 'q109',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Monarquia constitucional vs República',
    statement:
      'Uma república sem cargos públicos hereditários é sempre preferível a uma monarquia constitucional, mesmo quando a monarquia possui poderes apenas simbólicos.',
    weights: { democracia: 0.65, sociedade: 0.35, liberdades: 0.25 },
    entenda: {
      oQueSignifica:
        'Testa o princípio republicano da igualdade formal de acesso às chefias de Estado contra a tradição simbólica das monarquias parlamentares.',
      conceito: 'Princípio republicano versus continuidade simbólica monárquica.',
      concordarRepresenta:
        'Rejeita privilégios dinásticos financiados por dinheiro público em nome da igualdade cidadã.',
      discordarRepresenta:
        'Aponta que monarquias constitucionais (como Suécia, Noruega e Japão) figuram entre as democracias mais estáveis do mundo.',
      exemplosHistoricos:
        'Plebiscito brasileiro de 1993 e debates republicanos contemporâneos no Reino Unido e Espanha.',
    },
  },
  {
    id: 'q110',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Desestatização administrativa',
    statement:
      'Empresas públicas deficitárias que dependem continuamente de aportes do Tesouro devem ser fechadas ou vendidas, salvo monopólios naturais essenciais.',
    weights: { economia: 0.75, estado: -0.65 },
    entenda: {
      oQueSignifica:
        'Distingue empresas estratégicas sustentáveis ou serviços sociais de estatais deficitárias sem função social clara.',
      conceito: 'Eficiência fiscal e governança corporativa de estatais.',
      concordarRepresenta:
        'Impede que impostos de toda a população cubram prejuízos operacionais ou cabides de emprego.',
      discordarRepresenta:
        'Sustenta que certas estatais (como pesquisa agropecuária ou transporte regional) geram retorno social indireto não medido pelo lucro.',
      exemplosHistoricos:
        'Reformas de governança de estatais na OCDE.',
    },
  },
  {
    id: 'q111',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Imprensa pública independente',
    statement:
      'O país deve manter emissoras públicas de jornalismo e cultura com financiamento estável e conselho curador independente de governos e anunciantes privados.',
    weights: { estado: 0.5, democracia: 0.7, economia: -0.35 },
    entenda: {
      oQueSignifica:
        'Analisa o papel de sistemas públicos de radiodifusão (como BBC ou ARD) na pluralidade democrática.',
      conceito: 'Comunicação pública autônoma versus mídia puramente comercial ou estatal governista.',
      concordarRepresenta:
        'Garante jornalismo investigativo e programação cultural sem dependência de interesses comerciais ou palacianos.',
      discordarRepresenta:
        'Critica cobrança de taxas públicas para financiar mídia e teme viés ideológico na gestão.',
      exemplosHistoricos:
        'Modelo BBC no Reino Unido e radiodifusão pública alemã e japonesa (NHK).',
    },
  },
  {
    id: 'q112',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Democracia de partido único desenvolvimentista',
    statement:
      'Em sociedades em rápida modernização, a estabilidade sob um partido dominante com eleições restritas pode entregar melhores resultados sociais do que democracias polarizadas.',
    weights: { democracia: -0.95, estado: 0.65, liberdades: -0.65 },
    entenda: {
      oQueSignifica:
        'Testa diretamente o apelo de regimes de partido dominante ou autoritários orientados a resultados econômicos.',
      conceito: 'Legitimidade por desempenho (Performance Legitimacy) versus legitimidade procedimental democrática.',
      concordarRepresenta:
        'Cita o rápido crescimento da China e Singapura como evidência de eficiência acima da alternância eleitoral.',
      discordarRepresenta:
        'Lembra Amartya Sen: liberdades políticas têm valor intrínseco e protegem contra catástrofes acobertadas pela censura.',
      exemplosHistoricos:
        'Debate sobre "valores asiáticos" e trajetória de Coreia do Sul e Taiwan rumo à democracia.',
    },
  },
  {
    id: 'q113',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Pacto federativo e Cidades',
    statement:
      'As grandes regiões metropolitanas deveriam possuir governança conjunta supramunicipal com orçamento próprio para transporte, saneamento e meio ambiente.',
    weights: { estado: 0.45, democracia: 0.35 },
    entenda: {
      oQueSignifica:
        'Trata da coordenação institucional de problemas urbanos que ultrapassam fronteiras municipais.',
      conceito: 'Governança metropolitana cooperativa.',
      concordarRepresenta:
        'Evita duplicação de custos e abandono de periferias dormitório em metrópoles integradas.',
      discordarRepresenta:
        'Teme criação de uma camada burocrática adicional distante dos eleitores locais.',
      exemplosHistoricos:
        'Autoridade da Grande Londres e consórcios intermunicipais europeus.',
    },
  },
  {
    id: 'q114',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Ministério Público e Controle anticorrupção',
    statement:
      'Órgãos de investigação e combate à corrupção devem ter autonomia orçamentária e funcional, sujeitos contudo a rigoroso controle disciplinar externo para evitar abusos.',
    weights: { democracia: 0.75, liberdades: 0.45, seguranca: 0.1 },
    entenda: {
      oQueSignifica:
        'Equilibra independência investigativa contra corruptos poderosos com freios contra lawfare ou corporativismo.',
      conceito: 'Independência institucional com responsabilidade (checks and balances).',
      concordarRepresenta:
        'Evita tanto o engavetamento político quanto a atuação partidária sem freios de promotores e juízes.',
      discordarRepresenta:
        'Ou prefere subordinação direta ao Executivo/eleição de promotores, ou rejeita qualquer controle externo sobre promotores.',
      exemplosHistoricos:
        'Conselho Nacional do Ministério Público (Brasil) e debates italianos pós-Mãos Limpas.',
    },
  },
  {
    id: 'q115',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Cidadania digital e Governo eletrônico',
    statement:
      'Serviços públicos devem priorizar digitalização em software livre e código aberto, mantendo atendimento presencial acessível para idosos e excluídos digitais.',
    weights: { democracia: 0.55, estado: 0.35, sociedade: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia soberania tecnológica administrativa combinada à inclusão universal de acesso.',
      conceito: 'Governo digital inclusivo e software público aberto.',
      concordarRepresenta:
        'Reduz dependência de fornecedores proprietários e garante que ninguém perca direitos por falta de internet.',
      discordarRepresenta:
        'Prefere contratação rápida de soluções comerciais privadas de mercado ou digitalização exclusiva para cortar custos.',
      exemplosHistoricos:
        'Estônia digital e padrão europeu de software público aberto.',
    },
  },
  {
    id: 'q116',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Tribunal de Contas e Avaliação de políticas',
    statement:
      'Todas as políticas sociais e subsídios econômicos devem passar por auditorias independentes de impacto e expirar automaticamente se não comprovarem eficácia.',
    weights: { economia: 0.35, democracia: 0.55, estado: -0.1 },
    entenda: {
      oQueSignifica:
        'Propõe avaliação empírica contínua de políticas públicas ("cláusulas de pôr do sol" e evidências).',
      conceito: 'Políticas baseadas em evidências e cláusulas de revisão (sunset clauses).',
      concordarRepresenta:
        'Evita perpetuação de programas ineficazes e otimiza o dinheiro público.',
      discordarRepresenta:
        'Teme que revisões automáticas sirvam de pretexto para extinguir direitos sociais consolidados por falta de consenso político.',
      exemplosHistoricos:
        'Avaliações aleatórias em políticas de combate à pobreza (J-PAL / Esther Duflo).',
    },
  },
  {
    id: 'q117',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Paridade de gênero na política',
    statement:
      'A legislação eleitoral deve exigir paridade real de assentos ou listas alternadas entre homens e mulheres nos parlamentos.',
    weights: { sociedade: 0.85, democracia: 0.45, liberdades: -0.15 },
    entenda: {
      oQueSignifica:
        'Compara cotas de candidatura tradicionais com reserva efetiva de paridade parlamentar.',
      conceito: 'Paridade representativa de gênero.',
      concordarRepresenta:
        'Corrige séculos de sub-representação feminina mesmo quando mulheres são maioria do eleitorado.',
      discordarRepresenta:
        'Argumenta que eleitores devem escolher livremente representantes sem quotas de resultado por gênero.',
      exemplosHistoricos:
        'Leis de paridade na França, México, Bolívia e países nórdicos.',
    },
  },
  {
    id: 'q118',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Descentralização sindical e comunitária',
    statement:
      'Comunidades locais e associações de trabalhadores deveriam gerir diretamente serviços de bairro e empresas recuperadas, com mínimo comando estatal central.',
    weights: { economia: -0.65, estado: -0.65, democracia: 0.7, liberdades: 0.65 },
    entenda: {
      oQueSignifica:
        'Explora a tradição do socialismo libertário, municipalismo e autogestão horizontal.',
      conceito: 'Autogestão comunitária e municipalismo libertário (Murray Bookchin).',
      concordarRepresenta:
        'Combate tanto a burocracia estatal distante quanto a hierarquia corporativa privada.',
      discordarRepresenta:
        'Considera difícil coordenar grandes infraestruturas nacionais e saúde complexa sem um Estado central forte.',
      exemplosHistoricos:
        'Fábricas recuperadas na Argentina pós-2001 e experiências municipalistas.',
    },
  },
  {
    id: 'q119',
    modeTier: 3,
    area: 'Estado e Governança',
    subtopic: 'Censura prévia e Estado de direito',
    statement:
      'Em nenhuma hipótese o governo ou tribunais devem aplicar censura prévia a livros, peças, reportagens ou opiniões políticas antes de sua publicação.',
    weights: { liberdades: 0.95, democracia: 0.85 },
    entenda: {
      oQueSignifica:
        'Afirma a proibição clássica de censura prévia, admitindo eventual responsabilização judicial apenas posterior nos termos da lei.',
      conceito: 'Vedação constitucional à censura prévia.',
      concordarRepresenta:
        'Considera o debate público livre sem filtro prévio de censores a pedra angular da democracia.',
      discordarRepresenta:
        'Admite bloqueios prévios excepcionais em casos extremos de segurança nacional, sigilo judicial ou incitação iminente.',
      exemplosHistoricos:
        'Caso Pentagon Papers nos EUA (1971) e Constituição Brasileira de 1988.',
    },
  },

  // =========================================================================
  // QUESTÕES SOCIAIS - TIER 3 (24 PERGUNTAS: q120 - q143)
  // =========================================================================
  {
    id: 'q120',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Escolas privadas e Vouchers',
    statement:
      'O financiamento público à educação básica deve ocorrer prioritariamente por meio de vouchers para que famílias de baixa renda escolham escolas privadas se desejarem.',
    weights: { economia: 0.8, estado: -0.7, liberdades: 0.45, sociedade: -0.2 },
    entenda: {
      oQueSignifica:
        'Compara investimento direto na rede pública estatal com o modelo de cheques escolares (vouchers) proposto por Milton Friedman.',
      conceito: 'Sistema de vouchers educacionais versus fortalecimento da escola pública universal.',
      concordarRepresenta:
        'Estimula competição entre escolas e dá às famílias pobres poder de escolha semelhante ao dos mais ricos.',
      discordarRepresenta:
        'Adverte que vouchers drenam recursos da escola pública, ampliam segregação socioeconômica e não garantem melhor aprendizado (caso chileno).',
      exemplosHistoricos:
        'Sistema de vouchers na Suécia (1992) e Chile (1981) versus modelo público finlandês.',
    },
  },
  {
    id: 'q121',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Educação em tempo integral',
    statement:
      'A universalização da escola pública em tempo integral com alimentação, esportes e artes deve ser a prioridade orçamentária máxima da nação.',
    weights: { estado: 0.8, economia: -0.45, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Avalia o projeto trabalhista e republicano de escola integral como equalizador social desde a infância.',
      conceito: 'Educação integral pública (Anísio Teixeira / Darcy Ribeiro / modelos nórdicos).',
      concordarRepresenta:
        'Retira crianças de vulnerabilidades urbanas, garante nutrição e reduz drasticamente a desigualdade educacional.',
      discordarRepresenta:
        'Aponta alto custo de implantação e sugere focar primeiro em alfabetização básica eficiente em turno regular.',
      exemplosHistoricos:
        'Escolas-Parque de Anísio Teixeira na Bahia (1950) e CIEPs no Rio de Janeiro.',
    },
  },
  {
    id: 'q122',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Ensino superior gratuito',
    statement:
      'Universidades públicas devem cobrar mensalidades proporcionais à renda familiar dos estudantes de famílias ricas para financiar bolsas aos mais pobres.',
    weights: { economia: 0.55, estado: -0.35, sociedade: -0.25 },
    entenda: {
      oQueSignifica:
        'Questiona se o ensino superior público deve ser gratuito para todos (financiado por impostos gerais) ou cobrado por faixa de renda.',
      conceito: 'Gratuidade universal universitária versus cobrança progressiva / financiamento contingente à renda.',
      concordarRepresenta:
        'Evita que impostos pagos por pobres subsidiem o diploma de estudantes de famílias ricas vindos de colégios privados.',
      discordarRepresenta:
        'Sustenta que a gratuidade universal evita burocracia excludente e mantém a universidade pública como bem comum financiado por imposto progressivo.',
      exemplosHistoricos:
        'Gratuidade integral na Alemanha, Noruega e Brasil versus modelo australiano HECS e sistema inglês.',
    },
  },
  {
    id: 'q123',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Estrutura familiar e Política pública',
    statement:
      'O Estado deve oferecer incentivos fiscais específicos para estimular a natalidade e a estabilidade de famílias com filhos.',
    weights: { sociedade: -0.4, estado: 0.35, nacionalismo: 0.25 },
    entenda: {
      oQueSignifica:
        'Aborda respostas estatais ao rápido envelhecimento demográfico e queda da fecundidade.',
      conceito: 'Políticas pró-natalidade (combinando apoio financeiro, creches e deduções familiares).',
      concordarRepresenta:
        'Sustenta a base demográfica previdenciária e apoia pais que enfrentam altos custos de criação.',
      discordarRepresenta:
        'Prefere foco em creches universais e igualdade de gênero no trabalho, ou considera decisões reprodutivas estritamente privadas.',
      exemplosHistoricos:
        'Políticas familiares da França e países nórdicos versus incentivos conservadores na Hungria.',
    },
  },
  {
    id: 'q124',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Eutanásia e Morte assistida',
    statement:
      'Adultos lúcidos em situação de doença terminal irreversível ou sofrimento físico incurável devem ter direito legal à morte medicamente assistida.',
    weights: { liberdades: 0.85, sociedade: 0.75 },
    entenda: {
      oQueSignifica:
        'Contrapõe a autonomia individual sobre o próprio fim da vida a princípios éticos ou religiosos de inviolabilidade da vida.',
      conceito: 'Autonomia bioética (eutanásia / suicídio assistido) versus sacralidade irrestrita da vida.',
      concordarRepresenta:
        'Garante morte digna sem prolongamento artificial de sofrimento extremo.',
      discordarRepresenta:
        'Teme pressões sutis sobre idosos e pessoas com deficiência vulneráveis e defende foco exclusivo em cuidados paliativos.',
      exemplosHistoricos:
        'Legislações da Bélgica, Holanda, Canadá, Uruguai e Colômbia.',
    },
  },
  {
    id: 'q125',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Saúde pública vs Planos privados',
    statement:
      'Subsídios fiscais e deduções de imposto de renda para planos privados de saúde devem ser extintos e redirecionados integralmente ao sistema público universal.',
    weights: { economia: -0.7, estado: 0.8, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Avalia se o Estado deve subsidiar indiretamente o mercado de saúde privada ou concentrar todos os recursos no sistema público único.',
      conceito: 'Financiamento do sistema único universal versus sistema duplicado público-privado.',
      concordarRepresenta:
        'Impede drenagem de recursos fiscais para planos privados de camadas médias e altas.',
      discordarRepresenta:
        'Argumenta que usuários de planos privados já pagam impostos e desafogam as filas dos hospitais públicos.',
      exemplosHistoricos:
        'Sistema único canadense (Medicare) versus sistema misto brasileiro (SUS + saúde suplementar).',
    },
  },
  {
    id: 'q126',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Igualdade salarial de gênero',
    statement:
      'Empresas devem ser obrigadas por lei a publicar relatórios transparentes de remuneração por gênero e raça, sob multa em caso de disparidade injustificada na mesma função.',
    weights: { sociedade: 0.8, estado: 0.45, economia: -0.35 },
    entenda: {
      oQueSignifica:
        'Mede o apoio à fiscalização estatal ativa para assegurar isonomia salarial entre homens e mulheres e grupos raciais.',
      conceito: 'Transparência salarial obrigatória e igualdade de remuneração.',
      concordarRepresenta:
        'Combate discriminações salariais silenciosas com dados objetivos auditáveis.',
      discordarRepresenta:
        'Sustenta que diferenças salariais médias decorrem de escolhas de carreira e horas trabalhadas, gerando custos burocráticos e litígios.',
      exemplosHistoricos:
        'Diretiva de Transparência Salarial da UE (2023) e lei brasileira de igualdade salarial (2023).',
    },
  },
  {
    id: 'q127',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Isenção tributária a igrejas',
    statement:
      'Instituições religiosas devem manter imunidade tributária apenas sobre suas atividades assistenciais comprovadas, pagando impostos sobre patrimônio comercial e financeiro.',
    weights: { sociedade: 0.65, estado: 0.4, liberdades: 0.1 },
    entenda: {
      oQueSignifica:
        'Examina os limites da imunidade tributária de templos diante de atividades empresariais ou midiáticas ligadas a organizações religiosas.',
      conceito: 'Laicidade fiscal e isonomia concorrencial.',
      concordarRepresenta:
        'Protege o culto religioso puro e obras sociais enquanto impede concorrência desleal em negócios comerciais.',
      discordarRepresenta:
        'Defende imunidade ampla como garantia constitucional contra interferência ou retaliação fiscal estatal sobre igrejas.',
      exemplosHistoricos:
        'Debates constitucionais sobre imunidade de templos nas Américas e Europa.',
    },
  },
  {
    id: 'q128',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Direitos trabalhistas e Maternidade/Paternidade',
    statement:
      'Licenças parentais longas, remuneradas e compartilháveis igualmente entre mães e pais devem ser garantidas por lei para equilibrar trabalho doméstico e carreira.',
    weights: { sociedade: 0.75, estado: 0.65, economia: -0.4 },
    entenda: {
      oQueSignifica:
        'Aborda a divisão igualitária dos cuidados infantis como política pública de igualdade no trabalho.',
      conceito: 'Licença parental compartilhada (modelo nórdico).',
      concordarRepresenta:
        'Elimina a penalização exclusiva de mulheres nas contratações e fortalece vínculos familiares.',
      discordarRepresenta:
        'Teme sobrecarga de custos para pequenas empresas e prefere negociação flexível por família.',
      exemplosHistoricos:
        'Cotas de licença paterna ("pappamåneder") na Suécia e Noruega.',
    },
  },
  {
    id: 'q129',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Cultura e Financiamento público',
    statement:
      'Artes, cinema, museus e pesquisa histórica não comerciais dependem de fomento público contínuo e não devem ser deixados apenas ao critério de bilheteria e patrocínio privado.',
    weights: { estado: 0.6, sociedade: 0.6, economia: -0.4 },
    entenda: {
      oQueSignifica:
        'Discute a cultura como patrimônio cívico e identidade nacional versus bem de consumo comercial.',
      conceito: 'Política cultural pública versus mecenato exclusivamente privado.',
      concordarRepresenta:
        'Preserva diversidade regional, patrimônio histórico e produções artísticas independentes fora do circuito comercial de massa.',
      discordarRepresenta:
        'Sustenta que impostos essenciais devem priorizar saúde e segurança antes de subvencionar produções culturais.',
      exemplosHistoricos:
        'Política cultural francesa ("exceção cultural") versus modelo comercial norte-americano.',
    },
  },
  {
    id: 'q130',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Inclusão de pessoas com deficiência',
    statement:
      'O poder público deve obrigar empresas e espaços urbanos a cumprir padrões estritos de acessibilidade e cotas de contratação para pessoas com deficiência.',
    weights: { sociedade: 0.8, estado: 0.6, economia: -0.25 },
    entenda: {
      oQueSignifica:
        'Avalia o papel da lei e da infraestrutura pública na remoção de barreiras sociais à cidadania plena.',
      conceito: 'Modelo social da deficiência e desenho universal inclusivo.',
      concordarRepresenta:
        'Reconhece que a deficiência se torna exclusão quando o ambiente físico e laboral não é acessível.',
      discordarRepresenta:
        'Prefere incentivos fiscais voluntários para adaptações em vez de cotas obrigatórias e multas para pequenas empresas.',
      exemplosHistoricos:
        'Americans with Disabilities Act (ADA, 1990) e Lei Brasileira de Inclusão (2015).',
    },
  },
  {
    id: 'q131',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Previdência rural e Idosos',
    statement:
      'Trabalhadores rurais da agricultura familiar e idosos vulneráveis devem receber aposentadoria básica garantida pelo Estado mesmo sem histórico contínuo de contribuição formal.',
    weights: { economia: -0.65, estado: 0.75, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Compara previdência solidária não contributiva para idosos vulneráveis com regimes estritamente atuariais.',
      conceito: 'Piso previdenciário universal de proteção à velhice.',
      concordarRepresenta:
        'Previne miséria extrema na velhice em economias com alta informalidade histórica.',
      discordarRepresenta:
        'Argumenta que benefícios sem contribuição prévia geram déficits fiscais e desincentivam a formalização.',
      exemplosHistoricos:
        'Previdência Rural e BPC no Brasil (responsáveis por drástica redução da pobreza entre idosos).',
    },
  },
  {
    id: 'q132',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Educação sexual e Prevenção',
    statement:
      'Escolas públicas devem oferecer educação sexual científica adequada a cada faixa etária para prevenir gravidez precoce, abusos e infecções sexualmente transmissíveis.',
    weights: { sociedade: 0.8, liberdades: 0.45, estado: 0.35 },
    entenda: {
      oQueSignifica:
        'Contrapõe a abordagem pedagógica preventiva baseada em saúde pública à exclusividade moral da família nessa orientação.',
      conceito: 'Educação em saúde sexual baseada em evidências versus primazia moral familiar.',
      concordarRepresenta:
        'Dados da UNESCO e OMS indicam que informação científica ajuda crianças a identificar abusos e reduz gravidez na adolescência.',
      discordarRepresenta:
        'Defende que temas ligados à sexualidade e afetividade pertencem à esfera moral exclusiva dos pais.',
      exemplosHistoricos:
        'Currículos escolares nos Países Baixos e Suécia versus disputas legislativas locais nas Américas.',
    },
  },
  {
    id: 'q133',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Combate à pobreza extrema',
    statement:
      'A erradicação da fome e da falta de moradia digna deve ter prioridade legal absoluta sobre qualquer meta de redução de impostos ou superávit fiscal.',
    weights: { economia: -0.75, estado: 0.8, sociedade: 0.75 },
    entenda: {
      oQueSignifica:
        'Define a hierarquia ética e orçamentária entre garantia do mínimo existencial e equilíbrio fiscal imediato.',
      conceito: 'Mínimo existencial e direitos fundamentais sociais.',
      concordarRepresenta:
        'Coloca a sobrevivência humana digna como pré-condição moral do contrato social.',
      discordarRepresenta:
        'Sustenta que sem responsabilidade fiscal e estabilidade monetária a inflação corrói ainda mais os pobres no médio prazo.',
      exemplosHistoricos:
        'Pacto constitucional de direitos fundamentais sociais pós-1945 e pós-1988.',
    },
  },
  {
    id: 'q134',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Privacidade pessoal e Dados biométricos',
    statement:
      'O uso de reconhecimento facial em massa em espaços públicos por governos ou empresas privadas deve ser proibido para proteger o anonimato cidadão.',
    weights: { liberdades: 0.85, democracia: 0.6, seguranca: -0.6 },
    entenda: {
      oQueSignifica:
        'Enfrenta o avanço da vigilância biométrica automatizada diante do direito fundamental à privacidade e livre circulação.',
      conceito: 'Liberdades civis digitais versus vigilância biométrica preventiva.',
      concordarRepresenta:
        'Previne controle estatal autoritário, erros raciais algorítmicos e rastreamento de manifestantes políticos.',
      discordarRepresenta:
        'Vê o reconhecimento facial como ferramenta eficaz para localizar foragidos e prevenir crimes graves em grandes cidades.',
      exemplosHistoricos:
        'Restrições no AI Act da União Europeia (2024) versus sistemas amplos de vigilância urbana.',
    },
  },
  {
    id: 'q135',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Trabalho doméstico e Economia do cuidado',
    statement:
      'O trabalho não remunerado de cuidado com crianças, idosos e pessoas enfermas deve ser reconhecido na previdência e apoiado por redes públicas de creches e cuidadores.',
    weights: { sociedade: 0.85, estado: 0.7, economia: -0.5 },
    entenda: {
      oQueSignifica:
        'Incorpora a "economia do cuidado" (majoritariamente exercida por mulheres) à agenda de proteção social.',
      conceito: 'Economia do cuidado e infraestrutura social de proteção.',
      concordarRepresenta:
        'Permite participação feminina plena no mercado de trabalho e garante velhice digna a cuidadoras.',
      discordarRepresenta:
        'Considera que cuidados familiares devem ser organizados privadamente sem expandir encargos previdenciários públicos.',
      exemplosHistoricos:
        'Sistema Nacional Integrado de Cuidados do Uruguai (2015) e políticas nórdicas.',
    },
  },
  {
    id: 'q136',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Tradições regionais e Patrimônio',
    statement:
      'A preservação das línguas minoritárias, comunidades tradicionais e expressões culturais regionais exige proteção jurídica e financiamento específico.',
    weights: { sociedade: 0.45, democracia: 0.4, nacionalismo: -0.1 },
    entenda: {
      oQueSignifica:
        'Analisa o pluralismo cultural interno contra políticas de homogeneização cultural forçada.',
      conceito: 'Diversidade cultural e direitos linguísticos.',
      concordarRepresenta:
        'Protege povos indígenas, comunidades quilombolas e minorias regionais contra apagamento histórico.',
      discordarRepresenta:
        'Prioriza integração linguística e cultural nacional unificada para facilitar mobilidade e coesão.',
      exemplosHistoricos:
        'Carta Europeia das Línguas Regionais e reconhecimento multilíngue na Bolívia, Canadá e Índia.',
    },
  },
  {
    id: 'q137',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Cotas sociais vs Raciais',
    statement:
      'Políticas de acesso a universidades e serviço público devem adotar exclusivamente critérios de baixa renda familiar, sem reservas específicas por raça.',
    weights: { sociedade: -0.55, estado: 0.15, liberdades: 0.25 },
    entenda: {
      oQueSignifica:
        'Mede a preferência entre focalização puramente socioeconômica e reconhecimento explícito da desigualdade racial histórica.',
      conceito: 'Focalização por renda versus interseccionalidade socioeconômica e racial.',
      concordarRepresenta:
        'Acredita que a classe social já abrange os mais vulneráveis sem introduzir classificações raciais legais.',
      discordarRepresenta:
        'Mostra dados de que, mesmo dentro da mesma faixa de renda, barreiras raciais produzem menor representação em profissões de prestígio.',
      exemplosHistoricos:
        'Modelo híbrido brasileiro (50% escolas públicas combinando renda e recorte preto/pardo/indígena).',
    },
  },
  {
    id: 'q138',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Liberdade religiosa no espaço público',
    statement:
      'Símbolos religiosos pessoais (como véus, quipás ou crucifixos) devem ser livremente permitidos a estudantes e servidores civis, desde que não haja proselitismo oficial.',
    weights: { liberdades: 0.75, sociedade: 0.35, democracia: 0.4 },
    entenda: {
      oQueSignifica:
        'Distingue a laicidade inclusiva/americana da "laïcité" estrita francesa em repartições e escolas públicas.',
      conceito: 'Liberdade religiosa individual versus laicidade estrita de vestimenta pública.',
      concordarRepresenta:
        'Protege o direito de expressão religiosa individual de minorias contra proibições que podem afastá-las da escola pública.',
      discordarRepresenta:
        'Defende espaços públicos republicanos completamente neutros de sinais confessionais visíveis.',
      exemplosHistoricos:
        'Lei francesa de 2004 sobre símbolos ostensivos nas escolas versus modelo pluralista britânico e brasileiro.',
    },
  },
  {
    id: 'q139',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Jogos de azar e Apostas',
    statement:
      'Apostas esportivas e cassinos online devem ser fortemente restringidos ou proibidos devido ao impacto sobre o endividamento popular e a saúde mental.',
    weights: { estado: 0.55, economia: -0.45, sociedade: -0.1, liberdades: -0.45 },
    entenda: {
      oQueSignifica:
        'Compara paternalismo protetivo diante da ludopatia com liberdade de escolha adulta e arrecadação tributária.',
      conceito: 'Regulação restritiva por externalidades sociais versus autonomia do consumidor.',
      concordarRepresenta:
        'Protege rendas familiares populares contra vícios impulsionados por algoritmos e publicidade agressiva.',
      discordarRepresenta:
        'Sustenta que proibições empurram apostas para o mercado ilegal sem arrecadação nem controle etário.',
      exemplosHistoricos:
        'Debates atuais sobre apostas esportivas no Brasil, Reino Unido e Austrália.',
    },
  },
  {
    id: 'q140',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Alimentos ultraprocessados e Saúde pública',
    statement:
      'O governo deve aplicar impostos elevados sobre bebidas açucaradas e alimentos ultraprocessados para financiar a saúde pública e desestimular doenças crônicas.',
    weights: { estado: 0.65, economia: -0.4, liberdades: -0.35, sociedade: 0.35 },
    entenda: {
      oQueSignifica:
        'Avalia impostos corretivos (impostos pigouvianos de saúde) sobre produtos com altos custos ao sistema de saúde.',
      conceito: 'Tributação corretiva em saúde pública.',
      concordarRepresenta:
        'Reduz custos hospitalares futuros com diabetes e obesidade, como ocorreu com a taxação do tabaco.',
      discordarRepresenta:
        'Critica a interferência estatal nos hábitos alimentares individuais e o efeito regressivo sobre preços de alimentos baratos.',
      exemplosHistoricos:
        'Impostos sobre bebidas açucaradas no México (2014) e Reino Unido (2018).',
    },
  },
  {
    id: 'q141',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Inclusão digital universal',
    statement:
      'O acesso à internet banda larga de alta velocidade deve ser tratado como serviço público essencial garantido gratuitamente ou a tarifa social às famílias de baixa renda.',
    weights: { estado: 0.7, economia: -0.5, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Atualiza o conceito de serviço público essencial (como água e luz) para a era da educação e trabalho digitais.',
      conceito: 'Direito humano à conectividade e inclusão digital.',
      concordarRepresenta:
        'Garante que estudantes de baixa renda não fiquem excluídos da economia do conhecimento.',
      discordarRepresenta:
        'Prefere estimular concorrência privada de operadoras e leilões de espectro para baratear planos naturalmente.',
      exemplosHistoricos:
        'Declaração da ONU sobre acesso à internet e programas de conectividade escolar na OCDE.',
    },
  },
  {
    id: 'q142',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Comunidades e Caridade privada vs Estado',
    statement:
      'Associações comunitárias, igrejas e filantropia privada devem assumir papel maior do que burocracias estatais na assistência social direta.',
    weights: { economia: 0.5, estado: -0.75, sociedade: -0.55 },
    entenda: {
      oQueSignifica:
        'Testa o princípio conservador e distributista da sociedade civil intermediária frente ao Estado de bem-estar burocrático.',
      conceito: 'Subsidiariedade comunitária versus seguridade pública universal.',
      concordarRepresenta:
        'Valoriza vínculos humanos próximos, solidariedade voluntária e menor impessoalidade burocrática.',
      discordarRepresenta:
        'Adverte que a filantropia é instável em crises, insuficiente em escala nacional e transforma direitos em favores.',
      exemplosHistoricos:
        'Debates entre caridade vitoriana e Estado social moderno no século XX.',
    },
  },
  {
    id: 'q143',
    modeTier: 3,
    area: 'Questões Sociais',
    subtopic: 'Herança e Mobilidade social',
    statement:
      'Altas heranças devem sofrer forte tributação progressiva para evitar a formação de dinastias econômicas hereditárias que comprometam a igualdade republicana.',
    weights: { economia: -0.75, estado: 0.65, sociedade: 0.6, democracia: 0.35 },
    entenda: {
      oQueSignifica:
        'Retoma um ponto onde até pensadores liberais clássicos (como John Stuart Mill) e social-democratas frequentemente convergem contra aristocracias hereditárias.',
      conceito: 'Tributação de grandes heranças e igualdade de oportunidades.',
      concordarRepresenta:
        'Combate a concentração intergeracional de riqueza não merecida pelo próprio esforço do herdeiro.',
      discordarRepresenta:
        'Argumenta que pais têm direito natural de transmitir poupança já tributada aos filhos e preservar empresas familiares.',
      exemplosHistoricos:
        'Imposto sobre heranças de 40%–55% no Japão, Coreia do Sul, França e Reino Unido.',
    },
  },

  // =========================================================================
  // SEGURANÇA E DEFESA - TIER 3 (PRIMEIRAS 12 DE 24: q144 - q155)
  // =========================================================================
  {
    id: 'q144',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Maioridade penal',
    statement:
      'A idade de responsabilidade penal plena deve ser reduzida para jovens infratores envolvidos em crimes violentos graves.',
    weights: { seguranca: 0.85, sociedade: -0.45, liberdades: -0.35 },
    entenda: {
      oQueSignifica:
        'Compara medidas socioeducativas juvenis com responsabilização no sistema penal adulto em crimes hediondos.',
      conceito: 'Responsabilidade penal juvenil versus direito penal adulto.',
      concordarRepresenta:
        'Busca resposta punitiva proporcional à gravidade do delito e desestímulo ao recrutamento de menores por facções.',
      discordarRepresenta:
        'Cita evidências de que presídios comuns aumentam a reincidência juvenil e defende reforma do sistema socioeducativo.',
      exemplosHistoricos:
        'Variação global da maioridade penal (16 a 18 anos na maioria dos países europeus e latino-americanos).',
    },
  },
  {
    id: 'q145',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Câmeras corporais policiais',
    statement:
      'O uso contínuo de câmeras corporais em uniformes de todos os policiais em operação ostensiva deve ser obrigatório, protegendo cidadãos e bons agentes.',
    weights: { democracia: 0.75, liberdades: 0.55, seguranca: -0.4 },
    entenda: {
      oQueSignifica:
        'Avalia tecnologia de transparência e prova pericial na atividade policial.',
      conceito: 'Accountability policial por registro audiovisual.',
      concordarRepresenta:
        'Reduz letalidade policial, abuso de autoridade e falsas acusações contra policiais honestos.',
      discordarRepresenta:
        'Receia que a exposição constante intimide decisões rápidas em confrontos de alto risco.',
      exemplosHistoricos:
        'Experiências em cidades dos EUA, Reino Unido e Polícia Militar de São Paulo (2021–2023).',
    },
  },
  {
    id: 'q146',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Serviço militar obrigatório',
    statement:
      'O serviço militar obrigatório deve ser extinto e substituído integralmente por forças profissionais voluntárias altamente especializadas.',
    weights: { liberdades: 0.7, seguranca: -0.3, nacionalismo: -0.25 },
    entenda: {
      oQueSignifica:
        'Contrapõe a conscrição cidadã universal à profissionalização voluntária das Forças Armadas.',
      conceito: 'Conscrição republicana versus exército profissional voluntário.',
      concordarRepresenta:
        'Rejeita trabalho compulsório de jovens e privilegia especialização técnica militar.',
      discordarRepresenta:
        'Vê o serviço militar obrigatório como escola de integração cívica e dissuasão de reserva em caso de guerra.',
      exemplosHistoricos:
        'Profissionalização na maioria da Europa Ocidental pós-Guerra Fria versus manutenção na Suíça, Finlândia e Coreia do Sul.',
    },
  },
  {
    id: 'q147',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Privatização de presídios',
    statement:
      'A construção e administração de unidades prisionais deve ser delegada à iniciativa privada sob metas de desempenho e redução de custos.',
    weights: { economia: 0.75, estado: -0.65, seguranca: 0.3 },
    entenda: {
      oQueSignifica:
        'Discute se o monopólio estatal da execução penal deve ser mantido integralmente ou terceirizado parcialmente.',
      conceito: 'Gestão prisional estatal versus cogestão/privatização penitenciária.',
      concordarRepresenta:
        'Aposta na agilidade privada para ampliar vagas rapidamente e melhorar manutenção estrutural.',
      discordarRepresenta:
        'Alerta para incentivos perversos quando empresas lucram com maior número de presos e precarizam agentes.',
      exemplosHistoricos:
        'Experiências de prisões privadas nos EUA e Reino Unido versus revogação parcial em alguns estados.',
    },
  },
  {
    id: 'q148',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Audiências de custódia e Prisões provisórias',
    statement:
      'Prisões preventivas sem condenação definitiva devem ser exceção estrita, priorizando penas alternativas e monitoramento para delitos sem violência.',
    weights: { seguranca: -0.8, liberdades: 0.65, democracia: 0.5 },
    entenda: {
      oQueSignifica:
        'Enfrenta o problema do excesso de presos provisórios frente ao princípio constitucional da presunção de inocência.',
      conceito: 'Presunção de inocência e desencarceramento de delitos não violentos.',
      concordarRepresenta:
        'Evita superlotação carcerária e recrutamento de pequenos infratores por facções criminosas.',
      discordarRepresenta:
        'Critica a rápida soltura de reincidentes em furtos e roubos, argumentando sensação de impunidade.',
      exemplosHistoricos:
        'Implantação das audiências de custódia sob pactos interamericanos de direitos humanos.',
    },
  },
  {
    id: 'q149',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Fronteiras amazônicas e Marítimas',
    statement:
      'A proteção de fronteiras estratégicas, águas jurisdicionais e florestas contra crime transnacional e biopirataria exige presença militar e tecnológica permanente.',
    weights: { nacionalismo: 0.85, seguranca: 0.6, estado: 0.45 },
    entenda: {
      oQueSignifica:
        'Trata da segurança territorial, ambiental e dissuasória em regiões de fronteira extensa e recursos estratégicos.',
      conceito: 'Soberania territorial e vigilância estratégica de fronteiras.',
      concordarRepresenta:
        'Integra defesa nacional, combate a garimpo ilegal, narcotráfico e proteção de biodiversidade.',
      discordarRepresenta:
        'Receia militarização excessiva de regiões onde vivem comunidades indígenas e prefere órgãos civis ambientais.',
      exemplosHistoricos:
        'SIVAM, Sistema de Monitoramento de Fronteiras (SISFRON) e conceito de Amazônia Azul.',
    },
  },
  {
    id: 'q150',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Base industrial de defesa e Tecnologia dual',
    statement:
      'Investimentos estatais na indústria nacional de defesa (radares, satélites, aviação, propulsão) geram transbordamento tecnológico valioso para a indústria civil.',
    weights: { nacionalismo: 0.75, estado: 0.65, seguranca: 0.5, economia: -0.2 },
    entenda: {
      oQueSignifica:
        'Analisa o papel histórico de projetos de defesa como motores de P&D de tecnologia dual (civil e militar).',
      conceito: 'Tecnologia dual e política industrial de defesa.',
      concordarRepresenta:
        'Aponta exemplos de aviação comercial, internet e materiais avançados nascidos de projetos estratégicos.',
      discordarRepresenta:
        'Considera o gasto militar um uso ineficiente comparado a investir diretamente em saúde, educação e pesquisa civil.',
      exemplosHistoricos:
        'Embraer/ITA no Brasil, DARPA nos EUA e indústria aeroespacial francesa.',
    },
  },
  {
    id: 'q151',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Criptografia e Segurança nacional',
    statement:
      'Plataformas de mensagens criptografadas devem ser obrigadas a manter chaves de acesso para ordens judiciais, mesmo que isso enfraqueça a segurança digital geral.',
    weights: { seguranca: 0.65, liberdades: -0.8, estado: 0.45 },
    entenda: {
      oQueSignifica:
        'Coloca em confronto investigações criminais legítimas e integridade matemática da criptografia ponta a ponta.',
      conceito: 'Acesso excepcional ("backdoors") versus criptografia inviolável.',
      concordarRepresenta:
        'Ajuda autoridades a investigar terrorismo, exploração infantil e crime organizado.',
      discordarRepresenta:
        'Demonstra tecnicamente que qualquer porta dos fundos criada para governos pode ser explorada por hackers e regimes autoritários.',
      exemplosHistoricos:
        'Disputas judiciais entre FBI/tribunais e empresas de tecnologia sobre desbloqueio de criptografia.',
    },
  },
  {
    id: 'q152',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Justiça restaurativa',
    statement:
      'Crimes de menor potencial ofensivo devem priorizar mediação e reparação direta à vítima (justiça restaurativa) em vez de processo penal tradicional.',
    weights: { seguranca: -0.7, sociedade: 0.5, democracia: 0.45 },
    entenda: {
      oQueSignifica:
        'Apresenta alternativa contemporânea ao modelo exclusivamente punitivo-retributivo.',
      conceito: 'Justiça restaurativa versus justiça retributiva.',
      concordarRepresenta:
        'Foca na reparação do dano real sofrido pela vítima e na responsabilização consciente do infrator.',
      discordarRepresenta:
        'Considera que penas formais claras são mais eficazes para manter autoridade da lei.',
      exemplosHistoricos:
        'Programas restaurativos na Nova Zelândia, Canadá e juizados especiais brasileiros.',
    },
  },
  {
    id: 'q153',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Uso das Forças Armadas na segurança urbana',
    statement:
      'Operações militares de Garantia da Lei e da Ordem em favelas e bairros urbanos são inadequadas e devem ser substituídas por inteligência policial civil e urbanização.',
    weights: { seguranca: -0.8, democracia: 0.65, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Avalia o emprego das Forças Armadas em policiamento urbano interno.',
      conceito: 'Separação entre defesa externa militar e segurança pública civil.',
      concordarRepresenta:
        'Lembra que militares são treinados para combate de guerra contra inimigos, não para policiamento cidadão em áreas densas.',
      discordarRepresenta:
        'Acredita que, diante do colapso policial local frente a facções armadas, o apoio militar emergencial é necessário.',
      exemplosHistoricos:
        'Balanços históricos de operações GLO no Rio de Janeiro e México.',
    },
  },
  {
    id: 'q154',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Segurança no trânsito e Espaço urbano',
    statement:
      'Cidades devem reduzir limites de velocidade, ampliar fiscalização eletrônica e substituir faixas de automóveis por ciclovias e corredores de ônibus.',
    weights: { estado: 0.5, sociedade: 0.6, liberdades: -0.25, economia: -0.25 },
    entenda: {
      oQueSignifica:
        'Contrapõe políticas de segurança viária e mobilidade sustentável à prioridade individual do automóvel particular.',
      conceito: 'Visão Zero de mortes no trânsito e urbanismo sustentável.',
      concordarRepresenta:
        'Salva milhares de vidas por ano e reduz poluição e tempo perdido no tráfego.',
      discordarRepresenta:
        'Critica o que vê como "indústria da multa" e restrição excessiva ao deslocamento individual.',
      exemplosHistoricos:
        'Visão Zero na Suécia (1997) e transformação urbana de Paris e Bogotá.',
    },
  },
  {
    id: 'q155',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Pacto nuclear e Não proliferação',
    statement:
      'Um país soberano jamais deve abdicar definitivamente do domínio completo do ciclo tecnológico nuclear para fins pacíficos, energéticos e médicos.',
    weights: { nacionalismo: 0.75, seguranca: 0.45, internacional: -0.1 },
    entenda: {
      oQueSignifica:
        'Distingue renúncia a armas nucleares (mantida pelo TNP e Constituição) de autonomia científica no enriquecimento de urânio para energia e medicina.',
      conceito: 'Soberania tecnológica nuclear pacífica versus dependência de fornecedores externos.',
      concordarRepresenta:
        'Protege autonomia energética, produção de radioisótopos médicos e propulsão naval estratégica.',
      discordarRepresenta:
        'Teme riscos de proliferação e custos bilionários comparados a outras fontes renováveis.',
      exemplosHistoricos:
        'Posição constitucional do Brasil (uso exclusivamente pacífico com domínio tecnológico) e Acordo ABACC com a Argentina.',
    },
  },
];
