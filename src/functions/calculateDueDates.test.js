import Jest from 'jest'
import moment from "moment"
import {calculateDueDates, isBeforeToday, calculateRelativeDate} from './calculateDueDates'

// Check the length of the argument

const futureDate = '2023-12-16'
const pastDate = '2021-12-16'
const firstDateisPast = '2022-04-16'

it('Make sure projects are not in the past', () => {
  expect(calculateDueDates(pastDate)).toEqual(false)
})

// User inputs a date in 10 digit format 'YYYY-MM-DD'

it('Returns an array', () => {
  const result = calculateDueDates(futureDate) //?
  expect(Array.isArray(result)).toBe(true)
})

// Test for the first date being in the past
it('Returns an array', () => {
  const result = calculateDueDates(firstDateisPast) //?
  expect(Array.isArray(result)).toBe(true)
})

describe('isBeforeToday()', () => {
  it('checks date is NOT before today', () => {
    expect(isBeforeToday(futureDate)).toBe(false)
  })
  it('checks date IS before today', () => {
    expect(isBeforeToday(pastDate)).toBe(true)
  })
})

describe('calculateRelativeDate()', () => {
  // Generate three dates in return:
  // 1. A date six months prior to the arg. date
  it('returns the date 6 months before the given date', () => {
    expect(calculateRelativeDate(futureDate,6,'months')).toBe('Jun 16 2023')
  })
  // 2. A date three months prior to the arg. date
  it('returns the date 3 months before the given date', () => {
    expect(calculateRelativeDate(futureDate,3,'months')).toBe('Sep 16 2023')
  })
  // 3. A date six weeks prior to the arg. date
  it('returns the date 3 months before the given date', () => {
    expect(calculateRelativeDate(futureDate,6,'weeks')).toBe('Nov 04 2023')
  })
})