const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliadoUm: {
      nome: "Saruman",
      classe: "mago"
    },
   alidadoDois: {
        nome: "Hobbit",
        nivel: "8",
        classe: "Viajante"
    },
    status: "desaparecido"
   };

delete objPersonagem.aliadoUm;
delete objPersonagem["status"]; /// Comando usado para deletar uma propriedade dentro do objeto.

console.log(objPersonagem["status"]);

// console.log(objPersonagem.aliado["nome"]);

console.log(objPersonagem.alidadoDois["nome"]);
console.log(objPersonagem["aliadoUm"]);


// O valor de retorno do operador delete é um booleano, ou seja,  
// retorna sempre (true ou false) para cada operação. Porém, 
// é importante notar que ele não retorna false se tentarmos remover,
// por exemplo, uma propriedade que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true