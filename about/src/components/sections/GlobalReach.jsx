import { motion } from 'framer-motion';
import Section from '../ui/Section';
import guguProfessionalImg from '../../assets/images/gugu.png';

const GlobalReach = () => {
    return (
        <Section id="global-reach" className="bg-primary/5 py-24">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-text mb-8">
                        Worldwide Reach. <br />Human Support.
                    </h2>
                    <p className="text-xl text-text-light leading-relaxed">
                        While APLGO products are available across Africa, Europe, Asia, and the Americas, our community feels local because of hands-on wellness leadership and support right here at home.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <img
                        src={guguProfessionalImg}
                        alt="Global Leadership"
                        className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
                    />
                </motion.div>
            </div>
        </Section>
    );
};

export default GlobalReach;
