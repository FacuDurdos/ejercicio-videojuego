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
exports.Mago = void 0;
var Heroe_1 = require("./Heroe");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mana = 0;
        return _this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza un hechizo hacia el enemigo."));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.nombre, " lanza un escudo magico."));
        this.escudo + 50;
    };
    Mago.prototype.aumentarVida = function () {
        console.log("".concat(this.nombre, " bebe una pocion curativa."));
        this.vida + 50;
    };
    Mago.prototype.aumentarNivel = function () {
        console.log("".concat(this.nombre, " sube de nivel."));
        this.nivel + 1;
    };
    Mago.prototype.aumentarMana = function () {
        console.log("".concat(this.nombre, " bebe una pocion de mana."));
        this.mana + 50;
    };
    Mago.prototype.setMana = function (mana) {
        this.mana = mana;
    };
    Mago.prototype.getMana = function () {
        console.log(this.mana);
    };
    return Mago;
}(Heroe_1.Heroe));
exports.Mago = Mago;
