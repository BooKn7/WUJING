import Link from "next/link";

export default function CreatorSection() {
    return (
        <section id="creator" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative border border-brand-secondary/50 bg-gradient-to-br from-brand-bg-dark to-brand-bg-light p-10 md:p-16 overflow-hidden flex flex-col items-center text-center">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent"></div>

                    <div className="mb-8 font-pixel text-brand-secondary tracking-widest text-sm uppercase">
                        [ Creator Activity ]
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-pixel text-brand-text mb-6">
                        Bilibili Content Creation
                    </h2>

                    <p className="font-sans text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        Bilibiliでゲーム制作・解説コンテンツを投稿。<br />
                        3ヶ月で1.3万人のフォロワーを獲得。
                    </p>

                    <Link
                        href="https://space.bilibili.com/"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-secondary/10 border border-brand-secondary text-brand-secondary font-pixel text-sm hover:bg-brand-secondary hover:text-brand-bg-dark transition-all duration-300 uppercase tracking-wider"
                    >
                        Visit Channel
                    </Link>

                    {/* Decorative faint pixels */}
                    <div className="absolute bottom-4 right-4 text-brand-secondary/20 font-pixel text-xs">
            // DATA_STREAM_ACTIVE
                    </div>
                </div>
            </div>
        </section>
    );
}
