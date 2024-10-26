import React from 'react'
import { Navbar, Footer, FooterBadge, Hero, Card } from "../Components";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Let’s Connect!"
        description="Got questions about these opportunities? Reach out at coordinator@gbchub.ca or fill out the form  to send us a message. We're here to help!"
      />

      <FooterBadge />
        <Footer />
    </div>
  );
}

export default Contact