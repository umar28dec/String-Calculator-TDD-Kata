export class StringCalculator {
  add(numbers: string): number {
    let sum = 0;
    if (!numbers) return sum;
    sum += parseInt(numbers);
    return sum;
  }
}