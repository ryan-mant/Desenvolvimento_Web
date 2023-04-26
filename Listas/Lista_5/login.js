var pessoas= [
    pessoa1={
        nome: "Fabiana",
        idade: 36,
        ehAdmin: true,
        email: "fabiana.souz@gmail.com"
    },
    pessoa2 ={
        nome: "Renato",
        idade: 25,
        ehAdmin: false,
        email: "renato.shaolin@outlook.com"
    },
    pessoa3= {
        nome: "Nicolas",
        idade: 17,
        ehAdmin: false,
        email: "nicolas.matadordeporco@hotmail.com"
    },
    pessoa4= {
        nome: "Vanessa",
        idade: 16,
        ehAdmin: false,
        email: "vanessinhalinda@gmail.com"
    },
    pessoa5= {
        nome: "Renan",
        idade: 40,
        ehAdmin: true,
        email: "renan.367@hotmail.com"
    }
]
for(let i= 0; i < pessoas.length; i++){
    if(pessoas[i].ehAdmin == true){
        console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você é admin do sistema, enviamos um email para " + pessoas[i].email + " para você criar uma senha")
    }
    else{
        console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você não é admin do sistema, enviamos um email para " + pessoas[i].email + " para você criar uma senha")
    }
}