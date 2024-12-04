export class StringCalculator {
  add(numbers: string): number {
    let sum = 0;
    if (!numbers) {
      return sum;
    } else {
      const sanitizedNumbers = numbers.replace(/\n/g, ",");
      const numberArray = sanitizedNumbers.split(",");
      console.log(numberArray);
      for (let i = 0; i < numberArray.length; i++) {
        sum += parseInt(numberArray[i]);
      }
    }
    return sum;
  }
}
