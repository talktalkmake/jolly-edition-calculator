import Jest from 'jest'
import getId from './getId'

describe('generate and return a random id', () => {
    test('it returns a string', () => {
        const id = getId()
        expect(typeof id).toEqual('string')
    })
})