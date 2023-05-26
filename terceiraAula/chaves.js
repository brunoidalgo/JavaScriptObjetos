const cliente = {
    nome:"Bruno" ,
    identificação: 44157-0, 
    idade: 21,
    email:"bruno@cliente.com.br",
    telefone: [11998775497, 11994532156], // O tipeof de um array retorna um objeto.
    };

cliente.endereco = [ // O tipeof de um array retorna um objeto.
    {
        rua: "Prudente de Faria",
        numero: 2456,
        apartamento: false,
        complemento: "Apt 34",
    }
];

const chavesDoObjeto = Object.keys(cliente); // vai extrair todas as chaves do objeto.

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("endereco") ){ // Se não tiver a chave endereco irá executar o bloco de código.
    console.error("Erro. Cliente não tem endereço cadastrado")
}


// console.log(Math.floor(Math.random() * 100) + 1); // Exibirá um número aleatório entre 1 e 100