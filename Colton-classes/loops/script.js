// LOOPS

// Loops offer a quick and easy way to do something repeatedly. Loops allow us to repeat code. 
// There are multiple types of it. for loop, while loop, for ....of  loop, for ...in loop.

// FOOR LOOP
//  for (initial expresion, condition, increment expression)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// print out even numbers with for loop
for (let i = 0; i <= 20; i +=2 ) {
    console.log(i)
}
// print out odd numbers with for loop

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// print out from 100 to 1 (decrement)

for (let i = 100; i>= 0; i -=10) {
    console.log(i);
}

// infinite loop which does not stop

// for (let i = 20; i >=0; i++) {}


// LOOPing over ARRAYs
// To loop over an array, we start at index 0 and continue looping to until last index.length-1).
const animals = ['lions', 'tigers', 'bears']
for (let i = 0; i < animals.length; i++) {
    console.log(i,animals[i]);
}

// Reversed version

for (let i = animals.length-1; i>=0; i--) {
    console.log(i,animals[i]);
}

const people = ["scooby", "velma", "daphne", "shag", "fred"]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// Nested LOOP

// A nested loop is a loop that is exist inside one another loop.
// the loop can have one or more or any numbers of loop defined inside another loop.
let str = 'LOL'

for (let i = 0; i<= 4; i++) {
    console.log("Outer", i);
    for(let j = 0; j < str.length; j++) {
        console.log("    Inner:", str[j]);
    }
}

for (let i = 1; i <= 10; i++){
    console.log(`i is: ${i}`);
    for (let j= 1; j < 4; j++) {
        console.log(`j is ${j}`);
    }
}

const seatingcharts = [
    ['kristen', 'erik', 'jimmy'],
    ['geoffrey', 'sakura', 'antonio', 'kevin'],
    ['yuma', 'juanito', 'jack', 'lily'],
]
// to print out whole chart

for (let i = 0; i < seatingcharts.length; i++) {
    console.log(seatingcharts[i]);
}

// change it to string

for (let i = 0; i< seatingcharts.length; i++) {
    const row = seatingcharts[i]
    console.log(`row # ${i + 1}`);
    for (let j = 0; j < row.length; j++)
    console.log(row[j]);
}

// While loop continue running as long as test condition is true
 let num = 0
 while(num <= 10) {
    console.log(num);
    num++
 }