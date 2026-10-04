"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Ax from "./ui/Ax";
import { Rhino, TeaCup } from "./ui/Art";

const ID_ROWS: { k: string; ks: string; v: React.ReactNode }[] = [
  { k: "Naam", ks: "নাম", v: "Rimon Sarmah" },
  { k: "Kaam", ks: "কাম", v: "Software Engineer. Deuta still calls it “computer-or kaam”." },
  { k: "Ghor", ks: "ঘৰ", v: "Golaghat. Lives in Chennai, about 3,000 km from Maa’s pakghor. Heart never left it." },
  { k: "Blood group", ks: "তেজৰ গ্ৰুপ", v: "Masor Tenga +ve" },
  { k: "Bhaxa", ks: "ভাষা", v: "Axomiya (fluent), Hindi (Bollywood level), English (interview only), Tamil (konjam konjam)" },
  { k: "Weakness", ks: "দুৰ্বলতা", v: "Any aunty asking “Bhat khala ne?”" },
];

function Avatar() {
  return (
    <svg viewBox="0 0 120 140" className="h-full w-full" aria-hidden="true">
      <rect width="120" height="140" fill="var(--paper-2)" />
      <path d="M18 140 C20 112 38 100 60 100 C82 100 100 112 102 140 Z" fill="var(--ink)" />
      {/* gamosa around the neck, obviously */}
      <path d="M30 108 C46 118 74 118 90 108 L94 120 C76 130 44 130 26 120 Z" fill="var(--cotton)" />
      <path d="M28 114 C46 124 74 124 92 114" stroke="var(--red)" strokeWidth="3" fill="none" />
      <path d="M72 120 L80 140 L88 138 L82 118 Z" fill="var(--cotton)" />
      <path d="M74 126 L86 124" stroke="var(--red)" strokeWidth="2.5" />
      <rect x="52" y="84" width="16" height="20" fill="#6f4429" />
      <ellipse cx="60" cy="62" rx="26" ry="30" fill="#80512f" />
      <path d="M33 58 C30 34 46 26 60 26 C78 26 92 36 87 58 C82 46 72 42 60 44 C48 44 38 48 33 58 Z" fill="var(--ink)" />
      <circle cx="50" cy="64" r="2.6" fill="var(--ink)" />
      <circle cx="70" cy="64" r="2.6" fill="var(--ink)" />
      <path d="M44 56 L55 57 M65 57 L76 56" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M51 78 C56 82 64 82 69 78" stroke="var(--ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  const [ahi, setAhi] = useState(0);

  const onAhi = () => {
    setAhi((n) => n + 1);
    if (ahi >= 1) document.getElementById("ghor-kot")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="gamosa-band gamosa-run h-10 w-full" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 pt-14 pb-24 sm:px-6 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p
            lang="as"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-axom text-6xl leading-none font-extrabold text-red sm:text-7xl md:text-8xl"
          >
            নমস্কাৰ।
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 font-display text-[19vw] leading-[0.85] font-semibold tracking-tight sm:text-[9rem] lg:text-[10.5rem]"
            style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
          >
            Moi <span className="italic text-red">Rimon.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 font-display text-2xl italic sm:text-3xl"
          >
            <Ax r="Ekdom khati Axomiya lora." s="একদম খাঁটি অসমীয়া ল'ৰা।" m="A totally genuine Assamese boy." />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2"
          >
            Software engineer in Chennai. APSC aspirant according to Deuta. Professional masor tenga critic since
            birth. I answer every question with <Ax r="“eneye”" s="এনেয়ে" m="“Nothing, just like that.” Ends any conversation." />,
            I say <Ax r="“ahi asu”" s="আহি আছোঁ" m="“I'm coming.” Said while still in bed." /> from my bed, and when
            life gets hard I say <Ax r="“hobo de”" s="হ'ব দে" m="“Let it be.” The Assamese national philosophy." />{" "}
            and pour another glass of lal sah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onAhi}
              className="group rounded-full bg-red px-7 py-4 text-lg font-semibold text-cotton shadow-[0_10px_30px_-10px_var(--red)] transition hover:-translate-y-0.5 hover:bg-red-deep"
            >
              {ahi === 0 ? "Ahi asu →" : ahi === 1 ? "Ahi asu… (still in bed)" : "Ahi asu… (fine, coming)"}
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event("maa-call"))}
              className="rounded-full border-2 border-ink px-7 py-[14px] text-lg font-semibold transition hover:bg-ink hover:text-cotton"
            >
              Call Maa back
            </button>
          </motion.div>
          <p className="mt-3 min-h-6 text-sm text-ink-2/80">
            {ahi === 1 && "In Assam, “ahi asu” means “I have not left yet.” Click again if you really mean it."}
          </p>
        </div>

        {/* Identity card */}
        <motion.div
          initial={{ opacity: 0, rotate: 6, y: 40 }}
          animate={{ opacity: 1, rotate: -2, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="relative self-center lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-cotton shadow-[12px_12px_0_var(--ink)]">
            <div className="gamosa-band h-10" />
            <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 px-5 py-3">
              <div>
                <p lang="as" className="font-axom text-lg font-bold text-red">অসমীয়া প্ৰমাণপত্ৰ</p>
                <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-ink-2 uppercase">
                  Certificate of Being Axomiya
                </p>
              </div>
              <p className="text-right text-[0.7rem] leading-tight text-ink-2">
                Issued by
                <br />
                <span className="font-semibold text-ink">Maa</span>
              </p>
            </div>
            <div className="flex gap-5 p-5">
              <div className="h-36 w-28 shrink-0 overflow-hidden rounded-lg border-2 border-ink">
                <Avatar />
              </div>
              <dl className="grid flex-1 gap-2 text-sm">
                {ID_ROWS.slice(0, 3).map((r) => (
                  <div key={r.k}>
                    <dt className="text-[0.68rem] font-semibold tracking-wider text-ink-2/80 uppercase">
                      {r.k} · <span lang="as" className="font-axom normal-case tracking-normal">{r.ks}</span>
                    </dt>
                    <dd className="leading-snug font-medium">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <dl className="grid gap-2 border-t-2 border-dashed border-ink/20 px-5 py-4 text-sm">
              {ID_ROWS.slice(3).map((r) => (
                <div key={r.k} className="grid grid-cols-[7.5rem_1fr] gap-3">
                  <dt className="text-[0.68rem] font-semibold tracking-wider text-ink-2/80 uppercase">
                    {r.k}
                    <span lang="as" className="block font-axom normal-case tracking-normal">{r.ks}</span>
                  </dt>
                  <dd className="leading-snug font-medium">{r.v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-end justify-between px-5 pb-5">
              <div>
                <p lang="as" className="font-axom text-3xl text-ink" style={{ transform: "rotate(-4deg)" }}>ৰিমন</p>
                <p className="text-[0.65rem] tracking-wider text-ink-2 uppercase">Signature</p>
              </div>
              <div className="grid h-24 w-24 rotate-[-14deg] place-items-center rounded-full border-4 border-double border-red text-center text-red">
                <span className="text-[0.6rem] leading-tight font-bold tracking-wider uppercase">
                  Maa
                  <br />
                  <span className="font-axom text-base normal-case">অনুমোদিত</span>
                  <br />
                  approved
                </span>
              </div>
            </div>
          </div>
          <TeaCup className="absolute -top-14 -left-6 h-28 w-28 -rotate-6 text-ink sm:-left-12 sm:h-32 sm:w-32" />
        </motion.div>
      </div>

      {/* A rhino strolls across, because Kaziranga */}
      <div className="relative h-24 overflow-hidden border-t border-ink/10">
        <motion.div
          className="absolute bottom-2 left-0 text-ink"
          initial={{ x: "-20vw" }}
          animate={{ x: "110vw" }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          <Rhino className="h-20 w-32 -scale-x-100" />
        </motion.div>
        <p className="absolute right-4 bottom-3 text-xs text-ink-2/70 sm:right-6">
          One-horned. Unbothered. From Kaziranga, part of which is in Golaghat district. Neighbour.
        </p>
      </div>
    </section>
  );
}
