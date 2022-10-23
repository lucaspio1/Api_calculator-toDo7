const Calc = require("../Service/calc")
class Calculadora{

    static router(app){
        app.get("/soma", (req, res) => {
        const EntradaRota = req.query
        const numeros = Object.values(EntradaRota)
        const response = Calc.somar(...numeros)
        if (isNaN(response)) {
            res.send(`<h1> Por Favor, Digite Apenas Números. </h1>`)
        } else {
           res.send(`<h1>${response}</h1>`) 
        }
        
       
})           
        app.get("/multiplicacao", (req,res)=>{
            const EntradaRota = req.query
            const numeros = Object.values(EntradaRota)
            const response = Calc.multiplicar(...numeros)
              if (isNaN(response)) {
            res.send(`<h1> Por Favor, Digite Apenas Números. </h1>`)
        } else {
           res.send(`<h1>${response}</h1>`) 
        }
        })       
        app.get("/divisao", (req,res)=>{
            const EntradaRota = req.query
            const numeros = Object.values(EntradaRota)
            const response = Calc.dividir(...numeros)
              if (isNaN(response)) {
            res.send(`<h1> Por Favor, Digite Apenas Números. </h1>`)
        } else {
           res.send(`<h1>${response}</h1>`) 
        }
        })    
        app.get("/subtracao", (req,res)=>{
            const EntradaRota = req.query
            const numeros = Object.values(EntradaRota)
            const response = Calc.subtrair(...numeros)
              if (isNaN(response)) {
            res.send(`<h1> Por Favor, Digite Apenas Números. </h1>`)
        } else {
           res.send(`<h1>${response}</h1>`) 
        }
        })
    

 }
}
module.exports = Calculadora