const {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
} = require('./index');

// getFullName

// Positive

//   test('concat Tony and Stark  to be equal Tony Stark', () => {
//     expect(getFullName('Tony', 'Stark')).toBe('Tony Stark');
//   });

//   test('concate John Snow  to equal John Snow', () => {
//     expect(getFullName('John', 'Snow')).toBe('John Snow');
//   });

//   test('concate Alt Campus  to equal Alt Campus', () => {
//     expect(getFullName('Alt','Campus')).toBe('Alt Campus');
//   });

// Negative

test('concate Tony + Stark not to equal John Stark', () => {
  expect(getFullName('Tony', 'Stark')).not.toBe('John Stark');
});

test('concate Campus + Alt not to equal Alt Campus', () => {
  expect(getFullName('Campus', 'Alt')).not.toBe('Alt Campus');
});

test('concate Alt + Campus not to equal Campus Alt', () => {
  expect(getFullName('Alt', 'Campus')).not.toBe('Campus Alt');
});

test('nun to equal true', () => {
  expect(isPalindrome('newer')).toBe(false);
});

test('circumference of radius 5 to equal 31', () => {
  expect(getCircumference(5)).toBe(`The circumference is 31`);
});

test('Area of radius 5 to equal 78', () => {
  expect(getArea(5)).toBe(`The area is 78`);
});
