"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";

const QUIZ: { q: string; opts: string[]; a: number; why: string }[] = [
  {
    q: "Your friend says “Ahi asu” on the phone. Where is he?",
    opts: ["On the way", "Outside your house", "In bed", "Already there"],
    a: 2,
    why: "“Ahi asu” (I'm coming) is said from bed, the bathroom, or the middle of lunch. Never from the road.",
  },
  {
    q: "A guest arrives without warning. Your first words?",
    opts: ["“Ki lage?” (What do you want?)", "“Ahok, bohok. Sah khabo ne?”", "“Phone kori ahiba.” (Call next time.)", "Hide behind the curtain"],
    a: 1,
    why: "Come in, sit, will you have tea? Hiding is allowed only after the tea is served.",
  },
  {
    q: "Khar is made with…",
    opts: ["Baking soda", "Banana-peel ash", "Sea salt", "Maa's secret, unknown to science"],
    a: 1,
    why: "Kolakhar: water filtered through the ash of burnt banana peel. Also, technically, Maa's secret.",
  },
  {
    q: "“Lau kha, bengena kha” is sung to…",
    opts: ["Children before exams", "Cows on Goru Bihu", "The groom at a wedding", "The Brahmaputra"],
    a: 1,
    why: "Eat gourd, eat brinjal, grow every year. Sung to the cows on the first day of Rongali Bihu.",
  },
  {
    q: "Someone asks “Ki kori asa?” The correct reply is…",
    opts: ["A detailed update", "“Eneye.”", "“Kaam.” (Work.)", "Silence"],
    a: 1,
    why: "“Eneye.” Just like that. Complete answer. No follow-up questions possible.",
  },
  {
    q: "On which night do the neighbour's chickens mysteriously vanish?",
    opts: ["Rongali Bihu", "Kongali Bihu", "Uruka, before Bhogali Bihu", "Every Sunday"],
    a: 2,
    why: "Uruka night. Tradition. The neighbour did it too. Everyone did it.",
  },
  {
    q: "The whole lane shouts “Current gol!” What happened?",
    opts: ["A river current", "Power cut", "The current affairs show ended", "Someone scored a goal"],
    a: 1,
    why: "Power cut. Announced loudly by every house, in case the others hadn't noticed the darkness.",
  },
  {
    q: "Your relative asks your CTC. What do they think it is?",
    opts: ["Cost to company", "A type of tea", "A government exam", "A bus company"],
    a: 1,
    why: "Crush, Tear, Curl. The most respected CTC in Assam comes in a 500g packet.",
  },
];

const RESULTS = [
  { min: 8, title: "Khati Axomiya.", line: "Maa will make extra pitha for you. Koka will let you sit on his chair. Once." },
  { min: 6, title: "Almost Axomiya.", line: "One more Bihu and a bowl of khar and you're fully certified." },
  { min: 3, title: "Chennai-returned.", line: "You still say “ahi asu”, but now you also say “da” and pack curd rice in your tiffin. Maa is concerned." },
  { min: 0, title: "Tourist level.", line: "You had momo in Guwahati once. Hobo de. Come home, eat masor tenga, and try again." },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const finished = step >= QUIZ.length;
  const q = QUIZ[Math.min(step, QUIZ.length - 1)];
  const result = RESULTS.find((r) => score >= r.min)!;

  const choose = (k: number) => {
    if (picked !== null) return;
    setPicked(k);
    if (k === q.a) setScore((s) => s + 1);
  };
  const next = () => {
    setPicked(null);
    setStep((s) => s + 1);
  };
  const reset = () => {
    setStep(0);
    setScore(0);
    setPicked(null);
  };

  return (
    <section id="quiz" className="relative bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="09" script="তুমি খাঁটি অসমীয়া নে?" title={<>Tumi khati <span className="italic text-red">Axomiya</span> ne?</>}>
          Eight questions. No Google. Maa is watching. Score 8 and Rimon personally sends you a til pitha (emotionally).
        </SectionHead>

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex gap-1.5">
            {QUIZ.map((_, k) => (
              <div key={k} className={`h-2 flex-1 rounded-full ${k < step ? "bg-red" : k === step && !finished ? "bg-ink" : "bg-ink/10"}`} />
            ))}
          </div>

          <div className="rounded-3xl border-2 border-ink bg-cotton p-6 shadow-[10px_10px_0_var(--ink)] sm:p-10">
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <p className="text-sm font-semibold tracking-[0.2em] text-ink-2 uppercase">
                    Question {step + 1} of {QUIZ.length}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight font-semibold sm:text-4xl">{q.q}</h3>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {q.opts.map((o, k) => {
                      const state =
                        picked === null ? "idle" : k === q.a ? "right" : k === picked ? "wrong" : "dim";
                      return (
                        <button
                          key={o}
                          onClick={() => choose(k)}
                          disabled={picked !== null}
                          className={`rounded-2xl border-2 px-5 py-4 text-left font-medium transition ${
                            state === "idle"
                              ? "border-ink/20 hover:border-ink hover:bg-paper"
                              : state === "right"
                                ? "border-leaf bg-leaf text-cotton"
                                : state === "wrong"
                                  ? "border-red bg-red text-cotton"
                                  : "border-ink/10 opacity-50"
                          }`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  {picked !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <p className="max-w-md text-ink-2">
                        <span className="font-bold text-ink">{picked === q.a ? "Hoi! Thik!" : "Nohoi."}</span> {q.why}
                      </p>
                      <button onClick={next} className="rounded-full bg-ink px-6 py-3 font-semibold text-cotton hover:bg-red">
                        {step === QUIZ.length - 1 ? "See result" : "Next →"}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                  <p className="font-display text-8xl font-semibold text-red tabular-nums">
                    {score}/{QUIZ.length}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-semibold italic">{result.title}</h3>
                  <p className="mx-auto mt-3 max-w-md text-lg text-ink-2">{result.line}</p>
                  <button onClick={reset} className="mt-8 rounded-full bg-red px-7 py-3 font-semibold text-cotton hover:bg-red-deep">
                    Aakou ekbar (once more)
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
