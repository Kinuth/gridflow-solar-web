import { motion } from "framer-motion";
import { HiOutlineLightningBolt, HiOutlineScale, HiOutlineCloud } from "react-icons/hi";

const ProblemSection = () => {
    const problems = [
        {
            icon: <HiOutlineLightningBolt className="w-12 h-12 text-yellow-500" />,
            title: "Unreliable Access",
            description: "Only 47% of Kenyans enjoy reliable electricity. In rural areas, this drops to roughly 35%, severely limiting business productivity and healthcare.",
        },
        {
            icon: <HiOutlineScale className="w-12 h-12 text-red-500" />,
            title: "Unequal Progress",
            description: "Progress is uneven. Around 36% of citizens are not connected to the national grid at all, creating a massive divide in opportunity.",
        },
        {
            icon: <HiOutlineCloud className="w-12 h-12 text-gray-500" />,
            title: "Polluting Alternatives",
            description: "The lack of reliable power forces reliance on expensive and polluting alternatives like diesel generators and kerosene.",
        },
    ];

    return (
        <section id="problem" className="py-20 bg-white">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Access without reliability and affordability is not energy justice.
                        For many, the national grid is either unavailable or too unstable to rely on.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="flex justify-center mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
