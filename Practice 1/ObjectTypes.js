// ObjectTypes 
var course = {
    names: 'typescript',
    coaching: 'local institute',
    duration: 200
};
console.log(course);
// Type Inference in ObjectTypes
var course1 = {
    nam: 'typescript',
};
course1.nam = 'javascript';
// course1.nam = 10 // error
console.log(course1);
// Optional Properties in ObjectTypes
var car;
// car = { giving error because of ?
//     name: 'BMW',
// }
// car.mileage = 10
car = {
    name: 'BMW',
};
car.mileage = 20;
console.log(car);
// readonly in ObjectTypes
var car1 = {
    name: 'BMW',
    mileage: 10
};
// car1.mileage = 20 // error
console.log(car1);
var person1 = {
    name: "codezee",
    age: 20,
    address: {
        city: 'Gujarat',
        state: 'GJ'
    }
};
console.log(person1);
console.log(person1.address.city);
var companyFounds = {
    ceo: {
        "codezee": {
            names: 'typescript',
            worth: 10000
        }
    }
};
console.log(companyFounds);
