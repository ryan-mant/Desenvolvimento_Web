let listaPessoas = [
    {
        nome: "Lucas",
        sobrenome: "Oliveira",
        idade: 27
    },
    {
        nome: "Marcos",
        sobrenome: "Santos",
        idade: 14
    },
    {
        nome: "Gi",
        sobrenome: "",
        idade: 20
    },
    {
        nome: "Aurélioooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
        sobrenome: "Da Cruz",
        idade: 23
    },
    {
        nome: "Paulo",
        sobrenome: "Mares",
        idade: 39
    }
]
function verificaIdade(listaPessoas){
    for(let i = 0; i < listaPessoas.length; i++){
        if(listaPessoas[i].idade > 18){
            console.log("Seja  bem vindo(a)! Você se chama " + listaPessoas[i].nome + " " + listaPessoas[i].sobrenome +
                 " e tem " + listaPessoas[i].idade + " anos e é maior de idade." + "\n")
        }
        else{
            console.log("Seja  bem vindo(a)! Você se chama " + listaPessoas[i].nome + " " + listaPessoas[i].sobrenome +
                 " e tem " + listaPessoas[i].idade + " anos e não é maior de idade." + "\n")
        }
    }
}
function verificaNome(listaPessoas){
    for(let i = 0; i < listaPessoas.length; i++){
        if(listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length < 3){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres. Por favor reescreva o nome: " + 
                listaPessoas[i].nome + " " + listaPessoas[i].sobrenome + "\n")
        }
        else if(listaPessoas[i].nome.length + listaPessoas[i].sobrenome.length > 50){
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres. Por favor reescreva o nome: " + 
                listaPessoas[i].nome + " " + listaPessoas[i].sobrenome + "\n")
        }
    }
}
function quantidadePessoas(listaPessoas){
    console.log("Essa lista tem : " + listaPessoas.length + " pessoas")
}
verificaIdade(listaPessoas)
verificaNome(listaPessoas)
quantidadePessoas(listaPessoas)