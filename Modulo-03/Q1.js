class Pessoa {
constructor(nome){
this.nome = nome;
}
falar(frase){
console.log(`${this.nome} diz: ${frase}`)
}
}
let pessoa1 = new Pessoa("Luana");
pessoa1.falar("Bom dia!");
