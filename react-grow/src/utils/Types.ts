/**
 * It basically maps through the keys of T (might be a interface, type etc.) 
 * and creates a new type where all keys are readonly
 */
export type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}