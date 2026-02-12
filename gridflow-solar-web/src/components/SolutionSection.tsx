import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

const SolutionSection = () => {
    const features = [
        {
            title: "Community-Owned Microgrids",
            desc: "Localized, reliable, and clean power generation that keeps energy decisions close to the people who rely on it most.",
        },
        {
            title: "Flexible Financing (PAYGO & PPAs)",
            desc: "We prioritize affordability by pairing infrastructure with Power Purchase Agreements and Pay-As-You-Go models to remove high upfront costs.",
        },
        {
            title: "Smart Metering & Monitoring",
            desc: "Digital platforms ensure transparent billing, efficient energy use, and long-term system sustainability.",
        },
    ];

    return (
        <section id="solution" className="py-20 bg-green-900 text-white overflow-hidden">
            <div className="max-w-screen-xl px-4 mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Text */}
                <div className="lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold mb-6"
                    >
                        The Solution: <br />
                        <span className="text-green-400">Decentralized Power.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-green-100 mb-8 leading-relaxed"
                    >
                        We don't just provide panels; we build energy ecosystems.
                        By decentralizing power generation and offering flexible payment models,
                        GridFlow Solar ensures that energy is not just a commodity, but a tool for community empowerment.
                    </motion.p>

                    <div className="space-y-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                                className="flex items-start"
                            >
                                <HiCheckCircle className="w-8 h-8 text-green-400 shrink-0 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-green-100/80">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visual/Image Placeholder */}
                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                    >
                        <div className="bg-gradient-to-br from-green-500 to-green-700 h-96 flex items-center justify-center text-center p-8">
                            {/* Abstract representation of a grid */}
                            <div className="grid grid-cols-2 gap-4 opacity-30 animate-pulse">
                                <div className="w-20 h-20 bg-white rounded-lg"></div>
                                <div className="w-20 h-20 bg-white rounded-lg"></div>
                                <div className="w-20 h-20 bg-white rounded-full"></div>
                                <div className="w-20 h-20 bg-white rounded-lg"></div>
                            </div>
                            <h3 className="absolute text-4xl font-bold text-white drop-shadow-md">
                                Empowering<br />Communities
                            </h3>
                        </div>
                    </motion.div>
                    {/* Decorative blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl -z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
