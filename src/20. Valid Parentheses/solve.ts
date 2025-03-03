function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapper = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (mapper.has(s[i])) {
      stack.push(s[i]);
    } else {
      const char = mapper.get(stack[stack.length - 1])!;
      if (char != s[i]) return false;
      stack.pop();
    }
  }

  return stack.length == 0;
}

console.log(isValid("()[]{}"));
