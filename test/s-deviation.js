import test from 'ava'
import sd from '../src'

;[
  [
    [1, 2, 3, 4, 5], 2,
    [0.25, 0.25, 0.25, 0.25]
  ],

  [
    [1, 2, 4, 8], 2,
    [0.25, 1, 4]
  ]

].forEach(([datum, size, expected]) => {

  test(`datum: ${JSON.stringify(datum)}, size: ${size}`, async t => {
    const result = sd(datum, size)
    t.deepEqual(result, expected)
  })
})
