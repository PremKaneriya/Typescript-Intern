type NumericString = string;

type Persona = {
    name: string;
    age: number;
    email: string;
};

function printPerson(persona: Persona) {
    console.log(`Name: ${persona.name}, Age: ${persona.age}, Email: ${persona.email}`);
}

let persona: Persona = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

printPerson(persona);

let myNumber: NumericString = "12345";
console.log(myNumber); 
