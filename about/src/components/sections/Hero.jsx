import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import VideoWrapper from '../ui/VideoWrapper';

const productAdVideo = "https://otidiafrica.co.za/aplgo/video/Acumullit%20SA%20productAd.mp4";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Blob Animation */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-blob mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-background-dark/30 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center max-w-6xl">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="block text-primary font-medium tracking-wider mb-4 uppercase text-sm">Welcome to the future of wellness</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
                        Nature’s Best. <br />
                        <span className="text-primary-dark opacity-90">Instantly.</span>
                    </h1>
                    <p className="text-xl text-text-light mb-8 leading-relaxed max-w-lg">
                        Experience the world's first DNA-drop technology.
                        Nutrition that tastes like candy, works like science, and fits your lifestyle.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="group"
                            onClick={() => window.open('https://store.aplgo.co.za/', '_blank')}
                        >
                            Shop the Collection
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('meet-gugu')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Meet Gugu
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Video */}
                <div className="relative flex justify-center lg:justify-start lg:pl-12">
                    <VideoWrapper
                        src={productAdVideo}
                        autoPlay
                        className="w-full max-w-md aspect-[9/16] md:aspect-video lg:aspect-[4/5] shadow-2xl skew-y-0 hover:scale-[1.02] transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
