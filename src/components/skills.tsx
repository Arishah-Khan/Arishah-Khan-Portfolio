import { Poppins } from "next/font/google";
import Image from "next/image";

// Initialize Poppins font for headings
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function Skills() {
    const skills = [
        { name: "HTML5", image: "/images/html5.png" },
        { name: "CSS3", image: "/images/css3.png" },
        { name: "JavaScript", image: "/images/javascript.png" },
        { name: "TypeScript", image: "/images/typescript.png" },
        { name: "ReactJS", image: "/images/react.png" },
        { name: "NextJS", image: "/images/next-js.svg" },
        { name: "Git", image: "/images/git.png" },
        { name: "GitHub", image: "/images/github.png" },
        { name: "Bootstrap", image: "/images/bootstrap.png" },
        { name: "Tailwind CSS", image: "/images/tailwind.png" },
        { name: "ShadCN", image: "/images/shadcn.png" },
        { name: "Figma", image: "/images/figma.png" },
    ];

    return (
        <div className="bg-[#fafafa] px-6 md:px-10 lg:px-14 py-12 rounded-lg shadow-lg">
           <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className} text-center pt-2 sm:pt-4`}>
            Skills
          </h2>
          <p className="text-gray-600 text-center mt-4 text-base sm:text-lg">
              Tools and technologies I use to create and optimize web applications.
          </p>

          {/* Updated grid layout */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-3 lg:grid-cols-6 sm:gap-y-6 sm:gap-x-8 text-center">
              {skills.map((skill, index) => (
                  <div 
                      key={index} 
                      className="bg-[#ebeae9] pt-3 pb-2 sm:py-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                  >
                      {/* Skill Image */}
                      <Image
                          src={skill.image}
                          alt={`${skill.name} Icon`}
                          width={50}
                          height={50}
                          className="mb-2 sm:mb-4 w-[35px] h-[35px] sm:w[50px] sm:h-[50px] lg:w-[55px] lg:h-[50px]"
                      />
                      {/* Skill Name */}
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">{skill.name}</p>
                  </div>
              ))}
          </div>
        </div>
    );
}
