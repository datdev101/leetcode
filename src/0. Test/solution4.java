class Solution4 {

    public static boolean simpleIsPalindrome(String s) {
        int left = 0, right = s.length() - 1;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right))
                return false;
            left++;
            right--;
        }

        return true;
    }

    public static int advancedCountPalindrome(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            // the first count is expected to have 1 char at center
            // the second count is expected empty at center (exclude expand from i-1 because it will cause duplicate count)
            count += countExpandFromCenter(s, i, i) + countExpandFromCenter(s, i, i + 1);
        }

        return count;
    }

    public static int countExpandFromCenter(String s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
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

    public static void assertEquals(boolean actual, boolean expected, String message) {
        if (actual != expected) {
            System.out.println("FAILED: " + message);
            System.out.println("Expected: " + expected);
            System.out.println("Actual:   " + actual);
            System.exit(1);
        }
    }

    public static void testSimpleIsPalindrome() {
        // Test case 1: Simple palindrome
        String s1 = "racecar";
        boolean expected1 = true;
        assertEquals(simpleIsPalindrome(s1), expected1, "Simple Palindrome: Test case 1");

        // Test case 2: Not a palindrome
        String s2 = "hello";
        boolean expected2 = false;
        assertEquals(simpleIsPalindrome(s2), expected2, "Simple Palindrome: Test case 2");

        // Test case 3: Even-length palindrome
        String s3 = "abba";
        boolean expected3 = true;
        assertEquals(simpleIsPalindrome(s3), expected3, "Simple Palindrome: Test case 3");

        // Test case 4: Single character
        String s4 = "x";
        boolean expected4 = true;
        assertEquals(simpleIsPalindrome(s4), expected4, "Simple Palindrome: Test case 4");

        // Test case 5: Empty string
        String s5 = "";
        boolean expected5 = true;
        assertEquals(simpleIsPalindrome(s5), expected5, "Simple Palindrome: Test case 5");

        // Test case 6: Case-sensitive test
        String s6 = "Racecar";
        boolean expected6 = false;
        assertEquals(simpleIsPalindrome(s6), expected6, "Simple Palindrome: Test case 6");

        // Test case 7: Palindrome with special characters
        String s7 = "madam!";
        boolean expected7 = false;
        assertEquals(simpleIsPalindrome(s7), expected7, "Simple Palindrome: Test case 7");

        System.out.println("Simple Palindrome: All test cases passed!");
    }

    public static void testAdvancedCountPalindrome() {
        // Test case 1: Simple palindrome
        String s1 = "aba"; // "a", "b", "a", "aba"
        int expected1 = 4;
        assertEquals(advancedCountPalindrome(s1), expected1, "Advanced Palindrome: Test case 1");

        // Test case 2: All characters same
        String s2 = "aaa"; // "a", "a", "a", "aa", "aa", "aaa"
        int expected2 = 6;
        assertEquals(advancedCountPalindrome(s2), expected2, "Advanced Palindrome: Test case 2");

        // Test case 3: No repeated characters
        String s3 = "abc"; // "a", "b", "c"
        int expected3 = 3;
        assertEquals(advancedCountPalindrome(s3), expected3, "Advanced Palindrome: Test case 3");

        // Test case 4: Empty string
        String s4 = "";
        int expected4 = 0;
        assertEquals(advancedCountPalindrome(s4), expected4, "Advanced Palindrome: Test case 4");

        // Test case 5: One character
        String s5 = "z";
        int expected5 = 1;
        assertEquals(advancedCountPalindrome(s5), expected5, "Advanced Palindrome: Test case 5");

        // Test case 6: Longer string with mixed characters
        String s6 = "racecar"; // "r", "a", "c", "e", "c", "a", "r", "cec", "aceca", "racecar"
        int expected6 = 10;
        assertEquals(advancedCountPalindrome(s6), expected6, "Advanced Palindrome: Test case 6");

        // Test case 7: Palindromes with even length
        String s7 = "abba"; // "a", "b", "b", "a", "bb", "abba"
        int expected7 = 6;
        assertEquals(advancedCountPalindrome(s7), expected7, "Advanced Palindrome: Test case 7");

        System.out.println("Advanced Palindrome: All test cases passed!");
    }

    public static void main(String[] args) {
        testSimpleIsPalindrome();
        testAdvancedCountPalindrome();
    }
}