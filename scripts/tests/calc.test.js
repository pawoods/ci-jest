/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("Should return 50 for 23 + 27", () => {
            expect(addition(23, 27)).toBe(50);
        })
    });
    describe("Subtract function", () => {

    });
    describe("Division function", () => {

    });
    describe("Multiply function", () => {

    });
});