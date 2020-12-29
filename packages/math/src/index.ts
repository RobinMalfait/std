function simpleGcd(x: number, y: number): number {
  if (x === 0 && y === 0) return 0
  if (y === 0) return x
  return simpleGcd(y, x % y)
}

export function gcd(...numbers: number[]) {
  if (numbers.length <= 0) return 0
  if (numbers.every((number) => number === 0)) return 0

  return numbers.reduce(simpleGcd)
}

function simpleLcm(x: number, y: number): number {
  if (x === 0 || y === 0) return 0
  return Math.abs((x * y) / simpleGcd(x, y))
}

export function lcm(...numbers: number[]) {
  if (numbers.length <= 0) return 0
  if (numbers.every((number) => number === 0)) return 0

  return numbers.reduce(simpleLcm)
}

export function degrees(radians: number) {
  return radians * (180 / Math.PI)
}

export function radians(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function choose(n: number, k: number) {
  if (k > n) return 0

  return factorial(n) / (factorial(k) * factorial(n - k))
}

let factorialCache = new Map<number, number>([
  [0, 1],
  [1, 1],
])

export function factorial(n: number): number {
  if (factorialCache.has(n)) return factorialCache.get(n) as number
  let result = n * factorial(n - 1)
  factorialCache.set(n, result)
  return result
}

export function sum(numbers: number[]) {
  if (numbers.length <= 0) return 0
  if (numbers.length === 1) return numbers[0]

  let total = 0
  for (let number of numbers) total += number
  return total
}

export function product(numbers: number[]) {
  if (numbers.length <= 0) return 0
  if (numbers.length === 1) return numbers[0]

  let total = 1
  for (let number of numbers) total *= number
  return total
}
