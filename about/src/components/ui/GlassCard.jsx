import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const GlassCard = ({ children, className, delay = 0, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(
                "backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-2xl overflow-hidden",
                "hover:bg-white/40 transition-colors duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
