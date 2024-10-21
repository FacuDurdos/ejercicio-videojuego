import { Heroe } from "./Heroe";

export class Luchador extends Heroe {
    private fuerza : number = 0

    atacar() {
        console.log(`${this.nombre} realiza un golpe con la espada al enemigo.`);
    }

    defender() {
        console.log(`${this.nombre} se equipa el escudo.`);
        this.escudo += 100;
    }

    aumentarVida() {
        console.log(`${this.nombre} bebe una pocion curativa.`);
        this.vida += 50; 
    }

    aumentarNivel() {
        console.log(`${this.nombre} sube de nivel.`);
        this.nivel += 1;
    }

    aumentarFuerza() {
        console.log(`${this.nombre} incrementa su fuerza.`);
        this.fuerza += 50;
    }

    setFuerza(fuerza:number) {
        this.fuerza = fuerza;
    }

    getFuerza() {
        console.log(this.fuerza);
    }
}