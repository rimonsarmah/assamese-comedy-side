"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const LINKS = [
  { href: "#ghor-kot", label: "Ghor kot?" },
  { href: "#dinlipi", label: "Dinlipi" },
  { href: "#kahi", label: "Kahi" },
  { href: "#bihu", label: "Bihu" },
  { href: "#gamosa", label: "Gamosa" },
  { href: "#mahi", label: "Relatives" },
  { href: "#luit", label: "Luit" },
  { href: "#quiz", label: "Quiz" },
];

export default function Nav() {
  const [cups, setCups] = useState(1);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // One more cup of lal sah every 40 seconds. Realistic.
  useEffect(() => {
    const t = setInterval(() => setCups((c) => c + 1), 40000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="group flex items-baseline gap-2">
            <span lang="as" className="font-axom text-2xl font-extrabold text-red">ৰিমন</span>
            <span className="font-display text-xl font-semibold italic">Rimon.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-2 transition hover:bg-ink hover:text-cotton"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div
              className="hidden items-center gap-2 rounded-full border border-ink/15 bg-cotton px-3 py-1.5 text-xs font-semibold sm:flex"
              title="Cups of lal sah Rimon has had since you opened this page"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-red" />
              Lal sah today: <span className="tabular-nums text-red">{cups + 3}</span>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cotton lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? "Bondho" : "Menu"}
            </button>
          </div>
        </nav>
        {open && (
          <ul id="mobile-menu" className="grid grid-cols-2 gap-2 border-t border-ink/10 px-4 py-4 lg:hidden">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-cotton px-4 py-3 text-sm font-semibold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <motion.div style={{ scaleX: width }} className="gamosa-band-thin h-2 origin-left bg-red" />
    </header>
  );
}
