const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = 8080;

// routes
app.use('/', require('../server/src/routes/inventoryRoutes'));

// warehouse routes can go here
app.use('/locations', require('../server/src/routes/locationRoutes'));


app.listen(8080, (error) => {
    console.info(`server working on ${PORT}`)
})