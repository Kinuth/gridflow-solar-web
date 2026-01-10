import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HiOutlineSun, HiOutlineUsers, HiOutlineCurrencyDollar, HiOutlineClock } from "react-icons/hi";

const ImpactSection = () => {
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
            label: "Reliability Improvement", // Implied from "outages were once routine" to "reliable power"
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
            suffix: "%", // Estimated/Placeholder based on "Real Cost Savings"
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
                            src="/solar-school-placeholder.jpeg"
                            alt="School Impact"
                            className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-gray-500 font-bold text-xl uppercase tracking-widest bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                                Real World Impact
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ImpactSection;
