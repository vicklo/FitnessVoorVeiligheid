const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root', 
  password : '',
  database : 'fitnessvoorveiligheid'
});
const app = express();
app.use(bodyParser.json());
// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM userstudens', function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/klassen', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM klassen', function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/users', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `userstudens` (`userid`, `username`, `studentmail`, `wachtwoord`, `klasid`, `lengte`, `gewicht`, `fetpercentage`, `voornaam`, `achternaam`, `foto`) VALUES (NULL, '"+ params.username +"', '"+ params.studentmail +"', '"+ params.wachtwoord +"', '"+ params.klasid +"', '"+ params.lengte +"', '"+ params.gewicht +"', '"+ params.fetpercentage +"', '"+ params.voornaam +"', '"+ params.achternaam +"', '"+ params.foto +"');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.delete('/users/:userid', function (req, res) {
  let params = req.params;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("delete from userstudens where userid = " + params.userid, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.patch('/users', function (req, res) {
  let params = req.body;
  console.log(params)
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("UPDATE `userstudens` SET `username` = '"+params.username+"',`studentmail` = '"+params.studentmail+"',`wachtwoord` = '"+params.wachtwoord+"',`klasid` = '"+params.klasid+"',`lengte` = '"+params.lengte+"',`gewicht` = '"+params.gewicht+"',`fetpercentage` = '"+params.fetpercentage+"',`voornaam` = '"+params.voornaam+"',`achternaam` = '"+params.achternaam+"',`foto` = '"+params.foto+"' WHERE `userstudens`.`userid` = "+ params.userid, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/logboek/:id', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `logboek` inner JOIN oefeningen on oefeningen.oefeningid = logboek.oefeningid where studentid = " + req.params.id, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});


// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});


