const cliente = {
    nome:"Bruno" ,
    identificação: 44157-0, 
    idade: 21,
    telefone: [11998775497, 11994532156], // O tipeof de um array retorna um objeto.
    };

cliente.endereco = [ // O tipeof de um array retorna um objeto.
    {
        rua: "Prudente de Faria",
        numero: 2456,
        apartamento: false,
        complemento: "Apt 34",
    },
cliente.enderecoEletronico = {
    email:["bruno@cliente.com.br", "brunoidalgo@dominio.com.br"]
},
];

function ligaParaCliente(emailPessoal, emailComercial){
    console.log(`Enviando email para ${emailPessoal}`);
    console.log(`Enviando email para ${emailComercial}`);
}

// ligaParaCliente(cliente["telefone"][0], cliente["telefone"][1]); ao invés de usarmos a referência com a virgula.

ligaParaCliente(...cliente.enderecoEletronico['email']) // Sintaxe de espalhamento faz com que usemos a reticências (...) 
                                        // usar a (...) faz com que a função exiba os dados dentro da referência.


// const encomenda = {
//     destinatario:cliente.nome,
//     rua: cliente.endereco[0].rua,
//     numero: cliente.endereco[0].numero,
//     apartamento: cliente.endereco[0].apartamento,
//     complemento:cliente.endereco[0].complemento
// };

const encomenda = {
    destinatario: cliente.nome, // Desse modo podemos exibir todos as propriedades do objeto referênciado.
    ...cliente.endereco[0]
}

console.log(encomenda)



const emailPromocao = {
    nome:cliente.nome,
    ...cliente.enderecoEletronico[0],
}

console.log(emailPromocao)