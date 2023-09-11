const express = require('express');
const sequelize = require('./database');
const Dessert = require('./Dessert');

// Make a connection to the database
sequelize.sync().then(() => {
    console.log('Your DB is ready!')
});

// Initialize our application
const app = express();
app.use(express.json());

// Add routes
app.post('/desserts', async (req, res) => {
    // Business logic goes here
    await Dessert.create(req.body);
    res.send('Dessert is created in the DB.');
});

app.get('/desserts', async (req, res) => {
    const desserts = await Dessert.findAll();
    res.send(desserts);
});

app.get('/desserts/:id', async (req, res) => {
    const requestedId = req.params.id;
    const dessert = await Dessert.findOne({ where: {id: requestedId }});
    res.send(dessert);
});


// Launch the application
app.listen(3000, () => {
    console.log("The app is running!");
});