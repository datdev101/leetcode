# [57. Insert Interval](https://leetcode.com/problems/insert-interval/description/?envType=study-plan-v2&envId=top-interview-150)

You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code> represent the start and the end of the <code>i^th</code> interval and <code>intervals</code> is sorted in ascending order by <code>start<sub>i</sub></code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.

Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>start<sub>i</sub></code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return <code>intervals</code> after the insertion.

**Note**  that you don't need to modify <code>intervals</code> in-place. You can make a new array and return it.

**Example 1:** 

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:** 

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:** 

- <code>0 <= intervals.length <= 10^4</code>
- <code>intervals[i].length == 2</code>
- <code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10^5</code>
- <code>intervals</code> is sorted by <code>start<sub>i</sub></code> in **ascending**  order.
- <code>newInterval.length == 2</code>
- <code>0 <= start <= end <= 10^5</code>