var male = prompt("what is your name?")
var female = prompt("what is your name?")

var friendship = Math.random() * 100 ;

friendship = Math.floor(friendship)+ 1;

if (frienship > 100) {
    alert("Your friendship dcore is " + frienship + "% you are best friends")
} else {
        alert("Your friendship dcore is " + frienship + "% ")
}

alert("Your friendship is " + friendship + "%")




function getBMI (weight, height) {
    var weight =  prompt("What is your weight?")
var height = prompt("What is your weight?")
    
    var bmi = weight/(height * height);

    var whole = Math.round(bmi)

    if (whole < 18.5) {
        console.log("Your BMI is " + bmi + "so you are underweight")
        
    console.log("your BMI is " + whole + " You are normal weight" )
    
    } else {
        console.log('Your BMI is ' + whole + " You are overweiht")
    }
    
    return whole;
}


alert(whole)



        