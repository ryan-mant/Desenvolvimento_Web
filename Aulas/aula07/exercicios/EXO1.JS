const express = require ('express')
const app = express()
const port = 4000

let bandas = [
    {
        nomeBanda : "Cueca Branca",
        pricipaisMusicas: ["Olha Se Você me Ama", "Lapis Azul"],
        integrantes: [
            {
                nome: "Namuel Jomes",
                paisDeOrigem: "Brasil",
                idade: 43
            },
            {
                nome: "Meu Jorge",
                paisDeOrigem: "Brasil",
                idade: 49
            },
            {
                nome: "Gabriel Montero",
                paisDeOrigem: "Brasil",
                idade: 25
            }
        ]
    },
    {
        nomeBanda: "Caldeira",
        pricipaisMusicas: ["Olha Só"],
        integrantes: [
            {
                nome: "Luciano Thor",
                paisDeOrigem: "Jamaica",
                idade: 21
            },
            {
                nome: "Marcos Mi-off",
                paisDeOrigem: "Senegal",
                idade: 40
            },
            {
                nome: "Faustona",
                paisDeOrigem: "Brasil",
                idade: 50
            }
        ]
    }
]

app.get("/bandas", function(req, res){
    return res.send(bandas)
})

app.listen(port, function(){
    console.log(`servidor aberto http://localhost:${port}`)
})