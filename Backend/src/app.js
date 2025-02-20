const express = require('express');
const app = express();
const aiRoutes = require('../src/routes/ai.routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from BACKEND!');
})

app.use('/ai', aiRoutes)

module.exports = app;