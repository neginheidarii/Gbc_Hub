const mongoose = require("mongoose");

// Industry Partner Schema
const industryPartnerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String, required: true }, 
    company: { type: String, required: true },
    linkedIn: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    jobTitle: { type: String },
    experience: { type: Number, required: true }, 
    biography: { type: String },
    opportunities: [{ type: String }], 
    interestReason: { type: String }, 
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("IndustryPartner", industryPartnerSchema);
