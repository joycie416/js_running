const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function average(scores) {
  // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
  let n = scores.length
  let sum = scores[0];
  for (let i = 1; i < n; i++) {
    sum = operate(sum, '+', scores[i]);
  }

  return operate(sum,'/',n);
}

// from q4.js
function operate(num1, operator, num2) {
  if (operator === '+') {
    return(num1 + num2);
  } else if (operator === '-') {
    return(num1 - num2);
  } else if (operator === '*') {
    return(num1 * num2);
  } else if (operator === '/') {
    return(num1 / num2);
  }
}

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]

console.log(average(scores));
console.log(scores.reduce((sum, cur) => sum + cur)/scores.length);