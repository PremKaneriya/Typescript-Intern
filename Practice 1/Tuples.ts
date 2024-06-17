// Tuples in TS

let myTuple: [number, string, boolean]
myTuple = [234567, 'name', false]
console.log(myTuple);

// Accessing Tuple Elements
console.log(myTuple[1]);
console.log(myTuple[0]);

// Tuple Operations
let [number, boolean, string] = myTuple
console.log(number, boolean, string)

// updating tuple
myTuple[0] = 9601
myTuple[2] = true
console.log(myTuple)

// readonly tuple
let tuple2: readonly [number, string]
tuple2 = [1234, 'name']
// tuple2.push('nameOne') error
console.log(tuple2)



// Named Tuples
const graph: [x: number, y: number] = [10, 20]
console.log(graph)

// Destructuring Tuples
const [x, y] = graph
console.log(x, y)