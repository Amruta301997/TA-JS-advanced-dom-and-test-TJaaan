const getFullName = require("./index");
const isPalindrome = require("./palindrome");

test('fullname amruta + dhawan to equal amruta dhawan', () => {
    expect(getFullName(amruta, dhawan)).toBe(amruta dhawan);
  });

  test('fullname sourabh + dhawan to equal amruta dhawan', () => {
    expect(getFullName(sourabh, dhawan)).not.toBe(amruta dhawan);
  });


  test('fullname sourabh + dhawan to equal sourabh dhawan', () => {
    expect(getFullName(sourabh, dhawan)).toBe(sourabh dhawan);
  });

  test('fullname om + kolhal to equal om kolhal', () => {
    expect(getFullName(om, kolhal)).toBe(om kolhal);
  });

  test('fullname amruta + dhawan to equal amruta kolhal', () => {
    expect(getFullName(amruta, dhawan)).not.toBe(amruta kolhal);
  });


  test('palindrome MADAM to equal MADAM ',() => {
    expect(isPalindrome(MADAM)).toBe(MADAM);
  });

  test('palindrome MADAM to equal Madam ',() => {
    expect(isPalindrome(MADAM)).not.toBe(Madam);
  });

  