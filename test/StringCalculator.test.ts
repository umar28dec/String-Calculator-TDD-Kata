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

  it('should return 6 for input "1\n2,3"', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it('should return 10 for input "4\n3,3"', () => {
    expect(calculator.add("4\n3,3")).toBe(10);
  });

  it('should return 15 for input "5\n5\n5"', () => {
    expect(calculator.add("5\n5\n5")).toBe(15);
  });
});
