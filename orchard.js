///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0 // this line declares a new variable called 'totalAcres and assigns a value of 0 to it'
for (i = 0; i < 7; i++) /*Each iteration of the for loop represents a day of the week, hence 7. In each cycle, totalAcres is increased
by the number of acres for each of the apple sorts. For example, in the first cycle, we increase totalAcres by 8 because it is a sum of acres 
for all three apple sorts (look at 0-index the elements of each of the arrays). In the second cycle, the current value of the totalAcres is 
increased by a sum of the array elements with the index of 1.*/ 
{
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(" ")
console.log(`The total number of acres picked over the week is ${totalAcres}.`) // this line ouputs the total number of acres to the console





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7 // the average number of acres picked is a sum of acres picked on each day of the week divided by 7(the number of days in a week)
console.log(" ")
console.log(`The average daily number of acres picked over the week is ${averageDailyAcres}`)
console.log(" ")




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft == 0)
{
    days++ //days will increase by 1 on each iteration of the while loop
    acresLeft -= averageDailyAcres //On each iteration of the while loop, acresLeft will decrease by the average number of picked acres 
}


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// let fujiTons =
let fujiTons = fujiAcres.map(function(acre) /*fujiTons is a new array filled with mapped elements of fujiAcres.
Each element of the fujiAcres is simply multiplied by 6.5. The function passed into the .map() method takes in the array element and returns a value which is equal to the value of the argument multiplied by 6.5*/
{
    return acre * 6.5
})

// let galaTons =

 let galaTons = galaAcres.map(function(acre) /*the logic behind the block of code is the same as for the block of code above. galaTons is an array filled with mapped elements of the galaAcres array*/
 {
    return acre * 6.5
 })


// let pinkTons =
let pinkTons = pinkAcres.map(function(acre) /*pinkTons is an array filled with mapped elements of the pinkAcres array*/
{
    return acre *6.5
})


//the three blocks of code code below simply log out the number of tons of each of the sorts of apples picked on each day.
for (i = 0; i< fujiTons.length; i++)
{
    console.log(`day ${i+1}: ${fujiTons[i]} tons of Fuji apples collected`)
}

console.log(" ")
for (i = 0; i< galaTons.length; i++)
{
    console.log(`day ${i+1}: ${galaTons[i]} tons of Gala apples collected`)
}
console.log(" ")
for (i = 0; i < pinkTons.length; i++)
{
    console.log(`day ${i+1}: ${pinkTons[i]} tons of Pink apples collected`)
}


console.log(" ")

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =

function SumOfArrayEls(array) // this function takes in an array of numbers as an argument and returns the sum of its elements
{
    let Result = 0;
    for (i = 0; i< array.length; i++)
    {
Result +=array[i]
    } 
    return Result
}

let fujiPounds = SumOfArrayEls(fujiTons) * 2000 //the sum of all elements of the fujiTons array is multiplied by 2000 to convert the number of tons into pounds
let galaPounds = SumOfArrayEls(galaTons) * 2000//the sum of all elements of the galaiTons array is multiplied by 2000 to convert the number of tons into pounds
let pinkPounds = SumOfArrayEls(pinkTons) * 2000//the sum of all elements of the pinkTons array is multiplied by 2000 to convert the number of tons into pounds
console.log(`The total weight of gathered fuji apples is ${fujiPounds} pounds`)
console.log(`The total weight of gathered gala apples is ${galaPounds} pounds`)
console.log(`The total weight of gathered pink apples is ${pinkPounds} pounds`)






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =

// the profit gained from selling each separate sort of apples equals the number of pounds of picked apples multiplied by the price pound
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
let totalProfit = fujiProfit + galaProfit + pinkProfit //totalProfit is a sum of profits from each separate sort of apples
console.log(" ")

console.log(`The total profit from gathering and selling apples of the all three sorts is $${totalProfit}`)
// CODE HERE
