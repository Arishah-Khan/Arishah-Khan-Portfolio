import { Roboto, Poppins } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function About() {
    return (
      <section id="about" className="scroll-mt-24 bg-[#ebeae9] px-3 sm:px-6 md:px-10 lg:px-14 py-10 shadow-lg flex flex-col items-center justify-center">
        <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className} text-center pt-2 sm:pt-4`}>
          About Me
        </h2>
        <p className={`text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg ${roboto.className}  mt-4 w-full md:w-3/4 lg:w-2/3 leading-relaxed text-center`}>
          I am a Frontend Web Developer passionate about creating beautiful and user-friendly interfaces using ReactJS and NextJS. Currently, I am focused on becoming a full-stack developer, allowing me to work on both the front end and back end of applications. I enjoy transforming ideas into reality by developing new features and optimizing existing ones, always writing clean and maintainable code. Outside of coding, I explore new technologies and stay updated on the latest trends in web development, believing in continuous learning and seeking opportunities to enhance my skills.
        </p>
      </section>
    );
  }
  