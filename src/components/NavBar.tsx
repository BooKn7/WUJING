"use client";

import Link from "next/link";

const navItems = [
    { name: "Home", path: "#home" },
    { name: "Game Projects", path: "#featured-project" },
    { name: "Other Projects", path: "#projects" },
    { name: "About Me", path: "#about" },
];

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-brand-bg-dark/80 backdrop-blur-md border-b border-brand-primary/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="font-pixel text-xl font-bold tracking-widest text-brand-text hover:text-brand-primary transition-colors">
                            WU JING
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    className="font-pixel text-base transition-all duration-300 text-brand-muted hover:text-brand-primary uppercase"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Mobile menu simple flat display */}
                    <div className="md:hidden flex space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="font-pixel text-xs transition-all duration-300 text-brand-muted hover:text-brand-primary uppercase"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
