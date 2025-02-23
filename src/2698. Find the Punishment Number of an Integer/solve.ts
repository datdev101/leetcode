function isValidPartition(numStr: string, target: number, startIndex = 0) {
  if (Number(numStr) < target) return false;
  if (startIndex == numStr.length && target == 0) {
    return true;
  }

  let sum = 0;
  for (let i = startIndex; i < numStr.length; i++) {
    sum = sum * 10 + Number(numStr[i]);
    if (sum > target) break;
    if (isValidPartition(numStr, target - sum, i + 1)) return true;
  }

  return false;
}

function punishmentNumber(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (isValidPartition(square.toString(), i)) {
      result += square;
    }
  }

  return result;
}

console.log(punishmentNumber(10));
console.log(punishmentNumber(37));
