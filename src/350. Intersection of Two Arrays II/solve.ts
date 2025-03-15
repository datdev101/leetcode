function intersect(nums1: number[], nums2: number[]): number[] {
  const mapper = new Map<number, number>();
  const result: number[] = [];
  for (const number of nums1) {
    mapper.set(number, (mapper.get(number) ?? 0) + 1);
  }
  for (const number of nums2) {
    const mapValue = mapper.get(number);
    if (mapValue !== undefined && mapValue > 0) {
      result.push(number);
      mapper.set(number, mapValue - 1);
    }
  }
  return result;
}

const nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2));
