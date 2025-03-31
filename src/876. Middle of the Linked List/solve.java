
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slowPointer = head;
        ListNode fastPointer = head;

        while (fastPointer != null && fastPointer.next != null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        return slowPointer;
    }

    ListNode generateListNodeFromArray(int[] nums) {
        ListNode node = new ListNode(-1);
        ListNode pNode = node;

        for (int num : nums) {
            pNode.next = new ListNode(num);
            pNode = pNode.next;
        }

        return node.next;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] test1 = { 1, 2, 3, 4, 5 };
        assert solution.middleNode(solution.generateListNodeFromArray(test1)).val == 3 : "Test 1 fail";

        int[] test2 = { 1, 2, 3, 4, 5, 6 };
        assert solution.middleNode(solution.generateListNodeFromArray(test2)).val == 4 : "Test 2 fail";

        System.out.println("All test passed");
    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}