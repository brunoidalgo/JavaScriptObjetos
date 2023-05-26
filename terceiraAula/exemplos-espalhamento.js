// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro",
//     capa: "capa goblin +3"
//    }
   
//    const equipoGuerreiro = {
//     espada: "Andúril",
//     capa: "capa élfica +2"
//    };

//    const guerreiro = {...fichaGuerreiro,...equipoGuerreiro}

//    console.log(guerreiro)


const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }


   const personagem = {
    ...mago, ...ranger, ...guerreiro
   }

   console.log(personagem)

