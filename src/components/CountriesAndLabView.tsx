import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpDown,
  FlaskConical,
  Globe2,
  Landmark,
  SlidersHorizontal,
} from 'lucide-react';
import {
  LAB_ECONOMIC_MODELS,
  LAB_HISTORICAL_GOVERNMENTS,
  LAB_NATIONAL_DILEMMAS,
} from '../data/glossary_and_sources.ts';
import { CountryRecord } from '../shared/types.ts';

interface CountriesViewProps {
  countries: CountryRecord[];
}

export const CountriesView: React.FC<CountriesViewProps> = ({ countries }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'brasil',
    'noruega',
    'alemanha',
    'china',
  ]);
  const [sortField, setSortField] = useState<
    'pibPerCapitaPPC' | 'idh' | 'gini' | 'cargaTributaria' | 'liberdadePolitica'
  >('idh');

  const toggleCountry = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((x) => x !== id) : prev;
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const selectedCountries = selectedIds
    .map((id) => countries.find((c) => c.id === id))
    .filter((c): c is CountryRecord => Boolean(c));

  const sortedCountries = [...countries].sort((a, b) => {
    const valA = a.indicadores[sortField].numero;
    const valB = b.indicadores[sortField].numero;
    return sortField === 'gini' ? valA - valB : valB - valA;
  });

  return (
    <div className="space-y-10 pb-20">
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
          Atlas Comparado de Desenvolvimento · {countries.length} Países
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
          Países e Modelos de Desenvolvimento
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Compare trajetórias econômicas, institucionais e sociais com indicadores verificáveis. Cada dado exibe explicitamente o ano de referência e a instituição fonte (FMI, Banco Mundial, PNUD, OCDE, EIU, IBGE).
        </p>
      </div>

      {/* Multi-Country Selector */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Globe2 className="w-4 h-4 text-emerald-600" />
            <span>Comparação Lado a Lado (selecione até 4 países)</span>
          </div>
          <span className="text-xs text-slate-600 font-medium">
            Ativos: {selectedCountries.map((c) => c.nome).join(' · ')}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {countries.map((c) => {
            const active = selectedIds.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggleCountry(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                  active
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {c.nome}
              </button>
            );
          })}
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
          {selectedCountries.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="bg-slate-50 border border-slate-200 border-t-4 border-t-emerald-600 rounded-lg p-5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="border-b border-slate-200 pb-3">
                  <div className="text-xs text-emerald-700 font-semibold">{c.regiao}</div>
                  <h2 className="font-display text-xl font-semibold text-slate-950 mt-0.5">
                    {c.nome}
                  </h2>
                  <div className="text-xs text-blue-700 font-medium mt-1">{c.modeloPredominante}</div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {c.resumoHistorico}
                </p>

                <dl className="space-y-2.5 text-xs border-t border-slate-200 pt-3">
                  {(
                    [
                      ['PIB per capita (PPC)', c.indicadores.pibPerCapitaPPC],
                      ['IDH (PNUD)', c.indicadores.idh],
                      ['Desigualdade (Gini)', c.indicadores.gini],
                      ['Carga Tributária', c.indicadores.cargaTributaria],
                      ['Gasto Público / Estado', c.indicadores.gastoPublicoPIB],
                      ['Industrialização (Manuf.)', c.indicadores.industrializacao],
                      ['Educação (PISA/Alf.)', c.indicadores.educacao],
                      ['Saúde (Esp. Vida)', c.indicadores.saude],
                      ['Produtividade / Hora', c.indicadores.produtividade],
                      ['Liberdade Política (EIU)', c.indicadores.liberdadePolitica],
                    ] as const
                  ).map(([label, item]) => (
                    <div key={label} className="border-b border-slate-200/70 pb-1.5">
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-600">{label}</dt>
                        <dd className="font-mono tabular-nums text-slate-950 font-semibold">
                          {item.valor}
                        </dd>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {item.ano} · {item.fonte}
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                <strong className="text-slate-900">Regime:</strong> {c.regimePolitico}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Verifiable Comparative Table */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-slate-950">
            Tabela Global Comparada de Indicadores
          </h2>
          <div className="flex items-center gap-2 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-600">Ordenar por:</span>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as typeof sortField)}
              className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-xs text-slate-900"
            >
              <option value="idh">IDH (Maior primeiro)</option>
              <option value="pibPerCapitaPPC">PIB per capita PPC</option>
              <option value="gini">Menor Desigualdade (Gini)</option>
              <option value="cargaTributaria">Carga Tributária (% PIB)</option>
              <option value="liberdadePolitica">Liberdade Política (EIU)</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                <th className="py-3 px-3 font-semibold">País</th>
                <th className="py-3 px-3 font-semibold text-right">PIB/cap PPC (2024)</th>
                <th className="py-3 px-3 font-semibold text-right">IDH (2022)</th>
                <th className="py-3 px-3 font-semibold text-right">Gini</th>
                <th className="py-3 px-3 font-semibold text-right">Carga Trib.</th>
                <th className="py-3 px-3 font-semibold text-right">Gasto Púb.</th>
                <th className="py-3 px-3 font-semibold text-right">Manufatura</th>
                <th className="py-3 px-3 font-semibold text-right">Democracia (EIU)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sortedCountries.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="py-3 px-3">
                    <div className="font-semibold text-slate-950">{c.nome}</div>
                    <div className="text-[11px] text-slate-500">{c.modeloPredominante}</div>
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.pibPerCapitaPPC.valor}
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-blue-700 font-semibold">
                    {c.indicadores.idh.valor}
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.gini.valor}
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.cargaTributaria.valor}
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.gastoPublicoPIB.valor}
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.industrializacao.numero}%
                  </td>
                  <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-800">
                    {c.indicadores.liberdadePolitica.valor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const PoliticalLabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'simulador' | 'modelos' | 'governos' | 'dilemas'>(
    'simulador'
  );

  // Simulator controls
  const [progressividadeTributaria, setProgressividadeTributaria] = useState(55);
  const [investimentoPublicoInfra, setInvestimentoPublicoInfra] = useState(60);
  const [protecaoIndustrial, setProtecaoIndustrial] = useState(45);
  const [gastoSocialUniversal, setGastoSocialUniversal] = useState(60);
  const [desregulacaoMercado, setDesregulacaoMercado] = useState(50);
  const [transicaoVerde, setTransicaoVerde] = useState(65);

  const [simResult, setSimResult] = useState<{
    projecoes: {
      crescimentoAnualEstimado: number;
      variacaoGiniPontos: number;
      saldoFiscalVariacaoPIB: number;
      indiceComplexidadeIndustrial: number;
      indiceTransicaoClimatica: number;
      indiceLiberdadeNegocios: number;
    };
    hipotesesModelo: string[];
    limitacoesExplicitas: string[];
  } | null>(null);

  const [selectedDilemmaId, setSelectedDilemmaId] = useState(LAB_NATIONAL_DILEMMAS[0].id);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/lab/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        progressividadeTributaria,
        investimentoPublicoInfra,
        protecaoIndustrial,
        gastoSocialUniversal,
        desregulacaoMercado,
        transicaoVerde,
      }),
    })
      .then((r) => r.json())
      .then((data) => setSimResult(data))
      .catch(() => {});
    return () => controller.abort();
  }, [
    progressividadeTributaria,
    investimentoPublicoInfra,
    protecaoIndustrial,
    gastoSocialUniversal,
    desregulacaoMercado,
    transicaoVerde,
  ]);

  const applyPreset = (
    preset: 'nordico' | 'desenvolvimentista' | 'liberal' | 'ecossocialista'
  ) => {
    if (preset === 'nordico') {
      setProgressividadeTributaria(75);
      setInvestimentoPublicoInfra(65);
      setProtecaoIndustrial(25);
      setGastoSocialUniversal(85);
      setDesregulacaoMercado(75);
      setTransicaoVerde(80);
    } else if (preset === 'desenvolvimentista') {
      setProgressividadeTributaria(55);
      setInvestimentoPublicoInfra(85);
      setProtecaoIndustrial(75);
      setGastoSocialUniversal(60);
      setDesregulacaoMercado(40);
      setTransicaoVerde(60);
    } else if (preset === 'liberal') {
      setProgressividadeTributaria(25);
      setInvestimentoPublicoInfra(30);
      setProtecaoIndustrial(15);
      setGastoSocialUniversal(25);
      setDesregulacaoMercado(90);
      setTransicaoVerde(40);
    } else {
      setProgressividadeTributaria(88);
      setInvestimentoPublicoInfra(75);
      setProtecaoIndustrial(55);
      setGastoSocialUniversal(90);
      setDesregulacaoMercado(20);
      setTransicaoVerde(95);
    }
  };

  const selectedDilemma =
    LAB_NATIONAL_DILEMMAS.find((d) => d.id === selectedDilemmaId) || LAB_NATIONAL_DILEMMAS[0];

  return (
    <div className="space-y-8 pb-20">
      <div className="border-b border-slate-200 pb-6 space-y-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
            Módulo Experimental de Ciência Política Aplicada
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
            Laboratório Político
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl">
            Simule propostas de políticas públicas com hipóteses explícitas, compare modelos econômicos e governos históricos e examine como diferentes correntes respondem a dilemas nacionais concretos.
          </p>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            ['simulador', 'Simulador de Políticas Públicas'],
            ['modelos', 'Modelos Econômicos'],
            ['governos', 'Governos Históricos'],
            ['dilemas', 'Dilemas Nacionais por Corrente'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`px-4 py-2 text-xs font-medium rounded-md border transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === key
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
      {/* TAB 1: SIMULATOR */}
      {activeTab === 'simulador' && (
        <motion.div
          key="tab-simulador"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-6 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  <span>Parâmetros de Política Pública</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => applyPreset('nordico')}
                  className="px-2.5 py-1.5 text-[11px] font-semibold bg-cyan-50 border border-cyan-300 hover:bg-cyan-100 text-cyan-900 rounded cursor-pointer"
                >
                  Preset Nórdico
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('desenvolvimentista')}
                  className="px-2.5 py-1.5 text-[11px] font-semibold bg-blue-50 border border-blue-300 hover:bg-blue-100 text-blue-900 rounded cursor-pointer"
                >
                  Preset Desenvolvimentista
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('liberal')}
                  className="px-2.5 py-1.5 text-[11px] font-semibold bg-amber-50 border border-amber-300 hover:bg-amber-100 text-amber-900 rounded cursor-pointer"
                >
                  Preset Liberal de Mercado
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('ecossocialista')}
                  className="px-2.5 py-1.5 text-[11px] font-semibold bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 rounded cursor-pointer"
                >
                  Preset Ecossocialista
                </button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: 'Progressividade Tributária (Renda/Patrimônio)',
                    val: progressividadeTributaria,
                    set: setProgressividadeTributaria,
                  },
                  {
                    label: 'Investimento Público em Infraestrutura & P&D',
                    val: investimentoPublicoInfra,
                    set: setInvestimentoPublicoInfra,
                  },
                  {
                    label: 'Proteção Tarifária & Conteúdo Local Industrial',
                    val: protecaoIndustrial,
                    set: setProtecaoIndustrial,
                  },
                  {
                    label: 'Gasto Social Universal (Saúde/Educação)',
                    val: gastoSocialUniversal,
                    set: setGastoSocialUniversal,
                  },
                  {
                    label: 'Desregulação Empresarial & Abertura Comercial',
                    val: desregulacaoMercado,
                    set: setDesregulacaoMercado,
                  },
                  {
                    label: 'Meta de Descarbonização & Transição Verde',
                    val: transicaoVerde,
                    set: setTransicaoVerde,
                  },
                ].map((ctrl) => (
                  <div key={ctrl.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700 font-medium">{ctrl.label}</span>
                      <span className="font-mono tabular-nums text-blue-700 font-semibold">
                        {ctrl.val}/100
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={ctrl.val}
                      onChange={(e) => ctrl.set(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Outputs & Hypotheses */}
            <div className="lg:col-span-7 space-y-6">
              {simResult && (
                <>
                  <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5 shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-200 pb-3">
                      <FlaskConical className="w-4 h-4 text-rose-600" />
                      <span>Efeitos Estruturais Projetados (Simulação Paramétrica)</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-emerald-600 rounded-md p-4">
                        <div className="text-xs text-slate-600">Crescimento Real Est.</div>
                        <div
                          className={`font-mono tabular-nums text-2xl font-semibold mt-1 ${
                            simResult.projecoes.crescimentoAnualEstimado >= 2
                              ? 'text-emerald-700'
                              : simResult.projecoes.crescimentoAnualEstimado >= 1.2
                              ? 'text-cyan-700'
                              : 'text-amber-700'
                          }`}
                        >
                          {simResult.projecoes.crescimentoAnualEstimado}% a.a.
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-blue-600 rounded-md p-4">
                        <div className="text-xs text-slate-600">Variação Desigualdade (Gini)</div>
                        <div
                          className={`font-mono tabular-nums text-2xl font-semibold mt-1 ${
                            simResult.projecoes.variacaoGiniPontos <= 0
                              ? 'text-emerald-700'
                              : 'text-rose-700'
                          }`}
                        >
                          {simResult.projecoes.variacaoGiniPontos > 0
                            ? `+${simResult.projecoes.variacaoGiniPontos}`
                            : simResult.projecoes.variacaoGiniPontos}{' '}
                          pts
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-rose-600 rounded-md p-4">
                        <div className="text-xs text-slate-600">Pressão Fiscal (% PIB)</div>
                        <div
                          className={`font-mono tabular-nums text-2xl font-semibold mt-1 ${
                            simResult.projecoes.saldoFiscalVariacaoPIB > 1.5
                              ? 'text-rose-700'
                              : simResult.projecoes.saldoFiscalVariacaoPIB > 0
                              ? 'text-amber-700'
                              : 'text-emerald-700'
                          }`}
                        >
                          {simResult.projecoes.saldoFiscalVariacaoPIB > 0
                            ? `+${simResult.projecoes.saldoFiscalVariacaoPIB}`
                            : simResult.projecoes.saldoFiscalVariacaoPIB}
                          %
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-indigo-600 rounded-md p-4">
                        <div className="text-xs text-slate-600">Complexidade Industrial</div>
                        <div className="font-mono tabular-nums text-xl font-semibold text-indigo-700 mt-1">
                          {simResult.projecoes.indiceComplexidadeIndustrial}/100
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-teal-600 rounded-md p-4">
                        <div className="text-xs text-slate-600">Transição Climática</div>
                        <div className="font-mono tabular-nums text-xl font-semibold text-teal-700 mt-1">
                          {simResult.projecoes.indiceTransicaoClimatica}/100
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 border-t-4 border-t-amber-500 rounded-md p-4">
                        <div className="text-xs text-slate-600">Liberdade de Negócios</div>
                        <div className="font-mono tabular-nums text-xl font-semibold text-amber-700 mt-1">
                          {simResult.projecoes.indiceLiberdadeNegocios}/100
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-2 shadow-xs">
                      <h3 className="text-xs uppercase tracking-wider text-blue-700 font-semibold">
                        Hipóteses Explícitas do Modelo
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                        {simResult.hipotesesModelo.map((h) => (
                          <li key={h}>· {h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-2 shadow-xs">
                      <h3 className="text-xs uppercase tracking-wider text-rose-700 font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Limitações Analíticas
                      </h3>
                      <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                        {simResult.limitacoesExplicitas.map((l) => (
                          <li key={l}>· {l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* TAB 2: ECONOMIC MODELS */}
      {activeTab === 'modelos' && (
        <motion.div
          key="tab-modelos"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {LAB_ECONOMIC_MODELS.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200 border-t-4 border-t-blue-600 rounded-lg p-6 space-y-4 shadow-xs"
            >
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500">{m.paisesExemplo.join(' · ')}</div>
                <h2 className="font-display text-2xl font-semibold text-slate-950 mt-0.5">
                  {m.nome}
                </h2>
                <div className="text-xs text-blue-700 font-semibold mt-1">{m.eixoPrincipal}</div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-950">Mercado:</strong> {m.papelMercado}
                </p>
                <p>
                  <strong className="text-slate-950">Estado:</strong> {m.papelEstado}
                </p>
                <p>
                  <strong className="text-slate-950">Financiamento Social:</strong> {m.financiamentoSocial}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-xs">
                <div className="bg-emerald-50 border border-emerald-200 rounded-md p-3">
                  <div className="font-semibold text-emerald-800 mb-1">Pontos Fortes</div>
                  <ul className="space-y-1 text-slate-700">
                    {m.pontosFortes.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-md p-3">
                  <div className="font-semibold text-rose-800 mb-1">Riscos e Desafios</div>
                  <ul className="space-y-1 text-slate-700">
                    {m.riscosDesafios.map((r) => (
                      <li key={r}>· {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* TAB 3: HISTORICAL GOVERNMENTS */}
      {activeTab === 'governos' && (
        <motion.div
          key="tab-governos"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {LAB_HISTORICAL_GOVERNMENTS.map((gov) => (
            <div
              key={gov.id}
              className="bg-white border border-slate-200 border-t-4 border-t-purple-600 rounded-lg p-6 space-y-4 shadow-xs"
            >
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500">
                  {gov.pais} · {gov.periodo} · {gov.lideranca}
                </div>
                <h2 className="font-display text-2xl font-semibold text-slate-950 mt-0.5">
                  {gov.titulo}
                </h2>
                <div className="text-xs text-purple-700 font-semibold mt-1">{gov.corrente}</div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                <p>
                  <strong className="text-slate-950">Contexto:</strong> {gov.contexto}
                </p>
                <p>
                  <strong className="text-slate-950">Política Econômica:</strong> {gov.politicaEconomica}
                </p>
                <p>
                  <strong className="text-slate-950">Política Social:</strong> {gov.politicaSocial}
                </p>
                <p>
                  <strong className="text-slate-950">Legado:</strong> {gov.legado}
                </p>
                <p className="text-slate-700 bg-rose-50 border border-rose-200 rounded p-2.5">
                  <strong className="text-rose-800">Limites e Críticas:</strong> {gov.limitesECriticas}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* TAB 4: NATIONAL DILEMMAS */}
      {activeTab === 'dilemas' && (
        <motion.div
          key="tab-dilemas"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="flex flex-wrap gap-2">
            {LAB_NATIONAL_DILEMMAS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDilemmaId(d.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md border cursor-pointer ${
                  selectedDilemma.id === d.id
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {d.titulo}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 shadow-xs">
            <div className="border-b border-slate-200 pb-4 space-y-1">
              <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold">
                <Landmark className="w-4 h-4" />
                <span>Problema Nacional em Análise</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-slate-950">
                {selectedDilemma.titulo}
              </h2>
              <p className="text-sm text-slate-700">{selectedDilemma.contexto}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {selectedDilemma.respostasPorCorrente.map((resp) => (
                <div
                  key={resp.corrente}
                  className="bg-slate-50 border border-slate-200 border-t-4 border-t-cyan-600 rounded-md p-5 space-y-3"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-950">
                    {resp.corrente}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-blue-700">Diagnóstico:</strong> {resp.diagnostico}
                  </p>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 mb-1">
                      Medidas Propostas:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {resp.medidasConcretas.map((m) => (
                        <li key={m}>· {m}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-slate-700 border-t border-slate-200 pt-2">
                    <strong className="text-rose-700">Riscos apontados:</strong>{' '}
                    {resp.riscosReconhecidos}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
