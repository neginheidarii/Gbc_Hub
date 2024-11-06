import React, { useState } from "react";

const ProjectIdeasForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectTitle: "",
    projectDescription: "",
    targetPrograms: [],
    projectObjectives: "",
    requiredSkills: "",
    projectDeliverables: "",
    resourcesTools: "",
    mentorshipSupport: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newPrograms = checked
        ? [...prev.targetPrograms, value]
        : prev.targetPrograms.filter((program) => program !== value);
      return { ...prev, targetPrograms: newPrograms };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-[#005AA5] text-center mb-8">
          Submit Your Project Idea
        </h2>

        {/* Contact Information */}
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
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
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

        {/* Project Title */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Project Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            required
          />
        </div>

        {/* Project Description */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            rows={4}
            required
          />
        </div>

        {/* Target Programs */}
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-medium">
            Target Programs <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col space-y-2">
            {[
              "Cloud Computing Technologies",
              "Mobile Application Development",
              "Full Stack Development",
              "Low Code Program",
              "Applied A.I. Solutions Development",
              "Blockchain Development",
              "Health Informatics Program",
              "Information Systems Business Analysis",
            ].map((program) => (
              <label className="inline-flex items-center" key={program}>
                <input
                  type="checkbox"
                  value={program}
                  checked={formData.targetPrograms.includes(program)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-[#005AA5] focus:ring-[#005AA5]"
                />
                <span className="ml-2 text-gray-700">{program}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Fields */}
        {[
          { label: "Project Objectives", name: "projectObjectives" },
          { label: "Required Skills and Knowledge", name: "requiredSkills" },
          { label: "Project Deliverables", name: "projectDeliverables" },
          { label: "Resources and Tools", name: "resourcesTools" },
          { label: "Mentorship and Support", name: "mentorshipSupport" },
          {
            label: "Additional Information",
            name: "additionalInfo",
            required: false,
          },
        ].map((field) => (
          <div className="space-y-4" key={field.name}>
            <label className="block text-gray-700 text-sm font-medium">
              {field.label}{" "}
              {field.required !== false && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
              rows={3}
              required={field.required !== false}
            />
          </div>
        ))}

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

export default ProjectIdeasForm;
