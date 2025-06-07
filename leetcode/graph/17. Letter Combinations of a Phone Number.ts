{
  /**
   * 재귀함수를 이용해서 모든 경우의 수를 구함.
   */
  function letterCombinations(digits: string): string[] {
    const graph = [
      [],
      [],
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
      ["j", "k", "l"],
      ["m", "n", "o"],
      ["p", "q", "r", "s"],
      ["t", "u", "v"],
      ["w", "x", "y", "z"],
    ];
    const results: string[] = [];

    DFS(graph, digits, 0, "", results);
    return results;
  }

  function DFS(
    graph: string[][],
    digits: string,
    index: number,
    chars: string,
    results: string[]
  ) {
    if (digits.length === index) {
      if (chars) {
        results.push(chars);
      }
      return chars;
    }
    const digit = Number(digits[index]);

    for (const char of graph[digit]) {
      DFS(graph, digits, index + 1, chars + char, results);
    }
  }
}
