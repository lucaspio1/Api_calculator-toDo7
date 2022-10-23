const Calc = require("../Service/calc")

test("Retorna a Soma dos números",()=>{
    expect(Calc.somar(12,3)).toBe(15)
 })
 
 test("Retorna erro ao digitar letra",()=>{
    expect(Calc.somar(`a`,3)).toBe(NaN)
 })

 test("Retorna a Divisão dos números",()=>{
    expect(Calc.dividir(60,3)).toBe(20)
 })
 
 test("Retorna erro ao digitar letra",()=>{
    expect(Calc.dividir(`was`,3)).toBe(NaN)
 })

 test("Retorna a multiplicação dos números",()=>{
    expect(Calc.multiplicar(20,20)).toBe(400)
 })
 
 test("Retorna erro ao digitar letra",()=>{
    expect(Calc.multiplicar(`oi`,`a`)).toBe(NaN)
 })

 test("Retorna a Subtração dos números",()=>{
    expect(Calc.subtrair(100,50)).toBe(50)
 })
 
 test("Retorna erro ao digitar letra",()=>{
    expect(Calc.subtrair(2,`menos`)).toBe(NaN)
 })


