"use client"; // Ensure that this component is treated as a client component
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import Link from "next/link"; // If you need to use Link for other navigation
import { Rubik } from "next/font/google";


const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function ResumeBtn() { 
    const router = useRouter(); // Initialize the router 

    const handleNavigation = () => { 
        router.push('/resume.pdf'); // Navigate to the PDF file 
    }; 

    return ( 
        <div className={`flex justify-center items-center ${rubik.className}`}>
        <button
          onClick={handleNavigation}
          className="resume_btn relative bg-[#071fa8] text-white py-3 px-6 rounded-lg border-3 hover:bg-white hover:text-black hover:border-[#071fa8] border-2 shadow-none transition-all duration-300 ease-in-out cursor-pointer group overflow-visible"
        >
          My Resume
      
          {/* Left Star 1 */}
          <div className="star-1 absolute top-[-15px] left-[-30px] w-[12px] h-[12px] opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="fill-[#071fa8]">
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
          </div>
      
          {/* Left Star 2 */}
          <div className="star-2 absolute top-[50%] left-[-10px] w-[8px] h-[8px] opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="fill-[#071fa8]">
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
          </div>
      
          {/* Center Star */}
          <div className="center-star absolute top-[30%] left-[50%] w-[7px] h-[7px] opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="fill-[#071fa8]">
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
          </div>
      
          {/* Right Star 1 */}
          <div className="star-3 absolute top-[50%] right-0 w-[8px] h-[8px] opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="fill-[#071fa8]">
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
          </div>
      
          {/* Right Star 2 */}
          <div className="star-4 absolute top-[50px] right-[-10px] w-[12px] h-[12px] opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 transition-all duration-500 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className="fill-[#071fa8]">
              <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
          </div>
      
          <style jsx>{`
            .resume_btn:hover {
              background: #e9edf2;
              color: #264a73;
              border: 2px solid #000000;
              box-shadow: 0 0 30px rgba(200, 200, 200, 0.7), 0 0 60px rgba(150, 150, 150, 0.5);
            }
      
            .star-1,
            .star-2,
            .star-3,
            .star-4,
            .center-star {
              transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            }
      
            /* Left stars move outward */
            .group:hover .star-1 {
              transform: translate(-30px, -10px) rotate(20deg);
              filter: drop-shadow(0 0 10px rgba(225, 187, 35, 0.8));
            }
      
            .group:hover .star-2 {
              transform: translate(-20px, -10px) rotate(-20deg);
              filter: drop-shadow(0 0 10px rgba(225, 187, 35, 0.8));
            }
      
            /* Right stars move outward */
            .group:hover .star-3 {
              transform: translate(20px, -10px) rotate(25deg);
              filter: drop-shadow(0 0 10px rgba(225, 187, 35, 0.8));
            }
      
            .group:hover .star-4 {
              transform: translate(30px, -10px) rotate(-25deg);
              filter: drop-shadow(0 0 10px rgba(225, 187, 35, 0.8));
            }
      
            /* Center star moves and scales up */
            .group:hover .center-star {
              transform: translateY(-10px) scale(1.5);
              filter: drop-shadow(0 0 10px rgba(225, 187, 35, 0.8));
            }
          `}</style>
        </button>
      </div>
      

    ); 
}
