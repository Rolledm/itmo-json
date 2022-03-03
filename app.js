const express = require('express')

const port = process.env.PORT ? process.env.PORT : 1613

const app = express()

app.get("/", (req, res) => {
    console.log(req.headers.connection)
    res.send("Hello")
});

app.get("/result4/", (req, res) => {
    console.log(req.headers.connection)
    res.send({
        "message": "itmo309574"
    })
});

app.listen(port, () => {console.log(port)})