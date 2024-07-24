function operate(num1, operator, num2) {
  if (operator === '+') {
    return (num1 + num2);
  } else if (operator === '-') {
    return (num1 - num2);
  } else if (operator === '*') {
    return (num1 * num2);
  } else if (operator === '/') {
    return (num1 / num2);
  }
}


function operate2(num1, operator, num2) {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    case '/':
      return (num1 / num2);
    default:
      return null;
  }
}


console.log(operate(3, "+", 6)); // 결과값 9
console.log(operate(11, "-", 6)); // 결과값 5
console.log(operate(6, "*", 3)); // 결과값 18
console.log(operate(15, "/", 3)); // 결과값 5