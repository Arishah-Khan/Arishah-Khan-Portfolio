import Image from "next/image";
import { Roboto, Poppins } from "next/font/google"; // Import Roboto font
import ResumeBtn from "./bottons/resume-btn";

// Initialize Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Initialize Poppins font for headings
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HeroSec() {
  return (
    <main className={`grid grid-rows-1 md:grid-cols-2 items-center bg-[#fafafa] ${roboto.className} py-8`}> {/* Use Roboto font */}
      {/* Text Section */}
      <div className="text-center space-y-3 md:space-y-4 order-2 md:order-1">
        <h3 className={`text-gray-700 font-semibold text-xl sm:text-2xl ${poppins.className} py-2`}>
          Hello, I&apos;m
        </h3>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${poppins.className}`}>
          Arishah
        </h1>
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#071fa8] font-bold ${poppins.className}`}>
          Frontend Web Developer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center">
          I create beautiful and user-friendly interfaces <br /> with ReactJS and NextJS.
        </p>
        <ResumeBtn />
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center items-center order-1 md:order-2">
        {/* Gradient Image (Background) */}
        <div className="relative mt-8 flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] mb-4">
            <Image
              src="/images/Gradient.svg"
              alt="Gradient Background"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Profile Image (Foreground) */}
          <div className="relative z-10 translate-y-[-10px]">
            <Image
              src="/images/profile.png"
              alt="Profile Pic"
              width={340}
              height={320}
              className="rounded-full object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[380px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
