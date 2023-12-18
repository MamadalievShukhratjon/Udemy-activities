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