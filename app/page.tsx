import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeSection } from "@/components/fade-section";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Knowledge } from "@/components/sections/knowledge";
import { Tech } from "@/components/sections/tech";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-slate-50 dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <Hero />
        <FadeSection
          id="about"
          className="scroll-mt-20 border-b border-slate-200/60 bg-white py-20 dark:border-zinc-800/60 dark:bg-zinc-950"
        >
          <About />
        </FadeSection>
        <FadeSection
          id="experience"
          className="scroll-mt-20 border-b border-slate-200/60 bg-slate-50/80 py-20 dark:border-zinc-800/60 dark:bg-zinc-900/40"
        >
          <Experience />
        </FadeSection>
        <Projects />
        <FadeSection
          id="services"
          className="scroll-mt-20 border-b border-slate-200/60 bg-white py-20 dark:border-zinc-800/60 dark:bg-zinc-950"
        >
          <Services />
        </FadeSection>
        <FadeSection
          id="industries"
          className="scroll-mt-20 border-b border-slate-200/60 bg-slate-50/80 py-20 dark:border-zinc-800/60 dark:bg-zinc-900/40"
        >
          <Industries />
        </FadeSection>
        <FadeSection
          id="knowledge"
          className="scroll-mt-20 border-b border-slate-200/60 bg-white py-20 dark:border-zinc-800/60 dark:bg-zinc-950"
        >
          <Knowledge />
        </FadeSection>
        <FadeSection
          id="skills"
          className="border-b border-slate-200/60 bg-slate-50/80 py-16 dark:border-zinc-800/60 dark:bg-zinc-900/40"
        >
          <Tech />
        </FadeSection>
        <FadeSection
          id="contact"
          className="scroll-mt-20 bg-gradient-to-b from-white to-slate-50 py-20 dark:from-zinc-950 dark:to-zinc-900"
        >
          <Contact />
        </FadeSection>
      </main>
      <Footer />
    </div>
  );
}
