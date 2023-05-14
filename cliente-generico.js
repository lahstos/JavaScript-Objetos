function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo == valor
    }
}

const larissa = new Cliente("Larissa","12345678910", "larissa.ls85@gmail.com", 2500)

console.log(larissa)