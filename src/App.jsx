import React, { useState } from "react";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    linkedIn: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    biography: "",
    programs: [],
    interestReason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newPrograms = checked
        ? [...prev.programs, value]
        : prev.programs.filter((program) => program !== value);
      return { ...prev, programs: newPrograms };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission here (e.g., send data to backend)
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Join Now</h2>

        {/* First and Last Name on the same line */}
        <div className="flex mb-4 space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Title/Position */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title/Position *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Company/Organization */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* LinkedIn Profile */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn Profile (if applicable)
          </label>
          <input
            type="url"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* Years of Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Years of Experience *
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Brief Biography */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Brief Biography
          </label>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </div>

        {/* Program Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Programs You’re Interested In Contributing To *
          </label>
          <div className="flex flex-col">
            {[
              "Cloud Computing Technologies Program (T465)",
              "Mobile Application Development and Strategy Program (T440)",
              "Full Stack Development Program (T177)",
              "Low Code Program (T189)",
              "Applied A.I. Solutions Development Program (T431)",
              "Blockchain Development Program (T475)",
              "Health Informatics Program (T402)",
              "Information Systems Business Analysis Program",
            ].map((program) => (
              <label className="inline-flex items-center mt-2" key={program}>
                <input
                  type="checkbox"
                  value={program}
                  checked={formData.programs.includes(program)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                  required
                />
                <span className="ml-2">{program}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Why are you interested in joining GBC */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Why are you interested in joining GBC?
          </label>
          <textarea
            name="interestReason"
            value={formData.interestReason}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="btn bg-[#005AA5] text-white w-full rounded-xl hover:bg-[#7fc8f0]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinNow;
