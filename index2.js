import express from "express"
import morgan from "morgan"

const app = express()
const port = 3001

app.use(morgan("combined"))
app.use(morgan("tiny"))  //this will log on the console

function getRequest(req,res){
    res.send("hello")
}

/*
default method to use a middleware

app.use((req,res,next)=>{
    console.log("Request method: ", req.method)
    next()
})


*/

app.get('/', getRequest)

app.listen(port , ()=>{
    console.log('app is listening on port '+port)
})