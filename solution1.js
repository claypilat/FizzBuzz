function checknum(num) { 
  if ((num % 2 === 0) && (num % 5 === 0)) {
    return "FizzBuzz";
  }
  else if (num % 2 === 0) {
    return "Buzz";
  }
  else if (num % 5 === 0) {
    return "Fizz";
  } 
  else {
    return "Not Divisible";
  }

}

checknum(21);


function continuimChecknum(num) {
  while (num < 100); {
    if ((num % 2 === 0) && (num % 5 === 0)) {
    return "FizzBuzz";
  }
  else if (num % 2 === 0) {
    return "Buzz";
  }
  else if (num % 5 === 0) {
    return "Fizz";
  } 
  else {
    return num;
    }
  num++ 
  }

}

num = 0
continuimChecknum(num) 
// 2nd attempt doesnt work. Infinite loops. 