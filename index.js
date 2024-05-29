const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT


app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/login', (req,res)=>{
    res.send("Hello Login")
})

app.get('/logout', (req,res)=>{
    res.send("<h1>Yo are logged Out</h1>")
})

app.get('/signup', (req,res)=>{
    res.send("<h6>Please signup</h6>")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})


//This is a server code.