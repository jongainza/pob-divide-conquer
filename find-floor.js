function findFloor(arr, n, min = 0, max = arr.length - 1) {
  if (n < arr[min]) return -1;
  if (arr[max] < n) return arr[max];
  let mid = Math.floor((max + min) / 2);

  if (arr[mid] === n) {
    return arr[mid];
  }
  if (mid > 0 && arr[mid - 1] <= n && arr[mid] > n) {
    return arr[mid - 1];
  }
  if (n < arr[mid]) {
    return findFloor(arr, n, min, mid - 1);
  }
  return findFloor(arr, n, mid + 1, max);
}

module.exports = findFloor;
