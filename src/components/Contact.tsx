import Link from "next/link";
import { Mail, Github, Globe } from "lucide-react";

export default function Contact() {
    const links = [
        {
            name: "Email",
            url: "mailto:hello@example.com", // Replace with real email
            icon: <Mail className="w-5 h-5" />,
        },
        {
            name: "GitHub",
            url: "https://github.com", // Replace with real URL
            icon: <Github className="w-5 h-5" />,
        },
        {
            name: "Portfolio",
            url: "#home", // Back to top
            icon: <Globe className="w-5 h-5" />,
        },
    ];

    return (
        <section id="contact" className="py-24 max-w-4xl mx-auto px-4 text-center">
            <div className="mb-12 font-pixel text-brand-primary tracking-widest text-sm uppercase">
                [ Initialize Connection ]
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-pixel text-brand-text mb-12 drop-shadow-[0_2px_10px_rgba(230,241,255,0.1)]">
                Get In Touch
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        target={link.name !== "Portfolio" ? "_blank" : undefined}
                        className="flex items-center gap-3 px-8 py-4 bg-brand-bg-dark border border-brand-primary/40 hover:border-brand-primary text-brand-muted hover:text-brand-primary transition-all duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(79,209,255,0.05)] hover:shadow-[0_0_20px_rgba(79,209,255,0.2)] font-pixel uppercase text-sm"
                    >
                        <span className="text-brand-primary">{link.icon}</span>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="mt-32 font-pixel text-brand-muted/40 text-xs">
                © {new Date().getFullYear()} WU JING. All Systems Operational.
            </div>
        </section>
    );
}
