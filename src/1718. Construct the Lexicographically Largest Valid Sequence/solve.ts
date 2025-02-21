function constructDistancedSequence(n: number): number[] {
  const result = Array(2 * n - 1).fill(0);
  const travelNumbers = Array(n + 1).fill(1);

  function dfs(currentIndex = 0) {
    // find empty slot in result
    while (currentIndex < result.length && result[currentIndex] != 0) {
      currentIndex++;
    }
    // if no empty slot --> found the result
    if (currentIndex == result.length) {
      return true;
    }

    // handle twice element (2..n)
    for (let i = n; i > 1; i--) {
      if (
        travelNumbers[i] != 0 &&
        currentIndex + i < result.length &&
        result[currentIndex] == 0 &&
        result[currentIndex + i] == 0
      ) {
        result[currentIndex] = i;
        result[currentIndex + i] = i;
        travelNumbers[i] = 0;

        if (dfs(currentIndex + 1)) return true;

        result[currentIndex] = 0;
        result[currentIndex + i] = 0;
        travelNumbers[i] = 1;
      }
    }

    // handle number 1
    if (
      currentIndex < result.length &&
      travelNumbers[1] != 0 &&
      result[currentIndex] == 0
    ) {
      result[currentIndex] = 1;
      travelNumbers[1] = 0;
      if (dfs(currentIndex + 1)) return true;
      result[currentIndex] = 0;
      travelNumbers[1] = 1;
    }

    return false;
  }

  dfs();
  return result;
}

// console.log(constructDistancedSequence(20));
