

// Arrays in ts

let arr: string[] = []
arr.push("name", "surname")
console.log(arr);

let arr1: number[] = []
arr1.push(55,57)
console.log(arr1);

let arr2:boolean[]=[]
arr2.push(true, false, true) 

// Readonly, The readonly keyword can prevent arrays from being changed.

let names: readonly string[] = ['none']
console.log(names);

// Inference in ts is, ts is gessing your data type

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
