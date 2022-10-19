const express = require('express')
const Calculadora = require("./Controller/Rotas")

const app = express()

app.listen("3000", ()=>{
    console.log("Iniciamos o Sistema!")
})

Calculadora.router(app)