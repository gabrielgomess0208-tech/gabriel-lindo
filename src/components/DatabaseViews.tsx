import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  GitCompare,
  Plus,
  Search,
  X,
} from 'lucide-react';
import {
  ALL_DIMENSIONS,
  DIMENSION_META,
  computeSimilarityBreakdown,
} from '../shared/scoring.ts';
import { getIdeologyFamilyStyle } from '../shared/theme.ts';
import {
  DimensionVector,
  IdeologyRecord,
  PoliticianRecord,
} from '../shared/types.ts';
import { DimensionBipolarBars, DimensionRadarChart } from './Charts.tsx';

const DEFAULT_VECTOR: DimensionVector = {
  economia: 0,
  estado: 0,
  redistribuicao: 0,
  trabalho: 0,
  sociedade: 0,
  laicidade: 0,
  democracia: 50,
  liberdades: 30,
  nacionalismo: 0,
  internacional: 25,
  seguranca: 0,
  ecologia: 0,
};

interface IdeologiesViewProps {
  ideologies: IdeologyRecord[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onAddIdeology: (payload: Partial<IdeologyRecord>) => Promise<void>;
}

export const IdeologiesView: React.FC<IdeologiesViewProps> = ({
  ideologies,
  selectedId,
  onSelect,
  onAddIdeology,
}) => {
  const [query, setQuery] = useState('');
  const [familyFilter, setFamilyFilter] = useState('Todas');
  const [showAddModal, setShowAddModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Form states for expanding database
  const [nome, setNome] = useState('');
  const [familia, setFamilia] = useState('');
  const [periodoOrigem, setPeriodoOrigem] = useState('');
  const [resumo, setResumo] = useState('');
  const [principiosEconomicos, setPrincipiosEconomicos] = useState('');
  const [fontesText, setFontesText] = useState('');
  const [vec, setVec] = useState<DimensionVector>({ ...DEFAULT_VECTOR });

  const families = useMemo(
    () => ['Todas', ...Array.from(new Set(ideologies.map((i) => i.familia)))],
    [ideologies]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ideologies.filter((item) => {
      const matchesFamily = familyFilter === 'Todas' || item.familia === familyFilter;
      const matchesSearch =
        !q ||
        item.nome.toLowerCase().includes(q) ||
        item.resumo.toLowerCase().includes(q) ||
        item.principaisPensadores.some((p) => p.toLowerCase().includes(q));
      return matchesFamily && matchesSearch;
    });
  }, [ideologies, query, familyFilter]);

  const selected = ideologies.find((i) => i.id === selectedId);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!nome.trim() || !familia.trim() || !resumo.trim()) {
      setFormError('Preencha nome, família ideológica e resumo.');
      return;
    }
    setSaving(true);
    try {
      await onAddIdeology({
        nome,
        familia,
        periodoOrigem,
        resumo,
        principiosEconomicos,
        fontes: fontesText
          ? fontesText.split(';').map((s) => s.trim()).filter(Boolean)
          : [],
        vector: vec,
      });
      setShowAddModal(false);
      setNome('');
      setFamilia('');
      setResumo('');
      setPrincipiosEconomicos('');
      setFontesText('');
    } catch (err: any) {
      setFormError(err?.message || 'Não foi possível salvar.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {selected ? (() => {
        const fam = getIdeologyFamilyStyle(selected.familia);
        return (
          <motion.div
            key={`ideology-detail-${selected.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 pb-20"
          >
            <button
              type="button"
              onClick={() => onSelect(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Índice de Ideologias
            </button>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white border border-slate-200 border-t-4 ${fam.topBorder} rounded-lg p-7 sm:p-9 space-y-6 shadow-sm`}
            >
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="text-xs text-slate-500">
              <span className={`${fam.text} font-semibold`}>{selected.familia}</span>
              <span aria-hidden="true"> · </span>
              <span>{selected.periodoOrigem}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
              {selected.nome}
            </h1>
            <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
              {selected.resumo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Origem Histórica
                </h2>
                <p>{selected.origemHistorica}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Princípios Econômicos
                </h2>
                <p>{selected.principiosEconomicos}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Princípios Sociais
                </h2>
                <p>{selected.principiosSociais}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Visão sobre o Estado
                </h2>
                <p>{selected.visaoEstado}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Relação com a Democracia
                </h2>
                <p>{selected.relacaoDemocracia}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Diferenças em Relação a Outras Correntes
                </h2>
                <p>{selected.diferencasCorrentes}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Perfil Multidimensional de Referência
                </h3>
                <DimensionRadarChart
                  primaryVector={selected.vector}
                  primaryLabel={selected.nome}
                />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Principais Pensadores e Expoentes
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-800">
                    {selected.principaisPensadores.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                </div>

                {selected.exemplosHistoricos.length > 0 && (
                  <div className="border-t border-slate-200 pt-4">
                    <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Exemplos Históricos
                    </h3>
                    <ul className="space-y-1 text-xs text-slate-700 leading-relaxed">
                      {selected.exemplosHistoricos.map((ex) => (
                        <li key={ex}>· {ex}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Fontes Acadêmicas
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-600 leading-relaxed">
                    {selected.fontes.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200 pt-6"
          >
            <h3 className="font-display text-xl font-semibold text-slate-950 mb-4">
              Decomposição nos 12 Pilares Analíticos
            </h3>
            <DimensionBipolarBars vector={selected.vector} />
          </motion.div>
        </motion.div>
      </motion.div>
        );
      })() : (
    <motion.div
      key="ideology-list"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8 pb-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-semibold">
            Enciclopédia Comparada · {ideologies.length} Correntes Catalogadas
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
            Ideologias e Correntes Políticas
          </h1>
          <p className="text-sm text-slate-600">
            Consulte origens históricas, fundamentos econômicos, visão sobre o Estado e relação com a democracia de correntes políticas clássicas e contemporâneas.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <Plus className="w-4 h-4" />
          Expandir Base de Ideologias
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar ideologia, pensador ou conceito..."
            className="w-full bg-white border border-slate-300 rounded-md pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
          />
        </div>
        <select
          value={familyFilter}
          onChange={(e) => setFamilyFilter(e.target.value)}
          className="bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
        >
          {families.map((fam) => (
            <option key={fam} value={fam}>
              {fam === 'Todas' ? 'Todas as famílias ideológicas' : fam}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => {
          const fam = getIdeologyFamilyStyle(item.familia);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`text-left bg-white border border-slate-200 border-t-4 ${fam.topBorder} hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 rounded-lg p-6 flex flex-col justify-between space-y-4 transition-all duration-200 cursor-pointer`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className={`w-2 h-2 rounded-full ${fam.dot} shrink-0`} />
                  <span className={`${fam.text} font-semibold`}>{item.familia}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{item.periodoOrigem}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-slate-950">
                  {item.nome}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.resumo}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate max-w-[70%]">
                  {item.principaisPensadores.slice(0, 2).join(', ')}
                </span>
                <span className={`${fam.text} font-semibold shrink-0`}>Ficha →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Add Ideology Modal */}
      <AnimatePresence>
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <motion.form
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleCreate}
            className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-display text-xl font-semibold text-slate-950">
                Cadastrar Nova Corrente Ideológica
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Nome da Ideologia *</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="Ex.: Georgismo"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Família Política *</label>
                <input
                  value={familia}
                  onChange={(e) => setFamilia(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="Ex.: Liberalismo Agrário"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">Período de Origem</label>
              <input
                value={periodoOrigem}
                onChange={(e) => setPeriodoOrigem(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                placeholder="Ex.: Final do século XIX (Henry George, 1879)"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">Resumo Conceitual *</label>
              <textarea
                rows={3}
                value={resumo}
                onChange={(e) => setResumo(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">Princípios Econômicos</label>
              <textarea
                rows={2}
                value={principiosEconomicos}
                onChange={(e) => setPrincipiosEconomicos(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">
                Fontes Bibliográficas (separadas por ponto e vírgula)
              </label>
              <input
                value={fontesText}
                onChange={(e) => setFontesText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                placeholder="George, Henry. Progresso e Pobreza (1879)"
              />
            </div>

            <div className="border-t border-slate-200 pt-3 space-y-2">
              <div className="text-xs font-semibold text-slate-900">
                Perfil nos 12 Pilares (-100 a +100)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ALL_DIMENSIONS.map((dim) => (
                  <div key={dim} className="text-xs">
                    <div className="flex justify-between text-slate-700 mb-1">
                      <span>{DIMENSION_META[dim].shortLabel}</span>
                      <span className="font-mono tabular-nums font-semibold">{vec[dim]}</span>
                    </div>
                    <input
                      type="range"
                      min={-100}
                      max={100}
                      step={5}
                      value={vec[dim]}
                      onChange={(e) =>
                        setVec((prev) => ({ ...prev, [dim]: Number(e.target.value) }))
                      }
                      className="w-full accent-blue-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs border border-slate-300 text-slate-700 rounded-md cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer"
              >
                {saving ? 'Salvando...' : 'Salvar na Base'}
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
      )}
    </AnimatePresence>
  );
};

interface PoliticiansViewProps {
  politicians: PoliticianRecord[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onAddPolitician: (payload: Partial<PoliticianRecord>) => Promise<void>;
}

export const PoliticiansView: React.FC<PoliticiansViewProps> = ({
  politicians,
  selectedId,
  onSelect,
  onAddPolitician,
}) => {
  const [query, setQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('Todos');
  const [eraFilter, setEraFilter] = useState('Todas');
  const [compareMode, setCompareMode] = useState(false);
  const [compareA, setCompareA] = useState<string>(politicians[0]?.id || '');
  const [compareB, setCompareB] = useState<string>(politicians[2]?.id || '');
  const [showAddModal, setShowAddModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // Add form state
  const [nome, setNome] = useState('');
  const [pais, setPais] = useState('');
  const [periodoHistorico, setPeriodoHistorico] = useState('');
  const [partido, setPartido] = useState('');
  const [corrente, setCorrente] = useState('');
  const [bio, setBio] = useState('');
  const [fontesText, setFontesText] = useState('');
  const [vec, setVec] = useState<DimensionVector>({ ...DEFAULT_VECTOR });

  const countries = useMemo(
    () => ['Todos', ...Array.from(new Set(politicians.map((p) => p.pais))).sort()],
    [politicians]
  );

  const eras = ['Todas', 'Século XIX', 'Início do Século XX', 'Guerra Fria', 'Contemporâneo'];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return politicians.filter((p) => {
      const mCountry = countryFilter === 'Todos' || p.pais === countryFilter;
      const mEra = eraFilter === 'Todas' || p.era === eraFilter;
      const mQuery =
        !q ||
        p.nome.toLowerCase().includes(q) ||
        p.correntePrincipal.toLowerCase().includes(q) ||
        p.partidoOuMovimento.toLowerCase().includes(q) ||
        p.pais.toLowerCase().includes(q);
      return mCountry && mEra && mQuery;
    });
  }, [politicians, query, countryFilter, eraFilter]);

  const selected = politicians.find((p) => p.id === selectedId);
  const polA = politicians.find((p) => p.id === compareA) || politicians[0];
  const polB = politicians.find((p) => p.id === compareB) || politicians[1];

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!nome.trim() || !pais.trim() || !bio.trim()) {
      setFormError('Preencha nome, país e biografia resumida.');
      return;
    }
    setSaving(true);
    try {
      await onAddPolitician({
        nome,
        pais,
        periodoHistorico,
        partidoOuMovimento: partido,
        correntePrincipal: corrente,
        biografiaResumida: bio,
        fontesBibliograficas: fontesText
          ? fontesText.split(';').map((s) => s.trim()).filter(Boolean)
          : [],
        vector: vec,
      });
      setShowAddModal(false);
      setNome('');
      setPais('');
      setBio('');
    } catch (err: any) {
      setFormError(err?.message || 'Erro ao salvar registro.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {selected ? (() => {
        const fam = getIdeologyFamilyStyle(selected.correntePrincipal);
        return (
          <motion.div
            key={`politician-detail-${selected.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 pb-20"
          >
            <button
              type="button"
              onClick={() => onSelect(null)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Catálogo de Políticos e Pensadores
            </button>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.34, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white border border-slate-200 border-t-4 ${fam.topBorder} rounded-lg p-7 sm:p-9 space-y-8 shadow-sm`}
            >
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <div className="text-xs text-slate-500">
              <span>{selected.pais}</span>
              <span aria-hidden="true"> · </span>
              <span>{selected.periodoHistorico}</span>
              <span aria-hidden="true"> · </span>
              <span>{selected.partidoOuMovimento}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
              {selected.nome}
            </h1>
            <p className={`text-sm ${fam.text} font-semibold`}>
              {selected.correntePrincipal} · {selected.categoria}
            </p>
            <p className="text-base text-slate-700 leading-relaxed max-w-3xl pt-2">
              {selected.biografiaResumida}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Principais Ideias
                </h2>
                <ul className="space-y-1.5">
                  {selected.principaisIdeias.map((id) => (
                    <li key={id}>· {id}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Modelo Econômico Defendido
                </h2>
                <p>{selected.modeloEconomico}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Visão sobre o Estado
                </h2>
                <p>{selected.visaoEstado}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Posicionamento Social
                </h2>
                <p>{selected.posicionamentoSocial}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Política Externa
                </h2>
                <p>{selected.politicaExterna}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-950 mb-2">
                  Contradições e Mudanças ao Longo da Vida
                </h2>
                <p className="text-slate-800">{selected.contradicoesEMudancas}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Avaliação Multidimensional Contextual
                </h3>
                <DimensionRadarChart
                  primaryVector={selected.vector}
                  primaryLabel={selected.nome}
                />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4">
                {selected.principaisRealizacoes.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Principais Realizações e Obras
                    </h3>
                    <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
                      {selected.principaisRealizacoes.map((r) => (
                        <li key={r}>· {r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Fontes Bibliográficas
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                    {selected.fontesBibliograficas.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200 pt-6"
          >
            <DimensionBipolarBars vector={selected.vector} />
          </motion.div>
        </motion.div>
      </motion.div>
        );
      })() : (
    <motion.div
      key="politician-list"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8 pb-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
            Acervo Histórico Internacional · {politicians.length} Personalidades
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-slate-950">
            Políticos, Estadistas e Pensadores
          </h1>
          <p className="text-sm text-slate-600">
            Perfis históricos avaliados em múltiplas dimensões sem reduções binárias, incluindo realizações, contexto de época, contradições e referências bibliográficas.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCompareMode((v) => !v)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 border text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              compareMode
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
            }`}
          >
            <GitCompare className="w-4 h-4" />
            {compareMode ? 'Ocultar Comparador' : 'Comparar Dois Políticos'}
          </button>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Cadastrar Personalidade
          </button>
        </div>
      </div>

      {/* Side-by-Side Politician Comparison */}
      <AnimatePresence>
      {compareMode && polA && polB && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-blue-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <h2 className="font-display text-2xl font-semibold text-slate-950">
              Comparação Multidimensional Direta
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={compareA}
                onChange={(e) => setCompareA(e.target.value)}
                className="bg-slate-50 border border-blue-500 rounded-md px-3 py-1.5 text-xs text-slate-900"
              >
                {politicians.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome} ({p.pais})
                  </option>
                ))}
              </select>
              <span className="text-xs text-slate-500">vs.</span>
              <select
                value={compareB}
                onChange={(e) => setCompareB(e.target.value)}
                className="bg-slate-50 border border-rose-500 rounded-md px-3 py-1.5 text-xs text-slate-900"
              >
                {politicians.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome} ({p.pais})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(() => {
            const sim = computeSimilarityBreakdown(polA.vector, polB.vector);
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <DimensionRadarChart
                    primaryVector={polA.vector}
                    primaryLabel={polA.nome}
                    secondaryVector={polB.vector}
                    secondaryLabel={polB.nome}
                  />
                </div>
                <div className="lg:col-span-7 space-y-5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 rounded-md p-4 text-xs">
                    <div>
                      <span className="text-slate-600">Afinidade Global</span>
                      <div className="font-mono tabular-nums text-lg text-blue-700 font-semibold">
                        {sim.overall}%
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Econômica</span>
                      <div className="font-mono tabular-nums text-lg text-emerald-700 font-semibold">
                        {sim.breakdown.semelhancaEconomica}%
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Social</span>
                      <div className="font-mono tabular-nums text-lg text-violet-700 font-semibold">
                        {sim.breakdown.semelhancaSocial}%
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-600">Institucional</span>
                      <div className="font-mono tabular-nums text-lg text-sky-700 font-semibold">
                        {sim.breakdown.semelhancaInstitucional}%
                      </div>
                    </div>
                  </div>
                  <DimensionBipolarBars
                    vector={polA.vector}
                    compareVector={polB.vector}
                    compareLabel={polB.nome}
                  />
                </div>
              </div>
            );
          })()}
        </motion.div>
      )}
      </AnimatePresence>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, país, partido ou corrente..."
            className="w-full bg-white border border-slate-300 rounded-md pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
          />
        </div>
        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          className="bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900"
        >
          {countries.map((c) => (
            <option key={c} value={c}>
              {c === 'Todos' ? 'Todos os países' : c}
            </option>
          ))}
        </select>
        <select
          value={eraFilter}
          onChange={(e) => setEraFilter(e.target.value)}
          className="bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900"
        >
          {eras.map((er) => (
            <option key={er} value={er}>
              {er === 'Todas' ? 'Todas as épocas' : er}
            </option>
          ))}
        </select>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((pol) => {
          const fam = getIdeologyFamilyStyle(pol.correntePrincipal);
          return (
            <button
              key={pol.id}
              type="button"
              onClick={() => onSelect(pol.id)}
              className={`text-left bg-white border border-slate-200 border-t-4 ${fam.topBorder} hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 rounded-lg p-6 flex flex-col justify-between space-y-4 transition-all duration-200 cursor-pointer`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className={`w-2 h-2 rounded-full ${fam.dot} shrink-0`} />
                  <span>{pol.pais} · {pol.era}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-slate-950">
                  {pol.nome}
                </h2>
                <div className={`text-xs ${fam.text} font-semibold`}>
                  {pol.correntePrincipal}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                  {pol.biografiaResumida}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate max-w-[70%]">{pol.partidoOuMovimento}</span>
                <span className={`${fam.text} font-semibold shrink-0`}>Biografia →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Add Politician Modal */}
      <AnimatePresence>
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <motion.form
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleCreate}
            className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-display text-xl font-semibold text-slate-950">
                Cadastrar Político ou Pensador na Base
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-500 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3 text-xs text-rose-800 bg-rose-50 border border-rose-200 rounded">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Nome Completo *</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="Ex.: Ulysses Guimarães"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">País *</label>
                <input
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="Ex.: Brasil"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Período Histórico</label>
                <input
                  value={periodoHistorico}
                  onChange={(e) => setPeriodoHistorico(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="1916–1992"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Partido / Movimento</label>
                <input
                  value={partido}
                  onChange={(e) => setPartido(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="MDB / PMDB"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-700 font-medium mb-1">Corrente Principal</label>
                <input
                  value={corrente}
                  onChange={(e) => setCorrente(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
                  placeholder="Constitucionalismo Democrático"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">Biografia Resumida *</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-medium mb-1">
                Fontes Bibliográficas (separadas por ponto e vírgula)
              </label>
              <input
                value={fontesText}
                onChange={(e) => setFontesText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900"
              />
            </div>

            <div className="border-t border-slate-200 pt-3 space-y-2">
              <div className="text-xs font-semibold text-slate-900">
                Posicionamento nos 12 Pilares (-100 a +100)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ALL_DIMENSIONS.map((dim) => (
                  <div key={dim} className="text-xs">
                    <div className="flex justify-between text-slate-700 mb-1">
                      <span>{DIMENSION_META[dim].shortLabel}</span>
                      <span className="font-mono tabular-nums font-semibold">{vec[dim]}</span>
                    </div>
                    <input
                      type="range"
                      min={-100}
                      max={100}
                      step={5}
                      value={vec[dim]}
                      onChange={(e) =>
                        setVec((prev) => ({ ...prev, [dim]: Number(e.target.value) }))
                      }
                      className="w-full accent-blue-600"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-xs border border-slate-300 text-slate-700 rounded-md cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer"
              >
                {saving ? 'Salvando...' : 'Salvar Personalidade'}
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
      )}
    </AnimatePresence>
  );
};
