const express = require('express');
const app = express();
const port = 3000;

// Greeting //

app.get('/greeting', (req, res) => {
    res.send('<h1>Hello, stranger! Elysea here.</h1>');
});

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}! How are you?</h1>`);
});

// Tip Calculator //

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(`<h1>The tip amount is ${tipAmount}!</h1>`);
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port} gang!`);
});