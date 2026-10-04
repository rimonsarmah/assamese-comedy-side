import SectionHead from "./ui/SectionHead";
import Reveal from "./ui/Reveal";
import Ax from "./ui/Ax";

type Entry = {
  t: string;
  title: string;
  body: React.ReactNode;
  tone: "dawn" | "day" | "dusk" | "night";
};

const DAY: Entry[] = [
  {
    t: "05:30",
    title: "Maa's alarm",
    tone: "dawn",
    body: (
      <>
        <Ax r="“Uth! Beli uthil!”" s="উঠ! বেলি উঠিল!" m="“Get up! The sun is up!”" /> The sun in Assam rises before
        the alarm does. Rimon replies <Ax r="“Aru pas minute.”" s="আৰু পাঁচ মিনিট।" m="“Five more minutes.”" /> Both
        know this is a lie.
      </>
    ),
  },
  {
    t: "06:15",
    title: "Lal sah, cup one",
    tone: "dawn",
    body: <>Black tea, in a glass, on the verandah. Doesn’t count towards the daily total. Nothing before 7am counts.</>,
  },
  {
    t: "08:30",
    title: "Jolpan",
    tone: "day",
    body: (
      <>
        <Ax r="Chira, doi, gur" s="চিৰা, দৈ, গুড়" m="Flattened rice, curd, jaggery" />. Breakfast that is basically
        dessert, but cultural, so it’s healthy.
      </>
    ),
  },
  {
    t: "10:00",
    title: "Friend calls",
    tone: "day",
    body: (
      <>
        <Ax r="“Ki kori aso?”" s="কি কৰি আছ?" m="“What are you doing?”" /> —{" "}
        <Ax r="“Eneye.”" s="এনেয়ে।" m="“Nothing. Just like that.”" /> — “Ahibi ne?” — “<Ax r="Ahi asu" s="আহি আছোঁ" m="I'm coming" />.”
        Location: bed. Estimated arrival: 4pm.
      </>
    ),
  },
  {
    t: "13:00",
    title: "Bhat",
    tone: "day",
    body: (
      <>
        Rice, masor tenga, khar, pitika, xaak, bhaji. Maa calls this <i>“nothing special, just simple”</i>. Five items
        is “simple”. One item is “starving”.
      </>
    ),
  },
  {
    t: "14:00",
    title: "The post-rice nap",
    tone: "day",
    body: (
      <>
        <Ax r="Bhat khai tuponi" s="ভাত খাই টোপনি" m="Sleeping after eating rice" />. Medically required. The nation
        shuts down. Even the dogs are asleep.
      </>
    ),
  },
  {
    t: "16:30",
    title: "Sunset (yes, already)",
    tone: "dusk",
    body: (
      <>
        Sun sets at 4:45 in winter. Tea gardens even ran their own clock an hour ahead, called{" "}
        <Ax r="Bagan time" s="বাগান টাইম" m="Tea-garden time, one hour ahead of IST" />. Rest of India still having lunch.
        Assam already lighting lamps.
      </>
    ),
  },
  {
    t: "17:00",
    title: "Guest arrives, unannounced",
    tone: "dusk",
    body: (
      <>
        <Ax r="“Ahok, bohok!”" s="আহক, বহক!" m="“Please come, please sit!”" /> Out come the good cups, the Britannia
        tin of pitha, and the tamul-paan. The guest says “just five minutes”. Leaves at 9.
      </>
    ),
  },
  {
    t: "18:30",
    title: "Power cut",
    tone: "night",
    body: (
      <>
        <Ax r="“Current gol!”" s="কাৰেণ্ট গ'ল!" m="“The power's gone!”" /> shouted by every house on the lane at the
        same time, as if the others didn’t notice.
      </>
    ),
  },
  {
    t: "19:30",
    title: "Prime time",
    tone: "night",
    body: <>Deuta watches the Assamese news debate at full volume. Six people shouting. Deuta shouts back. That’s seven.</>,
  },
  {
    t: "23:30",
    title: "Maa's final notice",
    tone: "night",
    body: (
      <>
        <Ax r="“Kiman bajat xubi? Mobile-tu thoi de!”" s="কিমান বজাত শুবি? মোবাইলটো থৈ দে!" m="“What time will you sleep? Put the phone down!”" />{" "}
        Rimon puts the phone down. Picks it up again. Reels until 2.
      </>
    ),
  },
];

const TONE = {
  dawn: "bg-[#f7dfb4] text-ink",
  day: "bg-cotton text-ink",
  dusk: "bg-[#e7a35a] text-ink",
  night: "bg-luit text-cotton",
};

export default function Dinlipi() {
  return (
    <section id="dinlipi" className="relative bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead no="02" script="ৰিমনৰ দিনলিপি" title={<>Rimon&apos;s <span className="italic text-red">dinlipi</span></>}>
          <Ax r="Dinlipi" s="দিনলিপি" m="Diary" /> means diary. This is one ordinary day at home in Golaghat, on leave from Chennai. Every
          Assamese person has lived exactly this day about four thousand times.
        </SectionHead>

        <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DAY.map((d, i) => (
            <li key={d.t}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article
                  className={`group relative flex h-full flex-col rounded-3xl border-2 border-ink p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--ink)] ${TONE[d.tone]}`}
                >
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-5xl font-semibold tabular-nums tracking-tight">{d.t}</p>
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-60">{d.tone}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{d.title}</h3>
                  <p className="mt-2 leading-relaxed opacity-85">{d.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
