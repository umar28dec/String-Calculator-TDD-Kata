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

  it('should return 8 for input "8"', () => {
    expect(calculator.add("8")).toBe(8);
  });

  it('should return 8 for input "3,5"', () => {
    expect(calculator.add("3,5")).toBe(8);
  });

  it('should return 16 for input "11,5"', () => {
    expect(calculator.add("11,5")).toBe(16);
  });

  it('should handle large inputs like "1,1,1,1,1,1,1,1,1,1"', () => {
    expect(calculator.add("1,1,1,1,1,1,1,1,1,1")).toBe(10);
  });

  it('should return 125451445545 for input "125451445545"', () => {
    expect(calculator.add("125451445545")).toBe(125451445545);
  });
});
