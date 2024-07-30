function taskA() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task A Complete");
      }, 1000);
  });
}

function taskB() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task B Complete");
      }, 2000);
  });
}

function taskC() {
  return new Promise((resolve) => {
      const time = Math.floor(Math.random() * 5000);
      setTimeout(() => {
          resolve("Task C Complete");
      }, 3000);
  });
}

// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.

async function findFirstCompletedTask(array) {
  const firstEnd =  await Promise.race(array);
  
  console.log(firstEnd, '==')
  // return firstEnd
}

const array = [taskA(), taskB(), taskC()];
const result = findFirstCompletedTask(array);
console.log(result, '=')
// Promise.race(array).then(res => console.log(res));



// findFirstCompletedTask에서 firstEnd를 return하게 되면
// all처럼 모두 실행 종료된 후 함수가 종료되는 것 같은데 (39번재 줄 결과가 pending이라고 나옴)
// return 값이 할당된 후에 종료되게 못할까요?