{
  function longestPalindrome(s: string): string {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
      // 홀수 문자열일 때, 가장 긴 회문을 구함
      let l = i,
        r = i;

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > answer.length) {
          answer = s.slice(l, r + 1);
        }

        l--;
        r++;
      }

      // 짝수 문자열일 때, 가장 긴 회문을 구함
      (l = i), (r = i + 1);

      while (l >= 0 && r < s.length && s[l] === s[r]) {
        if (r - l + 1 > answer.length) {
          answer = s.slice(l, r + 1);
        }

        l--;
        r++;
      }
    }

    return answer;
  }

  console.log(longestPalindrome("babad")); // bad
  console.log(longestPalindrome("cbbd")); // bb
}
