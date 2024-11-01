import React from "react";
import { Navbar, Footer, FooterBadge, Hero, Card } from "../Components";
import { speaker } from "../assets/index";

function Speaker() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Inspire the Next Generation of 
Tech Leaders"
        description="Share your expertise with our students and make a lasting impact. Whether you’re discussing industry trends, your career journey, or a specialized topic, your insights will inspire the future of tech. Choose the format that works best for you—seminars, workshops, online, or in person."
        imgSrc={speaker}
        buttonText={"Become a Guest Speaker"}
      />

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default Speaker;
