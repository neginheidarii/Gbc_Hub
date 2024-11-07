import React from "react";

const programs = [
  {
    title: "Cloud Computing Technologies",
    description:
      "Gain insights into cloud solutions and infrastructure management while allowing students to implement real-world scenarios in a virtual environment.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Harness student expertise to build mobile apps tailored to your needs, from concept to execution, across iOS and Android platforms.",
  },
  {
    title: "Full Stack Development",
    description:
      "Work with students to create comprehensive web solutions, including front-end, back-end, and database management, to meet your specific requirements.",
  },
  {
    title: "Low Code Program",
    description:
      "Leverage low-code platforms to create solutions quickly and efficiently, ideal for businesses looking for fast, functional prototypes.",
  },
  {
    title: "Applied A.I. Solutions Development",
    description:
      "Explore how AI can optimize your business through predictive analytics, automation, and intelligent decision-making with student-built solutions.",
  },
  {
    title: "Blockchain Development",
    description:
      "Experiment with blockchain technology for secure, decentralized applications, benefiting from students' knowledge of smart contracts and digital ledgers.",
  },
  {
    title: "Health Informatics Program",
    description:
      "Tap into the power of data-driven healthcare solutions developed by students specializing in data management, analytics, and informatics.",
  },
  {
    title: "Information Systems Business Analysis",
    description:
      "Engage with students trained in analyzing, planning, and implementing IT systems aligned with business goals and industry standards.",
  },
];

const Programs = () => {
  return (
    <>
      {/* Programs Offered Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center text-[#005AA5] mb-8">
          Programs Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#005AA5] mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Programs;
