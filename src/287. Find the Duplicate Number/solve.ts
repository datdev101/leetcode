function binarySearchApproach(nums: number[]): number {
  let left = 1;
  for (let right = nums.length - 1; left < right; ) {
    const mid = ~~((right + left) / 2);
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) counter++;
    }

    if (counter > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function slowFastPointerApproach(nums: number[]) {
  let slowPointer = nums[0];
  let fastPointer = nums[nums[0]];
  while (slowPointer != fastPointer) {
    slowPointer = nums[slowPointer];
    fastPointer = nums[nums[fastPointer]];
  }

  let pointer = nums[0];
  while (pointer != nums[slowPointer]) {
    pointer = nums[pointer];
    slowPointer = nums[slowPointer];
  }

  return pointer;
}

function findDuplicate(nums: number[]) {
  return slowFastPointerApproach(nums);
}

const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
