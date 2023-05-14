const cliente = {
    nome:"Larissa",
    idade:26,
    cpf:"12345678923",
    email:"larissa.ls85@gmail.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["nome"])