export default class MinHeap {
    length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value; // Add the new item as new item at the end
        this.heapifyUp(this.length);
        // Increate length
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        // Always returning from the 0 index
        const value = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return value;
        }
        this.data[0] = this.data[this.length]; // length because of the -- before
        this.heapifyDown(0);
        return value;
    }

    private heapifyDown(idx: number): void {
        // Base case
        if (idx >= this.length) {
            return;
        }
        // Check if there is any more children
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (leftIdx >= this.length) {
            // Just check left, because the right cannot be also
            return;
        }

        // Get min value
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            // Swap the right value
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            // Continue heapifing
            this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue) {
            // Swap the left value
            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            // Continue heapifing
            this.heapifyDown(leftIdx);
        } else if (leftValue === rightValue && value > rightValue) {
            // Swap the right value
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
            // Continue heapifing
            this.heapifyDown(rightIdx);
        }
    }

    // Look at the parent and if it is > then swap
    private heapifyUp(idx: number): void {
        // Base case
        if (idx === 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentValue = this.data[parent];
        const value = this.data[idx];

        // Recursion
        if (parentValue > value) {
            // Swap curr with parent
            this.data[idx] = parentValue;
            this.data[parent] = value;
            // Continue heapifing
            this.heapifyUp(parent);
        }
    }

    // return index of parent
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    // return index
    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    // return index
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
