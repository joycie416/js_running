//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
var arr=  [10, 20, 30];

// 해당 로직을 작성하세요 
let arr1 = [];
arr.forEach(num => {
  arr1.push(num*10);
})

// 결과 값: [100, 200, 300] 출력해주세요 
console.log(arr1);



// 2. 
var arr=  [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let arr2 = [];
arr.forEach(num => {
  if (num%5 === 0){
    arr2.push(num)
  }
})

// 결과값 [10]
console.log(arr2);