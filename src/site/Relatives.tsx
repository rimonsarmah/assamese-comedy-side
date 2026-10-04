"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";

const WHO = ["Mahi", "Pehi", "Khura", "Mami", "Neighbour Aunty", "Aita", "Deuta's office friend"];

const QS: { r: string; s: string; m: string; escape: string }[] = [
  {
    r: "Biya ketiya?",
    s: "বিয়া কেতিয়া?",
    m: "When is the wedding?",
    escape: "Mention you are preparing for APSC. She will immediately start talking about her nephew who cleared it. You are free.",
  },
  {
    r: "Sakori pala ne?",
    s: "চাকৰি পালা নে?",
    m: "Did you get a job?",
    escape: "You have had a job for three years. Say “sorkari nohoi” (not government). She will look at you with pity anyway.",
  },
  {
    r: "Kiman powa?",
    s: "কিমান পোৱা?",
    m: "How much do you earn?",
    escape: "Answer in CTC. In Assam, CTC is a type of tea. She will nod with respect and offer you another cup.",
  },
  {
    r: "Iman xukai gola!",
    s: "ইমান শুকাই গ'লা!",
    m: "You've become so thin!",
    escape: "You gained 6 kg in Chennai, mostly dosa. Do not argue. Eat the pitha. Then eat the second pitha.",
  },
  {
    r: "Tumi kar lora?",
    s: "তুমি কাৰ ল'ৰা?",
    m: "Whose son are you?",
    escape: "Say Deuta's full name and village. In 4 seconds she will know your entire family tree, plus your 10th marks.",
  },
  {
    r: "Matricot kiman paisila?",
    s: "মেট্ৰিকত কিমান পাইছিলা?",
    m: "How much did you score in Class 10?",
    escape: "It has been eleven years. Say “first division” confidently. It covers everything from 60% to 100%.",
  },
  {
    r: "Ghoroloi kiyo nahila?",
    s: "ঘৰলৈ কিয় নাহিলা?",
    m: "Why didn't you come home?",
    escape: "Blame the train. Everybody in Assam accepts blaming the train. Nobody questions the train.",
  },
  {
    r: "Suwali bondhu ase ne?",
    s: "ছোৱালী বন্ধু আছে নে?",
    m: "Do you have a girlfriend?",
    escape: "Say “Maa knows.” Maa does not know. Maa will now ask you this question in front of everyone.",
  },
];

export default function Relatives() {
  const [i, setI] = useState<number | null>(null);
  const [who, setWho] = useState(0);
  const [count, setCount] = useState(0);

  const ring = () => {
    let k = Math.floor(Math.random() * QS.length);
    if (k === i) k = (k + 1) % QS.length;
    setI(k);
    setWho(Math.floor(Math.random() * WHO.length));
    setCount((c) => c + 1);
  };

  const q = i !== null ? QS[i] : null;

  return (
    <section id="mahi" className="relative overflow-hidden bg-ink py-24 text-cotton md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead tone="dark" no="06" script="আত্মীয়ৰ প্ৰশ্ন" title={<>The relatives&apos; <span className="italic text-muga-light">interrogation.</span></>}>
          Every visit home includes a press conference. No PR team. No lawyer. Only a cup of sah in your hand and
          a <Ax r="Mahi" s="মাহী" m="Mother's sister" /> who already knows the answers.
        </SectionHead>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative min-h-[23rem] rounded-3xl border-2 border-cotton/80 bg-[#2a211b] p-6 sm:p-10">
              <div className="flex items-center justify-between text-xs font-semibold tracking-[0.2em] text-cotton/60 uppercase">
                <span>Live from the drawing room</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red" /> Questions asked: {count}
                </span>
              </div>

              <AnimatePresence mode="wait">
                {q ? (
                  <motion.div
                    key={`${i}-${count}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <p className="text-sm text-cotton/60">{WHO[who]} leans forward and asks:</p>
                    <p lang="as" className="mt-3 font-axom text-4xl leading-tight font-extrabold text-muga-light sm:text-5xl">
                      “{q.s}”
                    </p>
                    <p className="mt-2 font-display text-2xl italic">
                      {q.r} <span className="text-base text-cotton/60 not-italic">({q.m})</span>
                    </p>
                    <div className="mt-8 rounded-2xl bg-cotton p-5 text-ink">
                      <p className="text-xs font-bold tracking-[0.2em] text-red uppercase">Escape plan</p>
                      <p className="mt-2 text-lg leading-snug">{q.escape}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-14">
                    <p className="font-display text-3xl italic text-cotton/70">The doorbell rings.</p>
                    <p className="mt-3 text-cotton/60">It’s a relative. There is no back door. Press the button.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <button
              onClick={ring}
              className="group relative grid aspect-square w-full max-w-xs place-items-center self-center rounded-full bg-red text-center shadow-[0_0_0_12px_rgba(179,20,31,.25),0_0_0_24px_rgba(179,20,31,.12)] transition active:scale-95"
            >
              <span>
                <span lang="as" className="block font-axom text-3xl font-extrabold">আহক, বহক</span>
                <span className="mt-2 block text-sm font-semibold tracking-wider uppercase opacity-90">
                  {count === 0 ? "Let the relative in" : "Next question"}
                </span>
              </span>
            </button>
            <p className="text-center text-cotton/60 lg:text-left">
              Note: you cannot refuse. <Ax r="“Ahok, bohok”" s="আহক, বহক" m="“Please come in, please sit.”" /> is
              said automatically. It is in our DNA, right next to the khar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
