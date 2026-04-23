import { motion } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";

const partners = [
    {
        name: "Mercedes-Benz Bevisioneers",
        description:
            "GridFlow Solar is proud to be part of the Mercedes-Benz Bevisioneers programme — a global initiative supporting visionary social entrepreneurs driving sustainable impact. This partnership validates our mission and amplifies our reach across Africa.",
        type: "Innovation Partner",
        typeColor: "bg-blue-100 text-blue-700",
        accentGradient: "from-blue-400 to-cyan-500",
    },
    {
        name: "Hamburg Sustainability Conference (HSC)",
        description:
            "As a featured participant at the Hamburg Sustainability Conference, GridFlow Solar engages with global sustainability leaders, sharing insights on community-owned clean energy and forging alliances that accelerate Africa's energy transition.",
        type: "Conference Partner",
        typeColor: "bg-emerald-100 text-emerald-700",
        accentGradient: "from-emerald-400 to-green-500",
    },
];

const PartnersSection = () => {
    return (
        <section id="partners" className="py-24 bg-white overflow-hidden">
            <div className="max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        Our Network
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Partners & <span className="text-green-500">Collaborators</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We're backed by world-class organisations committed to sustainable innovation
                        and Africa's clean energy future.
                    </motion.p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Top gradient accent */}
                            <div className={`h-1.5 bg-gradient-to-r ${partner.accentGradient}`} />

                            <div className="p-8 md:p-10">
                                {/* Logo Placeholder */}
                                <div className="relative w-full h-32 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center mb-6 overflow-hidden">
                                    <HiOutlinePhotograph className="w-10 h-10 text-gray-300 mb-2" />
                                    <span className="text-xs text-gray-400 font-medium">
                                        {partner.name} Logo
                                    </span>
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                </div>

                                {/* Type Badge */}
                                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${partner.typeColor}`}>
                                    {partner.type}
                                </span>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                    {partner.name}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to partner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 mb-4">Interested in partnering with GridFlow Solar?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Become a Partner
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;
