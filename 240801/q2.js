// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// var name이 myName 함수 스코프 안에서 재선언되었으므로 'yuno2'가 출력됨

// var name = "yuno";

// function myName(){
//     var name = "yuno2";
//     function a(){
//         console.log(name);
//     }
//     return a();
// }

// myName();


// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 함수 스코프를 제외하면 바로 바깥 스코프에 해당함
// 따라서 if문 안에서 재선언된 var x = 2에 의해 2가 출력됨

// function test() {
//     var x = 1;

//     if(true){
//         var x = 2; 
//     }

//     console.log(x);
// }

// test();


// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수 : yuno
// 일반 함수 : undefined
// 화살표 함수는 직전 스코프와 동일한 위치에서 this를 가져오며
// 함수 선언문은 기본적으로 global을 this로 가짐.
// 따라서 화살표 함수 내에서 불러온 this는 nameObj이고
// 함수 선언문 내에서 불러온 this는 global이다.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

