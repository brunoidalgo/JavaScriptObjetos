const person = {fname:"John", lname:"Doe", age:25, email:"johndoe@dominio.com"}; 

let txt = "";
for (let chave in person) {
  console.log(txt += person[chave] + " ");
}