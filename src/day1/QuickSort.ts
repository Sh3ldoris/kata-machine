function qs(arr: number[], lo: number, hi: number): void {
    // Base case - when the lo and hi meet
    if (lo >= hi) {
        return;
    }

    // Get the pivot idx
    const pivotIdx = partition(arr, lo, hi);

    // Repeat the weak sort on the left from the pivot and on the right from the pivot
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi]; // Set as pivot the greatest number
    let idx = lo - 1; // Index where should be the smaller value replaced

    for (let i = lo; i < hi; i++) {
        // If the iterated item value is less than pivot value - increment idx and switch the iterated item with item on idx position
        if (arr[i] < pivot) {
            idx++;
            const tmp: number = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // Increment once more
    idx++;
    // Swap the pivot value with the idx value
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    // Returning the pivot index
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
