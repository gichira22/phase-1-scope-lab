// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

//upperCaseCustomerName();

//Function that sets best customer to 'not bob'
function setBestCustomer() {
  bestCustomer = "not bob";
  console.log(bestCustomer);
}
//Function overrides the bestcustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  console.log(bestCustomer);
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = "somebody";

// Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "nobody";
}
