function mergeSort(arr) {
  // Single value array is already sorted
  if (arr.length === 1) {
    return arr;
  }

  // Split array in half
  let arrLeft = arr.slice(0, arr.length / 2);
  let arrRight = arr.slice(arr.length / 2);

  // Sort the halves recursively
  arrLeft = mergeSort(arrLeft);
  arrRight = mergeSort(arrRight);

  // Sort and merge the halves
  let sortedArr = [];
  while (arrLeft.length > 0 && arrRight.length > 0) {
    if (arrLeft[0] <= arrRight[0]) {
      sortedArr.push(arrLeft[0]);
      arrLeft.shift();
    } else {
      sortedArr.push(arrRight[0]);
      arrRight.shift();
    }
  }

  // Merge any remaining items still in the split arrays
  if (arrLeft.length > 0 && arrRight.length === 0) {
    sortedArr.push(...arrLeft); // EQUIVALENT: sortedArr = sortedArr.concat(arrLeft);
  }
  if (arrRight.length > 0 && arrLeft.length === 0) {
    sortedArr.push(...arrRight); // EQUIVALENT: sortedArr = sortedArr.concat(arrRight);
  }

  return sortedArr;
}
