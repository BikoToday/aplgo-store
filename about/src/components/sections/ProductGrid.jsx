import { motion } from 'framer-motion';
import { Microscope, Coffee, Factory } from 'lucide-react';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import VideoWrapper from '../ui/VideoWrapper';

const breakdownVideo = "https://otidiafrica.co.za/aplgo/video/Acumullit%20SA%20Product%20Breakdown.mp4";

const features = [
    {
        icon: Microscope,
        title: "Advanced Botanical Technology",
        description: "Acumullit SA® goes far beyond common extraction methods. By thinning plant cellular membranes and activating botanical compounds, this technology releases phytonutrients and micro elements in forms your body can readily absorb."
    },
    {
        icon: Coffee,
        title: "Convenient and Enjoyable",
        description: "Our products are designed for modern life - quick to use, delicious, and perfect for daily routines. Just place a drop in your mouth and let the benefits begin instantly."
    },
    {
        icon: Factory,
        title: "Global Standards",
        description: "APLGO’s manufacturing facility in Chisinau, Moldova, is a vertically integrated hub where formulation and production happen under one roof. FDA registered and ISO certified."
    }
];

const ProductGrid = () => {
    return (
        <Section id="product-grid" className="bg-transparent py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text mb-6"
                    >
                        Unlocking Nature's Potential
                    </motion.h2>
                    <p className="text-xl text-text-light leading-relaxed">
                        See exactly how we extract DNA-level nutrition from botanicals to create a drop that changes everything.
                    </p>
                </div>

                {/* Featured Video Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <VideoWrapper
                        src={breakdownVideo}
                        className="w-full max-w-5xl mx-auto aspect-video shadow-2xl rounded-2xl border-4 border-white/20"
                        controls
                    />
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <GlassCard key={index} delay={index * 0.2} className="p-8 hover:bg-white/50 group h-full">
                            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                <feature.icon size={32} className="text-primary-dark" />
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4">{feature.title}</h3>
                            <p className="text-text-light leading-relaxed">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ProductGrid;
