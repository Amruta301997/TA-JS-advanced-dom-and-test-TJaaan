const getFullName = require("./index");

test('fullname amruta + dhawan to equal amruta dhawan', () => {
    expect(getFullName(amruta, dhawan)).toBe(amruta dhawan);
  });

  test('fullname sourabh + dhawan to equal amruta dhawan', () => {
    expect(getFullName(sourabh, dhawan)).toBe(sourabh dhawan);
  });
