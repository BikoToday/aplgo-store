import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import Section from '../ui/Section';
import VideoWrapper from '../ui/VideoWrapper';

const factoryVideo = "https://otidiafrica.co.za/aplgo/video/Acumullit%20SA%20Factoryvisit.mp4";

const certifications = [
    { name: "ISO 9001:2015", icon: ShieldCheck },
    { name: "ISO 22000:2018", icon: Award },
    { name: "FDA Registered", icon: FileCheck },
    { name: "Halal Certified", icon: Award },
    { name: "Kosher Certified", icon: Award },
    { name: "EAC Conformity", icon: FileCheck },
];

const Certifications = () => {
    return (
        <Section id="certifications" className="py-24 bg-white/30 backdrop-blur-sm">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content & Certs */}
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-text mb-6"
                        >
                            Global Quality Standards. <br />
                            <span className="text-primary">Verified Trust.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-text-light mb-10 leading-relaxed"
                        >
                            Our production facilities operate under the strictest international protocols. We hold valid certificates of conformity for Europe, the USA, and beyond—ensuring safety you can rely on.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-white/40 hover:bg-white/80 transition-colors"
                                >
                                    <cert.icon className="text-primary shrink-0" size={20} />
                                    <span className="font-medium text-text text-sm">{cert.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Factory Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <VideoWrapper
                            src={factoryVideo}
                            className="w-full aspect-video shadow-2xl rounded-2xl"
                            controls
                        />
                        <p className="text-center text-sm text-text-light mt-4 italic">Complete transparency: Inside our ISO-certified manufacturing hub</p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Certifications;
