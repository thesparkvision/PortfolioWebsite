import { Fragment } from "react"
import { resumeURL, skills } from "../../misc/constants"

import selfImage from "../../assets/self.jpg"
import "./About.css"


const About = () => {
    return (
        <Fragment>
            <article id="main-content">
                <section id="self-img-section">
                    <img src={selfImage} alt="image of self" />
                </section>

                <section id="short-intro-section">
                    <h3>Hey Visitor, Welcome to my Story!</h3>
  
                    <div id="intro">
                        <strong>Character Description: </strong>
                        <span>Character is software engineer and works using tools like React, Django and Docker on daily basis.</span>
                    </div>
   
                    <div id="values">
                        <strong>Character Beliefs: </strong>
                        <span>Character likes to give his 100% effort to every task and is hungry for knowledge. He wants to learn new stuff, solve challenging problems and create good softwares. </span>
                    </div>
         
                    <div id="magic-tools">
                        <strong>Character Magic Tools:</strong>
                        <ul id="key-skills">
                            {skills.map((skill, index) => 
                                <li key={index}>
                                    {skill}
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </article>

            <article id="action-content">
                <a
                    href={resumeURL}
                    id="view-resume-btn"
                    target="_blank"
                >
                    View Resume 📝
                </a>
            </article>
        </Fragment>
    )
}

export default About;