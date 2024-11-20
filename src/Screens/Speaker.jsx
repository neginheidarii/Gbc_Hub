import React from "react";
import { Navbar, Footer, FooterBadge, Hero } from "../Components";
import { speaker } from "../assets/index";

function Speaker() {
  const topics = {
    workshops: [
      "Coding: Practical like developing an app with Next.js",
      "Building a mini full-stack app with MERN",
      "Learning about cloud platforms",
    ],
    seminars: [
      "New updates on Java",
      "Generative AI (GenAI) trends",
      "How to be a better programmer",
      "Improving your CV",
      "How to get your first job",
      "LeetCode: Solving coding challenges",
    ],
  };

  return (
    <div>
      <Navbar joinNowBtn={"Join Now"} />
      <Hero
        title="Inspire the Next Generation of Tech Leaders"
        description="Share your expertise with our students and make a lasting impact. Whether you’re discussing industry trends, your career journey, or a specialized topic, your insights will inspire the future of tech. Choose the format that works best for you—seminars, workshops, online, or in person."
        imgSrc={speaker}
        buttonText={"Become a Guest Speaker"}
        NavButton={"/speakers-form"}
      />

      {/* Topics Section */}
      <div className="bg-blue-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-[#005AA5] text-center mb-8">
          Topics for Workshops and Seminars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Workshops Column */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Workshops
            </h3>
            <ul className="space-y-3">
              {topics.workshops.map((topic, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 flex items-start"
                >
                  <span className="w-2.5 h-2.5 bg-[#005AA5] rounded-full mt-2 mr-4"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Seminars/Webinars Column */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Seminars / Webinars
            </h3>
            <ul className="space-y-3">
              {topics.seminars.map((topic, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 flex items-start"
                >
                  <span className="w-2.5 h-2.5 bg-[#005AA5] rounded-full mt-2 mr-4"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Paragraph */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            You can also offer your own personal topic! These are just a few
            examples to help inspire you. Whether it's a hands-on workshop or an
            engaging seminar, we're excited to hear your ideas and expertise.
          </p>
        </div>
      </div>

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default Speaker;
