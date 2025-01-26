const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the signup page
app.get('/public/Signup/sign.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Signup', 'sign.html'));
});

// Route for the login page
app.get('/public/Login/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login', 'login.html'));
});

// Start the server
app.listen(3000, () => {
    console.log("App listening on port 3000");
});
