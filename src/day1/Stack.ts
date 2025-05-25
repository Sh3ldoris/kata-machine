type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Stack<T> {
    public length: number;
    #head?: QNode<T>;

    constructor() {
        this.#head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;

        const newNode: QNode<T> = {
            value: item,
            next: this.#head,
        };

        this.#head = newNode;
    }

    pop(): T | undefined {
        if (!this.#head) {
            return undefined;
        }

        this.length--;
        const head: QNode<T> = this.#head;
        this.#head = this.#head?.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.#head?.value;
    }
}
