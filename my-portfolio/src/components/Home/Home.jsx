import { Fragment } from "react"
import { resumeURL, skills } from "../../misc/constants"
import { ExternalLink } from "../utils"

const pinnedProjects = [
    {
        "name": "Read Every Week",
        "url": "https://github.com/thesparkvision/ReadEveryWeek",
        "shortDescription": "Tool to reduce overwhelming feeling of too much to read & encourage healthy reading habit."
    }
]

const Home = () => {
    return (
        <Fragment>
            <section id="intro">
                <div className="subheading font-bold mb-2 text-lg">Character Description</div>
                <div className="text-base">The character is full stack software developer. He has worked primarily in Python and Javascript ecosystem. He is currently working as SDE2 at <ExternalLink href="https://agrichain.com/">Agrichain</ExternalLink>. He has earlier worked at <ExternalLink href="https://hashedin.com/">HashedinByDeloitte</ExternalLink>. He is keeping tabs with current AI tools and exploring some side projects in his spare time.</div>
            </section>

            <section id="magic-tools">
                <div className="subheading font-bold mb-2 text-lg">Character Magic Tools</div>
                <ul id="key-skills" className="flex gap-4 flex-wrap">
                    {skills.map((skill, index) => 
                        <li key={index} className="border text-zinc-900 border-zinc-900 px-4 py-1.5 bg-amber-200! rounded-xl shadow-sm">
                            {skill}
                        </li>
                    )}
                </ul>
            </section>

            <section id="currently-doing">
                <div className="subheading font-bold mb-2 text-lg">Current Side Projects</div>
                <ul className="list-disc mx-4">
                    {
                        pinnedProjects.map((project, index) => (
                            <li key={index}>
                                <ExternalLink href={project.url}>{project.name}</ExternalLink> - {project.shortDescription}
                            </li>
                        ))
                    }
                   
                </ul>
            </section>

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
                    View Resume 📝
                </a>
            </section>
        </Fragment>
    )
}

export default Home;