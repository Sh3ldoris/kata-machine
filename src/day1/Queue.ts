type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>; // First added item
    private tail?: QNode<T>; // Last added item

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: QNode<T> = {
            value: item,
        };

        if (!this.tail) {
            this.tail = this.head = newNode;
        }
        this.length++;

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            this.tail = undefined;
        }

        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
