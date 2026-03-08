import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Stellar OS",
        description: "A web-based operating system interface focusing on modern multitasking and deep space aesthetics.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Nebula Dashboard",
        description: "Analytics dashboard for monitoring server metrics with real-time data visualization.",
        tags: ["Next.js", "Recharts", "PostgreSQL"],
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Quantum E-Commerce",
        description: "Headless e-commerce storefront with a focus on extreme performance and accessibility.",
        tags: ["Next.js", "Shopify API", "Framer Motion"],
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <div className="py-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-pixel tracking-wider text-brand-primary">
                _PROJECTS
            </h1>
            <p className="text-brand-muted mb-12 max-w-2xl text-lg">
                A selection of my recent works. Exploring the boundaries of creative front-end development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative border border-brand-primary/20 bg-brand-bg-dark/50 p-6 flex flex-col hover:border-brand-primary/60 transition-colors duration-300"
                    >
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <h3 className="text-2xl font-bold text-brand-text mb-3">{project.title}</h3>
                        <p className="text-brand-muted flex-grow mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 text-xs font-pixel text-brand-accent bg-brand-bg-light border border-brand-accent/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                            <Link
                                href={project.link}
                                className="flex items-center text-sm font-pixel text-brand-text hover:text-brand-primary transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                            </Link>
                            <Link
                                href={project.github}
                                className="flex items-center text-sm font-pixel text-brand-text hover:text-brand-secondary transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
