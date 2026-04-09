import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Droplets, FlaskConical, HeartPulse, ShieldPlus, Sparkles, TrendingDown, Waves, Zap } from "lucide-react";
import { courseResults, doctorBullets } from "../data/landingContent";

const icons = [HeartPulse, FlaskConical, ShieldPlus, Sparkles];
const resultIcons = [Droplets, Zap, TrendingDown, Waves];
const productImage = `${import.meta.env.BASE_URL}images/product 2.png`;
const jointImage = `${import.meta.env.BASE_URL}images/7.webp`;
const doctorImage = `${import.meta.env.BASE_URL}images/8.png`;

export function DoctorSection() {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const x = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 });
  const shadow = useMotionTemplate`${x}px ${y}px 80px rgba(248, 0, 0, 0.2)`;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(py * -12);
    rotateY.set(px * 16);
    x.set(px * 26);
    y.set(py * 22);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  return (
    <section className="section-shell">
      <div className="grid items-stretch gap-4 xl:grid-cols-[0.52fr_0.48fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          style={{ rotateX, rotateY, x, y, boxShadow: shadow }}
          animate={{ y: [0, -10, 0] }}
          transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          className="glass-panel relative isolate flex min-h-[400px] items-center justify-center overflow-hidden border-slate-950/12 p-5 sm:min-h-[460px] sm:p-6 lg:min-h-[560px] lg:p-8 xl:min-h-[720px]"
          onMouseMove={handleMove}
          onMouseLeave={reset}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(51,65,85,0.08),transparent_35%,rgba(15,23,42,0.12)_80%)]" />
          <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/15 bg-white/8 blur-sm" />
          <div className="absolute bottom-14 right-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(30,41,59,0.14),_transparent_70%)] blur-2xl" />

          <motion.img
            src={productImage}
            alt="Steplex крем"
            animate={{ rotateZ: [0, 2, -2, 0] }}
            transition={{
              rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 mx-auto w-full max-w-[250px] drop-shadow-[0_38px_70px_rgba(0,0,0,0.5)] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[390px]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card h-full border-slate-950/12"
        >
          <img
            src={jointImage}
            alt="Схема на става и ставна течност"
            className="aspect-[1.12/1] w-full rounded-[1rem] border border-white/10 object-cover"
            loading="lazy"
          />
          <div className="mt-6 grid gap-4">
            {doctorBullets.map((bullet, index) => {
              const Icon = icons[index];
              return (
                <div key={bullet} className="flex items-start gap-4">
                  <div className="mt-1 rounded-[0.7rem] border border-white/10 bg-white/6 p-3 text-slate-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-slate-300 sm:text-[1.0625rem]">{bullet}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="glass-panel mt-4 overflow-hidden border-slate-950/12 xl:mt-3"
      >
        <div className="grid gap-0 items-stretch lg:grid-cols-[0.3fr_0.7fr]">
          <img
            src={doctorImage}
            alt="Д-р Орлин Филипов"
            className="h-full min-h-full w-full self-stretch object-cover lg:max-h-[520px]"
            loading="lazy"
          />

          <div className="p-5 sm:p-6 lg:p-8">
            <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl lg:text-6xl">Д-р Орлин Филипов</h2>
            <p className="mt-3 max-w-3xl text-sm uppercase tracking-[0.26em] text-slate-400">
              Ortoped, специалист по ставни заболявания, над 20 години опит
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.68fr_0.32fr]">
              <div className="space-y-3">
                <p className="text-[15px] leading-7 text-slate-300 sm:text-base">
                  Над 70% от хората над 45 години имат дегенеративни промени в ставите. И повечето се лекуват
                  неправилно: диклофенак, кетопрофен, инжекции. Това намалява болката временно, но уврежда
                  организма. А ставата продължава да се разрушава.
                </p>
                <p className="text-[15px] leading-7 text-slate-300 sm:text-base">
                  Основният проблем е липсата на ставна течност, естествената "смазка" на ставите. Без нея
                  костите се трият, появява се възпаление и болка.
                </p>
                <p className="text-[15px] leading-7 text-slate-300 sm:text-base">
                  Steplex стимулира производството на ставна течност на клетъчно ниво. Съдържа натурални
                  компоненти: ментол и планинска арника. Намалява възпалението и подпомага възстановяването на
                  тъканите.
                </p>
              </div>

              <div className="rounded-[1rem] border border-white/10 bg-white/8 p-4 shadow-[0_22px_58px_rgba(15,23,42,0.1)]">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">След пълен курс</div>
                <ul className="mt-4 grid gap-3">
                  {courseResults.map((item, index) => {
                    const ResultIcon = resultIcons[index] ?? Sparkles;

                    return (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-[0.8rem] border border-white/10 bg-white/80 px-3 py-3 text-sm text-slate-700"
                      >
                        <span className="mt-0.5 rounded-[0.7rem] border border-slate-400/20 bg-slate-700/8 p-1.5 text-slate-700">
                          <ResultIcon className="h-4 w-4" />
                        </span>
                        <span className="leading-6">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
