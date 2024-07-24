1. let uninitialized;
console.log(uninitialized); // 결과값 <  undefined >
// 이유 : 선언 후 할당이 되지 않음


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 이유 : const 키워드로 선언된 변수는 재할당이 불가능함


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 이유 : index는 0부터 시작하므로 3번째 요소는 19


// 4. 
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
// 이유 : ""은 falsy한 값으로 불리안으로 false 값을 가짐.