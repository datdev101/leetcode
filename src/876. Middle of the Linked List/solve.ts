class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(middleNode(node)?.val);
