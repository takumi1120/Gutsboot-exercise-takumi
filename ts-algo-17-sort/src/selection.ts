function swap(arr: number[], i: number, j: number): void {
    const tmp = arr[i];
    arr[i] = arr[j]
    arr[j] = tmp;
}

export function selectionSort(arr: number[]): number[] {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++)
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }

        if (minIndex !== i) {
            swap(a, i, minIndex)
        }
    }
    return a
}