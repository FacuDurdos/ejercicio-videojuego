import { Heroe } from "./Heroe";

export class Arquero extends Heroe {
    private sigilo : number = 0

    atacar() {
        console.log(`${this.nombre} dispara una flecha al enemigo.`);
    }

    defender() {
        console.log(`${this.nombre} se equipa el escudo.`);
        this.escudo += 20;
    }

    aumentarVida() {
        console.log(`${this.nombre} bebe una pocion curativa.`);
        this.vida += 50; 
    }

    aumentarNivel() {
        console.log(`${this.nombre} sube de nivel.`);
        this.nivel += 1;
    }

    aumentarSigilo() {
        console.log(`${this.nombre} se esconde en las sombras.`);
        this.sigilo += 50;
    }

    setSigilo(sigilo:number) {
        this.sigilo = sigilo;
    }

    getSigilo() {
        console.log(this.sigilo);
    }
}