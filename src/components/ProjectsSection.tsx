"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectBase {
    id: string;
    title: string;
    type: string;
    description: string;
    tags: string[];
    link?: string;
}

interface GameProject extends ProjectBase {
    concept: string;
    myRole: string[];
    highlights: string[];
    result?: string;
}

const projects = [
    {
        id: "ourstars",
        title: "OurStars",
        type: "Game Project",
        description: "2人協力プレイのアクションゲーム。引力と斥力を駆使して星空を旅する。",
        tags: ["Unity", "C#", "Co-op"],
        link: "#",
        concept: "プレイヤー間の「つながり」を物理的に表現し、協力の楽しさを最大化する。",
        myRole: ["企画立案", "システム設計", "メインプログラミング", "レベルデザイン"],
        highlights: [
            "2人の距離に応じた動的な引力・斥力システムの構築",
            "Network/ローカル両対応の入力・状態同期管理",
            "Unity Physicsを用いた安定した物理演算挙動の調整",
            "プレイヤーの学習コストを下げる直感的なレベルデザイン"
        ],
        result: "Bitsummit 2024 展示作品 / 学内コンテスト優秀賞"
    },
    {
        id: "ai-teammate",
        title: "AI Teammate Research",
        type: "Research & Development",
        description: "ゲーム内のAIチームメイトの挙動と、プレイヤー体験への影響に関する研究。",
        tags: ["Behavior Tree", "AI", "Python"],
        link: "#",
        concept: "「賢すぎるAI」ではなく「一緒に遊びたくなるAI」の設計論。",
        myRole: ["AIアルゴリズム実装", "ユーザーテスト設計", "データ分析"],
        highlights: [
            "プレイヤーの意図を推論するBehavior Treeの拡張",
            "わざと間違うことで人間らしさを演出する「ゆらぎ」の実装",
            "50名規模のテストプレイ環境の構築と定量評価"
        ]
    },
    {
        id: "content",
        title: "Content Creation",
        type: "Media",
        description: "Bilibiliでの技術・ゲーム開発解説チャンネルの運営。",
        tags: ["Video Editing", "Tutorials", "Community"],
        link: "https://bilibili.com/",
        concept: "複雑な技術概念をゲーム開発の文脈で分かりやすく伝える。",
        myRole: ["企画・台本", "動画編集", "コミュニティマネジメント"],
        highlights: [
            "3ヶ月で登録者約1.3万人を達成",
            "視聴者維持率40%超えを記録した解説台本の構成力",
            "コメントやフィードバックを通じた視聴者ニーズの分析"
        ]
    }
];

export default function ProjectsSection() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-pixel tracking-wider text-brand-primary">
                    _SELECTED_PROJECTS
                </h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-brand-primary/50 to-transparent"></div>
            </div>

            <div className="space-y-12">
                {projects.map((project, index) => {
                    const isExpanded = expandedId === project.id;
                    const isMain = index === 0;

                    return (
                        <div
                            key={project.id}
                            className={`group bg-brand-bg-dark/80 backdrop-blur-sm border transition-all duration-300 ${isMain ? "border-brand-primary shadow-[0_0_20px_rgba(79,209,255,0.15)]" : "border-brand-primary/30"
                                }`}
                        >
                            <div className="flex flex-col lg:flex-row border-b border-brand-primary/20">
                                {/* Pixel Art Placeholder Head Image */}
                                <div className={`lg:w-2/5 p-4 border-b lg:border-b-0 lg:border-r border-brand-primary/20 bg-brand-bg-light flex items-center justify-center relative overflow-hidden ${isMain ? "min-h-[250px]" : "min-h-[200px]"}`}>
                                    <div className="absolute inset-0 pattern-grid opacity-20"></div>
                                    {project.id === "ourstars" && (
                                        <div className="text-center z-10">
                                            <div className="text-4xl mb-2">✨ ✨</div>
                                            <div className="font-pixel text-brand-primary tracking-widest">[ 星 空 協 力 ]</div>
                                        </div>
                                    )}
                                    {project.id === "ai-teammate" && (
                                        <div className="text-center z-10">
                                            <div className="text-brand-secondary font-pixel text-2xl mb-2 animate-pulse">&gt; AI_READY_</div>
                                            <div className="w-16 h-16 border-2 border-brand-secondary mx-auto mt-2 flex items-center justify-center pixel-border">
                                                <div className="w-8 h-8 bg-brand-secondary/50"></div>
                                            </div>
                                        </div>
                                    )}
                                    {project.id === "content" && (
                                        <div className="text-center z-10">
                                            <div className="w-20 h-14 border-2 border-brand-accent mx-auto flex items-center justify-center relative">
                                                <div className="w-0 h-0 border-t-8 border-b-8 border-l-[12px] border-transparent border-l-brand-accent"></div>
                                            </div>
                                            <div className="font-pixel text-brand-accent text-sm mt-3 tracking-widest">RECORDING...</div>
                                        </div>
                                    )}
                                </div>

                                {/* Card Info */}
                                <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-brand-secondary font-pixel text-sm uppercase tracking-wider">{project.type}</span>
                                        </div>
                                        <h3 className={`font-bold text-brand-text mb-4 ${isMain ? "text-3xl" : "text-2xl"}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-brand-muted leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs font-pixel text-brand-text bg-brand-bg-light border border-brand-primary/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                className="flex items-center text-sm font-pixel text-brand-bg-dark bg-brand-primary px-4 py-2 hover:bg-brand-primary/80 transition-colors"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                {isMain ? "Watch Demo" : "View"}
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => toggleExpand(project.id)}
                                            className="flex items-center text-sm font-pixel text-brand-primary border border-brand-primary px-4 py-2 hover:bg-brand-primary/10 transition-colors ml-auto"
                                        >
                                            {isExpanded ? (
                                                <><ChevronUp className="w-4 h-4 mr-2" /> Close Details</>
                                            ) : (
                                                <><ChevronDown className="w-4 h-4 mr-2" /> Details</>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Details */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-[800px] border-t border-brand-primary/20 bg-brand-bg-dark/40" : "max-h-0"
                                    }`}
                            >
                                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 text-brand-muted text-sm leading-relaxed">
                                    <div>
                                        <h4 className="text-brand-secondary font-pixel text-base mb-2 border-b border-brand-secondary/30 pb-1">Concept</h4>
                                        <p className="mb-6">{project.concept}</p>

                                        <h4 className="text-brand-secondary font-pixel text-base mb-2 border-b border-brand-secondary/30 pb-1">My Role</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {project.myRole.map(role => (
                                                <li key={role}>{role}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-brand-secondary font-pixel text-base mb-2 border-b border-brand-secondary/30 pb-1">Technical Highlights</h4>
                                        <ul className="list-disc list-inside space-y-2 mb-6">
                                            {project.highlights.map(hl => (
                                                <li key={hl}>{hl}</li>
                                            ))}
                                        </ul>

                                        {project.result && (
                                            <>
                                                <h4 className="text-brand-accent font-pixel text-base mb-2 border-b border-brand-accent/30 pb-1">Result</h4>
                                                <p className="text-brand-text">{project.result}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
