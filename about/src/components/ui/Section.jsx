import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const Section = ({ children, className, id, ...props }) => {
    return (
        <section
            id={id}
            className={cn("relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
