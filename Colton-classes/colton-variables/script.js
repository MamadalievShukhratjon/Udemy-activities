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
console.log(msg.trim())
