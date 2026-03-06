import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
            <div className="text-center w-full max-w-4xl relative z-10 flex flex-col items-center">

                {/* Top Label */}
                <div className="inline-block px-4 py-1.5 border border-brand-primary/40 bg-brand-bg-dark/60 mb-8 font-pixel text-brand-primary text-xs tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(79,209,255,0.15)]">
                    Game Developer · Content Creator
                </div>

                {/* Name Block */}
                <div className="mb-12 flex flex-col items-center select-none relative">
                    <span className="text-brand-muted/60 text-sm tracking-[0.4em] mb-1 font-medium">ブケイ</span>

                    <h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-brand-text font-pixel drop-shadow-[0_0_15px_rgba(79,209,255,0.3)]">
                        武敬
                    </h1>

                    <span className="text-brand-muted text-base tracking-[0.6em] font-pixel mt-4 block">
                        WU JING
                    </span>
                </div>

                {/* Slogan (Readable standard font) */}
                <p className="text-xl md:text-2xl text-brand-text max-w-2xl mx-auto leading-relaxed font-sans mb-16 drop-shadow-md text-center">
                    人が楽しんでいる瞬間を生み出すことが、<br />
                    何より好きです。
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto">
                    <a
                        href="#featured-project"
                        className="w-full sm:w-auto relative px-8 py-3 bg-brand-bg-dark border border-brand-primary text-brand-primary font-pixel text-sm hover:bg-brand-primary hover:text-brand-bg-dark transition-all duration-300 flex items-center justify-center uppercase tracking-widest shadow-[0_0_15px_rgba(79,209,255,0.2)] hover:shadow-[0_0_20px_rgba(79,209,255,0.8),inset_0_0_10px_rgba(79,209,255,0.5)]"
                    >
                        Explore My Work
                    </a>
                    <a
                        href="#about"
                        className="w-full sm:w-auto relative px-8 py-3 bg-brand-bg-dark border border-brand-secondary text-brand-secondary font-pixel text-sm hover:bg-brand-secondary hover:text-brand-bg-dark transition-all duration-300 flex items-center justify-center uppercase tracking-widest shadow-[0_0_15px_rgba(124,108,255,0.1)] hover:shadow-[0_0_20px_rgba(124,108,255,0.5),inset_0_0_10px_rgba(124,108,255,0.3)]"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Background soft glow - extremely subtle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        </section>
    );
}
