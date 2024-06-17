// interface Person {
//     name: string
//     age: number
//     created_at: Date
// }
// const Details: Person = {
//     name: 'codezee',
//     age: 20,
//     created_at: new Date()
// }
// class Person {
//   name: string;
//   constructor() {
//     this.name = "";
//   }
// }
// const person = new Person();
// person.name = "Jane";
// console.log(person);
var Men = /** @class */ (function () {
    function Men(name) {
        this.name = name;
    }
    Men.prototype.getName = function () {
        return this.name;
    };
    return Men;
}());
var men = new Men("codezee");
console.log(men.getName());
