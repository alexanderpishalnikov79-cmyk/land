import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { reviews } from "../data/landingContent";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const review = reviews[activeIndex];

  return (
    <section className="section-shell pt-5 sm:pt-6">
      <div className="grid gap-6 xl:grid-cols-[0.34fr_0.66fr] xl:items-start">
        <div className="xl:sticky xl:top-8">
          <span className="section-kicker">Отзиви</span>
          <h2 className="mt-4 max-w-[11.5ch] font-display text-5xl leading-[0.8] tracking-[-0.03em] text-white sm:text-6xl xl:text-[4.5rem] 2xl:text-[5rem]">
            <span className="block">Реални отзиви</span>
            <span className="block">от хора, които вече</span>
            <span className="block">поръчаха</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel overflow-hidden p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-3 rounded-[0.95rem] border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-slate-200">
                <MessageCircle className="h-4 w-4 text-slate-700" />
                312 души коментираха тази статия
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Предишен отзив"
                  onClick={() => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length)}
                  className="icon-button"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Следващ отзив"
                  onClick={() => setActiveIndex((activeIndex + 1) % reviews.length)}
                  className="icon-button"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative mt-6 min-h-[360px] sm:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.article
                  key={review.name + activeIndex}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45 }}
                  className="grid gap-6 xl:grid-cols-[0.46fr_0.54fr]"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="h-14 w-14 rounded-[1rem] object-cover"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="text-lg font-semibold tracking-[-0.01em] text-white">{review.name}</div>
                        {review.badge ? (
                          <div className="mt-1 truncate text-xs uppercase tracking-[0.24em] text-slate-700">
                            {review.badge}
                          </div>
                        ) : null}
                        {review.replyTo ? (
                          <div className="mt-1 truncate text-xs uppercase tracking-[0.24em] text-slate-500">
                            Отговор към {review.replyTo}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-5 max-w-[36rem] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                      {review.text}
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                    {review.resultImage ? (
                      <img
                        src={review.resultImage}
                        alt={review.resultAlt ?? review.name}
                        className="h-full min-h-[320px] w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full min-h-[320px] items-center justify-center bg-[radial-gradient(circle,_rgba(71,85,105,0.1),_transparent_60%)] px-8 text-center text-sm uppercase tracking-[0.26em] text-slate-400">
                        Реален клиентски отзив
                      </div>
                    )}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {reviews.slice(0, 6).map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`glass-card min-w-0 p-4 text-left transition ${
                  activeIndex === index ? "border-rose-500/30 bg-white/8 shadow-[0_18px_46px_rgba(15,23,42,0.08)]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-11 w-11 rounded-[0.95rem] object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">{item.name}</div>
                    {item.badge ? (
                      <div className="mt-1 truncate text-[11px] uppercase tracking-[0.2em] text-slate-700">
                        {item.badge}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400 xl:line-clamp-3">
                  {item.text}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
