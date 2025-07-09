const Lot = require("../models/lot.model");
const CuttingMaster = require("../models/cuttingMaster.model");

// Create Lot
exports.createLot = async (req, res) => {
  try {
    const {
      lotID,
      articleType,
      articleDescription,
      patternUsed,
      clothType,
      colors,
      cuttingMasterName,
      imageUrl,
    } = req.body;

    const existingLot = await Lot.findOne({ lotID });
    if (existingLot) {
      return res.status(400).json({ message: "Lot ID already exists" });
    }

    const lot = new Lot({
      lotID,
      articleType,
      articleDescription,
      patternUsed,
      clothType,
      colors,
      cuttingMasterName,
      imageUrl,
    });

    await lot.save();
    res.status(201).json({ message: "Lot created successfully", lot });
  } catch (error) {
    res.status(500).json({ message: "Failed to create lot", error: error.message });
  }
};

// Get All Lots
exports.getAllLots = async (req, res) => {
  try {
    const lots = await Lot.find();
    res.status(200).json(lots);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch lots", error: error.message });
  }
};
