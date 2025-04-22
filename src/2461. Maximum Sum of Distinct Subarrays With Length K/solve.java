import java.util.HashMap;
import java.util.Map;

class Solution {
    public long maximumSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> tracker = new HashMap<>();
        long sum = 0;

        for (int i = 0; i < k; i++) {
            sum += nums[i];
            tracker.put(nums[i], tracker.getOrDefault(nums[i], 0) + 1);
        }

        long currentSum = sum;
        if (tracker.size() < k) {
            sum = 0;
        }

        for (int right = k, left = 0; right < nums.length; right++, left++) {
            tracker.put(nums[right], tracker.getOrDefault(nums[right], 0) + 1);

            if (tracker.get(nums[left]) == 1) {
                tracker.remove(nums[left]);
            } else {
                tracker.put(nums[left], tracker.get(nums[left]) - 1);
            }

            currentSum += nums[right] - nums[left];
            if (tracker.size() == k) {
                sum = Math.max(sum, currentSum);
            }
        }

        return sum;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] test1 = { 1, 5, 4, 2, 9, 9, 9 };
        int k1 = 3;
        assert solution.maximumSubarraySum(test1, k1) == 15 : "Test 1 fail";

        int[] test2 = { 4, 4, 4 };
        int k2 = 3;
        assert solution.maximumSubarraySum(test2, k2) == 0 : "Test 2 fail";

        int[] test3 = { 1, 1, 1, 7, 8, 9 };
        int k3 = 3;
        assert solution.maximumSubarraySum(test3, k3) == 24 : "Test 3 fail";

        int[] test4 = { 9, 9, 9, 1, 2, 3 };
        int k4 = 3;
        assert solution.maximumSubarraySum(test4, k4) == 12 : "Test 4 fail";

        System.out.println("All test passed");
    }
}