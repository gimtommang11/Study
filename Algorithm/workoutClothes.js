function solution(n, lost, reserve) {
  var answer = 0;
  let student = Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    student[lost[i] - 1] -= 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i] - 1] += 1;
  }
  for (let i = 0; i < n; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2 || student[i + 1] === 2) {
        if (student[i - 1] === 2) {
          student[i] += 1;
          student[i - 1] -= 1;
        } else if (student[i + 1] === 2) {
          student[i] += 1;
          student[i + 1] -= 1;
        }
      }
    }
  }
  answer = student.filter((workoutClothe) => workoutClothe >= 1).length;
  return answer;
}
