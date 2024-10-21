"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroe = void 0;
var Heroe = /** @class */ (function () {
    function Heroe(nombre) {
        this.nivel = 1;
        this.vida = 100;
        this.escudo = 0;
        this.nombre = nombre;
    }
    Heroe.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Heroe.prototype.getNombre = function () {
        console.log(this.nombre);
    };
    Heroe.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Heroe.prototype.getNivel = function () {
        console.log(this.nivel);
    };
    Heroe.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Heroe.prototype.getVida = function () {
        console.log(this.vida);
    };
    Heroe.prototype.setEscudo = function (escudo) {
        this.escudo = escudo;
    };
    Heroe.prototype.getEscudo = function () {
        console.log(this.escudo);
    };
    return Heroe;
}());
exports.Heroe = Heroe;
