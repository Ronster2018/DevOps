// ES6
// Filter - accepts a callback and returns new array. The call back is called on each element in the arry.

const arr = [1,2,3,4,5,6];

const newArray = arr.filter( a => a % 2 === 0);
console.log(newArray);
// OUtput = [2,4,6]

// Map - Map each element from the origional array into a new element and to create a new array with those new mapped elements
// also accepts a single arguement and what's returned is considered a new mapped element.
// If 

const mappedArr = [1,2,3,4,5,6];

const newmappedArray = mappedArr.map( a => a % 2 === 0);
console.log(newmappedArray);
// Output: [false, true, false, true, false, true]

const newMappedArraySqer = mappedArr.map( a => a*a);
console.log(newMappedArraySqer);
// output: [1, 4, 9, 16, 25, 36]

// Reduce - Reduce all elements of the array into a single element. Takes two

const numbers = [1,2,3,4,5,6];

const newReducedArray = numbers.reduce((num1, num2) =>{
    return num1+num2
}); 

console.log(newReducedArray);
// OUtput = [2,4,6]


const orders = [
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 2,
        amount: 15
    },
    {
        userId: 1,
        amount: 20
    },
    {
        userId: 2,
        amount: 40
    }
]

//First, lets filter the array for userID = 1
// returns if order.userId is 1
let amount = orders.filter(order => order.userId === 1)
//Now we map each userId to the amount
.map(order => order.amount)

//Now we want to return the sum. Reduce accepts two arguements
.reduce((a, b) => a + b);
console.log(amount)