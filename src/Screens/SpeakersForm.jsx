import React, { useState } from "react";

const SpeakersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    jobTitle: "",
    experience: "",
    biography: "",
    talkTitle: "",
    expertiseField: "",
    talkDescription: "",
    deliveryMethod: [],
    duration: "",
    targetAudience: [],
    preferredDates: "",
    preferredTimes: "",
    previousExperience: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newValues = checked
        ? [...prev[e.target.name], value]
        : prev[e.target.name].filter((item) => item !== value);
      return { ...prev, [e.target.name]: newValues };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guest Speaker Form Submitted", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-semibold text-[#005AA5] text-center mb-8">
          Guest Speaker Invitation Form
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Thank you for your interest in sharing your expertise with George
          Brown College students. Please complete the following form.
        </p>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#005AA5]">
            Contact Information
          </h3>
          <label className="block text-gray-700 text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            required
          />

          <label className="block text-gray-700 text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            required
          />

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

          <label className="block text-gray-700 text-sm font-medium">
            LinkedIn Profile (if applicable)
          </label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />
        </div>

        {/* Professional Background */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#005AA5]">
            Professional Background
          </h3>
          <label className="block text-gray-700 text-sm font-medium">
            Current Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Years of Experience
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Brief Biography
          </label>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            rows={3}
          />
        </div>

        {/* Proposed Talk Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#005AA5]">
            Proposed Talk Details
          </h3>
          <label className="block text-gray-700 text-sm font-medium">
            Title of Your Talk
          </label>
          <input
            type="text"
            name="talkTitle"
            value={formData.talkTitle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Field/Area of Expertise
          </label>
          <input
            type="text"
            name="expertiseField"
            value={formData.expertiseField}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Detailed Description of Your Talk
          </label>
          <textarea
            name="talkDescription"
            value={formData.talkDescription}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005AA5]"
            rows={4}
          />
        </div>

        {/* Preferred Method of Delivery */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#005AA5]">
            Preferred Method of Delivery
          </h3>
          {["In-Person", "Online"].map((method) => (
            <label className="inline-flex items-center" key={method}>
              <input
                type="checkbox"
                name="deliveryMethod"
                value={method}
                checked={formData.deliveryMethod.includes(method)}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-[#005AA5] focus:ring-[#005AA5]"
              />
              <span className="ml-2 text-gray-700">{method}</span>
            </label>
          ))}
        </div>

        {/* Duration */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#005AA5]">Duration</h3>
          {["1 Hour", "1.5 Hours", "2 Hours", "Other (please specify)"].map(
            (duration) => (
              <label className="inline-flex items-center" key={duration}>
                <input
                  type="radio"
                  name="duration"
                  value={duration}
                  checked={formData.duration === duration}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-[#005AA5] focus:ring-[#005AA5]"
                />
                <span className="ml-2 text-gray-700">{duration}</span>
              </label>
            )
          )}
        </div>

        {/* Other sections follow similarly */}

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

export default SpeakersForm;
