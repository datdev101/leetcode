function getColorValue(c: string) {
  return c == "B" ? 0 : 1;
}

function minimumRecolors(blocks: string, k: number): number {
  let result = blocks.length + 1;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += getColorValue(blocks[i]);
  }
  result = Math.min(result, sum);

  for (let right = k; right < blocks.length; right++) {
    const left = right - k;
    sum += getColorValue(blocks[right]) - getColorValue(blocks[left]);
    result = Math.min(result, sum);
  }

  return result;
}

console.log(minimumRecolors("WBBWWBBWBW", 7));
