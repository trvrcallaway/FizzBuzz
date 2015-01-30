$(document).ready(function() {

var theNumber = Number(prompt("Please enter a number"));
var element = document.getElementById("fizzer");

if(theNumber){
  element.innerHTML = FizzBuzz(Number);
} else {
  element.innerHTML = 'no answer provided';
  };
});

var FizzBuzz = function(Number) {
  for (i = 1; i <= Number; i++) {
    if (i % 15 == 0) {
      $('div').append("Fizzbuzz");
    }

    else if(i % 3 == 0) {
      $('div').append("Fizz");
    }
    else if(i % 5 == 0) {
      $('div').append("Buzz");
    }
    else {
      $('div').append(i);
    }
  }
}
