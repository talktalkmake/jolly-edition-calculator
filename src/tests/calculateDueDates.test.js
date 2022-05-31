import { calculateDueDates, isBeforeToday, calculateRelativeDate } from '../functions/calculateDueDates'

// Check the length of the argument

const futureDate = '2023-12-16'
const pastDate = 'Jun 16 2020'
const firstDateisPast = '2022-04-16'
const feb052022 = '2022-02-05'
const feb05Result = [
  { label: 'Save the Date', date: 'Aug 05 2021', impossible: true },
  { label: 'Invite', date: 'Nov 05 2021', impossible: true },
  { label: 'Day-of', date: 'Dec 25 2021', impossible: false }
]

it('Returns an array', () => {
  const result = calculateDueDates(futureDate) //?
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
    expect(calculateRelativeDate(futureDate, 6, 'months')).toBe('Jun 16 2023')
  })
  // 2. A date three months prior to the arg. date
  it('returns the date 3 months before the given date', () => {
    expect(calculateRelativeDate(futureDate, 3, 'months')).toBe('Sep 16 2023')
  })
  // 3. A date six weeks prior to the arg. date
  it('returns the date 3 months before the given date', () => {
    expect(calculateRelativeDate(futureDate, 6, 'weeks')).toBe('Nov 04 2023')
  })
})