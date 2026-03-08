"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
    const [stage, setStage] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 兼容开发环境的热加载
        setStage(0);
        setProgress(0);

        // 阶段1: 启动
        const t1 = setTimeout(() => setStage(1), 100);
        // 阶段2: 加载
        const t2 = setTimeout(() => setStage(2), 400);
        // 阶段3: 唤醒
        const t3 = setTimeout(() => setStage(3), 1100);
        // 阶段4: 屏幕展开
        const t4 = setTimeout(() => setStage(4), 1600);
        // 阶段5: 卸载组件
        const t5 = setTimeout(() => setStage(5), 3000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
        };
    }, []);

    useEffect(() => {
        if (stage >= 2 && stage < 4) {
            const interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) return 100;
                    return p + Math.floor(Math.random() * 20) + 10;
                });
            }, 50);
            return () => clearInterval(interval);
        } else if (stage >= 4) {
            setProgress(100);
        }
    }, [stage]);

    if (stage === 5) return null;

    const isSplitting = stage >= 4;
    const displayProgress = Math.min(progress, 100);

    const LoadingContent = () => (
        <div className="font-pixel text-brand-primary text-xl md:text-3xl font-bold flex flex-col items-start space-y-4 tracking-widest w-fit pr-12">
            <p className={`transition-opacity duration-100 text-left ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                &gt; SYSTEM.BOOT()
            </p>
            <p className={`transition-opacity duration-100 text-left ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                &gt; LOADING_ASSETS... [{displayProgress.toString().padStart(3, '0')}%]
            </p>
            <p className={`transition-opacity duration-100 text-left text-brand-secondary flex items-center ${stage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                <span>&gt; AWAKENING</span>
                <span className={`w-3 h-6 bg-brand-secondary ml-2 ${stage < 4 ? 'animate-blink' : 'opacity-0'}`}></span>
            </p>
        </div>
    );

    return (
        <div className={`fixed inset-0 z-[100] flex pointer-events-none ${isSplitting ? 'overflow-hidden' : ''}`}>
            {/* 左侧门 */}
            <div
                className={`absolute top-0 left-0 w-1/2 h-full bg-brand-bg-dark border-r border-brand-primary/50 shadow-[5px_0_20px_rgba(79,209,255,0.2)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-end ${isSplitting ? '-translate-x-full' : 'translate-x-0'
                    }`}
            >
                <LoadingContent />
            </div>

            {/* 右侧门 */}
            <div
                className={`absolute top-0 right-0 w-1/2 h-full bg-brand-bg-dark border-l border-brand-primary/50 shadow-[-5px_0_20px_rgba(79,209,255,0.2)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] flex overflow-hidden ${isSplitting ? 'translate-x-full' : 'translate-x-0'
                    }`}
            >
            </div>

            {/* 中间的特效光线 */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-brand-primary shadow-[0_0_20px_rgba(79,209,255,1)] transition-all duration-300 ${isSplitting ? 'opacity-0 scale-y-0' : 'opacity-100 scale-y-100'
                } ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
    );
}
