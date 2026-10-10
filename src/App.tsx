import React, { useState, useMemo } from 'react';
import { CHAPTERS_PART_1, EBOOK_METADATA, Chapter } from './data/ebookChaptersPart1';
import { CHAPTERS_PART_2, COMMON_MISTAKES, THIRTY_DAY_CHALLENGE } from './data/ebookChaptersPart2';
import { BonusSection } from './components/BonusSection';
import { GlossarySection } from './components/GlossarySection';
import coverIllustrationImg from './assets/images/ebook_cover_illustration_1791658209077.jpg';
import {
  BookOpen,
  Printer,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ListChecks,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';

const ALL_CHAPTERS: Chapter[] = [...CHAPTERS_PART_1, ...CHAPTERS_PART_2];

export default function App() {
  const [viewMode, setViewMode] = useState<'complete' | 'chapter'>('complete');
  const [activeChapterId, setActiveChapterId] = useState<string>('capitulo-1');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  // Estado interativo para o Desafio de 30 Dias (Capítulo 12)
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });
  const [selectedChallengeWeek, setSelectedChallengeWeek] = useState<number>(0); // 0 = todas as 4 semanas

  const toggleDay = (day: number) => {
    setCompletedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const completedDaysCount = useMemo(
    () => Object.values(completedDays).filter(Boolean).length,
    [completedDays]
  );

  const currentChapterIndex = ALL_CHAPTERS.findIndex((c) => c.id === activeChapterId);

  const navigateToSection = (sectionId: string) => {
    setMobileTocOpen(false);
    if (viewMode === 'chapter') {
      if (sectionId.startsWith('capitulo-')) {
        setActiveChapterId(sectionId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      } else {
        setViewMode('complete');
      }
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const renderChapterContent = (chapter: Chapter) => {
    return (
      <article
        key={chapter.id}
        id={chapter.id}
        className="py-12 border-t border-stone-300 first:border-t-0 print-break-before"
      >
        {/* Kicker Editorial */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
          <span className="text-[#14532D] font-mono-tabular">CAPÍTULO {chapter.number}</span>
          <span aria-hidden="true">·</span>
          <span>{chapter.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>Educação Financeira Prática</span>
        </div>

        {/* Título e Subtítulo do Capítulo */}
        <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-stone-900 tracking-tight leading-tight max-w-2xl">
          {chapter.title}
        </h2>
        <p className="mt-3 text-lg text-stone-700 font-serif-editorial italic max-w-2xl leading-relaxed">
          {chapter.subtitle}
        </p>

        {/* Síntese do Capítulo */}
        <div className="mt-6 p-5 bg-[#EBE6DF]/60 border border-stone-300/80 rounded-xl max-w-3xl">
          <div className="text-xs uppercase tracking-wider font-semibold text-stone-600 mb-1">
            O que você vai aprender neste capítulo
          </div>
          <p className="text-sm text-stone-800 leading-relaxed">{chapter.summary}</p>
        </div>

        {/* Imagem Editorial Opcional */}
        {chapter.heroImage && (
          <figure className="my-8 max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-200 aspect-16/9">
              <img
                src={chapter.heroImage}
                alt={chapter.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {chapter.heroImageCaption && (
              <figcaption className="mt-2.5 text-xs font-serif-editorial italic text-stone-600">
                {chapter.heroImageCaption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Seções do Capítulo */}
        <div className="mt-8 space-y-10 max-w-3xl">
          {chapter.sections.map((sec) => (
            <div key={sec.id} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-stone-900">
                {sec.title}
              </h3>

              {sec.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-base text-stone-800 leading-relaxed ${
                    idx === 0 && sec.id.endsWith('-sec1')
                      ? 'first-letter:text-4xl first-letter:font-serif-editorial first-letter:font-bold first-letter:text-[#14532D] first-letter:mr-1'
                      : ''
                  }`}
                >
                  {p}
                </p>
              ))}

              {/* Citação Editorial (Pull Quote) sem barra lateral grossa */}
              {sec.pullQuote && (
                <blockquote className="my-8 py-6 px-6 border-y border-stone-300 bg-[#F7F4EE] text-center">
                  <p className="text-lg sm:text-xl font-serif-editorial italic text-stone-900 leading-relaxed max-w-2xl mx-auto">
                    &ldquo;{sec.pullQuote}&rdquo;
                  </p>
                </blockquote>
              )}

              {/* Definições de Termos Antes de Utilizá-los */}
              {sec.terms && sec.terms.length > 0 && (
                <div className="my-6 bg-white border border-stone-200 rounded-xl p-6">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#14532D] mb-4">
                    Conceitos-Chave Explicados de Forma Simples
                  </div>
                  <dl className="divide-y divide-stone-200">
                    {sec.terms.map((t, i) => (
                      <div key={i} className="py-3.5 first:pt-0 last:pb-0">
                        <dt className="text-sm font-bold text-stone-900">{t.term}</dt>
                        <dd className="mt-1 text-sm text-stone-700 leading-relaxed">
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Passos Numerados */}
              {sec.steps && sec.steps.length > 0 && (
                <div className="my-6 space-y-3">
                  {sec.steps.map((st, i) => (
                    <div
                      key={i}
                      className="p-5 bg-white border border-stone-200 rounded-xl flex flex-col sm:flex-row sm:items-start gap-3.5"
                    >
                      <span className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#14532D] shrink-0 pt-0.5">
                        {st.stepNumber}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">{st.title}</h4>
                        <p className="text-sm text-stone-700 mt-1 leading-relaxed">
                          {st.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Lista em Tópicos */}
              {sec.bulletList && (
                <div className="my-6 p-6 bg-white border border-stone-200 rounded-xl">
                  {sec.bulletList.title && (
                    <h4 className="text-sm font-bold text-stone-900 mb-3">
                      {sec.bulletList.title}
                    </h4>
                  )}
                  <ul className="space-y-2.5">
                    {sec.bulletList.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700 leading-relaxed">
                        <span className="font-mono-tabular text-xs font-bold text-[#14532D] mt-0.5">
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Caixa de Exemplo Fictício */}
              {sec.exampleBox && (
                <div className="my-6 p-6 bg-[#F7F4EE] border border-stone-300 rounded-xl">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#78350F] mb-1">
                    Estudo de Caso Didático
                  </div>
                  <h4 className="text-base font-serif-editorial font-bold text-stone-900">
                    {sec.exampleBox.title}
                  </h4>
                  <p className="text-sm text-stone-700 mt-2 leading-relaxed">
                    {sec.exampleBox.scenario}
                  </p>

                  {sec.exampleBox.breakdown && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                      {sec.exampleBox.breakdown.map((b, i) => (
                        <div
                          key={i}
                          className="p-3 bg-white border border-stone-200 rounded-lg flex items-center justify-between gap-2"
                        >
                          <span className="text-xs text-stone-600">{b.label}</span>
                          <span className="text-xs font-mono-tabular font-bold text-stone-900">
                            {b.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-3 border-t border-stone-300/80 text-xs text-stone-800 leading-relaxed">
                    <strong className="font-semibold text-[#14532D]">Lição Prática: </strong>
                    {sec.exampleBox.takeaway}
                  </div>
                </div>
              )}

              {/* Tabela Didática */}
              {sec.table && (
                <div className="my-6 bg-white border border-stone-200 rounded-xl overflow-hidden">
                  <div className="px-5 py-3.5 bg-stone-100 border-b border-stone-200 text-xs font-semibold text-stone-700">
                    {sec.table.caption}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-stone-200 text-xs text-stone-600 bg-stone-50/70">
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="py-3 px-4 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-stone-50/60">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0
                                    ? 'font-semibold text-stone-900'
                                    : 'text-stone-700 font-mono-tabular'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                      {sec.table.footer && (
                        <tfoot>
                          <tr className="border-t-2 border-stone-300 bg-[#FBF9F5] text-xs font-bold text-stone-900">
                            {sec.table.footer.map((fCell, fIdx) => (
                              <td key={fIdx} className="py-3 px-4 font-mono-tabular">
                                {fCell}
                              </td>
                            ))}
                          </tr>
                        </tfoot>
                      )}
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Conteúdo Especial do Capítulo 11: 16 Erros Financeiros Comuns */}
          {chapter.id === 'capitulo-11' && (
            <div className="mt-8 space-y-4">
              {COMMON_MISTAKES.map((item) => (
                <div
                  key={item.number}
                  className="bg-white border border-stone-200 rounded-xl p-6 transition-colors hover:border-stone-300"
                >
                  <div className="flex items-center gap-2 text-xs font-mono-tabular font-bold text-[#9A3412] uppercase tracking-wider mb-1.5">
                    <span>ERRO COMUM #{String(item.number).padStart(2, '0')}</span>
                  </div>
                  <h4 className="text-lg font-serif-editorial font-bold text-stone-900 mb-3">
                    {item.error}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-stone-200/80 text-sm">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                        Por que é prejudicial:
                      </span>
                      <p className="text-stone-700 leading-relaxed">{item.whyHarmful}</p>
                    </div>
                    <div className="p-3.5 bg-[#FBF9F5] rounded-lg border border-stone-200/80">
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#14532D] mb-1">
                        Como evitar na prática:
                      </span>
                      <p className="text-stone-800 leading-relaxed">{item.howToAvoid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Conteúdo Especial do Capítulo 12: Desafio de 30 Dias */}
          {chapter.id === 'capitulo-12' && (
            <div className="mt-8">
              <div className="p-5 bg-white border border-stone-200 rounded-xl mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#14532D]">
                    Seu Progresso no Desafio de 30 Dias
                  </div>
                  <div className="text-lg font-serif-editorial font-bold text-stone-900 mt-0.5">
                    {completedDaysCount} de 30 dias concluídos ({Math.round((completedDaysCount / 30) * 100)}%)
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg no-print">
                  {[
                    { w: 0, label: 'Todos (30)' },
                    { w: 1, label: 'Semana 1' },
                    { w: 2, label: 'Semana 2' },
                    { w: 3, label: 'Semana 3' },
                    { w: 4, label: 'Semana 4' },
                  ].map((tab) => (
                    <button
                      key={tab.w}
                      onClick={() => setSelectedChallengeWeek(tab.w)}
                      className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                        selectedChallengeWeek === tab.w
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {THIRTY_DAY_CHALLENGE.filter(
                  (d) => selectedChallengeWeek === 0 || d.week === selectedChallengeWeek
                ).map((item) => {
                  const isDone = !!completedDays[item.day];
                  return (
                    <div
                      key={item.day}
                      onClick={() => toggleDay(item.day)}
                      className={`p-5 rounded-xl border cursor-pointer transition-colors flex flex-col justify-between ${
                        isDone
                          ? 'bg-[#14532D]/5 border-[#14532D]/30'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono-tabular text-xs font-bold uppercase tracking-wider text-[#14532D]">
                            DIA {String(item.day).padStart(2, '0')} · SEMANA {item.week}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              isDone ? 'text-[#14532D]' : 'text-stone-400'
                            }`}
                          >
                            {isDone ? 'Concluído' : 'Marcar como feito'}
                          </span>
                        </div>
                        <h4
                          className={`text-base font-serif-editorial font-bold mb-1.5 ${
                            isDone ? 'line-through text-stone-500' : 'text-stone-900'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-stone-700 leading-relaxed mb-3">{item.task}</p>
                      </div>
                      <div className="pt-3 border-t border-stone-200/70 text-xs text-stone-600">
                        <strong className="text-stone-800">Dica rápida: </strong>
                        {item.tip}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Resumo de Fixação do Capítulo */}
          <div className="mt-10 p-6 bg-stone-900 text-[#FBF9F5] rounded-xl">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
              Síntese Prática · Capítulo {chapter.number}
            </div>
            <ul className="space-y-2.5">
              {chapter.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      {/* TOP BAR CONTRACT: 1-row, 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-xs border-b border-stone-200 px-4 sm:px-8 py-3.5 no-print">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#capa"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('capa');
            }}
            className="text-lg font-serif-editorial font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0"
          >
            Dinheiro Organizado
          </a>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              onClick={() => navigateToSection('capitulo-1')}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Capítulos
            </button>
            <button
              onClick={() => navigateToSection('capitulo-3')}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Orçamento
            </button>
            <button
              onClick={() => navigateToSection('capitulo-12')}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Desafio 30 Dias
            </button>
            <button
              onClick={() => navigateToSection('secao-bonus')}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Planilhas Bônus
            </button>
            <button
              onClick={() => navigateToSection('secao-glossario')}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Glossário
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#14532D]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir E-book
            </button>
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 border border-stone-300 rounded-lg"
              aria-label="Abrir sumário"
            >
              {mobileTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Sumário Mobile */}
      {mobileTocOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 z-30 bg-[#FBF9F5] border-b border-stone-300 overflow-y-auto p-6 no-print">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
            Sumário Completo do E-book
          </div>
          <div className="space-y-2">
            {ALL_CHAPTERS.map((chap) => (
              <button
                key={chap.id}
                onClick={() => navigateToSection(chap.id)}
                className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-200/70 flex items-center justify-between text-sm font-medium text-stone-800"
              >
                <span className="truncate">
                  <strong className="font-mono-tabular text-[#14532D] mr-2">{chap.number}.</strong>
                  {chap.shortTitle}
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
              </button>
            ))}
            <div className="pt-3 mt-3 border-t border-stone-200 space-y-2">
              <button
                onClick={() => navigateToSection('secao-bonus')}
                className="w-full text-left py-2 px-3 rounded-lg bg-[#14532D]/10 text-[#14532D] font-semibold text-sm"
              >
                Bônus: 5 Planilhas e Checklists Práticos
              </button>
              <button
                onClick={() => navigateToSection('secao-glossario')}
                className="w-full text-left py-2 px-3 rounded-lg bg-stone-200/70 text-stone-900 font-semibold text-sm"
              >
                Glossário Financeiro (24 Termos)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CAPA DO E-BOOK (HERO EDITORIAL) */}
      <section id="capa" className="border-b border-stone-300 bg-[#F7F4EE]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Coluna Esquerda: Tipografia de Capa e Controles de Leitura */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-600 font-semibold mb-4">
                  <span>E-book Completo de Educação Financeira</span>
                  <span aria-hidden="true">·</span>
                  <span>12 Capítulos + 5 Bônus + Glossário</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-stone-900 tracking-tight leading-[1.08]">
                  {EBOOK_METADATA.title}
                </h1>

                <p className="mt-4 text-xl sm:text-2xl font-serif-editorial text-[#14532D] font-medium leading-snug max-w-2xl">
                  {EBOOK_METADATA.subtitle}
                </p>

                <p className="mt-4 text-base text-stone-700 leading-relaxed max-w-2xl">
                  {EBOOK_METADATA.deck}
                </p>

                <div className="mt-6 pt-6 border-t border-stone-300/80 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                      Público-Alvo
                    </div>
                    <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                      {EBOOK_METADATA.targetAudience}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                      Objetivo Prático
                    </div>
                    <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                      Terminar a leitura sabendo montar um orçamento, controlar gastos, criar metas, organizar faturas e planejar cada mês.
                    </p>
                  </div>
                </div>
              </div>

              {/* Barra de Modo de Leitura e Ações Principais */}
              <div className="mt-8 pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4 no-print">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateToSection('capitulo-1')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#14532D]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Iniciar Leitura no Capítulo 1
                  </button>
                  <button
                    onClick={() => navigateToSection('secao-bonus')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ListChecks className="w-4 h-4 text-[#14532D]" />
                    Abrir Planilhas Bônus
                  </button>
                </div>

                {/* Alternador de Modo de Visualização */}
                <div className="flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg">
                  <button
                    onClick={() => setViewMode('complete')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      viewMode === 'complete'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Livro Completo Contínuo
                  </button>
                  <button
                    onClick={() => setViewMode('chapter')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      viewMode === 'chapter'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Foco por Capítulo
                  </button>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Arte Editorial da Capa */}
            <div className="lg:col-span-5">
              <div className="h-full bg-white p-4 border border-stone-300 rounded-2xl shadow-xs flex flex-col justify-between">
                <div className="relative overflow-hidden rounded-xl aspect-3/4 bg-stone-800">
                  <img
                    src={coverIllustrationImg}
                    alt="Capa do E-book Dinheiro Organizado"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-stone-300 font-semibold">
                      Guia Prático para Iniciantes
                    </span>
                    <div className="text-2xl font-serif-editorial font-bold tracking-tight mt-1">
                      DINHEIRO ORGANIZADO
                    </div>
                    <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                      Orçamento · Controle de Gastos · Metas · Reserva · Uso Consciente do Crédito
                    </p>
                  </div>
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-stone-500">
                  <span>{EBOOK_METADATA.edition}</span>
                  <span className="font-mono-tabular">Leitura Integral Gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPO PRINCIPAL: SUMÁRIO LATERAL FIXO + COLUNA DE LEITURA EDITORIAL */}
      <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Barra Lateral Esquerda: Sumário Navegável (3 colunas no desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 no-print">
            <div className="p-5 bg-white border border-stone-200 rounded-xl">
              <div className="text-xs uppercase tracking-widest font-bold text-stone-500 pb-3 mb-3 border-b border-stone-200">
                Sumário da Obra
              </div>

              <nav className="space-y-1">
                {ALL_CHAPTERS.map((chap) => {
                  const isActive = viewMode === 'chapter' && activeChapterId === chap.id;
                  return (
                    <button
                      key={chap.id}
                      onClick={() => navigateToSection(chap.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#14532D] text-white font-semibold'
                          : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                      }`}
                    >
                      <span className="truncate">
                        <span
                          className={`font-mono-tabular mr-2 ${
                            isActive ? 'text-emerald-200' : 'text-[#14532D] font-semibold'
                          }`}
                        >
                          {chap.number}.
                        </span>
                        {chap.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-stone-200 space-y-1.5">
                <div className="text-[11px] uppercase tracking-widest font-bold text-stone-400 px-3 mb-1">
                  Material Complementar
                </div>
                <button
                  onClick={() => navigateToSection('secao-bonus')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-[#14532D] bg-[#14532D]/8 hover:bg-[#14532D]/15 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Bônus: 5 Modelos e Planilhas</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </button>
                <button
                  onClick={() => navigateToSection('secao-glossario')}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-stone-800 hover:bg-stone-100 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Glossário Financeiro (24 Termos)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                </button>
              </div>
            </div>
          </aside>

          {/* Coluna Direita: Conteúdo Editorial dos Capítulos, Bônus e Glossário */}
          <div className="lg:col-span-8 xl:col-span-9 min-w-0">
            {viewMode === 'complete' ? (
              <>
                {ALL_CHAPTERS.map((chapter) => renderChapterContent(chapter))}
                <BonusSection />
                <GlossarySection />
              </>
            ) : (
              <div>
                {renderChapterContent(ALL_CHAPTERS[currentChapterIndex] || ALL_CHAPTERS[0])}

                {/* Paginação entre Capítulos no modo Foco */}
                <div className="mt-8 pt-6 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
                  {currentChapterIndex > 0 ? (
                    <button
                      onClick={() => {
                        setActiveChapterId(ALL_CHAPTERS[currentChapterIndex - 1].id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Anterior: Cap. {ALL_CHAPTERS[currentChapterIndex - 1].number} —{' '}
                      {ALL_CHAPTERS[currentChapterIndex - 1].shortTitle}
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentChapterIndex < ALL_CHAPTERS.length - 1 ? (
                    <button
                      onClick={() => {
                        setActiveChapterId(ALL_CHAPTERS[currentChapterIndex + 1].id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#14532D]/90 transition-colors cursor-pointer"
                    >
                      Próximo: Cap. {ALL_CHAPTERS[currentChapterIndex + 1].number} —{' '}
                      {ALL_CHAPTERS[currentChapterIndex + 1].shortTitle}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setViewMode('complete');
                        navigateToSection('secao-bonus');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#14532D] rounded-lg hover:bg-[#14532D]/90 transition-colors cursor-pointer"
                    >
                      Ir para Planilhas Bônus e Glossário
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Aviso Educativo Obrigatório no Encerramento da Obra */}
            <div className="mt-16 p-6 bg-[#EBE6DF] border border-stone-300 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-stone-700 mb-2">
                Nota de Responsabilidade e Caráter Educativo
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {EBOOK_METADATA.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* RODAPÉ EDITORIAL LIMPO */}
      <footer className="border-t border-stone-300 bg-[#F7F4EE] py-8 px-4 sm:px-8 mt-16 no-print">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div>
            <strong className="font-serif-editorial text-stone-900">
              DINHEIRO ORGANIZADO — O Guia Prático para Cuidar Melhor das Suas Finanças
            </strong>
            <span className="mx-2">·</span>
            <span>Material Didático de Educação Financeira para Iniciantes</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateToSection('capa')}
              className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
            >
              Voltar ao Topo
            </button>
            <button
              onClick={() => window.print()}
              className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
            >
              Versão para Impressão / PDF
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
