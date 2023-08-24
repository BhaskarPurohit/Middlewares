import express from "express"
import bodyParser from "body-parser"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3003

var userIsAuthorized = false

app.use(bodyParser.urlencoded({extended: true}))


//making a middleware
function passwordCheck(req, res, next){
    const password = req.body["password"]
    if(password === "bhaskar"){
        userIsAuthorized = true
    }
    next()

}

app.use(passwordCheck)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/check',(req, res)=>{
    if(userIsAuthorized){
        res.sendFile(__dirname + "/public/secrets.html")
    }else{
        res.sendFile(__dirname + "public/index.html")
    }
})

app.listen(port, ()=>{
    console.log("app is listening at port "+ port)
})