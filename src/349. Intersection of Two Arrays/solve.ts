function intersection(nums1: number[], nums2: number[]): number[] {
  const isExistNumbers = Array(1024).fill(false);
  const result: number[] = [];

  for (const number of nums1) {
    isExistNumbers[number] = true;
  }
  for (const number of nums2) {
    if (isExistNumbers[number]) {
      result.push(number);
      isExistNumbers[number] = false;
    }
  }

  return result;
}

const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
