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
exports.Bhaskara = exports.Modulo = exports.Potencia = exports.Multiplicacao = exports.Divisao = exports.Subtracao = exports.Soma = void 0;
var Calculo = /** @class */ (function () {
    function Calculo() {
    }
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.calculate = function (numero1, numero2) {
        return numero1 + numero2;
    };
    return Soma;
}(Calculo));
exports.Soma = Soma;
var Subtracao = /** @class */ (function (_super) {
    __extends(Subtracao, _super);
    function Subtracao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtracao.prototype.calculate = function (numero1, numero2) {
        return numero1 - numero2;
    };
    return Subtracao;
}(Calculo));
exports.Subtracao = Subtracao;
var Divisao = /** @class */ (function (_super) {
    __extends(Divisao, _super);
    function Divisao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divisao.prototype.calculate = function (numero1, numero2) {
        return numero1 / numero2;
    };
    return Divisao;
}(Calculo));
exports.Divisao = Divisao;
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.calculate = function (numero1, numero2) {
        return numero1 * numero2;
    };
    return Multiplicacao;
}(Calculo));
exports.Multiplicacao = Multiplicacao;
var Potencia = /** @class */ (function (_super) {
    __extends(Potencia, _super);
    function Potencia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Potencia.prototype.calculate = function (numero1, numero2) {
        return Math.pow(numero1, numero2);
    };
    return Potencia;
}(Calculo));
exports.Potencia = Potencia;
var Modulo = /** @class */ (function (_super) {
    __extends(Modulo, _super);
    function Modulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modulo.prototype.calculate = function (numero1, numero2) {
        return numero1 % numero2;
    };
    return Modulo;
}(Calculo));
exports.Modulo = Modulo;
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.prototype.bhask = function (a, b, c) {
        var delta = (b * b) - (4 * a * c);
        if (delta > 0) {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "Valores de X: \n|".concat(x1.toFixed(2), "\n|").concat(x2.toFixed(2));
        }
        else if (delta == 0) {
            var x = -b / (2 * a);
            return "A equa\u00E7\u00E3o possui tem duas raizes iguais e reais, portanto X1 e X2 s\u00E3o iguais (".concat(x, ").");
        }
        else {
            return "A equa\u00E7\u00E3o n\u00E3o possui raizes ( \u0394 < 0)";
        }
    };
    return Bhaskara;
}());
exports.Bhaskara = Bhaskara;
