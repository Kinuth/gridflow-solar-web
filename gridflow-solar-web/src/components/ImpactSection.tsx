import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { HiOutlineSun, HiOutlineUsers, HiOutlineCurrencyDollar, HiOutlineClock, HiX } from "react-icons/hi";

const pocPhotos = [
    {
        src: "/poc/panel-installation.jpg",
        alt: "Solar panel installation on rooftop",
        caption: "Professional installation of solar panels on a school rooftop",
    },
    {
        src: "/poc/solar-panels-roof.jpg",
        alt: "Solar panels mounted on school building",
        caption: "Completed 4.46 kW solar array at Gachororo Primary School",
    },
    {
        src: "/poc/inverter-unit.jpg",
        alt: "W. Giertsen Energy Solutions inverter",
        caption: "W. Giertsen hybrid inverter powering the school's energy system",
    },
    {
        src: "/poc/team-configuring.jpg",
        alt: "Team configuring the inverter system",
        caption: "Our engineers configuring and commissioning the inverter",
    },
    {
        src: "/poc/team-at-school.jpg",
        alt: "GridFlow team at Gachororo Comprehensive School",
        caption: "The GridFlow team at Gachororo Comprehensive School",
    },
];

const ImpactSection = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const stats = [
        {
            icon: <HiOutlineSun className="w-10 h-10 mb-2 text-yellow-500" />,
            value: 9.5,
            suffix: " MWh",
            label: "Clean Energy Generated",
        },
        {
            icon: <HiOutlineUsers className="w-10 h-10 mb-2 text-blue-500" />,
            value: 100,
            suffix: "%",
            label: "Reliability Improvement",
        },
        {
            icon: <HiOutlineClock className="w-10 h-10 mb-2 text-purple-500" />,
            value: 2.5,
            suffix: " Years",
            label: "Operational Zero-Downtime",
        },
        {
            icon: <HiOutlineCurrencyDollar className="w-10 h-10 mb-2 text-green-500" />,
            value: 40,
            suffix: "%",
            label: "Est. Energy Cost Savings",
        },
    ];

    return (
        <section id="impact" className="py-24 bg-gray-50">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        Proof of Concept
                    </motion.div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Gachororo Primary School
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Since August 2023, our pilot system (4.46 kW Solar + 5 kWh Storage) has demonstrated
                        technical reliability and measurable climate impact.
                    </p>
                </div>

                {/* Animated Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col items-center justify-center">
                            {stat.icon}
                            <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 my-2">
                                <CountUp
                                    end={stat.value}
                                    duration={2.5}
                                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                                    suffix={stat.suffix ? "" : ""}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                                <span className="text-2xl text-gray-500">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Photo Gallery */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-gray-900 text-center mb-10"
                    >
                        📸 On-Site Gallery
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pocPhotos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${
                                    index === 0 ? "sm:col-span-2 lg:col-span-2 row-span-1" : ""
                                }`}
                                onClick={() => setSelectedPhoto(index)}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-sm font-medium drop-shadow-lg">
                                        {photo.caption}
                                    </p>
                                </div>
                                {/* Subtle corner accent */}
                                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedPhoto !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring", damping: 25 }}
                                className="relative max-w-4xl max-h-[90vh] w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={pocPhotos[selectedPhoto].src}
                                    alt={pocPhotos[selectedPhoto].alt}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                                />
                                <p className="text-white text-center mt-4 text-lg font-medium">
                                    {pocPhotos[selectedPhoto].caption}
                                </p>
                                <button
                                    onClick={() => setSelectedPhoto(null)}
                                    className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    <HiX className="w-5 h-5" />
                                </button>
                                {/* Navigation arrows */}
                                {selectedPhoto > 0 && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedPhoto(selectedPhoto - 1); }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/40 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                )}
                                {selectedPhoto < pocPhotos.length - 1 && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedPhoto(selectedPhoto + 1); }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/40 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Additional Impact Narrative */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gray-900 text-white">
                        <h3 className="text-3xl font-bold mb-6">Why It Matters</h3>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Reliable renewable energy is not just about decarbonization — it directly shapes human outcomes.
                            By replacing unreliable grid power and eliminating diesel backups, we:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Improve education continuity and learning environments</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Protect healthcare delivery and cold storage</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Enable small business productivity</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 bg-gray-200 relative">
                        <img
                            src="/poc/panel-installation.jpg"
                            alt="Solar panel installation at Gachororo School"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ImpactSection;
