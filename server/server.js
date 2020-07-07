const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const inventory = require('./instock-data/inventory.json');

app.get('/inventory', (req, res) => {
    res.send(inventory);
})


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));