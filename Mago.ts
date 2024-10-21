import { Heroe } from "./Heroe";

export class Mago extends Heroe {
    private mana : number = 0

    atacar() {
        console.log(`${this.nombre} lanza un hechizo hacia el enemigo.`);
    }

    defender() {
        console.log(`${this.nombre} lanza un escudo magico.`);
        this.escudo += 50;
    }

    aumentarVida() {
        console.log(`${this.nombre} bebe una pocion curativa.`);
        this.vida += 50; 
    }

    aumentarNivel() {
        console.log(`${this.nombre} sube de nivel.`);
        this.nivel += 1;
    }

    aumentarMana() {
        console.log(`${this.nombre} bebe una pocion de mana.`);
        this.mana += 50;
    }

    setMana(mana:number) {
        this.mana = mana;
    }

    getMana() {
        console.log(this.mana);
    }
}