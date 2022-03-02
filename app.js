const express = require('express')
const app = express(process.env.PORT)

app.get("/", (req, res) => {
    console.log(req.headers.connection)
    res.send("Hello")
});

app.listen(80, () => {
    console.log("hey");
});
