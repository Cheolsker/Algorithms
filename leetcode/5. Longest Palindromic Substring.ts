{
  function longestPalindrome(s: string): string {
    let answer = s[0];

    for (let i = 0; i < s.length; i++) {
      let left = i;
      let right = s.length - 1;
      let last = undefined;

      while (left <= right) {
        if (s[left] === s[right]) {
          if (!last) last = right;
          left++;
          right--;
        } else {
          if (last) {
            left = i;
            right = last;
            last = undefined;
          }

          right--;
        }
      }

      if (s[left] === s[right] && last) {
        const target = s.slice(i, last + 1);

        if (target.length > answer.length) answer = target;
      }
    }

    return answer;
  }

  console.log(longestPalindrome("babad")); // bad
  console.log(longestPalindrome("cbbd")); // bb
}
