import { Fragment } from "react";
import { GraduationCap, Clock } from "lucide-react";
import { LinkWrapper, PageHeading } from "../utils";
import workExperiences from "../../data/workExperiences.json";

const skillGroups = [
  ["Product engineering", "Python, JavaScript, Django, React"],
  [
    "Systems and data",
    "FastAPI, GraphQL, PostgreSQL, AWS, Docker, Redis, Celery",
  ],
  ["AI-assisted development", "LLMs, context engineering, Claude Code, Codex"],
  ["Quality and workflow", "Pytest, Jest, Git"],
];

const RoleExperience = ({ workExperience }) => {
  return (
    <div className="border-b border-[var(--color-text)]/15 pb-8 pt-8 first:pt-0 last:border-b-0">
      <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div className="font-semibold">{workExperience.roles[0]}</div>
        <div className="text-sm italic md:text-right">
          <Clock className="inline-block size-3.5 -mt-0.5" />{" "}
          {workExperience.started} - {workExperience.ended}
        </div>
      </div>
      <p className="mb-3 body-copy text-base">
        {workExperience.shortDescription}
      </p>
      <div>
        <div className="font-medium underline underline-offset-2">
          Tech Stack & Tools
        </div>
        <div>{workExperience.techStackAndTools.join(", ")}</div>
      </div>
    </div>
  );
};

const CompanyExperience = ({ company }) => {
  const isCurrent = company.roles.some((role) => role.ended === "Present");

  return (
    <div className="relative pb-10 last:pb-0">
      <span
        aria-hidden="true"
        className={`absolute -left-[37px] top-1 rounded-full ${isCurrent ? "size-3 bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]" : "size-2.5 border-2 border-[var(--color-accent)] bg-[var(--color-background)]"}`}
      />
      <div className="mb-4 font-semibold">
        <LinkWrapper href={company.companyUrl}>
          {company.companyName}
        </LinkWrapper>
      </div>
      <div className="ml-2 pl-8">
        {company.roles.map((role, index) => (
          <RoleExperience
            key={`${role.started}-${index}`}
            workExperience={role}
          />
        ))}
      </div>
    </div>
  );
};

const groupedWorkExperiences = workExperiences.reduce(
  (companies, experience) => {
    const company = companies.find(
      (item) => item.companyName === experience.companyName,
    );

    if (company) {
      company.roles.push(experience);
    } else {
      companies.push({
        companyName: experience.companyName,
        companyUrl: experience.companyUrl,
        roles: [experience],
      });
    }

    return companies;
  },
  [],
);

const About = () => {
  return (
    <Fragment>
      <section>
        <PageHeading className="mb-6">About Me</PageHeading>
        <div className="max-w-[65ch]">
          <p className="mb-4 body-copy">
            Hi! I am Aman Pandya. My friendship with computers happened in childhood.
            I used to play computer games for hours when I was small. When I reached 11th grade, I
            realized that I am good with programming. I had not thought what I
            wanted as a career then. We were asked to make projects in 12th
            grade and one night, I remain awake till 5 a.m. just trying to
            create the project for my final exams. When it came to choosing
            career path, I could only think of that night when I did not care
            about anything and was having fun. And here I am.
          </p>
        </div>
      </section>

      <section>
        <PageHeading as="h2" className="mb-6">
          Skills and tools
        </PageHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map(([group, tools]) => (
            <div key={group}>
              <h3 className="font-semibold">{group}</h3>
              <p className="mt-1 body-copy">{tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <PageHeading as="h2" className="mb-6">
          Work
        </PageHeading>
        <div className="ml-2 border-l border-[var(--color-text)]/25 pl-8 md:ml-4">
          {groupedWorkExperiences.map((company) => (
            <CompanyExperience key={company.companyName} company={company} />
          ))}
        </div>
      </section>

      <section>
        <PageHeading as="h2" className="mb-6">
          Education
        </PageHeading>
        <div>
          <div className="mb-1">
            <LinkWrapper href="https://mitujjain.ac.in/">
              Mahakal Institute Of Technology, Ujjain
            </LinkWrapper>
          </div>
          <div className="flex flex-col md:flex-row lg:justify-between font-semibold italic">
            <div>
              <GraduationCap className="inline-block w-5 h-5 -mt-0.5" /> B.Tech.
              in Computer Science and Engineering
            </div>
            <div>
              <Clock className="inline-block w-3.5 h-3.5 -mt-0.5" /> July 2017 -
              July 2021
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
