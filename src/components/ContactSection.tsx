import { Mail, Github, PlaySquare } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-pixel tracking-wider text-brand-primary mb-6">
                _CONTACT
            </h2>
            <p className="text-brand-muted mb-12 text-lg max-w-2xl mx-auto">
                新しいプロジェクトの相談や、開発に関する情報交換など、お気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                    href="mailto:hello@example.com"
                    className="group flex flex-col items-center gap-3 p-6 border border-brand-primary/20 bg-brand-bg-dark/40 hover:border-brand-primary hover:bg-brand-primary/10 transition-all w-48"
                >
                    <Mail className="w-8 h-8 text-brand-text group-hover:text-brand-primary transition-colors" />
                    <span className="font-pixel text-sm tracking-widest text-brand-muted group-hover:text-brand-primary">EMAIL</span>
                </a>

                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-3 p-6 border border-brand-secondary/20 bg-brand-bg-dark/40 hover:border-brand-secondary hover:bg-brand-secondary/10 transition-all w-48"
                >
                    <Github className="w-8 h-8 text-brand-text group-hover:text-brand-secondary transition-colors" />
                    <span className="font-pixel text-sm tracking-widest text-brand-muted group-hover:text-brand-secondary">GITHUB</span>
                </a>

                <a
                    href="https://bilibili.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-3 p-6 border border-brand-accent/20 bg-brand-bg-dark/40 hover:border-brand-accent hover:bg-brand-accent/10 transition-all w-48"
                >
                    <PlaySquare className="w-8 h-8 text-brand-text group-hover:text-brand-accent transition-colors" />
                    <span className="font-pixel text-sm tracking-widest text-brand-muted group-hover:text-brand-accent">BILIBILI</span>
                </a>
            </div>

            <div className="mt-24 text-center pb-8">
                <p className="font-pixel text-brand-muted/50 text-xs tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} BUKEI / WU JING. All Rights Reserved.
                </p>
            </div>
        </section>
    );
}
