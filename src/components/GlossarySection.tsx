import React, { useState } from 'react';
import { FINANCIAL_GLOSSARY, GlossaryEntry } from '../data/ebookBonusAndGlossary';
import { Search } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Conceitos Básicos',
    'Orçamento e Controle',
    'Crédito e Dívidas',
    'Planejamento e Proteção',
  ];

  const filteredTerms = FINANCIAL_GLOSSARY.filter((entry) => {
    const matchesSearch =
      entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.practicalExample.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="secao-glossario" className="py-12 border-t border-stone-300 print-break-before">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#14532D] font-semibold mb-2">
          <span>Referência Rápida de Consulta</span>
          <span aria-hidden="true">·</span>
          <span>{FINANCIAL_GLOSSARY.length} Termos Essenciais Explicados</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-serif-editorial font-bold text-stone-900 tracking-tight">
          Glossário Financeiro para Iniciantes
        </h2>
        <p className="mt-3 text-base text-stone-700 max-w-2xl leading-relaxed">
          Consulte rapidamente o significado claro e descomplicado dos principais termos financeiros abordados ao longo deste e-book, sempre acompanhados de exemplos práticos do dia a dia.
        </p>
      </div>

      {/* Barra de Busca e Filtro por Categoria */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 no-print">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar termo financeiro (ex.: juros, liquidez, fatura)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-[#14532D]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Termos em Destaque */}
      {filteredTerms.length === 0 ? (
        <div className="p-8 bg-white border border-stone-200 rounded-xl text-center">
          <p className="text-sm text-stone-600">
            Nenhum termo encontrado para &ldquo;{searchTerm}&rdquo;. Tente buscar por outra palavra ou limpe o filtro.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todos');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#14532D]/90 transition-colors"
          >
            Mostrar Todos os Termos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((item: GlossaryEntry, idx: number) => (
            <article
              key={item.id}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-mono-tabular font-semibold text-[#14532D]">
                    TERMO {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="uppercase tracking-wider text-stone-500 font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif-editorial font-bold text-stone-900 mb-2.5">
                  {item.term}
                </h3>

                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  {item.definition}
                </p>
              </div>

              <div className="pt-3.5 border-t border-stone-200/80 text-xs text-stone-600 leading-relaxed">
                <strong className="font-semibold text-stone-900">Na prática: </strong>
                {item.practicalExample}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
