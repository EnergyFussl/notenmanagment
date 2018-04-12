const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: "web02.energyfussl.at",
    //host: "192.168.0.24",
    user: "lfrie_note",
    password: "0pVDuG3OG8gi50lu",
    database: "lfriedl_note",
    multipleStatements : true

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

app.get('/api/get_all-subjects', function (req, res) {
    console.log('Requested all Subjects')
    let query = "Select * from subjects"
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
    let query = 'select distinct * from (select fa.fid, fa.fach, kl.kid, kl.klasse from checks as te join subjects as fa join classes as kl ' + 'on te.fid = fa.fid and te.kid = kl.kid where te.kid = ?) as allsubjects'

    console.log("kid: " + req.params.kid)
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

app.get('/api/get_classchecks/:kid/:fid', function (req, res) {
    let query = 'select te.tid, te.typ, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, fa.fid, fa.fach, kl.kid, kl.klasse, avg(note) as average ' +
    'from checks as te join subjects as fa join classes as kl join results as re ' +
    'on te.kid = kl.kid and te.fid = fa.fid ' +
    'where kl.kid = ? and fa.fid = ' + req.params.fid

    console.log("kid: " + req.params.kid + "\nfid: "+ req.params.fid)
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

app.get('/api/get_classchecks/:kid', function (req, res) {
    let query = 'select te.tid, te.typ, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, fa.fid, fa.fach, kl.kid, kl.klasse, avg(note) as average ' +
    'from checks as te join subjects as fa join classes as kl join results as re ' +
    'on te.kid = kl.kid and te.fid = fa.fid ' +
    'where kl.kid = ' + req.params.kid

    console.log("kid: " + req.params.kid + "\nfid: "+ req.params.fid)
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

app.get('/api/get_results/:tid', function (req, res) {
    let query = 'select st.sid, CONCAT_WS(" ", `firstname`, `lastname`) AS `fullname`, kl.kid, kl.klasse, re.note, re.bemerkung, te.tid, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, fa.fid, fa.fach ' + 
    'from students as st join results as re join checks as te join classes as kl join subjects as fa ' +
    'on re.sid = st.sid and re.tid = te.tid and st.kid = te.kid ' +
    'and kl.kid = st.kid and fa.fid = te.fid where te.tid = ' + req.params.tid

    console.log(query)

    console.log("tid: "+ req.params.tid)
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