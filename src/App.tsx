const compliments = [
  "Ты делаешь каждый мой день теплее и светлее.",
  "Рядом с тобой даже обычные моменты становятся волшебными.",
  "Твоя улыбка — моё любимое чудо.",
  "Ты невероятно красивая, нежная и вдохновляющая.",
  "С тобой хочется мечтать, смеяться и жить ярче.",
  "Ты — самый прекрасный подарок в моей жизни.",
];

const promises = [
  "Любить тебя ещё сильнее с каждым днём.",
  "Всегда поддерживать тебя и быть рядом.",
  "Беречь наши воспоминания и создавать новые.",
  "Чаще радовать тебя маленькими сюрпризами.",
];

const photoCards = [
  {
    title: "Моя самая любимая",
    hint: "Самый красивый портрет",
    fileName: "photo-1.jpg",
  },
  {
    title: "Твоя чудесная улыбка",
    hint: "То, ради чего я живу",
    fileName: "photo-2.jpg",
  },
  {
    title: "Ты — моё вдохновение",
    hint: "Снимок, который дарит радость",
    fileName: "photo-3.jpg",
  },
];

function Heart({ left, delay, duration, size }: { left: string; delay: string; duration: string; size: number }) {
  return (
    <div
      className="pointer-events-none absolute -bottom-16 text-pink-300/50"
      style={{
        left,
        animationDelay: delay,
        animationDuration: duration,
      }}
    >
      <div
        className="animate-[floatUp_linear_infinite] drop-shadow-[0_0_12px_rgba(244,114,182,0.35)]"
        style={{ fontSize: `${size}px` }}
      >
        ❤
      </div>
    </div>
  );
}

export function App() {
  const hearts = [
    { left: "6%", delay: "0s", duration: "11s", size: 20 },
    { left: "14%", delay: "2s", duration: "13s", size: 28 },
    { left: "22%", delay: "1s", duration: "10s", size: 18 },
    { left: "35%", delay: "4s", duration: "15s", size: 24 },
    { left: "48%", delay: "0.5s", duration: "12s", size: 30 },
    { left: "59%", delay: "3s", duration: "14s", size: 18 },
    { left: "68%", delay: "1.5s", duration: "9s", size: 22 },
    { left: "79%", delay: "5s", duration: "12s", size: 26 },
    { left: "88%", delay: "2.5s", duration: "16s", size: 20 },
  ];

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff1f5_0%,_#ffe4e6_32%,_#fecdd3_68%,_#fbcfe8_100%)] text-rose-950">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.9); opacity: 0; }
          10% { opacity: 0.6; }
          85% { opacity: 0.45; }
          100% { transform: translateY(-115vh) scale(1.2); opacity: 0; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart, i) => (
          <Heart key={i} {...heart} />
        ))}
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <section className="relative mt-6 rounded-[2rem] border border-white/60 bg-white/65 p-8 shadow-[0_20px_80px_rgba(190,24,93,0.15)] backdrop-blur-xl sm:p-12">
          <div className="absolute right-6 top-6 rounded-full bg-rose-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-rose-500 shadow-sm">
            8 Марта
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-rose-400">
                Для самой любимой девушки
              </p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-black leading-tight text-rose-950 sm:text-5xl lg:text-6xl">
                  С 8 Марта, моя
                  <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                    самая нежная любовь ❤
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-rose-900/80 sm:text-xl">
                  Этот маленький сайт я сделал для тебя, чтобы ещё раз напомнить:
                  ты восхитительная, особенная и бесконечно дорогая моему сердцу.
                  Спасибо за твою улыбку, тепло и счастье, которое ты даришь мне каждый день.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#photos" className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:-translate-y-0.5 hover:bg-rose-600">
                  Посмотреть фотографии
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="relative rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-rose-50 to-pink-100 p-6 shadow-2xl shadow-rose-200/60">
                <div className="rounded-[1.5rem] bg-white/80 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-2xl text-white shadow-lg shadow-rose-200">
                      ❤
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-rose-400">Моё послание</p>
                      <p className="text-lg font-bold text-rose-950">Ты — моё счастье</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-rose-900/80 sm:text-base">
                    <p>Пусть этот день подарит тебе море улыбок, цветов и ощущение того, как сильно ты любима.</p>
                    <p>Ты самая прекрасная девушка на свете.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="compliments" className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_12px_50px_rgba(190,24,93,0.12)] backdrop-blur-xl">
            <h2 className="text-3xl font-black text-rose-950">Комплименты для тебя</h2>
            <div className="mt-6 grid gap-4">
              {compliments.map((item, index) => (
                <div key={index} className="rounded-3xl border border-rose-100 bg-gradient-to-r from-white to-rose-50 px-5 py-4 shadow-sm">
                  <p className="text-base text-rose-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_12px_50px_rgba(190,24,93,0.12)] backdrop-blur-xl">
            <h2 className="text-3xl font-black text-rose-950">Мои обещания</h2>
            <div className="mt-6 space-y-4">
              {promises.map((item, index) => (
                <div key={index} className="flex gap-4 rounded-3xl bg-rose-50/80 px-5 py-4">
                  <p className="text-base leading-7 text-rose-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="photos" className="mt-10 rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_12px_50px_rgba(190,24,93,0.12)] backdrop-blur-xl">
          <h2 className="text-3xl font-black text-rose-950">Твои фотографии</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {photoCards.map((photo, index) => (
              <div key={index} className="group overflow-hidden rounded-[1.75rem] border border-rose-100 bg-gradient-to-b from-white to-rose-50 shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={`${baseUrl}photos/${photo.fileName}`} alt={photo.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-950/65 to-transparent px-5 pb-5 pt-12 text-white">
                    <p className="text-lg font-semibold">{photo.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
