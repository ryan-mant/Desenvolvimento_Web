var contaCorrente = {
    saldo: 1000,
    faturaAtual: 400,
    creditoDisponivel: 500,
    extrato: {
        entrada:[ 
            {
            data: "2 de Abril",
            valor: 90
            }
        
        ],
        saida:[
            {
                data: "3 de Abril",
                valor: 400,
                descricao: "Pix pro amigo"
            }
        ]
           
        
    },
    exibirExtrato:Boolean
}
if(contaCorrente.exibirExtrato(contaCorrente.saldo - contaCorrente.faturaAtual > 0) == true){
    console.log("Você possui saldo para pagar")
    console.log(contaCorrente.extrato)
}
else{
    console.log("Você não possui saldo suficiente para pagar a fatura, experimente pegar credito para conseguir pagar", "Você possui: ", contaCorrente.creditoDisponivel, "de saldo em créditos")
    
}