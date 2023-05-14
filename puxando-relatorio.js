const cliente = {
    nome:"Larissa",
    idade:26,
    cpf:"12345678923",
    email:"larissa.ls85@gmail.com",
    fones: ["19971412749","48971412749"],
    dependentes: [
    {
        nome:"Rose Santos",
        parentesco:"Mãe",
        dataNascimento:"23/09/1975" },
    {
        nome:"Aparecido Santos",
        parentesco:"Pai",
        dataNascimento:"27/04/1974" }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor //this = este objeto
    }
}

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof
    cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente [info]}
        `
    }
}

console.log(relatorio)