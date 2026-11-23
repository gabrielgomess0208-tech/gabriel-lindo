import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  Compass,
  GitCompare,
  RotateCcw,
  Share2,
  ShieldAlert,
} from 'lucide-react';
import {
  IdeologicalCartesianMap,
  DimensionBipolarBars,
  DimensionRadarChart,
  SpectrumPositionBar,
} from './Charts.tsx';
import {
  classifyPoliticalSpectrum,
  normalizeVector,
} from '../shared/scoring.ts';
import {
  SPECTRUM_STYLE,
  getIdeologyFamilyStyle,
} from '../shared/theme.ts';
import {
  IdeologyRecord,
  PoliticianRecord,
  QuizResult,
} from '../shared/types.ts';

interface ResultViewProps {
  result: QuizResult;
  allResults: QuizResult[];
  ideologies: IdeologyRecord[];
  politicians: PoliticianRecord[];
  onRetake: () => void;
  onSelectIdeology: (id: string) => void;
  onSelectPolitician: (id: string) => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  allResults,
  ideologies,
  politicians,
  onRetake,
  onSelectIdeology,
  onSelectPolitician,
}) => {
  const [compareResultId, setCompareResultId] = useState<string>('');
  const [copiedShare, setCopiedShare] = useState(false);

  const normalizedVec = normalizeVector(result.vector);
  const spectrum = result.spectrum || classifyPoliticalSpectrum(normalizedVec);
  const spectrumStyle = SPECTRUM_STYLE[spectrum.label];

  const comparedResult = allResults.find((r) => r.id === compareResultId);
  const comparedSpectrum = comparedResult
    ? comparedResult.spectrum || classifyPoliticalSpectrum(normalizeVector(comparedResult.vector))
    : undefined;

  const topIdeology = result.topIdeologies[0];

  const handleShare = async () => {
    const summary = [
      `Ralo´s Politic — Relatório de Pensamento Político (12 Pilares)`,
      `Espectro Político: ${spectrum.label} (Índice ${spectrum.score > 0 ? `+${spectrum.score}` : spectrum.score})`,
      `Modalidade: ${result.totalQuestions} perguntas | Confiança: ${result.confiancaGeral}%`,
      `Principais Ideologias:`,
      ...result.topIdeologies
        .slice(0, 3)
        .map((m, i) => `${i + 1}. ${m.ideology.nome}: ${m.compatibilidade}%`),
      `Principais Afinidades Históricas:`,
      ...result.topPoliticians
        .slice(0, 3)
        .map((p, i) => `${i + 1}. ${p.politician.nome} (${p.politician.pais}): ${p.compatibilidade}%`),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    } catch {
      setCopiedShare(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-10 sm:space-y-12 pb-20">
      {/* HERO DIAGNOSTIC SUMMARY BANNER */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white border border-slate-200 border-t-4 ${spectrumStyle.border} rounded-xl p-4 sm:p-8 space-y-6 shadow-sm`}
      >
        {/* Top Row: Spectrum Headline + Actions */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 border-b border-slate-200 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="uppercase tracking-wider font-semibold text-blue-700">
                Diagnóstico em 12 Pilares
              </span>
              <span aria-hidden="true">·</span>
              <span>{new Date(result.createdAt).toLocaleDateString('pt-BR')}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{result.totalQuestions} perguntas</span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs sm:text-sm font-bold text-white shadow-xs"
                  style={{ backgroundColor: spectrumStyle.hex }}
                >
                  <Compass className="w-4 h-4" />
                  {spectrum.label}
                </span>
                <span className="text-xs font-mono tabular-nums text-slate-600 font-semibold">
                  Índice geral: {spectrum.score > 0 ? `+${spectrum.score}` : spectrum.score}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl font-semibold text-slate-950 leading-tight">
                Seu perfil está no campo{' '}
                <span style={{ color: spectrumStyle.hex }}>{spectrum.label}</span>
                {topIdeology && (
                  <>
                    {' '}
                    — com maior proximidade de{' '}
                    <span className="underline decoration-slate-300 underline-offset-4">
                      {topIdeology.ideology.nome}
                    </span>{' '}
                    <span className="font-mono tabular-nums text-blue-700">
                      ({topIdeology.compatibilidade}%)
                    </span>
                  </>
                )}
              </h1>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">{spectrum.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col xl:flex-row gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 px-4 min-h-[44px] bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {copiedShare ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              {copiedShare ? 'Resumo Copiado!' : 'Copiar Resumo'}
            </button>
            <button
              type="button"
              onClick={onRetake}
              className="inline-flex items-center justify-center gap-2 px-4 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              Refazer Teste
            </button>
          </div>
        </div>

        {/* Visual 7-Band Spectrum Gauge */}
        <div className={`rounded-lg border p-3.5 sm:p-5 ${spectrumStyle.softBg}`}>
          <SpectrumPositionBar
            spectrum={spectrum}
            compareSpectrum={comparedSpectrum}
            compareLabel="Comparado"
          />
        </div>

        {/* Top 3 Matching Ideologies Spotlight */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-700">
              Principais Ideologias com que Você se Parece
            </h2>
            <button
              type="button"
              onClick={() => scrollToSection('sec-ideologias')}
              className="text-xs text-blue-700 hover:text-blue-600 font-semibold cursor-pointer whitespace-nowrap"
            >
              Ver Top 5 detalhado →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {result.topIdeologies.slice(0, 3).map((match, idx) => {
              const fam = getIdeologyFamilyStyle(match.ideology.familia);
              return (
                <button
                  key={match.ideology.id}
                  type="button"
                  onClick={() => onSelectIdeology(match.ideology.id)}
                  className={`text-left bg-slate-50/70 hover:bg-white border border-slate-200 hover:border-slate-300 border-t-4 ${fam.topBorder} rounded-lg p-3.5 sm:p-4 space-y-2 transition-all cursor-pointer shadow-2xs hover:shadow-sm`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] font-mono tabular-nums text-slate-500 font-semibold">
                      #{idx + 1} · {match.ideology.familia.split('/')[0].trim()}
                    </span>
                    <span className={`font-mono tabular-nums text-lg font-bold ${fam.text}`}>
                      {match.compatibilidade}%
                    </span>
                  </div>
                  <div className="font-display text-lg font-semibold text-slate-950 leading-snug">
                    {match.ideology.nome}
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${fam.bar}`}
                      style={{ width: `${match.compatibilidade}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-blue-700 font-semibold flex items-center gap-1 pt-0.5">
                    Explorar corrente <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-200 pt-4 text-xs">
          <div className="bg-slate-50 rounded-md p-3 border border-slate-200/70">
            <div className="text-slate-500">Modalidade</div>
            <div className="font-mono tabular-nums text-slate-900 font-semibold text-sm mt-0.5">
              {result.totalQuestions} perguntas
            </div>
          </div>
          <div className="bg-slate-50 rounded-md p-3 border border-slate-200/70">
            <div className="text-slate-500">Questões Válidas</div>
            <div className="font-mono tabular-nums text-slate-900 font-semibold text-sm mt-0.5">
              {result.answeredSeriousCount} avaliadas
            </div>
          </div>
          <div className="bg-slate-50 rounded-md p-3 border border-slate-200/70">
            <div className="text-slate-500">Confiança Média</div>
            <div className="font-mono tabular-nums text-blue-700 font-semibold text-sm mt-0.5">
              {result.confiancaGeral}%
            </div>
          </div>
          <div className="bg-slate-50 rounded-md p-3 border border-slate-200/70">
            <div className="text-slate-500">"Ralo e bonita?"</div>
            <div className="text-slate-700 text-[11px] mt-0.5 line-clamp-2">
              {result.humorAnswer
                ? `${result.humorAnswer} (Peso 0%)`
                : 'Item humorístico · Peso 0%'}
            </div>
          </div>
        </div>

        {/* Quick Section Anchor Pills for Fast Mobile Jump */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-slate-200 pt-4 text-xs">
          <span className="text-slate-500 font-medium shrink-0">Ir para:</span>
          {[
            ['sec-pilares', '12 Pilares'],
            ['sec-ideologias', 'Ideologias'],
            ['sec-politicos', 'Políticos'],
            ['sec-mapa', 'Mapa 2D'],
            ['sec-relatorio', 'Relatório'],
          ].map(([target, label]) => (
            <button
              key={target}
              type="button"
              onClick={() => scrollToSection(target)}
              className="px-3 min-h-[36px] bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Compare with another saved result */}
        {allResults.length > 1 && (
          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <GitCompare className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Sobrepor outro teste salvo nos gráficos abaixo:</span>
            </div>
            <select
              value={compareResultId}
              onChange={(e) => setCompareResultId(e.target.value)}
              className="w-full sm:w-auto min-h-[42px] bg-slate-50 border border-slate-300 rounded-md px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="">Sem comparação sobreposta</option>
              {allResults
                .filter((r) => r.id !== result.id)
                .map((r) => (
                  <option key={r.id} value={r.id}>
                    {new Date(r.createdAt).toLocaleDateString('pt-BR')} ·{' '}
                    {r.topIdeologies[0]?.ideology.nome} ({r.totalQuestions}q)
                  </option>
                ))}
            </select>
          </div>
        )}
      </motion.section>

      {/* B. ANÁLISE DOS 12 PILARES POLÍTICOS (FIRST VISUAL CHART SECTION ON MOBILE) */}
      <motion.section
        id="sec-pilares"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5 border-t border-slate-200 pt-8 sm:pt-10"
      >
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
            Seção A · Equilíbrio Bidirecional em 12 Pilares
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
            Onde Você se Posiciona em Cada Pilar Político
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            As barras e os vértices coloridos mostram em qual polo e com que intensidade você se posiciona em cada um dos 12 pilares equilibrados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs lg:sticky lg:top-20">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Radar Comparativo (12 Pilares)
            </h3>
            <DimensionRadarChart
              primaryVector={normalizedVec}
              primaryLabel="Seu Perfil"
              secondaryVector={comparedResult?.vector}
              secondaryLabel={
                comparedResult
                  ? `Comparado (${new Date(comparedResult.createdAt).toLocaleDateString('pt-BR')})`
                  : undefined
              }
            />
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs">
            <DimensionBipolarBars
              vector={normalizedVec}
              confidenceByDimension={result.confiancaPorDimensao}
              compareVector={comparedResult?.vector}
              compareLabel="Comparado"
            />
          </div>
        </div>
      </motion.section>

      {/* A. IDENTIDADE IDEOLÓGICA (TOP 5 DETALHADO) */}
      <section id="sec-ideologias" className="space-y-5 border-t border-slate-200 pt-8 sm:pt-10">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
            Seção B · Ranking Completo de Proximidade
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
            As 5 Ideologias Mais Próximas das Suas Respostas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {result.topIdeologies.map((match, idx) => {
            const fam = getIdeologyFamilyStyle(match.ideology.familia);
            return (
              <motion.div
                key={match.ideology.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-white border border-slate-200 hover:border-slate-300 border-t-4 ${fam.topBorder} rounded-xl p-4 sm:p-6 space-y-3.5 transition-all shadow-xs`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 min-w-0">
                    <span className="text-xs font-mono tabular-nums text-slate-500 font-semibold">
                      0{idx + 1}.
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full ${fam.dot} shrink-0`} />
                    <button
                      type="button"
                      onClick={() => onSelectIdeology(match.ideology.id)}
                      className="font-display text-xl font-semibold text-slate-950 hover:text-blue-700 transition-colors cursor-pointer text-left"
                    >
                      {match.ideology.nome}
                    </button>
                    <span className={`text-xs ${fam.text} font-semibold`}>
                      · {match.ideology.familia}
                    </span>
                  </div>

                  <div className={`font-mono tabular-nums text-2xl font-bold ${fam.text}`}>
                    {match.compatibilidade}%
                  </div>
                </div>

                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${fam.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${match.compatibilidade}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {match.ideology.resumo}
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-2.5 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500 block">Econômica</span>
                    <div className="font-mono tabular-nums text-emerald-700 font-bold mt-0.5">
                      {match.breakdown.semelhancaEconomica}%
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Social</span>
                    <div className="font-mono tabular-nums text-violet-700 font-bold mt-0.5">
                      {match.breakdown.semelhancaSocial}%
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Institucional</span>
                    <div className="font-mono tabular-nums text-sky-700 font-bold mt-0.5">
                      {match.breakdown.semelhancaInstitucional}%
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-1 flex items-center sm:justify-end pt-1 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => onSelectIdeology(match.ideology.id)}
                      className="w-full sm:w-auto min-h-[38px] px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-md cursor-pointer transition-colors"
                    >
                      Ficha completa →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* C. COMPARAÇÃO COM 10 POLÍTICOS E PENSADORES */}
      <section id="sec-politicos" className="space-y-5 border-t border-slate-200 pt-8 sm:pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
              Seção C · Proximidade Histórica e Teórica
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
              10 Políticos e Pensadores Mais Próximos
            </h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Afinidade matemática calculada nos 12 pilares considerando o contexto histórico — nunca equivalência pessoal absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {result.topPoliticians.map((pm, idx) => {
            const fam = getIdeologyFamilyStyle(pm.politician.correntePrincipal);
            return (
              <motion.div
                key={pm.politician.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: (idx % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-white border border-slate-200 border-t-4 ${fam.topBorder} rounded-xl p-4 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500">
                        <span className="font-mono tabular-nums font-semibold mr-1.5">#{idx + 1}</span>
                        {pm.politician.pais} · {pm.politician.periodoHistorico}
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectPolitician(pm.politician.id)}
                        className="font-display text-xl font-semibold text-slate-950 hover:text-blue-700 transition-colors cursor-pointer text-left mt-0.5"
                      >
                        {pm.politician.nome}
                      </button>
                      <div className={`text-xs ${fam.text} mt-0.5 font-semibold`}>
                        {pm.politician.correntePrincipal}
                      </div>
                    </div>
                    <div className={`font-mono tabular-nums text-xl font-bold ${fam.text} shrink-0`}>
                      {pm.compatibilidade}%
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                      <span className="font-semibold text-emerald-800 block mb-1">
                        Principais semelhanças:
                      </span>
                      <ul className="space-y-1 text-slate-700 leading-relaxed">
                        {pm.semelhancasPrincipais.slice(0, 2).map((s, i) => (
                          <li key={i}>· {s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                      <span className="font-semibold text-rose-800 block mb-1">
                        Principais diferenças:
                      </span>
                      <ul className="space-y-1 text-slate-700 leading-relaxed">
                        {pm.diferencasPrincipais.slice(0, 2).map((d, i) => (
                          <li key={i}>· {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between gap-2 text-xs text-slate-600 font-mono tabular-nums">
                  <span>
                    Econ: {pm.breakdown.semelhancaEconomica}% · Soc: {pm.breakdown.semelhancaSocial}% · Inst: {pm.breakdown.semelhancaInstitucional}%
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectPolitician(pm.politician.id)}
                    className="font-sans text-blue-700 hover:text-blue-600 font-semibold cursor-pointer min-h-[36px] px-2 shrink-0"
                  >
                    Biografia →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* D. MAPA IDEOLÓGICO INTERATIVO */}
      <motion.section
        id="sec-mapa"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-5 border-t border-slate-200 pt-8 sm:pt-10"
      >
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
            Seção D · Cartografia Política Configurável
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
            Mapa Ideológico Cartesiano Interativo
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-xs">
          <IdeologicalCartesianMap
            userVector={normalizedVec}
            userLabel="Seu Perfil"
            secondaryVector={comparedResult?.vector}
            secondaryLabel="Comparado"
            ideologies={ideologies}
            politicians={politicians}
            onSelectIdeology={onSelectIdeology}
            onSelectPolitician={onSelectPolitician}
          />
        </div>
      </motion.section>

      {/* E. RELATÓRIO PERSONALIZADO */}
      <section id="sec-relatorio" className="space-y-5 border-t border-slate-200 pt-8 sm:pt-10">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
            Seção E · Síntese Analítica Estruturada
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
            Relatório Personalizado de Pensamento Político
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {[
            { title: 'Visão sobre Economia', body: result.narrative.economia, border: 'border-t-emerald-600', titleColor: 'text-emerald-800' },
            { title: 'Papel do Estado', body: result.narrative.papelEstado, border: 'border-t-blue-600', titleColor: 'text-blue-800' },
            { title: 'Capitalismo e Socialismo', body: result.narrative.capitalismoVsSocialismo, border: 'border-t-amber-500', titleColor: 'text-amber-800' },
            { title: 'Soberania Nacional', body: result.narrative.soberaniaNacional, border: 'border-t-purple-600', titleColor: 'text-purple-800' },
            { title: 'Concepção de Democracia', body: result.narrative.visaoDemocracia, border: 'border-t-cyan-600', titleColor: 'text-cyan-800' },
            { title: 'Justiça Social e Civil', body: result.narrative.justicaSocial, border: 'border-t-violet-600', titleColor: 'text-violet-800' },
            { title: 'Tensões e Contradições', body: result.narrative.contradicoesIdeologicas, border: 'border-t-rose-600', titleColor: 'text-rose-800' },
            { title: 'Correntes Próximas e Divergências', body: `${result.narrative.correntesProximas} ${result.narrative.diferencasFundamentais}`, border: 'border-t-sky-600', titleColor: 'text-sky-800' },
          ].map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.3, delay: (idx % 2) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white border border-slate-200 border-t-4 ${block.border} rounded-xl p-4 sm:p-6 space-y-2 shadow-xs`}
            >
              <h3 className={`font-display text-lg font-semibold ${block.titleColor}`}>
                {block.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{block.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            Aviso metodológico: os percentuais calculados resultam da distância geométrica entre seu vetor de respostas nos 12 pilares e os perfis referenciais catalogados pela plataforma. Nenhuma classificação política substitui a leitura histórica direta das obras, programas e contextos específicos.
          </p>
        </div>
      </section>
    </div>
  );
};

