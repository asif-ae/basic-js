// https://github.com/asif-ae/basic-js
/*
kilometerToMeter

budgetCalculator

hotelCost

megaFriend
*/

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

var resultInMeter = kilometerToMeter(3.25354645);
console.log(resultInMeter);