import checkForInlineQuantity from './checkForInlineQuantity'
it('returns the local amount', () => {
    const global = 100
    const local = 142
    expect(checkForInlineQuantity(global, local)).toBe(142)
})
it('returns the default', () => {
    const global = 100
    expect(checkForInlineQuantity(global)).toBe(100)
})
it('returns the global amount', () => {
    const global = 100
    const local = 100
    expect(checkForInlineQuantity(global, local)).toBe(100)
})
it('Returns an integer', () => {
    const global = 100
    const local = 142
    expect(typeof checkForInlineQuantity(global, local)).toBe('number')
})