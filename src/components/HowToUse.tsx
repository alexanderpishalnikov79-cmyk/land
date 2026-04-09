import { motion } from "framer-motion";
import { howToUse } from "../data/landingContent";

export function HowToUse() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <h2 className="section-title">Ясна тройна схема без сложни инструкции.</h2>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {howToUse.map((item, index) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="glass-card relative"
          >
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-semibold text-white">
              {item.step}
            </div>
            <h3 className="mt-4 font-display text-3xl text-white sm:text-4xl">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-300 sm:text-base">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
