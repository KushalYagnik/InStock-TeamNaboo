const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = 8080;

// inventory routes
app.use('/', require('../server/src/routes/inventoryRoutes'));
app.use('/inventory',require('./src/routes/inventoryRoutes'));
app.use('/inventory/:inventoryId',require('./src/routes/inventoryRoutes'));

// warehouse routes
app.use('/warehouses', require('./src/routes/locationRoutes'));
app.use('/warehouses/:warehouseId', require('./src/routes/locationRoutes'));


app.listen(8080, (error) => {
    console.info(`server working on ${PORT}`)
})