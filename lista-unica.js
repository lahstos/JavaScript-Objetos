const clientes = [
    {
    nome:"Larissa",
    cpf:"12345678923",
    dependentes: [{
        nome:"Rose Santos",
        parentesco:"Mãe",
        dataNascimento:"23/09/1975" },
    {
        nome:"Aparecido Santos",
        parentesco:"Pai",
        dataNascimento:"27/04/1974"
         }],
    },
    {
        nome: "Geovana",
        cpf: "01255587985",
        dependentes: [{
            nome: "Bruna",
            parentesco: "filha",
            dataNascimento: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

//console.log(listaDependentes)
console.table(listaDependentes)