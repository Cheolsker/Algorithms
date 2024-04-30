{
  function isPalindrome(s: string): boolean {
    const newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (newS.length <= 1) return true;

    for (let i = 0; i < newS.length / 2; i++) {
      if (newS[i] === newS[newS.length - i - 1]) continue;
      else return false;
    }

    return true;
  }
}
