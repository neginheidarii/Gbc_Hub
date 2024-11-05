import React from "react";
import { Hero, FooterBadge, Footer, Card, Navbar } from "../Components/index";
import { pac, speaker, partner, hero, logo, project } from "../assets/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Connecting Industry with George Brown College"
        description=" GBC Hub is the cornerstone of innovation and collaboration at George Brown College. We bring together industry professionals, educators, and students to create a dynamic learning environment where real-world challenges meet cutting-edge education. Join us in shaping the future of tech education and driving impactful change across the industry."
        imgSrc={hero}
        buttonText="Learn more"
      />
      <div className="bg-gradient-to-r  from-[#005AA5] to-[#00A1DE] text-[#ffff] text-center w-full h-72">
        <p className="font-inter text-4xl font-semibold leading-[61.5px] tracking-tight text-center py-9 ">
          Why GBC Hub?
        </p>
        <p className="px-32 font-extralight text-[22px]">
          GBC Hub is the cornerstone of innovation and collaboration at George
          Brown College. We bring together industry professionals, educators,
          and students to create a dynamic learning environment where real-world
          challenges meet cutting-edge education. Join us in shaping the future
          of tech education and driving impactful change across the industry.
        </p>
      </div>
      <div className="bg-[#e7f6ff] flex flex-col text-center py-10">
        <h1 className="font-inter text-4xl font-semibold tracking-tight text-center py-10">
          Explore Collaboration Opportunities
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 px-10 place-items-center">
          <Card
            imgSrc={project}
            title="Project Ideas"
            description="Share your projects and help students gain real-world experience while benefiting from fresh ideas."
            buttonText="Learn more"
            navButton="/project-ideas"
          />
          <Card
            imgSrc={pac}
            title="PAC Meetings for Course Evaluations"
            description="Join our committee and help align our courses with industry trends."
            buttonText="Learn more"
            className="text-start"
            navButton="/pac-meetings"
          />
          <Card
            imgSrc={speaker}
            title="Guest Speaker Invitation"
            description="Share your expertise with the next generation of tech professionals."
            buttonText="Learn more"
            navButton="/guest-speaker"
          />
        </div>
      </div>
      <div className="">
        <FooterBadge />
      </div>
      <Footer />
    </>
  );
};

export default Home;
