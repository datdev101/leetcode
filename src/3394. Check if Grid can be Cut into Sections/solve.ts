function isValidArr(nums: number[][]) {
  let [start, end] = nums[0];
  let counter = 0;

  for (let i = 1; i < nums.length; i++) {
    const [nextStart, nextEnd] = nums[i];
    if (nextStart >= start && nextStart < end) {
      end = Math.max(end, nextEnd);
    } else {
      counter++;
      start = nextStart;
      end = nextEnd;
    }
    if (counter > 1) return true;
  }

  return false;
}

function checkValidCuts(n: number, rectangles: number[][]): boolean {
  const horizontalNums: number[][] = rectangles
    .map((e) => [e[0], e[2]])
    .sort((a, b) => a[0] - b[0]);
  const verticalNums: number[][] = rectangles
    .map((e) => [e[1], e[3]])
    .sort((a, b) => a[0] - b[0]);

  return isValidArr(horizontalNums) || isValidArr(verticalNums);
}

const n = 5,
  rectangles = [
    [1, 0, 5, 2],
    [0, 2, 2, 4],
    [3, 2, 5, 3],
    [0, 4, 4, 5],
  ];
console.log(checkValidCuts(n, rectangles));
