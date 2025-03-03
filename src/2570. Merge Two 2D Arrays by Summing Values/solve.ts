function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = [];

  for (let i1 = 0, i2 = 0; i1 < nums1.length || i2 < nums2.length; ) {
    if (i1 < nums1.length && i2 < nums2.length) {
      const id1 = nums1[i1][0];
      const id2 = nums2[i2][0];

      if (id1 == id2) {
        result.push([id1, nums1[i1][1] + nums2[i2][1]]);
        i1++, i2++;
      } else if (id1 < id2) {
        result.push([id1, nums1[i1][1]]);
        i1++;
      } else {
        result.push([id2, nums2[i2][1]]);
        i2++;
      }
    } else if (i1 < nums1.length) {
      result.push([nums1[i1][0], nums1[i1][1]]);
      i1++;
    } else {
      result.push([nums2[i2][0], nums2[i2][1]]);
      i2++;
    }
  }

  return result;
}

console.log(
  JSON.stringify(
    mergeArrays(
      [
        [1, 2],
        [2, 3],
        [4, 5],
      ],
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ]
    )
  )
);
