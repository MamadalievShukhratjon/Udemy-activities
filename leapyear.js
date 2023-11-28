
 let year = prompt("Enter a year")


function leapYear(year ) {
    if (year % 4 == 0 || year % 100 != 0 || year % 400 == 0) {
        alert("This is a leap year" )
    }
    else {
        alert("This is not a leap year")
    }
}

alert(year)
leapYear(year)


var bmi = prompt("enter your weght and height")

function bmiCalculator (weight, height) {
    var bmi = weight / (height * 2);
    if (bmi <= 18.5) {
        condole.log("Your BMI" + bmi + "so you are underweight");}
    else if (bmi > 18.5 || bmi < 24.9) {
        console.log("Your BMI is" + bmi + ",so you are normal weight");
        }
    else if (bmi > 24.9) {
        console.log("Your BMI is " + bmi + ", so you are overweight");
    }
    else {
        console.log("you are overweight")
    }
    
    
    return interpretation;
}

alert (year)


var tweet = prompt("compose your tweet")
var tweetCount = tweet.length;
alert("You have wriiten " + tweet.length + " you can write " + (200-tweet.length) + " as well")

var slice = prompt("Enter what you have")

var tweetBreak = slice.slice(0,140)

alert(tweetBreak)

var asking = prompt ("Enter your tweet")

var tweet = asking.slice(0,251)

alert(tweet)

var name = prompt("what is your name?")

var firstChar = name.slice(0,1);

var upperCasefirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var lowerCaseName = restOfName.toLowerCase();

var capitalizedName = upperCasefirstChar + lowerCaseName

alert("Hello, " + capitalizedName)

var catAge = prompt("What is your cat's age?")

var humanAge = (catAge-2) * 4 + 21

alert( humanAge)









function getMilk( bottles) { 
  
     var cost = bottles * 1.5;

    var total = Math.floor(bottles / cost);
	  console.log("leaveHouse");
	  console.log("moveRight");
	  console.log("moveRight");
	  console.log("moveUp");
	  console.log("moveUp");
	  console.log("moveUp");
   console.log("moveUp");
   console.log("moveRight");
	  console.log("moveRight");
   console.log("buy " + bottles +" bottles of milk")
	  console.log("moveLeft");
	  console.log("moveLeft");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveLeft");
	  console.log("moveLeft");
	  console.log("enterHouse");
    console.log(total)
}


getMilk(bottles)


function lifeInWeeks(age) {

    var restAge = 90 - age;
    var days = restAge * 365;
    var weeks = restAge * 52;
    var months = restAge * 12

    console.log("you have " + days +  " days, " + weeks + " weeks, and " + months + " months ")
    
}

lifeInWeeks(23)



function getMilk( money) { 
  
     // var cost = money / 1.5;

    var total = Math.floor(money / 1.5);
	  console.log("leaveHouse");
	  console.log("moveRight");
	  console.log("moveRight");
	  console.log("moveUp");
	  console.log("moveUp");
	  console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
	  console.log("moveRight");
      console.log("buy " + total +" bottles of milk")
	  console.log("moveLeft");
	  console.log("moveLeft");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveLeft");
	  console.log("moveLeft");
	  console.log("enterHouse");
      console.log(total)

    var change = money % 1.5;  // reminder of the division, qancha qaytim olib kelishi.

     return change

    console.log("you have " + change +" as change of your money!")
}


getMilk(5)

function getBMI (weight, height) {
    
    var bmi = weight/(height * height);

    var whole = Math.round(bmi)
    
    return whole;
}

var whole = getBMI(70, 1.7);
console.log(whole)


var names = ['shukhrat', 'ali', 'joey', 'jimmy', 'john']

var guestName = prompt("What is your name? ")

if (names.includes(guestName)) {
    alert("You are welcome")
}
else {
    alert("You are not welcome")
}



