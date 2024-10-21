"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
var Heroe_1 = require("./Heroe");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fuerza = 0;
        return _this;
    }
    Luchador.prototype.atacar = function () {
        console.log("".concat(this.nombre, " realiza un golpe con la espada al enemigo."));
    };
    Luchador.prototype.defender = function () {
        console.log("".concat(this.nombre, " se equipa el escudo."));
        this.escudo + 100;
    };
    Luchador.prototype.aumentarVida = function () {
        console.log("".concat(this.nombre, " bebe una pocion curativa."));
        this.vida + 50;
    };
    Luchador.prototype.aumentarNivel = function () {
        console.log("".concat(this.nombre, " sube de nivel."));
        this.nivel + 1;
    };
    Luchador.prototype.aumentarFuerza = function () {
        console.log("".concat(this.nombre, " incrementa su fuerza."));
        this.fuerza + 50;
    };
    Luchador.prototype.setFuerza = function (fuerza) {
        this.fuerza = fuerza;
    };
    Luchador.prototype.getFuerza = function () {
        console.log(this.fuerza);
    };
    return Luchador;
}(Heroe_1.Heroe));
exports.Luchador = Luchador;
