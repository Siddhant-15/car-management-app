const express = require('express');
const Car = require('../models/Car');
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/multerConfig'); // Import Multer config
const carController = require('../controllers/carController');
const router = express.Router();

// Create a new car (authenticated)
router.post('/create', auth, upload.array('images', 10), async (req, res) => {
    try {
        const { title, description, tags, images } = req.body;
        const car = new Car({ title, description, tags: JSON.parse(tags), images, user: req.user.userId });
        await car.save();
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// List all cars for the authenticated user
router.get('/list', auth, async (req, res) => {
    try {
        const cars = await Car.find({ user: req.user.userId });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get details of a specific car
router.get('/detail/:id', auth, async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// // Update a car's details
router.put('/update/:id', auth, upload.array('images', 10), async (req, res) => {
    try {
        const { title, description, tags } = req.body;
        const images = req.files ? req.files.map(file => file.path) : undefined; // Use images if provided

        // Prepare update data
        const updateData = {
            title: title || undefined,
            description: description || undefined,
            tags: tags ? JSON.parse(tags) : undefined, // Parse tags if provided
            images: images || undefined
        };

        // Remove undefined fields (only update provided fields)
        for (let key in updateData) {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        }

        // Find the car by ID and update with new data
        const car = await Car.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        res.json({ message: 'Car updated successfully', car });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Delete a car
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search cars by title, description, or tags
router.get('/search', auth, async (req, res) => {
    const { keyword } = req.query;
    try {
        const cars = await Car.find({
            user: req.user.userId,
            $or: [
                { title: new RegExp(keyword, 'i') },
                { description: new RegExp(keyword, 'i') },
                { tags: new RegExp(keyword, 'i') }
            ]
        });
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
