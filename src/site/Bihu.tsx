"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";
import { Dhol, Jaapi } from "./ui/Art";

const BIHUS = [
  {
    key: "rongali",
    r: "Rongali Bihu",
    s: "ৰঙালী বিহু",
    when: "Mid-April · Bohag",
    mood: "The loud one",
    points: [
      <>Assamese New Year. Dhol, pepa, gogona and toka come out. The whole state becomes a dance floor for a week.</>,
      <>
        Day one is <Ax r="Goru Bihu" s="গৰু বিহু" m="Cattle Bihu, the first day" />. Cows get a bath with turmeric and
        are slapped gently with gourd and brinjal while everyone sings{" "}
        <Ax r="“Lau kha, bengena kha, bosore bosore barhi ja”" s="লাও খা, বেঙেনা খা, বছৰে বছৰে বাঢ়ি যা" m="“Eat gourd, eat brinjal, grow bigger every year.”" />
        . Nobody has asked the cow.
      </>,
      <>
        You get a new gamosa as <Ax r="Bihuwan" s="বিহুৱান" m="The Bihu gift, usually a gamosa" />. You now own 47
        gamosas. Each one is sacred. None can be thrown away.
      </>,
      <>Even Deuta dances. Deuta has not moved this fast since 1998. The video goes to every family WhatsApp group by 9pm.</>,
    ],
  },
  {
    key: "bhogali",
    r: "Bhogali Bihu",
    s: "ভোগালী বিহু",
    when: "Mid-January · Magh",
    mood: "The eating one",
    points: [
      <>
        The harvest is in. The night before is <Ax r="Uruka" s="উৰুকা" m="Feast night before Bhogali Bihu" />: a giant
        community feast, a <Ax r="bhelaghar" s="ভেলাঘৰ" m="Temporary hut made of hay and bamboo" /> built from hay,
        and nobody sleeps.
      </>,
      <>
        Tradition allows harmless “borrowing” of firewood, vegetables and occasionally a neighbour’s chicken. Uncle
        knows his chicken is gone. Uncle did the same in 1987.
      </>,
      <>
        At dawn, the <Ax r="meji" s="মেজি" m="Ceremonial bonfire tower" /> is burned. You pray, warm your hands and
        eat pitha straight from the fire. Then sleep for two days.
      </>,
      <>Calorie count: yes.</>,
    ],
  },
  {
    key: "kongali",
    r: "Kongali Bihu",
    s: "কঙালী বিহু",
    when: "Mid-October · Kati",
    mood: "The quiet one",
    points: [
      <>
        <Ax r="Kongal" s="কঙাল" m="Poor, having nothing" /> means poor. The granary is empty, the paddy is still growing.
        No feast. No dance.
      </>,
      <>
        You light a <Ax r="saki" s="চাকি" m="Small earthen oil lamp" /> under the tulsi plant and in the paddy field,
        and pray for a good harvest.
      </>,
      <>Peaceful, beautiful, important. And the only Bihu where nobody posts an Instagram reel.</>,
      <>Rimon’s review: ★★★★☆. Lovely lamps. Would like a laru.</>,
    ],
  },
];

export default function Bihu() {
  const [i, setI] = useState(0);
  const b = BIHUS[i];

  return (
    <section id="bihu" className="relative overflow-hidden bg-red py-24 text-cotton md:py-32">
      <div className="gamosa-band absolute inset-x-0 top-0 h-10" />
      <div className="pointer-events-none absolute -right-24 top-24 hidden select-none font-axom text-[22rem] leading-none font-extrabold text-red-deep/60 lg:block" lang="as" aria-hidden="true">
        বিহু
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <SectionHead tone="dark" no="04" script="তিনিটা বিহু" title={<>Three Bihus. <span className="italic text-muga-light">One mood.</span></>}>
          Assamese people have three Bihus a year. Outsiders know one. We correct them every time, kindly, while dancing.
        </SectionHead>

        <div className="mb-10 flex flex-wrap gap-3" role="tablist" aria-label="Choose a Bihu">
          {BIHUS.map((x, k) => (
            <button
              key={x.key}
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={`rounded-full border-2 px-5 py-3 text-left transition ${
                k === i ? "border-cotton bg-cotton text-red" : "border-cotton/40 hover:border-cotton"
              }`}
            >
              <span lang="as" className="block font-axom text-lg leading-tight font-bold">{x.s}</span>
              <span className="text-xs font-semibold tracking-wider uppercase opacity-80">{x.when}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-muga-light uppercase">{b.mood}</p>
                <h3 className="mt-2 font-display text-6xl leading-none font-semibold italic">{b.r}</h3>
                <div className="mt-10 flex items-end gap-6 text-ink">
                  {b.key === "rongali" && <Dhol className="dhol-beat h-24 w-36" />}
                  {b.key === "rongali" && <Jaapi className="h-14 w-32" />}
                  {b.key === "bhogali" && (
                    <svg viewBox="0 0 120 150" className="h-40 w-32" aria-hidden="true">
                      <g className="flicker">
                        <path d="M60 10 C80 40 96 60 88 90 C82 110 38 110 32 90 C24 62 46 46 60 10 Z" fill="var(--muga-light)" />
                        <path d="M60 40 C72 58 78 74 72 92 C66 104 52 104 48 92 C42 76 52 62 60 40 Z" fill="var(--cotton)" />
                      </g>
                      <path d="M20 145 L60 95 L100 145 Z" fill="var(--ink)" />
                      <path d="M34 145 L60 112 L86 145" stroke="var(--muga)" strokeWidth="3" fill="none" />
                    </svg>
                  )}
                  {b.key === "kongali" && (
                    <svg viewBox="0 0 160 120" className="h-32 w-44" aria-hidden="true">
                      {[20, 70, 120].map((x, k) => (
                        <g key={x}>
                          <ellipse cx={x + 10} cy="104" rx="18" ry="7" fill="var(--ink)" />
                          <path d={`M${x - 6} 100 Q${x + 10} 112 ${x + 26} 100 Z`} fill="#8a4b23" />
                          <path
                            className="flicker"
                            style={{ animationDelay: `${k * 0.3}s` }}
                            d={`M${x + 10} 72 C${x + 18} 84 ${x + 18} 94 ${x + 10} 98 C${x + 2} 94 ${x + 2} 84 ${x + 10} 72 Z`}
                            fill="var(--muga-light)"
                          />
                        </g>
                      ))}
                    </svg>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.ul
                key={b.key}
                className="grid gap-4 sm:grid-cols-2"
                initial="h"
                animate="v"
                exit="h"
                variants={{ v: { transition: { staggerChildren: 0.07 } }, h: {} }}
              >
                {b.points.map((p, k) => (
                  <motion.li
                    key={k}
                    variants={{ h: { opacity: 0, y: 16 }, v: { opacity: 1, y: 0 } }}
                    className="rounded-2xl border border-cotton/25 bg-red-deep/50 p-6 leading-relaxed backdrop-blur-sm"
                  >
                    <span className="mb-3 block font-display text-3xl text-muga-light">0{k + 1}</span>
                    {p}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
