"use client";

import { useState } from "react";

export default function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    const projects = [
        {
            id: "prototype",
            title: "カベトリス",
            category: "GAME PROJECT",
            tags: ["GAME DESIGN", "PROTOTYPING", "UNITY"],
            desc: "テレビ番組のシルエットゲームから着想を得て、\nテトリスと組み合わせて制作した\nゲームプロトタイプです。",
            thumbnail: "/KABETRIS.pdf",
            details: (
                <div className="flex flex-col animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                        {/* 1. Intro Text & Role */}
                        <div className="w-full lg:w-[45%] flex flex-col">
                            <h4 className="text-sm font-bold font-sans text-brand-text mb-3 border-l-2 border-brand-primary pl-2">Core Gameplay</h4>

                            <p className="text-brand-muted/90 text-[13px] font-sans leading-relaxed whitespace-pre-line text-left mb-6 break-keep">
                                テレビ番組の「人型の穴を通り抜ける」ゲームから着想を得て、<br />
                                <span className="whitespace-nowrap">その仕組みをテトリス型パズルと組み合わせたゲームプロトタイプ。</span><br />
                                <br />
                                プレイヤーは落下する3Dブロックを操作し、<br />
                                壁に空いたシルエットの形に合わせて構造を作る。<br />
                                <br />
                                通常のテトリスとは異なり、<br />
                                ラインを揃えてもブロックは消えず構造として残るため、<br />
                                プレイヤーは立体的に形を組み替えながら<br />
                                様々な壁のパターンを突破していく。<br />
                                <br />
                                3D空間で構築したブロックを<br />
                                2Dのシルエットパズルとして攻略していく点が特徴。
                            </p>

                            <div className="pl-3 border-l border-brand-primary/50 mt-auto">
                                <div className="text-brand-text font-bold text-sm mb-1 tracking-wider">個人制作</div>
                                <div className="text-brand-muted/70 text-xs leading-relaxed font-sans">
                                    Game Planning<br />
                                    Game Design<br />
                                    Programming
                                </div>
                            </div>
                        </div>

                        {/* 2. PDF Presentation Link/Preview */}
                        <div className="w-full lg:w-[55%]">
                            <a href="/KABETRIS.pdf" target="_blank" rel="noopener noreferrer" className="block w-full aspect-[4/3] bg-black border border-brand-primary/30 relative group overflow-hidden cursor-pointer hover:border-brand-primary transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 z-20" title="Click to open full document"></div>
                                <iframe src="/KABETRIS.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit" className="absolute inset-0 w-full h-full bg-white/5 pointer-events-none" title="Kabetris Concept Document" scrolling="no" tabIndex={-1} />
                                <div className="absolute inset-0 border border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>

                                <div className="absolute bottom-3 right-3 bg-brand-bg-dark/90 backdrop-blur-md border border-brand-primary/50 text-brand-primary px-3 py-1.5 text-[10px] font-pixel tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-30 flex items-center gap-2 shadow-[0_0_10px_rgba(79,209,255,0.2)]">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                                    ENLARGE
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* 3. YouTube Video */}
                    <h4 className="text-sm font-bold font-sans text-brand-text mb-3 border-l-2 border-brand-primary pl-2 mt-2">Demonstration</h4>
                    <div className="aspect-video bg-black border border-brand-primary/30 mb-2 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <iframe
                            src="https://www.youtube.com/embed/l_G4aW2qxSw?rel=0"
                            className="absolute inset-0 w-full h-full"
                            title="Kabetris YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 border border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
                    </div>
                </div>
            )
        },
        {
            id: "video",
            title: "Young Spring",
            category: "FILM PROJECT",
            tags: ["VIDEO EDITING", "STORYTELLING"],
            desc: "冬の終わり、凍っていた川がほどけ、\n季節が静かに春へと移り変わっていく。\n\n「はじまり」と「成長」の気配を\n音楽のリズムとともに描いた映像作品です。",
            thumbnail: "/video.png",
            details: (
                <div className="flex flex-col animate-in fade-in zoom-in-95 duration-300">
                    <div className="aspect-video bg-black border border-brand-primary/30 mb-6 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <iframe
                            src="https://www.youtube.com/embed/ilWI2h_VvIo?rel=0"
                            className="absolute inset-0 w-full h-full"
                            title="Young Spring Cinematic Short"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 border border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-xl font-bold font-pixel text-brand-text mb-4">Young Spring</h4>

                        <p className="text-brand-muted text-sm font-sans leading-relaxed whitespace-pre-line border-l-2 border-brand-primary/30 pl-4 py-1">
                            冬の終わり、凍っていた川が静かにほどけていく。<br />
                            やがて春の雨が降り、人々は再び外へと歩き出す。<br />
                            <br />
                            転びながらも立ち上がる小さな足取りのように、<br />
                            季節もまた、ゆっくりと前へ進んでいく。<br />
                            <br />
                            そんな時間の流れの中にある<br />
                            「はじまり」と「成長」の気配を映像として形にしました。
                        </p>
                    </div>

                    <h5 className="text-sm font-bold border-b border-brand-primary/20 pb-2 mb-3 text-brand-text">編集で意識した点</h5>
                    <ul className="list-disc pl-5 space-y-1.5 text-brand-muted/90 text-[13px] font-sans">
                        <li>音楽のリズムに合わせたカット編集</li>
                        <li>映像トーンと空気感の統一</li>
                        <li>感情の流れを意識した構成</li>
                    </ul>
                </div>
            )
        },
        {
            id: "creator",
            title: "Content Channel",
            category: "CONTENT PROJECT",
            tags: ["VIDEO EDITING", "CONTENT CREATION"],
            thumbnail: "/2023-07-21 191241.mov",
            desc: "ポケモンカードやゲーム実況をテーマに、\n視聴者が楽しめる動画コンテンツを企画・制作。\n\n短期間の運営ながら、\n3ヶ月で1.3万人のフォロワーを獲得しました。",
            details: (
                <div className="flex flex-col animate-in fade-in zoom-in-95 duration-300">
                    <div className="flex flex-col lg:flex-row gap-12 mb-10 items-center">
                        {/* 左侧文字介绍：为图片让出更多空间 */}
                        <div className="w-full lg:w-[35%] flex flex-col justify-center">
                            <p className="text-brand-muted/95 text-[14px] font-sans leading-[1.8] tracking-wide">
                                ポケモンカードやゲーム実況をテーマに、<br />
                                視聴者が思わず見続けてしまうような<br />
                                動画コンテンツの企画・制作を行いました。
                            </p>

                            <p className="text-brand-muted/95 text-[14px] font-sans leading-[1.8] tracking-wide mt-6">
                                投稿を続ける中で、<br />
                                どの瞬間に人が驚き、笑い、反応するのかを<br />
                                常に意識しながら動画を作るようになりました。
                            </p>

                            <p className="text-brand-muted/95 text-[14px] font-sans leading-[1.8] tracking-wide mt-6">
                                その結果、3ヶ月で1.3万人のフォロワーを獲得し、<br />
                                100万回再生を超える動画が<br />
                                プラットフォームの優秀作品として選出されました。
                            </p>

                            <p className="text-brand-text text-[14px] font-sans leading-[1.8] tracking-wide font-bold mt-8 border-l-2 border-brand-primary pl-4">
                                この経験を通じて、<br />
                                「人が楽しむ瞬間を設計すること」の面白さを<br />
                                強く実感しました。
                            </p>
                        </div>

                        {/* 右侧展示图片：占据更多宽度，整体同时放大 */}
                        <div className="w-full lg:w-[65%] flex flex-row gap-6 items-center justify-between relative pl-4 lg:pl-8">
                            {/* 图片1（横版视频截图） */}
                            <div className="w-[55%] relative group overflow-hidden border border-brand-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-black/30 transition-colors duration-300 rounded-sm">
                                <img src="/%E4%BC%98%E7%A7%80%E4%BD%9C%E5%93%81.png" alt="優秀作品に選出された動画" className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-xl" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-brand-primary/10 pointer-events-none"></div>
                            </div>

                            {/* 图片2（竖版长图含文字） */}
                            <div className="w-[42%] relative group overflow-hidden border border-brand-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#F8F9FA]/5 transition-colors duration-300 rounded-sm">
                                <img src="/100.png" alt="100万回再生達成" className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-xl" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-brand-primary/10 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    <h5 className="text-sm font-bold border-b border-brand-primary/20 pb-2 mb-4 text-brand-text/90 tracking-widest font-sans uppercase">取り組み</h5>
                    <ul className="list-disc pl-5 space-y-2 text-brand-muted/80 text-[13px] font-sans mb-8">
                        <li>人気投稿者の動画分析による企画改善</li>
                        <li>視聴者目線での編集クオリティの追求</li>
                        <li>コメントを活用した継続的な改善</li>
                    </ul>

                    <div className="flex justify-end">
                        <a href="https://space.bilibili.com/3493278295001984" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] text-brand-accent hover:text-brand-bg-dark hover:bg-brand-accent border border-brand-accent/50 px-4 py-2 transition-all font-sans font-bold tracking-widest">
                            &gt; VIEW CHANNEL
                        </a>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="projects" className="py-24 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-2xl md:text-3xl font-pixel text-brand-primary tracking-wider uppercase mb-12">
                Other Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        className="group relative bg-brand-bg-dark border border-brand-primary/30 hover:border-brand-primary transition-all duration-300 shadow-[0_4px_20px_rgba(5,8,22,1)] hover:shadow-[0_0_15px_rgba(79,209,255,0.1)] flex flex-col h-full"
                    >
                        {/* Top right decorative corner */}
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="p-8 flex flex-col flex-grow">
                            {/* Thumbnail Placeholder */}
                            <div className="aspect-video bg-black border border-brand-primary/20 flex flex-col items-center justify-center mb-6 overflow-hidden relative group-hover:border-brand-primary/40 transition-colors pointer-events-none">
                                {/* @ts-ignore dynamic mapping support */}
                                {proj.thumbnail ? (
                                    (proj as any).thumbnail.endsWith('.pdf') ? (
                                        <iframe src={`${(proj as any).thumbnail}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none bg-white/5" tabIndex={-1} scrolling="no" />
                                    ) : (proj as any).thumbnail.endsWith('.mp4') || (proj as any).thumbnail.endsWith('.mov') || (proj as any).thumbnail.endsWith('.webm') ? (
                                        <video
                                            className="absolute inset-0 w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src={(proj as any).thumbnail} />
                                        </video>
                                    ) : (
                                        <img src={(proj as any).thumbnail} alt={proj.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                    )
                                ) : (
                                    <>
                                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-bg-dark to-black opacity-50 absolute inset-0 mix-blend-screen"></div>
                                        <div className="font-pixel text-[10px] text-brand-muted/40 tracking-widest z-10 relative">THUMBNAIL</div>
                                        <div className="font-pixel text-xs text-brand-primary/60 z-10 relative mt-2">{proj.title}</div>
                                    </>
                                )}
                            </div>

                            {/* @ts-ignore dynamic mapping support */}
                            {proj.category && (
                                <div className="text-[10px] font-pixel text-brand-primary/80 tracking-widest uppercase mb-2">
                                    {(proj as any).category}
                                </div>
                            )}

                            <h3 className="text-xl font-bold font-pixel text-brand-text mb-4 group-hover:text-brand-primary transition-colors whitespace-pre-line leading-tight min-h-[3.5rem] flex items-start">
                                {proj.title}
                            </h3>

                            <div className="flex-grow flex flex-col">
                                <p className="text-brand-muted text-sm font-sans mb-6 whitespace-pre-line leading-relaxed">
                                    {proj.desc}
                                </p>
                            </div>

                            <div className="flex flex-col pt-6 border-t border-brand-muted/10 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-pixel text-brand-secondary/80 bg-brand-secondary/10 px-2 py-1 uppercase border border-brand-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => toggleExpand(proj.id)}
                                    className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-brand-bg-dark border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg-dark font-pixel text-xs transition-all tracking-widest uppercase shadow-[0_0_10px_rgba(79,209,255,0.05)] hover:shadow-[0_0_15px_rgba(79,209,255,0.4)]"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay Component */}
            {expandedId && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    {/* Click away area */}
                    <div
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setExpandedId(null)}
                    ></div>

                    {/* Modal Content Box: increased max width to 6xl for larger images */}
                    <div className="relative w-full max-w-6xl max-h-[90vh] bg-brand-bg-dark border-2 border-brand-primary shadow-[0_0_50px_rgba(79,209,255,0.3)] flex flex-col pointer-events-auto">
                        {/* Decorative borders fixed to the outer boundary */}
                        <div className="hidden md:block absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-brand-primary pointer-events-none z-30"></div>
                        <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-brand-primary pointer-events-none z-30"></div>

                        {/* Header (does not need sticky anymore because outer box doesn't scroll) */}
                        <div className="flex-shrink-0 z-20 flex justify-between items-center p-6 md:p-8 border-b border-brand-primary/30 bg-brand-bg-dark">
                            <h3 className="text-xl md:text-2xl font-bold font-pixel text-brand-text tracking-wider uppercase drop-shadow-[0_0_8px_rgba(230,241,255,0.3)]">
                                {projects.find(p => p.id === expandedId)?.title}
                            </h3>
                            <button
                                onClick={() => setExpandedId(null)}
                                className="inline-flex items-center justify-center px-4 py-2 border border-brand-primary/50 text-brand-primary hover:bg-brand-primary hover:text-brand-bg-dark font-pixel text-[10px] md:text-xs transition-all tracking-widest uppercase shadow-[0_0_10px_rgba(79,209,255,0.05)] hover:shadow-[0_0_15px_rgba(79,209,255,0.4)]"
                                aria-label="Close modal"
                            >
                                CLOSE WINDOW
                            </button>
                        </div>

                        {/* Body - Independently scrolling container */}
                        <div className="flex-grow p-6 md:p-10 flex flex-col relative overflow-y-auto">
                            {/* Render the details logic securely */}
                            <div className="text-brand-text flex-grow">
                                {projects.find(p => p.id === expandedId)?.details}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
