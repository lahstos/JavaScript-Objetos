class Cliente{
    constructor(nome, email, cpf, saldo){
        //definindo os atributos que eu quero desse objeto
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    //definição de métodos

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const larissa = new Cliente("Larissa", "larissa.ls85@gmail.com", "12345678995", 300)

larissa.exibirSaldo()

//ou 

//console.log(larissa)