import { newHighestId } from '../reducers/reducer';
import initialState from '../reducers/initialState';

describe('Get the largest number from an array of numbers', () => {
 it('returns a number', () => {
  expect(typeof newHighestId(initialState)).toBe('number');
 })
 it('returns the highest number', () => {
  expect(newHighestId(initialState)).toBe(9)
 })
})