{
  /**
   * 내장 함수 사용
   */
  function reverseString(s: string[]): void {
    s.reverse();
  }

  /**
   * 직접 구현한 풀이
   * 
  function reverseString(s: string[]): void {
    for(let i=0; i<s.length/2; i++) {
        [s[i], s[s.length-i-1]] = [s[s.length-i-1], s[i]];
    } 
  };
   *
  **/

  /**
   * 테스트 케이스
   */
  reverseString(["h", "e", "l", "l", "o"]); // ["o", "l", "l", "e", "h"]
  reverseString(["H", "a", "n", "n", "a", "h"]); // ["h", "a", "n", "n", "a", "H"]
}
