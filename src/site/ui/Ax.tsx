"use client";

import { useRef } from "react";

/**
 * An Assamese word in romanised form. Hover / tap shows the Assamese script and the meaning.
 * r = romanised, s = Assamese script, m = meaning
 * The tooltip nudges itself back inside the viewport near screen edges.
 */
export default function Ax({
  r,
  s,
  m,
  className = "",
}: {
  r: string;
  s: string;
  m: string;
  className?: string;
}) {
  const root = useRef<HTMLSpanElement>(null);
  const tip = useRef<HTMLSpanElement>(null);

  const place = () => {
    const el = root.current;
    const t = tip.current;
    if (!el || !t) return;
    el.style.setProperty("--shift", "0px");
    const rect = t.getBoundingClientRect();
    const pad = 12;
    let shift = 0;
    if (rect.left < pad) shift = pad - rect.left;
    else if (rect.right > window.innerWidth - pad) shift = window.innerWidth - pad - rect.right;
    el.style.setProperty("--shift", `${Math.round(shift)}px`);
  };

  return (
    <span
      ref={root}
      className={`ax ${className}`}
      tabIndex={0}
      onMouseEnter={place}
      onFocus={place}
      aria-label={`${r}: ${s}, meaning ${m}`}
    >
      {r}
      <span ref={tip} className="ax-tip" role="tooltip" aria-hidden="true">
        <span lang="as" className="block font-axom text-lg font-semibold leading-snug text-muga-light">
          {s}
        </span>
        <span className="mt-1 block text-[0.8rem] text-cotton/80">{m}</span>
      </span>
    </span>
  );
}
