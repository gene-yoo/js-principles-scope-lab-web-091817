// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer (newName) {
  bestCustomer = newName;
}

const leastFavoriteCustomer = 'me';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'you';
}

function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = 'paul';
  let favoriteCustomer = 'mike';
}
