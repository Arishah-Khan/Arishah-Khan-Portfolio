import ProjectButton from "../project-btn";
import { Poppins } from "next/font/google"; 
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

interface CardProps {
    name: string; 
    images: string[]; 
    demoLink: string; 
    codeLink: string;
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    hoverTextColor: string;
    headingColour: string;
    cardbg: string;
}

const ProjectCard = ({
    name,
    images,
    demoLink,
    codeLink,
    bgColor,
    hoverBgColor,
    textColor,
    hoverTextColor,
    headingColour,
    cardbg,
}: CardProps) => {
    return (
        <div className={`${cardbg} border rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300`}>
            {/* Project Name */}
            <h3 className={`font-semibold text-sm sm:text-base mb-2 text-center ${headingColour} ${poppins.className}`}>
                {name}
            </h3>

            {/* Project Images */}
            <div className="flex flex-row items-center justify-center space-x-2 gap-2">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                        alt={name}
                        width={i === 0 ? 120 : 60}
                        height={i === 0 ? 210 : 50}
                        className={`${headingColour} border-2 rounded-lg ${i === 0 ? ' w-[120px] h-[90px]' : 'w-[50px] h-[180px]'}`}
                        style={{ objectFit: 'cover' }} // Maintain aspect ratio
                    />
                ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 space-x-4 flex justify-center items-center">
                <ProjectButton
                    label="Live Demo"
                    link={demoLink}
                    bgColor={bgColor}
                    hoverBgColor={hoverBgColor}
                    textColor={textColor}
                    hoverTextColor={hoverTextColor}
                />
                <ProjectButton
                    label="Code"
                    link={codeLink}
                    bgColor={bgColor}
                    hoverBgColor={hoverBgColor}
                    textColor={textColor}
                    hoverTextColor={hoverTextColor}
                />
            </div>
        </div>
    );
};

export default ProjectCard;
