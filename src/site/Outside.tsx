import SectionHead from "./ui/SectionHead";
import Reveal from "./ui/Reveal";
import Ax from "./ui/Ax";

const CHAT: { q: string; who: string; a: React.ReactNode }[] = [
  {
    who: "Karthik, Team Lead",
    q: "Assam? That’s near Kolkata, no?",
    a: <>Kolkata is 1,000 km from my home, Karthik. Chennai is 3,000. By that logic, we are also neighbours.</>,
  },
  {
    who: "Priya, HR",
    q: "Oh Assam! Like Darjeeling tea?",
    a: <>Priya. Assam grows about half of India’s tea. Darjeeling is a hobby. We are the industry.</>,
  },
  {
    who: "House owner",
    q: "How do you go home for Bihu?",
    a: <>Two days on the Guwahati Express, three tiffins from Maa on the way back, and emotional strength.</>,
  },
  {
    who: "Vikram, Intern",
    q: "Is Assamese the same as Bengali?",
    a: (
      <>
        No. Different language, own literature, own Bihu. Please never say this in front of my Koka. He will make you
        read a whole poem.
      </>
    ),
  },
  {
    who: "Karthik, Team Lead",
    q: "Learn Tamil, da!",
    a: (
      <>
        Vanakkam. Konjam konjam I’m learning.{" "}
        <Ax r="Lahe lahe." s="লাহে লাহে।" m="“Slowly, slowly.” Which is also how I learn languages." />
      </>
    ),
  },
  {
    who: "Priya, HR",
    q: "Rice twice a day? Then you’re basically South Indian!",
    a: <>Almost. But my curd goes with chira and gur, and my fish curry is sour. Sambar is lovely. Masor tenga is home.</>,
  },
  {
    who: "Arun, QA",
    q: "Why do you carry a gamosa to office?",
    a: <>It’s 38°C outside and 18°C inside. The gamosa handles both. It is engineered for this.</>,
  },
  {
    who: "Karthik, Team Lead",
    q: "Say something in Assamese!",
    a: (
      <>
        <Ax r="“Hobo de.”" s="হ'ব দে।" m="“Let it be.”" /> It means let it go. I am saying it to this question.
      </>
    ),
  },
  {
    who: "Flatmate",
    q: "Machi, why does the fridge smell like that?",
    a: <>That’s xukan mas, dried fish Maa sent. Do not open the box. Do not ask about the box. The box is family.</>,
  },
];

export default function Outside() {
  return (
    <section id="outside" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="07" script="বাহিৰৰ পৃথিৱী" title={<>Rimon vs. <span className="italic text-red">Chennai.</span></>}>
          Chennai has been kind to me: great filter coffee, great people, very hot. But the questions start in week one, and
          they keep coming every week, for life.
        </SectionHead>

        <div className="mx-auto max-w-3xl rounded-[2rem] border-2 border-ink bg-cotton p-4 shadow-[12px_12px_0_var(--ink)] sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b-2 border-dashed border-ink/15 pb-4">
            <div>
              <p className="font-bold">#chennai-office-general</p>
              <p className="text-xs text-ink-2">142 members · 1 Assamese</p>
            </div>
            <span className="rounded-full bg-leaf px-3 py-1 text-xs font-semibold text-cotton">Rimon is typing…</span>
          </div>
          <ol className="grid gap-5">
            {CHAT.map((c, i) => (
              <li key={i} className="grid gap-2">
                <Reveal y={14}>
                  <div className="max-w-[85%]">
                    <p className="mb-1 text-xs font-semibold text-ink-2">{c.who}</p>
                    <p className="inline-block rounded-2xl rounded-tl-sm bg-paper-2 px-4 py-3">{c.q}</p>
                  </div>
                </Reveal>
                <Reveal y={14} delay={0.15} className="flex justify-end">
                  <div className="max-w-[85%] text-right">
                    <p className="inline-block rounded-2xl rounded-tr-sm bg-red px-4 py-3 text-left text-cotton">{c.a}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
