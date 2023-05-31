const express = require('express')
const app = express()
const port = 8900
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://admin:admin123@appdatabase.g8o6nwg.mongodb.net/"
const Animal = require("./models/animal")
app.use(express.json())

app.get("/listar-animais", async(req, res) => {
    try{
        let animais = await Animal.find()
        return res.status(200).json(animais)
    }catch(error){
        return res.status(500).json(error)
    }
})

app.post("/adicionar-animal", async(req, res) =>{
    let {nome, raca, peso} = req.body
    let animal = {
        nome,
        raca,
        peso
    }

    try{
        await Animal.create(animal)
       return res.status(201).json({message: "animal cadastrado"}) 
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

mongoose.connect(connectionString, {
    dbName: "SiteLoja"
}).then(()=> {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error)=>{
    console.log(error)
})