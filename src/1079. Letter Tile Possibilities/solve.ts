function numTilePossibilities(tiles: string): number {
  const charCodeA = "A".charCodeAt(0);
  const charCodeZ = "Z".charCodeAt(0);
  const counter = Array(charCodeZ - charCodeA + 1).fill(0);
  let result = 0;

  for (let i = 0; i < tiles.length; i++) {
    counter[tiles.charCodeAt(i) - charCodeA]++;
  }

  function dfs(strBuilder = "", startIndex = 0) {
    if (strBuilder.length == tiles.length) {
      return;
    }
    for (let i = startIndex; i < counter.length; i++) {
      if (counter[i]) {
        counter[i]--;
        dfs(strBuilder + String.fromCharCode(charCodeA + i), startIndex);
        result++;
        counter[i]++;
      }
    }
  }

  dfs();
  return result;
}
