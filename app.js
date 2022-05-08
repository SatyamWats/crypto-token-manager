const express=require('express')
var bodyParser=require('body-parser') //also add nodemon
const { ModelBuildPage } = require('twilio/lib/rest/autopilot/v1/assistant/modelBuild')
const app=express()

var tokenAddressArray=[]
var chainIDArray=[]

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.render("./form.ejs")
})


app.post("/",function(req,res){
    var chain=req.body.chain
    var tokenAddress=req.body.tokenAddress
    chainIDArray.push(chain)
    tokenAddressArray.push(tokenAddress)
    for(let i=0;i<tokenAddressArray.length;i++){
        console.log("chain: "+chainIDArray[i]+" token: "+tokenAddressArray[i])
    }
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("Server is up and running");
})