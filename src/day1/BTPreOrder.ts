function walk(node: BinaryNode<number> | null, path: number[]): void {
    if (!node) {
        return;
    }
    // Log the value
    path.push(node.value);
    // Recurse to its children
    walk(node.left, path);
    walk(node.right, path);
}

function walk_non_recursive(
    node: BinaryNode<number> | null,
    path: number[],
): void {
    if (!node) {
        return;
    }
    if (!node.right && !node.left) {
        path.push(node.value);
        return;
    }

    const stack: BinaryNode<number>[] = [];
    let cur: BinaryNode<number> | undefined = node;
    let hasPopped: boolean = false;
    do {
        if (!hasPopped && cur.left) {
            path.push(cur.value);
            stack.push(cur);
            cur = cur.left as BinaryNode<number>;
            continue;
        }
        if ((!cur.left || hasPopped) && cur.right) {
            if (!hasPopped) {
                path.push(cur.value);
            }
            hasPopped = false;
            cur = cur.right as BinaryNode<number>;
            continue;
        }
        if ((!cur.left || hasPopped) && !cur.right) {
            if (!hasPopped) {
                path.push(cur.value);
            }
            cur = stack.pop();
            hasPopped = true;
        }
    } while (cur);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk_non_recursive(head, path);

    return path;
}
