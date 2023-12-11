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

