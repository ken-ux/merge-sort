function fibs(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log(fibs(5));

function fibsRec(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }

  return [
    ...fibsRec(num - 1),
    fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
  ];
}

console.log(fibsRec(5));
