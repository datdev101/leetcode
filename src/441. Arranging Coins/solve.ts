function arrangeCoins(n: number): number {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = right - ((right - left) >> 1);
    const total = ((mid + 1) * mid) / 2;
    if (total == n) {
      return mid;
    }
    if (total > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
