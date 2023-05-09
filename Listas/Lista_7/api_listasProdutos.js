let express = require('express')
let app = express()
let port = 8000

let produtos = [
    {
        nomeProduto: "Alvejante",
        descricao: "Otimo para limpezas Dificeis",
        valor: 8.99,
        criadoEm: "5 de Fevereiro",
        emEstoque: true
        
    },
    {
        nomeProduto: "Desengordurante",
        descricao: "Perfeito para limpar superficies engorduradas",
        valor: 12.99,
        criadoEm: "26 de Janeiro",
        emEstoque: false
    },
    {
        nomeProduto: "Detergente",
        descricao: "O mais cheiroso do mercado",
        valor: 10.99,
        criadoEm: "14 de Maio",
        emEstoque: true
    },
    {
        nomeProduto: "Palha de aço inox",
        descricao: "Remove sujeiras dificeis",
        valor: 3.99,
        criadoEm: "19 de Abril",
        emEstoque: true
    },
    {
        nomeProduto: "Lava Louças",
        descricao: "Automatizada para suas necessidades",
        valor: 199.99,
        criadoEm: "5 de Junho",
        emEstoque: false
    },
]

app.get('/produtos', function(req, res){
    res.send(produtos)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}`)
})