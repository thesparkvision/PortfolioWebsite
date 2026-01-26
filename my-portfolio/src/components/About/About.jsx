import React, { Fragment } from "react"
import { GraduationCap, Clock} from "lucide-react";
import { LinkWrapper } from "../utils"
import workExperiences from "../../data/workExperiences.json"


const WorkExperience = ({workExperience}) => {
    return (
        <div className="flex py-2">
            <p className="mb-8 text-justify px-2 py-2 border-l-4 bg-[#FEEA9A]">
                <div className="mb-3">
                    <div className="mb-1">
                        <LinkWrapper href={workExperience.companyUrl}>{workExperience.companyName}</LinkWrapper>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between italic font-semibold">
                        <div>
                            {workExperience.roles[0]}
                        </div>
                        <div>
                            <Clock className="inline-block w-3.5 h-3.5 -mt-0.5"/> {workExperience.started} - {workExperience.ended}
                        </div>
                    </div>
                </div>
                <p className="mb-3 text-base">
                    {workExperience.shortDescription}
                </p>
                <div>
                    <div className="font-medium underline underline-offset-2">
                        Tech Stack & Tools
                    </div>
                    <div>
                        {workExperience.techStackAndTools.join(", ")}
                    </div>
                </div>
            </p>
        </div>
    )
}
const About = () => {
    return (
        <Fragment>
            <section>
                <h2 className="font-bold text-2xl mb-6">About Myself</h2>
                <div className="border-l-4 px-2 py-2 bg-[#FEEA9A]">
                    <p className="mb-4 text-justify text-base">
                        I am Aman Pandya. I have been using computers since my childhood. I used to play computer games for hours.
                        When I reached 11th grade, I realized that I am good with programming. I had not thought what I wanted as a career then.
                        We were asked to make projects in 12th grade and one night, I remain awake till 5 a.m. just trying to create the project as I had the vision.
                        When it came to choosing career path, I could only think of that night when I did not care about anything and was having fun.
                        And here I am.
                    </p>
                    <p className="text-justify text-base">
                        I aim to be a polyglot T-shaped developer with deep expertise in one of the areas with time. <strong>I wanna be the very best of myself</strong>. 
                        I want to know everything - LLM, blockchain, Cloud, Devops, frontend, backend, multiple domain knowledge, design skills, UX, deployment, game development, mobile development.
                    </p>
                </div>
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
                    <div className="flex flex-col md:flex-row lg:justify-between font-semibold italic">
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