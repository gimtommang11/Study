function solution(priorities, location) {
  var answer = 0;
  let bigNum = priorities[0];
  let count = 0;
  let pivot = 0;

  while (priorities.length != 0) {
    let num = priorities.splice(0, 1)[0];
    for (let j = 0; j < priorities.length; j++) {
      if (num < priorities[j]) { //num보다 큰게 있을때
        num = priorities[j];
        pivot = j;
      }
    }
    if(pivot == location) ;
    answer++;
  }
  return answer;
}