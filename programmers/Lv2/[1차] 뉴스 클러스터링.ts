function isAlphabet(str: string) {
  return str?.match(/[a-z|A-Z]/i) ? true : false;
}

function iterate(strArr, strMap, str, keys) {
  strArr.map((s, i) => {
    if (i === strArr.length - 1) return;

    if (isAlphabet(str[i]) && isAlphabet(str[i + 1])) {
      const word = (str[i] + str[i + 1]).toUpperCase();
      const wordCnt = strMap.get(word);

      if (wordCnt) {
        strMap.set(word, wordCnt + 1);
      } else {
        strMap.set(word, 1);
      }

      keys.add(word);
    }
  });
}

function getJacquard(
  keys: Set<number>,
  str1Map: Map<number, number>,
  str2Map: Map<number, number>
) {
  if (!keys.size) return 1;

  const keysArr = [...keys];
  let commonCnt = 0;
  let unionCnt = 0;

  keysArr.forEach((key) => {
    const str1 = str1Map.get(key) || 0;
    const str2 = str2Map.get(key) || 0;

    commonCnt += Math.min(str1, str2);
    unionCnt += Math.max(str1, str2);
  });

  return commonCnt / unionCnt;
}

function solution(str1: string, str2: string) {
  if (!str1.length || !str2.length) return 1;

  let answer = 0;

  const keys = new Set<number>();
  const str1Map = new Map<number, number>();
  const str2Map = new Map<number, number>();

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  iterate(str1Arr, str1Map, str1, keys);
  iterate(str2Arr, str2Map, str2, keys);

  answer = getJacquard(keys, str1Map, str2Map);

  return Math.trunc(answer * 65536);
}

// test case
/*
  str1	str2	answer
  FRANCE	french	16384
  handshake	shake hands	65536
  aa1+aa2	AAAA12	43690
  E=M*C^2	e=m*c^2	65536
*/

console.log(solution("handshake", "shake hands"));
