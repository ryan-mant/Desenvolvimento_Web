var salarioLarissa = 2000
var salarioMaria = 5000
var salarioJonas = 1000
var salarioFrancisco = 3000
var reajuste = 10

var valorReajusteLarissa = salarioLarissa * reajuste / 100
var valorReajusteMaria = salarioMaria * reajuste / 100
var valorReajusteJonas = salarioJonas * reajuste / 100
var valorReajusteFrancisco = salarioFrancisco * reajuste / 100

var salarioFinalLarissa = salarioLarissa + valorReajusteLarissa
var salarioFinalMaria = salarioMaria + valorReajusteMaria
var salarioFinalJonas = salarioJonas + valorReajusteJonas
var salarioFinalFrancisco = salarioFrancisco + valorReajusteFrancisco

console.log("Larissa ganha R$", salarioLarissa, "com o reajuste de", reajuste, "% passa a ganhar", "R$", salarioFinalLarissa)
console.log("Maria ganha R$", salarioMaria, "com o reajuste de", reajuste, "% passa a ganhar", "R$", salarioFinalMaria)
console.log("Jonas ganha R$", salarioJonas, "com o reajuste de", reajuste, "% passa a ganhar", "R$", salarioFinalJonas)
console.log("Francisco ganha R$", salarioFrancisco, "com o reajuste de", reajuste, "% passa a ganhar", "R$", salarioFinalFrancisco)

