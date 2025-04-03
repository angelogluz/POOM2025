import { Atributos } from "./Atributos";
import { fakerBR } from "./Main";
import { Util } from "./Util";

export class Personagem {
    nome: string = "";
    raca: string = "";
    atributos: Atributos = new Atributos();
    

    // Missão 1
    treinarAtaque(numeroHoras: number): string {
        const numeroGerado: number = Util.randomizar(15, 30)
        this.atributos.ataque = 10 + ((this.atributos.ataque * 1.1) * numeroHoras)
        this.atributos.vida -= numeroGerado * numeroHoras;
        const morreu: boolean = this.atributos.vida < 0;
        if (morreu) {
            throw new Error(`${this.nome} morreu!`)
        }
        return (`${this.nome} treinou ataque por ${numeroHoras} horas e perdeu ${numeroGerado * numeroHoras} de vida!`);
    }


    // Missão 2
    treinarDefesa(numeroHoras: number): string {
        const numeroGerado: number = Util.randomizar(15, 30)
        this.atributos.defesa = 10 + ((this.atributos.defesa * 1.1) * numeroHoras)
        this.atributos.vida -= numeroGerado * numeroHoras;
        const morreu: boolean = this.atributos.vida < 0;
        if (morreu) {
            throw new Error(`${this.nome} morreu!`)
        }
        return (`${this.nome} treinou defesa por ${numeroHoras} horas e perdeu ${numeroGerado * numeroHoras} de vida!`);
    }

    // Missão 3
    descansar(numeroHoras: number) {
        const numeroGerado: number = Util.randomizar(15, 30)
        this.atributos.vida += numeroGerado * numeroHoras;
        if (this.atributos.vida > 100) {
            const energiaExcedida: number = this.atributos.vida - 100;
            this.atributos.vida = 100;
            const percentual: number = energiaExcedida / 100;
            this.atributos.defesa -= this.atributos.defesa * percentual;
            this.atributos.ataque -= this.atributos.ataque * percentual;
        }
        return (`${this.nome} descansou por ${numeroHoras} horas e ganhou ${numeroGerado * numeroHoras} de vida!`);
    }

    // Missão 4
    desafiar(nivel: number) {
        let mensagem: string = "";
        // Deverá ser gerado um nome aleatório para o oponente (utilizar a biblioteca faker.js)
        const nomeOponente = fakerBR.person.firstName();
        // Deve ser criado um personagem com atributos aleatórios (utilizar a biblioteca faker.js)
        const oponente: Personagem = new Personagem();
        oponente.nome = nomeOponente;
        oponente.raca = fakerBR.person.firstName();
        oponente.atributos.classe = fakerBR.person.firstName();
        oponente.atributos.nivel = nivel;
        oponente.atributos.vida = Util.randomizar(50, 100);
        oponente.atributos.ataque = Util.randomizar(10, 20) * nivel;
        oponente.atributos.defesa = Util.randomizar(10, 20) * nivel;
        oponente.atributos.stamina = Util.randomizar(10, 20);
        oponente.atributos.mana = Util.randomizar(10, 20);
        oponente.atributos.poderAtaque = Util.randomizar(10, 20);
        oponente.atributos.intelecto = Util.randomizar(10, 20);
        oponente.atributos.armadura = Util.randomizar(10, 20);
        oponente.atributos.xp = Util.randomizar(10, 20);


        // Deverá ser rodado um “dado” para decidir quem irá realizar o ataque até que o herói ou o desafiado seja derrotado.
        while (true) {
            const dado: number = Util.randomizar(1, 2);
            if (dado === 1) {
                // O herói ataca
                const dano: number = 1 + Math.max(0, this.atributos.ataque - oponente.atributos.defesa);
                oponente.atributos.vida -= dano;
                console.log(`${this.nome} atacou ${oponente.nome} e causou ${dano} de dano!`);
            } if (dado === 2) {
                // O oponente ataca
                const dano: number = 1 + Math.max(0, oponente.atributos.ataque - this.atributos.defesa);
                this.atributos.vida -= dano;
                console.log(`${oponente.nome} atacou ${this.nome} e causou ${dano} de dano!`);
            }
            if (this.atributos.vida <= 0) {
                mensagem = (`${this.nome} foi derrotado!`);
                break;

            }
            if (oponente.atributos.vida <= 0) {
                mensagem = (`${oponente.nome} foi derrotado!`);
                break;

            }
        }
        // O personagem que vencer a batalha deverá ganhar 10% de XP e o perdedor perderá 10% de XP.
        if (this.atributos.vida > 0) {
            this.atributos.xp += 3 + oponente.atributos.xp * 0.1;
            oponente.atributos.xp -= Math.max(0, 3 + oponente.atributos.xp * 0.1);
            mensagem += (`\n${this.nome} ganhou 10% de XP!`);
        } else {
            oponente.atributos.xp -= Math.max(0, 3 + oponente.atributos.xp * 0.1);
            this.atributos.xp += 3 + oponente.atributos.xp * 0.1;
            mensagem += (`\n${oponente.nome} ganhou 10% de XP!`);
        }
        return mensagem;
    }

}