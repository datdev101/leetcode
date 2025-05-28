class Solution3 {

    public static int[] simpleFinder(int[] arr, int k) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int sum = arr[left] + arr[right];
            if (sum > k) {
                right--;
            } else if (sum < k) {
                left++;
            } else {
                return new int[] { arr[left], arr[right] };
            }
        }

        return new int[] {};
    }

    public static int[] advancedFinder(int[] arr, int k) {
        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                if (sum > k) {
                    right--;
                } else if (sum < k) {
                    left++;
                } else {
                    return new int[] { arr[i], arr[left], arr[right] };
                }
            }
        }

        return new int[] {};
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

    public static void testSimpleFinder() {
        // Test case 1: Normal case
        int arr1[] = { 1, 2, 3, 4, 6 }, k1 = 6;
        int[] expected1 = { 2, 4 };
        assertArrayEquals(simpleFinder(arr1, k1), expected1, "Simple finder: Test case 1");

        // Test case 2: First and last element
        int arr2[] = { 1, 2, 3, 4, 9 }, k2 = 10;
        int[] expected2 = { 1, 9 };
        assertArrayEquals(simpleFinder(arr2, k2), expected2, "Simple finder: Test case 2");

        // Test case 3: No match found
        int arr3[] = { 1, 2, 3, 4 }, k3 = 100;
        int[] expected3 = {};
        assertArrayEquals(simpleFinder(arr3, k3), expected3, "Simple finder: Test case 3");

        // Test case 4: Duplicates in array
        int arr4[] = { 1, 2, 2, 3, 4 }, k4 = 6;
        int[] expected4 = { 2, 4 };
        assertArrayEquals(simpleFinder(arr4, k4), expected4, "Simple finder: Test case 4");

        // Test case 5: Pair is in the middle
        int arr5[] = { 1, 3, 5, 7, 11 }, k5 = 10;
        int[] expected5 = { 3, 7 };
        assertArrayEquals(simpleFinder(arr5, k5), expected5, "Simple finder: Test case 5");

        // Test case 6: Only two elements
        int arr6[] = { 2, 4 }, k = 6;
        int[] expected6 = { 2, 4 };
        assertArrayEquals(simpleFinder(arr6, k), expected6, "Simple finder: Test case 6");

        System.out.println("Simple finder: All test cases passed!");
    }

    public static void testAdvancedFinder() {
        // Test case 1: Normal case
        int arr1[] = { 1, 2, 3, 4, 5, 6 }, k1 = 10;
        int[] expected1 = { 1, 3, 6 };
        assertArrayEquals(advancedFinder(arr1, k1), expected1, "Advanced finder: Test case 1");

        // Test case 2: All small values
        int arr2[] = { 1, 1, 1, 1 }, k2 = 3;
        int[] expected2 = { 1, 1, 1 };
        assertArrayEquals(advancedFinder(arr2, k2), expected2, "Advanced finder: Test case 2");

        // Test case 3: No triple found
        int arr3[] = { 1, 2, 3 }, k3 = 100;
        int[] expected3 = {};
        assertArrayEquals(advancedFinder(arr3, k3), expected3, "Advanced finder: Test case 3");

        // Test case 4: Triple with negative numbers
        int arr4[] = { -5, -2, 0, 1, 3, 4 }, k4 = 3;
        int[] expected4 = { -2, 1, 4 };
        assertArrayEquals(advancedFinder(arr4, k4), expected4, "Advanced finder: Test case 4");

        // Test case 5: Triple at the end
        int arr5[] = { 0, 1, 2, 3, 7, 15 }, k5 = 12;
        int[] expected5 = { 2, 3, 7 };
        assertArrayEquals(advancedFinder(arr5, k5), expected5, "Advanced finder: Test case 5");

        // Test case 6: Array with exactly 3 elements
        int arr6[] = { 2, 3, 5 }, k6 = 10;
        int[] expected6 = { 2, 3, 5 };
        assertArrayEquals(advancedFinder(arr6, k6), expected6, "Advanced finder: Test case 6");

        System.out.println("Advanced finder: All test cases passed!");
    }

    public static void main(String[] args) {
        testSimpleFinder();
        testAdvancedFinder();
    }
}
