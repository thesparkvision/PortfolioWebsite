import React, { Fragment } from "react"
import { LinkIndicator } from "../utils"
import projects from "../../data/projects.json"

const Project = ({project}) => {
    return (
        <div className="border text-zinc-900 border-zinc-900 px-2 py-2 bg-[#FEEA9A] rounded-xl shadow-sm">
            <h4 className="font-bold mb-2">{project.title} <LinkIndicator link={project.githubLink} /></h4>
            <p className="text-justify sm:text-wrap">{project.description}</p>
        </div>
    )
}

const Projects = () => {
    return (
        <Fragment>
            <section>
                <h2 className="font-bold text-2xl mb-2">Projects</h2>
                <p className="mb-6">A selection of things I've built.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                    {
                        projects.map((project, index) => (
                            <Project key={index} project={project} />
                        ))
                    }
                </div>
            </section>
        </Fragment>
    )
}

export default Projects;