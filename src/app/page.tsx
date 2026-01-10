import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Culture } from "@/components/sections/Culture";
import { People } from "@/components/sections/People";
import { Recruit } from "@/components/sections/Recruit";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Culture />
      <People />
      <Recruit />
      <Footer />
    </main>
  );
}
