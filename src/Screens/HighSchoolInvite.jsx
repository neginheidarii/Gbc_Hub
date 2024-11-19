import React, { useState } from "react";
import { Navbar, Footer } from "../Components";

const HighSchoolInvite = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [expanded, setExpanded] = useState(null);

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
      duration: "1 year (3 Semesters)",
    },
    // Add more programs here...
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-blue-50 p-4">
   

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg space-y-6"
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
          <button
            type="submit"
            className="w-full py-3 bg-[#005AA5] text-white rounded-lg text-lg font-medium hover:bg-[#7fc8f0] transition-colors"
          >
            Register Now
          </button>
        </form>

        {/* Programs Section */}
        <div className="mt-12 w-full max-w-4xl text-center">
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
      </div>
      <Footer />
    </div>
  );
};

export default HighSchoolInvite;
