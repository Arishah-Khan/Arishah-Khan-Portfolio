// components/Footer.tsx

import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ResumeBtn from './bottons/resume-btn';

const Footer = () => {
    return (
        <footer className="py-10 bg-[#ebeae9] ">
            <div className=" px-3 grid grid-cols-1 md:grid-cols-3 pt- gap-4">
                <div className="flex justify-center items-center mb-4 gap-2">
                    <Link href="/" className="text-black transition-colors duration-300  rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg p-2 ">Home</Link>
                    <Link href="#about" className="text-black transition-colors duration-300 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg p-2 ">About</Link>
                    <Link href="#project" className="text-black transition-colors duration-300 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg p-2 ">Projects</Link>
                    <Link href="#contact" className="text-black transition-colors duration-300 p-2 rounded-md hover:bg-[#e0e0e0] hover:text-[#01004c] hover:shadow-lg ">Contact</Link>
                </div>

                {/* Centered Email Me Button */}
                <div>
                    <ResumeBtn
                        href="mailto:arishahsanaullah78@gmail.com"
                        text="Email Me"
                    />
                </div>
                {/* Third Div for GitHub and LinkedIn Icons */}
                <div className="flex justify-center w-1/2 mx-auto py-4 space-x-6">
                    <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#0077B5] transition-colors duration-300 group">
                        <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn" className="flex items-center justify-center">
                            <FaLinkedinIn size={20} />
                        </Link>
                        <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-[#0077B5] text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LinkedIn
                        </span>
                        <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0077B5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </div>

                    <div className="relative flex items-center justify-center w-8 h-8 bg-black text-white rounded-full hover:bg-[#181717] transition-colors duration-300 group">
                        <Link href="https://github.com/Arishah-Khan" aria-label="GitHub" className="flex items-center justify-center">
                            <FaGithub size={20} />
                        </Link>
                        <span className="absolute left-1/2 bottom-full mb-1 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            GitHub
                        </span>
                        <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 -translate-y-[1px] w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center py-5">© 2024 <span className="text-[#071fa8] font-semibold"> Arishah </span>  All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
