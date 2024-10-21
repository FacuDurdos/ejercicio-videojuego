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
exports.Arquero = void 0;
var Heroe_1 = require("./Heroe");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sigilo = 0;
        return _this;
    }
    Arquero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " dispara una flecha al enemigo."));
    };
    Arquero.prototype.defender = function () {
        console.log("".concat(this.nombre, " se equipa el escudo."));
        this.escudo + 20;
    };
    Arquero.prototype.aumentarVida = function () {
        console.log("".concat(this.nombre, " bebe una pocion curativa."));
        this.vida + 50;
    };
    Arquero.prototype.aumentarNivel = function () {
        console.log("".concat(this.nombre, " sube de nivel."));
        this.nivel + 1;
    };
    Arquero.prototype.aumentarSigilo = function () {
        console.log("".concat(this.nombre, " se esconde en las sombras."));
        this.sigilo + 50;
    };
    Arquero.prototype.setSigilo = function (sigilo) {
        this.sigilo = sigilo;
    };
    Arquero.prototype.getSigilo = function () {
        console.log(this.sigilo);
    };
    return Arquero;
}(Heroe_1.Heroe));
exports.Arquero = Arquero;
