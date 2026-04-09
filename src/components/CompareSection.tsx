import { Check, X } from "lucide-react";
import { compareCards } from "../data/landingContent";

export function CompareSection() {
  return (
    <section className="section-shell">
      <div className="grid items-start gap-4">
        <div className="glass-card mx-auto w-full border-slate-950/10 xl:max-w-[46rem] xl:px-4 xl:pb-4 xl:pt-4">
          <img
            src="/images/10.webp"
            alt="Пример за по-лесно движение след курс"
            className="w-full rounded-[1.35rem] border border-white/10 object-cover xl:min-h-[22rem]"
            loading="lazy"
          />
        </div>

        <div className="grid w-full items-stretch gap-4 md:grid-cols-2">
          <article className="glass-card flex h-full flex-col border-slate-950/10 px-6 py-7 lg:px-7 lg:py-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Стар подход</div>
            <h3 className="mt-4 font-display text-[2.7rem] leading-[0.88] tracking-[-0.02em] text-white">
              {compareCards.old.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {compareCards.old.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 rounded-[0.8rem] border border-white/10 bg-white/6 p-1.5 text-slate-500">
                    <X className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card flex h-full flex-col border-slate-950/16 bg-[linear-gradient(180deg,rgba(226,230,235,0.98),rgba(212,217,223,0.94))] px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.1)] lg:px-7 lg:py-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Steplex</div>
            <h3 className="mt-4 font-display text-[2.7rem] leading-[0.88] tracking-[-0.02em] text-white">
              {compareCards.new.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {compareCards.new.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 rounded-[0.8rem] border border-rose-400/35 bg-rose-500/14 p-1.5 text-rose-500">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
