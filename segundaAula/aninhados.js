// Adicionando novas propriedades por fora do objeto:

const estudante = {
    nome:"Bruno" ,
    matricula: 44157-0, 
    curso: "Análise e Desenvolvimento de Sistemas",
    materias: ["Lógica de programação", "Arquitetura de software", "Sistemas operacionais"],
    };

    //Podemos adicionar direto no objeto inicial estudante, mas dessa forma podemos adicionar depois de forma simples:

    estudante.endereco = {
        rua: "Prudente de Faria",
        numero: 2456,
        apartamento: 34,
        complemento: "Apt 34"
    };

    console.log(estudante["endereco"])

// const chave = ["nome", "matricula", "curso", "materias", "rua", "numero", "apartamento", "complemento" ];

// chave.forEach(propriedade => {
//     console.log(`A propriedade ${propriedade} tem o valor ${estudante["endereco"][propriedade]}`)
// });