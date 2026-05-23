const express = require('express');
const cookies = require('cookie-parser');
const authRoutes = require('./routes/auth.route');
const adminRoutes = require('./routes/admin.route');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookies());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.get('/api', (req, res) => {
    res.send('Welcome to the Spotify Clone API');
});


module.exports = app;