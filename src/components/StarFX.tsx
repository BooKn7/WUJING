"use client";

import { useEffect, useRef, useState } from 'react';
import { StarFXManager } from '@/lib/StarSystem';

export default function StarFX() {
    const layerRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const managerRef = useRef<StarFXManager | null>(null);

    const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (
            !isMobile &&
            typeof window !== 'undefined' &&
            layerRef.current &&
            toggleRef.current &&
            !managerRef.current
        ) {
            managerRef.current = new StarFXManager({
                starsLayer: layerRef.current,
                toggleBtn: toggleRef.current,
            });
        }

        if (isMobile && managerRef.current) {
            managerRef.current.destroy();
            managerRef.current = null;
        }

        return () => {
            if (managerRef.current) {
                managerRef.current.destroy();
                managerRef.current = null;
            }
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <div id="ourstars-fx" className="absolute top-0 left-0 w-full h-full min-h-screen pointer-events-none z-[100]">
                <div
                    ref={layerRef}
                    className="ourstars-stars-layer absolute inset-0 w-full h-full"
                />
                <button
                    ref={toggleRef}
                    className="ourstars-toggle absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-white/70 text-sm rounded-full hover:bg-white/10 hover:text-white transition-all pointer-events-auto z-[101] select-none touch-none font-mono"
                >
                    Stars FX: ON
                </button>
            </div>
        </>
    );
}
