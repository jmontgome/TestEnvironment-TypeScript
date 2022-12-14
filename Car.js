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
exports.__esModule = true;
exports.Corvette = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.Start = function () {
        return "Brr Brr Brr Brr Rumm";
    };
    return Car;
}());
exports.Car = Car;
var Corvette = /** @class */ (function (_super) {
    __extends(Corvette, _super);
    function Corvette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Corvette.prototype.toString = function () {
        return this.make;
    };
    Corvette.prototype.Run = function () {
        return "RuuuuuuUUUUUUUUUUHHHH";
    };
    return Corvette;
}(Car));
exports.Corvette = Corvette;
