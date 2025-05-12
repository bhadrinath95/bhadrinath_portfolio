import React, { useState } from 'react';
import './project.css';  // Ensure the updated stylesheet is imported

const projectsData = [
  {
    title: "Bank of America",
    duration: "June 2021 - Present",
    description:
      "Senior Developer in an Agile team, designing and implementing features for a cloud-based Python backend system that processes market data and generates regulatory reports. Ensures reliability and scalability using cloud infrastructure and NoSQL databases.",
    technologies: ["Python", "Cloud Architecture", "NoSQL", "React", "Jenkins", "JIRA"]
  },
  {
    title: "Nielsen Buy - Tata Consultancy Services",
    duration: "August 2017 - June 2021",
    description:
      "Worked across multiple applications in the Nielsen Buy ecosystem focused on market data analysis, data visualization, and automation testing. Responsibilities included requirement gathering, full-stack development, and building automation test suites across web and desktop platforms. Delivered solutions for ad-hoc analytics, collaboration tools, and data validation utilities using Python, Django, Selenium, and CI tools like Jenkins.",
    technologies: ["Python", "Django", "HTML", "Selenium", "TestNG", "Jenkins", "JIRA"]
  },
  {
    title: "Self Tracker",
    duration: "Feb 2021 - June 2021",
    description:
      "Personal project to log personal experiences as structured data. Supports web and mobile platforms with instant registration and record capabilities. It will also send reminders and emails.",
    technologies: ["HTML", "CSS", "React", "Android"]
  },
  {
    title: "Tenc Tech",
    duration: "Jan 2021 - Mar 2021",
    description:
      "A technical blogging platform for developers. Features include blog creation with markdown support, user authentication, search, comments, and social sharing.",
    technologies: ["Python", "Django", "Markdown", "HTML", "CSS"]
  },
  {
    title: "IRCTC Web",
    duration: "Nov 2020 - Dec 2020",
    description:
      "Automates IRCTC train ticket bookings using a user-friendly form and Selenium backend. Users can enter trip and passenger details to auto-book tickets and receive confirmations.",
    technologies: ["Selenium", "Python", "HTML", "CSS"]
  }
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const { title, duration, description, technologies } = projectsData[currentIndex];

  return (
    <section id="projects-carousel">
      <span className='projects-title'>Portfolio</span>
      <div className="carousel-slide">
        <div className="project-info">
          <h2 className="project-title">{title}</h2>
          <p className="project-duration">{duration}</p>
          <p className="project-description">{description}</p>
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="technology">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button className="prev-btn" onClick={prevSlide}></button>
        <button className="next-btn" onClick={nextSlide}></button>
      </div>

      <div className="carousel-dots">
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
