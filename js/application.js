$(document).ready(function() {

var theNumber = Number(prompt("Please enter a number"));
var element = document.getElementById("fizzer");

if(theNumber){
  FizzBuzz(theNumber);
}
else {
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
    else if(Number >= 500) {
      $('div').append("Not so fast my friend, that number is too big");
    }
    else if(Number % 1 != 0) {
      $('div').append("Not a whole number");
    }
    else {
      $('div').append(i);
    }
  }
}
