const express = require('express');
const app = express();
const PORT = 3000;

// Mock database for demonstration
const trackingData = {
    "123456789": {
        status: "In Transit",
        trackingNumber: "123456789",
        estimatedDelivery: "2024-11-08",
        currentLocation: "New York, NY",
        lastUpdated: "2024-11-05 14:00:00"
    },
    "987654321": {
        status: "Delivered",
        trackingNumber: "987654321",
        estimatedDelivery: "2024-11-02",
        currentLocation: "Los Angeles, CA",
        lastUpdated: "2024-11-02 10:00:00"
    }
};

// Define the /api/track-order endpoint
app.get('/api/track-order', (req, res) => {
    const trackingNumber = req.query.number; // Get tracking number from query

    if (trackingData[trackingNumber]) {
        // If tracking number exists, return the tracking info
        res.json(trackingData[trackingNumber]);
    } else {
        // If tracking number is not found, return an error
        res.status(404).json({ error: "Tracking number not found." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
