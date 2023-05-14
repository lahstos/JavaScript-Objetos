const cliente = {
    nome:"Larissa",
    idade:26,
    cpf:"12345678923",
    email:"larissa.ls85@gmail.com",
    fones: ["19971412749","48971412749"]
}

cliente.dependentes = {
    nome:"Rose",
    parentesco:"Mãe",
    dataNascimento:"27/09/1975"
}

console.log(cliente)

cliente.dependentes.nome = "Rose Santos"

console.log(cliente)