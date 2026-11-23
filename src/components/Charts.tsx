import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ALL_DIMENSIONS,
  DIMENSION_META,
  normalizeVector,
} from '../shared/scoring.ts';
import {
  DIMENSION_POLE_THEME,
  SPECTRUM_ORDER,
  SPECTRUM_STYLE,
  getIdeologyFamilyStyle,
} from '../shared/theme.ts';
import {
  DimensionKey,
  DimensionVector,
  IdeologyRecord,
  PoliticianRecord,
  SpectrumClassification,
} from '../shared/types.ts';

const SPECTRUM_SHORT_LABELS: Record<string, string> = {
  'Extrema-Esquerda': 'Ext. Esq',
  Esquerda: 'Esq',
  'Centro-Esquerda': 'C-Esq',
  Centro: 'Centro',
  'Centro-Direita': 'C-Dir',
  Direita: 'Dir',
  'Extrema-Direita': 'Ext. Dir',
};

interface SpectrumPositionBarProps {
  spectrum: SpectrumClassification;
  compareSpectrum?: SpectrumClassification;
  compareLabel?: string;
}

export const SpectrumPositionBar: React.FC<SpectrumPositionBarProps> = ({
  spectrum,
  compareSpectrum,
  compareLabel = 'Comparado',
}) => {
  const activeStyle = SPECTRUM_STYLE[spectrum.label];
  const markerPct = Math.max(3, Math.min(97, ((spectrum.score + 100) / 200) * 100));
  const compPct = compareSpectrum
    ? Math.max(3, Math.min(97, ((compareSpectrum.score + 100) / 200) * 100))
    : undefined;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-slate-600 font-medium">
          Espectro Político Completo (7 Faixas)
        </span>
        <div className="flex flex-wrap items-center gap-3 font-mono tabular-nums">
          <span className={`font-bold ${activeStyle.text}`}>
            Você: {spectrum.label} ({spectrum.score > 0 ? `+${spectrum.score}` : spectrum.score})
          </span>
          {compareSpectrum && (
            <span className="font-semibold text-slate-700">
              {compareLabel}: {compareSpectrum.label} (
              {compareSpectrum.score > 0 ? `+${compareSpectrum.score}` : compareSpectrum.score})
            </span>
          )}
        </div>
      </div>

      {/* 7-band color bar with floating pointer */}
      <div className="relative pt-7 pb-1">
        {/* Pointer badge above bar */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 -translate-x-1/2 flex flex-col items-center z-20"
          style={{ left: `${markerPct}%` }}
        >
          <span
            className="px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-sm whitespace-nowrap"
            style={{ backgroundColor: activeStyle.hex }}
          >
            Você
          </span>
          <span
            className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent"
            style={{ borderTopColor: activeStyle.hex }}
          />
        </motion.div>

        {compPct !== undefined && compareSpectrum && (
          <div
            className="absolute bottom-0 translate-y-4 -translate-x-1/2 flex flex-col items-center z-20"
            style={{ left: `${compPct}%` }}
          >
            <span className="w-2.5 h-2.5 rotate-45 bg-slate-900 border border-white shadow-xs" />
          </div>
        )}

        <div className="grid grid-cols-7 gap-1 h-4 sm:h-5 rounded-md overflow-hidden bg-slate-100 p-0.5 border border-slate-200">
          {SPECTRUM_ORDER.map((band) => {
            const st = SPECTRUM_STYLE[band];
            const isActive = band === spectrum.label;
            return (
              <div
                key={band}
                title={`${band}`}
                className={`h-full rounded-[3px] transition-all ${
                  isActive ? 'ring-2 ring-slate-900 ring-offset-1 opacity-100' : 'opacity-65'
                }`}
                style={{ backgroundColor: st.hex }}
              />
            );
          })}
        </div>

        {/* Zone pin line */}
        <div
          className="absolute top-6 bottom-0.5 w-0.5 bg-slate-950 z-10 pointer-events-none"
          style={{ left: `${markerPct}%` }}
        />
      </div>

      {/* Labels below 7 zones */}
      <div className="grid grid-cols-7 gap-1 text-center pt-1">
        {SPECTRUM_ORDER.map((band) => {
          const st = SPECTRUM_STYLE[band];
          const isActive = band === spectrum.label;
          return (
            <div
              key={band}
              className={`text-[10px] sm:text-[11px] leading-tight truncate px-0.5 ${
                isActive ? `${st.text} font-bold` : 'text-slate-500 font-medium'
              }`}
              title={band}
            >
              <span className="sm:hidden">{SPECTRUM_SHORT_LABELS[band]}</span>
              <span className="hidden sm:inline">{band}</span>
            </div>
          );
        })}
      </div>

      {/* Economic vs Social Sub-axes */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200/80 text-xs">
        <div className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 flex items-center justify-between gap-2">
          <span className="text-slate-600">Eixo Econômico</span>
          <span
            className={`font-mono tabular-nums font-bold ${
              spectrum.economicScore < -10
                ? 'text-rose-700'
                : spectrum.economicScore > 10
                ? 'text-blue-700'
                : 'text-teal-700'
            }`}
          >
            {spectrum.economicScore < -10
              ? `Esquerda (${spectrum.economicScore})`
              : spectrum.economicScore > 10
              ? `Direita (+${spectrum.economicScore})`
              : `Centro (${spectrum.economicScore})`}
          </span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-md px-3 py-2 flex items-center justify-between gap-2">
          <span className="text-slate-600">Social & Costumes</span>
          <span
            className={`font-mono tabular-nums font-bold ${
              spectrum.socialScore < -10
                ? 'text-emerald-700'
                : spectrum.socialScore > 10
                ? 'text-amber-700'
                : 'text-teal-700'
            }`}
          >
            {spectrum.socialScore < -10
              ? `Progressista (${spectrum.socialScore})`
              : spectrum.socialScore > 10
              ? `Conservador (+${spectrum.socialScore})`
              : `Moderado (${spectrum.socialScore})`}
          </span>
        </div>
      </div>
    </div>
  );
};

interface RadarProps {
  primaryVector: DimensionVector;
  primaryLabel?: string;
  secondaryVector?: DimensionVector;
  secondaryLabel?: string;
}

export const DimensionRadarChart: React.FC<RadarProps> = ({
  primaryVector,
  primaryLabel = 'Seu Perfil',
  secondaryVector,
  secondaryLabel = 'Referência',
}) => {
  const [selectedDim, setSelectedDim] = useState<DimensionKey | null>(null);
  const normPrimary = normalizeVector(primaryVector);
  const normSecondary = secondaryVector ? normalizeVector(secondaryVector) : undefined;

  const size = 500;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 142;
  const labelRadius = 172;
  const levels = [25, 50, 75, 100];

  const normalize = (v: number) => (v + 100) / 2;

  const getPoint = (index: number, value100: number) => {
    const angle = (Math.PI * 2 * index) / ALL_DIMENSIONS.length - Math.PI / 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const r = (value100 / 100) * radius;

    let textAnchor: 'start' | 'middle' | 'end' = 'middle';
    if (cos > 0.25) textAnchor = 'start';
    else if (cos < -0.25) textAnchor = 'end';

    return {
      x: cx + r * cos,
      y: cy + r * sin,
      labelX: cx + labelRadius * cos,
      labelY: cy + labelRadius * sin,
      textAnchor,
    };
  };

  const buildPolygonPoints = (vec: DimensionVector) =>
    ALL_DIMENSIONS.map((dim, i) => {
      const pt = getPoint(i, normalize(vec[dim]));
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    }).join(' ');

  const activeDim = selectedDim;
  const activeMeta = activeDim ? DIMENSION_META[activeDim] : null;
  const activePoleTheme = activeDim ? DIMENSION_POLE_THEME[activeDim] : null;
  const activeVal = activeDim ? normPrimary[activeDim] : 0;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-[460px] mx-auto">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-auto"
          role="img"
          aria-label="Gráfico radar dos 12 pilares políticos"
        >
          <defs>
            <linearGradient id="radarPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id="radarSecondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* Concentric 12-sided rings */}
          {levels.map((lvl) => {
            const pts = ALL_DIMENSIONS.map((_, i) => {
              const pt = getPoint(i, lvl);
              return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
            }).join(' ');
            return (
              <polygon
                key={lvl}
                points={pts}
                fill={lvl === 100 ? 'rgba(241,245,249,0.65)' : 'none'}
                stroke={lvl === 50 ? 'rgba(37,99,235,0.45)' : 'rgba(148,163,184,0.45)'}
                strokeWidth={lvl === 50 ? 1.4 : 0.9}
                strokeDasharray={lvl === 50 ? '4 3' : undefined}
              />
            );
          })}

          {/* Spokes & Labels */}
          {ALL_DIMENSIONS.map((dim, i) => {
            const outer = getPoint(i, 100);
            const poleTheme = DIMENSION_POLE_THEME[dim];
            const val = normPrimary[dim];
            const activeHex = val >= 0 ? poleTheme.rightHex : poleTheme.leftHex;
            const isSelected = activeDim === dim;

            return (
              <g key={dim}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={outer.x}
                  y2={outer.y}
                  stroke={isSelected ? activeHex : 'rgba(148,163,184,0.55)'}
                  strokeWidth={isSelected ? 2 : 1}
                />
                <text
                  x={outer.labelX}
                  y={outer.labelY}
                  textAnchor={outer.textAnchor}
                  dominantBaseline="middle"
                  fill={isSelected ? activeHex : '#334155'}
                  className="text-[12px] font-semibold cursor-pointer select-none"
                  onMouseEnter={() => setSelectedDim(dim)}
                  onClick={() => setSelectedDim((prev) => (prev === dim ? null : dim))}
                >
                  {DIMENSION_META[dim].shortLabel}
                </text>
              </g>
            );
          })}

          {/* Secondary polygon */}
          {normSecondary && (
            <polygon
              points={buildPolygonPoints(normSecondary)}
              fill="url(#radarSecondaryGrad)"
              stroke="#E11D48"
              strokeWidth={2}
            />
          )}

          {/* Primary polygon */}
          <polygon
            points={buildPolygonPoints(normPrimary)}
            fill="url(#radarPrimaryGrad)"
            stroke="#2563EB"
            strokeWidth={2.4}
          />

          {/* Interactive color-coded vertices */}
          {ALL_DIMENSIONS.map((dim, i) => {
            const val = normPrimary[dim];
            const pt = getPoint(i, normalize(val));
            const poleTheme = DIMENSION_POLE_THEME[dim];
            const vertexColor = val >= 8 ? poleTheme.rightHex : val <= -8 ? poleTheme.leftHex : '#0D9488';
            const isSelected = activeDim === dim;

            return (
              <g key={`p-${dim}`}>
                {/* Touch target hit area */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={14}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setSelectedDim(dim)}
                  onClick={() => setSelectedDim((prev) => (prev === dim ? null : dim))}
                />
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? 7 : 5}
                  fill={vertexColor}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  className="pointer-events-none transition-all"
                />
              </g>
            );
          })}

          {normSecondary &&
            ALL_DIMENSIONS.map((dim, i) => {
              const pt = getPoint(i, normalize(normSecondary[dim]));
              return (
                <circle
                  key={`s-${dim}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={activeDim === dim ? 5.5 : 3.8}
                  fill="#E11D48"
                  stroke="#FFFFFF"
                  strokeWidth={1.6}
                  className="pointer-events-none"
                />
              );
            })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-1 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-700">
        <span className="flex items-center gap-2 font-medium">
          <span className="inline-block w-3 h-1.5 rounded-full bg-blue-600" />
          {primaryLabel}
        </span>
        {normSecondary && (
          <span className="flex items-center gap-2 font-medium">
            <span className="inline-block w-3 h-1.5 rounded-full bg-rose-600" />
            {secondaryLabel}
          </span>
        )}
        <span className="text-[11px] text-slate-500">
          Pontos coloridos indicam seu polo dominante em cada pilar
        </span>
      </div>

      {activeDim && activeMeta && activePoleTheme ? (
        <div className="mt-3 w-full bg-slate-50 border border-slate-200 rounded-md p-3 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="font-semibold text-slate-950">{activeMeta.label}</div>
            <div className="text-[11px] text-slate-600">
              {activeMeta.leftPole} ↔ {activeMeta.rightPole}
            </div>
          </div>
          <div className="font-mono tabular-nums font-bold shrink-0 flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded text-white text-[11px]"
              style={{
                backgroundColor:
                  activeVal >= 8
                    ? activePoleTheme.rightHex
                    : activeVal <= -8
                    ? activePoleTheme.leftHex
                    : '#0D9488',
              }}
            >
              {activeVal > 0 ? `+${activeVal}` : activeVal}
            </span>
            {normSecondary && (
              <span className="text-rose-700 text-[11px]">
                vs {normSecondary[activeDim] > 0 ? `+${normSecondary[activeDim]}` : normSecondary[activeDim]}
              </span>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-3 text-xs text-slate-500 text-center">
          Toque ou passe o cursor sobre qualquer pilar para ver seu escore exato (−100 a +100).
        </p>
      )}
    </div>
  );
};

interface BipolarBarsProps {
  vector: DimensionVector;
  confidenceByDimension?: Record<DimensionKey, number>;
  compareVector?: DimensionVector;
  compareLabel?: string;
}

export const DimensionBipolarBars: React.FC<BipolarBarsProps> = ({
  vector,
  confidenceByDimension,
  compareVector,
  compareLabel,
}) => {
  const normVector = normalizeVector(vector);
  const normCompare = compareVector ? normalizeVector(compareVector) : undefined;

  return (
    <div className="space-y-4">
      {ALL_DIMENSIONS.map((dim) => {
        const meta = DIMENSION_META[dim];
        const poleTheme = DIMENSION_POLE_THEME[dim];
        const val = normVector[dim];
        const leftPct = Math.max(2, Math.min(98, ((val + 100) / 200) * 100));
        const compVal = normCompare ? normCompare[dim] : undefined;
        const compPct =
          compVal !== undefined ? Math.max(2, Math.min(98, ((compVal + 100) / 200) * 100)) : undefined;

        const leansRight = val >= 10;
        const leansLeft = val <= -10;
        const activeHex = leansRight ? poleTheme.rightHex : leansLeft ? poleTheme.leftHex : '#0D9488';
        const stanceLabel = leansRight
          ? meta.rightPole
          : leansLeft
          ? meta.leftPole
          : 'Posição equilibrada / Centro';

        return (
          <div
            key={dim}
            className="bg-slate-50/70 border border-slate-200/90 rounded-lg p-3.5 sm:p-4 space-y-2.5"
          >
            {/* Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: activeHex }}
                />
                <span className="text-sm font-semibold text-slate-950 truncate">
                  {meta.label}
                </span>
                {confidenceByDimension && confidenceByDimension[dim] !== undefined && (
                  <span className="text-[11px] font-mono tabular-nums text-slate-500 shrink-0">
                    · Conf. {confidenceByDimension[dim]}%
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 font-mono tabular-nums text-xs shrink-0">
                <span
                  className="px-2 py-0.5 rounded font-bold text-white shadow-2xs"
                  style={{ backgroundColor: activeHex }}
                >
                  {val > 0 ? `+${val}` : val}
                </span>
                {compVal !== undefined && (
                  <span className="text-rose-700 font-semibold">
                    {compareLabel || 'Comp.'}: {compVal > 0 ? `+${compVal}` : compVal}
                  </span>
                )}
              </div>
            </div>

            {/* Active tendency readout */}
            <div className="text-xs font-medium" style={{ color: activeHex }}>
              Tendência: {stanceLabel}
            </div>

            {/* Colored Bipolar Track */}
            <div className="relative h-3.5 rounded-full border border-slate-300/80 overflow-hidden bg-white">
              {/* Soft Left & Right Zone Tints */}
              <div
                className="absolute inset-y-0 left-0 w-1/2"
                style={{ backgroundColor: poleTheme.leftSoftBg }}
              />
              <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{ backgroundColor: poleTheme.rightSoftBg }}
              />

              {/* Animated directional fill from center */}
              <motion.div
                className="absolute top-0 bottom-0 opacity-85"
                initial={{ left: '50%', width: '0%' }}
                whileInView={{
                  left: val >= 0 ? '50%' : `${leftPct}%`,
                  width: `${Math.abs(leftPct - 50)}%`,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ backgroundColor: activeHex }}
              />

              {/* Center zero line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-500/70 z-10" />
            </div>

            {/* Markers overlaid cleanly without clipping */}
            <div className="relative h-0">
              <div
                className="absolute -top-[18px] -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-20"
                style={{ left: `${leftPct}%`, backgroundColor: activeHex }}
                title={`${meta.label}: ${val}`}
              />
              {compPct !== undefined && (
                <div
                  className="absolute -top-[17px] -translate-x-1/2 w-3.5 h-3.5 rotate-45 bg-rose-600 border-2 border-white shadow-sm z-20"
                  style={{ left: `${compPct}%` }}
                  title={`${compareLabel}: ${compVal}`}
                />
              )}
            </div>

            {/* Left vs Right Pole Labels */}
            <div className="grid grid-cols-2 gap-3 pt-0.5 text-[11px] leading-snug">
              <div
                className={`flex items-start gap-1.5 ${
                  leansLeft ? `${poleTheme.leftText} font-semibold` : 'text-slate-600'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: poleTheme.leftHex }}
                />
                <span>{meta.leftPole}</span>
              </div>
              <div
                className={`flex items-start justify-end gap-1.5 text-right ${
                  leansRight ? `${poleTheme.rightText} font-semibold` : 'text-slate-600'
                }`}
              >
                <span>{meta.rightPole}</span>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: poleTheme.rightHex }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

interface CartesianProps {
  userVector: DimensionVector;
  userLabel?: string;
  secondaryVector?: DimensionVector;
  secondaryLabel?: string;
  ideologies: IdeologyRecord[];
  politicians: PoliticianRecord[];
  onSelectIdeology?: (id: string) => void;
  onSelectPolitician?: (id: string) => void;
}

export const IdeologicalCartesianMap: React.FC<CartesianProps> = ({
  userVector,
  userLabel = 'Você',
  secondaryVector,
  secondaryLabel = 'Comparado',
  ideologies,
  politicians,
  onSelectIdeology,
  onSelectPolitician,
}) => {
  const [xAxis, setXAxis] = useState<DimensionKey>('economia');
  const [yAxis, setYAxis] = useState<DimensionKey>('sociedade');
  const [showIdeologies, setShowIdeologies] = useState(true);
  const [showPoliticians, setShowPoliticians] = useState(true);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    subtitle: string;
    x: number;
    y: number;
    kind: 'user' | 'ideology' | 'politician';
    id?: string;
  } | null>(null);

  const normUser = normalizeVector(userVector);
  const normSecondary = secondaryVector ? normalizeVector(secondaryVector) : undefined;

  const W = 600;
  const H = 440;
  const pad = 42;
  const innerW = W - pad * 2;
  const innerH = H - pad * 2;

  const toX = (val: number) => pad + ((val + 100) / 200) * innerW;
  const toY = (val: number) => pad + ((100 - val) / 200) * innerH;

  const xMeta = DIMENSION_META[xAxis];
  const yMeta = DIMENSION_META[yAxis];

  return (
    <div className="space-y-4">
      {/* Axis & Layer Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
          <label className="flex items-center gap-2 text-xs text-slate-700">
            <span className="text-slate-500 font-medium shrink-0">Eixo X:</span>
            <select
              value={xAxis}
              onChange={(e) => setXAxis(e.target.value as DimensionKey)}
              className="w-full min-h-[40px] bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              {ALL_DIMENSIONS.map((d) => (
                <option key={d} value={d}>
                  {DIMENSION_META[d].label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700">
            <span className="text-slate-500 font-medium shrink-0">Eixo Y:</span>
            <select
              value={yAxis}
              onChange={(e) => setYAxis(e.target.value as DimensionKey)}
              className="w-full min-h-[40px] bg-slate-50 border border-slate-300 rounded-md px-2.5 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            >
              {ALL_DIMENSIONS.map((d) => (
                <option key={d} value={d}>
                  {DIMENSION_META[d].label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowIdeologies((v) => !v)}
            className={`flex-1 sm:flex-initial min-h-[40px] px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              showIdeologies
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900'
            }`}
          >
            Ideologias ({ideologies.length})
          </button>
          <button
            type="button"
            onClick={() => setShowPoliticians((v) => !v)}
            className={`flex-1 sm:flex-initial min-h-[40px] px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              showPoliticians
                ? 'bg-rose-600 border-rose-600 text-white'
                : 'bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900'
            }`}
          >
            Políticos ({politicians.length})
          </button>
        </div>
      </div>

      {/* Responsive Scatter Plot (Zero horizontal overflow on mobile) */}
      <div className="relative bg-slate-50 border border-slate-200 rounded-lg p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label="Mapa ideológico cartesiano interativo"
        >
          {/* Quadrant Tints */}
          <rect
            x={pad}
            y={pad}
            width={innerW / 2}
            height={innerH / 2}
            fill="rgba(225, 29, 72, 0.08)"
          />
          <rect
            x={pad + innerW / 2}
            y={pad}
            width={innerW / 2}
            height={innerH / 2}
            fill="rgba(5, 150, 105, 0.08)"
          />
          <rect
            x={pad}
            y={pad + innerH / 2}
            width={innerW / 2}
            height={innerH / 2}
            fill="rgba(124, 58, 237, 0.08)"
          />
          <rect
            x={pad + innerW / 2}
            y={pad + innerH / 2}
            width={innerW / 2}
            height={innerH / 2}
            fill="rgba(37, 99, 235, 0.08)"
          />
          <rect x={pad} y={pad} width={innerW} height={innerH} fill="none" stroke="#CBD5E1" />

          {[-50, 0, 50].map((v) => (
            <g key={v}>
              <line
                x1={toX(v)}
                y1={pad}
                x2={toX(v)}
                y2={H - pad}
                stroke={v === 0 ? '#64748B' : '#CBD5E1'}
                strokeWidth={v === 0 ? 1.4 : 1}
                strokeDasharray={v === 0 ? undefined : '3 3'}
              />
              <line
                x1={pad}
                y1={toY(v)}
                x2={W - pad}
                y2={toY(v)}
                stroke={v === 0 ? '#64748B' : '#CBD5E1'}
                strokeWidth={v === 0 ? 1.4 : 1}
                strokeDasharray={v === 0 ? undefined : '3 3'}
              />
            </g>
          ))}

          {/* Pole labels */}
          <text x={W / 2} y={22} textAnchor="middle" className="fill-emerald-800 text-[11px] font-bold">
            + {yMeta.rightPole}
          </text>
          <text x={W / 2} y={H - 12} textAnchor="middle" className="fill-rose-800 text-[11px] font-bold">
            − {yMeta.leftPole}
          </text>
          <text
            x={pad + 6}
            y={H / 2 - 8}
            textAnchor="start"
            className="fill-rose-800 text-[10px] font-bold"
          >
            ← {xMeta.leftPole}
          </text>
          <text
            x={W - pad - 6}
            y={H / 2 - 8}
            textAnchor="end"
            className="fill-blue-800 text-[10px] font-bold"
          >
            {xMeta.rightPole} →
          </text>

          {/* Ideologies */}
          {showIdeologies &&
            ideologies.map((ideo) => {
              const vec = normalizeVector(ideo.vector);
              const x = toX(vec[xAxis]);
              const y = toY(vec[yAxis]);
              const famColor = getIdeologyFamilyStyle(ideo.familia).hex;
              const isSelected = selectedItem?.id === ideo.id;

              return (
                <g
                  key={ideo.id}
                  className="cursor-pointer"
                  onMouseEnter={() =>
                    setSelectedItem({
                      title: ideo.nome,
                      subtitle: ideo.familia,
                      x: vec[xAxis],
                      y: vec[yAxis],
                      kind: 'ideology',
                      id: ideo.id,
                    })
                  }
                  onClick={() =>
                    setSelectedItem({
                      title: ideo.nome,
                      subtitle: ideo.familia,
                      x: vec[xAxis],
                      y: vec[yAxis],
                      kind: 'ideology',
                      id: ideo.id,
                    })
                  }
                >
                  <circle cx={x} cy={y} r={12} fill="transparent" />
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? 8 : 5.8}
                    fill={famColor}
                    fillOpacity={0.94}
                    stroke={isSelected ? '#0F172A' : '#FFFFFF'}
                    strokeWidth={isSelected ? 2 : 1.5}
                  />
                  <text
                    x={x}
                    y={y - 9}
                    textAnchor="middle"
                    className="fill-slate-800 text-[9px] font-semibold pointer-events-none select-none"
                  >
                    {ideo.nome.length > 16 ? `${ideo.nome.slice(0, 14)}…` : ideo.nome}
                  </text>
                </g>
              );
            })}

          {/* Politicians */}
          {showPoliticians &&
            politicians.map((pol) => {
              const vec = normalizeVector(pol.vector);
              const x = toX(vec[xAxis]);
              const y = toY(vec[yAxis]);
              const famColor = getIdeologyFamilyStyle(pol.correntePrincipal).hex;
              const isSelected = selectedItem?.id === pol.id;

              return (
                <g
                  key={pol.id}
                  className="cursor-pointer"
                  onMouseEnter={() =>
                    setSelectedItem({
                      title: pol.nome,
                      subtitle: `${pol.pais} · ${pol.correntePrincipal}`,
                      x: vec[xAxis],
                      y: vec[yAxis],
                      kind: 'politician',
                      id: pol.id,
                    })
                  }
                  onClick={() =>
                    setSelectedItem({
                      title: pol.nome,
                      subtitle: `${pol.pais} · ${pol.correntePrincipal}`,
                      x: vec[xAxis],
                      y: vec[yAxis],
                      kind: 'politician',
                      id: pol.id,
                    })
                  }
                >
                  <circle cx={x} cy={y} r={11} fill="transparent" />
                  <rect
                    x={x - (isSelected ? 5 : 3.8)}
                    y={y - (isSelected ? 5 : 3.8)}
                    width={isSelected ? 10 : 7.6}
                    height={isSelected ? 10 : 7.6}
                    transform={`rotate(45 ${x} ${y})`}
                    fill={famColor}
                    fillOpacity={0.9}
                    stroke="#0F172A"
                    strokeWidth={isSelected ? 1.5 : 0.7}
                  />
                </g>
              );
            })}

          {/* Secondary Vector */}
          {normSecondary && (
            <g
              onMouseEnter={() =>
                setSelectedItem({
                  title: secondaryLabel,
                  subtitle: 'Resultado comparado',
                  x: normSecondary[xAxis],
                  y: normSecondary[yAxis],
                  kind: 'user',
                })
              }
              onClick={() =>
                setSelectedItem({
                  title: secondaryLabel,
                  subtitle: 'Resultado comparado',
                  x: normSecondary[xAxis],
                  y: normSecondary[yAxis],
                  kind: 'user',
                })
              }
            >
              <circle
                cx={toX(normSecondary[xAxis])}
                cy={toY(normSecondary[yAxis])}
                r={8.5}
                className="fill-rose-600 stroke-white stroke-2"
              />
              <text
                x={toX(normSecondary[xAxis])}
                y={toY(normSecondary[yAxis]) + 18}
                textAnchor="middle"
                className="fill-rose-700 text-[10px] font-bold"
              >
                {secondaryLabel}
              </text>
            </g>
          )}

          {/* Primary User Vector */}
          <g
            onMouseEnter={() =>
              setSelectedItem({
                title: userLabel,
                subtitle: 'Posição calculada a partir das suas respostas',
                x: normUser[xAxis],
                y: normUser[yAxis],
                kind: 'user',
              })
            }
            onClick={() =>
              setSelectedItem({
                title: userLabel,
                subtitle: 'Posição calculada a partir das suas respostas',
                x: normUser[xAxis],
                y: normUser[yAxis],
                kind: 'user',
              })
            }
          >
            <circle
              cx={toX(normUser[xAxis])}
              cy={toY(normUser[yAxis])}
              r={15}
              className="fill-blue-600/20 stroke-blue-600/80"
              strokeWidth={1.5}
            />
            <circle
              cx={toX(normUser[xAxis])}
              cy={toY(normUser[yAxis])}
              r={8}
              className="fill-blue-600 stroke-white stroke-2"
            />
            <text
              x={toX(normUser[xAxis])}
              y={toY(normUser[yAxis]) - 18}
              textAnchor="middle"
              className="fill-slate-950 text-[11px] font-bold"
            >
              {userLabel}
            </text>
          </g>
        </svg>
      </div>

      {/* Legend & Tap Inspector */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-3 h-3 rounded-full bg-blue-600 border border-white shadow-xs inline-block" />
            {userLabel}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            Ideologias (por família)
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2.5 h-2.5 rotate-45 bg-rose-600 inline-block" />
            Políticos e Pensadores
          </span>
        </div>

        {selectedItem ? (
          <div className="bg-slate-50 border border-slate-200 rounded-md p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <div className="font-semibold text-slate-950">{selectedItem.title}</div>
              <div className="text-slate-600">{selectedItem.subtitle}</div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono tabular-nums text-slate-800 font-semibold">
                {xMeta.shortLabel}: {selectedItem.x > 0 ? `+${selectedItem.x}` : selectedItem.x} ·{' '}
                {yMeta.shortLabel}: {selectedItem.y > 0 ? `+${selectedItem.y}` : selectedItem.y}
              </span>
              {selectedItem.kind === 'ideology' && selectedItem.id && onSelectIdeology && (
                <button
                  type="button"
                  onClick={() => onSelectIdeology(selectedItem.id!)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded cursor-pointer whitespace-nowrap"
                >
                  Abrir Ficha →
                </button>
              )}
              {selectedItem.kind === 'politician' && selectedItem.id && onSelectPolitician && (
                <button
                  type="button"
                  onClick={() => onSelectPolitician(selectedItem.id!)}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded cursor-pointer whitespace-nowrap"
                >
                  Ver Biografia →
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-500">
            Toque ou passe o cursor sobre qualquer ponto no mapa para ver as coordenadas e abrir a ficha completa.
          </p>
        )}
      </div>
    </div>
  );
};

