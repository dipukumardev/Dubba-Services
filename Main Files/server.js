const express = require('express');
const path = require('path'); // Import the path module

const app = express();

app.use(express.static('public'));

app.get('/public/Signup/sign.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Signup', 'sign.html'));
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});
