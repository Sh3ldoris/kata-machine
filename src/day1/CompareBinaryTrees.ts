/**
 * Use depth search comparison to evaluate the structure and values of tree
 * @param a
 * @param b
 */
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // Base cases:
    // 1. If both nodes are null
    if (!a && !b) {
        return true;
    }
    // 2. If one of the nodes are not null
    if ((!a && b) || (a && !b)) {
        return false;
    }
    // 3. If the node's values are not equal
    if (a?.value !== b?.value) {
        return false;
    }

    // Recursion
    return (
        compare(a?.left || null, b?.left || null) &&
        compare(a?.right || null, b?.right || null)
    );
}
