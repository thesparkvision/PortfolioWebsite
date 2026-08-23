import { Fragment } from "react"
import { GithubAction, PageHeading } from "../utils"
import projects from "../../data/projects.json"

const Project = ({project}) => {
    return (
        <li className="grid gap-2 border-b border-[var(--color-text)]/20 py-6 last:border-b-0 md:grid-cols-[minmax(14rem,0.4fr)_minmax(0,1fr)] md:gap-8">
            <div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                {project.githubLink && (
                  <GithubAction href={project.githubLink} />
                )}
            </div>
            <p className="body-copy">{project.description}</p>
        </li>
    )
}

const Projects = () => {
    return (
        <Fragment>
            <section>
                <PageHeading className="mb-2">Projects</PageHeading>
                <p className="mb-6 body-copy">A selection of things I have built.</p>
                <ul className="content-list">
                    {
                        projects.map((project, index) => (
                            <Project key={index} project={project} />
                        ))
                    }
                </ul>
            </section>
        </Fragment>
    )
}

export default Projects;
