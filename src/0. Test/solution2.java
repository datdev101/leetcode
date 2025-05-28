class Solution2 {

    public static int simpleMaxProfit(int[] prices) {
        int result = 0;

        if (prices.length == 0)
            return result;

        int minBuy = prices[0];
        for (int i = 1; i < prices.length; i++) {
            int currentProfit = prices[i] - minBuy;
            if (currentProfit > result) {
                result = currentProfit;
            }
            if (prices[i] < minBuy) {
                minBuy = prices[i];
            }
        }

        return result;
    }

    public static int advancedMaxProfit(int[] prices) {
        int result = 0;

        if (prices.length == 0)
            return result;

        for (int i = 1; i < prices.length; i++) {
            int profit = prices[i] - prices[i - 1];
            if (profit > 0) {
                result += profit;
            }
        }

        return result;
    }

    public static void assertEquals(int actual, int expected, String message) {
        if (actual != expected) {
            System.out.println("FAILED: " + message);
            System.out.println("Expected: " + expected);
            System.out.println("Actual:   " + actual);
            System.exit(1);
        }
    }

    public static void testSimpleMaxProfit() {
        int[] prices1 = { 7, 1, 5, 3, 6, 4 };
        int expected1 = 5;
        assertEquals(simpleMaxProfit(prices1), expected1, "Simple Max Profit: Test case 1");

        int[] prices2 = { 7, 7, 4, 2, 1 };
        int expected2 = 0;
        assertEquals(simpleMaxProfit(prices2), expected2, "Simple Max Profit: Test case 2");

        int[] prices3 = { 1, 2, 3, 4, 5 };
        int expected3 = 4;
        assertEquals(simpleMaxProfit(prices3), expected3, "Simple Max Profit: Test case 3");

        int[] prices4 = { 2, 4, 1 };
        int expected4 = 2;
        assertEquals(simpleMaxProfit(prices4), expected4, "Simple Max Profit: Test case 4");

        System.out.println("Simple Max Profit: All test cases passed!");
    }

    public static void testAdvancedMaxProfit() {
        int[] prices1 = { 7, 1, 5, 3, 6, 4 };
        int expected1 = 7;
        assertEquals(advancedMaxProfit(prices1), expected1, "Advanced Max Profit: Test case 1");

        int[] prices2 = { 7, 7, 4, 2, 1 };
        int expected2 = 0;
        assertEquals(advancedMaxProfit(prices2), expected2, "Advanced Max Profit: Test case 2");

        int[] prices3 = { 1, 2, 3, 4, 5 };
        int expected3 = 4;
        assertEquals(advancedMaxProfit(prices3), expected3, "Advanced Max Profit: Test case 3");

        int[] prices4 = { 1, 2, 3, 2, 3, 4, 1 };
        int expected4 = 4;
        assertEquals(advancedMaxProfit(prices4), expected4, "Advanced Max Profit: Test case 4");

        System.out.println("Advanced Max Profit: All test cases passed!");
    }

    public static void main(String[] args) {
        testSimpleMaxProfit();
        testAdvancedMaxProfit();
    }
}
