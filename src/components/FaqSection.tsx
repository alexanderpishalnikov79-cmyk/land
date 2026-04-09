import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/landingContent";

type FaqSectionProps = {
  activeIndex: number | null;
  onToggle: (index: number) => void;
};

export function FaqSection({ activeIndex, onToggle }: FaqSectionProps) {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">FAQ</span>
        <h2 className="section-title">Често задавани въпроси</h2>
      </div>
      <div className="mt-8 space-y-3">
        {faqItems.map((item, index) => {
          const open = activeIndex === index;
          return (
            <div key={item.question} className="glass-panel overflow-hidden">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                type="button"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                onClick={() => onToggle(index)}
              >
                <span className="text-lg text-white">{item.question}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-base leading-7 text-slate-300 sm:px-6">
                      {item.answer}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
