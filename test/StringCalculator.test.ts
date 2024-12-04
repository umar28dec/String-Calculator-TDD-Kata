import { StringCalculator } from "../src/feature/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  it('should return 1 for input "1"', () => {
    expect(calculator.add("1")).toBe(1);
  });

  it('should return 8 for input "81"', () => {
    expect(calculator.add("8")).toBe(8);
  });
});
