function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 1,
    right = x;
  while (left <= right) {
    const mid = right + ((left - right) >> 1);
    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

console.log(mySqrt(8));
