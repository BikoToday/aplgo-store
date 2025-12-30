import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const VideoWrapper = ({ src, poster, className, autoPlay = false, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
                "relative overflow-hidden rounded-2xl shadow-2xl border border-white/30 bg-black/5 backdrop-blur-sm",
                className
            )}
        >
            <video
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                playsInline
                autoPlay={autoPlay}
                muted={autoPlay}
                loop={autoPlay}
                controls={!autoPlay}
                {...props}
            />
            {/* Optional Glass Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </motion.div>
    );
};

export default VideoWrapper;
