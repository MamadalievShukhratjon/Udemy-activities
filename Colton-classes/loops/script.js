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

for (let i = 20; i >=0; i++) {}
