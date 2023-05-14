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
//const propsClientes = Object.keys(cliente);
//console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de Seguro de Vida para ${obj.nome}.`);
    }
}

//console.log(Object.values(cliente))
//console.log(Object.entries(cliente))
oferecerSeguro(cliente)