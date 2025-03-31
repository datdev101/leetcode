class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;

        while (left < right) {
            int currentArea = (right - left) * Math.min(height[left], height[right]);
            maxArea = Math.max(currentArea, maxArea);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] test1 = { 1, 8, 6, 2, 5, 4, 8, 3, 7 };
        assert solution.maxArea(test1) == 49 : "Test 1 fail";

        int[] test2 = { 1, 1 };
        assert solution.maxArea(test2) == 1 : "Test 2 fail";

        System.out.println("All test passed");
    }
}