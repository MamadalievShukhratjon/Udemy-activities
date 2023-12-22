    // Javascript Arrays
    // Introduction to arrays
    // Array objects enabels storing a collection of multiple items under a single variable name and has a member for performing common array operations
    // creating array
    let color = ['red', 'green', 'blue']

    // Arrays are indexed.  Each element has a corresponding index (counting starts from 0)
    let days = ['monday', 'tuesday', 'wednesday']
    days[1][1] //-> output should be T

    // Modifying or Changing Arrays

    let colors = ['rad', 'orange', 'green', 'yellow']

    colors[0] = 'red'

    //Array methods 
    // push -> used to add smth to the very end of an array.

    const movieLine = ['tom', 'paul']

    movieLine.push("john")
    movieLine.push('tom', 'jerry')

    // pop -> used to remove last eement from array

    movieLine.pop() //-> jerry is removed

    // shift -> used to remove first element from beginning in array

    let queue = ['tom', 'jerry', 'pablo']

    queue.shift() //- tom is removed

    // unshift -> used to add element to the beginning of an array

    queue.unshift('VIP')

    // Cancat() - method is used to meerge two or more arryas. This does not change exsiting arrays.
    let array1 = ['hello', 'salom']
    let array2 = ['world', 'dunyo']
    let array3 = [array1 + array2]

    const str = "LOL"

    for (let i = 0; i<=4; i++) {
        console.log('Outer', i);
        for (let j = 0; j< str.length; j++) {
            console.log("   Inner", str[j]);
        }
    }

    // includes() -> determines wheather an arrayaincludes a certain value among its entries, returning true or false as appropriate.

    let arrays1 = ['kitty', 'chikky']

    arrays1.includes('kitty')

    // indexOf() -> returns the first index at which a given elements can be found in the array or if it is not in the arrays, it will return -1.

    array1.indexOf('kitty')

    // reverse() -> reverses an array in place. the first array element becomes the last and the last bemoces the first like reversed.

    let cats = ['kitty', 'chunky', 'boby']
    cats.reverse()
    // if we have 2 elements with the same name, it only returns the first element at index.

    // slice() -> returns a shallow a copy of a portion od array into a new array object selected from start to end (end not included).

    // splice() -> changes contents of an array by removing or replacing existing elements and adding new elements in place.

    // sort() -> sorts elements of an array in place and returns the reference to the same arrays.

    // NESTED ARRAYS -> we can store arrays inside other arrays.

    const gameBoard = [['X', 'O', 'X'], ['O', 'Null', 'X'], ['O', 'O', 'X']]

    // to access elements in nested array.

    gameBoard[1][1] //->