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

 // Value of "THIS" depends on the invocation context of function it is used in.

 // task
 let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg () {
        this.layAnEgg++
        return "EGG"
    }
 }

 // TRY and CATCH statement in JS

 try {
    hello.toUpperCase()
 }catch {
    console.log('Error');
 }
 
 function yell(msg) {
    try{
        console.log(msg.toUpperCase());
    }catch {
        console.log(e);
        console.log('Please pass a string next time!');
    }
 }

 // Array Callback Methods

// The forEach() methid of array executes a provided function once for each array element in an arrat in ascending index-order.

// The forEach() accepts a callback function. it calls the function once per element in the array.

const nums = [9,8,7,6,5,4,3,2,1]

nums.forEach(function (n) {
    console.log(n *n );
})

nums.forEach(function (el){
    if(el % 2 === 0) {
        console.log(el);
    }  // output should be [8,6,4,2]
})

const numbers = [1,2,3,4,5,6,7,8,9,10]

function print(element) {
    console.log(element);
}

numbers.forEach(print)

numbers.forEach(function (el) {
    console.log(el);
})
//           ==
for (let el of numbers) {
    console.log(el);
}

numbers.forEach(function (el){
    if (el % 2 === 2) {
        console.log(`Even number iss: ${el}`);
    }
})

const movies = [
    {
        title:'Amandeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title:'Parasite', 
        score: 95
    }, 
    {
        title: 'Aliens',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title}-${movie.score}/100`);
})

//  MAP

// MAP creates a new array with the result of coding a callback on every element in the array.

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase()
})

const numbers1 = [1,2,3,4,5]

const multiplication = numbers1.map(function (num){
    return num * 2
})


const movies1 = [
    {
        title:'Amandeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title:'Parasite', 
        score: 95
    }, 
    {
        title: 'Aliens',
        score: 90
    }
]

const title = movies1.map(function(movie) {
    return movie.title.toUpperCase()
})

const fullNames = [{first: 'Albus', last: 'Dummbeldor'}, {first: 'Harry', last: 'Potter'}, {first:'Hermione', last: 'Granger'},
{fist:'Ron', last: 'Weasly'}]

const firstNames = fullNames.map(function(first){
    return first.first
})

// Arrow Function
// Arrow function is compact alternatrive to a traditional function expression, with some semantic differences and delibrate limitations in usage.

// it is syntacticly compact alternative to a regular function expression.

const square2 = (x) => {
    return x * x
}
 square(3)

 const sum1 = (x,y) => {
    return x + y
 }


 // function expression 
 const add = function(x,y) {
    return x + y
 }

 // arrow function
 const add = (x,y) => {
    return x +y
 }

 const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}

// task

const greet = (name) => {
    return `Hey ${name}!`
}
greet('Shukhrat')


// Implicit Return

// To make Implicit return, we have to change  { } curly braces with () perentisis

// arrow return
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}


// Implicit Return
const rollDie = () => (
     Math.floor(Math.random() * 6) + 1
)

// shorter version

const add = (a,b) = a + b

// Implicit return works only when there is one clear value as a return