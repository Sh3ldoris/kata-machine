function merge(arrL: number[], arrR: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arrL.length && j < arrR.length) {
        const leftItem: number = arrL[i];
        const rightItem: number = arrR[j];

        if (leftItem < rightItem) {
            result.push(leftItem);
            i++;
        } else {
            result.push(rightItem);
            j++;
        }
    }

    console.log("i, j", i, j, arrL.length, arrR.length);

    for (i; i < arrL.length; i++) {
        result.push(arrL[i]);
    }
    for (j; j < arrR.length; j++) {
        result.push(arrR[j]);
    }

    return result;
}

export default function merge_sort(arr: number[]): number[] {
    // Base case : there is single item array (in which was divided)
    console.log("Array", arr);
    if (arr?.length <= 1) {
        return arr;
    }
    // Find the middle item's index
    const middleIdx: number = Math.floor(arr.length / 2);
    // console.log("middleIdx", middleIdx);

    const leftArrSorted: number[] = merge_sort(arr.slice(0, middleIdx));
    const rightArrSorted: number[] = merge_sort(
        arr.slice(middleIdx, arr.length),
    );

    return merge(leftArrSorted, rightArrSorted);
}
