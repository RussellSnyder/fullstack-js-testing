const { parse, stringify } = require('../parse-stringify');

describe('The stringify function', () => {
  it('should stringify an object into a valid query string', () => {
    const actual = stringify({ topic: 'jazz' });
    const expected = 'topic=jazz'

    expect(actual).toBe(expected)
  })
})

describe('The parse function', () => {
  it('should parse a query string into a valid object', () => {
    const actual = parse('topic=jazz') 
    const expected = { topic: 'jazz' };

    expect(actual).toEqual(expected)
  })
})