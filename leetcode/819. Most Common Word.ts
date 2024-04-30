{
  function mostCommonWord(paragraph: string, banned: string[]): string {
    let answer = "";
    let cnt = 0;

    const newParagraph = paragraph.replace(/\W+/g, " ").toLowerCase();
    const paragraphs = newParagraph.split(" ").filter((v) => v);
    const map = new Map();

    for (const word of paragraphs) {
      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        map.set(word, map.get(word) + 1);
      }
    }

    for (const [key, value] of map) {
      if (value > cnt && !banned.includes(key)) {
        answer = key;
        cnt = value;
      }
    }

    return answer;
  }

  /**
   * 테스트 케이스
   */

  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ]); // "ball"

  mostCommonWord("a.", []); // "a"
}
