const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: { type: String, required: true },      // Ensure title is required
    description: { type: String },
    images: [{ type: String }],                   // Array of image URLs
    tags: [{ type: String }],                     // Array of tags
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);
