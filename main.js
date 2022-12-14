var message = "Hello World, string setter!";
console.log(message);
var message2 = "Hello World, loose setter";
console.log(message2);
var list = ["Hello", "My", "Name", "is", "Com"];
for (var i = 0; i < 30; i++) {
    console.log(i);
}
list.forEach(function (element) {
    console.log(element);
});
console.log(list.pop());
list.forEach(function (element) {
    console.log(element);
});
console.log(list.push("Mandy"));
list.forEach(function (element) {
    console.log(element);
});
