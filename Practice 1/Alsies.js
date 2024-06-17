// Function that takes a Person object and prints their details
function printPerson(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age, ", Email: ").concat(person.email));
}
// Usage of type aliases
var person1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
printPerson(person1);
// Using the NumericString alias
var myNumber = "12345";
console.log(myNumber); // Output: "12345"
