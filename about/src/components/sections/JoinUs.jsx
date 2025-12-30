import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import performanceImg from '../../assets/images/performance.png';

const JoinUs = () => {
    return (
        <Section id="join-us" className="relative py-24">
            <div className="absolute inset-0 z-0 opacity-10">
                <img src={performanceImg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-background to-transparent" />

            <div className="container mx-auto relative z-10 text-center max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-text mb-8"
                >
                    Welcome to <br /><span className="text-primary-dark">Wellness That Works</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-text mb-12"
                >
                    Explore the full APLGO range, learn more about Acumullit SA® technology, and connect with Gugu to begin your personalised wellness journey - one drop at a time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <Button
                        variant="primary"
                        className="text-lg px-8 py-4 w-full md:w-auto"
                        onClick={() => window.open('https://store.aplgo.co.za/', '_blank')}
                    >
                        Visit the Store
                    </Button>
                    <Button
                        variant="secondary"
                        className="text-lg px-8 py-4 w-full md:w-auto"
                        onClick={() => window.open('https://support.aplgo.co.za/', '_blank')}
                    >
                        Contact Support
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
};

export default JoinUs;
