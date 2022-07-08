const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('wrong input should throw an error', () => {
  expect(() => sum('a', 2)).toThrow('Wrong input');
  expect(() => sum(1, 'b')).toThrow('Wrong input');
});
