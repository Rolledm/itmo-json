const express = require('express')
const cors = require('cors')

const port = process.env.PORT ? process.env.PORT : 1613

const app = express()

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    headers: "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
}))

app.use(express.text({type: "*/*"}))

app.get("/", (req, res) => {
    console.log(req.headers.connection)
    res.send("Hello")
});

app.post("/result4/", (req, res) => {
    console.log(req)
    console.log(req.body)

    res.send({
        "message": "itmo309574",
        "x-result": req.headers["x-test"],
        "x-body": req.body
    })
});

app.listen(port, () => {console.log(port)})