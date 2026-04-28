import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlinePhotograph } from "react-icons/hi";

const resolveImageSrc = (src: string) => src.replace(/ /g, "%20");

const events = [
    {
        title: "Intersolar Africa 2026",
        date: "March 2026",
        location: "Nairobi, Kenya",
        description:
            "GridFlow Solar will exhibit at Africa's premier solar energy expo, showcasing our community microgrid technology and connecting with continental distributors, investors, and policymakers shaping Africa's renewable energy future.",
        tag: "Expo",
        tagColor: "bg-amber-100 text-amber-700",
        images: [
            { src: "/events/intersolar.jpeg", alt: "Intersolar Africa booth" },
            { src: "/events/intersolar2.jpeg", alt: "Intersolar Africa networking" },
            { src: "/events/intersolar3.jpeg", alt: "Intersolar Africa presentation" },
        ],
    },
    {
        title: "COMESA Investment Forum",
        date: "June 2026",
        location: "Lusaka, Zambia",
        description:
            "Presenting GridFlow's scalable community-owned energy model to COMESA member states, engaging trade ministers and development finance institutions on cross-border clean energy investment opportunities across Eastern and Southern Africa.",
        tag: "Forum",
        tagColor: "bg-blue-100 text-blue-700",
        images: [
            { src: "/events/comesa.jpeg", alt: "COMESA forum booth" },
            { src: "/events/comesa2.jpeg", alt: "COMESA investment forum" },
            { src: "/events/comesa3.jpeg", alt: "COMESA forum presentation" },
        ],
    },
    {
        title: "Africa Urban Forum",
        date: "September 2026",
        location: "Nairobi, Kenya",
        description:
            "GridFlow Solar will participate in panel discussions on sustainable urbanisation, presenting our decentralised energy solutions as a model for powering Africa's rapidly growing cities and peri-urban communities.",
        tag: "Conference",
        tagColor: "bg-green-100 text-green-700",
        images: [
            { src: "/events/africa urban forum.jpeg", alt: "Africa Urban Forum panel discussion" },
            { src: "/events/africa urban forum 4.jpeg", alt: "Africa Urban Forum networking" },
            { src: "/events/africa urban forum3.jpeg", alt: "Africa Urban Forum session" },
        ],
    },
];

const EventsSection = () => {
    return (
        <section id="events" className="py-24 bg-white overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                 style={{
                     backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                     backgroundSize: "32px 32px",
                 }}
            />

            <div className="relative max-w-screen-xl px-4 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full mb-4"
                    >
                        Where We Show Up
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Events & <span className="text-green-500">Conferences</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We actively engage with the global clean-energy community — sharing our
                        learnings, forging partnerships, and advancing the decentralised energy
                        movement.
                    </motion.p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                        >
                            {/* Image Gallery */}
                            <div className="grid grid-cols-3 gap-1.5 p-2">
                                {event.images.map((img, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className={`relative bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden ${
                                            imgIndex === 0 ? "rounded-tl-xl" : ""
                                        } ${imgIndex === 2 ? "rounded-tr-xl" : ""}`}
                                        style={{ aspectRatio: "4 / 3" }}
                                    >
                                        {img.src ? (
                                            <img
                                                src={resolveImageSrc(img.src)}
                                                alt={img.alt}
                                                className="absolute inset-0 h-full w-full object-cover object-center"
                                                loading="lazy"
                                                onError={(e) => {
                                                    const el = e.currentTarget;
                                                    if (el.dataset.fallbackApplied === "true") return;
                                                    el.dataset.fallbackApplied = "true";
                                                    el.style.display = "none";
                                                    const parent = el.parentElement;
                                                    if (parent) {
                                                        const fallback = document.createElement("div");
                                                        fallback.className = "flex flex-col items-center justify-center w-full h-full";
                                                        fallback.innerHTML = `<svg class="w-8 h-8 text-gray-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><span class="text-[10px] text-gray-400 text-center px-1 leading-tight">${img.alt}</span>`;
                                                        parent.appendChild(fallback);
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center">
                                                <HiOutlinePhotograph className="w-8 h-8 text-gray-400 mb-1" />
                                                <span className="text-[10px] text-gray-400 text-center px-1 leading-tight">
                                                    {img.alt}
                                                </span>
                                            </div>
                                        )}
                                        {/* Shimmer overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                                    </div>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                {/* Tag */}
                                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start ${event.tagColor}`}>
                                    {event.tag}
                                </span>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                    {event.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1.5">
                                        <HiOutlineCalendar className="w-4 h-4 text-green-500" />
                                        {event.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <HiOutlineLocationMarker className="w-4 h-4 text-green-500" />
                                        {event.location}
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
