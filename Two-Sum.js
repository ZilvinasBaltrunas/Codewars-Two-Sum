function twoSum(numbers, target) {
  answer = [];
  for (let j=0; j<(numbers.length-1); j++) {
    for (let i=1; i<numbers.length; i++) {
      sum = numbers[j] + numbers[j+i];
      if (sum == target) {
        answer.push(j);
        answer.push(j+i); 
      }
    }
  }
  return (answer);
}