import { motion } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiOutlineSun, HiOutlineBolt, HiOutlineBattery100, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const products = [
    {
        name: "Solar Panels",
        description:
            "High-efficiency monocrystalline and polycrystalline solar panels designed for Africa's abundant sunlight. Our panels deliver maximum power output for homes, schools, and community microgrids.",
        icon: HiOutlineSun,
        features: ["Monocrystalline & Polycrystalline", "25-year performance warranty", "Weather-resistant design", "Community-scale ready"],
        gradient: "from-amber-400 to-orange-500",
        bgGlow: "group-hover:shadow-amber-500/20",
    },
    {
        name: "Inverters",
        description:
            "Smart hybrid inverters that seamlessly convert and manage solar power for both grid-tied and off-grid installations. Built-in MPPT ensures maximum energy harvest.",
        icon: HiOutlineBolt,
        features: ["Hybrid on/off-grid capability", "Built-in MPPT tracking", "Remote monitoring ready", "Surge & overload protection"],
        gradient: "from-blue-400 to-indigo-500",
        bgGlow: "group-hover:shadow-blue-500/20",
    },
    {
        name: "Batteries",
        description:
            "Lithium-ion and LiFePO4 energy storage solutions that keep the lights on after sunset. Designed for longevity and deep-cycle performance in African climates.",
        icon: HiOutlineBattery100,
        features: ["LiFePO4 & Lithium-ion", "6000+ cycle lifespan", "Modular & scalable", "Built for tropical climates"],
        gradient: "from-green-400 to-emerald-500",
        bgGlow: "group-hover:shadow-green-500/20",
    },
    {
        name: "GridFlow Solar App",
        description:
            "Our proprietary monitoring and billing platform. Track real-time energy production, manage community billing, receive alerts, and optimise system performance — all from your phone.",
        icon: HiOutlineDevicePhoneMobile,
        features: ["Real-time monitoring", "Community billing system", "Smart alerts & analytics", "iOS & Android compatible"],
        gradient: "from-purple-400 to-violet-500",
        bgGlow: "group-hover:shadow-purple-500/20",
    },
];

const ProductsSection = () => {
    return (
        <section id="products" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        What We Offer
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our <span className="text-green-500">Products</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        End-to-end solar energy solutions — from panels on the roof to the app in your
                        pocket. Built for Africa, powered by the sun.
                    </motion.p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className={`relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl ${product.bgGlow} transition-all duration-500`}
                            >
                                {/* Top gradient accent */}
                                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                                <div className="p-8">
                                    {/* Image Placeholder */}
                                    <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center mb-6 overflow-hidden">
                                        <HiOutlinePhotograph className="w-12 h-12 text-gray-300 mb-2" />
                                        <span className="text-xs text-gray-400 font-medium">
                                            {product.name} Image
                                        </span>
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    </div>

                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                        {product.description}
                                    </p>

                                    {/* Features list */}
                                    <ul className="space-y-2">
                                        {product.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm text-gray-500"
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
