const { Sum, Subtraction, Multiplication } = require("./math");

test("Some 2 com 3 e resultará em 5", () => {
  expect(Sum(2, 3)).toBe(5);
})

test("Subtraia 2 por 3 e resultará em -1", () => {
  expect(Subtraction(2, 3)).toBe(-1);
})

test("Multiplique 2 por 3 e resultará em 6", () => {
  expect(Multiplication(2, 3)).toBe(6);
})