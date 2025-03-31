import java.util.Arrays;
import java.util.stream.Collectors;

class Solution {
    public void moveZeroes(int[] nums) {
        int slowPointer = 0;
        for (int fastPointer = 0; fastPointer < nums.length; fastPointer++) {
            if (nums[fastPointer] != 0) {
                int temp = nums[fastPointer];
                nums[fastPointer] = 0;
                nums[slowPointer++] = temp;
            }
        }
    }

    private String numArrayToString(int[] nums) {
        return Arrays.stream(nums).mapToObj(String::valueOf).collect(Collectors.joining(","));
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] test1 = { 0, 1, 0, 3, 12 };
        solution.moveZeroes(test1);
        assert solution.numArrayToString(test1).equals("1,3,12,0,0") : "Test 1 fail";

        int[] test2 = { 0 };
        solution.moveZeroes(test2);
        assert solution.numArrayToString(test2).equals("0") : "Test 2 fail";

        System.out.println("All test passed");
    }
}