const mysql = require('mysql');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'animals_db'
    }); 
}

//When you add Heroku Mysql to app you are not going to have things carry over 
//local database, you will have to make them match

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    connection.end();
});

app.get("/", function(req, res) {
    res.send("Connected!");
});

app.listen(PORT, function() {
    console.log('Server running on http://localhost:' + PORT);
})

//git add, commit push heroku master
//heroku open to open deployed app