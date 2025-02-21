function findDifferentBinaryString(nums: string[]) {
  const len = nums.length;
  const setStr = new Set(nums);
  let result = "";

  function dfs(str: string) {
    if (str.length >= len) {
      if (!setStr.has(str)) {
        result = str;
        return true;
      }
      return false;
    }

    for (const bit of ["0", "1"]) {
      if (dfs(str + bit)) return true;
    }

    return false;
  }

  dfs("");
  return result;
}

// console.log(findDifferentBinaryString(["01", "10"]));
