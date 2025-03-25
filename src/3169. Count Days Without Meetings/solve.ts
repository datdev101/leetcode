function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);

  let [startDate, endDate] = meetings[0];
  let counter = startDate - 1;

  for (let i = 1; i < meetings.length; i++) {
    const [nextStartDate, nextEndDate] = meetings[i];

    if (nextStartDate >= startDate && nextStartDate <= endDate) {
      endDate = Math.max(endDate, nextEndDate);
    } else {
      counter += nextStartDate - (endDate + 1);
      startDate = nextStartDate;
      endDate = nextEndDate;
    }
  }
  counter += days - endDate;

  return counter;
}

const days = 10,
  meetings = [
    [5, 7],
    [1, 3],
    [9, 10],
  ];
console.log(countDays(days, meetings));
