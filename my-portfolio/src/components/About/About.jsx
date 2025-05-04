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
                    <h3 id="greetings">
                        <span>Hey Visitor,</span> 
                        <span> Welcome to my Story!</span>
                    </h3>
  
                    <div id="intro">
                        <strong className="subheading">Character Description: </strong>
                        <span>Character is software engineer and works using tools like React, Django and Docker on daily basis.</span>
                    </div>
   
                    <div id="values">
                        <strong className="subheading">Character Beliefs: </strong>
                        <span>Character likes to give his 100% effort to every task and is hungry for knowledge. He wants to learn new stuff, solve challenging problems and create good softwares. And absolutely, he want to have fun doing this sometimes.</span>
                    </div>
         
                    <div id="magic-tools">
                        <strong className="subheading">Character Magic Tools:</strong>
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