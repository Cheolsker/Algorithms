{
  function reorderLogFiles(logs: string[]): string[] {
    const letters = [];
    const digits = [];

    for (let i = 0; i < logs.length; i++) {
      const [_, word] = logs[i].split(" ");

      if (word.match(/[a-z]/)) {
        letters.push(logs[i]);
      } else {
        digits.push(logs[i]);
      }
    }

    letters.sort((l1, l2) => {
      const [id1, ...rest1] = l1.split(" ");
      const [id2, ...rest2] = l2.split(" ");

      if (rest1 < rest2) return -1;
      else if (rest1 > rest2) return 1;
      else {
        if (id1 < id2) return -1;
        else return 1;
      }
    });

    return [...letters, ...digits];
  }

  /**
   * 테스트 케이스
   */
  reorderLogFiles([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ]); // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
  ]); // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
}
