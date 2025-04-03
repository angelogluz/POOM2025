import { Personagem } from "./Personagem";
import prompt from "prompt-sync";
import { da, Faker, faker, pt_BR } from '@faker-js/faker';

export const fakerBR = new Faker({
    locale: [pt_BR],
});


const teclado = prompt();
const escolha = +teclado("Digite a opção: ")

const person: Personagem = new Personagem();
person.nome = "Edécio";
person.atributos.armadura = 80;
person.atributos.ataque = 1;
person.atributos.classe = "Padre";
person.atributos.defesa = 40;
person.atributos.intelecto = 99;
person.atributos.mana = 80;
person.raca = "Morto-vivo";
person.atributos.stamina = 99;
person.atributos.vida = 5;

console.table(person);


function treinarAtaque() {
    const numeroHoras: number = +teclado("Digite o número de horas para treinar ataque: ");

    const mensagem: string = person.treinarAtaque(numeroHoras);

    console.log(mensagem);

}

function treinarDefesa() {

    const numeroHoras: number = +teclado("Digite o número de horas para treinar defesa: ");

    const mensagem: string = person.treinarDefesa(numeroHoras);

    console.log(mensagem);

}

function descansar() {
    const numeroHoras: number = +teclado("Digite o número de horas para descansar: ");

    const mensagem = person.descansar(numeroHoras);

    console.log(mensagem);

}

function desafiar() {
    const nivel: number = +teclado("Digite o nível do oponente: ");
    console.log('Desafiando o oponente...');

    const mensagem = person.desafiar(nivel);

    console.log(mensagem);

}







