import {
  add,
  clear,
  copy,
  difference,
  differenceUpdate,
  discard,
  filter,
  intersection,
  intersectionUpdate,
  isDisjoint,
  isStrictSubset,
  isStrictSuperset,
  isSubset,
  isSuperset,
  map,
  remove,
  symmetricDifference,
  symmetricDifferenceUpdate,
  union,
  update,
} from '.'

describe('isDisjoint', () => {
  it('should be disjoint when 2 sets are the same and empty', () => {
    let a = new Set()

    expect(isDisjoint(a, a)).toBe(true)
  })

  it('should not be disjoint when 2 sets are the same and non-empty', () => {
    let a = new Set([1, 2, 3, 4])

    expect(isDisjoint(a, a)).toBe(false)
  })

  it('should be disjoint when 2 sets are empty', () => {
    let a = new Set()
    let b = new Set()

    expect(isDisjoint(a, b)).toBe(true)
  })

  it('should be disjoint when none of the items of a are in b', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set()

    expect(isDisjoint(a, b)).toBe(true)
  })

  it('should be disjoint when none of the items of b are in a', () => {
    let a = new Set([])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isDisjoint(a, b)).toBe(true)
  })

  it('should be disjoint when none of the items of a are in b (with same length set)', () => {
    let a = new Set([6, 7, 8, 9, 10])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isDisjoint(a, b)).toBe(true)
  })

  it('should be disjoint when none of the items of a are in b (with same length set)', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([6, 7, 8, 9, 10])

    expect(isDisjoint(a, b)).toBe(true)
  })
})

describe('isSubset', () => {
  it('should be a subset when 2 sets are the same and empty', () => {
    let a = new Set()

    expect(isSubset(a, a)).toBe(true)
  })

  it('should be a subset when 2 sets are the same and non-empty', () => {
    let a = new Set([1, 2, 3, 4, 5])

    expect(isSubset(a, a)).toBe(true)
  })

  it('should be a subset when 2 sets are empty', () => {
    let a = new Set()
    let b = new Set()

    expect(isSubset(a, b)).toBe(true)
    expect(isSubset(b, a)).toBe(true)
  })

  it('should be a subset if all items are in the other set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isSubset(a, b)).toBe(true)
    expect(isSubset(b, a)).toBe(true)
  })

  it('should be a subset, when all items exist in the other set', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isSubset(a, b)).toBe(true)
  })

  it('should not be a subset, when some items do not exist in the other set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3])

    expect(isSubset(a, b)).toBe(false)
  })

  it('should not be a subset, when the amount of items is the same but items do not overlap', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 6])

    expect(isSubset(a, b)).toBe(false)
    expect(isSubset(b, a)).toBe(false)
  })
})

describe('isStrictSubset', () => {
  it('should not be a strict subset when 2 sets are the same and empty', () => {
    let a = new Set()

    expect(isStrictSubset(a, a)).toBe(false)
  })

  it('should not be a strict subset when 2 sets are the same and non-empty', () => {
    let a = new Set([1, 2, 3, 4, 5])

    expect(isStrictSubset(a, a)).toBe(false)
  })

  it('should not be a strict subset when 2 sets are empty', () => {
    let a = new Set()
    let b = new Set()

    expect(isStrictSubset(a, b)).toBe(false)
    expect(isStrictSubset(b, a)).toBe(false)
  })

  it('should not be a strict subset if all items are in the other set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isStrictSubset(a, b)).toBe(false)
    expect(isStrictSubset(b, a)).toBe(false)
  })

  it('should be a strict subset, when all items exist in the other set', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isStrictSubset(a, b)).toBe(true)
  })

  it('should not be a strict subset, when some items do not exist in the other set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3])

    expect(isStrictSubset(a, b)).toBe(false)
  })

  it('should not be a strict subset, when the amount of items is the same but items do not overlap', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 6])

    expect(isStrictSubset(a, b)).toBe(false)
    expect(isStrictSubset(b, a)).toBe(false)
  })
})

describe('isSuperset', () => {
  it('should be a superset when 2 sets are the same and empty', () => {
    let a = new Set()

    expect(isSuperset(a, a)).toBe(true)
  })

  it('should be a superset when 2 sets are the same and non-empty', () => {
    let a = new Set([1, 2, 3, 4, 5])

    expect(isSuperset(a, a)).toBe(true)
  })

  it('should be a superset when 2 sets are empty', () => {
    let a = new Set()
    let b = new Set()

    expect(isSuperset(a, b)).toBe(true)
    expect(isSuperset(b, a)).toBe(true)
  })

  it('should be a superset if all items of the other set are in this set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isSuperset(a, b)).toBe(true)
    expect(isSuperset(b, a)).toBe(true)
  })

  it('should not be a superset, when all items of other exists in in this set', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isSuperset(a, b)).toBe(false)
  })

  it('should be a superset, when some items of the other set do not exist', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3])

    expect(isSuperset(a, b)).toBe(true)
  })

  it('should not be a superset, when the amount of items is the same but items do not overlap', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 6])

    expect(isSuperset(a, b)).toBe(false)
    expect(isSuperset(b, a)).toBe(false)
  })
})

describe('isStrictSuperset', () => {
  it('should not be a strict superset when 2 sets are the same and empty', () => {
    let a = new Set()

    expect(isStrictSuperset(a, a)).toBe(false)
  })

  it('should not be a strict superset when 2 sets are the same and non-empty', () => {
    let a = new Set([1, 2, 3, 4, 5])

    expect(isStrictSuperset(a, a)).toBe(false)
  })

  it('should not be a strict superset when 2 sets are empty', () => {
    let a = new Set()
    let b = new Set()

    expect(isStrictSuperset(a, b)).toBe(false)
    expect(isStrictSuperset(b, a)).toBe(false)
  })

  it('should not be a strict superset if all items of the other set are in this set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isStrictSuperset(a, b)).toBe(false)
    expect(isStrictSuperset(b, a)).toBe(false)
  })

  it('should not be a strict superset, when all items of other exists in in this set', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([1, 2, 3, 4, 5])

    expect(isStrictSuperset(a, b)).toBe(false)
  })

  it('should be a strict superset, when some items of the other set do not exist', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3])

    expect(isStrictSuperset(a, b)).toBe(true)
  })

  it('should not be a strict superset, when the amount of items is the same but items do not overlap', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([1, 2, 3, 4, 6])

    expect(isStrictSuperset(a, b)).toBe(false)
    expect(isStrictSuperset(b, a)).toBe(false)
  })
})

describe('union', () => {
  it('should combine an empty set and a filled in set', () => {
    let a = new Set([])
    let b = new Set([1, 2, 3, 4])

    let result = union(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should combine a fill in set and an empty set', () => {
    let a = new Set([1, 2, 3, 4])
    let b = new Set([])

    let result = union(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should combine 2 filled in sets', () => {
    let a = new Set([1, 2, 3, 4])
    let b = new Set([3, 4, 5, 6])

    let result = union(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should combine multiple sets', () => {
    let a = new Set([1, 2, 3, 4])
    let b = new Set([3, 4, 5, 6])
    let c = new Set([5, 6, 7, 8])

    let result = union(a, b, c)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
  })
})

describe('intersection', () => {
  it('should result in an empty set when no sets have been provided', () => {
    let result = intersection()

    expect(result).toEqual(new Set([]))
  })

  it('should result in a new set when only a single set has been provided', () => {
    let a = new Set([1, 2, 3])
    let result = intersection(a)

    expect(result).toEqual(new Set([1, 2, 3]))
    expect(result).not.toBe(a)
  })

  it('should result in the empty set when `a` is empty', () => {
    let a = new Set([])
    let b = new Set([1, 2, 3, 4, 5])

    let result = intersection(a, b)

    expect(result).toEqual(new Set([]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the empty set when `b` is empty', () => {
    let a = new Set([4, 5, 6, 7, 8])
    let b = new Set([])

    let result = intersection(a, b)

    expect(result).toEqual(new Set([]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should intersect 2 sets', () => {
    let a = new Set([4, 5, 6, 7, 8])
    let b = new Set([1, 2, 3, 4, 5])

    let result = intersection(a, b)

    expect(result).toEqual(new Set([4, 5]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should intersect 2 sets where there is a very very large set to compare to', () => {
    let a = new Set([3, 4, 5])
    let b = new Set(Array.from(Array(1000).keys()))

    let result = intersection(a, b)

    expect(result).toEqual(new Set([3, 4, 5]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should intersect multiple sets', () => {
    let a = new Set([1, 2, 3, 4, 5, 6, 7])
    let b = new Set([3, 4, 5, 6, 7, 8, 9])
    let c = new Set([6, 7, 8, 9, 10, 11])

    let result = intersection(a, b, c)

    expect(result).toEqual(new Set([6, 7]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
  })
})

describe('difference', () => {
  it('should result in an empty set when one of the other sets is the initial set (when the initial set is empty)', () => {
    let a = new Set()

    let result = difference(a, a)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
  })

  it('should result in an empty set when one of the other sets is the initial set (when the initial set is non-empty)', () => {
    let a = new Set([1, 2, 3, 4, 5])

    let result = difference(a, a)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
  })

  it('should result in an empty set for two empty sets', () => {
    let a = new Set()
    let b = new Set()

    let result = difference(a, b)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in an empty set when 2 sets are the same', () => {
    let a = new Set([1, 2, 3, 4])
    let b = new Set([1, 2, 3, 4])

    let result = difference(a, b)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in an empty set when the `set` is empty', () => {
    let a = new Set([])
    let b = new Set([1, 2, 3, 4])

    let result = difference(a, b)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the values of the `set` when the others are empty', () => {
    let a = new Set([1, 2, 3, 4])
    let b = new Set([])

    let result = difference(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the difference of multiple sets', () => {
    let a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let b = new Set([1, 2])
    let c = new Set([2, 3])
    let d = new Set([3, 4])

    let result = difference(a, b, c, d)

    expect(result).toEqual(new Set([5, 6, 7, 8, 9]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
    expect(result).not.toBe(d)
  })

  it('should result in the empty set when one of the multiple sets is the initial set', () => {
    let a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let b = new Set([1, 2])
    let c = new Set([2, 3])
    let d = new Set([3, 4])

    let result = difference(a, b, c, a, d)

    expect(result).toEqual(new Set([]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
    expect(result).not.toBe(d)
  })
})

describe('symmetricDifference', () => {
  it('should result in the empty set when two sets are empty', () => {
    let a = new Set()
    let b = new Set()

    let result = symmetricDifference(a, b)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the empty set when two sets are the same', () => {
    let a = new Set()

    let result = symmetricDifference(a, a)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
  })

  it('should result in the empty set when two sets have the same values', () => {
    let a = new Set([1, 2, 3, 4, 5, 6])
    let b = new Set([1, 2, 3, 4, 5, 6])

    let result = symmetricDifference(a, b)

    expect(result).toEqual(new Set())
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the items of the `set` set when the `other` set is empty', () => {
    let a = new Set([1, 2, 3, 4, 5, 6])
    let b = new Set([])

    let result = symmetricDifference(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the items of the `other` set when the `set` set is empty', () => {
    let a = new Set([])
    let b = new Set([1, 2, 3, 4, 5, 6])

    let result = symmetricDifference(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })

  it('should result in the items from `set` that are no in `other` and the items from `other` that are not in `set`', () => {
    let a = new Set([1, 2, 3, 4, 5, 6])
    let b = new Set([4, 5, 6, 7, 8, 9])

    let result = symmetricDifference(a, b)

    expect(result).toEqual(new Set([1, 2, 3, 7, 8, 9]))
    expect(result).not.toBe(a)
    expect(result).not.toBe(b)
  })
})

describe('copy', () => {
  it('should make a shallow copy of the empty set', () => {
    let a = new Set()

    let result = copy(a)

    expect(result).toEqual(new Set())
    expect(result).toEqual(a)
    expect(result).not.toBe(a)
  })

  it('should make a shallow copy of a set with values', () => {
    let a = new Set([1, 2, 3, 4, 5])

    let result = copy(a)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5]))
    expect(result).toEqual(a)
    expect(result).not.toBe(a)
  })
})

describe('update', () => {
  it('should be a no-op when no `other` sets are provided', () => {
    let a = new Set([1, 2, 3])

    let result = update(a)

    expect(result).toEqual(new Set([1, 2, 3]))
    expect(a).toEqual(new Set([1, 2, 3]))
    expect(a).toBe(result)
  })

  it('should mutate the `set` and add all the items of the `other` sets', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([2, 3, 4, 5])
    let c = new Set([3, 4, 5, 6, 7])

    let result = update(a, b, c)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]))
    expect(a).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]))
    expect(a).toBe(result)
  })
})

describe('intersectUpdate', () => {
  it('should update the `set` with the intersection of the `other` sets', () => {
    let a = new Set([1, 2, 3, 4, 5, 6, 7])
    let b = new Set([2, 3, 4, 5, 6, 7])
    let c = new Set([1, 2, 3, 4, 5, 6])

    let result = intersectionUpdate(a, b, c)

    expect(result).toEqual(new Set([2, 3, 4, 5, 6]))
    expect(result).toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
  })
})

describe('differenceUpdate', () => {
  it('should update the `set` with the difference of the `other` sets', () => {
    let a = new Set([1, 2, 3, 4, 5, 6, 7])
    let b = new Set([2, 3])
    let c = new Set([5, 7])

    let result = differenceUpdate(a, b, c)

    expect(result).toEqual(new Set([1, 4, 6]))
    expect(result).toBe(a)
    expect(result).not.toBe(b)
    expect(result).not.toBe(c)
  })
})

describe('symmetricDifferenceUpdate', () => {
  it('should clear the `set` when it should symmetricly update with itself', () => {
    let a = new Set([1, 2, 3, 4, 5])

    let result = symmetricDifferenceUpdate(a, a)

    expect(result).toEqual(new Set([]))
    expect(result).toBe(a)
  })

  it('should update the `set` with the symmetric difference of the `other` set', () => {
    let a = new Set([1, 2, 3, 4, 5])
    let b = new Set([3, 4, 5, 6, 7])

    let result = symmetricDifferenceUpdate(a, b)

    expect(result).toEqual(new Set([1, 2, 6, 7]))
    expect(result).toBe(a)
    expect(result).not.toBe(b)
  })
})

describe('add', () => {
  it('should be possible to add an item to a set', () => {
    let a = new Set([1, 2, 3, 4])
    let result = add(a, 5)

    expect(result).toEqual(new Set([1, 2, 3, 4, 5]))
    expect(result).toBe(a)
  })
})

describe('remove', () => {
  it('should be possible to remove an item from a set that exists', () => {
    let a = new Set([1, 2, 3, 4])
    let result = remove(a, 2)

    expect(result).toEqual(new Set([1, 3, 4]))
    expect(result).toBe(a)
  })

  it('should throw an error when the item you want to remove does not exist in the set', () => {
    let a = new Set([1, 2, 3, 4])

    expect.assertions(1)

    expect(() => {
      remove(a, 5)
    }).toThrowErrorMatchingInlineSnapshot(
      `"Cannot remove item from set, it does not exist."`
    )
  })
})

describe('discard', () => {
  it('should be possible to remove an item from a set that exists', () => {
    let a = new Set([1, 2, 3, 4])
    let result = discard(a, 2)

    expect(result).toEqual(new Set([1, 3, 4]))
    expect(result).toBe(a)
  })

  it('should no-op when the item you want to remove does not exist in the set', () => {
    let a = new Set([1, 2, 3, 4])
    let result = discard(a, 123)

    expect(result).toEqual(new Set([1, 2, 3, 4]))
    expect(result).toBe(a)
  })
})

describe('clear', () => {
  it('should be possible to clear a set', () => {
    let a = new Set([1, 2, 3, 4])

    let result = clear(a)

    expect(result).toEqual(new Set())
    expect(result).toBe(a)
  })
})

describe('map', () => {
  it('should be possible to map over a empty set (no-op)', () => {
    let a = new Set<number>([])

    let result = map((value, idx) => value * idx, a)

    expect(result).toEqual(new Set([]))
    expect(result).not.toBe(a)
  })

  it('should be possible to map over a set', () => {
    let a = new Set([1, 2, 3, 4, 5])

    let result = map((value, idx) => value * idx, a)

    expect(result).toEqual(new Set([0, 2, 6, 12, 20]))
    expect(result).not.toBe(a)
  })
})

describe('filter', () => {
  it('should be possible to filter over a empty set (no-op)', () => {
    let a = new Set<number>([])

    let result = filter((value, idx) => value % idx === 0, a)

    expect(result).toEqual(new Set([]))
    expect(result).not.toBe(a)
  })

  it('should be possible to filter a set', () => {
    let a = new Set([1, 2, 3, 4, 5])

    let result = filter((value) => value % 2 === 0, a)

    expect(result).toEqual(new Set([2, 4]))
    expect(result).not.toBe(a)
  })
})
