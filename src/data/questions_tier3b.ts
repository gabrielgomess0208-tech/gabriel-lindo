import { QuizQuestion } from '../shared/types.ts';

export const QUESTIONS_TIER_3B: QuizQuestion[] = [
  // =========================================================================
  // SEGURANÇA E DEFESA - TIER 3 (RESTANTES 12: q156 - q167)
  // =========================================================================
  {
    id: 'q156',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Trabalho prisional e Remição',
    statement:
      'Presos condenados devem ter acesso amplo a trabalho remunerado e ensino profissionalizante dentro das unidades, com remição da pena e poupança para saída.',
    weights: { seguranca: -0.65, sociedade: 0.6, economia: -0.15 },
    entenda: {
      oQueSignifica:
        'Compara políticas de reinserção laboral no sistema penitenciário com regimes exclusivamente isolacionistas.',
      conceito: 'Trabalho prisional digno e redução da reincidência.',
      concordarRepresenta:
        'Reduz drasticamente a chance de retorno ao crime após o cumprimento da pena.',
      discordarRepresenta:
        'Ou teme competição desleal de mão de obra prisional barata com trabalhadores livres, ou exige trabalho obrigatório punitivo sem benefícios.',
      exemplosHistoricos:
        'Método APAC no Brasil e oficinas prisionais na Escandinávia e Alemanha.',
    },
  },
  {
    id: 'q157',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Legítima defesa e Proporcionalidade',
    statement:
      'A legislação deve ampliar a presunção de legítima defesa para moradores e comerciantes que reajam a invasões armadas em suas propriedades.',
    weights: { seguranca: 0.85, liberdades: 0.25, economia: 0.35 },
    entenda: {
      oQueSignifica:
        'Avalia o alcance jurídico da autodefesa privada diante da invasão domiciliar.',
      conceito: 'Doutrina do Castelo ("Castle Doctrine") versus proporcionalidade estrita da resposta.',
      concordarRepresenta:
        'Protege cidadãos comuns de serem processados criminalmente ao defenderem suas famílias em segundos de perigo.',
      discordarRepresenta:
        'Adverte que ampliar presunções abre margem para execuções desproporcionais e violência privada impune.',
      exemplosHistoricos:
        'Legislações estaduais norte-americanas versus códigos penais continentais europeus.',
    },
  },
  {
    id: 'q158',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Combate à lavagem de dinheiro',
    statement:
      'O sigilo bancário e fiscal de suspeitos de lavagem de dinheiro ligada a facções e corrupção deve ser quebrado com maior celeridade mediante controle judicial.',
    weights: { seguranca: 0.3, democracia: 0.45, estado: 0.4, liberdades: -0.25 },
    entenda: {
      oQueSignifica:
        'Foca no estrangulamento econômico do crime organizado ("seguir o dinheiro") em contraste com o sigilo financeiro absoluto.',
      conceito: 'Inteligência financeira (COAF / GAFI) versus privacidade bancária estrita.',
      concordarRepresenta:
        'Atinge o núcleo empresarial das organizações criminosas com menos violência urbana letal.',
      discordarRepresenta:
        'Preocupa-se com vazamentos ilegais de dados sigilosos e perseguições políticas.',
      exemplosHistoricos:
        'Recomendações do GAFI/FATF e operações financeiras antimáfia.',
    },
  },
  {
    id: 'q159',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Violência doméstica e Medidas protetivas',
    statement:
      'O Estado deve expandir delegacias especializadas, tornozeleiras para agressores e abrigos públicos para vítimas de violência doméstica, com financiamento vinculado.',
    weights: { sociedade: 0.8, estado: 0.65, seguranca: 0.2 },
    entenda: {
      oQueSignifica:
        'Examina a responsabilidade estatal na proteção de mulheres e crianças contra violência intrafamiliar.',
      conceito: 'Políticas públicas de proteção contra violência de gênero.',
      concordarRepresenta:
        'Trata a violência doméstica como violação grave de direitos humanos que exige resposta institucional especializada.',
      discordarRepresenta:
        'Ou questiona leis especializadas por suposta assimetria processual, ou prefere ações gerais de segurança.',
      exemplosHistoricos:
        'Lei Maria da Penha no Brasil (2006) e Convenção de Istambul na Europa.',
    },
  },
  {
    id: 'q160',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Guarda Municipal e Policiamento de proximidade',
    statement:
      'Municípios devem assumir papel ativo em prevenção urbana (iluminação, mediação de conflitos e guardas comunitárias), sem substituir investigações estaduais.',
    weights: { democracia: 0.5, seguranca: -0.25, estado: 0.25 },
    entenda: {
      oQueSignifica:
        'Analisa a descentralização preventiva da segurança urbana nas cidades.',
      conceito: 'Segurança cidadã municipal e urbanismo preventivo (CPTED).',
      concordarRepresenta:
        'Integra prefeituras, iluminação, escolas e assistência social na prevenção primária do delito.',
      discordarRepresenta:
        'Teme criação de dezenas de polícias locais armadas sem treinamento ou controle uniforme.',
      exemplosHistoricos:
        'Reduções de homicídios em Diadema (SP), Medellín e Bogotá com urbanismo social.',
    },
  },
  {
    id: 'q161',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Alianças militares estrangeiras',
    statement:
      'Permitir bases militares permanentes de potências estrangeiras no território nacional compromete inaceitavelmente a soberania e arrasta o país para guerras alheias.',
    weights: { nacionalismo: 0.9, internacional: -0.2, seguranca: 0.1 },
    entenda: {
      oQueSignifica:
        'Avalia a autonomia militar territorial diante de pactos defensivos com grandes potências.',
      conceito: 'Soberania territorial e não estacionamento de tropas estrangeiras.',
      concordarRepresenta:
        'Preserva neutralidade diplomática e controle exclusivo sobre território e espaço aéreo.',
      discordarRepresenta:
        'Considera que bases aliadas funcionam como guarda-chuva dissuasório barato contra vizinhos agressivos.',
      exemplosHistoricos:
        'Debates sobre bases dos EUA no Japão/Alemanha/América Latina e neutralidade armada sueca histórica.',
    },
  },
  {
    id: 'q162',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Justiça militar',
    statement:
      'Crimes dolosos cometidos por policiais militares ou membros das Forças Armadas contra civis devem ser julgados exclusivamente pela Justiça comum civil, nunca por tribunais militares.',
    weights: { democracia: 0.85, liberdades: 0.6, seguranca: -0.65 },
    entenda: {
      oQueSignifica:
        'Discute o escopo da jurisdição militar em democracias constitucionais.',
      conceito: 'Jurisdição civil para delitos contra civis versus foro castrense.',
      concordarRepresenta:
        'Previne corporativismo judicial e atende jurisprudência da Corte Interamericana de Direitos Humanos.',
      discordarRepresenta:
        'Defende que juízes militares compreendem melhor as regras técnicas de engajamento em combate.',
      exemplosHistoricos:
        'Reformas constitucionais na Argentina, Chile e debates sobre a Justiça Militar no Brasil.',
    },
  },
  {
    id: 'q163',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Proteção de denunciantes (Whistleblowers)',
    statement:
      'Servidores públicos e funcionários privados que denunciem crimes ambientais, corrupção ou espionagem ilegal devem ter proteção legal absoluta contra demissão e retaliação penal.',
    weights: { democracia: 0.85, liberdades: 0.85, seguranca: -0.3 },
    entenda: {
      oQueSignifica:
        'Mede a proteção institucional ao cidadão que expõe irregularidades graves dentro de governos ou corporações.',
      conceito: 'Proteção legal a denunciantes de interesse público (Whistleblower Protection).',
      concordarRepresenta:
        'Fortalece a integridade pública e desencoraja abusos secretos estatais ou corporativos.',
      discordarRepresenta:
        'Teme vazamento irresponsável de segredos operacionais sensíveis que protegem agentes em campo.',
      exemplosHistoricos:
        'Diretiva da UE sobre proteção de denunciantes (2019) e casos Snowden/Manning.',
    },
  },
  {
    id: 'q164',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Progressão de regime penal',
    statement:
      'Condenados por corrupção grave, homicídio qualificado e liderança de facções criminosas devem cumprir fração muito maior da pena em regime fechado antes de qualquer benefício.',
    weights: { seguranca: 0.9, sociedade: -0.35, liberdades: -0.25 },
    entenda: {
      oQueSignifica:
        'Trata dos critérios legais para progressão do regime fechado ao semiaberto e liberdade condicional.',
      conceito: 'Rigor na execução penal versus individualização progressiva da pena.',
      concordarRepresenta:
        'Reforça a credibilidade do sistema de justiça diante de crimes graves e de colarinho branco.',
      discordarRepresenta:
        'Alerta que restringir progressões agrava ainda mais o colapso de vagas nos presídios e retira incentivos ao bom comportamento.',
      exemplosHistoricos:
        'Reformas de pacotes anticrime e leis de execução penal comparadas.',
    },
  },
  {
    id: 'q165',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Defesa civil e Mudanças climáticas',
    statement:
      'Parte permanente do orçamento de defesa deve ser alocada em engenharia civil e defesa climática preventiva contra enchentes, secas e incêndios florestais.',
    weights: { estado: 0.7, seguranca: -0.15, sociedade: 0.5 },
    entenda: {
      oQueSignifica:
        'Amplia o conceito contemporâneo de segurança nacional para incluir resiliência climática e proteção civil.',
      conceito: 'Segurança humana e adaptação climática estratégica.',
      concordarRepresenta:
        'Reconhece desastres climáticos como a maior ameaça física contemporânea às populações e infraestruturas.',
      discordarRepresenta:
        'Argumenta que recursos militares devem focar exclusivamente em prontidão bélica, deixando defesa civil a órgãos civis.',
      exemplosHistoricos:
        'Planos de adaptação climática das forças armadas europeias e norte-americanas.',
    },
  },
  {
    id: 'q166',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Terrorismo e Estado de direito',
    statement:
      'Mesmo sob ameaça de terrorismo ou guerra híbrida, suspeitos jamais devem ser mantidos presos sem acusação formal nem submetidos a tribunais de exceção.',
    weights: { democracia: 0.9, liberdades: 0.9, seguranca: -0.7 },
    entenda: {
      oQueSignifica:
        'Testa o compromisso absoluto com o habeas corpus e o devido processo legal diante de ameaças graves.',
      conceito: 'Devido processo legal absoluto versus direito penal do inimigo.',
      concordarRepresenta:
        'Impede que a resposta ao terror destrua as próprias garantias que distinguem uma democracia de ditaduras.',
      discordarRepresenta:
        'Admite detenções preventivas estendidas e procedimentos especiais em ameaças extremas.',
      exemplosHistoricos:
        'Debates jurídicos sobre Guantánamo e leis antiterrorismo pós-2001.',
    },
  },
  {
    id: 'q167',
    modeTier: 3,
    area: 'Segurança e Defesa',
    subtopic: 'Segurança espacial e Satélites',
    statement:
      'O domínio autônomo de lançadores espaciais e constelações próprias de satélites de observação é indispensável para a segurança e agricultura de grandes países.',
    weights: { nacionalismo: 0.8, estado: 0.65, seguranca: 0.55 },
    entenda: {
      oQueSignifica:
        'Avalia a importância geopolítica e econômica do programa espacial nacional.',
      conceito: 'Soberania aeroespacial e monitoramento territorial autônomo.',
      concordarRepresenta:
        'Garante monitoramento independente de desmatamento, clima, fronteiras e comunicações seguras.',
      discordarRepresenta:
        'Prefere contratar serviços espaciais comerciais privados internacionais por serem mais baratos no curto prazo.',
      exemplosHistoricos:
        'ISRO na Índia, Agência Espacial Europeia e programa espacial brasileiro (CBERS com a China).',
    },
  },

  // =========================================================================
  // RELAÇÕES INTERNACIONAIS - TIER 3 (24 PERGUNTAS: q168 - q191)
  // =========================================================================
  {
    id: 'q168',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'FMI e Condicionalidades',
    statement:
      'Empréstimos do FMI e do Banco Mundial não devem impor privatizações ou cortes de gastos sociais como condição para socorrer países em crise.',
    weights: { economia: -0.7, nacionalismo: 0.75, internacional: -0.15 },
    entenda: {
      oQueSignifica:
        'Questiona as chamadas "condicionalidades estruturais" das instituições financeiras de Bretton Woods.',
      conceito: 'Soberania fiscal versus condicionalidades macroeconômicas do Consenso de Washington.',
      concordarRepresenta:
        'Critica receitas padronizadas que frequentemente agravam recessões e pobreza em países devedores.',
      discordarRepresenta:
        'Argumenta que credores internacionais têm direito legítimo de exigir reformas para assegurar que o país consiga pagar o empréstimo.',
      exemplosHistoricos:
        'Crise asiática de 1997, Argentina nos anos 2000 e críticas de Joseph Stiglitz.',
    },
  },
  {
    id: 'q169',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Moeda única regional',
    statement:
      'Países de um mesmo bloco regional deveriam evitar adotar uma moeda única supranacional enquanto não possuírem orçamento fiscal comum e níveis semelhantes de produtividade.',
    weights: { nacionalismo: 0.65, economia: -0.1, internacional: -0.25 },
    entenda: {
      oQueSignifica:
        'Aborda a teoria das Áreas Monetárias Ótimas (Robert Mundell) e as lições da Zona do Euro.',
      conceito: 'Áreas Monetárias Ótimas e soberania monetária.',
      concordarRepresenta:
        'Aponta que perder câmbio e juros próprios sem união fiscal agrava crises regionais (como na Grécia em 2010–2015).',
      discordarRepresenta:
        'Destaca que moedas comuns eliminam custos cambiais, reduzem inflação e aprofundam a integração política.',
      exemplosHistoricos:
        'Crise da dívida soberana na Zona do Euro (2010–2012) e debates sobre moeda comum no Mercosul.',
    },
  },
  {
    id: 'q170',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Ajuda humanitária e Financiamento externo',
    statement:
      'Países ricos têm obrigação ética e histórica de destinar pelo menos 0,7% de seu PIB à cooperação internacional e ao financiamento climático de países vulneráveis.',
    weights: { internacional: 0.85, sociedade: 0.65, nacionalismo: -0.55 },
    entenda: {
      oQueSignifica:
        'Testa a adesão à meta histórica da ONU de Assistência Oficial ao Desenvolvimento (AOD) e reparação climática.',
      conceito: 'Justiça distributiva global e cooperação Norte-Sul.',
      concordarRepresenta:
        'Reconhece dívida ecológica/histórica colonial e interdependência global contra pandemias e crises migratórias.',
      discordarRepresenta:
        'Defende prioridade aos contribuintes domésticos e argumenta que ajuda externa estatal muitas vezes alimenta governos corruptos.',
      exemplosHistoricos:
        'Meta da ONU de 0,7% (cumprida por Noruega, Suécia e Dinamarca) e Fundo de Perdas e Danos climáticos.',
    },
  },
  {
    id: 'q171',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Tribunal Penal Internacional',
    statement:
      'Todos os países, inclusive grandes potências militares, devem submeter-se à jurisdição vinculante do Tribunal Penal Internacional por crimes de guerra e contra a humanidade.',
    weights: { internacional: 0.9, democracia: 0.8, nacionalismo: -0.5, seguranca: -0.35 },
    entenda: {
      oQueSignifica:
        'Avalia o universalismo da justiça penal internacional diante da recusa de grandes potências (EUA, Rússia, China) em ratificar o Estatuto de Roma.',
      conceito: 'Jurisdição penal universal versus imunidade soberana estatal.',
      concordarRepresenta:
        'Combate a impunidade de chefes de Estado e generais aplicando a mesma régua jurídica a países fortes e fracos.',
      discordarRepresenta:
        'Teme politização seletiva do tribunal e rejeita submeter militares nacionais a juízes estrangeiros.',
      exemplosHistoricos:
        'Estatuto de Roma (1998) e criação do TPI em Haia.',
    },
  },
  {
    id: 'q172',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Cláusulas ambientais e trabalhistas em tratados',
    statement:
      'Acordos internacionais de livre comércio devem incluir sanções comerciais rigorosas contra países que desmatem florestas ou explorem trabalho análogo à escravidão.',
    weights: { sociedade: 0.65, estado: 0.45, internacional: 0.55, economia: -0.3 },
    entenda: {
      oQueSignifica:
        'Discute a vinculação entre comércio internacional, padrões socioambientais e riscos de "protecionismo verde".',
      conceito: 'Comércio justo condicionado versus livre comércio sem barreiras não tarifárias.',
      concordarRepresenta:
        'Impede que países compitam rebaixando salários e destruindo o meio ambiente (dumping social e ambiental).',
      discordarRepresenta:
        'Alerta que países ricos frequentemente usam exigências ambientais unilaterais para barrar produtos competitivos do Sul Global.',
      exemplosHistoricos:
        'Mecanismo de Ajuste de Carbono na Fronteira (CBAM) da UE e impasses no acordo UE-Mercosul.',
    },
  },
  {
    id: 'q173',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Paraísos fiscais',
    statement:
      'Governos devem impor um imposto mínimo global corporativo rigoroso e bloquear transferências financeiras para paraísos fiscais.',
    weights: { economia: -0.6, estado: 0.7, internacional: 0.75 },
    entenda: {
      oQueSignifica:
        'Trata do combate internacional à erosão da base tributária por multinacionais e bilionários.',
      conceito: 'Tributação mínima global (Pilar 2 da OCDE) e combate a offshores.',
      concordarRepresenta:
        'Impede a "corrida para o fundo" fiscal em que países cortam impostos de empresas enquanto tributam trabalhadores locais.',
      discordarRepresenta:
        'Defende a "competição tributária" entre países como freio saudável ao tamanho dos Estados.',
      exemplosHistoricos:
        'Acordo global de alíquota mínima de 15% articulado no G20/OCDE (2021).',
    },
  },
  {
    id: 'q174',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Diplomacia de direitos humanos vs Pragmatismo comercial',
    statement:
      'Um país deve manter relações comerciais e diplomáticas normais com governos autoritários estrangeiros, evitando moralismo em sua política externa.',
    weights: { internacional: -0.55, economia: 0.45, democracia: -0.35, nacionalismo: 0.4 },
    entenda: {
      oQueSignifica:
        'Compara o realismo diplomático pragmático ("não há amigos permanentes, há interesses permanentes") com a política externa orientada a valores democráticos.',
      conceito: 'Realismo pragmático versus idealismo normativo em política externa.',
      concordarRepresenta:
        'Prioriza exportações, energia e estabilidade diplomática sem interferir no regime interno alheio.',
      discordarRepresenta:
        'Sustenta que democracias devem usar peso diplomático para defender direitos humanos e não legitimar ditaduras.',
      exemplosHistoricos:
        'Realpolitik clássica versus política externa centrada em direitos humanos.',
    },
  },
  {
    id: 'q175',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Transferência de tecnologia e Cadeias globais',
    statement:
      'Empresas multinacionais que recebem acesso ao mercado interno ou recursos minerais críticos devem ser obrigadas a transferir tecnologia e formar fornecedores locais.',
    weights: { nacionalismo: 0.85, estado: 0.7, economia: -0.35 },
    entenda: {
      oQueSignifica:
        'Analisa exigências de conteúdo local e joint ventures tecnológicas como estratégia de desenvolvimento industrial.',
      conceito: 'Requisitos de desempenho e transferência tecnológica (estratégia asiática).',
      concordarRepresenta:
        'Evita que o país apenas exporte lítio, ferro ou petróleo bruto e importe bens acabados caros.',
      discordarRepresenta:
        'Considera que exigências de conteúdo local violam regras da OMC e afugentam investimentos estrangeiros.',
      exemplosHistoricos:
        'Joint ventures automotivas na China e política industrial de níquel na Indonésia.',
    },
  },
  {
    id: 'q176',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Infraestrutura de integração sul-americana',
    statement:
      'O investimento conjunto em ferrovias bioceânicas, interconexão elétrica e portos integrados na América do Sul é mais estratégico do que acordos isolados com potências distantes.',
    weights: { internacional: 0.7, nacionalismo: 0.35, estado: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia o projeto geopolítico de integração física regional sul-americana.',
      conceito: 'Integração física regional e regionalismo desenvolvimentista.',
      concordarRepresenta:
        'Reduz custos logísticos regionais, cria cadeias industriais conjuntas e fortalece a estabilidade pacífica sul-americana.',
      discordarRepresenta:
        'Argumenta que economias vizinhas exportam bens semelhantes e que os principais mercados reais estão na Ásia, EUA e Europa.',
      exemplosHistoricos:
        'Rotas de Integração Sul-Americana e Bacia do Prata (Itaipu).',
    },
  },
  {
    id: 'q177',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Sanções econômicas unilaterais',
    statement:
      'Bloqueios econômicos e sanções financeiras unilaterais impostos por uma potência fora do aval do Conselho de Segurança da ONU são ilegítimos.',
    weights: { internacional: 0.6, nacionalismo: 0.5, seguranca: -0.4 },
    entenda: {
      oQueSignifica:
        'Distingue sanções multilaterais aprovadas pela ONU de medidas coercitivas unilaterais extraterritoriais.',
      conceito: 'Direito internacional público versus extraterritorialidade de sanções.',
      concordarRepresenta:
        'Observa que embargos unilaterais punem populações civis comuns e violam a soberania de terceiros países que comerciam.',
      discordarRepresenta:
        'Defende que países democráticos têm o direito de restringir seu próprio sistema financeiro contra regimes agressores.',
      exemplosHistoricos:
        'Embargo dos EUA a Cuba (condenado anualmente na Assembleia Geral da ONU) e sanções financeiras contemporâneas.',
    },
  },
  {
    id: 'q178',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Desarmamento nuclear global',
    statement:
      'Potências nucleares deveriam assumir cronograma verificável de desarmamento progressivo, e não apenas proibir novos países de desenvolverem armas atômicas.',
    weights: { internacional: 0.8, seguranca: -0.75, democracia: 0.45 },
    entenda: {
      oQueSignifica:
        'Reflete a crítica histórica ao desequilíbrio do Tratado de Não Proliferação Nuclear (TNP) entre Estados armados e não armados.',
      conceito: 'Desarmamento nuclear universal versus dissuasão assimétrica.',
      concordarRepresenta:
        'Alinha-se ao Tratado sobre a Proibição de Armas Nucleares da ONU (2017) para eliminar o risco existencial.',
      discordarRepresenta:
        'Considera irrealista qualquer desarmamento unilateral em um mundo geopoliticamente competitivo.',
      exemplosHistoricos:
        'Tratado sobre Proibição de Armas Nucleares (TPNW, 2017) e Conferências do TNP.',
    },
  },
  {
    id: 'q179',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Governança global da Inteligência Artificial',
    statement:
      'A regulação de sistemas avançados de inteligência artificial e armas autônomas deve ser definida por tratado internacional vinculante nos moldes da Agência de Energia Atômica.',
    weights: { internacional: 0.85, estado: 0.45, seguranca: -0.35, democracia: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia a necessidade de cooperação supranacional para mitigar riscos globais de IA e robótica militar.',
      conceito: 'Governança tecnológica global vinculante.',
      concordarRepresenta:
        'Previne corridas armamentistas autônomas e concentrações monopolistas transnacionais sem controle público.',
      discordarRepresenta:
        'Teme que tratados internacionais travem a inovação e beneficiem apenas países que desrespeitem acordos.',
      exemplosHistoricos:
        'Convenção de Genebra sobre armas autônomas letais e propostas da ONU para IA.',
    },
  },
  {
    id: 'q180',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Dívida externa e Auditoria soberana',
    statement:
      'Países endividados devem ter direito a mecanismos internacionais de reestruturação ordenada de dívida soberana que protejam gastos mínimos de saúde e educação.',
    weights: { economia: -0.55, internacional: 0.5, nacionalismo: 0.45 },
    entenda: {
      oQueSignifica:
        'Propõe uma espécie de "lei de falências" soberana internacional para evitar litígios abusivos de fundos especulativos.',
      conceito: 'Reestruturação justa de dívidas soberanas versus contratos financeiros rígidos.',
      concordarRepresenta:
        'Evita que populações inteiras paguem por décadas juros insustentáveis contraídos por governos anteriores ou crises externas.',
      discordarRepresenta:
        'Adverte que facilitar reestruturações eleva imediatamente o prêmio de risco e os juros cobrados de países emergentes.',
      exemplosHistoricos:
        'Litígios de "fundos abutres" contra a Argentina e iniciativas da ONU sobre dívida soberana.',
    },
  },
  {
    id: 'q181',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Soberania alimentar vs Exportação agrícola',
    statement:
      'A política agrícola nacional deve priorizar estoques públicos reguladores e abastecimento interno barato antes de maximizar exportações primárias.',
    weights: { nacionalismo: 0.7, estado: 0.65, economia: -0.45 },
    entenda: {
      oQueSignifica:
        'Contrapõe o conceito de soberania alimentar interna à livre exportação agroindustrial guiada por preços internacionais em dólar.',
      conceito: 'Soberania alimentar e estoques reguladores versus livre mercado agrícola.',
      concordarRepresenta:
        'Protege a população contra inflação de alimentos provocada por choques cambiais e guerras externas.',
      discordarRepresenta:
        'Sustenta que restrições à exportação desincentivam produtores rurais e reduzem divisas essenciais ao país.',
      exemplosHistoricos:
        'Políticas de estoques públicos (CONAB histórica no Brasil, FCI na Índia).',
    },
  },
  {
    id: 'q182',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Parlamento supranacional',
    statement:
      'Em longo prazo, a humanidade deveria evoluir para instituições parlamentares globais eleitas democraticamente para lidar com clima, fiscalidade e paz.',
    weights: { internacional: 0.95, nacionalismo: -0.9, democracia: 0.7 },
    entenda: {
      oQueSignifica:
        'Mede o grau de adesão ao cosmopolitismo democrático institucional em contraposição ao sistema westfaliano de Estados-nação.',
      conceito: 'Democracia cosmopolita (David Held / Daniele Archibugi).',
      concordarRepresenta:
        'Vê os problemas do século XXI como planetários, exigindo cidadania e representação democrática além das fronteiras.',
      discordarRepresenta:
        'Considera a democracia só viável em comunidades políticas nacionais com identidade cívica e controle próximo.',
      exemplosHistoricos:
        'Parlamento Europeu como experiência pioneira supranacional e propostas de Assembleia Parlamentar da ONU.',
    },
  },
  {
    id: 'q183',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Intervenção humanitária (R2P)',
    statement:
      'Quando um governo comete genocídio contra sua própria população, a comunidade internacional via ONU tem o dever de intervir, inclusive militarmente.',
    weights: { internacional: 0.65, democracia: 0.4, seguranca: 0.25, nacionalismo: -0.55 },
    entenda: {
      oQueSignifica:
        'Explora a doutrina da ONU "Responsabilidade de Proteger" (R2P) diante do princípio clássico de não ingerência.',
      conceito: 'Responsabilidade de Proteger (R2P) versus soberania absoluta de não intervenção.',
      concordarRepresenta:
        'Impede que ditadores usem a soberania estatal como escudo para massacrar civis.',
      discordarRepresenta:
        'Teme que potências manipulem pretextos humanitários para derrubar governos rivais e desestabilizar regiões (como na Líbia em 2011).',
      exemplosHistoricos:
        'Cúpula da ONU (2005), intervenção na Líbia (2011) e proposta brasileira de "Responsabilidade ao Proteger" (RwP).',
    },
  },
  {
    id: 'q184',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Diplomatas e Política externa de Estado',
    statement:
      'A política externa deve ser conduzida por corpo diplomático de carreira baseado em interesses nacionais permanentes, sem guinadas ideológicas abruptas a cada eleição.',
    weights: { democracia: 0.35, nacionalismo: 0.45, internacional: 0.35 },
    entenda: {
      oQueSignifica:
        'Avalia a continuidade diplomática ("política de Estado") frente a rupturas partidárias ("política de governo").',
      conceito: 'Tradição diplomática institucional versus diplomacia ideológica.',
      concordarRepresenta:
        'Garante previsibilidade, confiança internacional e respeito a tratados de longo prazo.',
      discordarRepresenta:
        'Alega que eleitores têm o direito democrático de alterar prioridades internacionais quando mudam de governo.',
      exemplosHistoricos:
        'Tradição do Itamaraty (Barão do Rio Branco) e do Foreign Office britânico.',
    },
  },
  {
    id: 'q185',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Mobilidade acadêmica e Científica',
    statement:
      'Bolsas públicas de intercâmbio científico e livre circulação de pesquisadores entre universidades estrangeiras são vitais mesmo sob tensões geopolíticas.',
    weights: { internacional: 0.8, liberdades: 0.55, sociedade: 0.4 },
    entenda: {
      oQueSignifica:
        'Defende a ciência aberta internacional contra o fechamento nacionalista de laboratórios e universidades.',
      conceito: 'Diplomacia científica e universalismo acadêmico.',
      concordarRepresenta:
        'Acelera descobertas médicas, climáticas e tecnológicas mediante colaboração global.',
      discordarRepresenta:
        'Preocupa-se com fuga de cérebros e vazamento de pesquisas estratégicas para potências rivais.',
      exemplosHistoricos:
        'CERN europeu e colaborações científicas internacionais durante e após a Guerra Fria.',
    },
  },
  {
    id: 'q186',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Proteção a trabalhadores migrantes',
    statement:
      'Trabalhadores imigrantes, inclusive em situação irregular, devem ter acesso garantido a atendimento de saúde de emergência, escola para filhos e proteção contra trabalho escravo.',
    weights: { sociedade: 0.85, internacional: 0.65, liberdades: 0.45, nacionalismo: -0.45 },
    entenda: {
      oQueSignifica:
        'Distingue controle administrativo de fronteiras da garantia de direitos humanos básicos a pessoas já residentes.',
      conceito: 'Universalidade dos direitos humanos versus restrição cidadã nacional.',
      concordarRepresenta:
        'Evita crises sanitárias, trabalho análogo à escravidão e marginalização de crianças inocentes.',
      discordarRepresenta:
        'Alega que conceder benefícios sociais a irregulares estimula novos fluxos migratórios ilegais.',
      exemplosHistoricos:
        'Estatuto do Estrangeiro / Lei de Migração brasileira (2017) e tratados da OIT.',
    },
  },
  {
    id: 'q187',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Autonomia militar europeia / regional',
    statement:
      'Regiões como a Europa e a América do Sul devem desenvolver capacidades próprias de defesa e segurança cooperativa sem depender do guarda-chuva militar norte-americano.',
    weights: { nacionalismo: 0.55, internacional: 0.35, seguranca: 0.3 },
    entenda: {
      oQueSignifica:
        'Explora a "autonomia estratégica" regional em defesa frente à dependência exclusiva da OTAN ou dos EUA.',
      conceito: 'Autonomia estratégica regional em defesa.',
      concordarRepresenta:
        'Reduz vulnerabilidade a mudanças políticas em Washington e fortalece a integração regional.',
      discordarRepresenta:
        'Considera dispendioso duplicar estruturas militares e valoriza a aliança transatlântica/hemisférica existente.',
      exemplosHistoricos:
        'Debates de De Gaulle a Macron sobre defesa europeia e Conselho de Defesa Sul-Americano.',
    },
  },
  {
    id: 'q188',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Cultura global vs Identidade local',
    statement:
      'Cotas de tela para cinema e música nacionais em cinemas e plataformas de streaming são legítimas para impedir o monopólio cultural de grandes estúdios globais.',
    weights: { nacionalismo: 0.7, estado: 0.55, economia: -0.35 },
    entenda: {
      oQueSignifica:
        'Aborda a diversidade audiovisual ("exceção cultural") diante do domínio comercial global de Hollywood e grandes plataformas.',
      conceito: 'Política cultural de cota de tela e diversidade audiovisual.',
      concordarRepresenta:
        'Permite que a produção artística local sobreviva e alcance seu próprio público.',
      discordarRepresenta:
        'Defende que o público deve escolher livremente o que assistir sem reservas de mercado obrigatórias.',
      exemplosHistoricos:
        'Cotas de conteúdo na França, Coreia do Sul (impulsionando seu cinema) e Brasil.',
    },
  },
  {
    id: 'q189',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Arbitragem internacional de investimentos',
    statement:
      'Investidores estrangeiros não devem ter direito a processar Estados soberanos em tribunais arbitrais privados internacionais por mudanças em leis ambientais ou trabalhistas.',
    weights: { nacionalismo: 0.75, democracia: 0.5, economia: -0.5 },
    entenda: {
      oQueSignifica:
        'Critica os mecanismos ISDS (Investor-State Dispute Settlement) presentes em tratados bilaterais de investimento.',
      conceito: 'Soberania regulatória estatal versus arbitragem privada investidor-Estado (ISDS).',
      concordarRepresenta:
        'Impede que corporações cobrem indenizações bilionárias quando democracias aprovam leis ecológicas ou de saúde pública.',
      discordarRepresenta:
        'Argumenta que tribunais neutros protegem investidores de expropriações arbitrárias em países de judiciário instável.',
      exemplosHistoricos:
        'Posição tradicional brasileira (não ratificação de acordos ISDS clássicos) e saída da Europa da Carta da Energia.',
    },
  },
  {
    id: 'q190',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Combate internacional à pobreza e Tecnologia aberta',
    statement:
      'Tecnologias climáticas limpas e vacinas financiadas com verbas públicas devem ser compartilhadas em domínio aberto com países de baixa renda.',
    weights: { internacional: 0.85, economia: -0.6, sociedade: 0.7 },
    entenda: {
      oQueSignifica:
        'Propõe tratar bens essenciais à sobrevivência climática e sanitária como bens públicos globais.',
      conceito: 'Bens públicos globais e ciência aberta.',
      concordarRepresenta:
        'Acelera a resposta global a pandemias e emissões de carbono onde os países pobres não têm recursos para licenças caras.',
      discordarRepresenta:
        'Teme reduzir incentivos comerciais à inovação rápida por laboratórios privados.',
      exemplosHistoricos:
        'Iniciativas COVAX e debates na OMS sobre tratado pandêmico.',
    },
  },
  {
    id: 'q191',
    modeTier: 3,
    area: 'Relações Internacionais',
    subtopic: 'Diplomacia parlamentar e Cidadã',
    statement:
      'Tratados comerciais internacionais de grande impacto social devem obrigatoriamente passar por consultas públicas amplas e ratificação parlamentar transparente antes de vigorarem.',
    weights: { democracia: 0.85, liberdades: 0.4 },
    entenda: {
      oQueSignifica:
        'Contesta negociações comerciais secretas conduzidas apenas por executivos tecnocráticos.',
      conceito: 'Controle democrático da política comercial externa.',
      concordarRepresenta:
        'Assegura que sindicatos, agricultores, indústrias e ambientalistas avaliem impactos antes da assinatura definitiva.',
      discordarRepresenta:
        'Observa que sigilo tático nas negociações evita paralisia por lobbies antes de alcançar um texto equilibrado.',
      exemplosHistoricos:
        'Debates sobre transparência no TTIP e no acordo Mercosul–União Europeia.',
    },
  },

  // =========================================================================
  // MEIO AMBIENTE - TIER 3 (24 PERGUNTAS: q192 - q215)
  // =========================================================================
  {
    id: 'q192',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Desmatamento zero',
    statement:
      'O desmatamento ilegal e até mesmo o desmatamento legal remanescente em biomas críticos devem ser zerados com rigoroso rastreamento de cadeias produtivas.',
    weights: { estado: 0.65, sociedade: 0.7, economia: -0.45, internacional: 0.55 },
    entenda: {
      oQueSignifica:
        'Avalia a adoção de meta de desmatamento líquido zero e bloqueio de crédito/mercado a propriedades irregulares.',
      conceito: 'Conservação de biomas críticos e rastreabilidade ambiental.',
      concordarRepresenta:
        'Protege regime de chuvas para a própria agricultura, biodiversidade e compromissos climáticos.',
      discordarRepresenta:
        'Defende o direito de proprietários rurais suprimirem vegetação dentro dos limites previstos em lei mediante compensação.',
      exemplosHistoricos:
        'Moratória da Soja na Amazônia (2006) e sistemas de monitoramento por satélite do INPE.',
    },
  },
  {
    id: 'q193',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Transporte ferroviário vs Rodoviário',
    statement:
      'O Estado deve investir maciçamente em malhas ferroviárias e hidroviárias públicas de carga e passageiros para substituir a dependência excessiva de caminhões e carros.',
    weights: { estado: 0.75, economia: -0.35, sociedade: 0.45 },
    entenda: {
      oQueSignifica:
        'Discute a reorientação da matriz logística nacional em direção a modais mais eficientes e menos poluentes.',
      conceito: 'Transição modal logística e infraestrutura sustentável.',
      concordarRepresenta:
        'Reduz drasticamente custo do frete, emissões de diesel e acidentes rodoviários.',
      discordarRepresenta:
        'Prefere que eventuais ferrovias dependam exclusivamente de investimento privado sob demanda mineral/agrícola.',
      exemplosHistoricos:
        'Redes ferroviárias europeia, japonesa e chinesa versus rodoviarismo brasileiro pós-1950.',
    },
  },
  {
    id: 'q194',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Direitos da natureza',
    statement:
      'Rios, florestas e ecossistemas ameaçados devem receber reconhecimento jurídico próprio ("direitos da natureza") para serem defendidos em juízo independentemente de dano econômico humano.',
    weights: { sociedade: 0.8, economia: -0.65, estado: 0.4, liberdades: 0.1 },
    entenda: {
      oQueSignifica:
        'Apresenta inovação jurídica contemporânea do constitucionalismo andino e ecológico.',
      conceito: 'Ecocentrismo jurídico (Direitos da Natureza) versus antropocentrismo proprietário.',
      concordarRepresenta:
        'Permite proteção preventiva efetiva de bacias hidrográficas vitais antes de desastres irreversíveis.',
      discordarRepresenta:
        'Considera juridicamente inseguro atribuir personalidade de direito a entes não humanos, preferindo regulação ambiental clássica.',
      exemplosHistoricos:
        'Constituição do Equador (2008), Rio Whanganui na Nova Zelândia e Rio Atrato na Colômbia.',
    },
  },
  {
    id: 'q195',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Mineração em áreas sensíveis',
    statement:
      'A extração de minerais críticos para a transição energética (lítio, cobre, terras raras) só deve ser autorizada após consentimento livre, prévio e informado das comunidades locais.',
    weights: { democracia: 0.7, sociedade: 0.75, economia: -0.4 },
    entenda: {
      oQueSignifica:
        'Aborda a tensão da "mineração verde": precisamos de lítio e cobre para baterias, mas a extração impacta comunidades locais e águas.',
      conceito: 'Convenção 169 da OIT e justiça socioambiental na transição energética.',
      concordarRepresenta:
        'Impede que a transição ecológica reproduza sacrifício ambiental sobre comunidades rurais e indígenas.',
      discordarRepresenta:
        'Receia que vetos locais paralisem projetos estratégicos nacionais essenciais à descarbonização.',
      exemplosHistoricos:
        'Conflitos sobre extração de lítio no Triângulo Andino e na Europa.',
    },
  },
  {
    id: 'q196',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Obsolescência programada e Direito ao reparo',
    statement:
      'Fabricantes de eletrônicos e eletrodomésticos devem ser obrigados por lei a garantir peças de reposição, manuais de conserto e baterias substituíveis por vários anos.',
    weights: { estado: 0.55, economia: -0.45, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Avalia o "Direito ao Reparo" contra práticas industriais de obsolescência programada.',
      conceito: 'Economia circular e Direito ao Reparo (Right to Repair).',
      concordarRepresenta:
        'Reduz lixo eletrônico, economiza dinheiro dos consumidores e fomenta oficinas técnicas locais.',
      discordarRepresenta:
        'Argumenta que exigências rígidas de design travam miniaturização, impermeabilização e inovação industrial.',
      exemplosHistoricos:
        'Diretiva europeia do Direito ao Reparo (2024) e leis estaduais nos EUA.',
    },
  },
  {
    id: 'q197',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Subsídios a combustíveis e Preço do diesel',
    statement:
      'Manter preços artificiais baixos para gasolina e diesel via subsídios fiscais é ambientalmente regressivo e deve ser substituído por investimento em transporte coletivo.',
    weights: { sociedade: 0.45, estado: 0.2, economia: 0.25, internacional: 0.35 },
    entenda: {
      oQueSignifica:
        'Examina o paradoxo de subsídios fósseis que ajudam caminhoneiros e classe média motorizada no curto prazo, mas atrasam a transição limpa.',
      conceito: 'Racionalização de subsídios fósseis e equidade no transporte.',
      concordarRepresenta:
        'Redireciona bilhões de reais gastos em combustível fóssil para metrôs, ônibus elétricos e auxílio focalizado.',
      discordarRepresenta:
        'Alerta que encarecer combustíveis eleva o frete de alimentos e penaliza trabalhadores que não têm transporte público alternativo.',
      exemplosHistoricos:
        'Debates sobre política de preços de combustíveis no Brasil, França e países produtores.',
    },
  },
  {
    id: 'q198',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Licenciamento ambiental ágil vs Cautela',
    statement:
      'Projetos de infraestrutura e energia renovável devem contar com prazos máximos rígidos e ritos simplificados de licenciamento ambiental para não travar obras públicas.',
    weights: { economia: 0.45, estado: 0.15, sociedade: -0.35 },
    entenda: {
      oQueSignifica:
        'Busca equilíbrio entre celeridade de obras essenciais (incluindo linhas de transmissão verde) e rigor técnico de estudos de impacto.',
      conceito: 'Celeridade administrativa versus princípio da precaução ambiental.',
      concordarRepresenta:
        'Evita atrasos de décadas por judicialização excessiva, inclusive em parques eólicos e ferrovias.',
      discordarRepresenta:
        'Adverte que licenciamento apressado ou autodeclaratório abre porta a tragédias como rompimentos de barragens.',
      exemplosHistoricos:
        'Desastres de Mariana (2015) e Brumadinho (2019) versus entraves em linhas de transmissão na Europa/EUA.',
    },
  },
  {
    id: 'q199',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Plásticos descartáveis',
    statement:
      'Embalagens plásticas descartáveis de uso único devem ser progressivamente banidas por lei e substituídas por sistemas obrigatórios de retorno e reutilização.',
    weights: { estado: 0.55, economia: -0.4, sociedade: 0.6 },
    entenda: {
      oQueSignifica:
        'Analisa a proibição regulatória de plásticos descartáveis diante de impactos oceânicos e microplásticos.',
      conceito: 'Responsabilidade estendida do produtor e redução de resíduos na fonte.',
      concordarRepresenta:
        'Ataca o problema antes da reciclagem, já que apenas uma fração mínima do plástico mundial é efetivamente reciclada.',
      discordarRepresenta:
        'Argumenta que embalagens plásticas garantem higiene alimentar barata e que o foco deve ser coleta e reciclagem química.',
      exemplosHistoricos:
        'Diretiva europeia sobre plásticos de uso único (2019) e negociações do Tratado Global de Plásticos da ONU.',
    },
  },
  {
    id: 'q200',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Reforma urbana e Áreas verdes',
    statement:
      'Planos diretores urbanos devem limitar a verticalização especulativa em áreas sem transporte e destinar terrenos vazios ociosos a parques públicos e moradia social.',
    weights: { estado: 0.65, economia: -0.55, sociedade: 0.6 },
    entenda: {
      oQueSignifica:
        'Confronta o urbanismo planejado com adaptação climática e a desregulação imobiliária para ampliar oferta privada.',
      conceito: 'Planejamento urbano resiliente versus livre desenvolvimento imobiliário.',
      concordarRepresenta:
        'Combate ilhas de calor, enchentes urbanas e expulsão de trabalhadores para periferias distantes.',
      discordarRepresenta:
        'Sustenta que limites rígidos de altura e uso do solo restringem a oferta de imóveis e elevam os aluguéis.',
      exemplosHistoricos:
        'Planos diretores participativos versus movimentos pró-adensamento desregulado.',
    },
  },
  {
    id: 'q201',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Pecuária e Uso do solo',
    statement:
      'Políticas públicas devem incentivar a redução do consumo de carnes de alta pegada de carbono e converter pastagens degradadas em florestas ou lavouras sustentáveis.',
    weights: { sociedade: 0.65, estado: 0.4, economia: -0.3 },
    entenda: {
      oQueSignifica:
        'Aborda emissões de metano e uso extensivo de terras na pecuária.',
      conceito: 'Intensificação sustentável e transição alimentar.',
      concordarRepresenta:
        'Libera milhões de hectares para recuperação florestal e produção vegetal direta com menor emissão climática.',
      discordarRepresenta:
        'Defende a tradição alimentar, o peso econômico da pecuária exportadora e técnicas de integração lavoura-pecuária-floresta.',
      exemplosHistoricos:
        'Planos europeus de redução de rebanhos e programas brasileiros de recuperação de pastagens degradadas.',
    },
  },
  {
    id: 'q202',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Pagamento por Serviços Ambientais (PSA)',
    statement:
      'Proprietários rurais e comunidades que conservam florestas e nascentes devem receber remuneração financeira pública ou internacional pelos serviços ecossistêmicos prestados.',
    weights: { economia: 0.2, estado: 0.45, internacional: 0.5, sociedade: 0.35 },
    entenda: {
      oQueSignifica:
        'Propõe transformar a "floresta em pé" em ativo economicamente remunerado para quem a protege.',
      conceito: 'Pagamento por Serviços Ambientais (PSA).',
      concordarRepresenta:
        'Alinha interesses econômicos locais à conservação ambiental de forma cooperativa, não apenas punitiva.',
      discordarRepresenta:
        'Receia que transformar natureza em ativo financeiro abra espaço para especulação ou pague por obrigações que já são legais.',
      exemplosHistoricos:
        'Programa PSA pioneiro da Costa Rica (desde 1997) e Lei de PSA no Brasil (2021).',
    },
  },
  {
    id: 'q203',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Exploração petrolífera em novas fronteiras',
    statement:
      'A abertura de novos blocos de exploração de petróleo deve ser interrompida imediatamente, concentrando esforços públicos em energias renováveis.',
    weights: { sociedade: 0.75, economia: -0.5, internacional: 0.55, nacionalismo: -0.45 },
    entenda: {
      oQueSignifica:
        'Reflete o dilema estratégico entre aproveitar receitas petrolíferas para financiar o Estado e cumprir alertas da Agência Internacional de Energia sobre novos campos fósseis.',
      conceito: 'Abandono gradual de combustíveis fósseis ("keep it in the ground") versus renda petrolífera de transição.',
      concordarRepresenta:
        'Alinha-se às metas do Acordo de Paris de limitar o aquecimento global a 1,5°C.',
      discordarRepresenta:
        'Argumenta que enquanto o mundo consumir petróleo, países em desenvolvimento não devem abrir mão de receitas que financiam infraestrutura e a própria transição.',
      exemplosHistoricos:
        'Posição da Colômbia (suspensão de novos contratos) versus expansão na Noruega, Guiana e debates na Margem Equatorial brasileira.',
    },
  },
  {
    id: 'q204',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Soberania da Amazônia e Fundos climáticos',
    statement:
      'Recursos internacionais para conservação florestal devem ser aceitos apenas sob gestão soberana exclusiva das instituições do país detentor da floresta.',
    weights: { nacionalismo: 0.85, estado: 0.5, internacional: -0.15 },
    entenda: {
      oQueSignifica:
        'Equilibra cooperação financeira climática internacional com proteção à soberania nacional sobre biomas estratégicos.',
      conceito: 'Soberania ambiental e cooperação financeira não condicionada.',
      concordarRepresenta:
        'Rejeita qualquer forma de tutela internacional ou internacionalização decisória de territórios nacionais.',
      discordarRepresenta:
        'Admite governança compartilhada e auditoria internacional rigorosa para dar confiança a doadores estrangeiros.',
      exemplosHistoricos:
        'Modelo de gestão nacional do Fundo Amazônia (BNDES) com transparência de resultados.',
    },
  },
  {
    id: 'q205',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Educação ambiental obrigatória',
    statement:
      'A crise climática e a educação ecológica crítica devem integrar de forma transversal todas as disciplinas da educação básica.',
    weights: { sociedade: 0.7, estado: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia a centralidade curricular da alfabetização ecológica desde a infância.',
      conceito: 'Educação ambiental crítica e formação cidadã.',
      concordarRepresenta:
        'Prepara novas gerações para compreender limites biofísicos, consumo responsável e políticas climáticas.',
      discordarRepresenta:
        'Prefere foco curricular estrito em matemática, leitura e ciências básicas sem abordagens socioambientais politizadas.',
      exemplosHistoricos:
        'Obrigatoriedade curricular na Itália (2020) e Política Nacional de Educação Ambiental.',
    },
  },
  {
    id: 'q206',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Economia do mar e Pesca artesanal',
    statement:
      'Zonas costeiras devem proteger reservas exclusivas para pescadores artesanais e restringir a pesca industrial de arrasto predatório.',
    weights: { sociedade: 0.65, economia: -0.45, estado: 0.5 },
    entenda: {
      oQueSignifica:
        'Compara a conservação marinha e subsistência tradicional costeira com a liberdade da pesca industrial em larga escala.',
      conceito: 'Gestão sustentável pesqueira e proteção de comunidades costeiras.',
      concordarRepresenta:
        'Evita colapso de estoques pesqueiros e protege renda de milhões de pescadores artesanais.',
      discordarRepresenta:
        'Defende a escala produtiva da pesca industrial para abastecer grandes mercados urbanos a menor preço.',
      exemplosHistoricos:
        'Reservas extrativistas marinhas e Tratado do Alto-Mar da ONU (2023).',
    },
  },
  {
    id: 'q207',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Indústria química e Agrotóxicos',
    statement:
      'Substâncias agrotóxicas já banidas na União Europeia por riscos à saúde humana e abelhas devem ser automaticamente proibidas também nos demais países.',
    weights: { estado: 0.6, sociedade: 0.7, economia: -0.45 },
    entenda: {
      oQueSignifica:
        'Examina o princípio da precaução sanitária frente às especificidades agrícolas tropicais.',
      conceito: 'Princípio da precaução em defensivos agrícolas.',
      concordarRepresenta:
        'Impede o chamado "duplo padrão" em que multinacionais vendem ao Sul Global produtos proibidos em seus países de origem.',
      discordarRepresenta:
        'Argumenta que climas tropicais enfrentam pragas distintas durante todo o ano, exigindo avaliação técnica própria, não cópia automática europeia.',
      exemplosHistoricos:
        'Debates regulatórios entre ANVISA/IBAMA e Ministério da Agricultura no Brasil.',
    },
  },
  {
    id: 'q208',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Bioeconomia e Biotecnologia nacional',
    statement:
      'O país deve criar centros públicos avançados de biotecnologia para transformar sua biodiversidade nativa em fármacos e cosméticos de alto valor com repartição de benefícios aos povos locais.',
    weights: { estado: 0.7, nacionalismo: 0.6, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Une desenvolvimento industrial de alta tecnologia, conservação florestal e justiça aos detentores de conhecimento tradicional.',
      conceito: 'Bioeconomia soberana e Protocolo de Nagoia.',
      concordarRepresenta:
        'Gera alternativa econômica de alto valor agregado à derrubada de florestas.',
      discordarRepresenta:
        'Critica burocracias excessivas de acesso ao patrimônio genético que podem atrasar pesquisas farmacêuticas privadas.',
      exemplosHistoricos:
        'Protocolo de Nagoia (2010) e iniciativas de bioeconomia amazônica.',
    },
  },
  {
    id: 'q209',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Desastres climáticos e Seguros públicos',
    statement:
      'O Estado deve financiar fundos públicos de reconstrução e reassentamento climático gratuito para famílias atingidas por enchentes e secas extremas.',
    weights: { estado: 0.8, economia: -0.45, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Analisa a resposta solidária coletiva diante de eventos climáticos extremos crescentes.',
      conceito: 'Solidariedade climática e seguro social contra catástrofes.',
      concordarRepresenta:
        'Impede que seguradoras privadas abandonem bairros vulneráveis e garante reconstrução resiliente.',
      discordarRepresenta:
        'Argumenta que seguros atuariais baseados em risco real desestimulam ocupação de áreas inundáveis.',
      exemplosHistoricos:
        'Fundos nacionais de catástrofes na Europa e desafios após enchentes no Sul do Brasil (2024).',
    },
  },
  {
    id: 'q210',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Consumo de energia de Data Centers e Cripto',
    statement:
      'Grandes data centers de inteligência artificial e mineração de criptomoedas devem pagar tarifas elétricas progressivas e usar exclusivamente energia renovável adicional.',
    weights: { estado: 0.6, economia: -0.4, sociedade: 0.5 },
    entenda: {
      oQueSignifica:
        'Enfrenta o crescimento acelerado da demanda energética da computação moderna diante de redes elétricas limitadas.',
      conceito: 'Regulação energética da economia digital.',
      concordarRepresenta:
        'Evita que a população pague conta de luz mais cara ou que usinas fósseis sejam reativadas para sustentar servidores.',
      discordarRepresenta:
        'Teme afugentar investimentos tecnológicos estratégicos de computação em nuvem para outros países.',
      exemplosHistoricos:
        'Moratórias regionais na Irlanda e exigências energéticas na UE e EUA.',
    },
  },
  {
    id: 'q211',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Hidrogênio verde e Indústria limpa',
    statement:
      'O país deve priorizar o uso interno da sua energia limpa para produzir aço verde, fertilizantes e bens industriais locais em vez de apenas exportar energia bruta.',
    weights: { nacionalismo: 0.75, estado: 0.6, sociedade: 0.35, economia: -0.2 },
    entenda: {
      oQueSignifica:
        'Discute a estratégia de "powershoring": atrair indústria pesada descarbonizada usando vantagens renováveis domésticas.',
      conceito: 'Reindustrialização verde (Powershoring).',
      concordarRepresenta:
        'Retém empregos qualificados e valor agregado dentro do território nacional.',
      discordarRepresenta:
        'Prefere liberar exportação imediata de moléculas e energia para aproveitar demandas de curto prazo sem intervenção estatal.',
      exemplosHistoricos:
        'Estratégias industriais de hidrogênio verde no Brasil, Chile e Europa.',
    },
  },
  {
    id: 'q212',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Poluição sonora e Qualidade urbana',
    statement:
      'Leis ambientais urbanas devem impor limites rigorosos a emissões de ruído, qualidade do ar e circulação de veículos pesados a diesel no centro das cidades.',
    weights: { estado: 0.55, sociedade: 0.55, liberdades: -0.2 },
    entenda: {
      oQueSignifica:
        'Avalia zonas de baixa emissão urbana voltadas à saúde respiratória e cardiovascular.',
      conceito: 'Zonas de Baixas Emissões (LEZ) e saúde ambiental urbana.',
      concordarRepresenta:
        'Reduz doenças respiratórias infantis e mortalidade precoce em metrópoles.',
      discordarRepresenta:
        'Critica custos impostos a pequenos comerciantes e proprietários de veículos antigos.',
      exemplosHistoricos:
        'Zonas de baixas emissões em Londres (ULEZ), Paris e Madri.',
    },
  },
  {
    id: 'q213',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Garantia de acesso livre a praias e parques',
    statement:
      'Praias, rios navegáveis, ilhas e grandes parques naturais devem permanecer 100% públicos e gratuitos, proibindo qualquer privatização ou cerceamento de acesso.',
    weights: { economia: -0.65, estado: 0.6, sociedade: 0.55 },
    entenda: {
      oQueSignifica:
        'Defende bens naturais comuns de uso público irrestrito contra empreendimentos exclusivos fechados.',
      conceito: 'Bens de uso comum do povo (Domínio público natural).',
      concordarRepresenta:
        'Preserva lazer democrático, acesso de pescadores tradicionais e ecossistemas costeiros.',
      discordarRepresenta:
        'Admite concessões hoteleiras exclusivas ou cobrança privada de manutenção em áreas específicas para financiar preservação.',
      exemplosHistoricos:
        'Regime constitucional de terrenos de marinha e praias públicas no Brasil e Uruguai.',
    },
  },
  {
    id: 'q214',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Bem-estar animal e Direito ambiental',
    statement:
      'A legislação deve banir práticas industriais cruéis na pecuária intensiva (como confinamento extremo) e proibir testes cosméticos em animais.',
    weights: { sociedade: 0.75, estado: 0.4, liberdades: -0.15 },
    entenda: {
      oQueSignifica:
        'Estende a proteção ética e legal contra sofrimento evitável a animais sencientes.',
      conceito: 'Ética animal e regulação sanitária humanitária.',
      concordarRepresenta:
        'Alinha padrões éticos contemporâneos com redução de uso abusivo de antibióticos na criação intensiva.',
      discordarRepresenta:
        'Alerta para aumento de custos da proteína animal acessível às famílias de menor renda.',
      exemplosHistoricos:
        'Proibições europeias de gaiolas em bateria e testes cosméticos.',
    },
  },
  {
    id: 'q215',
    modeTier: 3,
    area: 'Meio Ambiente',
    subtopic: 'Decrescimento seletivo nos países ricos',
    statement:
      'Os países altamente industrializados de renda alta devem reduzir intencionalmente sua extração de materiais e jornada de consumo para dar espaço ecológico ao Sul Global.',
    weights: { economia: -0.8, sociedade: 0.75, internacional: 0.65, nacionalismo: -0.35 },
    entenda: {
      oQueSignifica:
        'Explora a proposta ecossocialista e ecológica de contração material planejada no Norte rico com expansão básica no Sul pobre.',
      conceito: 'Decrescimento seletivo e justiça ecológica global (Jason Hickel / Kohei Saito).',
      concordarRepresenta:
        'Reconhece que o planeta não suporta universalizar o padrão de desperdício material norte-americano.',
      discordarRepresenta:
        'Sustenta que redução do PIB nos países ricos provocaria desemprego global e recessão nas exportações dos próprios países pobres.',
      exemplosHistoricos:
        'Debates recentes no Parlamento Europeu sobre "Pós-Crescimento" (Beyond Growth, 2023).',
    },
  },

  // =========================================================================
  // FILOSOFIA POLÍTICA - TIER 3 (24 PERGUNTAS: q216 - q239)
  // =========================================================================
  {
    id: 'q216',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Contrato social e Legitimidade',
    statement:
      'Um governo só possui autoridade moral legítima quando resulta do consentimento contínuo dos governados expresso em eleições livres e direitos revogáveis.',
    weights: { democracia: 0.95, liberdades: 0.7 },
    entenda: {
      oQueSignifica:
        'Retoma a teoria contratualista democrática de Locke e Rousseau contra legitimidades dinásticas, tecnocráticas ou de força.',
      conceito: 'Contratualismo democrático e consentimento dos governados.',
      concordarRepresenta:
        'Exige renovação periódica de mandatos e prestação de contas eleitoral real.',
      discordarRepresenta:
        'Admite fontes alternativas de legitimidade baseadas em eficácia, tradição histórica ou vanguarda ideológica.',
      exemplosHistoricos:
        'Declaração dos Direitos do Homem e do Cidadão (1789).',
    },
  },
  {
    id: 'q217',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Direito natural à propriedade vs Função social',
    statement:
      'O direito à propriedade privada é anterior ao próprio Estado e só pode ser limitado em casos raríssimos de necessidade pública extrema.',
    weights: { economia: 0.9, estado: -0.8, liberdades: 0.65 },
    entenda: {
      oQueSignifica:
        'Compara a visão lockeana/nozickiana de propriedade como direito natural pré-político com a visão constitucional moderna de propriedade como direito socialmente regulado.',
      conceito: 'Direito natural de propriedade versus função social da propriedade.',
      concordarRepresenta:
        'Funda o liberalismo clássico e o libertarianismo na inviolabilidade dos bens adquiridos por trabalho e troca voluntária.',
      discordarRepresenta:
        'Argumenta que a própria definição legal e proteção da propriedade depende do Estado, devendo responder a fins sociais.',
      exemplosHistoricos:
        'John Locke vs. Constituição de Weimar (1919) e Constituição Brasileira de 1988.',
    },
  },
  {
    id: 'q218',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Hegemonia cultural e Sociedade civil',
    statement:
      'As transformações políticas profundas começam sempre na disputa de valores, linguagem e cultura na sociedade civil antes de se consolidarem nas leis.',
    weights: { sociedade: 0.25, democracia: 0.25, economia: -0.35 },
    entenda: {
      oQueSignifica:
        'Testa a intuição gramsciana (hoje adotada por múltiplos espectros políticos) sobre a primazia da cultura e do consenso pré-político.',
      conceito: 'Hegemonia cultural (Antonio Gramsci) e metapolítica.',
      concordarRepresenta:
        'Valoriza educação, imprensa, arte e debate público como terreno decisivo da política.',
      discordarRepresenta:
        'Atribui peso muito maior a incentivos econômicos imediatos, regras institucionais ou poder coercitivo do Estado.',
      exemplosHistoricos:
        'Análise de Gramsci nos Cadernos do Cárcere.',
    },
  },
  {
    id: 'q219',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Tirania da maioria',
    statement:
      'Uma democracia saudável precisa de fortes garantias contramajoritárias para impedir que 51% dos eleitores suprimam direitos fundamentais dos outros 49%.',
    weights: { democracia: 0.65, liberdades: 0.9, estado: -0.15 },
    entenda: {
      oQueSignifica:
        'Formula o célebre alerta de Alexis de Tocqueville e John Stuart Mill sobre os limites morais da regra da maioria simples.',
      conceito: 'Democracia constitucional versus maioritarismo irrestrito.',
      concordarRepresenta:
        'Protege liberdades de expressão, religião e minorias contra ondas autoritárias eleitorais.',
      discordarRepresenta:
        'Teme que freios contramajoritários excessivos protejam privilégios econômicos de elites contra a vontade popular.',
      exemplosHistoricos:
        'Tocqueville ("A Democracia na América", 1835) e declarações constitucionais de direitos.',
    },
  },
  {
    id: 'q220',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Positivismo vs Pluralismo epistemológico',
    statement:
      'Nenhuma ideologia política possui a verdade científica definitiva sobre a história; por isso o pluralismo e a possibilidade de corrigir erros pacificamente são essenciais.',
    weights: { democracia: 0.9, liberdades: 0.75, sociedade: 0.35 },
    entenda: {
      oQueSignifica:
        'Expressa o falibilismo político e a defesa da "Sociedade Aberta" formulada por Karl Popper e Isaiah Berlin.',
      conceito: 'Sociedade Aberta e Pluralismo de Valores (Popper / Berlin).',
      concordarRepresenta:
        'Rejeita dogmas totalizantes e valoriza a troca pacífica de governos como teste contínuo de políticas públicas.',
      discordarRepresenta:
        'Acredita na existência de leis históricas objetivas ou verdades morais absolutas que não devem ser relativizadas.',
      exemplosHistoricos:
        'Karl Popper ("A Sociedade Aberta e Seus Inimigos", 1945) e Isaiah Berlin ("Dois Conceitos de Liberdade", 1958).',
    },
  },
  {
    id: 'q221',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Liberdade positiva vs Negativa',
    statement:
      'Não basta que o Estado não proíba um cidadão de estudar ou empreender (liberdade negativa); é preciso garantir condições materiais reais para que ele possa fazê-lo.',
    weights: { economia: -0.55, estado: 0.8, sociedade: 0.6, liberdades: 0.2 },
    entenda: {
      oQueSignifica:
        'Distingue os dois conceitos clássicos de liberdade analisados por Isaiah Berlin e desenvolvidos por Amartya Sen.',
      conceito: 'Liberdade substantiva / Capacidades versus liberdade puramente negativa.',
      concordarRepresenta:
        'Aproximação com liberalismo social, social-democracia e abordagem das capacidades.',
      discordarRepresenta:
        'Mantém a definição estrita de liberdade como ausência de coerção intencional alheia, evitando confundi-la com poder aquisitivo.',
      exemplosHistoricos:
        'Isaiah Berlin (1958) versus Amartya Sen (1999) e Friedrich Hayek (1960).',
    },
  },
  {
    id: 'q222',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Corporativismo estatal vs Sindicalismo livre',
    statement:
      'Sindicatos de trabalhadores e associações empresariais devem organizar-se livremente sem tutela, imposto compulsório nem reconhecimento prévio do Ministério do Trabalho.',
    weights: { liberdades: 0.75, democracia: 0.65, estado: -0.45 },
    entenda: {
      oQueSignifica:
        'Contrapõe a autonomia sindical plena (Convenção 87 da OIT) à estrutura sindical tutelada pelo Estado.',
      conceito: 'Liberdade sindical autônoma versus corporativismo estatal.',
      concordarRepresenta:
        'Combate peleguismo burocrático e garante sindicatos representativos escolhidos livremente pelas bases.',
      discordarRepresenta:
        'Teme pulverização e enfraquecimento financeiro das negociações coletivas sem contribuição universal e unicidade.',
      exemplosHistoricos:
        'Convenção 87 da OIT versus estrutura corporativa herdada da Era Vargas no Brasil.',
    },
  },
  {
    id: 'q223',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Paternalismo libertário e Nudges',
    statement:
      'Governos podem desenhar opções padrão em políticas públicas (como adesão automática à previdência complementar ou doação de órgãos) preservando o direito de recusa individual.',
    weights: { estado: 0.35, liberdades: 0.25, economia: 0.1 },
    entenda: {
      oQueSignifica:
        'Avalia a aplicação de economia comportamental ("arquitetura de escolhas") em políticas públicas.',
      conceito: 'Paternalismo libertário / Nudges (Richard Thaler e Cass Sunstein).',
      concordarRepresenta:
        'Melhora adesão a poupança e saúde sem proibir escolhas contrárias.',
      discordarRepresenta:
        'Desconfia de manipulação psicológica sutil pelo Estado e prefere consentimento explícito em tudo.',
      exemplosHistoricos:
        'Adesão automática previdenciária no Reino Unido e Nova Zelândia; doação presumida na Espanha.',
    },
  },
  {
    id: 'q224',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Virtude cívica e Esfera pública',
    statement:
      'O declínio da participação ativa dos cidadãos em associações comunitárias, sindicatos e debates públicos ameaça mais a democracia do que falhas técnicas econômicas.',
    weights: { democracia: 0.85, sociedade: 0.2, liberdades: 0.3 },
    entenda: {
      oQueSignifica:
        'Reflete o diagnóstico de Hannah Arendt e Robert Putnam sobre a erosão do capital social e da vida cívica.',
      conceito: 'Esfera pública cívica (Arendt / Putnam) versus cidadania meramente consumidora.',
      concordarRepresenta:
        'Valoriza a política como espaço compartilhado de ação e responsabilidade coletiva.',
      discordarRepresenta:
        'Considera legítimo que a maioria prefira dedicar-se à vida privada e familiar deixando a gestão a profissionais eleitos.',
      exemplosHistoricos:
        'Hannah Arendt ("A Condição Humana", 1958) e Robert Putnam ("Bowling Alone", 2000).',
    },
  },
  {
    id: 'q225',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Justiça intergeracional',
    statement:
      'Constituições devem incluir defensores públicos ou órgãos independentes com poder de contestar leis que transfiram dívidas ecológicas ou fiscais excessivas às futuras gerações.',
    weights: { democracia: 0.55, estado: 0.45, sociedade: 0.45 },
    entenda: {
      oQueSignifica:
        'Trata do problema democrático de que futuras gerações ainda não nascidas não votam hoje.',
      conceito: 'Justiça intergeracional e sustentabilidade constitucional.',
      concordarRepresenta:
        'Equilibra interesses eleitorais de curto prazo com preservação ambiental e solvência de longo prazo.',
      discordarRepresenta:
        'Teme criação de órgãos não eleitos com poder de veto sobre prioridades urgentes dos cidadãos vivos hoje.',
      exemplosHistoricos:
        'Comissário para as Gerações Futuras no País de Gales (2015) e decisões da Corte Constitucional Alemã sobre clima (2021).',
    },
  },
  {
    id: 'q226',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Comunitarismo vs Cosmopolitismo ético',
    statement:
      'Temos obrigações morais de solidariedade mais fortes com nossos concidadãos próximos do que com habitantes anônimos de outros continentes.',
    weights: { nacionalismo: 0.65, internacional: -0.55, sociedade: -0.25 },
    entenda: {
      oQueSignifica:
        'Aborda o debate ético sobre o alcance da justiça distributiva: nacional-comunitário versus cosmopolita global.',
      conceito: 'Associativismo cívico / Comunitarismo versus cosmopolitismo moral (Peter Singer).',
      concordarRepresenta:
        'Sustenta que o Estado de bem-estar depende de laços concretos de reciprocidade e pertencimento comum.',
      discordarRepresenta:
        'Afirma que a dignidade humana tem igual valor independentemente de fronteiras geográficas acidentais.',
      exemplosHistoricos:
        'David Miller ("On Nationality") versus Thomas Pogge e Peter Singer.',
    },
  },
  {
    id: 'q227',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Alienação do trabalho',
    statement:
      'Mesmo com salários razoáveis, a falta de controle dos trabalhadores sobre o ritmo e o sentido de sua atividade produtiva gera alienação social profunda.',
    weights: { economia: -0.75, sociedade: 0.5, democracia: 0.45 },
    entenda: {
      oQueSignifica:
        'Retoma o conceito filosófico de alienação do trabalho (dos Manuscritos de 1844 de Marx até análises contemporâneas de saúde laboral).',
      conceito: 'Alienação e autonomia no trabalho versus compensação puramente salarial.',
      concordarRepresenta:
        'Inspira demandas por democracia nos locais de trabalho, cooperativas e redução da subordinação algorítmica.',
      discordarRepresenta:
        'Entende que a divisão especializada do trabalho e hierarquias gerenciais são condições inevitáveis da alta produtividade que paga bons salários.',
      exemplosHistoricos:
        'Crítica ao taylorismo/fordismo no século XX e debates atuais sobre gestão algorítmica.',
    },
  },
  {
    id: 'q228',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Conservadorismo ecológico',
    statement:
      'A preservação de paisagens naturais, do patrimônio histórico e de comunidades locais contra a destruição mercantil rápida é um dever profundamente conservador.',
    weights: { sociedade: -0.45, estado: 0.35, economia: -0.35, nacionalismo: 0.35 },
    entenda: {
      oQueSignifica:
        'Explora a corrente do "conservadorismo verde" (Roger Scruton) — a aliança entre amor pelo lar herdado (oikophilia) e conservação ambiental.',
      conceito: 'Oikophilia e conservadorismo ecológico.',
      concordarRepresenta:
        'Mostra que proteger florestas, rios e cidades históricas não precisa ser monopólio progressista.',
      discordarRepresenta:
        'Ou prioriza exploração econômica imediata de recursos, ou associa ambientalismo necessariamente à crítica anticapitalista progressista.',
      exemplosHistoricos:
        'Obra "Green Philosophy" (2012) de Roger Scruton e movimentos conservacionistas britânicos do século XIX.',
    },
  },
  {
    id: 'q229',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Desenvolvimento como liberdade',
    statement:
      'O crescimento do PIB per capita é apenas um meio instrumental; o verdadeiro indicador de sucesso de um país é a expansão da saúde, educação e liberdade real das pessoas.',
    weights: { economia: -0.3, estado: 0.55, sociedade: 0.75, democracia: 0.65 },
    entenda: {
      oQueSignifica:
        'Sintetiza a revolução conceitual do Índice de Desenvolvimento Humano (IDH) proposta por Amartya Sen e Mahbub ul Haq.',
      conceito: 'Abordagem das Capacidades e Desenvolvimento Humano.',
      concordarRepresenta:
        'Rejeita modelos que crescem economicamente mantendo analfabetismo, desigualdade extrema ou ditadura.',
      discordarRepresenta:
        'Ressalta que sem forte crescimento do PIB e produtividade não há recursos sustentáveis para financiar saúde e educação.',
      exemplosHistoricos:
        'Criação do Relatório de Desenvolvimento Humano do PNUD (1990).',
    },
  },
  {
    id: 'q230',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Tecnocracia vs Política',
    statement:
      'Decisões complexas sobre energia, saúde pública e política monetária deveriam ser confiadas principalmente a conselhos de especialistas técnicos independentes de pressões eleitorais.',
    weights: { democracia: -0.65, estado: 0.35, liberdades: -0.2 },
    entenda: {
      oQueSignifica:
        'Avalia os limites da delegação tecnocrática em democracias modernas.',
      conceito: 'Epistocracia / Tecnocracia versus soberania democrática.',
      concordarRepresenta:
        'Protege decisões científicas de longo prazo contra demagogia eleitoral imediata.',
      discordarRepresenta:
        'Lembra que nenhuma decisão alocativa sobre impostos, juros ou riscos é puramente técnica — envolve conflitos de valores que pertencem ao voto cidadão.',
      exemplosHistoricos:
        'Debates sobre bancos centrais independentes, agências reguladoras e governos técnicos na Europa.',
    },
  },
  {
    id: 'q231',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Distinção Esquerda e Direita',
    statement:
      'Apesar de novos temas como ecologia e tecnologia, a distinção clássica entre priorizar igualdade social ou priorizar hierarquia/livre mercado continua central na política.',
    weights: { economia: -0.2, democracia: 0.3, sociedade: 0.25 },
    entenda: {
      oQueSignifica:
        'Remete à tese clássica de Norberto Bobbio em "Direita e Esquerda" (1994) sobre o critério estrutural da polaridade política.',
      conceito: 'Critério da igualdade versus desigualdade natural/meritocrática (Bobbio).',
      concordarRepresenta:
        'Rejeita a tese de que "não existe mais esquerda nem direita", vendo nela muitas vezes uma tentativa de ocultar interesses distributivos.',
      discordarRepresenta:
        'Acredita que categorias dos séculos XIX–XX ficaram obsoletas diante de eixos novos como nacionalismo vs. globalismo ou autoritarismo vs. liberdade.',
      exemplosHistoricos:
        'Ensaio "Direita e Esquerda" de Norberto Bobbio (1994) versus a "Terceira Via" de Anthony Giddens.',
    },
  },
  {
    id: 'q232',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Utopismo e Pragmatismo',
    statement:
      'Projetos políticos que prometem eliminar definitivamente todos os conflitos humanos costumam justificar violência e autoritarismo no presente em nome de um futuro perfeito.',
    weights: { democracia: 0.65, liberdades: 0.65, sociedade: -0.25, economia: 0.25 },
    entenda: {
      oQueSignifica:
        'Expressa a crítica liberal-conservadora e social-democrata ao messianismo político revolucionário.',
      conceito: 'Antiutopismo democrático (Karl Popper / Raymond Aron / Hannah Arendt).',
      concordarRepresenta:
        'Valoriza instituições imperfeitas capazes de administrar conflitos humanos pacificamente.',
      discordarRepresenta:
        'Sustenta que sem horizontes utópicos emancipatórios a política se reduz à gestão resignada das injustiças existentes.',
      exemplosHistoricos:
        'Críticas antitotalitárias do século XX e defesa da esperança utópica por Ernst Bloch e Eduardo Galeano.',
    },
  },
  {
    id: 'q233',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Patrimonialismo e Impessoalidade',
    statement:
      'O principal obstáculo ao desenvolvimento de muitos países não é a falta de recursos naturais, mas instituições extrativistas onde elites capturam o Estado para privilégios privados.',
    weights: { democracia: 0.8, liberdades: 0.45, economia: 0.15 },
    entenda: {
      oQueSignifica:
        'Integra diagnósticos de Raymundo Faoro ("Os Donos do Poder") e Acemoglu & Robinson ("Por que as Nações Fracassam").',
      conceito: 'Patrimonialismo e instituições extrativistas versus instituições inclusivas.',
      concordarRepresenta:
        'Enfatiza concursos impessoais, imprensa livre, concorrência econômica justa e controle sobre privilégios estatais.',
      discordarRepresenta:
        'Considera insuficiente explicar o subdesenvolvimento só por instituições internas sem considerar a divisão internacional do trabalho e o imperialismo.',
      exemplosHistoricos:
        'Faoro (1958) e Acemoglu & Robinson (2012) versus Teoria da Dependência.',
    },
  },
  {
    id: 'q234',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Autopropriedade radical',
    statement:
      'Impostos compulsórios sobre a renda do trabalho equivalem moralmente a trabalho forçado parcial em favor do Estado.',
    weights: { economia: 0.95, estado: -0.95, liberdades: 0.85 },
    entenda: {
      oQueSignifica:
        'Apresenta a famosa tese filosófica libertária formulada por Robert Nozick em "Anarquia, Estado e Utopia" (1974).',
      conceito: 'Autopropriedade absoluta e teoria da titularidade (Robert Nozick).',
      concordarRepresenta:
        'Postula que cada pessoa é dona exclusiva de si mesma e dos frutos legítimos de seu trabalho, rejeitando redistribuição compulsória.',
      discordarRepresenta:
        'Lembra que ninguém produz renda isolado: estradas, tribunais, moeda, educação básica e segurança coletiva precedem e viabilizam qualquer ganho privado.',
      exemplosHistoricos:
        'Debate acadêmico entre Robert Nozick e John Rawls em Harvard nos anos 1970.',
    },
  },
  {
    id: 'q235',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Solidariedade orgânica e Direitos sociais',
    statement:
      'Uma sociedade decente não deixa a sobrevivência digna de doentes, idosos ou desempregados à mercê da sorte familiar ou da caridade eventual.',
    weights: { estado: 0.85, economia: -0.65, sociedade: 0.65 },
    entenda: {
      oQueSignifica:
        'Formula o fundamento ético da seguridade social pública universal.',
      conceito: 'Solidariedade social institucionalizada (Émile Durkheim / T. H. Marshall).',
      concordarRepresenta:
        'Entende direitos sociais como complemento indispensável dos direitos civis e políticos na cidadania plena.',
      discordarRepresenta:
        'Prefere poupança privada individual e apoio voluntário comunitário para evitar expansão fiscal estatal.',
      exemplosHistoricos:
        'Ensaio "Cidadania, Classe Social e Status" de T. H. Marshall (1950).',
    },
  },
  {
    id: 'q236',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Violência política',
    statement:
      'Em uma democracia onde existam eleições periódicas livres e liberdade de organização, o recurso à violência armada política é sempre injustificável.',
    weights: { democracia: 0.9, seguranca: -0.25, liberdades: 0.5 },
    entenda: {
      oQueSignifica:
        'Estabelece o critério ético democrático fundamental sobre a exclusão da violência nas disputas políticas internas.',
      conceito: 'Pacifismo institucional democrático (Norberto Bobbio).',
      concordarRepresenta:
        'Distingue claramente resistência legítima contra ditaduras da violência intolerável contra instituições democráticas abertas.',
      discordarRepresenta:
        'Apenas admite exceções extremas caso a democracia formal oculte violência estatal sistemática contra parcelas da população.',
      exemplosHistoricos:
        'Consenso democrático europeu e sul-americano pós-transições.',
    },
  },
  {
    id: 'q237',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Soberania popular vs Direito internacional',
    statement:
      'Mesmo quando uma maioria eleitoral interna deseja aprovar pena de morte ou censura, tratados internacionais de direitos humanos já ratificados devem prevalecer como limite jurídico.',
    weights: { internacional: 0.85, liberdades: 0.75, democracia: 0.4, nacionalismo: -0.5 },
    entenda: {
      oQueSignifica:
        'Examina a hierarquia supralegal dos tratados de direitos humanos ("bloco de constitucionalidade") frente a maiorias eleitorais nacionais momentâneas.',
      conceito: 'Controle de convencionalidade e constitucionalismo multinível.',
      concordarRepresenta:
        'Cria uma segunda linha de defesa contra retrocessos autoritários internos.',
      discordarRepresenta:
        'Sustenta que nenhuma corte estrangeira deve anular decisões soberanas do eleitorado e do parlamento nacional.',
      exemplosHistoricos:
        'Corte Interamericana de Direitos Humanos e Tribunal Europeu de Direitos Humanos.',
    },
  },
  {
    id: 'q238',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Memória histórica e Justiça de transição',
    statement:
      'Sociedades que viveram ditaduras não devem conceder anistia irrestrita a graves violações de direitos humanos (tortura e desaparecimentos), devendo abrir arquivos e julgar responsáveis.',
    weights: { democracia: 0.9, sociedade: 0.65, seguranca: -0.55, liberdades: 0.45 },
    entenda: {
      oQueSignifica:
        'Avalia os pilares da Justiça de Transição: verdade, memória, reparação e responsabilização penal contra o esquecimento pactuado.',
      conceito: 'Justiça de transição versus leis de anistia recíproca.',
      concordarRepresenta:
        'Consolida o "nunca mais" e reafirma o império da lei sobre agentes do Estado.',
      discordarRepresenta:
        'Argumenta que pactos de anistia mútua foram essenciais para pacificar transições negociadas sem risco de novos golpes.',
      exemplosHistoricos:
        'Julgamentos das Juntas na Argentina e Comissão da Verdade da África do Sul versus Lei de Anistia de 1979 no Brasil.',
    },
  },
  {
    id: 'q239',
    modeTier: 3,
    area: 'Filosofia Política',
    subtopic: 'Pluralidade e Síntese ideológica',
    statement:
      'Nenhuma tradição ideológica isolada resolve os desafios do século XXI; políticas eficazes exigem combinar eficiência de mercado, proteção social robusta e transição ecológica.',
    weights: { democracia: 0.6, estado: 0.3, sociedade: 0.45, internacional: 0.45 },
    entenda: {
      oQueSignifica:
        'Testa a abertura ao pragmatismo sintético em oposição à ortodoxia doutrinária pura de qualquer polo.',
      conceito: 'Pragmatismo institucional e síntese pluralista.',
      concordarRepresenta:
        'Privilegia evidências empíricas e equilíbrio entre criação de riqueza, coesão social e limites ambientais.',
      discordarRepresenta:
        'Alerta que o ecletismo pragmático frequentemente mascara falta de princípios claros e cede aos interesses mais fortes.',
      exemplosHistoricos:
        'Debates contemporâneos sobre economia mista verde e modelos híbridos pós-Consenso de Washington.',
    },
  },
];
