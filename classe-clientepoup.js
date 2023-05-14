class Cliente {
    constructor (nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo =saldo
    }
    depositar (valor){
        this.saldo += valor
    }

    exibirSaldo () {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca (valor){
        this.saldoPoupanca += valor
    }
}

const larissa = new ClientePoupanca("Larissa","larissa.ls85@gmail.com","12345678910",100,200)

console.log(larissa)

larissa.depositar(50)
larissa.depositarPoupanca(50)

console.log(larissa)