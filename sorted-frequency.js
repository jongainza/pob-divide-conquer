function sortedFrequency(arr, n) {
  let minInd = mnIx(arr, n);
  if (minInd === -1) return 0;
  let maxInd = mxIx(arr, n);
  let result = maxInd - minInd;
  return result;
}
function mnIx(arr, n, lI = 0, hI = arr.length - 1) {
  if (hI >= lI) {
    let half = Math.floor((hI + lI) / 2);

    if ((half === 0 || arr[half - 1] < n) && arr[half] === n) {
      return half;
    } else if (arr[half - 1] === n) {
      return mnIx(arr, n, half - 1, hI);
    } else if (arr[half - 1] > n) {
      return mnIx(arr, n, lI, half - 1);
    }
  }
  return -1;
}
function mxIx(arr, n, lI = 0, hI = arr.length - 1) {
  if (hI >= lI) {
    let half = Math.floor((hI + lI) / 2);
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return half;
    } else if (arr[half] > n) {
      return mxIx(arr, n, lI, half - 1);
    }
    return mxIx(arr, n, half + 1, hI);
  }
  return -1;
}

module.exports = sortedFrequency;
