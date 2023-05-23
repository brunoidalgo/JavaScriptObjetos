// Criando um objeto utilizando o método Object.create()

const estudante = {
 nome: "Bruno",
 curso: "Análise e Desenvolvimento de Sistemas",
 idade: 20,
}

// Cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.

const estudanteDois = Object.create(estudante)
estudanteDois.nome = "Idalgo";
estudanteDois.idade = 22;
estudanteDois.curso = "Engenharia da Computação"

console.log(estudante)
console.log(estudanteDois)