const mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to: ' + err.stack);
        return;
    }
    console.log('Connected to the CloudSQL instance...');
});

module.exports = connection;
