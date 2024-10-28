import React from "react";
import { Navbar, Footer, FooterBadge, Hero, Card } from "../Components";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-[#e7f6ff]">
        <div className="w-2/3">
          <Hero
            title="Let’s Connect!"
            className="w-1/2"
            description="Got questions about these opportunities? Reach out at coordinator@gbchub.ca or fill out the form  to send us a message. We're here to help!"
          />
        </div>
        <div className="w-1/3 mr-10">
          <Card
            formInput={{
              name: "Name",
              type: "text",
              placeholder: "Enter your name",
              className: "", 
            }}
            className=""
          />
        </div>
      </div>

      <FooterBadge />
      <Footer />
    </div>
  );
}

export default Contact;
