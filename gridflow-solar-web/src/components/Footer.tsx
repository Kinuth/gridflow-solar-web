import { useState, FormEvent } from "react";
import {
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaFacebookF,
    FaEnvelope,
    FaPhoneFlip,
    FaLocationDot,
} from "react-icons/fa6";

const CONTACT_EMAIL = "robinson.olaka@gridflowsolar.com";

const socialLinks = [
    {
        icon: <FaLinkedinIn className="w-4 h-4" />,
        href: "https://www.linkedin.com/company/gridflowsolar/",
        label: "LinkedIn",
        hoverColor: "hover:bg-[#0A66C2]",
    },
    {
        icon: <FaInstagram className="w-4 h-4" />,
        href: "https://www.instagram.com/gridflow_solar?igsh=d3hrZGVtMjl1ejA5",
        label: "Instagram",
        hoverColor: "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    },
    {
        icon: <FaWhatsapp className="w-4 h-4" />,
        href: "https://wa.me/254746610345",
        label: "WhatsApp",
        hoverColor: "hover:bg-[#25D366]",
    },
    // {
    //     icon: <FaXTwitter className="w-4 h-4" />,
    //     href: "https://x.com/gridflowsolar",
    //     label: "X (Twitter)",
    //     hoverColor: "hover:bg-white hover:text-gray-900",
    // },
    // {
    //     icon: <FaFacebookF className="w-4 h-4" />,
    //     href: "https://www.facebook.com/gridflowsolar",
    //     label: "Facebook",
    //     hoverColor: "hover:bg-[#1877F2]",
    // },
];

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "The Problem", href: "#problem" },
    { label: "Our Solution", href: "#solution" },
    { label: "Impact & PoC", href: "#impact" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Contact from GridFlow Website");
        const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setEmail("");
        setMessage("");
    };

    return (
        <footer id="contact" className="bg-gray-950 text-white">
            {/* Main Footer Content */}
            <div className="max-w-screen-xl mx-auto px-6 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & About */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center mb-5 group">
                            <img
                                src="/gridflow-logo.jpeg"
                                className="h-10 mr-3 rounded-lg shadow-md group-hover:shadow-green-500/30 transition-shadow duration-300"
                                alt="GridFlow Solar Logo"
                            />
                            <span className="text-xl font-bold tracking-tight">
                                GRIDFLOW <span className="text-green-400">SOLAR</span>
                            </span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering communities with reliable, affordable, and community-owned solar energy.
                            Bridging the gap between climate ambition and everyday reality across rural Kenya.
                        </p>

                        {/* Social Links */}
                        <div>
                            <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Follow Us</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${social.label}`}
                                        className={`w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent transition-all duration-300 ${social.hoverColor}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-green-400 mr-0 group-hover:mr-2 transition-all duration-200" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Get In Touch */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
                                >
                                    <FaEnvelope className="w-4 h-4 mt-0.5 text-green-500 group-hover:text-green-400 shrink-0" />
                                    <span className="text-sm break-all">{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+254700000000"
                                    className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors duration-200 group"
                                >
                                    <FaPhoneFlip className="w-4 h-4 mt-0.5 text-green-500 group-hover:text-green-400 shrink-0" />
                                    <span className="text-sm">+254 746 610 345</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <FaLocationDot className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                                <span className="text-sm">Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Form */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-5">Send Us a Message</h4>
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30 transition-all"
                                required
                            />
                            <textarea
                                placeholder="Your message..."
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30 transition-all resize-none"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98]"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} GridFlow Solar. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-gray-500 hover:text-green-400 text-xs transition-colors"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
