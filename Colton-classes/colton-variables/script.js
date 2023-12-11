// VARIABLES
// Variables are like lebal for values. We can store a value and give it a name, so that we can refer back to it later and we can use value to do stuffs, or change it to a new one.
 let score = 5 
 score = score + 5 // this is also used to update
 console.log(score);

 score = score + 10   
//  these two are the same thing
 score += 10 

//   STRING

// Strings are another primitive type in javascript. They represent texxt and must be wrapped in quotes ("", ''). Single quote or double quotes are fine to use.

let place = 'School' || "school"

// Strings are index and each character has corresponding index (positional number).

let animal = 'cat'

//  STRING METHODS
// Methods are built in actions, we can perform with individual strings. they help us to do things like:
// Searching within a string
// replacing part of a string
// Changing the casing of a string.

// toUpperCase() => It makes all text upper letters
// toLowerCase() => It makes all text lower letters
// trim() = it removes the white spaces aroung the string it text.

let msg = '     Leave Me Alone    '
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
console.log(msg.trim()) // this is used to remove the spaces.

//  String Methods with Arguments
//  Arguments are just inputs that we can pass into the method to alert how things behave.   method(arg)

//  IndexOf returns the index of givien arguments. it returns the first index at which a given element can be found in array, string etc ...
"hello world".indexOf('w') // --- 6

//  if entered arguments does not exist, it returns -1

// slice() - ia a caopying method. it does not alert but insted, it returns a shallow copy that contains some of elements as the ones from original array.
//  it takes 2 indexes, 1st 'where to start' 2nd 'where to end' not including given index.

"hello world".slice(6) //-- 'world 
//  to get from backwards we use '-'

// replace()- method of string values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
//  it takes 2 inputs, 1st 'what should be replaced',  2nd with what should it be replaced.

'hello world'.replace('world', 'dunyo') // 'hello dunyo'

// repeat() - method of string values constructs and returns  anew string which contain the specified number of copies of th string, concatinated together.
let mood = 'happy'

mood.repeat(30) // 'happyhappyhappy'

// TEMPLATELITERALS

// Template literals - aew delimited with backtick (` `) character allowing for multi-line strings, string interpolation with embedded expressions, and specil constructs calld 'tagged templates'
let product = 'apple'
let price = 2.25
let qty = 5
console.log("You bought" + qty + " " + product + "total id: " + price * qty)

//  Template literals are strings that allow embedded expressions, which will be evaluated and then turned into resulting string.

console.log(`You bought ${qty} ${product}. Total is ${qty * product}`)

//          Undefined and Null

// Null - internation absence of any value. it must be assigned to a variable later on.
 let user = null //value is explicitly nothing

 user = 'Shukhrat'

 // Undefined - variables that do not have an assogned value are undefined.

 let a; //undefined value.

//   Random number. Math Objects
// math Objects contains properties and method for mathematical consants and functions.
// Math Objects

//Math.floor= static method always rounds down and returns the largest integer less than or equal to given number.
console.log(Math.floor(23.474)) // - 23 is output

// Math.ceil() - static method always rounds up and returns the smallest integer. greater than ot eqaul to a given number.
console.log(Math.ceil(34.1)) // -35 is output

// Math.random() - static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1.
//  Random integer to generate numbers between 1 and 0.
const step1 = Math.random()
const step2 = step1 * 10
const step3 = Math.floor(step2)
const step4 = step3 + 1
console.log(step4)

console.log(Math.floor(Math.random() * 10) + 1) // shorter version of code above.

// Math.abs - static method returns the absolute value of a number.




// Math.pow() - static method returns the value of a base raised to a power tha is Math.pow(x,y)
console.log(Math.pow(2,7))