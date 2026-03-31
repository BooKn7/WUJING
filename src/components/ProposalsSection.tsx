import React from "react";

export default function ProposalsSection() {
    const proposals = [
        {
            title: "インパクトアリーナ",
            pdf: "/企画書/インパクトアリーナ企画書_武敬.pdf",
            cover: "/企画書/impact_arena_cover.png",
            desc: "対戦アクションゲームの企画書",
            tags: ["ACTION", "MULTIPLAYER", "GAME DESIGN"]
        },
        {
            title: "カベモノ！",
            pdf: "/企画書/カベモノ！企画書_武敬.pdf",
            cover: "/企画書/kabemono_cover.png",
            desc: "立体パズルゲームの企画書",
            tags: ["ACTION", "PUZZLE", "GAME DESIGN"]
        }
    ];

    return (
        <section id="proposals" className="py-24 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-brand-primary tracking-wider uppercase mb-12">
                Project Proposals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {proposals.map((item, index) => (
                    <div key={index} className="group relative bg-brand-bg-dark border border-brand-primary/30 hover:border-brand-primary transition-all duration-300 shadow-[0_4px_20px_rgba(5,8,22,1)] hover:shadow-[0_0_15px_rgba(79,209,255,0.1)] flex flex-col p-8">
                        
                        {/* 详情头部 */}
                        <div className="mb-6">
                            <div className="text-[10px] font-pixel text-brand-primary/80 tracking-widest uppercase mb-2">
                                PROPOSAL DOCUMENT
                            </div>
                            <h3 className="text-xl font-bold font-pixel text-brand-text mb-3 tracking-wide group-hover:text-brand-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-brand-muted text-[13px] font-sans leading-relaxed mb-4">
                                {item.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-pixel text-brand-secondary/80 bg-brand-secondary/10 px-2 py-1 uppercase border border-brand-secondary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* PDF 封面可点击区域 */}
                        <div className="mt-auto">
                            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="block w-full aspect-video bg-black border border-brand-primary/30 relative overflow-hidden cursor-pointer group/pdf hover:border-brand-primary transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 z-20" title="Click to open full document"></div>
                                
                                <img 
                                    src={item.cover} 
                                    className="absolute inset-0 w-full h-full object-contain opacity-95 group-hover/pdf:scale-[1.02] transition-all duration-500" 
                                    alt={`${item.title} Proposal Cover`} 
                                />
                                
                                <div className="absolute inset-0 border border-brand-primary opacity-0 group-hover/pdf:opacity-100 transition-opacity pointer-events-none z-10"></div>

                                <div className="absolute bottom-3 right-3 bg-brand-bg-dark/90 backdrop-blur-md border border-brand-primary/50 text-brand-primary px-3 py-1.5 text-[10px] font-pixel tracking-widest opacity-0 group-hover/pdf:opacity-100 transition-all transform translate-y-2 group-hover/pdf:translate-y-0 z-30 flex items-center gap-2 shadow-[0_0_10px_rgba(79,209,255,0.2)]">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                    ENLARGE
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
