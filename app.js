require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json()); // Invoke the json middleware

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

// API route to get name
app.get('/name', (req, res) => {
    const name = "Harsh Kalamkar";
    res.json({ name });
});

// Catch-all route to serve React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
