function greet(name: string) {
    console.log(`Hello ${name}`)
}

greet("codezee")

function add(a: number, b: number): number {
    return a + b
}

console.log(add(1, 2));

const newGreet = (names: string, say: string = "hello Please welcome" ) => {
    console.log(`${names} ${say}`)
}

newGreet("codezee");

const multilply = (a: number) => {
    for (let i = 1; i < 11; i++){
        console.log(`${a} * ${i} = ${a * i}`)
    }
}

multilply(5)