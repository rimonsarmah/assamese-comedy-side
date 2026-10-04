import Nav from "@/site/Nav";
import Hero from "@/site/Hero";
import Ticker from "@/site/Ticker";
import GhorKot from "@/site/GhorKot";
import Dinlipi from "@/site/Dinlipi";
import Kahi from "@/site/Kahi";
import Bihu from "@/site/Bihu";
import Gamosa from "@/site/Gamosa";
import Relatives from "@/site/Relatives";
import Outside from "@/site/Outside";
import Luit from "@/site/Luit";
import Quiz from "@/site/Quiz";
import Footer from "@/site/Footer";
import MaaCall from "@/site/MaaCall";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <GhorKot />
        <Dinlipi />
        <Kahi />
        <Bihu />
        <Gamosa />
        <Relatives />
        <Outside />
        <Luit />
        <Quiz />
      </main>
      <Footer />
      <MaaCall />
    </>
  );
}
