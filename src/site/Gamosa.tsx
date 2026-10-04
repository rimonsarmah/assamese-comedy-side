"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./ui/SectionHead";
import Ax from "./ui/Ax";

const USES: [string, string][] = [
  ["Towel after bath", "The official purpose. Also the least common one."],
  ["Bihuwan", "The Bihu gift. Received from every relative. You now own 47."],
  ["Felicitating the chief guest", "Every function, every school, every inauguration: one xorai, one gamosa, one long speech."],
  ["Bihu headband", "Tied on the head, it turns any man into a Bihu dancer. Skill not included."],
  ["Bike seat cover", "Assam's June sun turns the seat into a frying pan. The gamosa saves your dignity."],
  ["Face mask, 2020 edition", "Before the N95 reached Assam, every face had a gamosa. Washable, reusable, deeply patriotic."],
  ["Phone screen cleaner", "Pulled from the shoulder, wiped, returned to the shoulder. One motion."],
  ["Proof of identity abroad", "Hung on the wall of a Chennai flat so the whole building knows: Axomiya lora lives here."],
  ["Covering Maa's pitha", "Keeps the flies away. Does not keep Rimon away."],
  ["Around the neck in photos", "Graduation, wedding, passport-size, LinkedIn profile picture."],
  ["Kitchen glove", "Holding the hot handle of the pressure cooker after the third whistle."],
  ["Waving at a cricket match", "Spotted from the stands at Barsapara. Visible from space."],
  ["Wiping the sweat in a Guwahati traffic jam", "On the Ganeshguri flyover, in May, on a scooty, at 2pm."],
  ["Respect", "Placed on elders' shoulders, at the namghar, on photos of those we miss. Never a joke, this one."],
];

function GamosaCloth({ flutter }: { flutter: number }) {
  return (
    <motion.div
      key={flutter}
      initial={{ skewY: -3, rotate: -6 }}
      animate={{ skewY: [-3, 2, -1, 0], rotate: [-6, -3, -5, -4] }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-md border-2 border-ink bg-cotton shadow-[14px_14px_0_var(--ink)]"
    >
      {/* weave texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,.04) 0 1px, transparent 1px 4px), repeating-linear-gradient(90deg, rgba(0,0,0,.035) 0 1px, transparent 1px 4px)",
        }}
      />
      {/* side borders */}
      <div className="absolute inset-y-0 left-3 w-1.5 bg-red" />
      <div className="absolute inset-y-0 right-3 w-1.5 bg-red" />
      {/* top & bottom woven ends */}
      {["top-0", "bottom-0 rotate-180"].map((pos) => (
        <div key={pos} className={`absolute inset-x-0 ${pos} h-[30%]`}>
          <div className="absolute inset-x-0 top-6 h-2 bg-red" />
          <div className="absolute inset-x-0 top-10 h-1 bg-red" />
          <div className="gamosa-band absolute inset-x-0 top-14 h-10 bg-transparent" />
          <div className="absolute inset-x-0 top-26 h-1 bg-red" />
          {/* fringe */}
          <div
            className="absolute inset-x-0 top-0 h-3"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--cotton) 0 3px, transparent 3px 6px)" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 grid place-items-center">
        <p lang="as" className="font-axom text-5xl font-extrabold text-red/90">গামোচা</p>
      </div>
    </motion.div>
  );
}

export default function Gamosa() {
  const [i, setI] = useState(0);
  const next = () => setI((k) => (k + 1) % USES.length);

  return (
    <section id="gamosa" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="05" script="গামোচাৰ ব্যৱহাৰ" title={<>One <span className="italic text-red">gamosa.</span> Infinite jobs.</>}>
          The <Ax r="gamosa" s="গামোচা" m="Handwoven white cotton cloth with red borders" /> is a towel, a gift, a
          flag, a mask, a turban and a hug. It is the most overqualified piece of cloth in India.
        </SectionHead>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <button onClick={next} className="block w-full cursor-pointer" aria-label="Show the next use of the gamosa">
            <GamosaCloth flutter={i} />
          </button>

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-ink-2 uppercase">
              Use <span className="text-red tabular-nums">#{String(i + 1).padStart(2, "0")}</span> of ∞
            </p>
            <div className="relative mt-4 min-h-[13rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-5xl leading-[1] font-semibold sm:text-6xl">{USES[i][0]}</h3>
                  <p className="mt-5 max-w-lg text-xl leading-relaxed text-ink-2">{USES[i][1]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={next}
              className="mt-6 rounded-full bg-ink px-7 py-4 text-lg font-semibold text-cotton transition hover:bg-red"
            >
              Next use →
            </button>
            <div className="mt-10 flex flex-wrap gap-2">
              {USES.map(([u], k) => (
                <button
                  key={u}
                  onClick={() => setI(k)}
                  className={`h-2.5 rounded-full transition-all ${k === i ? "w-10 bg-red" : "w-2.5 bg-ink/20 hover:bg-ink/50"}`}
                  aria-label={u}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
