import React, { useState } from "react";

const PACMeetingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    selectedPrograms: [],
    expertise: "",
    industryTopics: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newPrograms = checked
        ? [...prev.selectedPrograms, value]
        : prev.selectedPrograms.filter((program) => program !== value);
      return { ...prev, selectedPrograms: newPrograms };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PAC Meeting Form Submitted", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-[#005AA5] text-center mb-8">
          PAC Meeting Participation Form
        </h2>

        {/* Participant Information */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Title/Position <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Company/Organization <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
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
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />
        </div>

        {/* Program Selection */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Program Selection <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Please select the programs you are interested in contributing to for
            PAC meetings (You can select more than one program):
          </p>
          <div className="flex flex-col space-y-2">
            {[
              "Cloud Computing Technologies Program (Postgraduate) (T465)",
              "Mobile Application Development and Strategy Program (Postgraduate) (T440)",
              "Full Stack Development Program (T177)",
              "Low Code Program (T189)",
              "Applied A.I. Solutions Development Program (Postgraduate) (T431)",
              "Blockchain Development Program (Postgraduate) (T475)",
              "Health Informatics Program (Postgraduate) (T402)",
              "Information Systems Business Analysis Program (with Experiential Learning Capstone)",
            ].map((program) => (
              <label className="inline-flex items-center" key={program}>
                <input
                  type="checkbox"
                  value={program}
                  checked={formData.selectedPrograms.includes(program)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-[#005AA5] focus:ring-[#005AA5]"
                />
                <span className="ml-2 text-gray-700">{program}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Expertise and Contribution */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Briefly describe your area of expertise and how you can contribute
            to the selected programs <span className="text-red-500">*</span>
          </label>
          <textarea
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            rows={3}
            required
          />
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Are there specific topics or trends within your industry that you
            think should be included in our curriculum?
          </label>
          <textarea
            name="industryTopics"
            value={formData.industryTopics}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#005AA5] text-white rounded-lg text-lg font-medium hover:bg-[#7fc8f0] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PACMeetingForm;
