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



class Men {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName():string {
        return this.name;
    }
    
} 

const men = new Men("codezee");
console.log(men.getName());


