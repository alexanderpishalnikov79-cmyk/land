import { motion } from "framer-motion";
import { benefitCards } from "../data/landingContent";

export function BenefitsBento() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <h2 className="section-title">Bento grid с ясни конверсионни ползи без шум.</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefitCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={`glass-card group ${
              index === 0 ? "md:col-span-2 xl:col-span-2" : ""
            }`}
          >
            <div className="text-xs uppercase tracking-[0.26em] text-slate-400">{card.accent}</div>
            <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">{card.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-7 text-slate-300 sm:text-base">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
