const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.send('This is a simple Node.js server using Express!');

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/submit', (req, res) => {
    const {name, email, password, message} = req.body;

    if (!name || !email || !password || !message) {
        return res.status(400).send('All fields are required.');
    }

    res.render('thanks', {name, email, message});

});
