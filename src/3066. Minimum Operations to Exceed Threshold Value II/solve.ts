class MinHeap {
  private heap: number[];

  constructor(nums?: number[]) {
    if (nums) {
      for (let i = ~~(nums.length / 2) - 1; i >= 0; i--) {
        this.heapify(nums, i);
      }
      this.heap = nums;
    } else {
      this.heap = [];
    }
  }

  push(num: number) {
    this.heap.push(num);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length > 0) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.bubbleDown();
    }
  }

  peak() {
    return this.heap[0];
  }

  private heapify(nums: number[], parentIndex: number) {
    const leftIndex = 2 * parentIndex + 1;
    const rightIndex = 2 * parentIndex + 2;
    let smallestIndex = parentIndex;

    if (leftIndex < nums.length && nums[leftIndex] < nums[smallestIndex]) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < nums.length && nums[rightIndex] < nums[smallestIndex]) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex != parentIndex) {
      const temp = nums[parentIndex];
      nums[parentIndex] = nums[smallestIndex];
      nums[smallestIndex] = temp;
      this.heapify(nums, smallestIndex);
    }
  }

  private bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = ~~((index - 1) / 2);
      const parentValue = this.heap[parentIndex];
      const childValue = this.heap[index];

      if (parentValue < childValue) break;

      this.heap[parentIndex] = childValue;
      this.heap[index] = parentValue;
      index = parentIndex;
    }
  }

  private bubbleDown() {
    const lastIndex = this.heap.length - 1;
    for (
      let parentIndex = 0, leftIndex = 1, rightIndex = 2;
      leftIndex <= lastIndex || rightIndex <= lastIndex;
      leftIndex = 2 * parentIndex + 1, rightIndex = 2 * parentIndex + 2
    ) {
      let smallestIndex = parentIndex;
      if (
        leftIndex <= lastIndex &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex == parentIndex) break;

      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[smallestIndex];
      this.heap[smallestIndex] = temp;
      parentIndex = smallestIndex;
    }
  }
}

function minOperations(nums: number[], k: number): number {
  const heap = new MinHeap(nums);
  let counter = 0;

  while (heap.peak() < k) {
    const x = heap.peak();
    heap.pop();
    const y = heap.peak();
    heap.pop();
    heap.push(x * 2 + y);
    counter++;
  }
  return counter;
}

console.log(minOperations([2, 11, 10, 1, 3], 10));
console.log(minOperations([1, 1, 2, 4, 9], 20));
