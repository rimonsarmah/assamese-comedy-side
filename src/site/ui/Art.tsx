/* Hand-drawn-ish SVG illustrations. No emoji soup. */

export function Rhino({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
      {/* body */}
      <path
        d="M62 58 C70 34 120 26 160 34 C184 39 196 52 198 68 C200 88 194 104 182 108 L176 132 L162 132 L160 110 C140 114 112 114 96 110 L94 132 L80 132 L78 106 C66 100 58 80 62 58 Z"
        fill="currentColor"
      />
      {/* armour folds */}
      <path d="M104 40 C100 60 102 90 108 110" stroke="var(--paper)" strokeOpacity=".35" strokeWidth="3" fill="none" />
      <path d="M150 34 C156 56 156 86 150 110" stroke="var(--paper)" strokeOpacity=".35" strokeWidth="3" fill="none" />
      {/* head */}
      <path
        d="M66 56 C54 54 40 58 30 66 C22 72 14 80 12 88 C11 94 16 98 24 98 C34 98 44 96 54 92 C64 88 70 80 70 70 Z"
        fill="currentColor"
      />
      {/* horn — just one. We are the one-horned ones. */}
      <path d="M20 84 C14 72 14 60 22 50 C24 62 28 72 32 80 Z" fill="currentColor" />
      {/* ear */}
      <path d="M62 52 C60 42 64 34 70 32 C72 40 70 48 66 54 Z" fill="currentColor" />
      {/* eye */}
      <circle cx="46" cy="74" r="2.6" fill="var(--paper)" />
      {/* tail */}
      <path d="M196 70 C206 74 210 82 208 92" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function TeaCup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g className="steam" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7">
        <path d="M44 40 C38 30 50 24 44 12" />
        <path d="M60 40 C54 30 66 24 60 12" />
        <path d="M76 40 C70 30 82 24 76 12" />
      </g>
      {/* glass of lal sah, as served in every tea stall */}
      <path d="M34 48 L86 48 L80 106 L40 106 Z" fill="var(--red-deep)" />
      <path d="M34 48 L86 48 L84 62 L36 62 Z" fill="var(--red)" />
      <path d="M34 48 L86 48 L80 106 L40 106 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M44 56 L42 98" stroke="var(--cotton)" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Dhol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" className={className} aria-hidden="true">
      <ellipse cx="22" cy="55" rx="16" ry="38" fill="var(--cotton)" stroke="currentColor" strokeWidth="4" />
      <path d="M22 17 L138 17 L138 93 L22 93" fill="var(--red)" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="138" cy="55" rx="16" ry="38" fill="var(--cotton)" stroke="currentColor" strokeWidth="4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${30 + i * 18} 19 L${42 + i * 18} 91`} stroke="var(--muga-light)" strokeWidth="3" />
      ))}
    </svg>
  );
}

export function Jaapi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden="true">
      <path d="M8 70 Q100 -10 192 70 Q100 92 8 70 Z" fill="var(--muga)" stroke="currentColor" strokeWidth="4" />
      <path d="M40 58 Q100 8 160 58" fill="none" stroke="var(--red)" strokeWidth="8" />
      <path d="M60 52 Q100 20 140 52" fill="none" stroke="var(--leaf)" strokeWidth="5" />
      <circle cx="100" cy="30" r="6" fill="var(--red)" />
    </svg>
  );
}
