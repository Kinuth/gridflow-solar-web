import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineHeart } from "react-icons/hi";

const values = [
    {
        icon: <HiOutlineLightBulb className="w-8 h-8" />,
        title: "Innovation",
        description:
            "We leverage cutting-edge solar and microgrid technology to deliver reliable energy solutions tailored to underserved communities.",
    },
    {
        icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
        title: "Sustainability",
        description:
            "Every system we build is designed for long-term climate impact — reducing emissions and replacing fossil-fuel dependency.",
    },
    {
        icon: <HiOutlineHeart className="w-8 h-8" />,
        title: "Community Ownership",
        description:
            "We believe energy independence starts with community ownership. Our model empowers local stakeholders to control their power.",
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

            <div className="relative max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        Who We Are
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        About <span className="text-green-500">GridFlow Solar</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        GridFlow Solar is a Kenyan clean-energy company on a mission to bring reliable,
                        affordable, and community-owned solar power to institutions and communities that
                        need it most. We design, deploy, and manage solar microgrids that replace
                        unreliable grid connections and costly diesel generators — putting power and
                        ownership directly into the hands of the people we serve.
                    </motion.p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors duration-700" />
                        <span className="inline-block text-green-400 text-sm font-bold uppercase tracking-widest mb-4">
                            Our Mission
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Energy Access, Without Compromise
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To provide clean, uninterrupted solar energy to schools, healthcare
                            facilities, and rural communities across Kenya — eliminating downtime,
                            reducing costs, and driving climate-resilient development from the ground up.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-3xl p-10 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700" />
                        <span className="inline-block text-green-200 text-sm font-bold uppercase tracking-widest mb-4">
                            Our Vision
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            A Decentralised Energy Future
                        </h3>
                        <p className="text-green-100 leading-relaxed text-lg">
                            We envision a Kenya — and a continent — where every community has sovereign
                            control over its energy supply. Where blackouts are history, diesel fumes
                            are a memory, and clean power is a right, not a privilege.
                        </p>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900"
                    >
                        Our Core Values
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
