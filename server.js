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

// Magic 8 Ball //

const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];

app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' ');
    const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
    const response = `<h1>${question}</h1><h1>${randomResponse}</h1?`;
    res.send(response);
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port} gang!`);
});