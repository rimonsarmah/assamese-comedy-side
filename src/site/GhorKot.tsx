"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";

// [english, romanised locative, Assamese locative]
const PLACES: [string, string, string][] = [
  ["Guwahati", "Guwahatit", "গুৱাহাটীত"],
  ["Jorhat", "Jorhatot", "যোৰহাটত"],
  ["Dibrugarh", "Dibrugarhot", "ডিব্ৰুগড়ত"],
  ["Tezpur", "Tezpurot", "তেজপুৰত"],
  ["Sivasagar", "Sivasagarot", "শিৱসাগৰত"],
  ["Nagaon", "Nagaonot", "নগাঁৱত"],
  ["Majuli", "Majulit", "মাজুলীত"],
  ["Tinsukia", "Tinsukiat", "তিনিচুকীয়াত"],
  ["Golaghat", "Golaghatot", "গোলাঘাটত"],
  ["Lakhimpur", "Lakhimpurot", "লখিমপুৰত"],
  ["Nalbari", "Nalbarit", "নলবাৰীত"],
  ["Barpeta", "Barpetat", "বৰপেটাত"],
  ["Dhemaji", "Dhemajit", "ধেমাজিত"],
  ["Mangaldoi", "Mangaldoit", "মঙলদৈত"],
];

// [romanised genitive, Assamese genitive, english]
const KIN: [string, string, string][] = [
  ["Mahir", "মাহীৰ", "mother's sister's"],
  ["Pehir", "পেহীৰ", "father's sister's"],
  ["Mamar", "মামাৰ", "mother's brother's"],
  ["Khurar", "খুৰাৰ", "father's younger brother's"],
  ["Bordeutar", "বৰদেউতাৰ", "father's elder brother's"],
  ["Bhindeur", "ভিনদেউৰ", "elder sister's husband's"],
  ["Bour", "বৌৰ", "elder brother's wife's"],
  ["Baideur", "বাইদেউৰ", "elder sister's"],
  ["Aitar", "আইতাৰ", "grandmother's"],
  ["Kokar", "ককাৰ", "grandfather's"],
];

function pick<T>(arr: T[], n: number) {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  return out;
}

function randomChain() {
  return pick(KIN, 3 + Math.floor(Math.random() * 2));
}

export default function GhorKot() {
  const [place, setPlace] = useState<number | null>(null);
  const [chain, setChain] = useState<[string, string, string][]>([]);
  const [tries, setTries] = useState(0);

  const ask = (i: number) => {
    setPlace(i);
    setTries((t) => t + 1);
    setChain(randomChain());
  };

  const p = place !== null ? PLACES[place] : null;

  return (
    <section id="ghor-kot" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="01" script="ঘৰ ক'ত?" title={<>Ghor <span className="italic text-red">kot?</span></>}>
          Two Assamese people meet. First question is never “how are you”. It is{" "}
          <Ax r="“Ghor kot?”" s="ঘৰ ক'ত?" m="“Where is your home?” Meaning: which district, which village, whose son." />{" "}
          Within three minutes, a common relative is found. Every time. Try it.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-ink-2 uppercase">Tumar ghor kot? Pick one</p>
            <div className="flex flex-wrap gap-2">
              {PLACES.map(([name], i) => (
                <button
                  key={name}
                  onClick={() => ask(i)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
                    place === i
                      ? "border-red bg-red text-cotton"
                      : "border-ink/20 bg-cotton hover:border-ink hover:bg-ink hover:text-cotton"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-2">
              Living in Chennai does not count. Your ghor is where Maa is.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border-2 border-ink bg-cotton p-6 shadow-[10px_10px_0_var(--red)] sm:p-10">
              <AnimatePresence mode="wait">
                {!p ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[18rem] flex-col justify-center"
                  >
                    <p lang="as" className="font-axom text-5xl font-bold text-ink/15">{"ঘৰ ক'ত?"}</p>
                    <p className="mt-4 max-w-sm text-ink-2">
                      Pick a district. Rimon will locate your relationship to him using the ancient Assamese kinship
                      algorithm.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${place}-${tries}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm font-semibold tracking-[0.18em] text-ink-2 uppercase">You: “{p[0]}.” Rimon:</p>
                    {p[0] === "Golaghat" && (
                      <p className="mt-3 inline-block rounded-full bg-red px-4 py-1.5 text-sm font-semibold text-cotton">
                        <span lang="as" className="font-axom">ময়ো গোলাঘাটৰ!</span> Moiyo Golaghator! (I&apos;m from Golaghat too!)
                      </p>
                    )}
                    <p lang="as" className="mt-4 font-axom text-2xl leading-relaxed font-semibold text-red sm:text-3xl">
                      “অ! মোৰ {chain.map((k) => k[1]).join(" ")} ঘৰো {p[2]}!”
                    </p>
                    <p className="mt-2 font-display text-xl italic sm:text-2xl">
                      “O! Mur {chain.map((k) => k[0]).join(" ")} ghoro {p[1]}!”
                    </p>
                    <p className="mt-3 text-ink-2">
                      Translation: my {chain.map((k) => k[2]).join(" ")} house is also in {p[0]}!
                    </p>

                    <ol className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <li className="rounded-full bg-ink px-3 py-1 text-cotton">Rimon</li>
                      {chain.map((k, i) => (
                        <motion.li
                          key={k[0]}
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + i * 0.18 }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-red">→</span>
                          <span className="rounded-full border border-ink/25 px-3 py-1">{k[0].replace(/r$/, "")}</span>
                        </motion.li>
                      ))}
                      <li className="flex items-center gap-2">
                        <span className="text-red">→</span>
                        <span className="rounded-full bg-red px-3 py-1 text-cotton">You</span>
                      </li>
                    </ol>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-ink/15 pt-6">
                      <p className="font-display text-lg">
                        Verdict:{" "}
                        <span className="font-semibold text-red">
                          {p[0] === "Golaghat" ? "Not a relative. Family." : "Relative."}
                        </span>{" "}
                        <Ax r="Ahok, sah khai jaok." s="আহক, চাহ খাই যাওক।" m="Please come, have tea before you go." />
                      </p>
                      <button
                        onClick={() => place !== null && ask(place)}
                        className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cotton hover:bg-red"
                      >
                        Find another connection
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
