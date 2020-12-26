export function isDisjoint<T>(set: Set<T>, other: Set<T>) {
  if (set === other) return set.size <= 0

  for (let it of set) {
    if (other.has(it)) return false
  }

  return true
}

export function isSubset<T>(set: Set<T>, other: Set<T>) {
  if (set === other) return true

  for (let it of set) {
    if (!other.has(it)) return false
  }

  return true
}

export function isStrictSubset<T>(set: Set<T>, other: Set<T>) {
  if (set === other) return false
  if (set.size >= other.size) return false

  for (let it of set) {
    if (!other.has(it)) return false
  }

  return true
}

export function isSuperset<T>(set: Set<T>, other: Set<T>) {
  if (set === other) return true

  for (let it of other) {
    if (!set.has(it)) return false
  }

  return true
}

export function isStrictSuperset<T>(set: Set<T>, other: Set<T>) {
  if (set === other) return false
  if (set.size <= other.size) return false

  for (let it of other) {
    if (!set.has(it)) return false
  }

  return true
}

export function union<T>(...sets: Set<T>[]) {
  let shared = new Set<T>()

  for (let set of sets) {
    for (let it of set) shared.add(it)
  }

  return shared
}

export function intersection<T>(...sets: Set<T>[]) {
  if (sets.length <= 1) return new Set(sets[0])

  let shared = new Set<T>()
  let [lo, ...others] = sets.sort((a, z) => a.size - z.size)

  for (let it of lo) {
    if (others.every((other) => other.has(it))) shared.add(it)
  }

  return shared
}

export function difference<T>(set: Set<T>, ...others: Set<T>[]) {
  let diff = new Set<T>()
  if (others.some((other) => other === set)) return diff

  for (let it of set) {
    if (!others.some((other) => other.has(it))) diff.add(it)
  }

  return diff
}

export function symmetricDifference<T>(set: Set<T>, other: Set<T>) {
  let diff = new Set<T>()
  if (set === other) return diff

  for (let it of set) {
    if (!other.has(it)) diff.add(it)
  }

  for (let it of other) {
    if (!set.has(it)) diff.add(it)
  }

  return diff
}

export function copy<T>(set: Set<T>) {
  return new Set(set)
}

export function update<T>(set: Set<T>, ...others: Set<T>[]) {
  if (others.length <= 0) return set

  for (let other of others) {
    if (other === set) continue
    if (other.size <= 0) continue

    for (let it of other) set.add(it)
  }

  return set
}

export function intersectionUpdate<T>(set: Set<T>, ...others: Set<T>[]) {
  for (let it of set) {
    if (!others.every((other) => other.has(it))) set.delete(it)
  }

  return set
}

export function differenceUpdate<T>(set: Set<T>, ...others: Set<T>[]) {
  for (let it of set) {
    if (others.some((other) => other.has(it))) set.delete(it)
  }

  return set
}

export function symmetricDifferenceUpdate<T>(set: Set<T>, other: Set<T>) {
  if (set === other) {
    set.clear()
    return set
  }

  let drop = new Set<T>()
  let add = new Set<T>()

  for (let it of set) {
    if (other.has(it)) drop.add(it)
    else add.add(it)
  }

  for (let it of other) {
    if (set.has(it)) drop.add(it)
    else add.add(it)
  }

  for (let it of drop) set.delete(it)
  for (let it of add) set.add(it)

  return set
}

export function add<T>(set: Set<T>, item: T): Set<T> {
  set.add(item)
  return set
}

export function remove<T>(set: Set<T>, item: T): Set<T> {
  if (!set.has(item)) {
    throw new Error(`Cannot remove item from set, it does not exist.`)
  }

  set.delete(item)
  return set
}

export function discard<T>(set: Set<T>, item: T): Set<T> {
  if (set.size <= 0) return set
  set.delete(item)
  return set
}

export function clear<T>(set: Set<T>): Set<T> {
  if (set.size > 0) set.clear()
  return set
}

export function map<T>(set: Set<T>, cb: (it: T, idx: number) => T) {
  let copy = new Set<T>()
  if (set.size <= 0) return copy

  let idx = 0
  for (let it of set) copy.add(cb(it, idx++))

  return copy
}

export function filter<T>(set: Set<T>, cb: (it: T, idx: number) => boolean) {
  let copy = new Set<T>()
  if (set.size <= 0) return copy

  let idx = 0
  for (let it of set) {
    if (cb(it, idx++)) copy.add(it)
  }

  return copy
}
