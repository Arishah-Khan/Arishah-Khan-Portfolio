import HtmlCssProjects from "./HtmlCss/htmlCss"
import NextJsProjects from "./nextjs/nextjs"
import TypescriptProjects from "./Typescript/typescript"
import JavaScriptProjects from "./javascript/javascript"

export default function Projects(){
return(
    <main id="projects" className="scroll-mt-24 pb-6 bg-[#ebeae9]">
        <HtmlCssProjects />
        <TypescriptProjects />
        <JavaScriptProjects />
        <NextJsProjects />
    </main>
)
}