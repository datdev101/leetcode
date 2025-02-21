function getHappyString(n: number, k: number) {
  let result = "";
  let counter = 0;

  function dfs(str: string) {
    if (str.length == n) {
      return true;
    }
    for (const char of ["a", "b", "c"]) {
      if (str.length > 0 && char == str[str.length - 1]) {
        continue;
      }
      if (dfs(str + char)) {
        if (++counter == k) {
          result = str + char;
          return true;
        }
      }
    }

    return false;
  }

  dfs(result);
  return result;
}

console.log(getHappyString(1, 4));
