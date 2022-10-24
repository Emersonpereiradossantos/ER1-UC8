


//Permitir o cadastro da peça somente se ela pesar mais de 100g.
//Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem lista de peças está lotada.
//Validar se o nome da peça possui mais de 3 caracteres.

var listaPeca = ["vibrabequim, amortecedor, disco de freio"]

//existe espaço na lista?
if (listaPeca.length < 10){
    //é possível cadastrar.
    console.log("é possível cadastrar mais peças")
}else{
    //não é possível cadastrar.
    /*
    */
    console.log("A lista está de buxim cheio")
}

let peso = 500
if(peso<100){
    console.log("A peça precisa ter no mínimo 100g")
}else{
    console.log("A peça possui tamanho adequado")
}

var Emerson = "ok"
let nomePeca = "caixa de cambio"
if (nomePeca.length>3){
    console.log("O tamanho do nome da peça esta adequado")
}else{
console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")
}



