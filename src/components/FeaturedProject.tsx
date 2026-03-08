import Link from "next/link";

export default function FeaturedProject() {
    return (
        <section id="featured-project" className="py-24 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-brand-primary tracking-wider uppercase mb-12">
                Main Project
            </h2>

            <div className="bg-brand-bg-dark border border-brand-primary/50 shadow-[0_0_30px_rgba(79,209,255,0.05)] overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                    {/* Project Visual / Video Player (7/12) */}
                    <div id="demo-video" className="lg:col-span-7 relative border-b lg:border-b-0 lg:border-r border-brand-primary/30 bg-black flex items-center scroll-mt-24">
                        <div className="w-full aspect-video">
                            <iframe
                                className="w-full h-full border-none pointer-events-auto"
                                src="https://www.youtube.com/embed/Xax3uz8stTs?rel=0"
                                title="OurStars Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Project Info (5/12) */}
                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-4xl lg:text-5xl font-bold font-pixel text-brand-text mb-8 tracking-wide drop-shadow-[0_2px_10px_rgba(230,241,255,0.2)]">
                            OurStars
                        </h3>

                        <p className="text-brand-muted font-sans text-base leading-relaxed mb-8">
                            2人協力型アクションゲーム。<br />
                            <br />
                            プレイヤーは星をモチーフにしたキャラクターを操作し、<br />
                            引力と反発の力を利用してステージを攻略します。<br />
                            <br />
                            プレイヤー同士の協力によって新しい移動方法が生まれる<br />
                            ゲーム体験を目指して設計しました。
                        </p>

                        <div className="mb-8 grid grid-cols-2 gap-4 font-sans bg-brand-primary/5 p-4 border border-brand-primary/10">
                            <div>
                                <div className="text-brand-accent text-xs font-bold tracking-wide uppercase mb-1">
                                    GAME PRIZE OF JAPAN 2025
                                </div>
                                <div className="text-brand-text text-sm mb-2">ノミネート作品</div>
                                <Link
                                    href="/GAME PRIZE OF JAPAN 2025.jpg"
                                    target="_blank"
                                    className="inline-flex items-center text-xs text-brand-primary/80 hover:text-brand-primary border-b border-brand-primary/30 hover:border-brand-primary pb-0.5 transition-colors font-pixel tracking-widest uppercase"
                                >
                                    &gt; 証明書を見る
                                </Link>
                            </div>
                            <div className="border-l border-brand-primary/20 pl-4">
                                <div className="text-brand-text mb-1 block text-sm font-bold">個人制作</div>
                                <div className="text-brand-muted/80 text-[11px] leading-snug">
                                    Game Design<br />Programming<br />Character Design
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-10">
                            {["Unity", "C#", "Game Design"].map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-pixel text-brand-bg-dark bg-brand-primary/80 border border-brand-primary shadow-[0_0_5px_rgba(79,209,255,0.3)] uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col mt-auto pb-4">
                            <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-5">
                                <Link
                                    href="/summary.pdf"
                                    target="_blank"
                                    className="flex-1 w-full flex items-center justify-center h-[54px] px-2 bg-brand-bg-dark border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg-dark font-pixel text-sm lg:text-[15px] xl:text-base text-center transition-all shadow-[0_0_10px_rgba(79,209,255,0.1)] hover:shadow-[0_0_20px_rgba(79,209,255,0.8),inset_0_0_10px_rgba(79,209,255,0.5)] uppercase tracking-widest whitespace-nowrap"
                                >
                                    Game Summary
                                </Link>
                                <div className="flex-1 w-full flex flex-col">
                                    <Link
                                        href="https://drive.google.com/file/d/1Sgsjm5S3_SaOM5yZpRVVtLlheOXdgdO8/view?usp=sharing"
                                        target="_blank"
                                        className="w-full flex items-center justify-center h-[54px] px-2 border border-brand-accent/70 text-brand-accent hover:bg-brand-accent hover:text-brand-bg-dark font-pixel text-sm lg:text-[15px] xl:text-base text-center transition-all shadow-[0_0_10px_rgba(255,155,84,0.1)] hover:shadow-[0_0_20px_rgba(255,155,84,0.6)] uppercase tracking-widest whitespace-nowrap"
                                    >
                                        Download Build
                                    </Link>
                                    <div className="text-center font-sans text-brand-muted/50 text-[11px] mt-2">
                                        Windows only. Size: ~125MB.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
