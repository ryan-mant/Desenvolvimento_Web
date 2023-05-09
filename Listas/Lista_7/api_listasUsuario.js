let express = require('express')
let app = express()
let port = 9000

let users = [
    {
        nomeDeUsuario: "AndréAula",
        criadoEm: "28 de Fevereiro",
        idade: 19,
        email: "andrezin89@gmail.com",
        isAdmin: false,
        telefone: ["11 87263-0964", "11 92017-5374"],
        endereco: ["Rua Lapo De Almeida Cristão n890"]
    },
    {
        nomeDeUsuario: "Maria Paula",
        criadoEm: "16 de Agosto",
        idade: 16,
        email: "maria.sPaula@gmail.com",
        isAdmin: false,
        telefone: ["13 67501-9280", "11 86740-9231"],
        endereco: ["Rua Jardim Nazaré Pinho n542"]
    },
    {
        nomeDeUsuario: "Marcos Socram",
        criadoEm: "3 de Janeiro",
        idade: 22,
        email: "marcosLi.contato@gmail.com",
        isAdmin: true,
        telefone: ["21 09847-3197", "21 85730-1253"],
        endereco: ["Rua Da Cruz apto456"]
    },
    {
        nomeDeUsuario: "Laura Al",
        criadoEm: "14 de Janeiro",
        idade: 25,
        email: "laura.alves45@hotmail.com",
        isAdmin: true,
        telefone: ["45 85700-9423", "45 55547-8765"],
        endereco: ["Rua Governador Luis Andrade n155"]
    },
    {
        nomeDeUsuario: "Adailto",
        criadoEm: "8 de Março",
        idade: 37,
        email: "marieluana,adailto@gmail.com",
        isAdmin: false,
        telefone: ["27 80125-6639", "27 66002-5498"],
        endereco: ["Rua Mauricio Porta n400"]
    },
]

app.get('/usuarios', function(req, res){
    res.send(users)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}`)
})