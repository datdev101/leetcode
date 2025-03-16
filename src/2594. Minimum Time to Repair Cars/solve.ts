function repairCars(ranks: number[], cars: number): number {
  let minRank = ranks[0];
  let maxRank = ranks[0];
  const counterRanks = Array(101).fill(0);

  for (let i = 0; i < ranks.length; i++) {
    minRank = Math.min(minRank, ranks[i]);
    maxRank = Math.max(maxRank, ranks[i]);
    counterRanks[ranks[i]]++;
  }
  let left = 1,
    right = cars * cars * minRank;

  while (left <= right) {
    // be careful with big right number
    // (left + right)/2 = right - ((right-left)/2)
    // ensure right-left always divisible by 2
    const temp = right - left;
    const mid = right - (temp - (temp & 1)) / 2;

    // find total car can be repaired in mid time
    let maxCar = 0;
    for (let i = 0; i < counterRanks.length; i++) {
      if (counterRanks[i]) {
        maxCar += counterRanks[i] * ~~((mid / i) ** 0.5);
      }
    }

    if (maxCar >= cars) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

const ranks = [4, 2, 3, 1],
  cars = 10;
console.log(repairCars(ranks, cars));
