import React, { useState } from "react";

const JoinNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    field: "",
    opportunities: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newOpportunities = checked
        ? [...prev.opportunities, value]
        : prev.opportunities.filter((opportunity) => opportunity !== value);
      return { ...prev, opportunities: newOpportunities };
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
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Join Now</h2>

        {/* Partner Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Years of Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Years of Experience
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="5"
            required
          />
        </div>

        {/* Field of Expertise */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Field of Expertise
          </label>
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Software Engineering"
            required
          />
        </div>

        {/* Opportunities Interested In */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Opportunities Interested In
          </label>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Project Ideas"
                checked={formData.opportunities.includes("Project Ideas")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Project Ideas</span>
            </label>

            <label className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                value="PAC Meeting"
                checked={formData.opportunities.includes("PAC Meeting")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">PAC Meeting</span>
            </label>

            <label className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                value="Guest Speaker"
                checked={formData.opportunities.includes("Guest Speaker")}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Guest Speaker</span>
            </label>
          </div>
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
