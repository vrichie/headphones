import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import HeroText from "@/components/HeroText";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import FullDetails from "@/components/FullDetails";
import Banner from "@/components/Banner";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroText />
      <Hero />
      <Journey />
      <Banner />
      <Details />
      <Banner />

      <FullDetails />
      <Cards />
      <Footer />
    </main>
  );
}
