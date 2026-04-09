type OrderFormSectionProps = {
  minutes: string;
  seconds: string;
};

export function OrderFormSection({ minutes, seconds }: OrderFormSectionProps) {
  return (
    <section className="section-shell" id="to_form">
      <div className="grid gap-4 xl:grid-cols-[0.4fr_0.6fr]">
        <div className="glass-panel top-6 h-fit border-slate-950/12 p-5 sm:p-6 xl:sticky">
          <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Официална форма за поръчка</div>
          <img
            src="/images/product 2.png"
            alt="Steplex крем"
            className="mx-auto mt-6 w-full max-w-[15rem] drop-shadow-[0_28px_70px_rgba(0,0,0,0.5)] sm:max-w-sm"
            loading="lazy"
          />
          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2">Плащане при доставка</span>
            <span className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2">Доставка с куриер</span>
            <span className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2">Без рецепта</span>
          </div>
        </div>

        <div className="glass-panel border-slate-950/12 p-5 sm:p-6 lg:p-7">
          <div className="rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(51,65,85,0.08),rgba(255,255,255,0.04))] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="font-display text-4xl text-white sm:text-5xl">Въведете име и телефон</h2>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-200 sm:text-base">
                  Консултант се свързва с вас до 15 минути.
                </p>
              </div>
              <div className="rounded-[0.8rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-center">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Таймер</div>
                <div className="mt-1 font-display text-3xl text-white sm:text-4xl">
                  <span id="min">{minutes}</span> : <span id="sec">{seconds}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[0.8rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200">
              Официална страница на програмата
            </div>
            <div className="rounded-[0.8rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200">
              Ограничено количество за България
            </div>
            <div className="rounded-[0.8rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-slate-200">
              Консултант потвърждава заявката по телефона
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-end gap-5 rounded-[1rem] border border-white/10 bg-slate-950/35 p-5">
            <div className="min-w-[7rem]">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Стара цена</div>
              <div className="mt-1 text-2xl text-slate-500 line-through sm:text-3xl">78 лв</div>
            </div>
            <div className="min-w-[8rem]">
              <div className="text-xs uppercase tracking-[0.24em] text-rose-200">Промо цена</div>
              <div className="mt-1 font-display text-6xl text-white sm:text-7xl">39 лв</div>
            </div>
            <div className="text-sm leading-6 text-slate-300">
              Плащане при доставка. Без предварително плащане. Без риск.
            </div>
          </div>

          <form
            id="order_form"
            action="order.php"
            method="post"
            className="mt-6 grid gap-4 rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-6"
          >
            <input type="hidden" name="adv" value="{campaign_alias}" />
            <input type="hidden" name="subid" value="{subid}" />
            <input type="hidden" name="pixel" value="{sub_id_6}" />
            <input type="hidden" name="sub7" value="{sub_id_7}" />
            <input name="country" type="hidden" value="BG" />

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="grid gap-2">
                <label className="field-label" htmlFor="input-name">
                  Име
                </label>
                <input
                  type="text"
                  className="field-input"
                  name="name"
                  id="input-name"
                  placeholder="Въведете име..."
                  autoComplete="name"
                  aria-describedby="order-help"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="field-label" htmlFor="input-phone">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="field-input"
                  name="phone"
                  id="input-phone"
                  placeholder="Въведете телефон..."
                  autoComplete="tel-national"
                  inputMode="tel"
                  spellCheck="false"
                  aria-describedby="order-help"
                  required
                  minLength={6}
                  maxLength={13}
                />
              </div>
            </div>

            <button type="submit" className="cta-primary mt-2 w-full justify-center">
              Вземи Steplex с 50% отстъпка
            </button>
            <p className="text-center text-sm text-slate-200">Плащане при доставка. Без риск.</p>
            <p className="text-center text-sm text-slate-400">
              Оставяте само име и телефон. Консултант се свързва с вас, за да потвърди заявката.
            </p>
            <p className="text-center text-sm text-slate-400" id="order-help">
              Без предварително плащане. Плащате едва при получаване.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
