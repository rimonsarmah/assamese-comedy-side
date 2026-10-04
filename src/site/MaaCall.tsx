"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const REPLIES: Record<string, string> = {
  ate: "Ki khali? Kiman khali? Photo pothai de. (What did you eat? How much? Send a photo.)",
  coming: "Toi sodai “ahi asu” kow. (You always say “coming”.) Ghoroloi aah! (Come home!)",
};

export default function MaaCall() {
  const [open, setOpen] = useState(false);
  const [missed, setMissed] = useState(13);
  const [reply, setReply] = useState<string | null>(null);

  useEffect(() => {
    const onCall = () => {
      setReply(null);
      setOpen(true);
      setMissed((m) => m + 1);
    };
    const first = setTimeout(onCall, 25000);
    window.addEventListener("maa-call", onCall);
    return () => {
      clearTimeout(first);
      window.removeEventListener("maa-call", onCall);
    };
  }, []);

  const answer = (k: keyof typeof REPLIES) => {
    setReply(REPLIES[k]);
    setTimeout(() => setOpen(false), 4500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Maa is calling"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed right-4 bottom-4 left-4 z-[70] mx-auto max-w-sm overflow-hidden rounded-3xl border-2 border-ink bg-cotton shadow-[8px_8px_0_var(--ink)] sm:left-auto"
        >
          <div className="gamosa-band h-6" />
          <div className="p-5">
            <div className="flex items-center gap-3">
              <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red font-axom text-xl font-bold text-cotton" lang="as">
                মা
                <span className="absolute -inset-1 animate-ping rounded-full border-2 border-red/50" />
              </div>
              <div className="flex-1">
                <p className="font-bold">Maa ❤️</p>
                <p className="text-xs text-ink-2">{missed} missed calls · now calling…</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-sm text-ink-2 hover:text-red" aria-label="Decline call">
                ✕
              </button>
            </div>
            <p lang="as" className="mt-4 font-axom text-2xl font-bold text-red">ভাত খালি নে? ফোন কিয় নধৰ?</p>
            <p className="mt-1 text-sm text-ink-2">Bhat khali ne? Phone kiyo nodhor? (Did you eat? Why don’t you pick up?)</p>
            {reply ? (
              <p className="mt-4 rounded-2xl bg-paper-2 p-3 text-sm font-medium">Maa: {reply}</p>
            ) : (
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button onClick={() => answer("ate")} className="rounded-full bg-leaf px-3 py-2.5 text-sm font-semibold text-cotton">
                  Khalu, Maa
                </button>
                <button onClick={() => answer("coming")} className="rounded-full bg-red px-3 py-2.5 text-sm font-semibold text-cotton">
                  Ahi asu…
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
