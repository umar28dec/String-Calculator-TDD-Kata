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

  it('should return 0 for input "125451445545"', () => {
    expect(calculator.add("125451445545")).toBe(0);
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

  it('should return 3 for input "//;\n1;2"', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  it('should return 15 for input "//|\n5|5|5"', () => {
    expect(calculator.add("//|\n5|5|5")).toBe(15);
  });

  it('should return 10 for input "//#\n4#3#3"', () => {
    expect(calculator.add("//#\n4#3#3")).toBe(10);
  });

  it('should return 0 for empty input ""', () => {
    expect(calculator.add("")).toBe(0);
  });

  it('should return 6 for input "1,2,3"', () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });
  it("should throw an exception for a single negative number", () => {
    expect(() => calculator.add("1,-2,3")).toThrowError(
      "Negatives not allowed: -2"
    );
  });

  it("should throw an exception for multiple negative numbers", () => {
    expect(() => calculator.add("1,-2,-3,4")).toThrowError(
      "Negatives not allowed: -2, -3"
    );
  });

  it('should return 6 for input "1,2,3" without negatives', () => {
    expect(calculator.add("1,2,3")).toBe(6);
  });

  it('should return 0 for empty input ""', () => {
    expect(calculator.add("")).toBe(0);
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  it("should return the sum of numbers less than or equal to 1000", () => {
    expect(calculator.add("2,1000,500")).toBe(1502);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("2,-3,1001")).toThrowError(
      "Negatives not allowed: -3"
    );
  });

  it("should handle custom delimiters and ignore numbers greater than 1000", () => {
    expect(calculator.add("//;\n2;1001;500")).toBe(502);
  });

  it("should handle delimiters of any length", () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator.add("//[***]\n1***1001***2")).toBe(3);
  });

  it("should handle multiple delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  it("should handle multiple delimiters of varying lengths", () => {
    expect(calculator.add("//[***][%%]\n1***2%%3")).toBe(6);
  });

  it("should ignore numbers greater than 1000", () => {
    expect(calculator.add("//[*][%]\n1*2%1001")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("//[*][%]\n1*2%-3")).toThrowError(
      "Negatives not allowed: -3"
    );
  });

  it("should handle single-character custom delimiters", () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6);
  });

  it("should handle multiple delimiters with lengths longer than one character", () => {
    expect(calculator.add("//[***][%%]\n1***2%%3")).toBe(6);
  });

  it("should handle multiple delimiters and ignore numbers greater than 1000", () => {
    expect(calculator.add("//[***][%%]\n1***2%%1001")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("//[***][%%]\n1***2%%-3")).toThrowError(
      "Negatives not allowed: -3"
    );
  });

  it("should handle multiple delimiters, including one-character and multi-character delimiters", () => {
    expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
  });

  it("should handle custom delimiters of any length (including multi-character)", () => {
    expect(calculator.add("//[***][%%][@]\n1***2%%3@4")).toBe(10);
  });
});
