import { Poppins } from "next/font/google"
import JavascriptCard from "./javascript-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Initialize Poppins font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const jsProjects = [
    {
        name: "Calculator",
        images: ["/images/jsCal1.png", "/images/jsCal2.png"],
        demoLink: "https://arishah-khan.github.io/Calculator-javascript/",
        codeLink: "https://github.com/Arishah-Khan/Calculator-javascript",
        bgColor: "bg-[#B80000]", // Button background color
        hoverBgColor: "hover:bg-[#F09090] hover:border-[#B80000] hover:border-2 ", //F07878 Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-[#8C0000]",
        headingColour: "text-[#B80000] border-[#B80000]",
        cardbg: "bg-[#ffadad]",
    },
    {
        name: "My Post",
        images: ["/images/post1.png", "/images/post2.png"],
        demoLink: "https://arishah-khan.github.io/My-Post/",
        codeLink: "https://github.com/Arishah-Khan/My-Post",
        bgColor: "bg-[#b57e19]", // Button background color
        hoverBgColor: "hover:bg-[#f7c94c]", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black hover:border-[#8e6518] hover:border-2",
        headingColour: "text-[#8e6518] border-[#8e6518]",
        cardbg: "bg-[#f5ee96]",
    },
    {
        name: "Sign Up And Login Form",
        images: ["/images/sign.png", "/images/login2.png"],
        demoLink: "https://arishah-khan.github.io/signUp-LoginForm/",
        codeLink: "https://github.com/Arishah-Khan/signUp-LoginForm",
        bgColor: "bg-[#772db5]", // Button background color
        hoverBgColor: "hover:bg-[#e7c6ff] hover:border-[#5b1a91] hover:border-2", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#5b1a91] border-[#5b1a91]",
        cardbg: "bg-[#c8b6ff]",
    },
    
    {
        name: "Quiz App",
        images: ["/images/quiz1.png", "/images/quiz2.png"],
        demoLink: "https://arishah-khan.github.io/quiz-app-javaascript/",
        codeLink: "https://github.com/Arishah-Khan/quiz-app-javaascript",
        bgColor: "bg-[#487c69]", // Button background color
        hoverBgColor: "hover:bg-[#D3EE98] hover:border-[#4d7768] hover:border-2", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#2f604e] border-[#2f604e]",
        cardbg: "bg-[#b8e893]",
    },
    {
        name: "My Todo List",
        images: ["/images/todo1.png", "/images/todo2.png"],
        demoLink: "https://arishah-khan.github.io/Todo-App/",
        codeLink: "https://github.com/Arishah-Khan/Todo-App",
        bgColor: "bg-[#000080]", // Button background color
        hoverBgColor: "hover:bg-[#87cefa] hover:border-[#000080] hover:border-2", // Button hover color
        textColor: "text-white", // Button text color
        hoverTextColor: "hover:text-black",
        headingColour: "text-[#000080] border-[#000080]",
        cardbg: "bg-[#1beaf4]",
    },
];

export default function JavaScriptProjects() {
    return (
        <main className="bg-[#ebeae9] py-10">

            <section>
                <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-1 mt-2 py-2 px-5 ${poppins.className}`}>JavaScript Projects</h3>
                <p className={`${poppins.className} pb-8 px-5 text-sm md:text-base`}>Here are some of the projects I have created using JavaScript.</p>

                {/* Cards for JavaScript Projects */}
                <Carousel>
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-gray-200 rounded-full p-2">Previous</button>
                    </CarouselPrevious>

                    <CarouselContent>
                        {jsProjects.map((project, index) => (
                            <CarouselItem key={index}>
                                <JavascriptCard
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
    );
}
