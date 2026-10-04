const PHRASES: [string, string, string][] = [
  ["Bhat khala ne?", "ভাত খালা নে?", "Have you eaten (rice)?"],
  ["Hobo de", "হ'ব দে", "Let it be"],
  ["Lahe lahe", "লাহে লাহে", "Slowly, slowly"],
  ["Eneye", "এনেয়ে", "Just like that"],
  ["Ki khobor?", "কি খবৰ?", "What's the news?"],
  ["Ahi asu", "আহি আছোঁ", "I'm coming (I'm not)"],
  ["Thik ase", "ঠিক আছে", "Okay"],
  ["Ghor kot?", "ঘৰ ক'ত?", "Where's your home?"],
  ["Current gol!", "কাৰেণ্ট গ'ল!", "Power's gone!"],
  ["Bor bhal", "বৰ ভাল", "Very good"],
  ["Khong uthise", "খং উঠিছে", "I'm angry now"],
  ["Aakou log pam", "আকৌ লগ পাম", "We'll meet again"],
];

export default function Ticker() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <div className="relative overflow-hidden bg-ink py-5 text-cotton" aria-label="Common Assamese phrases">
      <div className="marquee">
        {row.map(([r, s, m], i) => (
          <div key={i} className="flex shrink-0 items-center gap-4 px-6" title={m}>
            <span lang="as" className="font-axom text-2xl font-semibold text-muga-light">{s}</span>
            <span className="font-display text-xl italic">{r}</span>
            <span className="text-sm text-cotton/50">({m})</span>
            <span className="ml-4 text-red">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
