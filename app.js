export function appSrc(express, bodyParser, createReadStream, crypto, http) {
    const app = express()
    
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.get("/login/", (req, res) => {
        console.log(req)
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        res.send("itmo309574")
    });

    app.get("/code/", (req, res) => {
        console.log(req)
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        let str = createReadStream(import.meta.url.substring(7))
        str.on("open", () => {str.pipe(res)})
    });

    app.get("/sha1/:*", (req, res) => {
        console.log(req)
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        let str = req.params['0']
        let hash = crypto.createHash("sha1")
        hash.update(str)
        res.send(hash.digest("hex"))
    });

    app.get("/req/", (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        let query = req.query["addr"]
        if (query) {
            http.get(query, (r) => {
                r.pipe(res)
            })
        } else {
            res.send("itmo309574")
        }
    });

    app.post("/req/", (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        let query = req.body["addr"]
        if (query) {
            http.get(query, (r) => {
                r.pipe(res)
            })
        } else {
            res.send("itmo309574")
        }
    });

    app.all("*", (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
        res.send("itmo309574")
    })

    return app
}