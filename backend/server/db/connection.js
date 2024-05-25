const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/signup").then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('failed')
})


