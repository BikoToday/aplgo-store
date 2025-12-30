import { motion } from 'framer-motion';
import Section from '../ui/Section';
import GlassCard from '../ui/GlassCard';
import VideoWrapper from '../ui/VideoWrapper';
import missionVisual from '../../assets/images/mission-visual.png';

const threeFactsVideo = "https://otidiafrica.co.za/aplgo/video/3facts%20about%20Acumullit%20SA.mp4";

const Mission = () => {
    return (
        <Section id="mission" className="bg-white/10 backdrop-blur-[2px]">
            <div className="container mx-auto max-w-5xl text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-text mb-6"
                >
                    Wellness That Works - <span className="text-primary-dark">By Design</span>
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"
                />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                {/* Left Card */}
                <GlassCard className="p-8 md:p-10 flex flex-col h-full justify-between" delay={0.1}>
                    <div>
                        <h3 className="text-2xl font-bold text-text mb-6">Our Mission</h3>
                        <div className="space-y-6">
                            <p className="text-lg text-text leading-relaxed font-light">
                                At <span className="font-semibold text-primary-dark">APLGO</span>, we believe wellness is not just about supplements, it’s a lifestyle grounded in science-backed nutrition, real human support, and lasting energy for the life you want to live.
                            </p>
                            <p className="text-lg text-text leading-relaxed font-light mb-8">
                                Founded on a bold mission to make premium, plant-powered nutrition accessible and effective around the world, APLGO brings together centuries-old botanical wisdom with modern biotechnology.
                            </p>
                        </div>
                    </div>

                    {/* Visual aligns with video on right */}
                    <div className="w-full mt-auto">
                        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative bg-black/5">
                            <img
                                src={missionVisual}
                                alt="Power of APLGO"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <p className="text-center text-sm text-text-light mt-3 italic">Switch on your day with PWR</p>
                    </div>
                </GlassCard>

                {/* Right Card */}
                <GlassCard className="p-8 md:p-10 h-full flex flex-col justify-between" delay={0.2}>
                    <div>
                        <h3 className="text-2xl font-bold text-text mb-4">Science Meets Nature</h3>
                        <p className="text-lg text-text-light leading-relaxed mb-6">
                            Our core innovation, <span className="italic">Acumullit SA® Strength Accumulation technology</span>, preserves and enhances the beneficial properties of whole-food botanicals.
                        </p>
                        <p className="text-lg text-text leading-relaxed font-light mb-8">
                            Every lozenge, drop, and wellness product you see here isn’t just a supplement - it’s a <span className="font-medium">strategic dose of nutrition</span> engineered for absorption, convenience, and vitality.
                        </p>
                    </div>

                    <div className="w-full mt-auto">
                        <VideoWrapper
                            src={threeFactsVideo}
                            className="w-full aspect-video shadow-lg rounded-xl"
                        // controls // User can play when interested
                        />
                        <p className="text-center text-sm text-text-light mt-3 italic">Discover 3 key facts about our technology</p>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
};

export default Mission;
