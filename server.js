const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: "10.0.0.10",
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

// Auf diesen Port antwortet der Server
app.listen(3000,function() {
    console.log('server running and listening on port 3000')
})