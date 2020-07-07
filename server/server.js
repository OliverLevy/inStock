const express = require('express');
const app = express();

let inventory_routes = require('./routes/inventory.js');
app.use('/inventory', inventory_routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));