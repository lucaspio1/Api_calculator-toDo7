const Calc = require("../Service/calc")

test("Retorna a Soma dos números",()=>{
    expect(Calc.somar(2,3)).toBe(5)
 })
 
