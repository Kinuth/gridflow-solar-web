import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";

interface Member {
    name: string;
    role: string;
    bio: string;
    linkedin: string;
    initials: string;
    photo: string;
}

const founders: Member[] = [
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
        bio: "He Leads the technical vision and engineering strategy to redefine the management and distribution of renewable energy. He focuses on architecting scalable, data-driven solutions ranging from IoT telemetry for solar inverters to robust microgrid management platforms that bridge the gap beween hardware infrastructure and digital intelligence. Drawing on an extensive background in backend engineering and software architecture, Ryan is dedicated to building high-performance systems that optimize energy efficiency and operational transparency. At Gridflow, he oversees the development of the company's proprietary software ecosystem, ensuring the technology stack remains at the forefront of the energy transition while delivering reliable, sustainable power solutions.",
        linkedin: "https://www.linkedin.com/in/ryan-kinuthia/",
        initials: "RK",
        photo: "/ryan-kinuthia.jpeg",
    },
];

const teamMembers: Member[] = [
    {
        name: "Evaline Hanyipher Nyakerario",
        role: "Chief Financial Officer CFO",
        bio: "She leads the company’s financial strategy, investment readiness and growth initiatives, helping to build scalable and sustainable energy solutions that deliver both commercial value and measurable social impact. With a background in ACCA, Mechatronic Engineering and advanced studies in Sustainable Energy Transition, she combines technical expertise, financial insight and systems thinking to bridge the gap between clean energy innovation and investment. Passionate about inclusive development, she is committed to creating sustainable financing models that enable schools, healthcare facilities and local businesses to access reliable electricity with no upfront costs. Through her work, she helps drive economic opportunity, strengthen community resilience and accelerate Africa’s transition toward a cleaner, more sustainable energy future.",
        linkedin: "https://www.linkedin.com/in/hanyipher-nyakerario",
        initials: "EH",
        photo: "/evaline-hanyipher-nyakerario.png",
    },
      {
        name: "Amos Kariuki",
        role: "Chief Operations Officer COO",
        bio: "He directs daily operations, project execution, and strategic growth. He is pivotal in optimizing internal processes, building high-performing teams, and ensuring the efficient delivery of high-quality solar installations to advance clean energy solutions. Amos brings extensive expertise in supply chain management, regulatory compliance, and resource optimization within the renewable energy sector. Dedicated to accelerating the green energy transition, he aims to position Gridflow Solar as an industry leader. He holds a Bachelor’s degree in Renewable Energy and Environmental Physics from Jomo Kenyatta University of Agriculture and Technology.",
        linkedin: "https://www.linkedin.com/in/amos-mwangangi/",
        initials: "AM",
        photo: "/amos-kariuki.png",
    },
     {
        name: "George Kings",
        role: "Chief Marketing Officer CMO",
        bio: "He is passionate about driving awareness, adoption, and impact of sustainable energy solutions across communities. George brings a dynamic mix of creative energy, strategic thinking, and hands-on execution to his role. He is skilled in developing targeted marketing campaigns, building strong brand narratives, and fostering meaningful partnerships that expand the reach and influence of GridFlow Solar. With a deep understanding of market dynamics and a passion for innovation, George is dedicated to advancing the clean energy transition and creating lasting value for customers and stakeholders.",
        linkedin: "https://www.linkedin.com/in/george-king/",
        initials: "GK",
        photo: "/George-kings.jpeg",
    },
    {
        name: "Ambrose Michura",
        role: "Technical Manager",
        bio: "He is a renewable energy professional and Technical Manager specializing in the design, installation, commissioning, maintenance, and optimization of solar PV and energy storage systems. He oversees technical projects for residential, commercial, and institutional clients, ensuring high standards of safety, quality, and long-term sustainability. Combining extensive hands-on experience in troubleshooting and project coordination with strong leadership and problem-solving skills, Ambrose is dedicated to delivering efficient clean energy solutions that drive value and support the transition to an energy-secure future.",
        linkedin: "https://www.linkedin.com/in/ambrose-albert-5839b4214",
        initials: "AM",
        photo: "/ambrose-michura.jpeg",
    },
    {
        name: "Keith Ateka",
        role: "Customer Acquisition & Partnerships Lead",
        bio: "Keith leads customer acquisition and partnerships at GridFlow Solar, driving growth by connecting communities with affordable, reliable clean energy. He manages strategic partnerships and marketing initiatives that expand the company's reach, enhance brand visibility, and support the transition to sustainable energy solutions across diverse communities.",
        linkedin: "https://www.linkedin.com/in/keith-ateka/",
        initials: "KA",
        photo: "/keith-ateka.jpeg",
    },
    {
        name: "Mariko Ogutu",
        role: "Operations Lead",
        bio: "He oversees the day-to-day ground operations, project logistics, and feasibility research for GridFlow Solar. Holding a degree in Renewable Energy and Environmental Physics from JKUAT, Mariko combines technical expertise in solar specifications with meticulous asset management to ensure projects transition seamlessly from research to high-yield execution. This hands-on leadership is demonstrated through spearheading critical field initiatives, directing comprehensive ground operations, and conducting infrastructure readiness assessments for prospective commercial and institutional clients. Furthermore, Mariko actively drives regional corporate growth by representing GridFlow Solar Ltd. at major industry forums to secure strategic business collaborations, optimize energy efficiency, and expand the company’s clean energy footprint.",
        linkedin: "https://www.linkedin.com/in/mariko-ogutu/",
        initials: "MO",
        photo: "/mariko-ogutu.jpeg",
    },
];

const LeadershipSection = () => {
    const [activeMember, setActiveMember] = useState<Member | null>(null);

    // Escape key press handles modal close + body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveMember(null);
            }
        };
        if (activeMember) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeMember]);

    const renderMemberCard = (member: Member, index: number) => (
        <motion.div
            key={member.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setActiveMember(member)}
            className="cursor-pointer relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/80 group flex flex-col items-center text-center"
        >
            <div className="relative w-24 h-24 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-green-500/20">
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {member.name}
            </h4>
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-3">
                {member.role}
            </p>
            
            <span className="text-xs text-gray-400 font-medium group-hover:text-green-500 transition-colors duration-300 mt-auto flex items-center gap-1">
                Read Bio 
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
        </motion.div>
    );

    return (
        <section id="leadership" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        Our Leadership
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
                        The visionaries and specialists driving GridFlow Solar's mission to bring reliable,
                        community-owned energy solutions to underserved regions.
                    </motion.p>
                </div>

                {/* Founders Section */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
                            Founders
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {founders.map((founder, index) => renderMemberCard(founder, index))}
                    </div>
                </div>

                {/* Team Section */}
                <div>
                    <div className="text-center mb-10">
                        <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Management Team
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => renderMemberCard(member, index))}
                    </div>
                </div>
            </div>

            {/* Biography Detail Modal */}
            <AnimatePresence>
                {activeMember && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveMember(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Dialog */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
                        >
                            {/* Decorative top accent */}
                            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-600 w-full flex-shrink-0" />
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveMember(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 z-20"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Scrollable Container */}
                            <div className="p-6 md:p-10 overflow-y-auto">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                        <img
                                            src={activeMember.photo}
                                            alt={activeMember.name}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    {/* Text Information */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                            {activeMember.name}
                                        </h3>
                                        <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                            {activeMember.role}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                                            {activeMember.bio}
                                        </p>

                                        {/* LinkedIn Icon */}
                                        <a
                                            href={activeMember.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                                            aria-label={`${activeMember.name} LinkedIn`}
                                        >
                                            <FaLinkedinIn className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LeadershipSection;
