import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  ExternalLink,
  GitCompare,
  History,
  Scale,
  Search,
  Trash2,
} from 'lucide-react';
import {
  ALL_DIMENSIONS,
  DIMENSION_META,
  classifyPoliticalSpectrum,
  computeSimilarityBreakdown,
  normalizeVector,
} from '../shared/scoring.ts';
import { SPECTRUM_STYLE } from '../shared/theme.ts';
import {
  AcademicSource,
  GlossaryTerm,
  IdeologyRecord,
  PoliticianRecord,
  QuizResult,
} from '../shared/types.ts';
import {
  DimensionBipolarBars,
  DimensionRadarChart,
  IdeologicalCartesianMap,
} from './Charts.tsx';

interface GlossaryAndMethodologyViewProps {
  glossary: GlossaryTerm[];
  sources: AcademicSource[];
}

export const GlossaryAndMethodologyView: React.FC<GlossaryAndMethodologyViewProps> = ({
  glossary,
  sources,
}) => {
  const [activeSection, setActiveSection] = useState<
    'glossario' | 'metodologia' | 'fontes'
  >('glossario');
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [sourceTypeFilter, setSourceTypeFilter] = useState('Todos');

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(glossary.map((g) => g.categoria)))],
    [glossary]
  );

  const filteredGlossary = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary.filter((item) => {
      const mCat = categoryFilter === 'Todas' || item.categoria === categoryFilter;
      const mQuery =
        !q ||
        item.termo.toLowerCase().includes(q) ||
        item.definicao.toLowerCase().includes(q) ||
        item.autoresChave.toLowerCase().includes(q);
      return mCat && mQuery;
    });
  }, [glossary, query, categoryFilter]);

  const sourceTypes = [
    'Todos',
    'Base Estatística',
    'Obra Clássica',
    'Pesquisa Acadêmica',
    'Arquivo Histórico',
  ];

  const filteredSources = useMemo(() => {
    if (sourceTypeFilter === 'Todos') return sources;
    return sources.filter((s) => s.tipo === sourceTypeFilter);
  }, [sources, sourceTypeFilter]);

  return (
    <div className="space-y-8 pb-20">
      <div className="border-b border-slate-200 pb-6 space-y-4">
        <div className="space-y-2 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
            Documentação Científica e Conceitual
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
            Glossário, Metodologia e Fontes Acadêmicas
          </h1>
          <p className="text-sm text-slate-600">
            Consulte definições técnicas imparciais, inspecione as equações utilizadas no cálculo vetorial equilibrado de 12 pilares e acesse as referências históricas e estatísticas da plataforma.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            ['glossario', `Glossário Conceitual (${glossary.length})`],
            ['metodologia', 'Metodologia & Equações'],
            ['fontes', `Bibliografia e Bases (${sources.length})`],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key as typeof activeSection)}
              className={`px-4 py-2 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                activeSection === key
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
      {/* GLOSSARY */}
      {activeSection === 'glossario' && (
        <motion.div
          key="sec-glossario"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar termo, autor ou exemplo histórico..."
                className="w-full bg-white border border-slate-300 rounded-md pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'Todas' ? 'Todas as categorias' : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGlossary.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 border-t-4 border-t-amber-500 rounded-lg p-6 space-y-3 shadow-xs"
              >
                <div className="border-b border-slate-200 pb-3">
                  <div className="text-xs text-amber-700 font-semibold">{item.categoria}</div>
                  <h2 className="font-display text-xl font-semibold text-slate-950 mt-0.5">
                    {item.termo}
                  </h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{item.definicao}</p>
                <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-200">
                  <p>
                    <strong className="text-slate-900">Autores-chave:</strong> {item.autoresChave}
                  </p>
                  <p>
                    <strong className="text-slate-900">Exemplo histórico/prático:</strong>{' '}
                    {item.exemploPratico}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* METHODOLOGY */}
      {activeSection === 'metodologia' && (
        <motion.div
          key="sec-metodologia"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 border-t-4 border-t-blue-600 rounded-lg p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-700 font-semibold">
                <Compass className="w-4 h-4" />
                <span>Arquitetura do Cálculo Vetorial</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950">
                Escala Likert, Ponderação e Normalização (-100 a +100)
              </h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Cada pergunta séria possui um vetor de pesos associado aos 12 pilares analíticos e uma força discriminante calibrada entre <span className="font-mono font-semibold text-slate-950">0.5</span> e <span className="font-mono font-semibold text-slate-950">1.5</span>.
                </p>
                <p>
                  As cinco opções de resposta são mapeadas para valores simétricos: <span className="font-mono font-semibold text-emerald-700">+1.0</span> (Concordo totalmente), <span className="font-mono font-semibold text-sky-700">+0.5</span> (Concordo parcialmente), <span className="font-mono font-semibold text-slate-700">0.0</span> (Neutro / Depende), <span className="font-mono font-semibold text-amber-700">-0.5</span> (Discordo parcialmente) e <span className="font-mono font-semibold text-rose-700">-1.0</span> (Discordo totalmente).
                </p>
                <p>
                  Para eliminar o viés de aquiescência ("concordar com tudo"), cada pilar utiliza <strong className="text-slate-950">média bidirecional equilibrada</strong> (50% peso para itens positivos e 50% para itens invertidos), escalada para <span className="font-mono font-semibold text-slate-950">−100 a +100</span>. A pergunta humorística <em>“Ralo e bonita?”</em> recebe peso estritamente nulo (<span className="font-mono font-semibold text-slate-950">0</span>).
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 border-t-4 border-t-rose-600 rounded-lg p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-rose-700 font-semibold">
                <Scale className="w-4 h-4" />
                <span>Distância Híbrida, Espectro & Confiança</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950">
                Compatibilidade e Classificação em 7 Faixas
              </h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  A compatibilidade global com cada ideologia e personalidade histórica combina <strong className="text-slate-950">78% de proximidade euclidiana normalizada</strong> nos 12 pilares e <strong className="text-slate-950">22% de similaridade de cosseno</strong>, evitando distorções em perfis moderados ou multidimensionais.
                </p>
                <p>
                  O algoritmo posiciona seu perfil em uma das 7 faixas clássicas do espectro (<strong className="text-slate-950">Extrema-Esquerda, Esquerda, Centro-Esquerda, Centro, Centro-Direita, Direita e Extrema-Direita</strong>) ponderando o eixo econômico-trabalhista e o eixo sociocultural-civil, além de decompor Semelhança Econômica, Social e Institucional.
                </p>
                <p>
                  O índice de <strong className="text-slate-950">confiança da medição</strong> reflete a cobertura amostral efetiva por pilar: questionários de 36 perguntas atingem menor densidade que os de 72 e 240 questões.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-xs">
            <h3 className="font-display text-2xl font-semibold text-slate-950">
              Definição dos 12 Pilares Ideológicos da Matriz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ALL_DIMENSIONS.map((dim) => {
                const meta = DIMENSION_META[dim];
                return (
                  <div
                    key={dim}
                    className="bg-slate-50 border border-slate-200 rounded-md p-4 space-y-1.5"
                  >
                    <div className="font-semibold text-sm text-slate-950">{meta.label}</div>
                    <div className="text-xs font-mono text-blue-700 font-medium">
                      −100 ({meta.leftPole}) ↔ +100 ({meta.rightPole})
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{meta.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* ACADEMIC SOURCES */}
      {activeSection === 'fontes' && (
        <motion.div
          key="sec-fontes"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            {sourceTypes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSourceTypeFilter(t)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                  sourceTypeFilter === t
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredSources.map((src) => (
              <div
                key={src.id}
                className="bg-white border border-slate-200 border-t-4 border-t-cyan-600 rounded-lg p-6 flex flex-col justify-between space-y-4 shadow-xs"
              >
                <div className="space-y-2">
                  <div className="text-xs text-slate-500">
                    <span className="text-cyan-700 font-semibold">{src.tipo}</span> · {src.area} ·{' '}
                    <span className="font-mono tabular-nums">{src.ano}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-slate-950">
                    {src.titulo}
                  </h2>
                  <div className="text-xs text-slate-700 font-medium">
                    {src.autorOuInstituicao}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {src.descricao}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 truncate max-w-[70%]">
                    {src.urlReferencia}
                  </span>
                  <a
                    href={src.urlReferencia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-600 font-semibold shrink-0"
                  >
                    Acessar fonte
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

interface HistoryViewProps {
  results: QuizResult[];
  ideologies: IdeologyRecord[];
  politicians: PoliticianRecord[];
  onOpenResult: (result: QuizResult) => void;
  onDeleteResult: (id: string) => Promise<void>;
  onStartNewQuiz: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  results,
  ideologies,
  politicians,
  onOpenResult,
  onDeleteResult,
  onStartNewQuiz,
}) => {
  const [compareMode, setCompareMode] = useState(results.length >= 2);
  const [resultAId, setResultAId] = useState(results[0]?.id || '');
  const [resultBId, setResultBId] = useState(results[1]?.id || results[0]?.id || '');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const resultA = results.find((r) => r.id === resultAId) || results[0];
  const resultB = results.find((r) => r.id === resultBId) || results[1];

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await onDeleteResult(id);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
            Registro Longitudinal de Avaliações · {results.length} Relatórios Salvos
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
            Histórico e Comparador de Resultados
          </h1>
          <p className="text-sm text-slate-600">
            Reabra qualquer relatório anterior, acompanhe a evolução do seu pensamento político entre modalidades (36, 72 ou 240 perguntas) ou compare dois resultados lado a lado.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {results.length >= 2 && (
            <button
              type="button"
              onClick={() => setCompareMode((v) => !v)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                compareMode
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
              }`}
            >
              <GitCompare className="w-4 h-4" />
              {compareMode ? 'Ocultar Comparador' : 'Comparar Dois Resultados'}
            </button>
          )}
          <button
            type="button"
            onClick={onStartNewQuiz}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            Novo Questionário
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-4 shadow-xs">
          <History className="w-8 h-8 text-slate-400 mx-auto" />
          <h2 className="font-display text-2xl font-semibold text-slate-950">
            Nenhum relatório salvo até o momento
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Conclua o Teste Rápido (36), Completo (72) ou Extensivo (240) para gerar seu primeiro perfil multidimensional e salvá-lo neste histórico.
          </p>
          <button
            type="button"
            onClick={onStartNewQuiz}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            Ir para as Modalidades de Teste
          </button>
        </div>
      ) : (
        <>
          {/* Two-Result Comparator */}
          {compareMode && results.length >= 2 && resultA && resultB && (
            <div className="bg-white border border-blue-200 rounded-lg p-6 sm:p-8 space-y-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-slate-950">
                    Comparação Direta Entre Resultados
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Contraste eixos vetoriais e deslocamentos ideológicos entre dois testes concluídos.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={resultA.id}
                    onChange={(e) => setResultAId(e.target.value)}
                    className="bg-slate-50 border border-blue-500 rounded-md px-3 py-1.5 text-xs text-slate-900"
                  >
                    {results.map((r) => (
                      <option key={r.id} value={r.id}>
                        A: {new Date(r.createdAt).toLocaleString('pt-BR')} ·{' '}
                        {r.topIdeologies[0]?.ideology.nome} ({r.totalQuestions}q)
                      </option>
                    ))}
                  </select>
                  <span className="text-xs text-slate-500">vs.</span>
                  <select
                    value={resultB.id}
                    onChange={(e) => setResultBId(e.target.value)}
                    className="bg-slate-50 border border-rose-500 rounded-md px-3 py-1.5 text-xs text-slate-900"
                  >
                    {results.map((r) => (
                      <option key={r.id} value={r.id}>
                        B: {new Date(r.createdAt).toLocaleString('pt-BR')} ·{' '}
                        {r.topIdeologies[0]?.ideology.nome} ({r.totalQuestions}q)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {(() => {
                const sim = computeSimilarityBreakdown(resultA.vector, resultB.vector);
                return (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 border border-slate-200 rounded-md p-4 text-xs">
                      <div>
                        <span className="text-slate-600">Convergência Global</span>
                        <div className="font-mono tabular-nums text-xl text-blue-700 font-semibold mt-0.5">
                          {sim.overall}%
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-600">Convergência Econômica</span>
                        <div className="font-mono tabular-nums text-xl text-emerald-700 font-semibold mt-0.5">
                          {sim.breakdown.semelhancaEconomica}%
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-600">Convergência Social</span>
                        <div className="font-mono tabular-nums text-xl text-violet-700 font-semibold mt-0.5">
                          {sim.breakdown.semelhancaSocial}%
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-600">Convergência Institucional</span>
                        <div className="font-mono tabular-nums text-xl text-sky-700 font-semibold mt-0.5">
                          {sim.breakdown.semelhancaInstitucional}%
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-5">
                        <DimensionRadarChart
                          primaryVector={resultA.vector}
                          primaryLabel={`Teste A (${resultA.totalQuestions}q)`}
                          secondaryVector={resultB.vector}
                          secondaryLabel={`Teste B (${resultB.totalQuestions}q)`}
                        />
                      </div>
                      <div className="lg:col-span-7">
                        <DimensionBipolarBars
                          vector={resultA.vector}
                          compareVector={resultB.vector}
                          compareLabel={`Teste B`}
                        />
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-6">
                      <h3 className="text-sm font-semibold text-slate-900 mb-4">
                        Deslocamento no Plano Cartesiano
                      </h3>
                      <IdeologicalCartesianMap
                        userVector={resultA.vector}
                        userLabel={`Teste A (${resultA.totalQuestions}q)`}
                        secondaryVector={resultB.vector}
                        secondaryLabel={`Teste B (${resultB.totalQuestions}q)`}
                        ideologies={ideologies}
                        politicians={politicians}
                      />
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Saved Results List */}
          <div className="space-y-4">
            {results.map((res) => {
              const spec = res.spectrum || classifyPoliticalSpectrum(normalizeVector(res.vector));
              const specStyle = SPECTRUM_STYLE[spec.label];
              return (
              <div
                key={res.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition-colors shadow-xs"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span>{new Date(res.createdAt).toLocaleString('pt-BR')}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-700 font-semibold">
                      {res.mode === 'rapido'
                        ? 'Teste Rápido (36 perguntas)'
                        : res.mode === 'completo'
                        ? 'Teste Completo (72 perguntas)'
                        : 'Teste Extensivo (240 perguntas)'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">
                      Confiança: {res.confiancaGeral}%
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className="px-2.5 py-0.5 rounded text-[11px] font-bold text-white"
                      style={{ backgroundColor: specStyle.hex }}
                    >
                      {spec.label}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-950">
                      {res.topIdeologies[0]?.ideology.nome}{' '}
                      <span className="font-mono tabular-nums text-blue-700 text-lg sm:text-xl">
                        ({res.topIdeologies[0]?.compatibilidade}%)
                      </span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
                    {res.topIdeologies.slice(1, 3).map((m, i) => (
                      <span key={m.ideology.id}>
                        #{i + 2} {m.ideology.nome}:{' '}
                        <span className="font-mono tabular-nums text-slate-900 font-medium">
                          {m.compatibilidade}%
                        </span>
                      </span>
                    ))}
                    {res.topPoliticians[0] && (
                      <span className="text-slate-600">
                        · Maior afinidade histórica: {res.topPoliticians[0].politician.nome} (
                        <span className="font-mono tabular-nums">
                          {res.topPoliticians[0].compatibilidade}%
                        </span>
                        )
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => onOpenResult(res)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Abrir Relatório Completo
                  </button>
                  <button
                    type="button"
                    disabled={deletingId === res.id}
                    onClick={() => handleDelete(res.id)}
                    className="p-2 border border-slate-200 hover:border-rose-400 text-slate-500 hover:text-rose-600 rounded-md transition-colors cursor-pointer"
                    aria-label="Excluir resultado"
                    title="Excluir resultado"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
