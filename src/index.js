const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Great! If you read this, node server started successfuly!");
});

app.listen(3000, () => console.log("Server started"));