import { motion, useReducedMotion } from "framer-motion";
import { AnimatedEditorialCard } from "./AnimatedEditorialCard";
import { storyClosing, timelineSteps } from "../data/landingContent";

const stackOffsets = [
  "xl:mr-16",
  "xl:ml-10 xl:mr-8 xl:-mt-18",
  "xl:ml-18 xl:mr-4 xl:-mt-18",
];

const mediaVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.992 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const copyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const storyReasonImage = `${import.meta.env.BASE_URL}images/6.png`;

export function StoryTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell" id="story">
      <div className="grid gap-6">
        <div className="section-heading max-w-none">
          <span className="section-kicker !text-slate-950">Интервю</span>
          <p className="mt-5 max-w-[44rem] text-[15px] leading-7 !text-slate-950 sm:text-base">
            Легендата на българските щанги дълги години криеше истината за състоянието си. Днес той разказва всичко и
            показва какво му помогна.
          </p>
        </div>
      </div>

      <div className="relative mt-8 overflow-visible">
        <div className="space-y-5 xl:space-y-0">
          {timelineSteps.slice(1).map((step, index) => (
            <AnimatedEditorialCard
              key={step.alt}
              delay={index * 0.06}
              className={`relative grid gap-4 rounded-[1.4rem] shadow-[0_20px_58px_rgba(15,23,42,0.09)] ${stackOffsets[index] ?? "xl:ml-12 xl:-mt-18"}`}
              style={{ zIndex: 20 + index }}
            >
              <div className="overflow-hidden rounded-[0.8rem] border border-slate-950/12 bg-[linear-gradient(180deg,rgba(242,245,248,0.96),rgba(223,228,234,0.94))] shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="grid gap-0 xl:grid-cols-[0.56fr_0.44fr]">
                  <motion.img
                    src={step.image}
                    alt={step.alt}
                    variants={prefersReducedMotion ? undefined : mediaVariants}
                    initial={prefersReducedMotion ? undefined : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.25 }}
                    className="h-full max-h-[440px] w-full bg-[#dde2e7] object-contain xl:min-h-[440px]"
                    loading="lazy"
                  />
                  <motion.div
                    variants={prefersReducedMotion ? undefined : copyVariants}
                    initial={prefersReducedMotion ? undefined : "hidden"}
                    whileInView={prefersReducedMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.25 }}
                    className="flex flex-col justify-center p-5 sm:p-6 lg:p-7 xl:border-l xl:border-slate-950/10"
                  >
                    <h3 className="font-display text-[2.5rem] leading-[0.88] tracking-[-0.02em] text-white sm:text-[3rem]">{step.title}</h3>
                    {step.quote ? (
                      <p className="mt-4 text-base italic leading-7 text-slate-200 sm:text-lg sm:leading-8">
                        {step.quote}
                      </p>
                    ) : null}
                    <p className="mt-4 text-[15px] leading-7 text-slate-300 sm:text-base">{step.body}</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedEditorialCard>
          ))}
        </div>

        <div className="mt-5 grid gap-4 xl:mt-2 xl:grid-cols-[0.68fr_0.32fr]">
          <AnimatedEditorialCard
            delay={0.12}
            className="h-full rounded-[1.9rem] shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
          >
            <motion.div
              variants={prefersReducedMotion ? undefined : copyVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-card h-full"
            >
              <p className="font-display text-3xl text-slate-950">{storyClosing[0]}</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{storyClosing[1]}</p>
            </motion.div>
          </AnimatedEditorialCard>

          <AnimatedEditorialCard
            delay={0.18}
            className="rounded-[1.9rem] shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
          >
            <motion.img
              src={storyReasonImage}
              alt="Илюстрация към причината за болката"
              variants={prefersReducedMotion ? undefined : mediaVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-panel h-full max-h-[320px] w-full object-cover"
              loading="lazy"
            />
          </AnimatedEditorialCard>
        </div>
      </div>
    </section>
  );
}
