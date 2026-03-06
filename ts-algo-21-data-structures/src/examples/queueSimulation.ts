export function countWords(words: string[]): Map<string, number> {
    const map = new Map<string, number>();
    for (const w of words) {
        map.set(w, (map.get(w) ?? 0) + 1)
    }
    return map
}


