import React, { Fragment } from "react"
import { LinkIndicator } from "../utils"

const projects = [
    {
        "title": "Read Every Week",
        "description": "Tool to reduce overwhelming feeling of too much to read & encourage healthy reading habit",
        "githubLink": "https://github.com/thesparkvision/ReadEveryWeek",
        "liveLink": null,
        "pageLink": null
    },
    {
        "title": "Tic Tac Toe",
        "description": "Explored how tic tac toe game can be made.",
        "githubLink": "https://github.com/thesparkvision/TicTacToe",
        "liveLink": null,
        "pageLink": null
    },
    {
        "title": "DoList",
        "description": "This is a task management application.",
        "githubLink": "https://github.com/thesparkvision/DoList",
        "liveLink": null,
        "pageLink": null
    }
]

const Project = ({project}) => {
    return (
        <div className="border px-2 py-2 rounded-lg bg-amber-200">
            <h4 className="font-bold mb-2">{project.title} <LinkIndicator link={project.githubLink} /></h4>
            <p className="text-wrap">{project.description}</p>
        </div>
    )
}

const Projects = () => {
    return (
        <Fragment>
            <section>
                <div className="grid grid-cols-2 gap-6">
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