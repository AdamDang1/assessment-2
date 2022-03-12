///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal + (cartTotal * tax)) - couponValue
}

console.log(calcFinalPrice(100, 20, .10));



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The properties that my customer object would have are CUSTOMER NAME(str), to identify the customer.
    It would also have their PHONE NUMBER(num) to contact about any issues.
    If they are a FIRST TIME DINER(bool) so we can give recommendations on guests' favorite dishes.
    If they have any ALLERGIES(str) so we don't end up killing anyone.
    What their BUDGET(num) is so we can work within those confines and still give them a tasty/filling meal.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const firstTimeGuest = {
    name: 'Adam',
    phoneNumber: 5058713425,
    repeatGuest: false,
    allergies: ['gluten', 'pine nuts', 'soy'],
    budget: 80,
};