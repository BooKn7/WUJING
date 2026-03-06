import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-[90vh] py-12">
            <div className="text-center space-y-6 max-w-4xl relative z-10 w-full px-4">
                <div className="inline-block px-3 py-1 border border-brand-primary/30 bg-brand-bg-light/80 mb-4 font-pixel tracking-widest text-brand-primary text-sm uppercase">
                    Game Developer / Content Creator
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 mb-8 select-none">
                    <span className="text-brand-muted/70 text-sm tracking-[0.3em] font-medium -mb-2">ブケイ</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-brand-text drop-shadow-[0_0_15px_rgba(79,209,255,0.4)]">
                        武敬
                    </h1>
                    <span className="text-brand-muted text-xl tracking-[0.4em] font-pixel mt-2 block">
                        WU JING
                    </span>
                </div>

                <p className="text-xl md:text-2xl text-brand-text max-w-2xl mx-auto leading-relaxed font-medium mt-12 drop-shadow-md">
                    「人が楽しんでいる瞬間を生み出すことが、何より好きです。」
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
                    <Link
                        href="#projects"
                        className="group relative px-8 py-3 bg-brand-bg-light border border-brand-primary text-brand-primary font-pixel text-lg hover:bg-brand-primary hover:text-brand-bg-dark transition-all duration-300 flex items-center justify-center uppercase tracking-wider overflow-hidden w-full sm:w-auto pixel-border"
                    >
                        <span className="relative z-10 flex items-center">
                            View Projects
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-brand-secondary/50 text-brand-secondary hover:border-brand-accent hover:text-brand-accent transition-all duration-300 font-pixel text-lg uppercase tracking-wider w-full sm:w-auto bg-brand-bg-dark/50 hover:shadow-[0_0_15px_rgba(255,155,84,0.3)]"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Subtle glow behind hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
        </section>
    );
}
