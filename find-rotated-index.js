function findRotatedIndex(arr, num) {
  pivot = findPivot(arr);
  if (pivot > 0 && num >= arr[0] && num <= pivot - 1) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[length - 1]) {
    return 0;
  }
  let start = 0;
  let end = arr.length - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
function binarySearch(arr, num, start, end) {
  if (arr.length === 0) {
    return -1;
  }
  if (num < arr[start] || num > arr[end]) {
    return -1;
  }
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
