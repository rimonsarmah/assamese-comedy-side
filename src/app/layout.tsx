import type { Metadata, Viewport } from "next";
import { Fraunces, Bricolage_Grotesque, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Bricolage_Grotesque({
  variable: "--font-body",
  subsets: ["latin"],
});

// Assamese is written in the Bengali–Assamese script (with ৰ and ৱ), which Noto Serif Bengali covers.
const axomiya = Noto_Serif_Bengali({
  variable: "--font-axomiya",
  subsets: ["bengali"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rimon · Ekdom Khati Axomiya Lora",
  description:
    "The official homepage of Rimon, a 100% khati Axomiya lora and software engineer in Chennai. Runs on lal sah, masor tenga and 'hobo de'. Maa has called 14 times while you read this.",
  openGraph: {
    title: "Rimon · Ekdom Khati Axomiya Lora (একদম খাঁটি অসমীয়া ল'ৰা)",
    description: "Bhat khala ne? Ahok, bohok, sah khai jaok.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#b3141f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${axomiya.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
