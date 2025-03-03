function pivotArray(nums: number[], pivot: number): number[] {
  const smallerPivot: number[] = [];
  const biggerPivot: number[] = [];
  let pivotCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      smallerPivot.push(nums[i]);
    } else if (nums[i] > pivot) {
      biggerPivot.push(nums[i]);
    } else {
      pivotCounter++;
    }
  }

  let i = 0;
  for (; i < smallerPivot.length; i++) {
    nums[i] = smallerPivot[i];
  }
  while (pivotCounter-- > 0) {
    nums[i++] = pivot;
  }
  for (let j = 0; j < biggerPivot.length; j++) {
    nums[i++] = biggerPivot[j];
  }

  return nums;
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
