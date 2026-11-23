import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Grid,
  HelpCircle,
  X,
} from 'lucide-react';
import { SERIOUS_LIKERT_OPTIONS } from '../data/questions.ts';
import { AREA_STYLE } from '../shared/theme.ts';
import { QuizMode, QuizQuestion } from '../shared/types.ts';

interface QuizViewProps {
  mode: QuizMode;
  questions: QuizQuestion[];
  answers: Record<string, number>;
  currentIndex: number;
  isSubmitting: boolean;
  onSelectAnswer: (questionId: string, optionValue: number) => void;
  onChangeIndex: (index: number) => void;
  onSubmitQuiz: () => void;
  onExitToHome: () => void;
}

const LIKERT_COLOR_STYLES: Record<
  number,
  { dot: string; idle: string; selected: string; check: string }
> = {
  5: {
    dot: 'bg-emerald-600',
    idle: 'bg-emerald-50/60 border-emerald-200 text-slate-800 hover:border-emerald-400 hover:bg-emerald-100/70 hover:text-emerald-950',
    selected: 'bg-emerald-100 border-emerald-600 text-emerald-950 font-semibold shadow-xs',
    check: 'text-emerald-700',
  },
  4: {
    dot: 'bg-sky-600',
    idle: 'bg-sky-50/60 border-sky-200 text-slate-800 hover:border-sky-400 hover:bg-sky-100/70 hover:text-sky-950',
    selected: 'bg-sky-100 border-sky-600 text-sky-950 font-semibold shadow-xs',
    check: 'text-sky-700',
  },
  3: {
    dot: 'bg-slate-500',
    idle: 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-950',
    selected: 'bg-slate-200/80 border-slate-500 text-slate-950 font-semibold',
    check: 'text-slate-700',
  },
  2: {
    dot: 'bg-amber-500',
    idle: 'bg-amber-50/60 border-amber-200 text-slate-800 hover:border-amber-400 hover:bg-amber-100/70 hover:text-amber-950',
    selected: 'bg-amber-100 border-amber-600 text-amber-950 font-semibold shadow-xs',
    check: 'text-amber-700',
  },
  1: {
    dot: 'bg-rose-600',
    idle: 'bg-rose-50/60 border-rose-200 text-slate-800 hover:border-rose-400 hover:bg-rose-100/70 hover:text-rose-950',
    selected: 'bg-rose-100 border-rose-600 text-rose-950 font-semibold shadow-xs',
    check: 'text-rose-700',
  },
};

export const QuizView: React.FC<QuizViewProps> = ({
  mode,
  questions,
  answers,
  currentIndex,
  isSubmitting,
  onSelectAnswer,
  onChangeIndex,
  onSubmitQuiz,
  onExitToHome,
}) => {
  const [showEntenda, setShowEntenda] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showNavigator, setShowNavigator] = useState(false);
  const advanceTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
    };
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const total = questions.length;
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const progressPct = Math.round((answeredCount / total) * 100);
  const unansweredSerious = questions.filter(
    (q) => !q.isHumor && answers[q.id] === undefined
  ).length;

  const currentAnswer = answers[currentQuestion.id];
  const isLast = currentIndex === total - 1;
  const areaStyle = AREA_STYLE[currentQuestion.area];

  const modeLabel =
    mode === 'rapido'
      ? 'Teste Rápido · 36 Perguntas'
      : mode === 'completo'
      ? 'Teste Completo · 72 Perguntas'
      : 'Teste Extensivo · 240 Perguntas';

  const handleOptionClick = (val: number) => {
    onSelectAnswer(currentQuestion.id, val);
    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
    }
    const targetNext = currentIndex + 1;
    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;
      setShowEntenda(false);
      if (targetNext < total) {
        onChangeIndex(targetNext);
      } else {
        setShowConfirmModal(true);
      }
    }, 180);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 space-y-6">
      {/* Top Distraction-Free Progress Header */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 font-medium">{modeLabel}</p>
            <h2 className="font-display text-lg sm:text-xl font-semibold text-slate-900">
              Pergunta{' '}
              <span className="font-mono tabular-nums text-blue-700">
                {currentIndex + 1}
              </span>{' '}
              de <span className="font-mono tabular-nums">{total}</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tabular-nums text-emerald-700 font-semibold">
              {answeredCount}/{total} respondidas ({progressPct}%)
            </span>
            <button
              type="button"
              onClick={() => setShowNavigator((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-300 hover:border-blue-500 bg-slate-50 text-slate-800 rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <Grid className="w-3.5 h-3.5 text-blue-600" />
              Mapa
            </button>
            <button
              type="button"
              onClick={onExitToHome}
              className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-950 border border-transparent hover:border-slate-300 rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Pausar e Sair
            </button>
          </div>
        </div>

        <div className="w-full h-2.5 bg-slate-100 rounded-sm overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Navigator Drawer */}
      <AnimatePresence>
      {showNavigator && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-200 rounded-lg p-5 space-y-3 shadow-xs"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="font-semibold text-slate-900">
                Navegação Rápida
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block" /> Atual
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-100 border border-emerald-500 inline-block" /> Respondida
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-50 border border-slate-300 inline-block" /> Em aberto
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowNavigator(false)}
              className="text-slate-500 hover:text-slate-900 cursor-pointer"
              aria-label="Fechar mapa de perguntas"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-12 gap-1.5 max-h-56 overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const isAns = answers[q.id] !== undefined;
              const isCurr = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    onChangeIndex(idx);
                    setShowEntenda(false);
                  }}
                  className={`py-1.5 text-[11px] font-mono tabular-nums rounded border transition-colors cursor-pointer ${
                    isCurr
                      ? 'bg-blue-600 border-blue-700 text-white font-semibold'
                      : isAns
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-800 hover:bg-emerald-100 font-medium'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-400'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Main Question Card */}
      <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white border border-slate-200 rounded-lg p-6 sm:p-9 space-y-8 shadow-sm border-t-4 ${
          currentQuestion.isHumor ? 'border-t-rose-500' : ''
        }`}
        style={
          !currentQuestion.isHumor
            ? { borderTopColor: areaStyle.accentHex }
            : undefined
        }
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            {currentQuestion.isHumor ? (
              <>
                <span className="w-2 h-2 rounded-full bg-rose-600 inline-block" />
                <span className="text-rose-700 font-semibold">Pergunta Aleatória Especial</span>
              </>
            ) : (
              <>
                <span className={`w-2 h-2 rounded-full ${areaStyle.dot} inline-block`} />
                <span className={`${areaStyle.text} font-semibold`}>{currentQuestion.area}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-600">{currentQuestion.subtopic}</span>
              </>
            )}
          </div>

          {!currentQuestion.isHumor && currentQuestion.entenda && (
            <button
              type="button"
              onClick={() => setShowEntenda(true)}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-800 text-xs font-semibold tracking-wider rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              ENTENDA
            </button>
          )}
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-slate-950 leading-snug">
          {currentQuestion.statement}
        </h3>

        {/* Options */}
        {currentQuestion.isHumor && currentQuestion.customOptions ? (
          <div className="space-y-3">
            {currentQuestion.customOptions.map((optText, idx) => {
              const val = idx + 1;
              const selected = currentAnswer === val;
              return (
                <button
                  key={optText}
                  type="button"
                  onClick={() => handleOptionClick(val)}
                  className={`w-full text-left px-5 py-4 rounded-md border text-sm sm:text-base transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    selected
                      ? 'bg-rose-100 border-rose-600 text-rose-950 font-semibold'
                      : 'bg-rose-50/50 border-rose-200 text-slate-800 hover:border-rose-400 hover:bg-rose-100/60'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                    <span className="font-mono tabular-nums text-slate-500">{val}.</span>
                    <span>{optText}</span>
                  </span>
                  {selected && <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {SERIOUS_LIKERT_OPTIONS.map((opt, idx) => {
              const selected = currentAnswer === opt.value;
              const style = LIKERT_COLOR_STYLES[opt.value] || LIKERT_COLOR_STYLES[3];
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleOptionClick(opt.value)}
                  className={`w-full text-left px-5 py-4 rounded-md border text-sm sm:text-base transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    selected ? style.selected : style.idle
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full ${style.dot} shrink-0`} />
                    <span className="font-mono tabular-nums text-slate-500">{idx + 1}.</span>
                    <span>{opt.label}</span>
                  </span>
                  {selected && <CheckCircle2 className={`w-4 h-4 ${style.check} shrink-0`} />}
                </button>
              );
            })}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              onChangeIndex(Math.max(0, currentIndex - 1));
              setShowEntenda(false);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-slate-300 bg-white rounded-md text-slate-700 hover:border-slate-400 hover:text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          <div className="flex items-center gap-3">
            {!isLast ? (
              <button
                type="button"
                onClick={() => {
                  onChangeIndex(Math.min(total - 1, currentIndex + 1));
                  setShowEntenda(false);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                {currentAnswer !== undefined ? 'Avançar' : 'Pular por enquanto'}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Concluir Questionário
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}

            {answeredCount >= Math.ceil(total * 0.6) && !isLast && (
              <button
                type="button"
                onClick={() => setShowConfirmModal(true)}
                className="px-4 py-2.5 text-xs font-medium border border-slate-300 hover:border-rose-500 text-slate-700 hover:text-rose-700 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Finalizar Teste
              </button>
            )}
          </div>
        </div>
      </motion.div>
      </AnimatePresence>

      {/* ENTENDA Modal */}
      <AnimatePresence>
      {showEntenda && currentQuestion.entenda && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="entenda-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto shadow-xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold">
                  <BookOpen className="w-4 h-4" />
                  <span>Explicação Imparcial · {currentQuestion.area}</span>
                </div>
                <h4 id="entenda-title" className="font-display text-xl font-semibold text-slate-950">
                  Entenda: {currentQuestion.subtopic}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowEntenda(false)}
                className="text-slate-500 hover:text-slate-900 p-1 cursor-pointer"
                aria-label="Fechar explicação"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  O que a pergunta significa
                </h5>
                <p>{currentQuestion.entenda.oQueSignifica}</p>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  Conceito político ou econômico em discussão
                </h5>
                <p className="text-slate-950 font-semibold">{currentQuestion.entenda.conceito}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4">
                  <div className="text-xs font-semibold text-emerald-800 mb-1.5">
                    O que representa CONCORDAR
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentQuestion.entenda.concordarRepresenta}
                  </p>
                </div>

                <div className="bg-rose-50 border border-rose-200 rounded-md p-4">
                  <div className="text-xs font-semibold text-rose-800 mb-1.5">
                    O que representa DISCORDAR
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentQuestion.entenda.discordarRepresenta}
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  Exemplos históricos e contemporâneos
                </h5>
                <p className="text-slate-700">{currentQuestion.entenda.exemplosHistoricos}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowEntenda(false)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Voltar à Pergunta
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Confirmation Before Finishing Modal */}
      <AnimatePresence>
      {showConfirmModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-200 rounded-lg max-w-md w-full p-6 space-y-5 shadow-xl"
          >
            <h4 className="font-display text-xl font-semibold text-slate-950">
              Confirmar Finalização do Questionário
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              Você respondeu{' '}
              <strong className="text-slate-950 font-mono tabular-nums">
                {answeredCount} de {total}
              </strong>{' '}
              perguntas desta modalidade.
            </p>
            {unansweredSerious > 0 && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-md text-xs text-rose-900 leading-relaxed">
                Atenção: há{' '}
                <strong className="font-mono tabular-nums">{unansweredSerious}</strong>{' '}
                perguntas sérias em branco. Perguntas não respondidas reduzem o índice de confiança estatística do relatório final.
              </div>
            )}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-medium border border-slate-300 hover:border-slate-400 text-slate-700 rounded-md cursor-pointer"
              >
                Revisar Respostas
              </button>
              <button
                type="button"
                disabled={isSubmitting || answeredCount === 0}
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitQuiz();
                }}
                className="px-5 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-md cursor-pointer"
              >
                {isSubmitting ? 'Calculando Análise...' : 'Gerar Relatório Completo'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
