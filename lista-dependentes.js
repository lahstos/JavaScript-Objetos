const cliente = {
    nome:"Larissa",
    idade:26,
    cpf:"12345678923",
    email:"larissa.ls85@gmail.com",
    fones: ["19971412749","48971412749"],
    dependentes: [{ //array inicia
        nome:"Rose Santos",
        parentesco:"Mãe",
        dataNascimento:"23/09/1975"
  }] //array finaliza
}

cliente.dependentes.push({ //push "Array"
    nome:"Aparecido Santos",
    parentesco:"Pai",
    dataNascimento:"27/04/1974"
})

//console.log(cliente)

//ou

//filtrar por apenas uma pessoa pela data de nascimento
const pai = cliente.dependentes.filter(dependentes => 
dependentes.dataNascimento==="27/04/1974")

console.log(pai[0].nome)

        