import ProjectButton from "../project-btn";
import { Poppins } from "next/font/google"; // Import Poppins font
import Image from "next/image";

// Initialize Poppins font for headings
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

interface CardProps {
    name: string; // Project name
    image: string; // Image URL
    npmLink: string; // npm link
    codeLink: string; // GitHub link
}

// ProjectCard Component
const TypescriptCard: React.FC<CardProps> = ({
    name,
    image,
    npmLink,
    codeLink,
}) => {
    return (
        <div className={`bg-[#ECCEAE]  rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300`}>
            {/* Project Name */}
            <h3 className={`font-semibold text-sm sm:text-base mb-2 text-center text-[#6B4F4F] ${poppins.className}`}>
                {name}
            </h3>

            {/* Project Image */}
            <div className="flex justify-center mb-4">
                <Image
                    src={image}
                    alt={name}
                    width={220} // Adjust width as needed
                    height={180} // Adjust height as needed
                    className="rounded-lg border-4 border-[#EEEDEB]"
                    style={{ objectFit: 'cover' }} // Maintain aspect ratio
                />
            </div>

            {/* Buttons for npm and GitHub */}
            <div className="mt-4 space-x-4 flex justify-center items-center">
                <ProjectButton
                    label="NPM"
                    link={npmLink}
                    bgColor="bg-[#6B4F4F]"
                    hoverBgColor="hover:bg-[#ddaf80]"
                    textColor="text-white"
                    hoverTextColor="hover:text-black hover:border-black hover:border-2"
                />
                <ProjectButton
                    label="GitHub"
                    link={codeLink}
                    bgColor="bg-[#6B4F4F]"
                    hoverBgColor="hover:bg-[#ddaf80]"
                    textColor="text-white"
                    hoverTextColor="hover:text-black hover:border-black hover:border-2"
                />
            </div>
        </div>
    );
};

export default TypescriptCard;
