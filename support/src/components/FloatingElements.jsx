import React from 'react';

const FloatingElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Main Background Image */}
            <img
                src="/web-bg.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            />

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animate-gradient-bg opacity-30 mix-blend-multiply"></div>

            {/* Floating Leaves / Orbs */}
            <div className="absolute top-10 left-[10%] w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float opacity-60"></div>
            <div className="absolute bottom-20 right-[5%] w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-float delay-1000 opacity-50"></div>
            <div className="absolute top-[40%] left-[60%] w-40 h-40 bg-green-100/20 rounded-full blur-2xl animate-float delay-700"></div>

            {/* Particles (CSS driven) */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={`leaf-${i}`}
                    className="absolute bg-white/10 rounded-full blur-sm"
                    style={{
                        width: Math.random() * 20 + 5 + 'px',
                        height: Math.random() * 20 + 5 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animation: `float-slow ${Math.random() * 10 + 10}s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}

            {/* Small pollen specs */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={`pollen-${i}`}
                    className="absolute bg-yellow-50/40 rounded-full"
                    style={{
                        width: Math.random() * 4 + 2 + 'px',
                        height: Math.random() * 4 + 2 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        animation: `float-fast ${Math.random() * 15 + 10}s infinite linear`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;
