function walk(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }
    // Recurse to its children
    walk(node.left, path);
    walk(node.right, path);
    // Log the value
    path.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);

    return path;
}
