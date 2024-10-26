import React from 'react'
import { Navbar, Footer, FooterBadge, Hero, Card } from "../Components";
import { project } from "../assets/index";

function ProjectIdeas() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Empower Students While Solving Your Industry Challenges"
        description={
          "We seek industry-driven project ideas to offer our students hands-on experience. Share your projects to contribute to their development while gaining fresh perspectives and potential solutions to your business challenges."
        }
        imgSrc={project}
        buttonText={"Submit Your Project Ideas"}
      />

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default ProjectIdeas