const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    return 'String too short or too long';
  }
  return 'String is between 1 and 10 letters long';
};

function reverseString(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
}

class Calculator {
  constructor() {
    this.result = null;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  sub(a, b) {
    this.result = a - b;
    return this.result;
  }

  mul(a, b) {
    this.result = a * b;
    return this.result;
  }

  div(a, b) {
    if (b === 0) return 'Invalid division';
    this.result = a / b;
    return this.result;
  }
}

function capitalize(string) {
  if (string.length === 0) return 'Empty string';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize,
};
