import Queue from "@code/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: Queue<BinaryNode<number>> = new Queue<BinaryNode<number>>();
    // Insert head
    queue.enqueue(head);
    while (queue.length) {
        const curr: BinaryNode<number> = queue.deque() as BinaryNode<number>;

        if (curr.left) {
            queue.enqueue(curr.left);
        }
        if (curr.right) {
            queue.enqueue(curr.right);
        }

        if (curr.value === needle) {
            return true;
        }
    }

    return false;
}
