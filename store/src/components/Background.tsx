import { useMemo } from 'react';
import './background.css';

interface Particle {
    id: number;
    type: 'pollen' | 'blob';
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

export const Background = () => {
    // Generate particles once on mount
    const particles = useMemo(() => {
        const items: Particle[] = [];

        // Generate Pollen (Tiny dots)
        for (let i = 0; i < 20; i++) {
            items.push({
                id: i,
                type: 'pollen',
                left: Math.random() * 100, // 0-100%
                size: Math.random() * 3 + 2, // 2-5px
                duration: Math.random() * 12 + 18, // 18-30s (Slow)
                delay: Math.random() * -30, // Negative delay to start mid-animation
                opacity: Math.random() * 0.1 + 0.08, // 0.08 - 0.18
            });
        }

        // Generate Blobs (Large faint shapes)
        for (let i = 0; i < 3; i++) {
            items.push({
                id: i + 100,
                type: 'blob',
                left: Math.random() * 80 + 10,
                size: Math.random() * 200 + 300, // 300-500px
                duration: Math.random() * 20 + 20, // 20-40s
                delay: Math.random() * -20,
                opacity: Math.random() * 0.05 + 0.05,
            });
        }

        return items;
    }, []);

    return (
        <div className="bg-fixed-container" aria-hidden="true">
            {/* Layer 1: Gradient */}
            <div className="bg-gradient-layer" />

            {/* Layer 2: Particles & Blobs */}
            <div className="bg-particles-layer">
                {particles.map((p) => {
                    const isPollen = p.type === 'pollen';
                    return (
                        <div
                            key={p.id}
                            className={isPollen ? 'particle-pollen animate-float' : 'particle-blob animate-drift'}
                            style={{
                                left: `${p.left}%`,
                                width: `${p.size}px`,
                                height: `${p.size}px`,
                                animationDuration: `${p.duration}s`,
                                animationDelay: `${p.delay}s`,
                                '--target-opacity': p.opacity,
                                opacity: isPollen ? 0 : p.opacity, // Pollen fades in/out, Blobs stay constant
                                top: isPollen ? undefined : `${Math.random() * 60 + 20}%`, // Blobs fixed vertically roughly
                            } as React.CSSProperties}
                        />
                    );
                })}
            </div>

            {/* Layer 3: Noise Texture (Top) */}
            <div className="bg-noise-layer" />
        </div>
    );
};
