import {
  simple
} from 'moving-averages'


const one = (avg, offset, datum, size) => {
  let i = 0
  let sum = 0

  while (i < size) {
    sum += Math.pow(datum[offset + i++] - avg, 2)
  }

  return sum / size
}


export default (datum, size) => {
  const result = []
  const ma = simple.periods(datum, size)

  return ma.map((avg, offset) => one(avg, offset, datum, size))
}
