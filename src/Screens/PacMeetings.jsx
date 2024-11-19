import React from "react";
import { Navbar, Hero, FooterBadge, Footer } from "../Components";
import { pac } from "../assets/index";

function PacMeetings() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Shape Our Curriculum with Industry Expertise"
        description={
          "We’re committed to meeting the tech industry’s evolving needs. Join our Program Advisory Committee (PAC) to keep our curriculum cutting-edge. PAC meetings are held 1-2 times a year and usually online for your convenience. Your insights will help align our courses with industry trends and ensure our students are job-ready."
        }
        imgSrc={pac}
        buttonText={"Join the PAC"}
        NavButton={"/pac-meetings-form"}
      />
      {/* PAC Meetings Information Section */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-[#005AA5] mb-8">
          About PAC Meetings
        </h2>
        <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
          Our Program Advisory Committee (PAC) meetings are held 1-2 times a
          year, typically online, to ensure that our curriculum remains aligned
          with the latest industry trends and the needs of employers.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-[#005AA5] mb-4">
              Meeting Method: Online
            </h3>
            <p className="text-gray-700">
              PAC meetings are typically conducted online for your convenience,
              allowing industry professionals from all over to participate and
              contribute their expertise.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-[#005AA5] mb-4">
              Frequency: 1-2 Times a Year
            </h3>
            <p className="text-gray-700">
              These meetings occur twice a year, offering a structured
              opportunity to provide feedback and influence the curriculum based
              on emerging trends and real-world challenges.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-[#005AA5] mb-4">
              Benefits of Participation
            </h3>
            <p className="text-gray-700">
              By participating, you help ensure that our courses remain relevant
              and job-focused. You’ll also have the chance to shape the next
              generation of tech talent and connect with other industry leaders.
            </p>
          </div>
        </div>
      </section>

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default PacMeetings;
