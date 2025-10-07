import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Tor"
        ));
    })

    test('should return andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ctaepais"
        ));
    })

    test('should add two numbers', () => {
        expect(QueryProcessor("5 plus 3")).toBe("8");
        expect(QueryProcessor("10 plus 20")).toBe("30");
        expect(QueryProcessor("0 plus 0")).toBe("0");
    });

    test('should add numbers with different formats', () => {
        expect(QueryProcessor("What is 5 plus 3?")).toBe("8");
        expect(QueryProcessor("26 plus 41")).toBe("67");
        expect(QueryProcessor("100 plus 200")).toBe("300");
    });

    test('should find largest number in a list', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 73, 14, 21?")).toBe("73");
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 2, 3, 4, 5?")).toBe("5");
        expect(QueryProcessor("Which of the following numbers is the largest: 100, 50, 75?")).toBe("100");
    });

    test('should handle single number in list', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 42?")).toBe("42");
    });
});