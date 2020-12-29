import { binarySearch } from '.'

describe('binarySearch', () => {
  it.each([
    [0, -1],
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
    [6, 5],
    [7, 6],
    [8, 7],
    [9, 8],
    [10, -1],
  ])(
    'should be possible to find a number using binary search',
    (target, idx) => {
      expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], target)).toEqual(idx)
    }
  )
})
