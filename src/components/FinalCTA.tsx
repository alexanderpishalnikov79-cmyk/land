export function FinalCTA() {
  return (
    <>
      <section className="section-shell pb-24">
        <div className="glass-panel border-slate-950/12 bg-[linear-gradient(135deg,rgba(51,65,85,0.16),rgba(30,41,59,0.1)_38%,rgba(244,246,248,0.62)_100%)] p-6 text-center shadow-[0_28px_75px_rgba(15,23,42,0.1)] sm:p-10">
          <h2 className="mx-auto mt-1 max-w-4xl font-display text-5xl leading-[0.84] tracking-[-0.03em] text-white sm:text-6xl">
            Поръчай Steplex сега, докато цената е 39 лв и формата е активна.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-200 sm:text-base">
            Плащане при доставка, без рецепта и с директно потвърждение по телефона.
          </p>
          <a href="#to_form" className="cta-primary mx-auto mt-8">
            Поръчай Steplex Сега
          </a>
        </div>
      </section>

      <a href="#to_form" className="floating-cta">
        Поръчай Steplex Сега
      </a>
    </>
  );
}
