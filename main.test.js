const functions = require('./main');

test('Length of string is correct', () => {
  const string = 'Lorem';
  expect(functions.stringLength(string)).toBe(
    'String is between 1 and 10 letters long',
  );
});

describe('reverseString', () => {
  test('String is correctly reversed', () => {
    const string = 'Lorem';
    expect(functions.reverseString(string)).toBe('meroL');
  });

  test('String is correctly reversed', () => {
    const string = 'Lorem ipsum dolor sit amet';
    expect(functions.reverseString(string)).toBe('tema tis rolod muspi meroL');
  });
});

describe('calculator', () => {
  const calc = new functions.Calculator();
  test('Sum 1 + 2 to equal 3', () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test('Substract 10 - 5 to equal 5', () => {
    expect(calc.sub(10, 5)).toBe(5);
  });
  test('Substract 5 - 10 to equal -5', () => {
    expect(calc.sub(5, 10)).toBe(-5);
  });
  test('Multiply 2 * 10 to equal 20', () => {
    expect(calc.mul(2, 10)).toBe(20);
  });
  test('Multiply -2 * 10 to equal -20', () => {
    expect(calc.mul(-2, 10)).toBe(-20);
  });
  test('Divide 100 / 2 to equal 50', () => {
    expect(calc.div(100, 2)).toBe(50);
  });
  test('Divide 0 / 2 to equal 0', () => {
    expect(calc.div(0, 2)).toBe(0);
  });
  test('Divide 2 / 0 to be an Invalid division', () => {
    expect(calc.div(2, 0)).toBe('Invalid division');
  });
});

describe('Capitalize', () => {
  test('Capitalize first letter', () => {
    expect(functions.capitalize('lorem')).toEqual('Lorem');
  });
  test('Capitalize correctly', () => {
    expect(functions.capitalize('Lorem')).toBe('Lorem');
  });
  test('Detect empty string', () => {
    expect(functions.capitalize('')).toBe('Empty string');
  });
});
