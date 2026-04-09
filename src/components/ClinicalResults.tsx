import { motion } from "framer-motion";
import { clinicalResults } from "../data/landingContent";

export function ClinicalResults() {
  return (
    <section className="section-shell">
      <div className="glass-panel overflow-hidden p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between xl:gap-8">
          <div className="max-w-[min(100%,44rem)] xl:flex-1">
            <h2 className="font-display text-5xl leading-[0.9] text-white text-balance sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Резултати от клинични тестове (1000 пациенти, 30 дни)
            </h2>
          </div>
          <img
            src="/images/9.png"
            alt="Steplex продуктова опаковка"
            className="w-full max-w-sm self-center drop-shadow-[0_28px_70px_rgba(0,0,0,0.45)] xl:w-[31%] xl:max-w-none xl:self-start"
            loading="lazy"
          />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {clinicalResults.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="rounded-[1.5rem] border border-emerald-600/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.14),rgba(255,255,255,0.72))] p-5"
            >
              <div className="font-display text-5xl text-white sm:text-6xl">{item.value}</div>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-emerald-800">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
