import { Poppins } from "next/font/google"
import ProjectCard from "./HtmlCssProjectsCard";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});



const projects = [
    {
        name: "Covid Awareness Website",
        images: ["/images/covidhalf.jpg", "/images/covidFull.png"],
        demoLink: "https://arishah-khan.github.io/HTML-CSS-BOOTSTRAP-Hackhathon/",
        codeLink: "https://github.com/Arishah-Khan/HTML-CSS-BOOTSTRAP-Hackhathon",
        bgColor: "bg-[#6b43bd]", 
        hoverBgColor: "hover:bg-[#60a0d1]", 
        textColor: "text-white", 
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#6b43bd] border-[#6b43bd]",
        cardbg: "bg-[#e2d9f3]",
    },
    {
        name: "Realstate Website",
        images: ["/images/realHalf.png", "/images/realFull.png"],
        demoLink: "https://arishah-khan.github.io/Bootstrap-figma-file/",
        codeLink: "https://github.com/Arishah-Khan/Bootstrap-figma-file",
        bgColor: "bg-[#447687]", 
        hoverBgColor: "hover:bg-[#dddad0]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#447687] border-[#447687]",
        cardbg: "bg-[#cadbe1]"

    },
    {
        name: "Ride Website",
        images: ["/images/ridehalf.png", "/images/ridefull.png"],
        demoLink: "https://arishah-khan.github.io/Assignment-4-bootsrap/",
        codeLink: "https://github.com/Arishah-Khan/Assignment-4-bootsrap",
        bgColor: "bg-[#297c2e]", 
        hoverBgColor: "hover:bg-[#c6c0c0]", 
        textColor: "text-white", 
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#297c2e] border-[#297c2e]",
        cardbg: "bg-[#b6dab7]"


    },
    {
        name: "Bakery Website",
        images: ["/images/bakeryhalf.png", "/images/bakeryfull.png"],
        demoLink: "https://arishah-khan.github.io/Bootstrap-Assignment-1/",
        codeLink: "https://github.com/Arishah-Khan/Bootstrap-Assignment-1",
        bgColor: "bg-[#bc1e38]", 
        hoverBgColor: "hover:bg-[#f4cad1]", 
        textColor: "text-white",
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#bc1e38] border-[#bc1e38]",
        cardbg: "bg-[#f2a9b5]"

    },
    {
        name: "Bookmark Website",
        images: ["/images/bookmarkhalf.png", "/images/bookmarkfull.png"],
        demoLink: "https://arishah-khan.github.io/CSS-4th-Assignment/",
        codeLink: "https://github.com/Arishah-Khan/CSS-4th-Assignment",
        bgColor: "bg-[#5267df]", 
        hoverBgColor: "hover:bg-[#d6dbf7]",
        textColor: "text-white", 
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#2c3b8e] border-[#2c3b8e]",
        cardbg: "bg-[#b5bef1]"

    },
    {
        name: "Caronavirus Website",
        images: ["/images/coronavirushalf.png", "/images/caronavirusfull.png"],
        demoLink: "https://arishah-khan.github.io/Final-Hackhaton/",
        codeLink: "https://github.com/Arishah-Khan/Final-Hackhaton",
        bgColor: "bg-[#b65ac4]", 
        hoverBgColor: "hover:bg-[#c08ce2]",
        textColor: "hover:text-black", 
        hoverTextColor: "text-white",
        headingColour: "text-[#782b84] border-[#b65ac4]",
        cardbg: "bg-[#e0f1c1]"

    },
];



export default function HtmlCssProjects() {
    return (
        <main className="bg-[#ebeae9] py-10 ">
            <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className} text-center pt-2 sm:pt-4`}>
                Projects
            </h2>

            <section>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 mt-2 py-2 px-5 ${poppins.className}`}>HTML, CSS, and Bootstrap Projects</h3>
                <p className={`${poppins.className} pb-8 px-5 text-sm md:text-base`}>Here are some of the projects I have created using HTML, CSS, and Bootstrap.</p>

                <Carousel>
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-gray-200 rounded-full p-2">Previous</button>
                    </CarouselPrevious>

                    <CarouselContent>
                        {projects.map((project, index) => (
                            <CarouselItem key={index}>
                                <ProjectCard
                                    name={project.name}
                                    images={project.images}
                                    demoLink={project.demoLink}
                                    codeLink={project.codeLink}
                                    bgColor={project.bgColor}
                                    hoverBgColor={project.hoverBgColor}
                                    textColor={project.textColor}
                                    hoverTextColor={project.hoverTextColor}
                                    headingColour={project.headingColour}
                                    cardbg={project.cardbg}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-gray-200 rounded-full p-2">Next</button>
                    </CarouselNext>
                </Carousel>
            </section>
        </main>
    )
}