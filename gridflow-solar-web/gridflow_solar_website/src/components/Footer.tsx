import { useState, FormEvent } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Contact from GridFlow Website");
        const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:kinuthiaryan01@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <footer id="contact" className="bg-gray-900 border-t border-gray-800 text-white">
            <div className="max-w-screen-xl px-4 py-16 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
                <div className="max-w-sm">
                    <a href="#" className="flex items-center mb-6">
                        <img src="/gridflow-logo.jpeg" className="h-8 mr-3" alt="Logo" />
                        <span className="text-2xl font-bold text-white">GRIDFLOW SOLAR</span>
                    </a>
                    <p className="text-gray-400 mb-6">
                        Empowering communities with reliability, affordability, and ownership.
                        Bridging the gap between climate ambition and everyday reality.
                    </p>
                </div>

                <div className="flex flex-col md:w-1/3">
                    <h3 className="text-xl font-bold mb-6 text-green-400">Contact Us</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition-colors"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition-colors"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} GridFlow Solar. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
