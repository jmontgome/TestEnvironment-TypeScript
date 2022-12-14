import { Car, Corvette } from "./Car";

let message: string = "Hello World, string setter!";
//console.log(message);

var message2 = "Hello World, loose setter";
//console.log(message2);

let list: Array<string> = ["Hello", "My", "Name", "is", "Com"]

//for (var i = 0; i < 30; i++) {
    //console.log(i);
//}

//printArray(list);

//console.log(list.pop());

//printArray(list);

//console.log(list.push("Mandy"));

//printArray(list);
//printArray(list, false);

let toyota: Car = new Car("Toyota", "Corolla");
let corvette: Corvette = new Corvette("Chevrolet", "Corvette");

record(toyota.Start());
record(corvette.Start());
record(corvette.Run());

function record(value: any) {
    console.log(value);
}
function printArray(list: Array<string>, print: boolean = true) {
    if (print) {
        list.forEach(element => {
            console.log(element);
        })
    }
    else console.log("No permissions to print this array.");
}
