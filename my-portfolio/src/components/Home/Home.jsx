import { Fragment } from "react"
import { resumeURL, skills } from "../../misc/constants"
import { FileText } from "lucide-react";
import { LinkWrapper } from "../utils"
import projects from "../../data/projects.json"

const Home = () => {
    const projectsToDisplay = projects.filter(project => project.showInHomePage);

    return (
        <Fragment>
            <section id="intro">
                <div className="subheading font-bold mb-2 text-lg">Character Description</div>
                <div className="text-base border-l-4 px-2 py-2 bg-[#FEEA9A]">The character is full stack software developer. He has worked primarily in Python and Javascript ecosystem. He is currently working as SDE2 at <LinkWrapper href="https://agrichain.com/">Agrichain</LinkWrapper>. He has earlier worked at <LinkWrapper href="https://hashedin.com/">HashedinByDeloitte</LinkWrapper>. He is keeping tabs with current AI tools and exploring some side projects in his spare time.</div>
            </section>

            <section id="magic-tools">
                <div className="subheading font-bold mb-2 text-lg">Character Magic Tools</div>
                <ul id="key-skills" className="flex gap-4 flex-wrap">
                    {skills.map((skill, index) => 
                        <li key={index} className="border border-zinc-900 px-4 py-1.5 bg-[#FEEA9A]! rounded-xl shadow-sm">
                            {skill}
                        </li>
                    )}
                </ul>
            </section>

            { projectsToDisplay?.length > 0 && (
                <section id="currently-doing">
                    <div className="subheading font-bold mb-2 text-lg">Current Side Projects</div>
                    <ul className="list-disc mx-4">
                        {
                            projectsToDisplay.map((project, index) => (
                                <li key={index}>
                                    <LinkWrapper href={project.githubLink}>
                                        {project.title}
                                    </LinkWrapper> - {project.description}
                                </li>
                            ))
                        }
                    
                    </ul>
                </section>
            )}

            <section id="action-content" className="text-center">
                <a
                    href={resumeURL}
                    id="view-resume-btn"
                    target="_blank"
                    className="
                        inline-block
                        px-12 py-4
                        text-lg
                        text-white
                        bg-slate-500
                        border border-slate-500
                        rounded-lg
                        cursor-pointer
                        no-underline
                    "
                >
                    View Resume <FileText className="inline-block w-4.5 h-4.5 -mt-0.5"/>
                </a>
            </section>
        </Fragment>
    )
}

export default Home;