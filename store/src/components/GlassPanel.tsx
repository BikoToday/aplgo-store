import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassPanelProps extends HTMLMotionProps<"div"> {
    variant?: 'default' | 'card' | 'sidebar';
}

export const GlassPanel = ({ className, variant = 'default', children, ...props }: GlassPanelProps) => {
    const variants = {
        default: 'glass',
        card: 'glass-card rounded-lg',
        sidebar: 'backdrop-blur-xl bg-white/80 border-l border-white/20 shadow-2xl',
    };

    return (
        <motion.div
            className={cn(variants[variant], className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};
