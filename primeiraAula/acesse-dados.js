const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
  };

  const estimacao = ["nome", "dataDeNascimento", "brinquedoFavorito", "cor"];


estimacao.forEach((propriedade) => {
    console.log(`A propriedade ${propriedade} tem o valor: ${pet[propriedade]}`)
})