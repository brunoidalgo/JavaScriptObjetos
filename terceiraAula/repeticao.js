const estudante = {
    nome:"Bruno" ,
    matricula: 44157-0, 
    curso: "Análise e Desenvolvimento de Sistemas",
    materias: ["Lógica de programação", "Arquitetura de software", "Sistemas operacionais"], // O tipeof de um array retorna um objeto.
    };

estudante.endereco = [ // O tipeof de um array retorna um objeto.
    {
        rua: "Prudente de Faria",
        numero: 2456,
        apartamento: false,
        complemento: "Apt 34",
    }
];

// Percorerrá todo o objeto e retornará as chaves -> propriedades.

for (let chave in estudante) { // Vai pegar cada chave do objeto cliente.
    let tipo = typeof estudante[chave]; // Filtro que irá checar o tipo de cada valor do objeto.
    if (tipo != "object" && tipo != "function"){
        console.log(`A chave ${chave} tem o valor ${estudante[chave]}`)
    }
    

}

