const express = require('express')


const app = express()

app.listen("3000", ()=>{
    console.log("Iniciamos o Sistema!")
})

Calc.router(app)