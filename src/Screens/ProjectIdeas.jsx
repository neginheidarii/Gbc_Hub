import React from "react";
import { Navbar, Footer, FooterBadge, Hero } from "../Components";
import { project } from "../assets/index";

const programs = {
  postgraduate: [
    {
      name: "Applied A.I. Solutions Development (Postgraduate)",
      description:
        "This program focuses on developing advanced skills in artificial intelligence and machine learning solutions for real-world applications.",
      link: "https://www.georgebrown.ca/programs/applied-ai-solutions-development-program-postgraduate-t431",
    },
    {
      name: "Blockchain Development (Postgraduate)",
      description:
        "Learn the intricacies of blockchain technology and decentralized app development with this hands-on program.",
      link: "https://www.georgebrown.ca/programs/blockchain-development-program-postgraduate-t475",
    },
    {
      name: "Cloud Computing Technologies (Postgraduate)",
      description:
        "Gain in-depth knowledge of cloud systems, network security, and architecture to thrive in the ever-growing cloud computing domain.",
      link: "https://www.georgebrown.ca/programs/cloud-computing-technologies-program-postgraduate-t465",
    },
    {
      name: "Cyber Security (Postgraduate)",
      description:
        "Prepare to combat cyber threats and enhance system security with advanced tools and techniques.",
      link: "https://www.georgebrown.ca/programs/cyber-security-program-postgraduate-t433",
    },
    {
      name: "Mobile Application Development and Strategy (Postgraduate)",
      description:
        "Master mobile application development with a focus on strategy, design, and user-centered approaches.",
      link: "https://www.georgebrown.ca/programs/mobile-application-development-and-strategy-program-postgraduate-t440",
    },
    {
      name: "Wireless Networking (Postgraduate)",
      description:
        "Explore wireless communication systems and their applications in modern industries.",
      link: "https://www.georgebrown.ca/programs/wireless-networking-t411",
    },
  ],
  capstone: [
    {
      name: "Computer Programming",
      description:
        "Build foundational programming skills and apply them in practical projects.",
      link: "https://www.georgebrown.ca/programs/computer-programming-t186",
    },
    {
      name: "Computer Programming and Analysis",
      description:
        "Learn advanced programming and analytical techniques to create innovative solutions.",
      link: "https://www.georgebrown.ca/programs/computer-programming-and-analysis-t177",
    },
    {
      name: "Game Programming",
      description:
        "Dive into the world of game development with this comprehensive program.",
      link: "https://www.georgebrown.ca/programs/game-programming-t163",
    },
    {
      name: "Computer Systems Technician",
      description:
        "Train to manage, maintain, and troubleshoot modern computer systems effectively.",
      link: "https://www.georgebrown.ca/programs/computer-systems-technician-t141",
    },
    {
      name: "Health Informatics",
      description:
        "Focus on leveraging IT solutions in healthcare to enhance patient outcomes.",
      link: "https://www.georgebrown.ca/programs/health-informatics-t402",
    },
    {
      name: "Information Systems Business Analysis",
      description:
        "Combine IT and business skills to analyze and improve organizational systems.",
      link: "https://www.georgebrown.ca/programs/information-systems-business-analysis-t405",
    },
  ],
};

function ProjectIdeas() {
  return (
    <div>
      <Navbar joinNowBtn={"Join Now"} />

      {/* Hero Section */}
      <Hero
        title="Empower Students While Solving Your Industry Challenges"
        description={
          "We seek industry-driven project ideas to offer our students hands-on experience. Share your projects to contribute to their development while gaining fresh perspectives and potential solutions to your business challenges."
        }
        imgSrc={project}
        buttonText={"Submit Your Project Ideas"}
        NavButton={"/project-ideas-form"}
      />

      {/* Project Benefits Section */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-[#005AA5] mb-8">
          Why Offering a Project Idea?
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Partnering with us by submitting a project idea allows you to support
          student learning and gain valuable, innovative solutions. Whether it’s
          your own concept or a challenge faced by your company, your project
          will provide students with essential hands-on experience, while
          benefiting your organization.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-[#005AA5] rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Cost-Free Implementation
            </h3>
            <p className="text-white">
              Industry partners receive innovative project solutions at no
              additional cost. Our students will tackle your challenges and
              provide effective, actionable results.
            </p>
          </div>

          <div className="bg-[#005AA5] rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Fresh Perspectives
            </h3>
            <p className="text-white">
              Our students bring creative, future-forward solutions driven by
              the latest in tech education, providing you with insights that
              align with emerging industry trends.
            </p>
          </div>

          <div className="bg-[#005AA5] rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Talent Pipeline
            </h3>
            <p className="text-white">
              Gain access to highly skilled, job-ready students, with the
              potential to recruit top talent for your organization. Build
              connections with future tech professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#e7f6ff] py-16">
        <h2 className="text-3xl font-bold text-center text-[#005AA5] mb-8">
          Programs for Your Project Ideas
        </h2>

        {/* Postgraduate Programs */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-[#005AA5] mb-4">
            Postgraduate Programs
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Students can dedicate a full semester (3-4 months) to your project
            idea, ensuring comprehensive attention and execution.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.postgraduate.map((program, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <h4 className="text-lg font-medium text-gray-800">
                  {program.name}
                </h4>
                <p className="text-gray-600 mt-2">{program.description}</p>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#005AA5] font-semibold hover:underline"
                >
                  Learn More
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Capstone Projects */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#005AA5] mb-4">
            Capstone Projects
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Students will complete your project within 2 semesters while
            balancing other courses, offering a structured and focused approach.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.capstone.map((program, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <h4 className="text-lg font-medium text-gray-800">
                  {program.name}
                </h4>
                <p className="text-gray-600 mt-2">{program.description}</p>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#005AA5] font-semibold hover:underline"
                >
                  Learn More
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default ProjectIdeas;
