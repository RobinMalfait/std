import * as set from './index'

it('should export everything we need', () => {
  expect(Object.keys(set)).toMatchInlineSnapshot(`
    Array [
      "set",
    ]
  `)
})
