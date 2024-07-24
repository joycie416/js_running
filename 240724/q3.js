function parityCheck(n) {
  if (n%2 === 0) {
    return '짝수';
  }else{
    return '홀수';
  }
}

console.log(parityCheck(10)); // 결과값 "짝수";
console.log(parityCheck(7)); // 결과값 "홀수";