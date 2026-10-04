"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";

const RAIN = [
  "Light drizzle. Everyone carries an umbrella they will not open.",
  "10 minutes of rain. Zoo Road is ankle-deep. Shopkeepers put their stock on the counter, unbothered.",
  "20 minutes. Anil Nagar is now Venice. Someone has already brought out a boat.",
  "30 minutes. A TV reporter stands waist-deep and announces a “kritrim baanpani”, an artificial flood. This is a real term. Guwahati needed one.",
  "40 minutes. A scooty floats past. The owner is still trying to kick-start it.",
  "Sun comes out. Water gone by evening. Nobody mentions it again until next Tuesday.",
];

const BANDH = [
  "Bandh. Empty highway. Street cricket on the NH, stumps made of bricks.",
  "Not bandh. But shops are closed “just in case”.",
  "Half-bandh. Bandh in the morning, market at 4pm, everyone acting surprised.",
  "Unknown. Wait for the 9pm news. Then wait for the 10pm news.",
  "Bandh called off at 11:30pm. Nobody hears. Everyone stays home anyway.",
  "Normal day. Suspicious. Deuta still won't go to the office.",
];

export default function Luit() {
  const [lvl, setLvl] = useState(0);
  const [days, setDays] = useState<Record<number, number>>({});
  const [last, setLast] = useState<number | null>(null);

  const water = Math.min(lvl, 4) * 17 + 6;
  const done = lvl >= RAIN.length - 1;

  const check = (d: number) => {
    setDays((m) => (d in m ? m : { ...m, [d]: Math.floor(Math.random() * BANDH.length) }));
    setLast(d);
  };

  return (
    <section id="luit" className="relative overflow-hidden bg-luit py-24 text-cotton md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead tone="dark" no="08" script="বুঢ়া লুইত" title={<>Burha <span className="italic text-muga-light">Luit.</span></>}>
          <Ax r="Luit" s="লুইত" m="The Brahmaputra, as poets and Maa call it" /> is the Brahmaputra. It’s poetry, it’s
          life, it’s Bhupen Hazarika songs at sunset. It also visits our home every monsoon without calling first, just
          like a relative. We move the TV to the table. We have practised.
        </SectionHead>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Rain simulator */}
          <div className="overflow-hidden rounded-3xl border-2 border-cotton/70 bg-[#0c2730]">
            <div className="flex items-center justify-between px-6 pt-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-cotton/70 uppercase">Guwahati rain simulator</p>
              <p className="text-xs text-cotton/60">Level {lvl} / {RAIN.length - 1}</p>
            </div>
            <div className="relative mx-6 mt-4 h-64 overflow-hidden rounded-2xl bg-[#1d4a58]">
              {/* houses & shops */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-around px-4">
                {[60, 90, 70, 110, 80].map((h, k) => (
                  <div key={k} className="relative w-[15%] rounded-t-md bg-paper" style={{ height: h * 1.6 }}>
                    <div className="absolute inset-x-2 top-3 grid grid-cols-2 gap-1.5">
                      {Array.from({ length: Math.floor(h / 22) * 2 }).map((_, j) => (
                        <div key={j} className="h-3 rounded-sm bg-luit/70" />
                      ))}
                    </div>
                    {k === 2 && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded bg-red px-1.5 text-[0.55rem] font-bold whitespace-nowrap">
                        ANIL NAGAR
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* water */}
              <motion.div
                className="absolute inset-x-0 bottom-0 bg-[#3b8aa0]/80"
                animate={{ height: done ? "0%" : `${water}%` }}
                transition={{ type: "spring", stiffness: 60, damping: 14 }}
              >
                <div className="absolute -top-3 left-0 h-6 w-[200%] wave-drift">
                  <svg viewBox="0 0 400 24" preserveAspectRatio="none" className="h-full w-full">
                    <path
                      d="M0 12 Q25 0 50 12 T100 12 T150 12 T200 12 T250 12 T300 12 T350 12 T400 12 V24 H0 Z"
                      fill="#3b8aa0"
                      fillOpacity=".8"
                    />
                  </svg>
                </div>
                {lvl >= 2 && !done && (
                  <motion.svg
                    initial={{ x: -60 }}
                    animate={{ x: [0, 160, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    viewBox="0 0 80 30"
                    className="absolute -top-6 left-4 h-8 w-20"
                    aria-label="A country boat"
                  >
                    <path d="M2 14 Q40 32 78 14 L70 22 Q40 30 10 22 Z" fill="#5b3a1e" />
                    <path d="M40 2 L40 16" stroke="var(--ink)" strokeWidth="2" />
                    <circle cx="40" cy="6" r="3" fill="var(--ink)" />
                  </motion.svg>
                )}
              </motion.div>
              {done && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-6 h-14 w-14 rounded-full bg-muga-light shadow-[0_0_40px_var(--muga-light)]"
                />
              )}
            </div>
            <div className="p-6">
              <p className="min-h-[3.5rem] text-lg leading-snug">{RAIN[lvl]}</p>
              <button
                onClick={() => setLvl((l) => (l >= RAIN.length - 1 ? 0 : l + 1))}
                className="mt-4 rounded-full bg-cotton px-6 py-3 font-semibold text-luit transition hover:bg-muga-light"
              >
                {done ? "Wait for next Tuesday ↺" : "Rain 10 more minutes"}
              </button>
            </div>
          </div>

          {/* Bandh calendar */}
          <div className="rounded-3xl border-2 border-cotton/70 bg-cotton p-6 text-ink">
            <div className="flex items-baseline justify-between">
              <p className="text-xs font-semibold tracking-[0.2em] text-ink-2 uppercase">Assam bandh calendar</p>
              <p lang="as" className="font-axom text-lg font-bold text-red">কালি বন্ধ নে?</p>
            </div>
            <h3 className="mt-2 font-display text-3xl font-semibold">
              <Ax r="“Kali bandh ne?”" s="কালি বন্ধ নে?" m="“Is tomorrow a bandh (shutdown)?”" />
            </h3>
            <p className="mt-2 text-ink-2">The most searched question in Assam after “bhat khala ne?”. Tap any date.</p>

            <div className="mt-6 grid grid-cols-7 gap-1.5 text-center text-xs font-semibold">
              {["Deu", "Xom", "Mong", "Budh", "Bri", "Xuk", "Xoni"].map((d) => (
                <span key={d} className="py-1 text-ink-2">{d}</span>
              ))}
              {Array.from({ length: 28 }).map((_, k) => {
                const d = k + 1;
                const r = days[d];
                const isBandh = r === 0 || r === 2 || r === 4;
                return (
                  <button
                    key={d}
                    onClick={() => check(d)}
                    className={`aspect-square rounded-lg border text-sm tabular-nums transition ${
                      r === undefined
                        ? "border-ink/15 bg-paper hover:border-ink"
                        : isBandh
                          ? "border-red bg-red text-cotton"
                          : "border-leaf bg-leaf text-cotton"
                    } ${last === d ? "ring-2 ring-ink ring-offset-2 ring-offset-cotton" : ""}`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 min-h-[4.5rem] rounded-2xl bg-paper-2 p-4">
              {last === null ? (
                <p className="text-ink-2">No date selected. Status: uncertain. As always.</p>
              ) : (
                <p>
                  <span className="font-bold">Date {last}:</span> {BANDH[days[last]]}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
