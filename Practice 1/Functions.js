function greet(name) {
    console.log("Hello ".concat(name));
}
greet("codezee");
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
var newGreet = function (names, say) {
    if (say === void 0) { say = "hello Please welcome"; }
    console.log("".concat(names, " ").concat(say));
};
newGreet("codezee");
var multilply = function (a) {
    for (var i = 1; i < 11; i++) {
        console.log("".concat(a, " * ").concat(i, " = ").concat(a * i));
    }
};
multilply(5);
