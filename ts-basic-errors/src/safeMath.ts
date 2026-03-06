export function safeDiv(x: number, y: number): number {
    if (y === 0) {
        throw new Error("dicaidevby zero");

    }
    return x / y;
}
//ex2
export function safemod(x: number, y: number): number {
    if (y === 0) {
        throw new Error("mod by zero")
    }
    return x / y
}