import express from "express"


const app  = express()
const port = 3002


function logger(req, res, next){
    console.log("Request method : "+ req.method)
    console.log("Request URL: "+ req.url)
    next()

}

function postRequest(req, res){
    res.send("psot request is running")

}

app.use(logger)

app.get('/',(req, res)=>{
    res.send("hello from index3 ")

})

app.post('/submit', postRequest)

app.listen(port , ()=>{
    console.log("app is listening on port "+port)
})