import { motion } from 'framer-motion';
import Section from '../ui/Section';
import ritualImg from '../../assets/images/ritual.png';

const Philosophy = () => {
    return (
        <Section id="philosophy" className="bg-white/20 backdrop-blur-lg">
            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={ritualImg}
                        alt="Daily Wellness Ritual"
                        className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 w-full max-w-md mx-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-4xl font-bold text-text mb-6">Wellness Is a Journey - <br /><span className="text-primary-dark">Not a Shortcut</span></h2>

                    <div className="space-y-6 text-lg text-text-light leading-relaxed">
                        <p>
                            Wellness isn’t one-size-fits-all. At APLGO, we’re committed to holistic nourishment that supports your body’s natural balance.
                        </p>
                        <p>
                            Whether you’re seeking immune support, energy, vitality, or daily nutritional resilience, our range stands ready to assist.
                        </p>
                        <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                            <p className="italic font-medium text-text-dark">
                                "But premium products are only part of the picture. Real wellness is powered by guidance, accountability, and personalised support."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Philosophy;
