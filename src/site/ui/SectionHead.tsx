import Reveal from "./Reveal";

export default function SectionHead({
  no,
  script,
  title,
  children,
  tone = "light",
}: {
  no: string;
  script: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <div className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
          <span className={dark ? "text-muga-light" : "text-red"}>{no}</span>
          <span className={`h-px w-10 ${dark ? "bg-cotton/40" : "bg-ink/30"}`} />
          <span lang="as" className={`font-axom text-base tracking-normal normal-case ${dark ? "text-cotton/70" : "text-ink-2"}`}>
            {script}
          </span>
        </div>
        <h2
          className={`font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl ${
            dark ? "text-cotton" : "text-ink"
          }`}
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
        >
          {title}
        </h2>
      </div>
      {children && (
        <div className={`text-lg leading-relaxed md:col-span-5 ${dark ? "text-cotton/75" : "text-ink-2"}`}>
          {children}
        </div>
      )}
    </Reveal>
  );
}
