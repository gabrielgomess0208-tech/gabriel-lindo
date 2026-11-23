import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import {
  GlossaryAndMethodologyView,
  HistoryView,
} from './components/ArchiveAndHistoryView.tsx';
import { CountriesView, PoliticalLabView } from './components/CountriesAndLabView.tsx';
import { IdeologiesView, PoliticiansView } from './components/DatabaseViews.tsx';
import { HomeView } from './components/HomeView.tsx';
import { QuizView } from './components/QuizView.tsx';
import { ResultView } from './components/ResultView.tsx';
import { COUNTRIES_DATA } from './data/countries.ts';
import {
  ACADEMIC_SOURCES_DATA,
  GLOSSARY_DATA,
} from './data/glossary_and_sources.ts';
import { IDEOLOGIES_DATA } from './data/ideologies.ts';
import { POLITICIANS_DATA } from './data/politicians.ts';
import {
  ALL_SERIOUS_QUESTIONS,
  buildQuizSessionQuestions,
} from './data/questions.ts';
import { buildQuizResult } from './shared/scoring.ts';
import {
  AcademicSource,
  CountryRecord,
  GlossaryTerm,
  IdeologyRecord,
  PoliticianRecord,
  QuizMode,
  QuizQuestion,
  QuizResult,
} from './shared/types.ts';

type AppPage =
  | 'home'
  | 'quiz'
  | 'result'
  | 'ideologies'
  | 'politicians'
  | 'countries'
  | 'lab'
  | 'glossary'
  | 'history';

interface QuizDraft {
  mode: QuizMode;
  questions: QuizQuestion[];
  answers: Record<string, number>;
  currentIndex: number;
}

const DRAFT_STORAGE_KEY = 'ralos_quiz_draft_v1';
const RESULTS_STORAGE_KEY = 'ralos_results_v1';

function readLocalResults(): QuizResult[] {
  try {
    const raw = localStorage.getItem(RESULTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalResults(results: QuizResult[]): void {
  try {
    localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(results.slice(0, 50)));
  } catch {
    // Ignore storage quota errors
  }
}

function readDraft(): QuizDraft | null {
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QuizDraft;
    if (
      parsed &&
      Array.isArray(parsed.questions) &&
      parsed.questions.length > 0 &&
      typeof parsed.answers === 'object'
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeDraft(draft: QuizDraft | null): void {
  try {
    if (!draft) {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } else {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
    }
  } catch {
    // Ignore storage quota errors
  }
}

export default function App() {
  const [page, setPage] = useState<AppPage>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Database state (seeded immediately, synced with Express backend)
  const [ideologies, setIdeologies] = useState<IdeologyRecord[]>(IDEOLOGIES_DATA);
  const [politicians, setPoliticians] = useState<PoliticianRecord[]>(POLITICIANS_DATA);
  const [countries, setCountries] = useState<CountryRecord[]>(COUNTRIES_DATA);
  const [glossary, setGlossary] = useState<GlossaryTerm[]>(GLOSSARY_DATA);
  const [sources, setSources] = useState<AcademicSource[]>(ACADEMIC_SOURCES_DATA);
  const [results, setResults] = useState<QuizResult[]>(() => readLocalResults());
  const [questionBankCount, setQuestionBankCount] = useState<number>(
    ALL_SERIOUS_QUESTIONS.length + 1
  );

  // Selection states for encyclopedia drilldowns
  const [selectedIdeologyId, setSelectedIdeologyId] = useState<string | null>(null);
  const [selectedPoliticianId, setSelectedPoliticianId] = useState<string | null>(null);
  const [activeResult, setActiveResult] = useState<QuizResult | null>(null);

  // Quiz session state
  const [draft, setDraft] = useState<QuizDraft | null>(() => readDraft());
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);

  // Bootstrap from server
  useEffect(() => {
    let active = true;
    fetch('/api/bootstrap')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data) return;
        if (Array.isArray(data.ideologies)) setIdeologies(data.ideologies);
        if (Array.isArray(data.politicians)) setPoliticians(data.politicians);
        if (Array.isArray(data.countries)) setCountries(data.countries);
        if (Array.isArray(data.glossary)) setGlossary(data.glossary);
        if (Array.isArray(data.sources)) setSources(data.sources);
        if (typeof data.questionBankCount === 'number') {
          setQuestionBankCount(data.questionBankCount);
        }
        if (Array.isArray(data.results)) {
          const local = readLocalResults();
          const mergedMap = new Map<string, QuizResult>();
          for (const r of [...data.results, ...local]) {
            if (r && r.id && !mergedMap.has(r.id)) {
              mergedMap.set(r.id, r);
            }
          }
          const merged = Array.from(mergedMap.values()).sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setResults(merged);
          writeLocalResults(merged);
        }
      })
      .catch(() => {
        // Fallback already active via static TS seeds + localStorage
      });

    return () => {
      active = false;
    };
  }, []);

  const navigate = useCallback((nextPage: AppPage) => {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleStartQuiz = useCallback(
    async (mode: QuizMode) => {
      let questions: QuizQuestion[] = [];
      try {
        const res = await fetch(`/api/questions?mode=${encodeURIComponent(mode)}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.questions) && data.questions.length > 0) {
            questions = data.questions;
          }
        }
      } catch {
        // Fallback handled below
      }
      if (questions.length === 0) {
        questions = buildQuizSessionQuestions(mode);
      }

      const nextDraft: QuizDraft = {
        mode,
        questions,
        answers: {},
        currentIndex: 0,
      };
      setDraft(nextDraft);
      writeDraft(nextDraft);
      navigate('quiz');
    },
    [navigate]
  );

  const handleResumeQuiz = useCallback(() => {
    if (draft) {
      navigate('quiz');
    }
  }, [draft, navigate]);

  const handleSelectAnswer = useCallback((questionId: string, optionValue: number) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const updated: QuizDraft = {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: optionValue,
        },
      };
      writeDraft(updated);
      return updated;
    });
  }, []);

  const handleChangeQuestionIndex = useCallback((index: number) => {
    setDraft((prev) => {
      if (!prev) return prev;
      const updated: QuizDraft = {
        ...prev,
        currentIndex: index,
      };
      writeDraft(updated);
      return updated;
    });
  }, []);

  const handleSubmitQuiz = useCallback(async () => {
    if (!draft) return;
    setIsSubmittingQuiz(true);
    let computed: QuizResult | null = null;

    try {
      const res = await fetch('/api/quiz/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: draft.mode,
          answers: draft.answers,
          sessionQuestions: draft.questions,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.result) {
          computed = data.result;
        }
      }
    } catch {
      // Fallback handled below
    }

    if (!computed) {
      computed = buildQuizResult(
        draft.mode,
        draft.questions,
        draft.answers,
        ideologies,
        politicians
      );
    }

    setResults((prev) => {
      const updated = [computed!, ...prev.filter((r) => r.id !== computed!.id)].slice(0, 50);
      writeLocalResults(updated);
      return updated;
    });
    setActiveResult(computed);
    setDraft(null);
    writeDraft(null);
    setIsSubmittingQuiz(false);
    navigate('result');
  }, [draft, ideologies, politicians, navigate]);

  const handleDeleteResult = useCallback(
    async (id: string) => {
      try {
        await fetch(`/api/results/${encodeURIComponent(id)}`, { method: 'DELETE' });
      } catch {
        // Ignore network error, clean local state
      }
      setResults((prev) => {
        const updated = prev.filter((r) => r.id !== id);
        writeLocalResults(updated);
        return updated;
      });
      if (activeResult?.id === id) {
        setActiveResult(null);
      }
    },
    [activeResult]
  );

  const handleAddIdeology = useCallback(async (payload: Partial<IdeologyRecord>) => {
    const res = await fetch('/api/ideologies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || 'Erro ao cadastrar ideologia.');
    }
    if (data?.ideology) {
      setIdeologies((prev) => [...prev, data.ideology]);
    }
  }, []);

  const handleAddPolitician = useCallback(async (payload: Partial<PoliticianRecord>) => {
    const res = await fetch('/api/politicians', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || 'Erro ao cadastrar personalidade.');
    }
    if (data?.politician) {
      setPoliticians((prev) => [...prev, data.politician]);
    }
  }, []);

  const handleOpenIdeologyDetail = useCallback(
    (id: string) => {
      setSelectedIdeologyId(id);
      navigate('ideologies');
    },
    [navigate]
  );

  const handleOpenPoliticianDetail = useCallback(
    (id: string) => {
      setSelectedPoliticianId(id);
      navigate('politicians');
    },
    [navigate]
  );

  const handleHeaderCTA = () => {
    if (draft) {
      handleResumeQuiz();
    } else if (page === 'home') {
      document.getElementById('modalidades-teste')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('home');
      setTimeout(() => {
        document.getElementById('modalidades-teste')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const navItems: { key: AppPage; label: string }[] = [
    { key: 'home', label: 'Início' },
    { key: 'ideologies', label: 'Ideologias' },
    { key: 'politicians', label: 'Políticos' },
    { key: 'countries', label: 'Países' },
    { key: 'lab', label: 'Laboratório' },
  ];

  const draftSummary = draft
    ? {
        mode: draft.mode,
        answeredCount: Object.keys(draft.answers).length,
        total: draft.questions.length,
      }
    : null;

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 flex flex-col">
      {/* Subtle Top National/Research Accent Rule */}
      <div className="h-1 w-full bg-gradient-to-r from-rose-600 via-cyan-500 to-blue-600" />

      {/* 3-Zone Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => {
              setSelectedIdeologyId(null);
              setSelectedPoliticianId(null);
              navigate('home');
            }}
            className="flex items-center gap-2.5 text-left cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="inline-flex h-4 w-1.5 rounded-xs bg-gradient-to-b from-rose-600 via-slate-300 to-blue-600" />
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              Ralo´s Politic
            </span>
          </button>

          {/* Zone 2: 5 Primary Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive =
                page === item.key ||
                (item.key === 'ideologies' && page === 'ideologies') ||
                (item.key === 'politicians' && page === 'politicians');
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    if (item.key === 'ideologies') setSelectedIdeologyId(null);
                    if (item.key === 'politicians') setSelectedPoliticianId(null);
                    navigate(item.key);
                  }}
                  className={`py-1 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 border-b-2 ${
                    isActive
                      ? 'text-blue-700 border-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleHeaderCTA}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs font-semibold rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
            >
              {draft ? 'Retomar Teste' : 'Fazer Teste'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-950 border border-slate-200 bg-slate-50 rounded-md cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  ...navItems,
                  { key: 'history' as AppPage, label: `Histórico (${results.length})` },
                  { key: 'glossary' as AppPage, label: 'Glossário & Fontes' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      if (item.key === 'ideologies') setSelectedIdeologyId(null);
                      if (item.key === 'politicians') setSelectedPoliticianId(null);
                      navigate(item.key);
                    }}
                    className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                      page === item.key
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleHeaderCTA();
                  }}
                  className="w-full mt-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-md cursor-pointer"
                >
                  {draft ? 'Retomar Teste em Andamento' : 'Escolher Modalidade de Teste'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
        {page === 'home' && (
          <HomeView
            counts={{
              ideologies: ideologies.length,
              politicians: politicians.length,
              countries: countries.length,
              questionsTotal: questionBankCount,
            }}
            savedDraft={draftSummary}
            recentResults={results}
            onStartQuiz={handleStartQuiz}
            onResumeQuiz={handleResumeQuiz}
            onNavigate={(dest) => {
              if (dest === 'ideologies') setSelectedIdeologyId(null);
              if (dest === 'politicians') setSelectedPoliticianId(null);
              navigate(dest);
            }}
            onViewResult={(res) => {
              setActiveResult(res);
              navigate('result');
            }}
          />
        )}

        {page === 'quiz' && draft && (
          <QuizView
            mode={draft.mode}
            questions={draft.questions}
            answers={draft.answers}
            currentIndex={draft.currentIndex}
            isSubmitting={isSubmittingQuiz}
            onSelectAnswer={handleSelectAnswer}
            onChangeIndex={handleChangeQuestionIndex}
            onSubmitQuiz={handleSubmitQuiz}
            onExitToHome={() => navigate('home')}
          />
        )}

        {page === 'result' && activeResult && (
          <ResultView
            result={activeResult}
            allResults={results}
            ideologies={ideologies}
            politicians={politicians}
            onRetake={() => {
              navigate('home');
              setTimeout(() => {
                document
                  .getElementById('modalidades-teste')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }, 120);
            }}
            onSelectIdeology={handleOpenIdeologyDetail}
            onSelectPolitician={handleOpenPoliticianDetail}
          />
        )}

        {page === 'ideologies' && (
          <IdeologiesView
            ideologies={ideologies}
            selectedId={selectedIdeologyId}
            onSelect={setSelectedIdeologyId}
            onAddIdeology={handleAddIdeology}
          />
        )}

        {page === 'politicians' && (
          <PoliticiansView
            politicians={politicians}
            selectedId={selectedPoliticianId}
            onSelect={setSelectedPoliticianId}
            onAddPolitician={handleAddPolitician}
          />
        )}

        {page === 'countries' && <CountriesView countries={countries} />}

        {page === 'lab' && <PoliticalLabView />}

        {page === 'glossary' && (
          <GlossaryAndMethodologyView glossary={glossary} sources={sources} />
        )}

        {page === 'history' && (
          <HistoryView
            results={results}
            ideologies={ideologies}
            politicians={politicians}
            onOpenResult={(res) => {
              setActiveResult(res);
              navigate('result');
            }}
            onDeleteResult={handleDeleteResult}
            onStartNewQuiz={() => {
              navigate('home');
              setTimeout(() => {
                document
                  .getElementById('modalidades-teste')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }, 120);
            }}
          />
        )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Editorial Research Footer */}
      <footer className="border-t border-slate-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-3.5 w-1 bg-gradient-to-b from-rose-600 via-slate-300 to-blue-600" />
              <span className="font-display text-base font-semibold text-slate-900">
                Ralo´s Politic
              </span>
              <span className="text-xs text-slate-500">· Descubra seu pensamento político.</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Plataforma internacional independente de análise de ideologias políticas, economia comparada e história do pensamento político.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <button
              type="button"
              onClick={() => navigate('history')}
              className="hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              Histórico de Testes ({results.length})
            </button>
            <button
              type="button"
              onClick={() => navigate('glossary')}
              className="hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              Glossário, Metodologia & Fontes
            </button>
            <button
              type="button"
              onClick={() => navigate('lab')}
              className="hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              Laboratório Político
            </button>
            <button
              type="button"
              onClick={() => navigate('countries')}
              className="hover:text-blue-700 font-medium transition-colors cursor-pointer"
            >
              Atlas de Países
            </button>
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}
