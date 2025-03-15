function isPerfectSquare(num: number): boolean {
  if (num < 2) return true;

  let left = 1;
  let right = num;

  while (left <= right) {
    const mid = right + ((left - right) >> 1);
    const product = mid * mid;
    if (product == num) return true;
    if (product < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(14));
