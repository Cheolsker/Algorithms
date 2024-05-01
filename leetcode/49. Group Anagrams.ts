{
  function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const word of strs) {
      const sortedWord = word.split("").sort().join("");

      if (!map.has(sortedWord)) {
        map.set(sortedWord, []);
      }

      (map.get(sortedWord) as string[]).push(word);
    }

    return Array.from(map.values());
  }

  /**
   * 테스트 케이스
   */
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["eat","tea","ate"],["tan","nat"],["bat"]]
  groupAnagrams([""]); // [[""]]
  groupAnagrams(["a"]); // [["a"]]
}
