const express = require('express')
const fs = require("fs")
const https = require("https")

const port = process.env.PORT ? process.env.PORT : 1613

const crt = {
    key: fs.readFileSync("./ssl/server.key"),
    cert: fs.readFileSync("./ssl/server.crt")
}

const app = express()

app.get("/", (req, res) => {
    console.log(req.headers.connection)
    res.send("Hello")
});

https.createServer(crt, app).listen(port, () => {console.log("running on " + port)})