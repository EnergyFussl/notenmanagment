const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    //host: "10.8.250.65",
    host: "10.0.0.10",
    user: "notenmanagment",
    password: "0pVDuG3OG8gi50lu",
    database: "notenmanagment"

})

connection.connect(function (err) {
    if (err) {
        console.log("SQL Connection error:" + err)
        return
    }
    console.log("connected to DB")
})

app.get('/api/get_all-classes', function (req, res) {
    console.log('Requested all Classes')
    let query = "Select * from classes"
    connection.query(query, function (
        error, results, fields) {
        if (error) {
            console.log(error)
            return
        }
        res.send(results)
    }
    )
});

app.get('/api/get_subjects-from-classes/:kid', function (req, res) {
    //let query = 'select * from faecher where class=?'
    let query = 'select distinct * from (select fa.fid, fa.fach, kl.kid, kl.klasse from checks as te join subjects as fa join classes as kl ' + 'on te.fid = fa.fid and te.kid = kl.kid where te.kid = ?) as allsubjects'

    console.log("get_klassen_faecher\nkid: " + req.params.kid)
    connection.query(query, req.params.kid, function (error, results, fields) {
        if (error) {
            res.status(404).send()
        } else {
            console.log(results)
            let re = JSON.stringify(results)
            let sendjson = JSON.parse(re)
            console.log(sendjson)

            res.send(sendjson)
        }
    })
});

// Auf diesen Port antwortet der Server
app.listen(3000, function () {
    console.log('server running and listening on port 3000')
})