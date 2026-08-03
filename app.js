const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'monitoring project is running 🚀' });
});

// app.use('/api', require('./routes'));

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports= app