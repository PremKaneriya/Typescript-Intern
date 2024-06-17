// Tuples in TS
var myTuple;
myTuple = [234567, 'name', false];
console.log(myTuple);
// Accessing Tuple Elements
console.log(myTuple[1]);
console.log(myTuple[0]);
// Tuple Operations
var number = myTuple[0], boolean = myTuple[1], string = myTuple[2];
console.log(number, boolean, string);
// updating tuple
myTuple[0] = 9601;
myTuple[2] = true;
console.log(myTuple);
// readonly tuple
var tuple2;
tuple2 = [1234, 'name'];
// tuple2.push('nameOne') error
console.log(tuple2);
// Named Tuples
var graph = [10, 20];
console.log(graph);
// Destructuring Tuples
var x = graph[0], y = graph[1];
console.log(x, y);
