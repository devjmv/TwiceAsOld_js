import { describe, it, expect } from "vitest";
import { twiceAsHold } from "../src/app";

describe('doubleAge', () => {
    it('if daddys age is 36 and sons age is 7, should return 22', () => {
        expect(twiceAsHold(36, 7)).toBe(22);
    })

    it('if daddys age is 55 and sons age is 30, should return 5', () => {
        expect(twiceAsHold(55, 30)).toBe(5);
    })

    it('if daddys age is 42 and sons age is 21, should return 0', () => {
        expect(twiceAsHold(42, 21)).toBe(0);
    })

    it('if daddys age is 22 and sons age is 1, should return 20', () => {
        expect(twiceAsHold(22, 1)).toBe(20);
    })

    it('if daddys age is 29 sons age is 0, should return 29', () => {
        expect(twiceAsHold(29, 0)).toBe(29);
    })
})

