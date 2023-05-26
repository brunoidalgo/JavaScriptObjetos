const cliente = {
    nome: "Bruno",
    idade: 21,
    cpf: "11122235560",
    email: "bruno@dominio.com",
};

// Acessando dados

console.log(`O nome do cliente é ${cliente.nome} esse cliente tem ${cliente.idade} anos e seu e-mail é ${cliente.email}`);

// Exibindo uma parte da string com métodos

console.log(`Os três primeiros digitos do cpf do cliente ${cliente.nome} é ${cliente.cpf.substring(0, 3)}`);

