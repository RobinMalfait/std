import { choose, degrees, factorial, gcd, lcm, product, radians, sum } from '.'

describe('gcd', () => {
  it.each([
    // No arguments
    [[], 0],

    // All zeroes
    [[0, 0], 0],
    [[0, 0, 0], 0],
    [[0, 0, 0, 0], 0],

    // Some zeroes
    [[0, 1], 1],
    [[1, 0], 1],
    [[0, 0, 1], 1],

    // Prime numbers
    [[1, 3], 1],
    [[1, 3, 7, 13], 1],

    // Normal numbers
    [[12, 4], 4],
    [[54, 24], 6],
    [[4, 8, 16, 32, 64, 128], 4],
  ])('should calculate the gcd for example %#', (input, output) => {
    expect(gcd(...input)).toEqual(output)
  })
})

describe('lcm', () => {
  it.each([
    // No arguments
    [[], 0],

    // All zeroes
    [[0, 0], 0],
    [[0, 0, 0], 0],
    [[0, 0, 0, 0], 0],

    // Some zeroes
    [[0, 1], 0],
    [[1, 0], 0],

    // Prime numbers
    [[1, 3], 3],
    [[1, 3, 7, 13], 273],

    // Normal numbers
    [[21, 6], 42],
    [[8, 9, 21], 504],
  ])('should calculate the lcm for example %#', (input, output) => {
    expect(lcm(...input)).toEqual(output)
  })
})

describe('degrees', () => {
  it.each([
    [1, 57.2958],
    [2.5, 143.2394],

    [0, 0],
    [1.5708, 90.0002],
    [Math.PI, 180],
    [1.5 * Math.PI, 270],
    [2 * Math.PI, 360],
  ])(
    'should calculate the degrees for the given radians for example %#',
    (input, output) => {
      expect(degrees(input)).toBeCloseTo(output, 4)
    }
  )
})

describe('radians', () => {
  it.each([
    [1, 0.0175],
    [23, 0.4014],

    [0, 0],
    [90, 1.5708],
    [180, 3.1416],
    [270, 4.7124],
    [360, 6.2832],
  ])(
    'should calculate the radians for the given degrees for example %#',
    (input, output) => {
      expect(radians(input)).toBeCloseTo(output, 4)
    }
  )
})

describe('choose', () => {
  it.each([
    [0, 0, 1],
    [4, 12, 0],
    [12, 4, 495],
    [100, 1, 100],
    [100, 2, 4950],
  ])('should calculate the combinations for example %#', (a, b, output) => {
    expect(choose(a, b)).toEqual(output)
  })
})

describe('factorial', () => {
  it.each([
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
    [6, 720],
    [7, 5040],
    [8, 40320],
    [9, 362880],
    [10, 3628800],
    [20, 2_432_902_008_176_640_000],
  ])('should calculate the factorial for example %#', (input, output) => {
    expect(factorial(input)).toEqual(output)
  })
})

describe('sum', () => {
  it.each([
    [[], 0],
    [[1], 1],
    [[1, 2], 3],
    [[1, 2, 3], 6],
  ])('should calculate the sum for example %#', (input, output) => {
    expect(sum(input)).toEqual(output)
  })
})

describe('product', () => {
  it.each([
    [[], 0],
    [[1], 1],
    [[1, 2], 2],
    [[1, 2, 3], 6],
  ])('should calculate the product for example %#', (input, output) => {
    expect(product(input)).toEqual(output)
  })
})
