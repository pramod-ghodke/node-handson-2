const express = require('express')
 const app = express()
 app.get('/api/main', function(req,res){
    res.send('Hi I am Pitambar Bhadra')
  

 })
 app.listen(4000, function(){
    console.log('Hi Application is running')
 })