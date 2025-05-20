import { checkTestcases } from "../_utils/helper";

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const numRow = image.length;
  const numCol = image[0].length;
  const srcNode = [sr, sc];
  const srcColor = image[sr][sc];

  if (srcColor == color) return image;

  function getImgColor(node: number[]) {
    const [r, c] = node;
    return image[r][c];
  }

  function setImgColor(node: number[], color: number) {
    const [r, c] = node;
    image[r][c] = color;
  }

  function getNeighborNodesHaveSrcColor(node: number[]) {
    const deltaRow = [-1, 0, 1, 0];
    const deltaCol = [0, 1, 0, -1];
    const result: number[][] = [];

    for (let i = 0; i < deltaRow.length; i++) {
      const [srcRow, srcCol] = node;
      const row = srcRow + deltaRow[i];
      const col = srcCol + deltaCol[i];

      if (
        0 <= row &&
        row < numRow &&
        0 <= col &&
        col < numCol &&
        getImgColor([row, col]) == srcColor
      ) {
        result.push([row, col]);
      }
    }

    return result;
  }

  function bfs() {
    const queue: number[][] = [srcNode];

    while (queue.length) {
      const node = queue.pop()!;
      setImgColor(node, color);
      const neighborNodes = getNeighborNodesHaveSrcColor(node);
      queue.push(...neighborNodes);
    }
  }

  bfs();
  return image;
}

checkTestcases(
  [
    {
      input: [
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2,
      ],
      expected: [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    },
    {
      input: [
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0,
      ],
      expected: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ],
  floodFill,
  (a, b) => JSON.stringify(a) == JSON.stringify(b)
);
