const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));