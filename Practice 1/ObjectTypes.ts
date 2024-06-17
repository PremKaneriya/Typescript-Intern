// ObjectTypes 

const course: { names: string, coaching: string, duration: number} = {
    names: 'typescript',
    coaching: 'local institute',
    duration: 200
}

console.log(course)

// Type Inference in ObjectTypes

const course1 = {
    nam: 'typescript',
}
course1.nam = 'javascript' 
// course1.nam = 10 // error
console.log(course1)


// Optional Properties in ObjectTypes
let car: {
    name: string,  
    mileage?: number // optional ?
} 

// car = { giving error because of ?
//     name: 'BMW',
// }

// car.mileage = 10

car = {
    name: 'BMW',   
}

car.mileage = 20
console.log(car)

// readonly in ObjectTypes

let car1: {
    name: string,
    readonly mileage: number
} = {
    name: 'BMW',
    mileage: 10
}

// car1.mileage = 20 // error
console.log(car1)


// nested ObjectTypes 

type Address = {
    city: string,
    state: string
}

type person = {
    name: string,
    age: number,
    address: Address
}

let person1 = {
    name: "codezee",
    age: 20,
    address: {
        city: 'Gujarat',
        state: 'GJ'
    }
}

console.log(person1)
console.log(person1.address.city)


// index signature in ObjectTypes

type companyCase = {
    names: string,
    worth: number
}

type companyProfle = {
    ceo: {[names: string]: companyCase}
} 

const companyFounds: companyProfle = {
    ceo: {
        "codezee" : {
            names: 'typescript',
            worth: 10000
        }
    }
}

console.log(companyFounds);
