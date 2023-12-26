 //          OBJECT LITERALS
    //Object literals are collection of properties. properties are key value pair.
    // rather than accessing data using index, we use custom keys.

    const fitData = {
        totalSteps: 308727,
        totalMiles: 21.7 ,
        averCalor: '5755',
        worksout: '% out of 7',
        averSleep: ' 3:13',
    }

    // property = key + value

    // Objects can inslude any types

    const sink = {
        numm: 717,
        isFunny: true,
        colors: ['black', 'white',  'green']
    }

    const product = {
        name: 'Gummy Bears',
        inStock: true,
        price: 1.99,
        flavors: ['apple', 'grape', 'cherry']
    }

    // Accessing data out of Objets.

    let person = {
        firstName: 'Shukhrat',
        lastName: 'Mamadaliev'
    }

    person[firstName] // ---> Shukhrat 1st way
    person.firstName  // ---> Shukhrat  2nd way

    // Valid keys. All keys are converted to strings. Except for symbols.
    const years = {1999: "good", 2022: 'Bad'}

    // dot notation --> in the object (propert name syntax), the property name must be valid JS identifier which can also be reversed word.

    // bracket notation --> in the object (expression syntax), the expression should evaluate to a string or symbol that represents the property's name, 
    // so it can be any string literal, for example including : '1000', '!bar', or even   '  '  (space).
    // Additionally, it is also possible to concat two variables.

    person ['fist' + 'name'] // --> shukhrat

    person ['last' + 'name']
    const restaurant =  {
        name: 'Ichron Ramon',
        address: `${Math.floor(Math.random() * 100) +1} avenue`,
        city: 'brooklyn',
        state: 'NY',
        zipcode: 11206
    }

    const fulladdress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

    //   Modifying Objects
     const midterms = {danielle: 96, thomas: 78,}
     midterms.thomas = 80.
     midterms[danielle] = "A"
    