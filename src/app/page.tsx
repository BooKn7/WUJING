import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <FeaturedProject />
      <Projects />
      <About />
      <footer className="w-full text-center py-8 font-pixel text-brand-muted/40 text-xs">
        © {new Date().getFullYear()} WU JING. All Systems Operational.
      </footer>
    </div>
  );
}
