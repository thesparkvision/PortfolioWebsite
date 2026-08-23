import { Fragment } from "react"
import { resumeURL } from "../../misc/constants"
import { FileText } from "lucide-react";
import { GithubAction, LinkWrapper } from "../utils"
import projects from "../../data/projects.json"

const Home = () => {
    const projectsToDisplay = projects.filter(project => project.showInHomePage);

    return (
        <Fragment>
            <section id="intro" className="grid gap-8 py-8 md:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] md:items-end md:gap-12 md:py-12">
                <div>
                    <h1 className="max-w-3xl font-bold text-4xl md:text-6xl">Full-stack software engineer</h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8">I'm a Software Development Engineer 2 at <LinkWrapper href="https://agrichain.com/">AgriChain</LinkWrapper>, building reliable, data-heavy software with Python, Django, React, and AWS.</p>
                </div>

                <div className="md:border-l md:pl-8">
                    <a
                        href={resumeURL}
                        id="view-resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 text-lg text-white no-underline"
                    >
                        View resume <FileText className="h-4.5 w-4.5" />
                    </a>
                </div>
            </section>

            { projectsToDisplay?.length > 0 && (
                <section id="selected-work">
                    <h2 className="mb-4 font-bold text-xl md:text-2xl">Featured project</h2>
                    <ul className="content-list">
                        {
                            projectsToDisplay.map((project, index) => (
                                <li key={index} className="grid gap-2 py-6 md:grid-cols-[minmax(12rem,0.35fr)_minmax(0,1fr)] md:gap-8">
                                    <div>
                                        <span className="font-semibold text-lg">{project.title}</span>
                                        <GithubAction href={project.githubLink} />
                                    </div>
                                    <p className="body-copy">{project.description}</p>
                                </li>
                            ))
                        }
                    
                    </ul>
                </section>
            )}

        </Fragment>
    )
}

export default Home;
