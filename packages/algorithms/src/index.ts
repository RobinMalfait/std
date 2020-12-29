export function binarySearch<T>(list: T[], target: T) {
  let lo = 0
  let hi = list.length - 1

  while (lo <= hi) {
    let mid = (lo + hi) >> 1

    if (list[mid] < target) lo = mid + 1
    else if (list[mid] > target) hi = mid - 1
    else return mid
  }

  return -1
}
