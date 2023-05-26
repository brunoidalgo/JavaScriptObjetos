const cliente = {
    nome: "Bruno",
    estadoCivil: "Casado",
    idade: 21,
    email:"bruno@dominio.com.br",
    cpf:11233344432,
    altura:1.83,
};

console.log(`O cliente ${cliente["nome"]} tem a idade ${cliente["idade"]} e seu email é ${cliente["email"]}`)

const chaves = ["nome", "cpf", "email", "idade", "altura", "estadoCivil"];

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});

