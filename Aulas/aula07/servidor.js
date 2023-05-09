const express = require('express')
const app = express()
const port = 8000
let produtos = [
    {
        id: 1,
        nome: "Acelora",
        descricao: "Bom pa gipe, bom pa toce",
        valor: 2
    },
    {
        id: 2,
        nome:"Leite Compensado",
        descricao: "Picole",
        valor: 5
    }
]

app.get("/produtos", function (req, res){
    return res.send(produtos)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}`)
})