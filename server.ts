import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { loadDatabase, saveDatabase } from './server/db.ts';
import { buildQuizSessionQuestions, ALL_SERIOUS_QUESTIONS } from './src/data/questions.ts';
import { buildQuizResult } from './src/shared/scoring.ts';
import {
  IdeologyRecord,
  PoliticianRecord,
  QuizMode,
  QuizQuestion,
} from './src/shared/types.ts';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '2mb' }));

  // Health endpoint
  app.get('/api/health', (_req, res) => {
    const db = loadDatabase();
    res.json({
      ok: true,
      counts: {
        ideologies: db.ideologies.length,
        politicians: db.politicians.length,
        countries: db.countries.length,
        questionsTotal: ALL_SERIOUS_QUESTIONS.length + 1,
        resultsSaved: db.results.length,
      },
    });
  });

  // Bootstrap full structured database for fast client filtering & exploration
  app.get('/api/bootstrap', (_req, res) => {
    const db = loadDatabase();
    res.json({
      ideologies: db.ideologies,
      politicians: db.politicians,
      countries: db.countries,
      glossary: db.glossary,
      sources: db.sources,
      results: db.results,
      questionBankCount: ALL_SERIOUS_QUESTIONS.length + 1,
    });
  });

  // Generate session questions for 36, 72 or 240 modes
  app.get('/api/questions', (req, res) => {
    const modeParam = String(req.query.mode || 'rapido') as QuizMode;
    const validModes: QuizMode[] = ['rapido', 'completo', 'extensivo'];
    const mode: QuizMode = validModes.includes(modeParam) ? modeParam : 'rapido';
    const questions = buildQuizSessionQuestions(mode);
    res.json({
      mode,
      total: questions.length,
      questions,
    });
  });

  // Score quiz answers on backend and persist result
  app.post('/api/quiz/score', (req, res) => {
    try {
      const { mode, answers, sessionQuestions } = req.body as {
        mode?: QuizMode;
        answers?: Record<string, number>;
        sessionQuestions?: QuizQuestion[];
      };

      if (!mode || !answers || typeof answers !== 'object') {
        return res.status(400).json({ error: 'Dados do questionário inválidos.' });
      }

      const db = loadDatabase();
      const questionsToScore =
        Array.isArray(sessionQuestions) && sessionQuestions.length > 0
          ? sessionQuestions
          : buildQuizSessionQuestions(mode);

      const result = buildQuizResult(
        mode,
        questionsToScore,
        answers,
        db.ideologies,
        db.politicians
      );

      db.results = [result, ...db.results].slice(0, 100);
      saveDatabase(db);

      return res.json({ result });
    } catch (err) {
      console.error('Erro no cálculo de pontuação:', err);
      return res.status(500).json({ error: 'Falha interna ao calcular perfil político.' });
    }
  });

  // Retrieve or delete saved results
  app.get('/api/results', (_req, res) => {
    const db = loadDatabase();
    res.json({ results: db.results });
  });

  app.get('/api/results/:id', (req, res) => {
    const db = loadDatabase();
    const found = db.results.find((r) => r.id === req.params.id);
    if (!found) {
      return res.status(404).json({ error: 'Resultado não encontrado.' });
    }
    return res.json({ result: found });
  });

  app.delete('/api/results/:id', (req, res) => {
    const db = loadDatabase();
    db.results = db.results.filter((r) => r.id !== req.params.id);
    saveDatabase(db);
    res.json({ deleted: true });
  });

  // Expand database: add new Ideology
  app.post('/api/ideologies', (req, res) => {
    try {
      const payload = req.body as Partial<IdeologyRecord>;
      if (!payload.nome || !payload.familia || !payload.resumo || !payload.vector) {
        return res.status(400).json({
          error: 'Campos obrigatórios: nome, família, resumo e perfil multidimensional.',
        });
      }
      const db = loadDatabase();
      const slug = payload.nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const record: IdeologyRecord = {
        id: `${slug}-${Date.now().toString(36)}`,
        nome: payload.nome.trim(),
        familia: payload.familia.trim(),
        periodoOrigem: payload.periodoOrigem?.trim() || 'Contemporâneo',
        resumo: payload.resumo.trim(),
        origemHistorica: payload.origemHistorica?.trim() || payload.resumo.trim(),
        principaisPensadores: payload.principaisPensadores?.length
          ? payload.principaisPensadores
          : ['Registro colaborativo institucional'],
        principiosEconomicos:
          payload.principiosEconomicos?.trim() || 'Não especificado no registro inicial.',
        principiosSociais:
          payload.principiosSociais?.trim() || 'Não especificado no registro inicial.',
        visaoEstado: payload.visaoEstado?.trim() || 'Não especificado no registro inicial.',
        relacaoDemocracia:
          payload.relacaoDemocracia?.trim() || 'Não especificado no registro inicial.',
        exemplosHistoricos: payload.exemplosHistoricos || [],
        diferencasCorrentes:
          payload.diferencasCorrentes?.trim() || 'Comparação analítica disponível via vetor.',
        fontes: payload.fontes?.length ? payload.fontes : ['Fonte informada pelo pesquisador'],
        vector: payload.vector,
      };

      db.ideologies.push(record);
      saveDatabase(db);
      return res.status(201).json({ ideology: record });
    } catch (err) {
      console.error('Erro ao cadastrar ideologia:', err);
      return res.status(500).json({ error: 'Erro ao salvar nova ideologia.' });
    }
  });

  // Expand database: add new Politician / Thinker
  app.post('/api/politicians', (req, res) => {
    try {
      const payload = req.body as Partial<PoliticianRecord>;
      if (!payload.nome || !payload.pais || !payload.biografiaResumida || !payload.vector) {
        return res.status(400).json({
          error: 'Campos obrigatórios: nome, país, biografia resumida e vetor multidimensional.',
        });
      }
      const db = loadDatabase();
      const slug = payload.nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const record: PoliticianRecord = {
        id: `${slug}-${Date.now().toString(36)}`,
        nome: payload.nome.trim(),
        pais: payload.pais.trim(),
        regiao: payload.regiao || 'América Latina',
        periodoHistorico: payload.periodoHistorico?.trim() || 'Século XX–XXI',
        era: payload.era || 'Contemporâneo',
        partidoOuMovimento: payload.partidoOuMovimento?.trim() || 'Independente',
        categoria: payload.categoria || 'Chefe de Estado / Político',
        correntePrincipal: payload.correntePrincipal?.trim() || 'Multidimensional',
        biografiaResumida: payload.biografiaResumida.trim(),
        principaisIdeias: payload.principaisIdeias?.length
          ? payload.principaisIdeias
          : ['Registro histórico em expansão'],
        modeloEconomico: payload.modeloEconomico?.trim() || 'Modelo misto/contextual',
        visaoEstado: payload.visaoEstado?.trim() || 'Registro histórico em expansão',
        posicionamentoSocial: payload.posicionamentoSocial?.trim() || 'Registro em expansão',
        politicaExterna: payload.politicaExterna?.trim() || 'Registro em expansão',
        principaisRealizacoes: payload.principaisRealizacoes || [],
        contradicoesEMudancas:
          payload.contradicoesEMudancas?.trim() || 'Análise contextual sujeita a atualização.',
        fontesBibliograficas: payload.fontesBibliograficas?.length
          ? payload.fontesBibliograficas
          : ['Fonte bibliográfica informada pelo pesquisador'],
        vector: payload.vector,
      };

      db.politicians.push(record);
      saveDatabase(db);
      return res.status(201).json({ politician: record });
    } catch (err) {
      console.error('Erro ao cadastrar personalidade:', err);
      return res.status(500).json({ error: 'Erro ao salvar nova personalidade.' });
    }
  });

  // Political Lab Policy Simulation API
  app.post('/api/lab/simulate', (req, res) => {
    const {
      progressividadeTributaria = 50,
      investimentoPublicoInfra = 50,
      protecaoIndustrial = 40,
      gastoSocialUniversal = 55,
      desregulacaoMercado = 50,
      transicaoVerde = 50,
    } = req.body || {};

    // Transparent structural macro heuristic model (0-100 inputs)
    const crescimentoCurtoPrazo = Number(
      (
        1.8 +
        (investimentoPublicoInfra - 50) * 0.025 +
        (desregulacaoMercado - 50) * 0.022 -
        (progressividadeTributaria - 50) * 0.012 -
        (transicaoVerde - 50) * 0.008
      ).toFixed(2)
    );

    const variacaoGini = Number(
      (
        -(progressividadeTributaria - 50) * 0.14 -
        (gastoSocialUniversal - 50) * 0.16 +
        (desregulacaoMercado - 50) * 0.09
      ).toFixed(1)
    );

    const pressaoFiscalPIB = Number(
      (
        (investimentoPublicoInfra - 50) * 0.07 +
        (gastoSocialUniversal - 50) * 0.09 +
        (transicaoVerde - 50) * 0.04 -
        (progressividadeTributaria - 50) * 0.08 -
        (desregulacaoMercado - 50) * 0.02
      ).toFixed(2)
    );

    const complexidadeIndustrial = Number(
      (
        50 +
        (investimentoPublicoInfra - 50) * 0.35 +
        (protecaoIndustrial - 50) * 0.28 +
        (transicaoVerde - 50) * 0.22 -
        (desregulacaoMercado - 70) * 0.12
      ).toFixed(1)
    );

    const descarbonizacaoIndice = Number(
      (
        45 +
        (transicaoVerde - 50) * 0.65 +
        (investimentoPublicoInfra - 50) * 0.15 -
        (protecaoIndustrial - 60) * 0.05
      ).toFixed(1)
    );

    const liberdadeNegocios = Number(
      (
        52 +
        (desregulacaoMercado - 50) * 0.65 -
        (protecaoIndustrial - 50) * 0.25 -
        (progressividadeTributaria - 50) * 0.18
      ).toFixed(1)
    );

    res.json({
      projecoes: {
        crescimentoAnualEstimado: crescimentoCurtoPrazo,
        variacaoGiniPontos: variacaoGini,
        saldoFiscalVariacaoPIB: pressaoFiscalPIB,
        indiceComplexidadeIndustrial: Math.max(5, Math.min(98, complexidadeIndustrial)),
        indiceTransicaoClimatica: Math.max(5, Math.min(98, descarbonizacaoIndice)),
        indiceLiberdadeNegocios: Math.max(5, Math.min(98, liberdadeNegocios)),
      },
      hipotesesModelo: [
        'Multiplicadores fiscais positivos em investimentos de infraestrutura física e P&D quando há capacidade ociosa ou gargalos logísticos.',
        'Elasticidade moderada da redistribuição via gasto social universal + tributação direta progressiva (referência empírica OCDE/CEPAL).',
        'Trade-off de curto prazo entre proteção tarifária e custos de insumos importados para empresas locais.',
      ],
      limitacoesExplicitas: [
        'Simulação educacional paramétrica simplificada: não substitui modelos DSGE ou matrizes insumo-produto nacionais específicas.',
        'Não incorpora choques externos abruptos (guerras, crises financeiras internacionais, juros do Fed) nem qualidade administrativa da execução estatal.',
        'Efeitos reais dependem criticamente do estágio de renda, nível educacional inicial e credibilidade institucional de cada país.',
      ],
    });
  });

  // Mount Vite middleware in dev or static files in prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ralo´s Politic server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
