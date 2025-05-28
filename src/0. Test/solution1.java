class Solution1 {

    // Using extra memory
    public static int[] simpleMerge(int[] arr1, int[] arr2) {
        int len1 = arr1.length;
        int len2 = arr2.length;
        int[] result = new int[len1 + len2];
        int p = 0, p1 = 0, p2 = 0;

        while (p1 < len1 && p2 < len2) {
            if (arr1[p1] < arr2[p2]) {
                result[p++] = arr1[p1++];
            } else {
                result[p++] = arr2[p2++];
            }
        }

        while (p1 < len1) {
            result[p++] = arr1[p1++];
        }

        while (p2 < len2) {
            result[p++] = arr2[p2++];
        }

        return result;
    }

    // Using in place memory in array 1
    public static void advancedMerge(int[] arr1, int len1, int[] arr2, int len2) {
        int p1 = len1 - 1, p2 = len2 - 1, p = len1 + len2 - 1;

        while (p1 >= 0 && p2 >= 0) {
            if (arr1[p1] < arr2[p2]) {
                arr1[p--] = arr2[p2--];
            } else {
                arr1[p--] = arr1[p1--];
            }
        }

        while (p2 >= 0) {
            arr1[p--] = arr2[p2--];
        }
    }

    public static boolean arraysEqual(int[] a, int[] b) {
        if (a.length != b.length)
            return false;
        for (int i = 0; i < a.length; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1)
                System.out.print(", ");
        }
        System.out.print("]");
    }

    public static void assertArrayEquals(int[] actual, int[] expected, String message) {
        if (!arraysEqual(actual, expected)) {
            System.out.println("FAILED: " + message);
            System.out.print("\nExpected: ");
            printArray(expected);
            System.out.println("\nActual: ");
            printArray(actual);
            System.out.println();
            System.exit(1);
        }
    }

    public static void testSimpleMerge() {
        // Test case 1: Test case from example
        int[] arr1a = { 1, 3, 5 };
        int[] arr2a = { 2, 4, 6 };
        int[] expected1 = { 1, 2, 3, 4, 5, 6 };
        assertArrayEquals(simpleMerge(arr1a, arr2a), expected1, "Simple merge: Test case 1");

        // Test case 2: One array empty
        int[] arr1b = {};
        int[] arr2b = { 1, 2, 3 };
        int[] expected2 = { 1, 2, 3 };
        assertArrayEquals(simpleMerge(arr1b, arr2b), expected2, "Simple merge: Test case 2");

        // Test case 3: Both arrays empty
        int[] arr1c = {};
        int[] arr2c = {};
        int[] expected3 = {};
        assertArrayEquals(simpleMerge(arr1c, arr2c), expected3, "Simple merge: Test case 3");

        // Test case 4: All elements in one array smaller
        int[] arr1d = { 1, 2, 3 };
        int[] arr2d = { 4, 5, 6 };
        int[] expected4 = { 1, 2, 3, 4, 5, 6 };
        assertArrayEquals(simpleMerge(arr1d, arr2d), expected4, "Simple merge: Test case 4");

        // Test case 5: With duplicate values
        int[] arr1e = { 1, 2, 2 };
        int[] arr2e = { 2, 3 };
        int[] expected5 = { 1, 2, 2, 2, 3 };
        assertArrayEquals(simpleMerge(arr1e, arr2e), expected5, "Simple merge: Test case 5");

        // Test case 6: arr2 elements are all smaller
        int[] arr1f = { 4, 5, 6 };
        int[] arr2f = { 1, 2, 3 };
        int[] expected6 = { 1, 2, 3, 4, 5, 6 };
        assertArrayEquals(simpleMerge(arr1f, arr2f), expected6, "Simple merge: Test case 6");

        System.out.println("Simple merge: All test cases passed!");
    }

    public static void testAdvancedMerge() {
        // Test case 1: Test case from example
        int[] arr1a = { 1, 3, 5, 0, 0, 0 };
        int[] arr2a = { 2, 4, 6 };
        int[] expected1 = { 1, 2, 3, 4, 5, 6 };
        advancedMerge(arr1a, 3, arr2a, 3);
        assertArrayEquals(arr1a, expected1, "Advanced merge: Test case 1");

        // Test case 2: One array empty
        int[] arr1b = { 0, 0, 0 };
        int[] arr2b = { 1, 2, 3 };
        int[] expected2 = { 1, 2, 3 };
        advancedMerge(arr1b, 0, arr2b, 3);
        assertArrayEquals(arr1b, expected2, "Advanced merge: Test case 2");

        // Test case 3: Both arrays empty
        int[] arr1c = {};
        int[] arr2c = {};
        int[] expected3 = {};
        advancedMerge(arr1c, 0, arr2c, 0);
        assertArrayEquals(arr1c, expected3, "Advanced merge: Test case 3");

        // Test case 4: All elements in one array smaller
        int[] arr1d = { 1, 2, 3, 0, 0, 0 };
        int[] arr2d = { 4, 5, 6 };
        int[] expected4 = { 1, 2, 3, 4, 5, 6 };
        advancedMerge(arr1d, 3, arr2d, 3);
        assertArrayEquals(arr1d, expected4, "Advanced merge: Test case 4");

        // Test case 5: With duplicate values
        int[] arr1e = { 1, 2, 2, 0, 0 };
        int[] arr2e = { 2, 3 };
        int[] expected5 = { 1, 2, 2, 2, 3 };
        advancedMerge(arr1e, 3, arr2e, 2);
        assertArrayEquals(arr1e, expected5, "Advanced merge: Test case 5");

        // Test case 6: arr2 elements are all smaller
        int[] arr1f = { 4, 5, 6, 0, 0, 0 };
        int[] arr2f = { 1, 2, 3 };
        int[] expected6 = { 1, 2, 3, 4, 5, 6 };
        advancedMerge(arr1f, 3, arr2f, 3);
        assertArrayEquals(arr1f, expected6, "Advanced merge: Test case 6");

        System.out.println("Advanced merge: All test cases passed!");
    }

    public static void main(String[] args) {
        testSimpleMerge();
        testAdvancedMerge();
    }
}