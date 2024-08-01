
// 1. <빈칸>을 작성해주세요
const obj1 = {
  value :20,
  getValue(){
      return this.value;
  }
  
}
console.log( obj1.getValue() ) ; //  출력값 20


// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// 첫번째 this는 method라는 속성에 할당된 함수이므로 method 속성을 가리킨다.
// 두번째 this는 setTimeout 함수 내에서 사용된 콜백 함수로 일반 함수와 동일하게 기본적으로 전역 객체를 가리킨다.
// 따라서 두번째 this는 window가 된다.
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj2.method();