// 1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
 
];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]
let good = students.filter(student => {
  let mean = student.scores.reduce((sum,cur) => sum + cur)/student.scores.length;
  return mean >= 80;
}).map(student => student.name);
console.log(good);


// method chaining?
let good1 = students.filter(student => {
  let mean = student.scores.reduce((sum,cur) => sum + cur)/student.scores.length;
  return mean >= 80;
})
good1 = good1.map(student => student.name);
console.log(good1);



// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
let newNumbers = numbers.map(num => num*2);
newNumbers = newNumbers.filter(num => num <= 30);
console.log(newNumbers);


// method chaining?
let newNumbers1 = numbers.map(num => num*2).filter(num => num <= 30);
console.log(newNumbers1);