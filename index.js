require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./database');


// simple GET api
app.get('/home', function (req, res) {
    res.send("Hello world!");
});

// GET api to print results of lab4DB table
app.get('/home/moderators', function (req, res) {
    connection.query(
        "USE lab4DB");
    connection.query(
        "SELECT * FROM `lab4DB`",
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.set('port', process.env.PORT || 3000);
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
