import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CollectionType } from '../types';

const CollectionSection = ({ title, type, description }: { title: string, type: CollectionType, description: string }) => {
    const collectionProducts = products.filter(p => p.collection === type);

    return (
        <section className="py-24 px-6 md:px-12 border-t border-stone-200/50 first:border-none">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-2xl"
                >
                    <span className="text-xs font-serif font-medium tracking-widest text-stone-500 uppercase mb-3 block">
                        Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">{title}</h2>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                        {description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {collectionProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export const StorePage = () => {
    return (
        <div className="min-h-screen pt-12 pb-24">
            <CollectionSection
                title="Daily Series"
                type="Daily"
                description="Essential daily support for balance, immunity, and vitality. The foundation of your wellness routine."
            />

            <CollectionSection
                title="Premium Series"
                type="Premium"
                description="Targeted solutions for specific health needs. Advanced formulas for heart, liver, and digestive health."
            />

            <CollectionSection
                title="Elite Series"
                type="Elite"
                description="The pinnacle of cellular nutrition. High-potency formulas for beauty, focus, and energy."
            />
        </div>
    );
};
