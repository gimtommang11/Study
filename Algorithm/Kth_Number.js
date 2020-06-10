function solution(array, commands) {
  var answer = [];
  commands.map(commandItem => {
    let sliceItem = array.slice(commandItem[0] - 1, commandItem[1]).sort((a, b) => a - b)[commandItem[2] - 1];
    answer.push(sliceItem)
  })
  console.log(answer)
  return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3]
])