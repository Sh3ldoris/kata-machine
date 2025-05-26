const direction: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

/**
 * Walk one step of the maze
 */
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base cases:
    // 1. It's off maze
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    // 2. It's a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3. It's the end
    if (curr.y === end.y && curr.x === end.x) {
        path.push(end);
        return true;
    }
    // 4. It's been seen
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Recursive case:
    // 1. Pre-action
    path.push(curr); // Log the path
    seen[curr.y][curr.x] = true; // Log that curr field has been seen
    // 2. recurse
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i]; // Just a direction accelerator
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true; // Recursive walk was successful (founded end)
        }
    }
    // 3. Post-action
    path.pop(); // The end wasn't find - reset the path
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // Fill seen map with false
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
