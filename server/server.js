const express = require("express");
const app = express();
const cors = require("cors");

// bodyparser
app.use(express.json());
// CORS
app.use(cors());

const inventory_routes = require("./routes/inventory.js");
const warehouses_routes = require("./routes/warehouse.js");
// inventory route
app.use("/inventory", inventory_routes);
// warehouse route
app.use("/warehouses", warehouses_routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
