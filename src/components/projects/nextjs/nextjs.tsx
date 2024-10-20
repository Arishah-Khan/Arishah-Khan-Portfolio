import { Poppins } from "next/font/google";
import NextjsCard from "./nextjs-card";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const projects = [
    {
        name: "Ice Cream Website",
        images: ["/images/ice1.png", "/images/ice2.png", "/images/ice3.png"],
        demoLink: "https://nextjs-single-page-website.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/Nextjs-Single-Page-website",
        bgColor: "bg-[#d6206b]", // Button background color
        hoverBgColor: "hover:bg-[#f5d0e0] hover:border-2 hover:border-[#d6206b] ", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#d6206b] border-[#d6206b]",
        cardbg: "bg-[#fdc8df]",
    },
    {
        name: "Grocery Website",
        images: ["/images/grocery1.png", "/images/grocery2.png" , "/images/grocery3.png"],
        demoLink: "https://multipage-website-nextjs.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/multipage-website-nextjs",
        bgColor: "bg-[#1e5e3f]", // Button ka background color
        hoverBgColor: "hover:bg-[#dddad0]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black hover:border-2 hover:border-[#1e5e3f]",
        headingColour: "text-[#1e5e3f] border-[#1e5e3f]",
        cardbg: "bg-[#c5ead8]",
    },
];

export default function NextJsProjects() {
    return (
        <main className="bg-[#ebeae9] py-10">
            <section>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 mt-2 py-2 px-5 ${poppins.className}`}>
                    NextJs Projects
                </h3>
                <p className={`${poppins.className} pb-8 px-5 text-sm md:text-base`}>
                    Here are some of the projects I have created using NextJs and Tailwind CSS.
                </p>

                {/* Grid layout for Projects */}
                <div className="flex flex-col md:flex-row  justify-center items-center gap-6 px-5">
                    {projects.map((project, index) => (
                        <NextjsCard
                            key={index}
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
                    ))}
                </div>
            </section>
        </main>
    );
}
