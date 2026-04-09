import { motion } from "framer-motion";

type HeroProps = {
  packsLeft: number;
};

export function Hero({ packsLeft: _packsLeft }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-3 pt-3 sm:px-6 lg:px-8 lg:pb-6 lg:pt-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel relative overflow-hidden border-slate-950/12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035),transparent_28%),radial-gradient(circle_at_18%_25%,rgba(71,85,105,0.12),transparent_24%),radial-gradient(circle_at_72%_78%,rgba(30,41,59,0.08),transparent_20%)]" />
          <div className="grid gap-0 xl:grid-cols-[0.42fr_0.58fr] xl:items-stretch">
            <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-9 xl:pr-2">
              <div>
                <h1 className="max-w-[8.2ch] font-display text-5xl leading-[0.8] tracking-[-0.03em] text-white text-balance sm:max-w-[8.8ch] sm:text-6xl lg:max-w-[8.1ch] lg:text-[4.05rem] xl:text-[4.35rem]">
                  Възстановяване на ставите без компромис.
                </h1>
                <p className="mt-4 max-w-[30rem] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-7">
                  Историята, доказателствата и формата за поръчка са събрани в един ясен premium landing flow.
                </p>
              </div>
            </div>

            <div className="relative z-10 h-full p-0 xl:border-l xl:border-slate-950/10 xl:pl-4">
              <img
                src="/images/1.png"
                alt="Steplex header"
                className="h-full min-h-full w-full object-cover xl:max-h-none"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
