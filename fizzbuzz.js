var natija = [];

var sanoq = 1;

function ovoz() {

     if (sanoq % 3 ===0 &&  sanoq % 5 === 0 ){
        natija.push("FizzBuzz");
    }
     else if (sanoq % 3 === 0) {
        natija.push("Fizz");
    }
    else if (sanoq % 5 === 0 ) {
        natija.push("Buzz");
        
    }
    else if (sanoq % 3 ===0 &&  sanoq % 5 === 0 ){
        natija.push("FizzBuzz");
    }
    else { 
        natija.push(sanoq);
    }

    sanoq++;

    console.log(natija);
}