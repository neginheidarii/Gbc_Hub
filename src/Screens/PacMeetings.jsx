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
      <FooterBadge />
      <Footer />
    </div>
  );
}

export default PacMeetings;
