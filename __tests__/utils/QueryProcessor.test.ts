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

    test('should return correct addition for 26 plus 41', () => {
        const query = "What is 26 plus 41?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("67");
    });

    test('should return correct addition for any two numbers', () => {
        const query1 = "What is 5 plus 3?";
        const response1: string = QueryProcessor(query1);
        expect(response1).toBe("8");

        const query2 = "What is 100 plus 200?";
        const response2: string = QueryProcessor(query2);
        expect(response2).toBe("300");

        const query3 = "What is 0 plus 0?";
        const response3: string = QueryProcessor(query3);
        expect(response3).toBe("0");
    });
});