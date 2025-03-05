function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapper = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const numIndex = mapper.get(nums[i]);
    if (numIndex !== undefined && Math.abs(i - numIndex) <= k) return true;
    mapper.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
