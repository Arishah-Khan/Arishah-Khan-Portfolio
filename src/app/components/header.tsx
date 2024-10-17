"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Rubik } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsProjectorFill } from "react-icons/bs";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';



const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`flex justify-between items-center bg-[#ebeae9] pr-3 py-2 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${rubik.className}`}>
            <div>
                <Image src="/images/logo1.png" alt="logo" width="80" height="80" />
            </div>
            <nav className="hidden md:block"> {/* Hide on mobile */}
                <ul className="flex space-x-6">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                                href={`/${item.toLowerCase()}`} // Corrected template literal
                                className="relative text-black transition-colors duration-300 px-4 py-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg"
                            >
                                {item}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#01004c] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="relative">
                {/* Hamburger Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[#071fa8]">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle between icons */}
                    </button>
                </div>

                {/* Mobile Menu */}
                <nav className={`fixed top-16 left-0 w-[45%] min-h-screen sm:w-[40%] bg-[#ebeae9] md:hidden py-8 mt-3 transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <ul className="flex flex-col space-y-4 py-4">
                        {[
                            { name: "Home", icon: <FaHome /> },
                            { name: "About", icon: <FaInfoCircle /> },
                            { name: "Projects", icon: <BsProjectorFill /> },
                            { name: "Contact", icon: <FaEnvelope /> }
                        ].map((item) => (
                            <li key={item.name} className="flex items-center justify-start space-x-1 px-4">
                                <span className="text-lg">{item.icon}</span>
                                <Link
                                    href={`/${item.name.toLowerCase()}`}
                                    className="relative text-black transition-colors duration-300 px-4 py-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Icons in Mobile Menu */}
                    <div className="flex justify-center w-1/2 mx-auto py-4 space-x-4">
                        <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#0077B5] transition-colors duration-300 group">
                            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="flex items-center justify-center">
                                <FaLinkedinIn size={20} />
                            </Link>
                            <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-[#0077B5] text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                LinkedIn
                            </span>
                            <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0077B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </div>

                        <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                            <Link href="https://www.github.com" aria-label="GitHub" className="flex items-center justify-center">
                                <FaGithub size={20} />
                            </Link>
                            <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                GitHub
                            </span>
                            <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </div>
                    </div>
                </nav>

                {/* Content Section - Will still be visible when menu is open */}
                <div className="content-section">
                    {/* Your main page content goes here */}
                </div>
            </div>







            {/* Social Media Icons for Desktop */}
            <div className="hidden md:flex space-x-4">
                <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#0077B5] transition-colors duration-300 group">
                    <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="flex items-center justify-center">
                        <FaLinkedinIn size={20} />
                    </Link>
                    <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-[#0077B5] text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        LinkedIn
                    </span>
                    <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0077B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>

                <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                    <Link href="https://www.github.com" aria-label="GitHub" className="flex items-center justify-center">
                        <FaGithub size={20} />
                    </Link>
                    <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        GitHub
                    </span>
                    <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
            </div>
        </header>
    );
}
