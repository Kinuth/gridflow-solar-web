import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center text-white">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/hero-bg.png"
                    className="w-full h-full object-cover animate-ken-burns"
                    alt="Solar Panels Background"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Reliability. Affordability. <span className="text-green-400">Ownership.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl font-light text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                    In Kenya, communities may be 'connected', but power outages and lack of control limit potential.
                    GridFlow Solar builds community-owned microgrids to bridge the gap.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        to="solution"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-green-500/50"
                    >
                        Our Solution
                    </Link>
                    <Link
                        to="problem"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                    >
                        The Problem
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
