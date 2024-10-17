import { Poppins } from "next/font/google"
import ProjectCard from "./projectsCard";
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
        demoLink: "https://example.com/covid-demo",
        codeLink: "https://github.com/user/covid-code",
        bgColor: "bg-[#6b43bd]", // Button background color
        hoverBgColor: "hover:bg-[#60a0d1]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#6b43bd] border-[#6b43bd]",
        cardbg: "bg-[#e2d9f3]",
    },
    {
        name: "Realstate Website",
        images: ["/images/realHalf.png", "/images/realFull.png"],
        demoLink: "https://arishah-khan.github.io/Bootstrap-figma-file/",
        codeLink: "https://github.com/Arishah-Khan/Bootstrap-figma-file",
        bgColor: "bg-[#447687]", // Button ka background color
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
        bgColor: "bg-[#297c2e]", // Button ka background color
        hoverBgColor: "hover:bg-[#c6c0c0]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#297c2e] border-[#297c2e]",
        cardbg: "bg-[#b6dab7]"


    },
    {
        name: "Bakery Website",
        images: ["/images/bakeryhalf.png", "/images/bakeryfull.png"],
        demoLink: "https://arishah-khan.github.io/Bootstrap-Assignment-1/",
        codeLink: "https://github.com/Arishah-Khan/Bootstrap-Assignment-1",
        bgColor: "bg-[#bc1e38]", // Button ka background color
        hoverBgColor: "hover:bg-[#f4cad1]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#bc1e38] border-[#bc1e38]",
        cardbg: "bg-[#f2a9b5]"

    },
    {
        name: "Bookmark Website",
        images: ["/images/bookmarkhalf.png", "/images/bookmarkfull.png"],
        demoLink: "https://arishah-khan.github.io/CSS-4th-Assignment/",
        codeLink: "https://github.com/Arishah-Khan/CSS-4th-Assignment",
        bgColor: "bg-[#5267df]", // Button ka background color
        hoverBgColor: "hover:bg-[#d6dbf7]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#2c3b8e] border-[#2c3b8e]",
        cardbg: "bg-[#b5bef1]"

    },
    {
        name: "Caronavirus Website",
        images: ["/images/coronavirushalf.png", "/images/caronavirusfull.png"],
        demoLink: "https://arishah-khan.github.io/Final-Hackhaton/",
        codeLink: "https://github.com/Arishah-Khan/Final-Hackhaton",
        bgColor: "bg-[#b65ac4]", // Button ka background color
        hoverBgColor: "hover:bg-[#c08ce2]", // Button hover color
        textColor: "hover:text-black", // Button text color
        hoverTextColor: "text-white",
        headingColour: "text-[#782b84] border-[#b65ac4]",
        cardbg: "bg-[#e0f1c1]"

    },
];



export default function Projects() {
    return (
        <main className="bg-[#ebeae9] py-10 ">
            <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className} text-center pt-2 sm:pt-4`}>
                Projects
            </h2>

            <section>
                <h3 className="text-2xl font-bold mb-4">HTML, CSS, and Bootstrap Projects</h3>
                <p className="mb-6">Here are some of the projects I have created using HTML, CSS, and Bootstrap.</p>

                {/* Cards for Projects */}
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