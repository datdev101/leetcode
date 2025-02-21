function recursive(
  pattern: string,
  patternIndex: number,
  lastNumber: number,
  usedNumbers: number[],
  stackResult: number[]
) {
  if (patternIndex == pattern.length) {
    return true;
  }

  const direction = pattern[patternIndex] == "I" ? 1 : -1;

  for (let i = lastNumber + direction; i > 0 && i < 10; i += direction) {
    if (usedNumbers[i] == 0) continue;
    stackResult.push(i);
    usedNumbers[i] = 0;
    if (recursive(pattern, patternIndex + 1, i, usedNumbers, stackResult)) {
      return true;
    }
    usedNumbers[i] = 1;
    stackResult.pop();
  }

  return false;
}

function smallestNumber(pattern: string) {
  const stack = [];
  for (let firstNumber = 1; firstNumber <= 9; firstNumber++) {
    const usedNumbers = Array(10).fill(1);
    // choose first number
    usedNumbers[firstNumber] = 0;
    stack.push(firstNumber);

    if (recursive(pattern, 0, firstNumber, usedNumbers, stack)) {
      break;
    }
    stack.pop();
  }
  return stack.join("");
}

console.log(smallestNumber("DDD"));
