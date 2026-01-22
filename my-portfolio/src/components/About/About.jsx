import { Fragment } from "react"
import { Link } from "react-router-dom"
import { resumeURL, skills } from "../../misc/constants"

const About = () => {
    return (
        <Fragment>
            <section id="intro" cla>
                <div className="subheading font-bold mb-2 text-lg">// &nbsp; Character Description</div>
                <div className="text-base">The character is full stack software developer. He has worked primarily in Python and Javascript ecosystem. He aims to be a polyglot developer with deep expertise in one of the areas with time. He wanna be the very best of himself.</div>
            </section>

            <section id="values">
                <div className="subheading font-bold mb-2 text-lg">// &nbsp; Character Beliefs</div>
                <div className="text-base">Character likes to give his 100% effort to every task and is hungry for knowledge. He wants to learn new stuff, solve challenging problems and create good softwares. And absolutely, he want to have fun doing this sometimes.</div>
            </section>
    
            <section id="magic-tools">
                <div className="subheading font-bold mb-2 text-lg">// &nbsp; Character Magic Tools</div>
                <ul id="key-skills" className="flex gap-4">
                    {skills.map((skill, index) => 
                        <li key={index} className="bg-amber-100 px-4 py-1.5 rounded-2xl">
                            {skill}
                        </li>
                    )}
                </ul>
            </section>

            <section id="currently-doing">
                <div className="subheading font-bold mb-2 text-lg">// &nbsp; Current Side Projects</div>
                <ul className="list-decimal mx-4">
                    <li>
                        <Link 
                            to="https://github.com/thesparkvision/ReadEveryWeek" 
                            className="text-decoration-line decoration-red-800!"
                        >
                            Reading Reminder Tool
                        </Link>
                    </li>
                    <li>Health tracker - yet to be started </li>
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

export default About;