{
  function reverseString(s: string[]): void {
    s.reverse();
  }

  /**
   * 테스트 케이스
   */
  reverseString(["h", "e", "l", "l", "o"]); // ["o", "l", "l", "e", "h"]
  reverseString(["H", "a", "n", "n", "a", "h"]); // ["h", "a", "n", "n", "a", "H"]
}
