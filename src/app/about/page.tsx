import Link from "next/link";

export default function About() {
    return (
        <div className="py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 font-pixel tracking-wider text-brand-primary">
                _ABOUT_ME
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-6 text-lg text-brand-muted leading-relaxed">
                    <p>
                        Hello! I'm a passionate web developer with a keen eye for minimalist design and deep space aesthetics. Currently building digital products that prioritize user experience and performance.
                    </p>
                    <p>
                        My journey in software development began a few years ago when I decided to tweak my personal blog. What started as simple HTML/CSS changes grew into a profound love for full-stack engineering.
                    </p>
                    <p>
                        When I'm not writing code, you can find me exploring typography, reading sci-fi novels, or experimenting with new rendering techniques in the browser.
                    </p>

                    <div className="pt-8 flex gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-3 bg-brand-primary/10 border border-brand-primary text-brand-primary font-pixel text-sm hover:bg-brand-primary hover:text-brand-bg-dark transition-all duration-300 uppercase"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="font-pixel text-xl text-brand-text mb-4 border-b border-brand-primary/20 pb-2">Skills</h3>
                        <ul className="space-y-2 text-brand-muted">
                            <li>TypeScript / JavaScript</li>
                            <li>React / Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js</li>
                            <li>PostgreSQL / Prisma</li>
                            <li>Figma / UI Design</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-pixel text-xl text-brand-text mb-4 border-b border-brand-primary/20 pb-2">Experience</h3>
                        <div className="space-y-4 text-brand-muted">
                            <div>
                                <strong className="text-brand-text block">Frontend Engineer</strong>
                                <span className="text-sm font-pixel text-brand-secondary">WebTech Solutions • 2023 - Present</span>
                            </div>
                            <div>
                                <strong className="text-brand-text block">Freelance Developer</strong>
                                <span className="text-sm font-pixel text-brand-secondary">Self-Employed • 2021 - 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
