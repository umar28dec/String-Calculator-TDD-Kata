export class StringCalculator {
  add(numbers: string): number {
    let sum = 0;
    if (!numbers) return sum;
    const numberArray = numbers.split(",");
    for (let i = 0; i < numberArray.length; i++) {
      sum += parseInt(numberArray[i]);
    }
    return sum;
  }
}
