const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: "10.8.250.65",
    user: "notenmanagment",
    password: "0pVDuG3OG8gi50lu",
    database: "notenmanagment"

})

connection.connect(function(err){
    if(err){
        console.log("SQL Connection error:" + err)
        return
    }
    console.log("connected to DB")
})

app.get('/api/hello',function(req,res) {
    console.log('api entry called')
    //res.type('text/plain').send('hello back, how <b>are</b> you?')
    res.status(403).type('text/plain').send('hello back, how <b>are</b> you?')
})

app.get('/api/get_all-classes', function(req,res) {
    console.log('Requested all Classes')
    let query = "Select * from classes"
    connection.query(query,function (
        error, results, fields) {
            if (error) {
                console.log(error)
                return
            }    
        res.send(results)
        }
    )
});

app.get('/api/get_subjects-from-classes/:class', function(req,res) {
    let query = 'select * from faecher where class=?'
    connection.query(query, function (error, results, fields) {
        if(results.length==0) {
            res.status(404).send()
        } else {
            res.send(results[0])
        }
    })
}


// Auf diesen Port antwortet der Server
app.listen(3000,function() {
    console.log('server running and listening on port 3000')
})
