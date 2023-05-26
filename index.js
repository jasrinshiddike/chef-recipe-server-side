const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const chefs = require('./data/chef_info.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Your food is delivered to your table');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n.id === id);
    res.send(selectedChef);
})


app.listen(port, () => {
    console.log(`Your food is coming to your table: ${port}`)
})