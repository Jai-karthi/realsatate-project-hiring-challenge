const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbreal:dbreal@cluster0.yh3xco3.mongodb.net/signup").then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('failed')
})


