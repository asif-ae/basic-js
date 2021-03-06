// https://github.com/asif-ae/basic-js

// Solution of the first problem.
function kilometerToMeter(getKilometer) {
  // Stored kilometer in a variable.
  var kilometer = getKilometer;
  if (typeof kilometer != 'number') {
    // This block of code to be executed if the kilometer is not type of a number.
    return console.log(kilometer + ' is not a number!');
  } else if (kilometer <= 0) {
    // This block of code to be executed if the kilometer is less than or equal to zero.
    return console.log("Your 'input' shouldn't be less than or equal to zero!");
  } else if (typeof kilometer == 'number') {
    // This block of code to be executed if the kilometer is type of a number.

    // Convert from meters to kilometers.
    var meter = kilometer * 1000;
    // This line will returns a floating point number.
    meter = parseFloat(meter);
    // This line will round the number to keep only two decimals.
    meter = meter.toFixed(2);
    return meter;
  }
}
// Test/calculate a kilometer value.
var resultInMeter = kilometerToMeter(3.25354645);
console.log(resultInMeter);

// Solution of the second problem.
function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
  quantityOfWatch = quantityOfWatch;
  quantityOfMobile = quantityOfMobile;
  quantityOfLaptop = quantityOfLaptop;
  // Calculate sub total price of watch.
  var priceOfWatch = 50 * quantityOfWatch;
  // Calculate sub total price of mobile.
  var priceOfMobile = 100 * quantityOfMobile;
  // Calculate sub total price of laptop.
  var priceOfLaptop = 500 * quantityOfLaptop;
  // Calculate total of your products.
  var totalAmount = priceOfWatch + priceOfMobile + priceOfLaptop;
  return totalAmount;
}
// Test/calculate a shopping bill.
var yourBill = budgetCalculator(0, 3, 5);
console.log(yourBill);

// Solution of the third problem.
function hotelCost(totalDay) {
  // Bill for the first ten days
  var firstTenDays = 1000;
  // Bill for the second ten days
  var secondTenDays = 800;
  // Ten days minus from total days
  var minusTenDays = totalDay - 10;
  // Twenty days minus from total days
  var minusTwentyDays = totalDay - 20;
  if (totalDay == 0) {
    // This block of code to be executed if the total day is equal to zero.
    return console.log("You will not stay here!")
  } else if (totalDay <= 10) {
    // This block of code to be executed if the total day is less than or equal to ten.
    return totalDay = totalDay * 100;
  } else if (totalDay <= 20) {
    // This block of code to be executed if the total day is less than or equal to twenty.
    return totalDay = firstTenDays + (minusTenDays * 80);
  } else {
    // This block of code to be executed if the total day is more than twenty.
    return totalDay = firstTenDays + secondTenDays + (minusTwentyDays * 50);
  }
}
// Test/calculate a hotel bill.
var totalHotelBill = hotelCost(21);
console.log(totalHotelBill);

// Solution of the fourth problem.
function megaFriend(arrayItems) {
  var itemLength = 0;
  var biggestItem;
  if (arrayItems.length == 0) {
    // This block of code to be executed if your array is empty.
    return console.log("Your array must have more than two items!");
  } else if (!Array.isArray(arrayItems)) {
    // This block of code to be executed if your item(s) is not an array.
    return console.log("Your item(s) is not an array!");
  } else {
    // This block of code to be executed if your array fullfill all conditions.
    for (var p = 0; p < arrayItems.length; p++) {
      if (arrayItems[p].length > itemLength) {
        var itemLength = arrayItems[p].length;
        biggestItem = arrayItems[p];
      }
    }
    return biggestItem;
  }
}
// Test megaFriend problem.
var friends = ["Asif", "Istiak", "Tushar", "Estiak", "Shihab"];
var resultMega = megaFriend(friends);
console.log(resultMega);