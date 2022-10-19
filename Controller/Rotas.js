const Calc = require("../Service/calc")
class Calculadora{
    static router(app){
        app.get("/soma", (req, res) => {
        const query = req.query
        const numeros = Object.values(query)
        const response = ServiceConta.somar(...numeros)
        res.send(`<h1>${response}</h1>`)
       
})           
        app.get("/multiplicacao", (req,res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.multiplicar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })       
        app.get("/divisao", (req,res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.dividir(...numeros)
            res.send(`<h1>${response}</h1>`)
        })    
        app.get("/subtracao", (req,res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceConta.subtrair(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
    

 }
}
module.exports = Calculadora