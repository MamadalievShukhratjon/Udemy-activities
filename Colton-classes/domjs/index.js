// DOM -> Document Object Modul
// The DOM is a javascript representation of a webpage. It is your JS 'window' into the content of a webpage.
// It is just a bunch of Objects that you can interacr with via JS.

// Document of DOM

// The Document of Dom represents any webpage loaded in the browser and serves 
// as entry point into the webpage's content, which is DOM tree.

// / it contain representations of all the content on a page, plus tons of useful methods and properties.

// Selectiong DOM elements 

// getElementById() - method of the Document interfear returns on Element object representing 
// whose ID property matches the specified string. Since element IDs are required to be unique if speified, 
// they are useful way to get access to a specific element quickly.
 
const banner = documnet.getElementByI('silkie')
console.log(banner);
console.dir(banner);
// taask: 
const img = document.get('unicorn')
const heading = document.getElementById('mainheading')

// getElmentByTagName

// getElmentByTagName is a method of Document interface, returns an HTML collection of elements with givien Tag names

const AllImages = document.getElementsByTagName('img')

// we can single elements out inside a variable by index numbers.
const oneImage = AllImages[0] // [1], [2] etc..
const AllImage = document.getElementsByTagName('img')
for (let img of AllImage) {
    console.log(img.scr);
}

// getELementsByClassName
// The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

const squareImages = document.getElementsByClassName('square')
    for (let imafe of squareImages) {
        console.log(img.scr);
    }

    // querySelector()

// querySelector() - returns te first element within the document that matches the specified selector or group of selectors. 
// if no matches are found, null is returned.

// A newer, all-in-one method to select a single element. it ives the element that matches CSS selector.

console.log(document.querySelector('p'));
console.log(document.querySelector('#banner'));
console.log(document.querySelector('.square'));
console.log(document.querySelector('img:nth-of-type(2'));

//  squareSelectorAll

// The document method querySelectorAll() returnsa static (not live) represending a list of the document elements that matches the specfied group of selectors.

console.log(document.querySelectorAll('p')); // choses all p elements
console.log(document.querySelectorAll('p a')); // chooses all p elements inside ancortag

const links = 'helloworld' 
    for(let link of links) {
console.log(link.href);
}

const donetoDoes = document.querySelector('.done')
const checkbox = document.querySelectorAll('input[type="checkbox"]')

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const spans = document.querySelectorAll('span')

for (let i= 0; i < spans.length; i++) {
    
    spans[i].style.color = colors[i]
}
// Select and Manipulate
// InnerText -> 
document.querySelector('p').innerText

// textConntent shows all elements, texts, hidden texts on the console.
 document.querySelector('p').textContent

 // innerHTML -> gets or sets hTMl markup contained withi the element, when we call a whole paragraph or anything with
 // with innerHTML, ew will get eveerything(tags, attributes etc...) in the content.

 document.querySelector('p').innerHTML
 document.querySelector('span').innerHTML = 'Disgusting'