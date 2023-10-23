import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import HeroText from "@/components/HeroText";
import Details from "@/components/Details";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroText />
      <Hero />
      {/* <Details /> */}
    </main>
  );
}
