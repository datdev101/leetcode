class Solution {
    private boolean isAlphanumeric(char c) {
        if ('0' <= c && c <= '9')
            return true;
        if ('a' <= c && c <= 'z')
            return true;
        if ('A' <= c && c <= 'Z')
            return true;
        return false;
    }

    private boolean isTwoAlphanumericEqual(char a, char b) {
        int aCode = (int) a;
        int bCode = (int) b;
        int uppercaseOffset = 'a' - 'A';

        if ('A' <= a && a <= 'Z')
            aCode += uppercaseOffset;
        if ('A' <= b && b <= 'Z')
            bCode += uppercaseOffset;

        return aCode == bCode;
    }

    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            while (left < right && !isAlphanumeric(s.charAt(left))) {
                left++;
            }
            while (left < right && !isAlphanumeric(s.charAt(right))) {
                right--;
            }
            if (left < right && !isTwoAlphanumericEqual(s.charAt(left), s.charAt(right)))
                return false;
            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        String test1 = "A man, a plan, a canal: Panama";
        assert solution.isPalindrome(test1) == true : "Test 1 fail";

        String test2 = "race a car";
        assert solution.isPalindrome(test2) == false : "Test 2 fail";

        String test3 = " ";
        assert solution.isPalindrome(test3) == true : "Test 3 fail";

        System.out.println("All test passed");
    }
}