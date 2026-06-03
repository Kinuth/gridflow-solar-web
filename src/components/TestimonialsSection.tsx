import { motion } from "framer-motion";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-500/10 text-green-400 font-semibold px-4 py-1 rounded-full mb-4 border border-green-500/20"
                    >
                        What They Say
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Hear directly from the communities we serve about the impact
                        GridFlow Solar has made.
                    </motion.p>
                </div>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-3xl p-10 md:p-14 backdrop-blur-sm">
                        {/* Large quote mark */}
                        <div className="absolute -top-5 left-10 text-green-500/20 text-[8rem] font-serif leading-none select-none pointer-events-none">
                            "
                        </div>

                        {/* Quote */}
                        <blockquote className="relative z-10">
                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-8 italic">
                                "Since GridFlow Solar installed the solar system at our school, we have
                                not experienced a single power interruption. The classrooms are always
                                well-lit, our computers remain operational throughout the day, and we
                                have eliminated the costs and fumes of diesel generators. This project
                                has transformed the learning environment for our pupils and given us
                                true energy independence. We are proud to be part of this initiative."
                            </p>

                            {/* Author */}
                            <footer className="flex items-center gap-5">
                                {/* Avatar */}
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20 shrink-0">
                                    <span className="text-lg font-bold text-white">HT</span>
                                </div>
                                <div>
                                    <cite className="text-white font-bold text-lg not-italic block">
                                        Headteacher
                                    </cite>
                                    <span className="text-green-400 text-sm font-medium">
                                        Gachororo Primary School
                                    </span>
                                </div>
                            </footer>
                        </blockquote>

                        {/* Decorative corner accents */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-500/20 rounded-tr-2xl" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-green-500/20 rounded-bl-2xl" />
                    </div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center justify-center gap-8 mt-14"
                >
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">2.5+</p>
                        <p className="text-sm text-gray-500">Years Operating</p>
                    </div>
                    <div className="w-px h-10 bg-gray-700" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">100%</p>
                        <p className="text-sm text-gray-500">Uptime Delivered</p>
                    </div>
                    <div className="w-px h-10 bg-gray-700" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">Zero</p>
                        <p className="text-sm text-gray-500">Blackouts</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
