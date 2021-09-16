// Write a function which takes a string and returns it written backwards (reverses it) logging the result to the console.
// Test your solution with a few different Strings.

// used the spilt, reverse and join method
const str = 'the quick brown fox';

const newStr = str
    .split('')
    .reverse()
    .join('')

console.log(newStr);

const str = 'Good Morning';

const newStr = str
    .split('')
    .reverse()
    .join('')

console.log(newStr);

const str = 'hello my name is';

const newStr = str
    .split('')
    .reverse()
    .join('')

console.log(newStr);


// This is a for loop method
const str = 'Good Morning Code Nation'

let newStr = ''
for(let i = str.length -1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);

const str = 'It is the weekend'

let newStr = ''
for(let i = str.length -1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);

const str = 'How are you doing today?'

let newStr = ''
for(let i = str.length -1; i >= 0; i--) {
    newStr += str[i];
}
console.log(newStr);



// Declare an array that stores a shopping list.

// This array should have three categories (arrays) of the shopping items and each of these categories should be an array with
// at least three shopping items.

// Log the 3rd item of the 2nd list of items to the console.log

// multidimensional array
let shoppingList = [
    ["Apples", "Bananas", "Kiwi"],
    ["Chicken", "Steak", "Fish"],
    ["Washing Up Liquard", "Hand Soap", "Bleach"]
    
];
console.log(shoppingList[0][0]);
console.log(shoppingList[1][2])



// Write a function called dataChecker which takes two parameters(string, rank).
// If the string is equal to 'Codenation' and the rank is equal to 1 then log to the console a template string to tell us both are correct.
// If the string is 'codenation' but the rank isn't log to the console a template string that tells us the string was correct but the rank was wrong.

// Finally if the string was not equal to 'codenation' then log to the console a template string which tells us that the string was wrong.

const dataChecker = (string, rank) => {
    if(string == "codenation" && rank == 1) {
        console.log(`Both ${string} and the ranking ${rank} are correct`);

    } else if (string == "codenation" && rank !=1) {
        console.log(`The ${string} string is correct but the ranking ${rank} isn't`);

    } else {
        console.log(`Both ${string} and/or the ranking ${rank} are wrong`);
    }
    }

    dataChecker("codenation", 1)
    dataChecker("codenation", 2)
    dataChecker("code", 3)