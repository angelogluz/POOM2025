import { Personagem } from "./Personagem";
import prompt from "prompt-sync";
import { Faker, faker, pt_BR } from '@faker-js/faker';

export const fakerBR = new Faker({
    locale: [pt_BR],
  });

  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());
  console.log(fakerBR.person.firstName());

const teclado = prompt();
const escolha = +teclado("Digite a opção: ")

const person: Personagem = new Personagem();
person.nome = "Edécio";
person.armadura = 80;
person.ataque = 1;
person.classe = "Padre";
person.defesa = 40;
person.intelecto = 99;
person.mana = 80;
person.raca = "Morto-vivo";
person.stamina = 99;
person.vida = 5;

console.table(person);

let person2 = {...person};

person2.nome = "Gladimir";

console.log(person2.nome) // Gladimir
console.log(person2.stamina) // 99
console.log(person.nome) // Edécio
console.log(person.stamina) // 99

// Missão 1
function treinarAtaque(personagem:Personagem, numeroHoras: number) {
    const numeroGerado: number = randomizar(15, 30)
    personagem.ataque = 10 + ((personagem.ataque*1.1)*numeroHoras)
    personagem.vida -= numeroGerado * numeroHoras;
    const morreu:boolean = personagem.vida < 0;
    if(morreu){
        throw new Error(`${personagem.nome} subiu!`)
    }
}

function randomizar (base: number, limite: number){
    return Math.floor(base + Math.random()*limite-base);
}
