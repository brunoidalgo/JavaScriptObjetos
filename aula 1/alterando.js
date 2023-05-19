const professorUm = {
    nome: "Bruno",
    profissao: "Professor de Engenheria",
    idade: 28,
};

professorUm.idade = 30;

console.log(professorUm.idade);

professorUm.idade = 26;

professorUm.nome = "Bruno Idalgo"

console.log(`Agora a idade do professor ${professorUm["nome"]} é ${professorUm["idade"]} anos `)

professorUm.nome = "Bruno Empke";

console.log(professorUm.nome);

professorUm.profissao = "Engenheiro";

console.log(professorUm.profissao);

console.log(professorUm);

console.log(`Agora o nome do professor é ${professorUm["nome"]}`)

console.log(`Agora a idade do professor ${professorUm["nome"]} é ${professorUm["idade"]} anos `)