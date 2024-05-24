const exp = require("constants");
const express=require("express")
const app=express();
const path=require('path')
const qrcode = require('qrcode')

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.render("index")
})

app.post('/result',(req,res)=>{
    const inputtagdata = req.body.qrcodedata;
    console.log(inputtagdata)
    qrcode.toDataURL(inputtagdata,(err,data)=>{

        res.render('result',{passing:data})
    })
})

app.listen(10000,()=>{
    console.log("It's working");
})