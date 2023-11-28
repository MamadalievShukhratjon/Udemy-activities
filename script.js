var male = prompt("what is your name?")
var female = prompt("what is your name?")

var friendship = Math.random() * 100 ;

friendship = Math.floor(friendship)+ 1;

if (friendship >= 100) {
    
    alert("Your friendship score is " + frienship + "% you are best friends")
} else {
        alert("Your friendship score is " + friendship + "% ")
}

alert("Your friendship is " + friendship + "%")




function getBMI (weight, height) {
    var weight =  prompt("What is your weight?")
var height = prompt("What is your weight?")
    
    var bmi = weight/(height * height);

    var whole = Math.round(bmi)

    if (whole < 18.5) {
        console.log("Your BMI is " + bmi + "so you are underweight")
        
    // } if else (whole =< 18.5 && whole = 24.9) {
    //     console.log("your BMI is " + whole + " You are normal weight" )
    
    } else {
        console.log('Your BMI is ' + whole + " You are overweiht")
    }
    
    return whole;
}

getBMI()


        