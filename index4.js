import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname  =  dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3003
var bandName = ""

app.use(bodyParser.urlencoded({extended: true}))


function bandnameGenerator(req, res, next){
    console.log(req.body)
    bandName = req.body["street"] + req.body["pet"] 
    next()

}

app.use(bandnameGenerator)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res)=>{
    res.send(`<h1>Your brand name is: <h2>${bandName}</h2></h1>`)
})



app.listen(port, ()=>{
    console.log("port is running at "+ port)
})