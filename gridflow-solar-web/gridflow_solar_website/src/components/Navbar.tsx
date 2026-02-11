import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "The Problem", to: "problem" },
        { name: "Solution", to: "solution" },
        { name: "Impact", to: "impact" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
                }`}
        >
            <nav className="max-w-screen-xl px-4 mx-auto flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <img src="/gridflow-logo.jpeg" className="h-8 mr-3 sm:h-10" alt="GridFlow Logo" />
                    <span className={`text-2xl font-bold ${isScrolled ? "text-green-600" : "text-white"}`}>
                        GRIDFLOW SOLAR
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer font-medium hover:text-green-400 transition-colors ${isScrolled ? "text-gray-700" : "text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-green-500 text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="text-gray-800 font-medium hover:text-green-600 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
