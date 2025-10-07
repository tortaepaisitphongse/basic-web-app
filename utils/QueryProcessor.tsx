export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ctaepais";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return ("ctaepais");
  }

  const additionMatch = query.match(/(\d+)\s*plus\s*(\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    return (num1 + num2).toString();
  }

  const largestMatch = query.match(/which of the following numbers is the largest: (.+)\?/i);
  if (largestMatch) {
    const numbersString = largestMatch[1];
    const numbers = numbersString.split(',').map(num => parseInt(num.trim()));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  return "";
}
