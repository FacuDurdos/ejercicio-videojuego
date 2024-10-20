export abstract class Heroe {
    protected nombre : string; 
    protected nivel : number = 1;
    protected vida : number = 100;
    protected escudo: number = 0;

    constructor(nombre:string) {
        this.nombre = nombre;
    }

    abstract atacar():void;

    abstract defender():void;

    abstract aumentarVida():void;

    abstract aumentarNivel():void;

    setNombre(nombre:string) {
        this.nombre = nombre;
    }

    getNombre() {
        console.log(this.nombre);
    }

    setNivel(nivel:number) {
        this.nivel = nivel;
    }

    getNivel() {
        console.log(this.nivel);
    }

    setVida(vida:number) {
        this.vida = vida;
    }

    getVida() {
        console.log(this.vida);
    }

    setEscudo(escudo:number) {
        this.escudo = escudo;
    }

    getEscudo() {
        console.log(this.escudo);
    }
}