const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from Express! This is a GET request.');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received POST request! Data: ${JSON.stringify(data)}`);
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
