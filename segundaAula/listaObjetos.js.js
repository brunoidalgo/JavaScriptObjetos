// Adicionando novas propriedades por fora do objeto:

const estudante = {
    nome:"Bruno" ,
    matricula: 44157-0, 
    curso: "Análise e Desenvolvimento de Sistemas",
    materias: ["Lógica de programação", "Arquitetura de software", "Sistemas operacionais"],
    };

//Podemos adicionar direto no objeto inicial estudante, mas dessa forma podemos adicionar depois de forma simples:

estudante.endereco = [
    {
        rua: "Prudente de Faria",
        numero: 2456,
        apartamento: false,
        complemento: "Apt 34",
    }
];

// Dessa forma podemos adicionar uma propriedade em array.

estudante.endereco.push ( 
{
    rua: "Joseph Ladder" ,
    numero: 404 ,
    apartamento: true,
} );

// console.log(estudante)

// Formará uma lista apenas de objetos que contenham a propriedade endereco ( true ).

const listaApartamento = estudante.endereco.filter( 
    
    (endereco) => endereco.apartamento === true

)

console.log(listaApartamento)