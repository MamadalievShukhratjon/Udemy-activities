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

function sumArray(arr) {
    let sum = 0 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
sumArray(22,44)

function returnDay(index) {
    let day = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (index <1 || index >7) {
        return null
    }else {
        return day[index-1]
    }
}
returnDay(5)

// ADVANCED JS
// Scope determines the accessibility (visibility) of variables. JavaScript variables have 3 types of Scopes.
// Block Scope
// Function Scope
// Lexical / global Scope

// Functon Scope 
// Each function creates a new scope. variables defined insed a function are not accessible (visible) from outside the function.
// Variable declared with var, let ,const are quite similar when declared inside a function.
function birdTime() {
    let bird = 'squarell'
    console.log(bird)
}
birdTime()

// Block Scope means inside of two { } curly braces
for (let i = 0; i < 5; i++) {
    // let msg1 = 'hello world'
} // not possible // let and const can not be used here in block scope, we can use var instead. 
// console.log(msg1)
 for (let i =0; i < 5; i++){
    let msg = 'Hello world'
    console.log(msg);
 } // this is possible and right way to process it.

 // Lexical Scope

 function bankRobbery(){
    const heroes = ['batman', 'spiderman', 'superman', 'captain']
        function cryForHelp(){
            function inner(){
                for(let hero of heroes) {
                    console.log(`please help us, ${hero.toUpperCase()}`);
                }
            }
            inner()
        }
        cryForHelp()
 }
 bankRobbery()

 //     Function Expression 
 function plus(x,y){
    return x+y
 } // normal expression
 plus(27,88)

 const plus1 = function(x,y) {
    return x+y
 } // function expression
 plus1(27,88)

 // task
 const square = function(num1) {
    return num1 * num1
 }
 square( 19,45)

 // Higher Order function
// functions that operate on / with other functions. They can accept function as an argument adm they can return a function.

// passing a function as an argument

function callTwice(func) {
    func()
    func()
}
function rollDie(){
    const roll = Math.floor(Math.random() *6 ) +1 ;
    console.log(roll);
}

callTwice(rollDie)

// return function

function makeMysteryfunc () {
    const raand = Math.floor(Math.random() *100 )+1
    if (raand > 50) {
        return function() {
            console.log("CONGRATS, goofd boy");
            console.log("you win");
        }
    } else {
        return function() {
            alert("get out")
        }
    }
}

function isBetween(num) {
    return num >= 50 && num <= 100;
 }
 isBetween();

 function makeFunc(min,max) {
    return function (num) {
        return num > min && num < max;
    }
 }
 makeFunc()
 const isAdult = makeFunc(19,64)
 isAdult(20)

 // Defining Methods

 const myMath = {
    PI: 3.14149,
    square: function(num) {
        return num * num
    },
    cube: function(num) {
        return num ** 3
    } 
 }

 // ShortHand function

 const math = {
    blah: "hi!",
    add(x,y){
        return x+y
    }, multiply(x,y) {
        return x * y 
    },
 }
 math.add(60,40)
 math.multiply(12,6)

 //task

 const square1 = {
    area(x) {
        return x * x
    },
    perimetr(y) {
        return y * 4
    }
 }

 square1.area(10)  // -->100
 square1.perimetr(20) // --> 100

 // "This"  in JavaScript methods

 // "This " is used to acess other properties on the same object

 const persin = {
    fisrt: "Shukhrat",
    last: 'Mamadaliev',
    fullName() {
        return `${this.first} ${this.last}`
    }
 }

 const cat1 = {
    name: 'Blue',
    color: 'grey',
    breed: 'scotish fold',
    meow() {
        console.log('Meow Meow Meow');
    }
 }

 const cat2 = {
    name: 'blue steel', 
    color : 'white',
    breed: 'american',
    meow() {
        console.log(`${this.name} says MEOW`);
    }
 }

 cat2.meow()
 