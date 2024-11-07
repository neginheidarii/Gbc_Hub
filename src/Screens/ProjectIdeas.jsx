import React from "react";
import { Navbar, Footer, FooterBadge, Hero, Programs } from "../Components";
import { project } from "../assets/index";


function ProjectIdeas() {
  return (
    <div>
      <Navbar />

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
      <section className="bg-[#e7f6ff] py-16">
      <p className="text-center text-gray-700 text-lg my-6 max-w-5xl mx-auto">
        <span className="text-[#005AA5] font-bold">Note:</span> You can give project
        ideas aligned with any of the programs listed below. These ideas will
        offer students hands-on experience and practical learning opportunities
        tailored to their field of study.
      </p>
      </section>
      <Programs />
      <FooterBadge />
      <Footer />
    </div>
  );
}

export default ProjectIdeas;
