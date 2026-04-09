import { motion } from "framer-motion";

type TrustUrgencyProps = {
  packsLeft: number;
  minutes: string;
  seconds: string;
};

export function TrustUrgency({ packsLeft, minutes, seconds }: TrustUrgencyProps) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-panel border-rose-500/20 bg-[linear-gradient(180deg,rgba(248,0,0,0.16),rgba(255,255,255,0.04))] p-5 sm:p-6"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-center">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-400">Остават</div>
              <div className="mt-3 font-display text-6xl text-white">{packsLeft}</div>
              <div className="mt-2 text-sm text-slate-300">промо опаковки</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-center">
              <div className="text-xs uppercase tracking-[0.26em] text-slate-400">Таймер</div>
              <div className="mt-3 font-display text-4xl text-white sm:text-5xl">
                {minutes}:{seconds}
              </div>
              <div className="mt-2 text-sm text-slate-300">време на офертата</div>
            </div>
          </div>

          <a href="#to_form" className="cta-primary mt-6 w-full justify-center">
            Поръчай сега
          </a>

          <p className="mt-4 text-sm leading-6 text-slate-200">
            Внимание! Поръчвайте само от официалния сайт. Steplex с до 50% отстъпка по програмата „Здрави
            стави“.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
