class Solution5 {

    public static int calculateMinCandy(int[] ratings) {
        int count = 0;
        int[] leftCountArr = new int[ratings.length];
        int[] rightCountArr = new int[ratings.length];

        for (int i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                leftCountArr[i] += leftCountArr[i - 1] + 1;
            }
        }

        for (int i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                rightCountArr[i] += rightCountArr[i + 1] + 1;
            }
        }

        for (int i = 0; i < ratings.length; i++) {
            count += 1 + (leftCountArr[i] > rightCountArr[i] ? leftCountArr[i] : rightCountArr[i]);
        }

        return count;
    }

    public static void assertEquals(int actual, int expected, String message) {
        if (actual != expected) {
            System.out.println("FAILED: " + message);
            System.out.println("Expected: " + expected);
            System.out.println("Actual:   " + actual);
            System.exit(1);
        }
    }

    public static void testCalculateMinCandy() {
        int[] ratings1 = { 1, 0, 2 };
        int expected1 = 5;
        assertEquals(calculateMinCandy(ratings1), expected1, "Calculate Min Candy: Test case 1");

        int[] ratings2 = { 3, 3, 3, 3 };
        int expected2 = 4;
        assertEquals(calculateMinCandy(ratings2), expected2, "Calculate Min Candy: Test case 2");

        int[] ratings3 = { 1, 2, 3, 4 };
        int expected3 = 10;
        assertEquals(calculateMinCandy(ratings3), expected3, "Calculate Min Candy: Test case 3");

        int[] ratings4 = { 1, 2, 3, 2, 1 };
        int expected4 = 9;
        assertEquals(calculateMinCandy(ratings4), expected4, "Calculate Min Candy: Test case 4");

        int[] ratings5 = { 1, 3, 2, 2, 1 };
        int expected5 = 7; // [1,2,1,2,1]
        assertEquals(calculateMinCandy(ratings5), expected5, "Calculate Min Candy: Test case 5");

        System.out.println("Calculate Min Candy: All test cases passed!");
    }

    public static void main(String[] args) {
        testCalculateMinCandy();
    }
}
