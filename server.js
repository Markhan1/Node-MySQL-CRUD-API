require("dotenv").config({ path: './.env' });
const express = require("express");
const bodyParser = require("body-parser");

// Mysql connection
const dbConn = require('./config/db.config');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {
    res.sendStatus(200);
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    dbConn.connectToServer();
});