"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var message = "Hello World, string setter!";
//console.log(message);
var message2 = "Hello World, loose setter";
//console.log(message2);
var list = ["Hello", "My", "Name", "is", "Com"];
//for (var i = 0; i < 30; i++) {
//console.log(i);
//}
//printArray(list);
//console.log(list.pop());
//printArray(list);
//console.log(list.push("Mandy"));
//printArray(list);
//printArray(list, false);
var toyota = new Car_1.Car("Toyota", "Corolla");
var corvette = new Car_1.Corvette("Chevrolet", "Corvette");
record(toyota.Start());
record(corvette.Start());
record(corvette.Run());
function record(value) {
    console.log(value);
}
function printArray(list, print) {
    if (print === void 0) { print = true; }
    if (print) {
        list.forEach(function (element) {
            console.log(element);
        });
    }
    else
        console.log("No permissions to print this array.");
}
