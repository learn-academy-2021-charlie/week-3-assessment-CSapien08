// ASSESSMENT 3: Coding practical questions with Jest

//const { iteratee } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Create a test function.
//  use describe() to pass in the name of the function, fibonacciFunction
//  use it() to describe what fibonacciFunction is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("fibonacciFunction", () => {
    it("Takes in a number that is greater than 2 and return an array of that length containing the Fibonacci sequence", () => {
        expect(fibonacciFunction(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciFunction(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })

})

// b) Create the function that makes the test pass.

//Create a function called fibonaccitFunction
//  parameters - a integer
//  initialize a new array of length based on arguement
//  check to make sure the arguement is greater than two
//      if true then return an array containing the Fibonacci sequence for that number
//      if not return 'invaild arguement'
//END

const fibonacciFunction = (int) => {
    var array = new Array(int)
    if(int < 2){
        return 'invaild arguement'
    }
    else{
        array[0] = 1;
        array[1] = 1;
        for(let i = 2; i < array.length; i++){
            array[i] = array[i - 1] + array[i - 2];
        }
    }
    return array;
}

console.log(fibonacciFunction(6))
console.log(fibonacciFunction(10))
console.log(fibonacciFunction(1))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//Create a test function.
//  use describe() to pass in the name of the function, oddNumbers
//  use it() to describe what oddNumbers is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

describe("oddNumbers", () => {
    it("Takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })

})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//Create a function called oddNumbers
//  parameters - an array
//  using filter, iterate through the array
//      check the typeof the index
//          if the typeof is a number, use the modulo to test for odd numbers and return the odd number
//          else skip the value
//  return the values sorted using sort().
//END

const oddNumbers = (array) => {
    return array.filter(value => {
        if(typeof value === 'number' && value %2 !== 0){
            return value
        }
    }).sort((a, b) => a - b);
}

console.log(oddNumbers(fullArr1))
console.log(oddNumbers(fullArr2))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


/*


Austin, i am consoling the right answer but whenever I run my test it says it fails. It was past midnight when I looked at this again so I figured it was too late
so I will ask you in the moring.


*/


// a) Create a test with expect statements for each of the variables provided.

//Create a test function.
//  use describe() to pass in the name of the function, accumalte
//  use it() to describe what accumalte is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("accumalte", () => {
    it("Takes in an array and returns an array of the accumulating sum.", () => {
        expect(accumalte(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumalte(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumalte(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

//Create a function called accumlate
//  parameters - an array of numbers
//  use map to iterate over the array
//      take the current value and add it to the previous
//      if there isn't a current value then add 0
//  return the array

const accumalte = (array) => {
    if(array.length < 1){
        return []
    }
    return array.map((value, index, arr) => {
        if(index === 0){
            return value;
        }
        else{
            arr[index] = arr[index] + arr[index - 1]
            value = arr[index]
            return value
        }
    })
}

// const accumalte = (array2) => {
//     var temp = []
//     for(let i = 0; i < array2.length; i++){
//         if(i == 0){
//             temp[i] = array2[i];
//         }
//         else{
//             array2[i] = array2[i] + array2[i - 1]
//             temp[i] = array2[i]
//         }
//     }
//     return temp
// }

//FROM THE REVIEW
// const accumalte = (array) => {
//     if(array.length > 0){
//         let arraysum = [array[0]]
//         for(let i=1; i < array.length; i++){
//             arraysum.push(array[i] + arraysum[i-1])
//         }
//         return arraysum
//     }
//     return []
// }
console.log(accumalte(numbersToAdd1))
console.log(accumalte(numbersToAdd2))
console.log(accumalte(numbersToAdd3))