import React, { Fragment } from "react"
import { GraduationCap, Clock } from "lucide-react";
import { LinkWrapper } from "../utils"

const workExperiences = [
    {
        "roles": [
            "Full Stack Software Engineer"
        ],
        "companyName": "Agrichain",
        "companyUrl": "https://agrichain.com/",
        "shortDescription": `
            Building core features for an agricultural supply-chain platform where data correctness and reliability are non-negotiable.
            Work across backend systems, financial calculations, analytics, and complex data-driven UIs.
            Focused on improving operational trust by solving issues around consistency, synchronization, and scale.
        `,
        "started": "March 2024",
        "ended": "Present",
        "techStackAndTools": [
            "Django",
            "React",
            "MaterialUI",
            "Docker",
            "Celery",
            "Redis",
            "AWS",
            "Flower",
            "PostgresSQL",
            "Claude CLI",
            "Opencode",
            "Gemini 3"
        ]
    },
    {
        "roles": [
            "Software Developer Engineer 2",
            "Software Developer Engineer 1"
        ],
        "companyName": "Hashedin By Deloitte",
        "companyUrl": "https://hashedin.com/",
        "shortDescription": `
            Worked across Python, AWS, and React on production systems. 
            Over time, took ownership of backend architecture, led small teams, mentored juniors, and focused on reliability, testing, and documentation.
        `,
        "started": "July 2021",
        "ended": "March 2024",
        "techStackAndTools": [
            "React",
            "Django",
            "GraphQL",
            "AWS Lambda",
            "AWS S3",
            "Jest",
            "Pandoc"
        ]
    }
]

const WorkExperience = ({workExperience}) => {
    return (
        <p className="mb-8 text-justify border-l-2 border-r-2 py-1 px-2 rounded-xl">
            <div className="mb-3">
                <div className="mb-1">
                    <LinkWrapper href={workExperience.companyUrl}>{workExperience.companyName}</LinkWrapper>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between font-medium">
                    <div>
                        {workExperience.roles[0]}
                    </div>
                    <div>
                        <Clock className="inline-block w-3.5 h-3.5 -mt-0.5"/> {workExperience.started} - {workExperience.ended}
                    </div>
                </div>
            </div>
            <p className="mb-3">
                {workExperience.shortDescription}
            </p>
            <div>
                <div className="font-medium underline">
                    Tech Stack & Tools:
                </div>
                <div>
                    {workExperience.techStackAndTools.join(", ")}
                </div>
            </div>
        </p>
    )
}
const About = () => {
    return (
        <Fragment>
            <section>
                <h2 className="font-bold text-2xl mb-6">About Myself</h2>
                <p className="mb-4 text-justify">
                    I am Aman Pandya. I have been using computers since my childhood. I used to play computer games for hours and would stick to computer for hours.
                    When I reached 11th grade, I got to realize that I am good with computers and code. Not that, I had thought what I wanted to be then.
                    We were asked to make projects in 12th grade and one night, I remain awake till 5 just trying to make the project as I was imagining in my head.
                    When it came to choosing what do I want to do, I could only think of that night when I did not care about anything and was having fun.
                    And hence I became a software developer with time.
                </p>
                <p className="text-justify">
                    I aim to be a polyglot T-shaped developer with deep expertise in one of the areas with time. <strong>I wanna be the very best of myself</strong>. 
                    I want to know everything - LLM, blockchain, Cloud, Devops, frontend, backend, multiple domain knowledge, design skills, UX, deployment, game development, mobile development.
                </p>
            </section>

            <section>
                <h2 className="font-bold text-2xl mb-6">Work</h2>
                {
                    workExperiences.map(
                        (workExperience, index) => <WorkExperience key={index} workExperience={workExperience}/>
                    )
                }
            </section>

            <section>
                <h2 className="font-bold text-2xl mb-6">Education</h2>
                <div>
                    <div className="mb-1">
                        <LinkWrapper href="https://mitujjain.ac.in/">Mahakal Institute Of Technology, Ujjain</LinkWrapper>
                    </div>
                    <div className="flex flex-col md:flex-row lg:justify-between font-medium">
                        <div>
                            <GraduationCap className="inline-block w-5 h-5 -mt-0.5"/> B.Tech. in Computer Science and Engineering
                        </div>
                        <div>
                            <Clock className="inline-block w-3.5 h-3.5 -mt-0.5"/> July 2017 - July 2021
                        </div>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    )
}

export default About;