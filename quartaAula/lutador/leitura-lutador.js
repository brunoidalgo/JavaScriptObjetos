const lutador = require("./lutador.json");

console.log(lutador.patrocinadores[0], lutador.patrocinadores[1], lutador.patrocinadores[2]);
console.log(`A altura do lutador ${lutador.nome} é ${lutador["altura"]} e seus pratocinadores são ${lutador.patrocinadores[0]}, ${lutador.patrocinadores[1]} e ${lutador.patrocinadores[2]}`);