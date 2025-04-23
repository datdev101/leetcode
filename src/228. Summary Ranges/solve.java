import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> result = new ArrayList<>();

        if (nums.length == 0)
            return result;

        for (int fast = 0, slow = 0; fast <= nums.length; fast++) {
            if (fast == nums.length || nums[fast] - nums[slow] != fast - slow) {
                StringBuilder strBuilder = new StringBuilder();
                strBuilder.append(nums[slow]);
                if (fast - 1 != slow) {
                    strBuilder.append("->");
                    strBuilder.append(nums[fast - 1]);
                }
                result.add(strBuilder.toString());
                slow = fast;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] test1 = { 0, 1, 2, 4, 5, 7 };
        assert solution.summaryRanges(test1).equals(List.of("0->2", "4->5", "7")) : "Test 1 fail";

        int[] test2 = { 0, 2, 3, 4, 6, 8, 9 };
        assert solution.summaryRanges(test2).equals(List.of("0", "2->4", "6", "8->9")) : "Test 2 fail";

        System.out.println("All tests passed");
    }
}