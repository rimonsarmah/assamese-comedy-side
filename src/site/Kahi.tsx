"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";

type Dish = { r: string; s: string; what: string; line: string; color: string; heat: number };

const DISHES: Dish[] = [
  {
    r: "Masor Tenga",
    s: "মাছৰ টেঙা",
    what: "Light, sour fish curry with tomato, lemon or outenga (elephant apple).",
    line: "Not a dish. A personality trait. If an Assamese person says “I'm fine” without masor tenga that week, they are not fine.",
    color: "#c2410c",
    heat: 2,
  },
  {
    r: "Khar",
    s: "খাৰ",
    what: "Alkaline dish made with kolakhar, filtered water from burnt banana-peel ash. Eaten as the first item of lunch.",
    line: "Yes, ash. Yes, we eat it on purpose. We call ourselves “kharkhowa” with pride. Outsiders may not use this word.",
    color: "#6b7a3a",
    heat: 1,
  },
  {
    r: "Aloo Pitika",
    s: "আলু পিটিকা",
    what: "Mashed potato with raw mustard oil, onion, green chilli and salt.",
    line: "Five ingredients. Ten rupees. Better than any fancy mash in Chennai. The mustard oil should make your nose cry.",
    color: "#d4a73a",
    heat: 2,
  },
  {
    r: "Haah Komora",
    s: "হাঁহ কোমোৰা",
    what: "Duck curry with ash gourd. The star of every Bhogali Bihu feast.",
    line: "Best when cooked by Koka, who refuses to share the recipe. How much salt? “Andazot.” By feel. How long? “Hoi jabo.” It will be done.",
    color: "#7c2d12",
    heat: 3,
  },
  {
    r: "Gahori Baahgaaj",
    s: "গাহৰি বাঁহগাজ",
    what: "Pork with fermented bamboo shoot.",
    line: "The smell reaches the neighbour's house before you do. The neighbour then “just drops by”.",
    color: "#92400e",
    heat: 3,
  },
  {
    r: "Bhut Jolokia",
    s: "ভূত জলকীয়া",
    what: "Ghost pepper. Once certified as the hottest chilli in the world.",
    line: "Koka eats it raw with rice and says “eku jaal nai” (not spicy at all). Your Chennai colleague, raised on Chettinad chicken, says “I can handle spice.” He could not.",
    color: "#b3141f",
    heat: 5,
  },
  {
    r: "Lai Xaak",
    s: "লাই শাক",
    what: "Mustard greens, simply cooked.",
    line: "Maa adds xaak to every meal so she can tell relatives “he eats vegetables”. He does not.",
    color: "#3f7a47",
    heat: 1,
  },
  {
    r: "Til Pitha",
    s: "তিল পিঠা",
    what: "Sticky-rice crêpe rolled around black sesame and jaggery. Made for Bihu.",
    line: "Maa makes 200. Forty vanish before Bihu starts. Nobody confesses. Everybody knows it was Rimon.",
    color: "#e9c47a",
    heat: 0,
  },
  {
    r: "Narikolor Laru",
    s: "নাৰিকলৰ লাড়ু",
    what: "Coconut laddoos, stored in a tin.",
    line: "Opening a Britannia biscuit tin and finding laru: jackpot. Opening it and finding Maa's needle and thread: lifelong trauma.",
    color: "#f3e3c3",
    heat: 0,
  },
  {
    r: "Momo",
    s: "মম'",
    what: "Not originally ours. Adopted by Guwahati and loved like a firstborn.",
    line: "Eight pieces, sixty rupees, one red chutney that burns twice. Every street corner. Momo is now legally Assamese.",
    color: "#f5f0e6",
    heat: 2,
  },
];

function isDark(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const lum = 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255);
  return lum < 150;
}

export default function Kahi() {
  const [sel, setSel] = useState(0);
  const d = DISHES[sel];
  const n = DISHES.length;

  return (
    <section id="kahi" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="03" script="কাঁহীৰ ভাত" title={<>What&apos;s on the <span className="italic text-red">kahi</span></>}>
          A <Ax r="kahi" s="কাঁহী" m="Bell-metal plate, usually from Sarthebari" /> is the bell-metal plate. A{" "}
          <Ax r="bati" s="বাটি" m="Small bowl" /> is a bowl. Rice sits in the middle like a king. Tap a bowl.
        </SectionHead>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* The plate */}
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <div
              className="absolute inset-[6%] rounded-full shadow-[inset_0_0_0_10px_rgba(0,0,0,0.06),0_30px_60px_-30px_rgba(0,0,0,0.6)]"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #f6dfa0 0%, #d9ab52 35%, #b88a35 62%, #8f6524 100%)",
              }}
            />
            <div className="absolute inset-[14%] rounded-full border border-[#8f6524]/40" />
            {/* rice */}
            <div className="absolute inset-[34%] grid place-items-center rounded-full bg-cotton shadow-[inset_0_-10px_20px_rgba(0,0,0,0.08)]">
              <div className="text-center">
                <p lang="as" className="font-axom text-3xl font-bold text-ink">ভাত</p>
                <p className="text-xs font-semibold tracking-widest text-ink-2 uppercase">Bhat · the king</p>
              </div>
            </div>
            {DISHES.map((x, i) => {
              const a = (i / n) * Math.PI * 2 - Math.PI / 2;
              const r = 37;
              const left = 50 + r * Math.cos(a);
              const top = 50 + r * Math.sin(a);
              const active = i === sel;
              return (
                <button
                  key={x.r}
                  onClick={() => setSel(i)}
                  aria-pressed={active}
                  aria-label={x.r}
                  className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition duration-300"
                  style={{ left: `${left}%`, top: `${top}%`, width: "19%", height: "19%" }}
                >
                  <span
                    className={`absolute inset-0 rounded-full border-[3px] transition ${
                      active ? "scale-110 border-red" : "border-[#8f6524] hover:scale-105"
                    }`}
                    style={{
                      background: `radial-gradient(circle at 40% 35%, ${x.color} 0%, ${x.color} 55%, rgba(0,0,0,.25) 100%)`,
                      boxShadow: active ? "0 0 0 6px rgba(179,20,31,.25)" : "0 6px 12px -6px rgba(0,0,0,.5)",
                    }}
                  />
                  <span
                    lang="as"
                    className={`relative px-1 text-center font-axom text-[0.62rem] leading-tight font-bold sm:text-xs ${
                      isDark(x.color) ? "text-cotton" : "text-ink"
                    }`}
                    style={{ textShadow: isDark(x.color) ? "0 1px 2px rgba(0,0,0,.5)" : "0 1px 0 rgba(255,255,255,.6)" }}
                  >
                    {x.s}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dish card */}
          <div className="relative min-h-[24rem]">
            <AnimatePresence mode="wait">
              <motion.article
                key={d.r}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border-2 border-ink bg-cotton p-8 shadow-[10px_10px_0_var(--ink)]"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-ink-2 uppercase">
                  Bati {String(sel + 1).padStart(2, "0")} / {n}
                </p>
                <p lang="as" className="mt-4 font-axom text-5xl font-extrabold text-red">{d.s}</p>
                <h3 className="mt-1 font-display text-4xl font-semibold italic">{d.r}</h3>
                <p className="mt-5 text-ink-2">{d.what}</p>
                <p className="mt-4 font-display text-xl leading-snug">“{d.line}”</p>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold">
                  <span className="text-ink-2">Jolokia level</span>
                  <span className="flex gap-1" aria-label={`${d.heat} out of 5`}>
                    {[0, 1, 2, 3, 4].map((k) => (
                      <span key={k} className={`h-3 w-6 rounded-full ${k < d.heat ? "bg-red" : "bg-ink/10"}`} />
                    ))}
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSel((sel - 1 + n) % n)}
                className="rounded-full border-2 border-ink px-5 py-2 font-semibold hover:bg-ink hover:text-cotton"
              >
                ← Previous
              </button>
              <button
                onClick={() => setSel((sel + 1) % n)}
                className="rounded-full bg-red px-5 py-2 font-semibold text-cotton hover:bg-red-deep"
              >
                Aru olop lua →
              </button>
            </div>
            <p className="mt-3 text-sm text-ink-2">
              <Ax r="“Aru olop lua”" s="আৰু অলপ লোৱা" m="“Take a little more.” Said by Maa while already putting it on your plate." /> is
              not a button. It’s how every meal ends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
