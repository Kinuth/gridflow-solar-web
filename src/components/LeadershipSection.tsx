import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";

const leaders = [
    {
        name: "Robinson Olaka",
        role: "Founder & CEO",
        bio: "A visionary leader who leads the company’s mission to expand access to reliable and affordable clean energy across underserved communities. He drives the overall strategy, partnerships, and growth of the company, focusing on building scalable solutions that combine solar infrastructure with innovative financing and technology. His work sits at the intersection of clean energy, entrepreneurship, and community impact, with a strong emphasis on practical, implementable solutions. Robinson is also a Youth Ambassador at the Hamburg Sustainability Conference 2026, where he engages in global dialogue on sustainability, climate action, and inclusive development.",
        linkedin: "https://www.linkedin.com/in/robinsonolaka/",
        initials: "RO",
        photo: "/robinson-olaka.jpg",
    },
    {
        name: "Ryan Kinuthia",
        role: "Co-Founder & CTO",
        bio: "He Leads the technical vision and engineering strategy to redefine the management and distribution of renewable energy. He focuses on architecting scalable, data-driven solutions—ranging from IoT telemetry for solar inverters to robust microgrid management platforms—that bridge the gap between hardware infrastructure and digital intelligence. Drawing on an extensive background in backend engineering and software architecture, Ryan is dedicated to building high-performance systems that optimize energy efficiency and operational transparency. At Gridflow, he oversees the development of the company's proprietary software ecosystem, ensuring the technology stack remains at the forefront of the energy transition while delivering reliable, sustainable power solutions.",
        linkedin: "https://www.linkedin.com/in/ryan-kinuthia/",
        initials: "RK",
        photo: "/ryan-kinuthia.jpg",
    },
];

const LeadershipSection = () => {
    return (
        <section id="leadership" className="py-24 bg-gray-50">
            <div className="max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        The Team
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Meet Our <span className="text-green-500">Leadership</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        The people driving GridFlow Solar's mission to bring reliable, community-owned
                        energy solutions to underserved regions.
                    </motion.p>
                </div>

                {/* Leadership Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.role}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Decorative top accent */}
                            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-600" />

                            <div className="p-8 md:p-10">
                                {/* Photo */}
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <div className="w-full h-full rounded-full shadow-lg group-hover:shadow-green-500/30 transition-shadow duration-500 overflow-hidden">
                                        <img
                                            src={leader.photo}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Ring animation on hover */}
                                    <div className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                        {leader.role}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                        {leader.bio}
                                    </p>

                                    {/* LinkedIn */}
                                    <a
                                        href={leader.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                                        aria-label={`${leader.name} LinkedIn`}
                                    >
                                        <FaLinkedinIn className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
