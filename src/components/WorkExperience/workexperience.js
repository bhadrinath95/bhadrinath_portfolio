import React from 'react';
import './workexperience.css';

const experienceData = [
  {
    role: "Software Engineer",
    company: "Bank of America",
    date: "June 2021 - Present",
    responsibilities: [
      "Developed backend trading systems using Python and Django",
      "Implemented TDD practices to ensure reliability and high-test coverage",
      "Built RESTful APIs integrated with React front-end components",
      "Leveraged AWS for cloud deployment and automation workflows",
      "Participated in Agile sprints and tracked progress using JIRA",
      "Automated functional test cases with Selenium WebDriver and TestNG"
    ]
  },
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    date: "August 2017 - June 2021",
    responsibilities: [
      "Developed web applications using Django and Python",
      "Participated in full SDLC phases including requirements gathering, development, and UAT",
      "Developed custom automation frameworks and reviewed code for quality",
      "Performed regression testing using Selenium and Jenkins pipelines",
      "Managed work items, bugs, and reports through JIRA"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="experienceTitle">Work Experience</h2>
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div className="timelineItem" key={index}>
            <div className="timelineContent">
              <h3>{job.role}, {job.company}</h3>
              <span className="experienceDate">{job.date}</span>
              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
