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
  console.log(params);
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `userstudens` (`userid`, `username`, `studentmail`, `wachtwoord`, `klasid`, `lengte`, `gewicht`, `fetpercentage`, `voornaam`, `achternaam`, `foto`, `schemaid`, `docent`) VALUES (NULL, '"+ params.username +"', '"+ params.studentmail +"', '"+ params.wachtwoord +"', NULL, '"+ params.lengte.replace(",",".") +"', '"+ params.gewicht.replace(",",".") +"', '"+ params.fetpercentage.replace(",",".") +"', '"+ params.voornaam +"', '"+ params.achternaam +"', '"+ params.foto +"', NULL, '0');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/klassenstudents/:username/:wachtwoord', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query('SELECT * FROM userstudens where klasid = ' + req.params.username, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/klassen', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    const params = req.body
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `klassen` (`klasid`, `klasnaam`, `docentid`) VALUES (NULL, '"+params.klasnaam+"', '"+params.id+"');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/user/:id', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("select * from userstudents where userid =" + req.params.id, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/klassen', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    const params = req.body
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `klassen` (`klasid`, `klasnaam`, `docentid`) VALUES (NULL, '"+params.klasnaam+"', '"+params.id+"');", function (error, results, fields) {
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
  connection.query("UPDATE `userstudens` SET `username` = '"+params.username+"',`studentmail` = '"+params.studentmail+"',`wachtwoord` = '"+params.wachtwoord+"',`klasid` = "+params.klasid+",`lengte` = '"+params.lengte+"',`gewicht` = '"+params.gewicht+"',`fetpercentage` = '"+params.fetpercentage+"',`voornaam` = '"+params.voornaam+"',`achternaam` = '"+params.achternaam+"',`foto` = '"+params.foto+"' WHERE `userstudens`.`userid` = "+ params.userid, function (error, results, fields) {
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
  connection.query("SELECT * FROM `logboek` where studentid = " + req.params.id+" ORDER by datum DESC", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/oefening', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `oefeningen`", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/oefening', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    let params = req.body;
    console.log(params);
    let day = new Date().getDate();
    let month = new Date().getMonth() +1;
    let year = new Date().getFullYear();
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `logboek` (`logboekid`, `studentid`, `datum`, `log`, `commentaar`, `oefeningid`) VALUES (NULL, '"+ params.studentid +"', '"+year + "-" + month + "-" + day+"', '"+params.log+"', '', '1');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    console.log("log opgeslagen");
    res.send(results)
  });
});
});
app.get('/schema/:id', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    params = req.params;

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT schemasumma.schemanaam,schemaoefeningen.oefeningid,oefeningen.oefeningnaam,schemaoefeningen.sets,schemaoefeningen.hethaling,doelen.doel FROM schemasumma  INNER join doelen on doelen.doelid = schemasumma.doelid  INNER join schemaoefeningen on schemaoefeningen.schemaid = schemasumma.schemaid  INNER JOIN oefeningen on oefeningen.oefeningid = schemaoefeningen.oefeningid where schemasumma.schemaid = " + params.id, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/schema', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    params = req.params;

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT schemasumma.schemanaam,schemasumma.schemaid,doelen.doel FROM schemasumma INNER join doelen on doelen.doelid = schemasumma.doelid  ", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});

});
app.get('/messages/:klasid', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    params = req.params;

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `messages` inner join klassen on klassen.klasid = messages.klasid where messages.klasid = " + params.klasid, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});

});
app.get('/aandachtpunten', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    params = req.body;
let query = "SELECT * FROM `aandachtpunten` WHERE oefeningid = 0 "
req.body.ids.forEach(element => {
  query += " OR oefeningid = " + element;
});
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query(query, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});

});
app.get('/docenten', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `docent` ", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/docenten', function (req, res) {
  // Connecting to the database.
  let params = req.body;
  connection.getConnection(function (err, connection) {
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `docent` (`userid`, `username`, `wachtwoord`, `klasid`) VALUES (NULL, '"+params.usernsme+", '"+params.wachtwoord+"', '"+params.klasid+"');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});

});
app.patch('/docenten', function (req, res) {
  // Connecting to the database.
  let params = req.body;
  connection.getConnection(function (err, connection) {
  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("UPDATE `docent` SET `username` = '"+params.username+"', `wachtwoord` = '"+ params.wachtwoord +"' WHERE `docent`.`userid` = 2;", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});

});
app.get('/oefeningen', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `oefeningen` ", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/oefeningen', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `oefeningen` (`oefeningid`, `oefeningnaam`, `oefeningvideo`, `docentid`) VALUES (NULL, '"+ req.body.oefeningnaam +"', '"+req.body.oefeningvideo+"', '"+req.body.docentid+"');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/aandachtspunten/:id', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `oefeningen` INNER JOIN aandachtpunten on aandachtpunten.oefeningid = oefeningen.oefeningid where oefeningen.oefeningid = " + req.params.id, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.patch('/volgschema/:schemaid/:userid', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("UPDATE `userstudens` SET `schemaid` = "+req.params.schemaid+" WHERE `userstudens`.`userid` = " + req.params.userid, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/docenterichten', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("select * from docentberichten", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/doelen', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT * FROM `doelen` ", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});

app.post('/schemaoefening', function (req, res) {
  let params = req.body;
  console.log(params)
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    let query = "INSERT INTO `schemaoefeningen` (`schemaoefeningid`, `oefeningid`, `sets`, `hethaling`, `schemaid`) VALUES (NULL, '"+params.oefeningid+"', '"+params.sets+"', '"+params.hethaling+"', '"+params.schemaid+"')"

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query(query, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/schema', function (req, res) {
  let params = req.body;
  console.log(params)
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    let query = "INSERT INTO `schemasumma` (`schemaid`, `doelid`, `schemanaam`) VALUES (NULL, '"+params.doelid+"', '"+params.schemanaam+"')";

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query(query, function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.post('/aandachtpunten', function (req, res) {
  let params = req.body;
  console.log(params)
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("INSERT INTO `aandachtpunten` (`aandachtpuntid`, `oefeningid`, `aandachtspunt`) VALUES (NULL, '"+params.id+"', '"+params.text+"');", function (error, results, fields) {
    // If some error occurs, we throw an error.
    if (error) throw error;

    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results)
  });
});
});
app.get('/klassencombo', function (req, res) {
  let params = req.body;
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

  // Executing the MySQL query (select all data from the 'users' table).
  connection.query("SELECT klassen.klasid as value,klassen.klasnaam as label from klassen ", function (error, results, fields) {
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