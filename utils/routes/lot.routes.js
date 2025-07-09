const express = require('express');
const router = express.Router();
const lotController = require('../lot.controller');
const uploadMiddleware = require('../middleware/upload.middleware');

// Route to create a new lot (with image upload)
router.post('/create', uploadMiddleware.single('image'), lotController.createLot);

module.exports = router;
