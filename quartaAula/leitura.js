const dados = require("./cliente.json");
// Esse comando require() nesse caso vai puxar a informação da objeto referênciado.

//console.log(dados);
//console.log(typeof dados);

const objectString = JSON.stringify(dados);

//console.log(objectString);

//console.log(typeof objectString);
//console.log(objectString.substring(1, 14));




const objetoCliente = JSON.parse(objectString);
console.log(objetoCliente) 
