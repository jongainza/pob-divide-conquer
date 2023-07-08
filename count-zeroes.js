function countZeroes(arr) {
  let firstZero = findFirst(arr);
  if (firstZero === -1) {
    return 0;
  }
  return arr.length - firstZero;
}
function findFirst(arr, minIn = 0, maxInd = arr.length - 1) {
  if (maxInd >= minIn) {
    let half = minIn + Math.floor((maxInd - minIn) / 2);
    if ((half === 0 || arr[half - 1] === 1) && arr[half] === 0) {
      return half;
    } else if (arr[half] === 1) {
      return findFirst(arr, half + 1, maxInd);
    }
    return findFirst(arr, minIn, half - 1);
  }
  return -1;
}

module.exports = countZeroes;
