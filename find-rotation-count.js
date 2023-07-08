function findRotationCount(arr, min = 0, high = arr.length - 1) {
  if (high < min) return 0;
  if (high === min) return min;
  let mid = Math.floor((min + high) / 2);

  if (high > min && arr[mid + 1] < arr[mid]) {
    return mid + 1;
  }
  if (mid > min && arr[mid] < arr[mid - 1]) {
    return mid;
  }
  if (arr[high] > arr[mid]) {
    return findRotationCount(arr, min, mid - 1);
  }
  return findRotationCount(arr, mid + 1, high);
}

module.exports = findRotationCount;
