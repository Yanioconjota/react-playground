const arr = [1,2,3,4,5];

function minMaxSum(arr) {
  let sumValues = [];
  let max;
  let min;
  arr.forEach((e, i) => {
    const filteredArr = arr.filter((e, x) => i !== x);
    const sum = filteredArr.reduce((acc, v) => acc + v, 0);
    sumValues = [...sumValues, sum];
  });
  min = Math.min(...sumValues);
  max = Math.max(...sumValues);
  return `${min} ${max}`;
}

export const output = () => {
  return minMaxSum(arr);
}

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
If the numbers are 1, 2, 3, 4 and 5
Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
Sum everything except 1, the sum is 1 + 3 + 4 + 5 = 13.
Sum everything except 1, the sum is 1 + 2 + 4 + 5 = 12.
Sum everything except 1, the sum is 1 + 2 + 3 + 5 = 11.
Sum everything except 1, the sum is 1 + 2 + 3 + 4 = 10.
*/
