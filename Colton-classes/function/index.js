// FUNCTION INTRODUCTION
 // functions are one of the fundamwntal building blocks in JS. A function in javascriprt is similar to a procedure a set of statements that preform a task or calculates a value.
 // But for a procedure to qualify as a function, it should take soome inputs and return an output where there is some obious relationship between input and output.

 // Functions are reusable procedure, they allow us to write reuable, modular code. We define a "chunk" of code that we can execute at later point. we use function all the time.
 
 function sing() {
    console.log('DO');
    console.log('RE');
    console.log('ME');
 }
 sing()
 // task 
 function printHeart() {
    console.log('<3');
 }
 printHeart()

 // Arguments --> inputs in function.
 // we can also write functions that accept inputs called 'arguments'

 function greet(firstName) {
    console.log(`first name: ${firstName}`);
 }
 greet('Shukhrat')
 //task
 function rant(message) {
    console.log(message.toUpperCase());
 }
 rant("shukhrat")

 // Functions with multiple arguments
 function hello(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName}`);
 }
 hello("Shukhrat", 'Mamadaliev')
 // Repeatin multiple times
 function repeat(str, numTimes) {
    for (let i =0; i < numTimes; i++) {
        console.log(str);
    }
} repeat('hello',3)

function repeat2(str,numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += str
    }
    console.log(result);
}
repeat2('hello ', 7)
//  task
function isSneakyEyes (num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Sneaky Eyes');
    }else {
        console.log("Not Sneaky Eyes");
    }
}
isSneakyEyes(77,99)

// RETURN KEYWORD

// Return is build in methods return values as output  when we call them, in theis case, we can store them to a avriable.
function add (x,y) {
    return x+y
}
add(3,6)

function add2(num1,num2) {
    let sum = x+y;
    return sum
}
add(10,15)

// Return statement ends function execution and specifis the value to be returned by that function
function add3 (x,y) {
    if (typeOf(x) !== 'number' || typeOf(y) !== 'number') {
        return false 
    }else {
        let sum = x + y
        return sum
        return x + y

    }
}

// exercies 
// 1)
function multiply(num1,num2) {
    return num1 * num2
}
multiply(2,5)

// 2) 
function isShortWeather(temperature) {
    if(temperature >=75) {
        return true
    }else {
        return false
    }
}
isShortWeather(77)

// 3)
function lastElement(arg) {
    if(arg.length === 0) {
        return null
    }else {
        return arg[arg.length-1]
    }
}
lastElement(77,88,99)

// 4)
 function capitalize(str) {
    if (str.length === 0) {
        return str
    } else {
        return str.char[0].toUpperCase() + str.slce(1)
    }
}