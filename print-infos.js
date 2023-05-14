const cliente = {
    nome:"Larissa",
    idade:26,
    cpf:"12345678923",
    email:"larissa.ls85@gmail.com"
}

//console.log(cliente.nome)
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Meus três primeiros digitos do CPF é ${cliente.cpf.substring(0,3)}.`)
