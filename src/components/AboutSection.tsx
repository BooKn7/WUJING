export default function AboutSection() {
    return (
        <section id="about" className="py-24 max-w-4xl mx-auto px-4 border-b border-brand-primary/10">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold font-pixel tracking-wider text-brand-primary">
                    _ABOUT
                </h2>
                <div className="h-[2px] w-24 bg-gradient-to-r from-brand-primary/50 to-transparent"></div>
            </div>

            <div className="bg-brand-bg-dark/50 border-l border-brand-secondary p-8 md:p-12 relative overflow-hidden">
                {/* Pixel Corner Decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-brand-secondary"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-secondary"></div>

                <ul className="space-y-6 text-brand-muted text-lg leading-relaxed list-none">
                    <li className="flex items-start">
                        <span className="text-brand-accent mr-4 font-pixel tracking-widest mt-1">&gt;</span>
                        <span>上海出身、16歳で来日。日中両文化の視点を持つ。</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-brand-accent mr-4 font-pixel tracking-widest mt-1">&gt;</span>
                        <span>デジタルハリウッド大学大学院（DHU）卒業。実践的なクリエイティブと技術を学ぶ。</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-brand-accent mr-4 font-pixel tracking-widest mt-1">&gt;</span>
                        <span>日本語能力試験（JLPT）N1満点。円滑なコミュニケーションとドキュメント読解力。</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-brand-accent mr-4 font-pixel tracking-widest mt-1">&gt;</span>
                        <span>Bilibiliにて技術・開発系コンテンツを発信し、3ヶ月で約1.3万人の登録者を獲得。</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-brand-secondary mr-4 font-pixel tracking-widest mt-1">#</span>
                        <span className="text-brand-text">技術とデザインの交差点で、記憶に残る「体験」を作ることに情熱を注いでいます。</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
