import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  Globe2,
  History,
  Landmark,
  Scale,
} from 'lucide-react';
import { QuizMode, QuizResult } from '../shared/types.ts';

interface HomeViewProps {
  counts: {
    ideologies: number;
    politicians: number;
    countries: number;
    questionsTotal: number;
  };
  savedDraft: { mode: QuizMode; answeredCount: number; total: number } | null;
  recentResults: QuizResult[];
  onStartQuiz: (mode: QuizMode) => void;
  onResumeQuiz: () => void;
  onNavigate: (
    page:
      | 'home'
      | 'ideologies'
      | 'politicians'
      | 'countries'
      | 'lab'
      | 'glossary'
      | 'history'
  ) => void;
  onViewResult: (result: QuizResult) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  counts,
  savedDraft,
  recentResults,
  onStartQuiz,
  onResumeQuiz,
  onNavigate,
  onViewResult,
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 -left-16 w-80 h-80 rounded-full bg-blue-400/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-0 w-72 h-72 rounded-full bg-rose-400/12 blur-3xl"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xs tracking-widest uppercase text-blue-700 font-semibold">
                Plataforma Internacional de Análise Política Comparada
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.08]">
                Descubra seu{' '}
                <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-rose-600 bg-clip-text text-transparent">
                  pensamento político
                </span>{' '}
                com rigor multidimensional.
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                O <strong className="text-slate-950 font-semibold">Ralo´s Politic</strong> é um
                laboratório internacional de ciência política que calcula suas posições em 12 pilares
                ideológicos equilibrados, classifica seu espectro político completo e compara suas
                respostas com correntes filosóficas, figuras históricas verificadas e países.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('modalidades-teste');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm px-6 py-3 rounded-md transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Escolher Modalidade de Teste
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('lab')}
                  className="inline-flex items-center gap-2 border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-900 font-medium text-sm px-5 py-3 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FlaskConical className="w-4 h-4 text-rose-600" />
                  Explorar Laboratório Político
                </button>
              </div>

              {savedDraft && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="border border-cyan-300 bg-cyan-50/90 rounded-lg p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs"
                >
                  <div className="text-sm text-slate-800">
                    <span className="font-semibold text-cyan-900">Questionário salvo em andamento</span>
                    <span className="text-slate-700">
                      {' '}
                      · Modalidade{' '}
                      {savedDraft.mode === 'rapido'
                        ? 'Rápida (36)'
                        : savedDraft.mode === 'completo'
                        ? 'Completa (72)'
                        : 'Extensiva (240)'}{' '}
                      · <span className="font-mono tabular-nums font-semibold text-slate-950">{savedDraft.answeredCount}/{savedDraft.total}</span> respondidas
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onResumeQuiz}
                    className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Retomar Agora
                  </button>
                </motion.div>
              )}
            </div>

            {/* Quantitative Platform Strip (Claim-to-Proof Adjacency) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-6">
              <div className="border-t-2 border-cyan-500 pt-2">
                <div className="font-mono tabular-nums text-2xl font-semibold text-cyan-700">
                  {counts.questionsTotal}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">Perguntas calibradas</div>
              </div>
              <div className="border-t-2 border-blue-600 pt-2">
                <div className="font-mono tabular-nums text-2xl font-semibold text-blue-700">
                  {counts.ideologies}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">Ideologias catalogadas</div>
              </div>
              <div className="border-t-2 border-rose-500 pt-2">
                <div className="font-mono tabular-nums text-2xl font-semibold text-rose-700">
                  {counts.politicians}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">Políticos e pensadores</div>
              </div>
              <div className="border-t-2 border-emerald-500 pt-2">
                <div className="font-mono tabular-nums text-2xl font-semibold text-emerald-700">
                  {counts.countries}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">Países comparados</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <img
                src="/src/assets/images/hero_political_chamber_1795448126069.jpg"
                alt="Câmara parlamentar neoclássica e arquivo de pesquisa política"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 space-y-1.5">
                <p className="text-xs text-cyan-300 font-medium">
                  Metodologia Vetorial em 12 Pilares · Espectro de 7 Faixas · Fontes Verificáveis
                </p>
                <p className="text-sm font-medium text-white">
                  Equilíbrio bidirecional, distância euclidiana ponderada e diagnóstico detalhado para desktop e celular.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE QUIZ MODALITIES */}
      <section id="modalidades-teste" className="space-y-8 border-t border-slate-200 pt-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs tracking-widest uppercase text-rose-600 font-semibold">
              Instrumentos de Avaliação Política
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
              Escolha a profundidade do seu questionário
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Todas as modalidades utilizam a mesma matriz matemática equilibrada de 12 pilares, salvamento automático e botão explicativo <strong className="text-slate-900">ENTENDA</strong> em cada questão séria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 36 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.36, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-b from-cyan-50/80 to-white border border-cyan-200 border-t-4 border-t-cyan-500 rounded-lg p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-cyan-100 pb-4">
                <span className="text-xs tracking-wider uppercase text-cyan-700 font-semibold">
                  Teste Rápido
                </span>
                <span className="font-mono tabular-nums text-2xl font-semibold text-slate-900">
                  36 Perguntas
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ideal para mapear suas tendências gerais rapidamente em economia, Estado, questões sociais, defesa, relações internacionais, ecologia e filosofia política.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><span className="text-cyan-600 mr-1.5">●</span> Duração média estimada: 6–9 minutos</li>
                <li><span className="text-cyan-600 mr-1.5">●</span> Relatório resumido com Top 5 ideologias e Top 10 políticos</li>
                <li><span className="text-cyan-600 mr-1.5">●</span> Inclui indicador transparente de confiança amostral</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onStartQuiz('rapido')}
              className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Iniciar Teste Rápido (36)
            </button>
          </motion.div>

          {/* Card 2: 72 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.36, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-b from-blue-50/90 to-white border border-blue-200 border-t-4 border-t-blue-600 rounded-lg p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-blue-100 pb-4">
                <span className="text-xs tracking-wider uppercase text-blue-700 font-semibold">
                  Teste Completo
                </span>
                <span className="font-mono tabular-nums text-2xl font-semibold text-slate-900">
                  72 Perguntas
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Equilíbrio aprofundado entre amplitude temática e precisão analítica, distinguindo correntes próximas como social-democracia, trabalhismo, socialismo democrático e liberalismo social.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><span className="text-blue-600 mr-1.5">●</span> Duração média estimada: 14–18 minutos</li>
                <li><span className="text-blue-600 mr-1.5">●</span> Identificação refinada de subcorrentes e tensões internas</li>
                <li><span className="text-blue-600 mr-1.5">●</span> Comparação detalhada com pensadores e chefes de Estado</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onStartQuiz('completo')}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              Iniciar Teste Completo (72)
            </button>
          </motion.div>

          {/* Card 3: 240 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.36, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-b from-rose-50/80 to-white border border-rose-200 border-t-4 border-t-rose-600 rounded-lg p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-rose-100 pb-4">
                <span className="text-xs tracking-wider uppercase text-rose-700 font-semibold">
                  Teste Extensivo
                </span>
                <span className="font-mono tabular-nums text-2xl font-semibold text-slate-900">
                  240 Perguntas
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Investigação política de máxima granularidade sem repetição de itens: avalia microtemas fiscais, institucionais, geopolíticos, ecológicos e filosóficos com confiança máxima.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><span className="text-rose-600 mr-1.5">●</span> Duração média estimada: 40–55 minutos (salvamento automático)</li>
                <li><span className="text-rose-600 mr-1.5">●</span> Mapeamento de contradições ideológicas e nuances históricas</li>
                <li><span className="text-rose-600 mr-1.5">●</span> Relatório completo por subdimensão econômica, social e estatal</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => onStartQuiz('extensivo')}
              className="w-full py-3 px-4 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white text-sm font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              Iniciar Teste Extensivo (240)
            </button>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SHOWCASE OF INTERNATIONAL DATABASE & POLITICAL LAB */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-200 pt-14">
        {/* Card: Laboratório Político */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="h-56 overflow-hidden relative bg-slate-900">
            <img
              src="/src/assets/images/lab_geopolitics_atlas_1795448125956.jpg"
              alt="Atlas geopolítico e gráficos históricos sobre mesa de pesquisa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
          <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <p className="text-xs tracking-wider uppercase text-blue-700 font-semibold">
                Simulação e Modelos Comparados
              </p>
              <h3 className="font-display text-2xl font-semibold text-slate-950">
                Laboratório Político & Atlas de Países
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Compare indicadores verificáveis de {counts.countries} países (FMI, PNUD, OCDE, Banco Mundial), contraste governos históricos como o New Deal, Era Vargas e Suécia de Palme, e simule políticas públicas com hipóteses explícitas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('lab')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Abrir Laboratório Político
              </button>
              <button
                type="button"
                onClick={() => onNavigate('countries')}
                className="px-4 py-2 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Comparar Países
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card: Acervo Histórico & Conceitual */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.38, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="h-56 overflow-hidden relative bg-slate-900">
            <img
              src="/src/assets/images/archive_historical_records_1795448125859.jpg"
              alt="Acervo documental de ciência política e filosofia econômica"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
          <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
            <div className="space-y-2">
              <p className="text-xs tracking-wider uppercase text-rose-700 font-semibold">
                Base Internacional Expansível
              </p>
              <h3 className="font-display text-2xl font-semibold text-slate-950">
                Enciclopédia de Ideologias, Líderes e Fontes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explore {counts.ideologies} correntes políticas detalhadas, {counts.politicians} biografias multidimensionais (incluindo contradições históricas e mudanças de posição), glossário técnico e bibliografia acadêmica verificável.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('ideologies')}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Consultar Ideologias
              </button>
              <button
                type="button"
                onClick={() => onNavigate('politicians')}
                className="px-4 py-2 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Explorar Políticos
              </button>
              <button
                type="button"
                onClick={() => onNavigate('glossary')}
                className="px-4 py-2 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Glossário & Bibliografia
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* QUICK ACCESS TOOLS & RECENT HISTORY */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-slate-200 pt-12 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button
            type="button"
            onClick={() => onNavigate('ideologies')}
            className="text-left p-5 bg-white border border-slate-200 border-t-2 border-t-blue-600 hover:border-blue-400 rounded-lg shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-3"
          >
            <div className="w-9 h-9 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center">
              <Compass className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-sm font-semibold text-slate-900">27 Correntes Políticas</div>
            <p className="text-xs text-slate-600">
              Origens, princípios econômicos, visão de Estado e relação com a democracia.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('politicians')}
            className="text-left p-5 bg-white border border-slate-200 border-t-2 border-t-rose-600 hover:border-rose-400 rounded-lg shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-3"
          >
            <div className="w-9 h-9 rounded-md bg-rose-50 border border-rose-200 flex items-center justify-center">
              <Landmark className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-sm font-semibold text-slate-900">Comparador de Políticos</div>
            <p className="text-xs text-slate-600">
              Compare dois líderes ou pensadores lado a lado nos 12 pilares analíticos.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('countries')}
            className="text-left p-5 bg-white border border-slate-200 border-t-2 border-t-emerald-600 hover:border-emerald-400 rounded-lg shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-3"
          >
            <div className="w-9 h-9 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-sm font-semibold text-slate-900">Modelos Nacionais</div>
            <p className="text-xs text-slate-600">
              PIB per capita, IDH, Gini, carga tributária e educação com ano e fonte.
            </p>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('glossary')}
            className="text-left p-5 bg-white border border-slate-200 border-t-2 border-t-amber-500 hover:border-amber-400 rounded-lg shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer space-y-3"
          >
            <div className="w-9 h-9 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-sm font-semibold text-slate-900">Metodologia & Glossário</div>
            <p className="text-xs text-slate-600">
              Equações de distância multidimensional, conceitos-chave e referências.
            </p>
          </button>
        </div>

        {recentResults.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  Histórico Recente de Testes
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('history')}
                className="text-xs text-blue-700 hover:text-blue-600 font-medium cursor-pointer whitespace-nowrap"
              >
                Ver e comparar todos ({recentResults.length})
              </button>
            </div>
            <div className="divide-y divide-slate-200">
              {recentResults.slice(0, 3).map((res) => (
                <div
                  key={res.id}
                  className="py-3 flex flex-wrap items-center justify-between gap-4 text-sm"
                >
                  <div className="space-y-0.5">
                    <div className="font-medium text-slate-900">
                      {res.topIdeologies[0]?.ideology.nome || 'Perfil calculado'}{' '}
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        ({res.topIdeologies[0]?.compatibilidade ?? 0}%)
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      {new Date(res.createdAt).toLocaleString('pt-BR')} · Modalidade{' '}
                      {res.mode === 'rapido'
                        ? 'Rápida (36)'
                        : res.mode === 'completo'
                        ? 'Completa (72)'
                        : 'Extensiva (240)'}{' '}
                      · Confiança {res.confiancaGeral}%
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onViewResult(res)}
                    className="px-3.5 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Abrir Relatório
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 text-xs text-slate-600 pt-2">
          <Scale className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            Nota de rigor metodológico: o Ralo´s Politic não apresenta resultados como diagnósticos científicos definitivos, mas como estimativas estatísticas transparentes de proximidade multidimensional com base nas respostas fornecidas.
          </p>
        </div>
      </motion.section>
    </div>
  );
};
