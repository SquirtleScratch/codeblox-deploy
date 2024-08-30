/**
 * path: __tests__/jest_backend/simple.test.js
 */

const sum = (a, b) => a + b;

describe('Sum function', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return a negative sum if both numbers are negative', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
