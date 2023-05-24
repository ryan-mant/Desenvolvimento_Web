const express = require('express')
const app = express()
const port = 8500
app.use(express.json())

let bancoDeDadosProdutos = []

app.post("/adicionar-produto", (req, res)=> {
    let body = req.body
    console.log(body)

    bancoDeDadosProdutos.push(body)

    return res.status(201).json("produto adicionado")
})

app.get("/listar-produtos", (req, res)=>{
    return res.status(200).json(bancoDeDadosProdutos)
})

app.listen(port, ()=>{
        console.log(`servidor online em http://localhost:${port}`)
})