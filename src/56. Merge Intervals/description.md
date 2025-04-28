# [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-interview-150)

Given an arrayof <code>intervals</code>where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**Example 1:** 

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:** 

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:** 

- <code>1 <= intervals.length <= 10^4</code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10^4</code>