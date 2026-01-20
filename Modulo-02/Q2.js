class Pessoa {
constructor(nome, idade){
this.nome = nome;
this.idade = idade;
}
}
let pessoa1 = new Pessoa("Rafael", 20);
let pessoa2 = new Pessoa("Vitória", 15);
pessoa1.idade = 25;
pessoa2.nome = "João";
console.log(pessoa1.idade);
console.log(pessoa2.nome);
