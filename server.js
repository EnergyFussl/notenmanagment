const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: "82.211.19.79",
    //host: "192.168.0.24",
    user: "notenmanagment",
    password: "0pVDuG3OG8gi50lu",
    database: "notenmanagment",
    multipleStatements: true

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

// new Function has to be in the Documentation
app.get('/api/get_all-students/:kid', function (req, res) {
    let query = 'select st.sid, CONCAT_WS(" ", `firstname`, `lastname`) AS `fullname`, kl.kid, kl.klasse from students as st join classes as kl on kl.kid = st.kid where kl.kid = ' + req.params.kid

    //console.log("kid: " + req.params.kid)
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

app.get('/api/get_subjects-from-classes/:kid', function (req, res) {
    let query = 'select distinct * from (select fa.fid, fa.fach, kl.kid, kl.klasse from checks as te join subjects as fa join classes as kl ' + 'on te.fid = fa.fid and te.kid = kl.kid where te.kid = ?) as allsubjects'

    //console.log("kid: " + req.params.kid)
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
    let query = 'select te.tid, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, fa.fid, fa.fach, kl.kid, kl.klasse ' +
        'from checks as te join subjects as fa join classes as kl ' +
        'on te.kid = kl.kid and te.fid = fa.fid ' +
        'where kl.kid = ? and fa.fid = ' + req.params.fid

    //console.log("kid: " + req.params.kid + "\nfid: "+ req.params.fid)
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
    let query = 'select te.tid, te.typ, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, ' +
        'fa.fid, fa.fach, kl.kid, kl.klasse from checks as te join subjects as fa join classes as kl on te.kid = kl.kid and te.fid = fa.fid where kl.kid = ' + req.params.kid

    //console.log("kid: " + req.params.kid)
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
    let query = 'select st.sid, CONCAT_WS(" ", `firstname`, `lastname`) AS `fullname`, kl.kid, kl.klasse, re.note, re.bemerkung, re.punkte, te.tid, te.bezeichnung, date_format(te.datum,"%d-%m-%Y") as datum, fa.fid, fa.fach ' +
        'from students as st join results as re join checks as te join classes as kl join subjects as fa ' +
        'on re.sid = st.sid and re.tid = te.tid and st.kid = te.kid ' +
        'and kl.kid = st.kid and fa.fid = te.fid where te.tid = ' + req.params.tid

    //console.log(query)

    console.log("tid: " + req.params.tid)
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

// Noch nicht fertig
/*
app.get('/api/get_all-subjects-from-student/:sid', function (req, res) {
    let query = 'select distinct * from (select fa.fid, fa.fach, kl.kid, kl.klasse from checks as te join subjects as fa join classes as kl ' + 'on te.fid = fa.fid and te.kid = kl.kid where te.kid = ?) as allsubjects'

    console.log("sid: " + req.params.sid)
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
});*/

app.post('/api/post_test', function (req, res) {

    // Für Test Post
    let kid = req.body[0].kid
    let typ = req.body[0].typ
    let bezeichnung = req.body[0].bezeichnung
    let dat = req.body[0].datum
    let fach = req.body[0].fach
    let fid

    // Für Ergebnisse Post
    let tid
    let sid = req.body.sid

    let query = "SELECT fid FROM subjects WHERE fach LIKE " + "'" + fach + "'"
    connection.query(query, fach, function (error, results, fields) {
        if (error) {
            res.status(404).send()
        } else {
            console.log(results)
            let re = JSON.stringify(results)
            let sendjson = JSON.parse(re)
            //console.log(sendjson)
            fid = sendjson[0].fid

            let query1 = "insert into checks values (null," + kid + "," + fid + "," + "'" + typ + "'" + ",'" + bezeichnung + "','" + dat + "'" + ")"
            //console.log("post_test:\n" + query1)
            connection.query(query1, function (err, results, fields) {
                if (err) {
                    console.log("post test ERROR: " + err)
                    res.status(404).send()
                } else {
                    console.log(results)
                    let re = JSON.stringify(results)
                    let sendjson = JSON.parse(re)
                    //console.log(sendjson)

                    let query2 = "select tid from checks where kid like " + kid + " and fid like " + fid + " and typ like " + "'" + typ + "'" + " and bezeichnung like " + "'" + bezeichnung + "'" + " and datum like " + "'" + dat + "'"
                    //console.log(query2)

                    connection.query(query2, function (error, results, fields) {
                        if (error) {
                            res.status(404).send()
                        } else {
                            console.log(results)
                            let re = JSON.stringify(results)
                            let sendjson = JSON.parse(re)
                            console.log(sendjson)

                            tid = sendjson[0].tid
                            console.log(tid)

                            var query3 = "insert into results values "
                            for (let i = 0; i < req.body.length; i++) {
                                bemerkung = (req.body[i].bemerkung == "null") ? "null" : ("'" + req.body[i].bemerkung + "'")
                                query3 += "(" + req.body[i].sid + "," + tid + "," + req.body[i].note + ",'" + req.body[i].punkte + "'," + bemerkung + "),"
                            }

                            query3 = query3.substring(0, query3.length - 1);
                            query3 += ';'

                            console.log(query3)

                            connection.query(query3, function (error, results, fields) {
                                if (error) {
                                    console.log("post results ERROR: " + err)
                                    res.status(404).send()
                                } else {
                                    console.log(results)
                                    let re = JSON.stringify(results)
                                    let sendjson = JSON.parse(re)
                                    console.log(sendjson)

                                }
                            })

                        }
                    })
                }
            })
        }
    })
});

// Noch nicht fertig
/*
app.get('/api/get_fachid/:fach', function (req, res) {
    let query = "SELECT fid FROM subjects WHERE fach LIKE " + "'" + req.params.fach + "'"

    console.log(req.params.fach)
    connection.query(query, req.params.fach, function (error, results, fields) {
        if (error) {
            res.status(404).send()
        } else {
            console.log(results)
            let re = JSON.stringify(results)
            let sendjson = JSON.parse(re)
            console.log(sendjson)
        }
    })
});
*/

// Auf diesen Port antwortet der Server
app.listen(3000, function () {
    console.log('server running and listening on port 3000')
})