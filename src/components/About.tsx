import { Mail } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* 左侧：个人简介 */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="text-2xl md:text-3xl font-pixel text-brand-primary tracking-wider uppercase mb-12">
                        About Me
                    </h2>

                    <div className="w-full space-y-6 text-brand-muted font-sans text-base leading-relaxed">
                        <div className="mb-6">
                            <h3 className="font-pixel text-2xl text-brand-text mb-2">武敬</h3>
                            <p className="font-pixel text-brand-primary text-xs tracking-widest uppercase">Game Developer / Content Creator</p>
                        </div>

                        <p>
                            上海出身。16歳で来日し、日本で高校と大学を経験しました。<br />
                            日本語能力試験 JLPT N1（満点合格）を取得しています。
                            <a
                                href="/N1.png"
                                target="_blank"
                                className="inline-flex items-center text-xs text-brand-primary/80 hover:text-brand-primary border-b border-brand-primary/30 hover:border-brand-primary pb-0.5 transition-colors font-pixel tracking-widest uppercase ml-3 alignment-baseline"
                            >
                                &gt; 証明書を見る
                            </a>
                        </p>

                        <p>
                            普段からゲームや映像、音楽に触れることが好きで、<br />
                            作品に心を動かされる瞬間に強く惹かれます。
                        </p>

                        <p>
                            人が梦中になる瞬間を生み出すことに、何より面白さを感じます。<br />
                            ゲームだけでなく、映像やコンテンツ制作など、様々な形で「人が楽しむ体験」を作ることに興味があります。
                        </p>
                    </div>
                </div>

                {/* 右侧：联系方式 */}
                <div className="flex flex-col items-start w-full">
                    <h2 className="text-2xl md:text-3xl font-pixel text-brand-primary tracking-wider uppercase mb-12">
                        Get In Touch
                    </h2>

                    <div className="w-full flex">
                        <div
                            className="flex items-center gap-3 text-brand-muted font-sans text-base lg:text-lg cursor-default select-all"
                        >
                            <span className="text-brand-primary"><Mail className="w-5 h-5 lg:w-6 lg:h-6" /></span>
                            bu.kei0128@gmail.com
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
