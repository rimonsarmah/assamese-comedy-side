"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Rhino } from "./ui/Art";

const WORDS: [string, string, string][] = [
  ["Bhat", "ভাত", "Rice. Also: a meal. Also: the meaning of life."],
  ["Sah", "চাহ", "Tea. Lal sah if black, gakhir sah if with milk."],
  ["Hobo de", "হ'ব দে", "Let it be. Solves 80% of problems."],
  ["Eneye", "এনেয়ে", "Just like that. Ends any conversation."],
  ["Lahe lahe", "লাহে লাহে", "Slowly. The official speed of Assam."],
  ["Khong", "খং", "Anger. Specifically Deuta's."],
  ["Tuponi", "টোপনি", "Sleep. Peaks right after bhat."],
  ["Dhuniya", "ধুনীয়া", "Beautiful. Used for sunsets, mekhela sadors, and Maa's pitha."],
  ["Jaal", "জাল", "Spicy. As in “eku jaal nai” before you cry."],
  ["Bor bhal", "বৰ ভাল", "Very good. Highest possible praise from Koka."],
];

export default function Footer() {
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink text-cotton">
      <div className="gamosa-band h-10" />

      {/* Guestbook */}
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p lang="as" className="font-axom text-2xl font-bold text-muga-light">আহক, চাহ খাই যাওক</p>
            <h2 className="mt-3 font-display text-5xl leading-none font-semibold sm:text-6xl">
              Sign the <span className="italic text-muga-light">guestbook.</span>
            </h2>
            <p className="mt-4 max-w-md text-cotton/70">
              Every guest who leaves an Assamese home without tea is a scandal. Leave your name, so Maa knows you came.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (name.trim()) setSent(true);
            }}
            className="self-end rounded-3xl border-2 border-cotton/30 p-6"
          >
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <p className="font-display text-3xl font-semibold">Dhonyobad, {name.trim()}!</p>
                <p className="mt-2 text-cotton/70">
                  Maa has been informed. She asks: “Bhat khala ne?” She also asks whose son/daughter you are. Please
                  prepare your family tree.
                </p>
              </motion.div>
            ) : (
              <>
                <label htmlFor="gname" className="text-sm font-semibold tracking-[0.18em] text-cotton/70 uppercase">
                  Tumar naam? (Your name)
                </label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="gname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Montu from Nalbari"
                    className="flex-1 rounded-full border-2 border-cotton/30 bg-transparent px-5 py-3 placeholder:text-cotton/40 focus:border-muga-light focus:outline-none"
                  />
                  <button className="rounded-full bg-red px-6 py-3 font-semibold hover:bg-muga hover:text-ink">
                    Sah khabo
                  </button>
                </div>
                <p className="mt-3 text-xs text-cotton/50">Nothing is stored. Only Maa remembers.</p>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Dictionary */}
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-cotton/60 uppercase">
          Pocket dictionary · <span lang="as" className="font-axom normal-case tracking-normal">সৰু অভিধান</span>
        </p>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-cotton/15 bg-cotton/15 sm:grid-cols-2 lg:grid-cols-5">
          {WORDS.map(([r, s, m]) => (
            <div key={r} className="bg-ink p-5 transition hover:bg-[#2a211b]">
              <dt>
                <span lang="as" className="block font-axom text-2xl font-bold text-muga-light">{s}</span>
                <span className="font-display text-lg italic">{r}</span>
              </dt>
              <dd className="mt-2 text-sm text-cotton/65">{m}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Sign-off */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-10 sm:px-6">
        <p lang="as" className="font-axom text-5xl font-extrabold text-red sm:text-7xl">আকৌ লগ পাম।</p>
        <p className="mt-2 font-display text-[13vw] leading-[0.9] font-semibold tracking-tight sm:text-8xl lg:text-9xl" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
          Aakou log <span className="italic text-muga-light">pam.</span>
        </p>
        <p className="mt-4 text-cotton/60">We’ll meet again. Probably at a wedding, where you will be asked “biya ketiya?”.</p>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-cotton/15 pt-8 text-sm text-cotton/55 md:flex-row md:items-end">
          <p>
            Made in Golaghat and Chennai with lal sah, one plate of momo and Maa’s 14 missed calls.
            <br />
            No rhinos were harmed. One was mildly annoyed.
          </p>
          <Rhino className="h-14 w-24 text-cotton/80" />
        </div>
      </div>
    </footer>
  );
}
