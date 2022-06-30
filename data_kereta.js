const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const dataTiket = require("./models/data.json");

app.get('/', (req, res) => {
    res.send(dataTiket);
});

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});