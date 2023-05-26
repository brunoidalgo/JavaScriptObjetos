const estudante = {
    Nome:"Bruno" ,
    Matrícula: 44157-0, 
    Curso: "Análise e Desenvolvimento de Sistemas",
    Matérias: ["Lógica de programação", "Arquitetura de software", "Sistemas operacionais"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) // This significa o objeto atual que estamos trabalhando. 
        {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor; // Vai pegar o valor atribuido a propriedade saldo e efetuar a operação.
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`) // O this vai mostrar o saldo depois de ter sido alterado.
        }
    },
};

estudante.efetuaPagamento(250)