import React, { useState } from 'react';
import { BONUS_CHECKLIST_MENSAL, BONUS_CHECKLIST_REVISAO_FINAL } from '../data/ebookBonusAndGlossary';
import { Plus, Trash2, RotateCcw } from 'lucide-react';

interface BudgetRow {
  id: string;
  category: string;
  type: 'Fixo Essencial' | 'Variável Essencial' | 'Estilo de Vida / Desejo' | 'Economia e Metas';
  planned: number;
  actual: number;
}

interface GoalRow {
  id: string;
  name: string;
  horizon: 'Curto Prazo (até 1 ano)' | 'Médio Prazo (1 a 5 anos)' | 'Longo Prazo (+5 anos)';
  totalCost: number;
  months: number;
  savedAlready: number;
}

interface ExpenseLogRow {
  id: string;
  date: string;
  description: string;
  classification: 'Fixo' | 'Variável' | 'Desejo / Lazer' | 'Economia';
  paymentMethod: 'Pix / Débito' | 'Dinheiro' | 'Cartão (1x)' | 'Cartão (Parcelado)';
  amount: number;
}

const INITIAL_BUDGET_ROWS: BudgetRow[] = [
  { id: 'b1', category: 'Aluguel / Moradia e Condomínio', type: 'Fixo Essencial', planned: 1100, actual: 1100 },
  { id: 'b2', category: 'Energia Elétrica, Água e Gás', type: 'Variável Essencial', planned: 220, actual: 205 },
  { id: 'b3', category: 'Internet Residencial e Plano Celular', type: 'Fixo Essencial', planned: 130, actual: 130 },
  { id: 'b4', category: 'Supermercado, Feira e Padaria', type: 'Variável Essencial', planned: 750, actual: 720 },
  { id: 'b5', category: 'Transporte Público / Combustível', type: 'Variável Essencial', planned: 280, actual: 280 },
  { id: 'b6', category: 'Saúde, Farmácia e Cuidados Pessoais', type: 'Variável Essencial', planned: 150, actual: 120 },
  { id: 'b7', category: 'Lazer, Passeios e Alimentação Fora', type: 'Estilo de Vida / Desejo', planned: 300, actual: 315 },
  { id: 'b8', category: 'Assinaturas Digitais e Vestuário', type: 'Estilo de Vida / Desejo', planned: 120, actual: 90 },
  { id: 'b9', category: 'Reserva para Imprevistos (Pague-se 1º)', type: 'Economia e Metas', planned: 250, actual: 250 },
  { id: 'b10', category: 'Metas de Curto e Médio Prazo', type: 'Economia e Metas', planned: 200, actual: 200 },
];

const INITIAL_GOALS: GoalRow[] = [
  { id: 'g1', name: 'Degrau 1 da Reserva para Imprevistos', horizon: 'Curto Prazo (até 1 ano)', totalCost: 1000, months: 5, savedAlready: 400 },
  { id: 'g2', name: 'Comprar Notebook para Estudo/Trabalho à Vista', horizon: 'Curto Prazo (até 1 ano)', totalCost: 2400, months: 12, savedAlready: 600 },
  { id: 'g3', name: 'Viagem de Férias Planejada em Família', horizon: 'Médio Prazo (1 a 5 anos)', totalCost: 3600, months: 18, savedAlready: 400 },
  { id: 'g4', name: 'Entrada para Imóvel / Projeto de Longo Prazo', horizon: 'Longo Prazo (+5 anos)', totalCost: 24000, months: 60, savedAlready: 1200 },
];

const INITIAL_EXPENSES: ExpenseLogRow[] = [
  { id: 'e1', date: '05/10', description: 'Transferência para Reserva de Imprevistos', classification: 'Economia', paymentMethod: 'Pix / Débito', amount: 250.00 },
  { id: 'e2', date: '06/10', description: 'Pagamento Aluguel + Condomínio', classification: 'Fixo', paymentMethod: 'Pix / Débito', amount: 1100.00 },
  { id: 'e3', date: '08/10', description: 'Compra da Semana no Supermercado (com lista)', classification: 'Variável', paymentMethod: 'Pix / Débito', amount: 215.40 },
  { id: 'e4', date: '10/10', description: 'Conta de Luz e Água', classification: 'Variável', paymentMethod: 'Pix / Débito', amount: 205.00 },
  { id: 'e5', date: '14/10', description: 'Almoço de Domingo em Família', classification: 'Desejo / Lazer', paymentMethod: 'Cartão (1x)', amount: 88.00 },
];

export const BonusSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'b1' | 'b2' | 'b3' | 'b4' | 'b5'>('b1');

  // Bônus 1: Planilha de Orçamento
  const [netIncome, setNetIncome] = useState<number>(3500);
  const [extraIncome, setExtraIncome] = useState<number>(0);
  const [budgetRows, setBudgetRows] = useState<BudgetRow[]>(INITIAL_BUDGET_ROWS);

  // Bônus 2: Checklist Mensal
  const [checkedMonthly, setCheckedMonthly] = useState<Record<string, boolean>>({
    'chk-1': true,
    'chk-2': true,
  });

  // Bônus 3: Planejamento de Metas
  const [goals, setGoals] = useState<GoalRow[]>(INITIAL_GOALS);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalHorizon, setNewGoalHorizon] = useState<GoalRow['horizon']>('Curto Prazo (até 1 ano)');
  const [newGoalCost, setNewGoalCost] = useState<number>(1200);
  const [newGoalMonths, setNewGoalMonths] = useState<number>(6);

  // Bônus 4: Controle de Gastos Diários
  const [expenses, setExpenses] = useState<ExpenseLogRow[]>(INITIAL_EXPENSES);
  const [newExpDate, setNewExpDate] = useState('16/10');
  const [newExpDesc, setNewExpDesc] = useState('');
  const [newExpClass, setNewExpClass] = useState<ExpenseLogRow['classification']>('Variável');
  const [newExpMethod, setNewExpMethod] = useState<ExpenseLogRow['paymentMethod']>('Pix / Débito');
  const [newExpAmount, setNewExpAmount] = useState<string>('');

  // Bônus 5: Checklist Revisão Final de Mês
  const [checkedReview, setCheckedReview] = useState<Record<string, boolean>>({
    'rev-1': true,
  });

  const totalIncome = netIncome + extraIncome;
  const totalPlanned = budgetRows.reduce((acc, r) => acc + (Number(r.planned) || 0), 0);
  const totalActual = budgetRows.reduce((acc, r) => acc + (Number(r.actual) || 0), 0);
  const totalSavingsActual = budgetRows
    .filter((r) => r.type === 'Economia e Metas')
    .reduce((acc, r) => acc + (Number(r.actual) || 0), 0);

  const handleBudgetChange = (id: string, field: 'planned' | 'actual', val: string) => {
    const num = Math.max(0, Number(val) || 0);
    setBudgetRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: num } : r)));
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalName.trim() || newGoalCost <= 0 || newGoalMonths <= 0) return;
    setGoals((prev) => [
      ...prev,
      {
        id: `g-${Date.now()}`,
        name: newGoalName.trim(),
        horizon: newGoalHorizon,
        totalCost: newGoalCost,
        months: newGoalMonths,
        savedAlready: 0,
      },
    ]);
    setNewGoalName('');
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newExpAmount.replace(',', '.'));
    if (!newExpDesc.trim() || isNaN(val) || val <= 0) return;
    setExpenses((prev) => [
      ...prev,
      {
        id: `exp-${Date.now()}`,
        date: newExpDate || 'Hoje',
        description: newExpDesc.trim(),
        classification: newExpClass,
        paymentMethod: newExpMethod,
        amount: val,
      },
    ]);
    setNewExpDesc('');
    setNewExpAmount('');
  };

  const formatBRL = (val: number) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <section id="secao-bonus" className="py-12 border-t border-stone-300 print-break-before">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#14532D] font-semibold mb-2">
          <span>Caderno de Exercícios & Modelos Práticos</span>
          <span aria-hidden="true">·</span>
          <span>5 Ferramentas Bônus Interativas</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif-editorial font-bold text-stone-900 tracking-tight">
          Bônus — Kit de Ferramentas Práticas do Leitor
        </h2>
        <p className="mt-3 text-base text-stone-700 max-w-2xl leading-relaxed">
          Utilize os 5 modelos interativos abaixo diretamente na tela para simular seu orçamento, planejar metas, anotar gastos e realizar suas verificações mensais. Você também pode imprimir esta página como caderno de controle.
        </p>
      </div>

      {/* Navegação das 5 Ferramentas Bônus */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EBE6DF] rounded-xl mb-8 no-print">
        <button
          onClick={() => setActiveTab('b1')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'b1'
              ? 'bg-[#14532D] text-white shadow-xs'
              : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
          }`}
        >
          1. Planilha de Orçamento
        </button>
        <button
          onClick={() => setActiveTab('b2')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'b2'
              ? 'bg-[#14532D] text-white shadow-xs'
              : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
          }`}
        >
          2. Verificação Mensal
        </button>
        <button
          onClick={() => setActiveTab('b3')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'b3'
              ? 'bg-[#14532D] text-white shadow-xs'
              : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
          }`}
        >
          3. Planejador de Metas
        </button>
        <button
          onClick={() => setActiveTab('b4')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'b4'
              ? 'bg-[#14532D] text-white shadow-xs'
              : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
          }`}
        >
          4. Controle de Gastos
        </button>
        <button
          onClick={() => setActiveTab('b5')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'b5'
              ? 'bg-[#14532D] text-white shadow-xs'
              : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
          }`}
        >
          5. Checklist de Fechamento
        </button>
      </div>

      {/* BÔNUS 1: PLANILHA-MODELO DE ORÇAMENTO MENSAL */}
      {activeTab === 'b1' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h3 className="text-xl font-serif-editorial font-bold text-stone-900">
                Bônus 1 — Planilha-Modelo de Orçamento Mensal
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Altere os valores de Renda Líquida, Planejado e Realizado para simular o seu mês.
              </p>
            </div>
            <button
              onClick={() => {
                setNetIncome(3500);
                setExtraIncome(0);
                setBudgetRows(INITIAL_BUDGET_ROWS);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Exemplo
            </button>
          </div>

          {/* Entradas de Renda */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6 p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                Salário / Renda Fixa Líquida (R$)
              </label>
              <input
                type="number"
                value={netIncome}
                onChange={(e) => setNetIncome(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#14532D]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                Renda Variável / Extra (R$)
              </label>
              <input
                type="number"
                value={extraIncome}
                onChange={(e) => setExtraIncome(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#14532D]"
              />
            </div>
            <div className="flex flex-col justify-center px-3 py-2 bg-white border border-stone-200 rounded-md">
              <span className="text-xs text-stone-500">Renda Total Disponível</span>
              <span className="text-lg font-bold font-mono-tabular text-stone-900">
                {formatBRL(totalIncome)}
              </span>
            </div>
            <div className="flex flex-col justify-center px-3 py-2 bg-white border border-stone-200 rounded-md">
              <span className="text-xs text-stone-500">Saldo Livre Após Realizado</span>
              <span
                className={`text-lg font-bold font-mono-tabular ${
                  totalIncome - totalActual >= 0 ? 'text-[#14532D]' : 'text-[#9A3412]'
                }`}
              >
                {formatBRL(totalIncome - totalActual)}
                {totalIncome - totalActual >= 0 ? ' (Positivo)' : ' (Atenção)'}
              </span>
            </div>
          </div>

          {/* Tabela de Orçamento */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-300 text-xs text-stone-600 bg-stone-50">
                  <th className="py-3 px-3 font-semibold">Categoria da Despesa / Meta</th>
                  <th className="py-3 px-3 font-semibold">Classificação</th>
                  <th className="py-3 px-3 font-semibold text-right">Planejado (R$)</th>
                  <th className="py-3 px-3 font-semibold text-right">Realizado (R$)</th>
                  <th className="py-3 px-3 font-semibold text-right">Diferença</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm">
                {budgetRows.map((row) => {
                  const diff = row.planned - row.actual;
                  return (
                    <tr key={row.id} className="hover:bg-stone-50/80">
                      <td className="py-3 px-3 font-medium text-stone-900">{row.category}</td>
                      <td className="py-3 px-3 text-xs text-stone-600">{row.type}</td>
                      <td className="py-3 px-3 text-right">
                        <input
                          type="number"
                          value={row.planned}
                          onChange={(e) => handleBudgetChange(row.id, 'planned', e.target.value)}
                          className="w-28 text-right px-2 py-1 text-sm font-mono-tabular bg-[#FBF9F5] border border-stone-300 rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </td>
                      <td className="py-3 px-3 text-right">
                        <input
                          type="number"
                          value={row.actual}
                          onChange={(e) => handleBudgetChange(row.id, 'actual', e.target.value)}
                          className="w-28 text-right px-2 py-1 text-sm font-mono-tabular bg-[#FBF9F5] border border-stone-300 rounded focus:outline-none focus:border-[#14532D]"
                        />
                      </td>
                      <td
                        className={`py-3 px-3 text-right font-mono-tabular text-xs font-semibold ${
                          diff >= 0 ? 'text-[#14532D]' : 'text-[#9A3412]'
                        }`}
                      >
                        {diff >= 0 ? `+${formatBRL(diff)} (Dentro)` : `${formatBRL(diff)} (Acima)`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-stone-300 bg-[#FBF9F5] font-semibold text-sm">
                  <td className="py-3.5 px-3 text-stone-900">TOTAIS DO ORÇAMENTO</td>
                  <td className="py-3.5 px-3 text-xs text-stone-600">
                    Economia Total: {formatBRL(totalSavingsActual)}
                  </td>
                  <td className="py-3.5 px-3 text-right font-mono-tabular text-stone-900">
                    {formatBRL(totalPlanned)}
                  </td>
                  <td className="py-3.5 px-3 text-right font-mono-tabular text-stone-900">
                    {formatBRL(totalActual)}
                  </td>
                  <td className="py-3.5 px-3 text-right font-mono-tabular text-[#14532D]">
                    {totalPlanned - totalActual >= 0
                      ? `Economia extra: ${formatBRL(totalPlanned - totalActual)}`
                      : `Excesso: ${formatBRL(totalPlanned - totalActual)}`}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* BÔNUS 2: LISTA DE VERIFICAÇÃO FINANCEIRA MENSAL */}
      {activeTab === 'b2' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h3 className="text-xl font-serif-editorial font-bold text-stone-900">
                Bônus 2 — Lista de Verificação Financeira Mensal
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Acompanhe os passos operacionais durante o mês para manter todas as contas em dia.
              </p>
            </div>
            <div className="text-xs font-mono-tabular font-semibold text-[#14532D]">
              Concluídos: {Object.values(checkedMonthly).filter(Boolean).length} de {BONUS_CHECKLIST_MENSAL.length} itens
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {BONUS_CHECKLIST_MENSAL.map((item) => {
              const isDone = !!checkedMonthly[item.id];
              return (
                <label
                  key={item.id}
                  className={`flex items-start gap-3.5 p-4 rounded-lg border cursor-pointer transition-colors ${
                    isDone
                      ? 'bg-[#14532D]/5 border-[#14532D]/30'
                      : 'bg-[#FBF9F5] border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() =>
                      setCheckedMonthly((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="mt-1 h-4 w-4 accent-[#14532D] rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-0.5">
                      {item.group}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        isDone ? 'line-through text-stone-500' : 'text-stone-900'
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="text-xs text-stone-600 mt-1">{item.helper}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* BÔNUS 3: MODELO DE PLANEJAMENTO DE METAS */}
      {activeTab === 'b3' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8">
          <div className="pb-6 border-b border-stone-200">
            <h3 className="text-xl font-serif-editorial font-bold text-stone-900">
              Bônus 3 — Modelo de Planejamento de Metas (Curto, Médio e Longo Prazo)
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Transforme objetivos grandes em pequenas etapas mensais e semanais calculadas automaticamente.
            </p>
          </div>

          {/* Formulário para adicionar meta */}
          <form onSubmit={handleAddGoal} className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6 p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-600 mb-1">Nome da Meta</label>
              <input
                type="text"
                placeholder="Ex.: Fazer curso profissionalizante"
                value={newGoalName}
                onChange={(e) => setNewGoalName(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#14532D]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">Prazo</label>
              <select
                value={newGoalHorizon}
                onChange={(e) => setNewGoalHorizon(e.target.value as GoalRow['horizon'])}
                className="w-full px-2.5 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:border-[#14532D]"
              >
                <option value="Curto Prazo (até 1 ano)">Curto (até 1 ano)</option>
                <option value="Médio Prazo (1 a 5 anos)">Médio (1 a 5 anos)</option>
                <option value="Longo Prazo (+5 anos)">Longo (+5 anos)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">Custo Total (R$) / Meses</label>
              <div className="flex gap-1.5">
                <input
                  type="number"
                  min={10}
                  value={newGoalCost}
                  onChange={(e) => setNewGoalCost(Number(e.target.value) || 0)}
                  className="w-2/3 px-2 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md"
                  title="Valor Total"
                />
                <input
                  type="number"
                  min={1}
                  max={240}
                  value={newGoalMonths}
                  onChange={(e) => setNewGoalMonths(Math.max(1, Number(e.target.value) || 1))}
                  className="w-1/3 px-2 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md"
                  title="Meses"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#14532D]/90 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <Plus className="w-4 h-4" />
                Adicionar Meta
              </button>
            </div>
          </form>

          {/* Tabela de Metas */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-300 text-xs text-stone-600 bg-stone-50">
                  <th className="py-3 px-3 font-semibold">Objetivo Específico</th>
                  <th className="py-3 px-3 font-semibold">Horizonte</th>
                  <th className="py-3 px-3 font-semibold text-right">Valor Total</th>
                  <th className="py-3 px-3 font-semibold text-right">Já Guardado</th>
                  <th className="py-3 px-3 font-semibold text-right">Prazo</th>
                  <th className="py-3 px-3 font-semibold text-right">Etapa Mensal</th>
                  <th className="py-3 px-3 font-semibold text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm">
                {goals.map((g) => {
                  const remaining = Math.max(0, g.totalCost - g.savedAlready);
                  const monthlyStep = remaining / Math.max(1, g.months);
                  return (
                    <tr key={g.id} className="hover:bg-stone-50/80">
                      <td className="py-3 px-3 font-medium text-stone-900">{g.name}</td>
                      <td className="py-3 px-3 text-xs text-stone-600">{g.horizon}</td>
                      <td className="py-3 px-3 text-right font-mono-tabular">{formatBRL(g.totalCost)}</td>
                      <td className="py-3 px-3 text-right font-mono-tabular text-[#14532D]">
                        {formatBRL(g.savedAlready)}
                      </td>
                      <td className="py-3 px-3 text-right font-mono-tabular">{g.months} meses</td>
                      <td className="py-3 px-3 text-right font-mono-tabular font-bold text-stone-900">
                        {formatBRL(monthlyStep)} / mês
                      </td>
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={() => setGoals((prev) => prev.filter((item) => item.id !== g.id))}
                          className="p-1.5 text-stone-400 hover:text-[#9A3412] transition-colors"
                          title="Remover meta"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* BÔNUS 4: MODELO DE CONTROLE DE GASTOS */}
      {activeTab === 'b4' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8">
          <div className="pb-6 border-b border-stone-200">
            <h3 className="text-xl font-serif-editorial font-bold text-stone-900">
              Bônus 4 — Modelo de Controle de Gastos Diários
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Registre suas saídas por data, classificação e meio de pagamento para saber exatamente para onde o dinheiro vai.
            </p>
          </div>

          <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-6 gap-3 my-6 p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">Data</label>
              <input
                type="text"
                placeholder="Ex: 18/10"
                value={newExpDate}
                onChange={(e) => setNewExpDate(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-stone-600 mb-1">Descrição do Gasto</label>
              <input
                type="text"
                placeholder="Ex: Feira livre de legumes"
                value={newExpDesc}
                onChange={(e) => setNewExpDesc(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">Tipo</label>
              <select
                value={newExpClass}
                onChange={(e) => setNewExpClass(e.target.value as ExpenseLogRow['classification'])}
                className="w-full px-2.5 py-2 text-sm bg-white border border-stone-300 rounded-md"
              >
                <option value="Fixo">Fixo</option>
                <option value="Variável">Variável</option>
                <option value="Desejo / Lazer">Desejo / Lazer</option>
                <option value="Economia">Economia</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">Valor (R$)</label>
              <input
                type="text"
                placeholder="Ex: 65,00"
                value={newExpAmount}
                onChange={(e) => setNewExpAmount(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono-tabular bg-white border border-stone-300 rounded-md"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] hover:bg-[#14532D]/90 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <Plus className="w-4 h-4" />
                Registrar
              </button>
            </div>
          </form>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-300 text-xs text-stone-600 bg-stone-50">
                  <th className="py-3 px-3 font-semibold">Data</th>
                  <th className="py-3 px-3 font-semibold">Descrição</th>
                  <th className="py-3 px-3 font-semibold">Classificação</th>
                  <th className="py-3 px-3 font-semibold">Meio de Pagamento</th>
                  <th className="py-3 px-3 font-semibold text-right">Valor (R$)</th>
                  <th className="py-3 px-3 font-semibold text-center">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-sm">
                {expenses.map((exp) => (
                  <tr key={exp.id} className="hover:bg-stone-50/80">
                    <td className="py-3 px-3 font-mono-tabular text-xs text-stone-600">{exp.date}</td>
                    <td className="py-3 px-3 font-medium text-stone-900">{exp.description}</td>
                    <td className="py-3 px-3 text-xs text-stone-600">{exp.classification}</td>
                    <td className="py-3 px-3 text-xs text-stone-600">{exp.paymentMethod}</td>
                    <td className="py-3 px-3 text-right font-mono-tabular font-semibold text-stone-900">
                      {formatBRL(exp.amount)}
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => setExpenses((prev) => prev.filter((item) => item.id !== exp.id))}
                        className="p-1.5 text-stone-400 hover:text-[#9A3412] transition-colors"
                        title="Remover lançamento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-stone-300 bg-[#FBF9F5] font-semibold text-sm">
                  <td colSpan={4} className="py-3.5 px-3 text-stone-900">
                    SOMA DOS LANÇAMENTOS REGISTRADOS
                  </td>
                  <td className="py-3.5 px-3 text-right font-mono-tabular text-stone-900">
                    {formatBRL(expenses.reduce((acc, item) => acc + item.amount, 0))}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* BÔNUS 5: CHECKLIST PARA REVISAR AS FINANÇAS NO FINAL DE CADA MÊS */}
      {activeTab === 'b5' && (
        <div className="bg-white border border-stone-200 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <h3 className="text-xl font-serif-editorial font-bold text-stone-900">
                Bônus 5 — Checklist de Revisão no Final de Cada Mês
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Roteiro de 20 minutos para fechar o mês com consciência e deixar o mês seguinte planejado.
              </p>
            </div>
            <div className="text-xs font-mono-tabular font-semibold text-[#14532D]">
              Etapas Concluídas: {Object.values(checkedReview).filter(Boolean).length} de {BONUS_CHECKLIST_REVISAO_FINAL.length}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {BONUS_CHECKLIST_REVISAO_FINAL.map((item) => {
              const isDone = !!checkedReview[item.id];
              return (
                <label
                  key={item.id}
                  className={`flex items-start gap-3.5 p-4 rounded-lg border cursor-pointer transition-colors ${
                    isDone
                      ? 'bg-[#14532D]/5 border-[#14532D]/30'
                      : 'bg-[#FBF9F5] border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() =>
                      setCheckedReview((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                    }
                    className="mt-1 h-4 w-4 accent-[#14532D] rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-0.5">
                      {item.group}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        isDone ? 'line-through text-stone-500' : 'text-stone-900'
                      }`}
                    >
                      {item.label}
                    </div>
                    <div className="text-xs text-stone-600 mt-1">{item.helper}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
