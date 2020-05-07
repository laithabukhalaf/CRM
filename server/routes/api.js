const express=require('express')
const router=express.Router()
const Client=require('../models/Client')
const mongoose=require('mongoose')
const data=require('../../src/data.json')


//  const uploadData = function(){
//         for(let c of data){
//             let client = new Client(c)
//             client.save()
//         }
//     }
    
//     uploadData()

router.get('/clients',function(req,res){
    Client.find({}).exec(function(err,data){
        res.send(data)
    })
})

router.post('/client',function(req,res){
    let newClient=new Client(req.body)
    newClient.save()
    res.send("adding successfully new client")
})

router.delete('/client/:clientID',(req,res)=>{
    let ID=req.params.clientID
    Client.findOneAndRemove({_id:ID}, (err,body)=>{
        res.send()
    })
})


router.put("/client/:clientID", (req,res) => {
    const ID = req.params.clientID
    const info = req.body
    Client.findOneAndUpdate({ _id: ID }, { name: info.name, country: info.country }, (err, body) => {
        res.end()
    })
})

router.put('/client',function(req,res){
    let id=req.body.id
    Client.findByIdAndUpdate(id,{[req.body.key]:req.body.value},function(err,client){
        console.log(client)
    })
    res.end()
})

router.get('/', function(req,res){
    res.send('thanks')
})




module.exports=router

