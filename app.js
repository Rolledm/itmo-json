export default function(express, bodyParser, createReadStream, crypto, http) {
    const app = express();
    const cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Headers',
        'Content-Type': 'text/plain; charset=utf-8'
    }
    
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.all("/login/", (req, res) => {
        res.set(cors)
        res.send("itmo309574")
    });

    app.all("/code/", (req, res) => {
        res.set(cors)
        let str = createReadStream(import.meta.url.substring(7))
        str.on("open", () => {str.pipe(res)})
    });

    app.all("/sha1/:input/", (req, res) => {
        res.set(cors)
        let hash = crypto.createHash("sha1")
        hash.update(req.params.input)
        res.send(hash.digest("hex"))
    });

    app.use(bodyParser.json());
  
    app.all("/req/", (req, res) => {
        res.set(cors)
        let query = ""
        if (req.method == "GET") {
            query = req.query.addr
        } else if (req.method == "POST") {
            query = req.body.addy 
        } else {
            res.send("itmo309574")
        }
        if (query != "") {
            http.get(query, (r) => {
                let rawData = '';
                r.on('data', (chunk) => {
                    rawData += chunk;
                });
                r.on('end', () => {
                    res.send(rawData);
                });
            })
        } else {
            res.send("itmo309574")
        }
    });

    app.all("*", (req, res) => {
        res.set(cors)
        res.send("itmo309574")
    })

    return app;
}