import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const variants = {
        primary: "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl hover:scale-[1.02]",
        secondary: "bg-white/50 text-text hover:bg-white/70 backdrop-blur-sm border border-white/50",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
