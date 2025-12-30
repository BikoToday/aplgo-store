import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../ui/Section';
import guguImg from '../../assets/images/gugu-profile.jpg';

const MeetGugu = () => {
    return (
        <Section id="meet-gugu" className="bg-gradient-to-br from-white/30 to-primary/10 backdrop-blur-sm">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1 relative"
                >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] transform rotate-12" />
                    <img
                        src={guguImg}
                        alt="Gugu - Your Wellness Guide"
                        className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-b-3xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-1 md:order-2"
                >
                    <h2 className="text-4xl font-bold text-text mb-2">Meet Gugu</h2>
                    <h3 className="text-2xl text-primary font-medium mb-6">Your Wellness Guide</h3>

                    <p className="text-lg text-text leading-relaxed mb-8">
                        Gugu is more than a representative - she’s your wellness partner. With deep experience helping individuals optimise health and a passion for education and support, she brings clarity to a space that’s often confusing and overwhelming.
                    </p>

                    <h4 className="font-semibold text-text mb-4 text-lg">She helps you:</h4>
                    <ul className="space-y-4">
                        {[
                            "Understand how Acumullit SA® works on a cellular level",
                            "Choose the right formulations for your personal goals",
                            "Build sustainable habits that amplify results",
                            "Navigate wellness with confidence, not guesswork"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-start gap-3 text-text-light"
                            >
                                <div className="mt-1 min-w-[20px]">
                                    <Check size={20} className="text-primary" />
                                </div>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <p className="mt-8 text-lg font-medium text-primary-dark italic">
                        Her approach is rooted in science, empathy, and real human connection.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default MeetGugu;
