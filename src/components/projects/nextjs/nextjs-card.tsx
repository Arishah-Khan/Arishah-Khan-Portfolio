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
    images: string[]; // Array of image URLs
    demoLink: string; // Live demo link
    codeLink: string; // Code link
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    hoverTextColor: string;
    headingColour: string;
    cardbg: string;
}

const NextjsCard = ({
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
        <div className={`${cardbg} border rounded-lg py-4 hover:shadow-2xl transition-shadow duration-300 max-w-sm h-[320px] flex flex-col justify-between px-6`}>
            {/* Project Name */}
            <h3 className={`font-semibold text-sm sm:text-base mb-2 text-center ${headingColour} ${poppins.className}`}>
                {name}
            </h3>

            {/* Project Images */}
            <div className="flex flex-row items-center justify-center gap-3">
                {/* Top Row of Images */}
                <div className="flex flex-col gap-4 items-center justify-center space-x-2">
                    {images.slice(0, 2).map((image, i) => (
                        <Image
                            key={i}
                            src={image}
                            alt={name}
                            width={120} // Same size for both images
                            height={100}
                            className={`${headingColour} border-2 rounded-lg`}
                            style={{ objectFit: 'cover' }} // Maintain aspect ratio
                        />
                    ))}
                </div>

                {/* Bottom Image */}
                <Image
                    src={images[2]} // Third image
                    alt={name}
                    width={80} // Different size for the third image
                    height={120}
                    className={`${headingColour} border-2 rounded-lg mt-2`} // Add some margin to separate it
                    style={{ objectFit: 'cover' }} // Maintain aspect ratio
                />
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

export default NextjsCard;
