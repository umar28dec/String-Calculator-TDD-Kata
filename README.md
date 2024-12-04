# String Calculator

A simple string calculator implementation with support for various features like handling custom delimiters, ignoring numbers greater than 1000, and throwing exceptions for negative numbers.

## Overview

Create a simple String calculator with a method signature:

The method can take up to two numbers, separated by commas, and will return their sum.  
For example:

- Input: `""` → Output: `0`
- Input: `"1"` → Output: `1`
- Input: `"1,2"` → Output: `3`

For an empty string, it will return `0`.

## Hints

- Start with the simplest test case of an empty string and move to one and two numbers.
- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
- Remember to refactor after each passing test.

---

## How to Run

### Prerequisites

1. **Node.js**: Ensure Node.js is installed on your system. [Download Node.js](https://nodejs.org)
2. **Package Manager**: (npm or yarn) is required to install dependencies.

---

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/umar28dec/String-Calculator-TDD-Kata.git
   cd string-calculator
   ```

### Install Dependencies

Use npm or yarn to install project dependencies:

```bash
npm install
or
yarn install
```

### Run the Tests

To execute the tests, use:

```bash
npm test
or
yarn test
```

### View Test Coverage Reports

To view the test coverage report:

Above command will create a coverage folder. Open the index.html file inside the coverage directory in your browser to see a detailed report.

### Features

#### 1. Handle an Unknown Amount of Numbers

Allow the `Add` method to handle an unknown number of inputs.

---

#### 2. Support New Lines Between Numbers

The `Add` method should also handle new lines as delimiters:

- Valid input: `"1\n2,3"` → Output: `6`
- Invalid input: `"1,\n"` (not supported).

---

#### 3. Support Different Delimiters

To change the delimiter, the string will start with:
For example:

- Input: `"//;\n1;2"` → Output: `3`  
  The first line specifying the delimiter is optional, and all existing scenarios should still be supported.

---

#### 4. Handle Negative Numbers

Calling `Add` with a negative number will throw an exception:

For multiple negatives, the exception will list all of them.

---

### Advanced Features

#### 5. Ignore Numbers Greater than 1000

Numbers bigger than 1000 should be ignored:

- Input: `"2,1001"` → Output: `2`.

---

#### 6. Support Delimiters of Any Length

Delimiters can be of any length using the format:
For example:

- Input: `"//[***]\n1***2***3"` → Output: `6`.

---

#### 7. Allow Multiple Delimiters

The format for multiple delimiters:
For example:

- Input: `"//[*][%]\n1*2%3"` → Output: `6`.

---

#### 8. Support Multiple Delimiters with Length Longer Than One Character

Ensure that multiple delimiters can also be longer than one character:

- Input: `"//[***][%%][###]\n1***2%%3###4"` → Output: `10`.
