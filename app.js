import cors from 'cors'

export function appSrc(express, bodyParser, createReadStream, crypto, http) {
    const app = express()
    app.use(cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE,OPTIONS",
        headers: "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
    }))
    
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.get("/login/", (req, res) => {
        res.send("itmo309574")
    });

    app.get("/code/", (req, res) => {
        let str = createReadStream(import.meta.url.substring(7))
        str.on("open", () => {str.pipe(res)})
    });

    app.get("/sha1/:*", (req, res) => {
        let str = req.params['0']
        let hash = crypto.createHash("sha1")
        hash.update(str)
        res.send(hash.digest("hex"))
    });

    app.get("/req/", (req, res) => {
        let query = req.query["addr"]
        http.get(query, (r) => {
            r.pipe(res)
        })
    });

    app.post("/req/", (req, res) => {
        let query = req.body["addr"]
        http.get(query, (r) => {
            r.pipe(res)
        })
    });

    app.all("*", (req, res) => {
        res.send("itmo309574")
    })

    return app
}