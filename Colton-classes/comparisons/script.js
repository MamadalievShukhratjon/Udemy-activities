//  Comprison Operators
// they are used to test for true or flase. left or right.
//  > greater than    //  < les than
//  == equality     // != not equality
//  === strict equality   // !== strict non-equality.

//  we can compare letters with each other because every letter has its own nuerical position.


//  double equall (==) - checks for equality of values, but not equality of type
  1 == '1'  // true in terms of value

// triple (===)- checks for equality of value and type.
 
1 === '1' // - false is output because it cares about type.


// Console, Alert, Prompt

// Console.log(arg) - prints out argumrnts to the onsole.
// Alert() - displays an alert box with a message and OK button
// Prompt()- instructs browser to display a dialog with an optional message prompting user to input some text,  and to wait untill th user either submits thetext ot cancels the dialog and keeps what user enters as a string.


//  Conditional

 // if statement only runs code if given condition is true.

 let rating = 3
 if(rating === 3) {
    console.log("you are here");
 }

 let random = Math.random();
 if (random < 0.5) {
    console.log("Your number less than 0.5");
    console.log(random);
 }

//   else if - if the first thing not true,  may be this oher thing.

const age = 8
if(age < 5) {
    console.log("You are a baby. You get in for free");
} else if (age < 10) {
    console.log("You are a child. you pay $10");
}else if (age < 65) {
    console.log("You are an adult. You pay $20");
}

// else -> if nothing else true, then do this.

const day = prompt("Enter a day").toLowerCase();

if (day === "saturday") {
    console.log("Weekend");
}else if (day === "sunday") {
    console.log("weekend");
}else {
    console.log("Working day");
}

// Nesting -  can nest  conditionals inside conditionals.

const password = prompt("Enter a password")

if (password.length() >= 6) {
    // password cannot contain spaces
    if (password.indexOf(' ') === -1) {
        console.log("Valid password");
    }else {
        console.log("Paasword cannot contain spaces");
    }
}else {
    console.log("password too short! Must be 6+ characters");
}


// truth and falsy values

// All JS values have truthyness and falsyness about them


// FALSY VALUES :
// false 
// 0
// (" empty spaces")
// null
// undefined
// NaN
// Everything else is truthy

const userInput = prompt("Enter something")
if (userInput) {
    console.log('Truthy');
}else {
    console.log("Falsy");
}

if ( false, 0, null, undefined, NaN) {
    console.log('truthy');
}else {
    console.log("falsy");
}



// Logical Operators. Combining Expressions.

//  && - (and) - Both thing must be true for the entire thing to be true.

const password1 = prompt("Enter your password")

if (password1.length() >= 6 && password1.indexOf(" ") === -1) {
    console.log("Valid password");
}else {
    console.log("Invalid password");
}

// || (pipe character) or - if one side is true, the entire thing is true

const age1 = 24;

if (age < 5 || age >= 65) {
    console.log("Free");
}else if (age < 10 ) {
    console.log("$10");
}else if (age < 65) {
    console.log("$20");
}else {
    console.log("Invalid age");
}

// Logical NOT (!)

//  ! expression returns true if expression is false. if it is false, it returns true.

let firstName = prompt("Enter your name")
if (!firstName) { // if not first name?
    firstName = prompt("try again")
}

if (!age1 >= 0 && age < 5 || age >= 65) {
    console.log("You are not a baby or senior!");
}


// SWITCH / CASE

// Switch statement is another control-flow statement that can replace multiple if statements

const day1 = 2

switch(day) {
    case 1: console.log("Monday"); break ;
    case 2: console.log("Tuesday"); break ;
    case 3: console.log("Wednesday"); break ;
    case 4: console.log("Thursday"); break ;
    case 5: console.log("Friday"); break ;
    case 6: console.log("Saturday"); break ;
    case 7: console.log("Sunday"); break ;
    default: console.log("Not weekdays");
}

//  JAVASCRIPT ARRAYS
