const express = require('express');
const qr = require('qrcode');
const cors = require('cors');

const app = express();
const port =process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Generate QR code API
app.post('/generate_qr', (req, res) => {
    const { name, phone, address } = req.body;

    // Combine form data into a single string
    const qrData = `Name: ${name}\nPhone: ${phone}\nAddress: ${address}`;

    // Generate QR code as a data URL
    qr.toDataURL(qrData, (err, src) => {
        if (err) return res.status(500).send('Error generating QR code');

        // Return the QR code source as JSON
        res.json({ qrCode: src });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
