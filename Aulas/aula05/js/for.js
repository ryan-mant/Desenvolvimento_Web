var tarefas = [
    "Lavar Louça",
    "Lavar Banheiro",
    "Lavar Roupa",
    "Passear com cachorro",
]
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < tarefas.length; i++) {
    if (tarefas[i] == "Lavar Banheiro") {
        break
    }
}
for (var x = 0; x > numeros.length; x++) {
    if (numeros[x] % 2 == 0) {
        console.log(`${numeros[x]} é par`)
    }
    else {
        console.log(`${numeros[x]} é impar`)
    }

}
for (var tarefa of tarefas) {
    console.log(tarefa)
}