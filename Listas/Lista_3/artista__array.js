var Gege ={
    nomeDoArtista: "Gegé Do Forró",
    AnoPrimeiroCD: 1998,
    melhoresMusicas:["Campo Grande", "Aquela Mulher","Bebado e Quente nesse mundo Frio"],
    integrantes:[{
            nomeCompleto: "Gérffeson Alvez da Cruz",
            paisDeOrigem: "Brasil",
            idade: 42
        }],
    estilo: "Forró"
}
var RocketMoons ={
    nomeDoArtista: "Rocket Moons",
    AnoPrimeiroCD: 2011,
    melhoresMusicas:["I'm going to the Moon","Fight"],
    integrantes: [
        {
            nomeCompleto: "Billy Anderson White",
            paisDeOrigem: "Canadá",
            idade: 36
        },
        {
            nomeCompleto: "Andrew Morgans Patterson",
            paisDeOrigem: "Inglaterra",
            idade: 34
        },
        {
            nomeCompleto: "Joanna Lincoln Harry",
            paisDeOrigem: "Canadá",
            idade: 28
        }
    ],
    estilo: "Rock"

}
var Mary ={
    nomeDoArtista: "Mary Down",
    AnoPrimeiroCD: 2018,
    melhoresMusicas:["Freedom", "Heavens Garden"],
    integrantes:[
        {
            nomeCompleto: "Mary Cristian Adam",
            paisDeOrigem: "Estados Unidos",
            idade: 25
        }
    ],
    estilo: "Pop"
}
var database =[]
database.push(Gege)
database.push(RocketMoons)
database.push(Mary)
console.log(database)

database.sort()
console.log(database)

database.pop(database)
console.log(database)

