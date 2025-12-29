import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const HomePage = () => {
    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-stone-200/40 rounded-full blur-[128px] pointer-events-none animate-slow-drift" />
            <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[128px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 max-w-4xl mx-auto space-y-8"
            >
                <span className="inline-block text-xs font-serif italic text-stone-500 tracking-wider mb-4">
                    Wellness for the Modern Soul
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-stone-900 tracking-tight leading-[1.1]">
                    Balance. Energy.<br />
                    <span className="italic text-stone-500">Restoration.</span>
                </h1>

                <p className="max-w-xl mx-auto text-lg text-stone-600 leading-relaxed font-light">
                    A curated collection of natural wellness drops designed to harmonize your body and mind.
                    Experience the quiet confidence of true health.
                </p>

                <div className="pt-8">
                    <Link to="/store">
                        <Button size="lg" className="rounded-full px-12 h-14 text-base tracking-wide">
                            Explore the Store
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-400"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </div>
    );
};
