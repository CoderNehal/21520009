const express = require("express")
const mongoose = require("mongoose")
const port = 5000

const app = express()

app.use('/api',(req,res)=>{
    res.send("Op")
})
const dbURI = 'mongodb+srv://demo_user:demo123@demo.eumge.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        
        console.log('Server started on 5000')
        app.listen(process.env.PORT || 5000)
    })
    .catch((err) => console.log(err));

