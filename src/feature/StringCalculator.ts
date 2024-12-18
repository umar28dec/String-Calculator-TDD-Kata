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
      const delimiterMatch = parts[0].match(/^\/\/(\[.*\])$/);

      if (delimiterMatch) {
        const delimiterList = delimiterMatch[1]
          .slice(1, -1)
          .split("][")
          .map((delim) => delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        delimiter = new RegExp(delimiterList.join("|"));
      } else {
        delimiter = new RegExp(
          parts[0].slice(2).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        );
      }

      numberPart = parts[1];
    }

    const numberArray = numberPart.split(delimiter).map((num) => parseInt(num));
    const negatives = numberArray.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 1000) {
        sum += numberArray[i];
      }
    }
    return sum;
  }
}
