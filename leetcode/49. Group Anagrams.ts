{
  function groupAnagrams(strs: string[]): string[][] {
    const answer = [];
    const map = new Map<string, string[]>();

    for (const word of strs) {
      const sortedWord = word.split("").sort().join("");

      if (map.has(sortedWord)) {
        map.set(sortedWord, [...(map.get(sortedWord) || []), word]);
      } else {
        map.set(sortedWord, [word]);
      }
    }

    for (const [_, value] of map) {
      answer.push(value);
    }

    return answer;
  }

  /**
   * 테스트 케이스
   */
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["eat","tea","ate"],["tan","nat"],["bat"]]
  groupAnagrams([""]); // [[""]]
  groupAnagrams(["a"]); // [["a"]]
}
