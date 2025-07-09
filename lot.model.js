const mongoose = require('mongoose');

const lotSchema = new mongoose.Schema({
  lotID: { type: String, required: true, unique: true },
  articleType: String,
  articleDescription: String,
  patternUsed: String,
  clothType: String,
  colors: [
    {
      colorName: String,
      weight: Number,
      quantity: Number,
    },
  ],
  cuttingMasterName: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lot', lotSchema);
