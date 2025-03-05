function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const operationSet = new Set(["+", "-", "*", "/"]);

  for (const token of tokens) {
    if (!operationSet.has(token)) {
      stack.push(Number(token));
      continue;
    }

    const num2 = stack.pop()!;
    const num1 = stack.pop()!;
    let result = 0;

    if (token == "+") {
      result = num1 + num2;
    }
    if (token == "-") {
      result = num1 - num2;
    }
    if (token == "*") {
      result = num1 * num2;
    }
    if (token == "/") {
      result = ~~(num1 / num2);
    }

    stack.push(result);
  }

  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
