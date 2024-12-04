export class StringCalculator {
  add(numbers: string): number {
    let sum = 0;

    if (!numbers) {
      return sum;
    }

    let delimiter = /[,\n]/;
    let numberPart = numbers;

    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const customDelimiter = parts[0].slice(2);
      delimiter = new RegExp(
        customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      );
      numberPart = parts[1];
    }
    const numberArray = numberPart.split(delimiter);
    for (let i = 0; i < numberArray.length; i++) {
      sum += parseInt(numberArray[i]);
    }

    return sum;
  }
}
