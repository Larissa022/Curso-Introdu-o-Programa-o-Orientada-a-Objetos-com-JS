class Pessoa {
constructor(nome){
this.nome = nome;
}
}
class Estudante extends Pessoa {
constructor(nome, matricula){
super(nome);
this.matricula = matricula;
}
apresentar(){
console.log(`Olá! Eu sou ${this.nome} e minha matrícula é ${this.matricula}`)
}
}
let aluno1 = new Estudante("Leticia", 123321);
aluno1.apresentar();
