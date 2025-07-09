const mongoose = require('mongoose');

const cuttingMasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lotRangeStart: { type: Number, required: true },
  lotRangeEnd: { type: Number, required: true },
});

module.exports = mongoose.model('CuttingMaster', cuttingMasterSchema);
