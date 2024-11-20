import React, { useState } from "react";
import { Navbar, Footer } from "../Components";

const HighSchoolInvite = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); 
  const [expanded, setExpanded] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isHighSchoolStudent: null ,
    currentSchool: "",
    graduationDate: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Submitted", formData);
    // Handle form submission here (e.g., send data to backend)
  };

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible); // Toggle form visibility
  };

  const reasons = [
    {
      title: "Study in downtown Toronto",
      description:
        "Our location provides you with access to top employers for field education opportunities.",
      image: "St James Campus exterior, King Street, with streetcar",
    },
    {
      title: "Practical, real-world experience",
      description:
        "Our facilities, including The Chefs' House and WAVE Clinics, simulate real-world work environments. All of our career-focused programs include at least one experiential learning opportunity*.",
      image: "2 students working in health sciences simulation centre",
    },
    {
      title: "Informed by industry",
      description:
        "We work with industry leaders to ensure the skills you learn in class are the ones you'll need on the job.",
      image: "Male construction student hero shot on site.",
    },
    {
      title: "Expert instructors",
      description:
        "Many faculty members have industry experience and will share their real-world knowledge with you.",
      image: "Centre for Business students in class at 200 King St. E.",
    },
    {
      title: "Applied research",
      description:
        "Gain hands-on experience working alongside industry professionals to develop and test new products.",
      image: "CNC machining student",
    },
    {
      title: "Promoting entrepreneurship",
      description:
        "Want to start your own business? Our entrepreneurship hub startGBC can help get your great idea off the ground.",
      image: "Students sitting at boardroom table",
    },
  ];

  const programs = [
    {
      name: "Applied A.I. Solutions Development (Postgraduate) (T431)",
      credential: "Ontario College Graduate Certificate",
      international: "Yes",
      description:
        "In our innovative Applied A.I. Solutions Development one-year graduate certificate program, you'll immerse yourself in a cross-disciplinary blend of computer science, mathematics, and business, equipping you with the expertise to craft solutions across industries using artificial intelligence (A.I.), machine learning, deep learning, and data science/analytics.",
      duration: "1 year (3 semesters)",
    },
    {
      name: "Blockchain Development (Postgraduate) (T475)",
      credential: "Ontario College Graduate Certificate",
      international: "Yes",
      description:
        "The one-year Blockchain Development graduate certificate program provides you with an in-depth understanding of blockchain technology and its applications. You'll gain the knowledge and practical skills to design and deploy dApps (decentralized applications) using blockchain technology.",
      duration: "1 year (3 semesters)",
    },
    {
      name: "Cloud Computing Technologies (Postgraduate) (T465)",
      credential: "Ontario College Graduate Certificate",
      international: "Yes",
      description:
        "The one-year Cloud Computing Technologies graduate certificate program will give you a broad, in-depth technical base through courses in system and network administration, cloud productivity tools, and cloud computing design and security.",
      duration: "1 year (3 semesters)",
    },
    {
      name: "Computer Programming (T186)",
      credential: "Ontario College Diploma",
      international: "Yes",
      description:
        "Get the technical and soft skills to launch a successful career in the information technology (IT) field as a software developer, quality assurance analyst and more with the two-year Computer Programming (T186) diploma program.",
      duration: "2 years",
    },
    {
      name: "Cyber Security (Postgraduate) (T433)",
      credential: "Ontario College Graduate Certificate",
      international: "Yes",
      description:
        "This program prepares you to protect systems and networks from cyber threats with in-depth training in security protocols and risk management.",
      duration: "1 year (3 semesters)",
    },
    {
      name: "Game – Programming (T163)",
      credential: "Ontario College Advanced Diploma",
      international: "Yes",
      description:
        "Learn to design and develop games for various platforms, focusing on coding, design principles, and interactive technologies.",
      duration: "3 years",
    },
    {
      name: "Mobile Application Development and Strategy (Postgraduate) (T440)",
      credential: "Ontario College Graduate Certificate",
      international: "Yes",
      description:
        "This program focuses on creating mobile apps with a user-centered approach, leveraging the latest technologies and frameworks.",
      duration: "1 year (3 semesters)",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-blue-50 p-4">
        {/* GBC Opportunities Paragraph */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#005AA5] mb-4">
            Welcome to George Brown College
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            George Brown College (GBC) offers a range of cutting-edge programs
            designed to prepare students for success in the dynamic world of
            technology and innovation. Whether you’re looking to explore
            artificial intelligence, blockchain development, or cloud computing,
            our programs provide the skills and knowledge needed to thrive in
            these growing fields. Discover your future at GBC!
          </p>
        </div>

        {/* 6 Reasons Section */}
        <section className="bg-[#005aa5] py-16 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            6 Reasons to Study at George Brown College
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700 mb-4">{reason.description}</p>
                <p className="text-gray-500 italic">{reason.image}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Button to Show/Hide Registration Form */}
        <div className="m-20 ">
          <button
            onClick={toggleFormVisibility}
            className="py-3 px-6 bg-[#005AA5] text-white text-lg font-medium rounded-lg hover:bg-[#7fc8f0] transition-colors"
          >
            Register for Campus Tour
          </button>
        </div>

        {/* Registration Form */}
        {isFormVisible && (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-6 mb-20"
          >
            <h2 className="text-2xl font-semibold text-[#005AA5] text-center mb-6">
              Registration Form
            </h2>
            <div className="space-y-4">
              <label className="block text-gray-700 text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="block text-gray-700 text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
                required
              />
            </div>
            <div className="space-y-4">
              <label className="block text-gray-700 text-sm font-medium">
                Are you a high school student?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="checkbox"
                name="isHighSchoolStudent"
                value={formData.isHighSchoolStudent}
                checked={formData.isHighSchoolStudent || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isHighSchoolStudent: e.target.checked,
                  }))
                }
                className="w-5 h-5"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-gray-700 text-sm font-medium">
                Current School
              </label>
              <input
                type="text"
                name="currentSchool"
                value={formData.currentSchool || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-gray-700 text-sm font-medium">
                Expected Date of Graduation
              </label>
              <input
                type="date"
                name="graduationDate"
                value={formData.graduationDate || ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#005AA5] text-white rounded-lg text-lg font-medium hover:bg-[#7fc8f0] transition-colors"
            >
              Submit
            </button>
          </form>
        )}

        {/* Programs Section */}
        <div className="mt-12 w-full max-w-4xl text-center mb-10">
          <h2 className="text-3xl font-bold text-[#005AA5] mb-8">
            Explore Our Technology Programs
          </h2>
          <div className="space-y-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDescription(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {program.name}
                  </h3>
                  <button className="text-[#005AA5]">
                    {expanded === index ? "Hide" : "Learn More"}
                  </button>
                </div>
                {expanded === index && (
                  <div className="mt-4 text-gray-700 space-y-2">
                    <p>
                      <strong>Credential:</strong> {program.credential}
                    </p>
                    <p>
                      <strong>International Students:</strong>{" "}
                      {program.international}
                    </p>
                    <p>
                      <strong>Duration:</strong> {program.duration}
                    </p>
                    <p>{program.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Explore Programs Button */}
        <div className="mb-8">
          <a
            href="https://www.georgebrown.ca/programs"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 bg-[#005AA5] text-white text-lg font-medium rounded-lg hover:bg-[#7fc8f0] transition-colors"
          >
            Explore More Programs on GBC Website
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HighSchoolInvite;
