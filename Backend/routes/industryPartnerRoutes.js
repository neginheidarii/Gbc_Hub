const express = require("express");
const IndustryPartner = require("../models/IndustryPartner");

const router = express.Router();

// Add a new industry partner
router.post("/", async (req, res) => {
  try {
    const partner = new IndustryPartner(req.body);
    await partner.save();
    res.status(201).json(partner);
  } catch (error) {
    res.status(400).json({ message: "Error adding industry partner", error });
  }
});

// Get all industry partners
router.get("/", async (req, res) => {
  try {
    const partners = await IndustryPartner.find();
    res.json(partners);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching industry partners", error });
  }
});

// Get an industry partner by ID
router.get("/:id", async (req, res) => {
  try {
    const partner = await IndustryPartner.findById(req.params.id);
    if (!partner)
      return res.status(404).json({ message: "Industry partner not found" });
    res.json(partner);
  } catch (error) {
    res.status(500).json({ message: "Error fetching industry partner", error });
  }
});

// Update an industry partner
router.put("/:id", async (req, res) => {
  try {
    const partner = await IndustryPartner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!partner)
      return res.status(404).json({ message: "Industry partner not found" });
    res.json(partner);
  } catch (error) {
    res.status(400).json({ message: "Error updating industry partner", error });
  }
});

// Delete an industry partner
router.delete("/:id", async (req, res) => {
  try {
    const partner = await IndustryPartner.findByIdAndDelete(req.params.id);
    if (!partner)
      return res.status(404).json({ message: "Industry partner not found" });
    res.json({ message: "Industry partner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting industry partner", error });
  }
});

module.exports = router;
