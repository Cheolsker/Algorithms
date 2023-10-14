/* 조건 */
// 문자를 제거해야 한다
// 부호가 들어갈수 있다
// 소수를 고려해야 한다

function getMap() {
  const map = new Map();
  for (let i = 0; i < 10; i++) {
    map.set(`${i}`, i);
  }

  return map;
}

function stringToNumber(str: string) {
  const map = getMap();
  const numRegexp = /^(\-|\+)?\d+(\.\d+)?$/g;
  let sign = 0;
  let num = 0;

  if (!str || !str.match(numRegexp)?.length) {
    console.error(`ERROR: str isn't number`);
    return false;
  }

  if (str[0] === "+" || str[0] === "-") {
    if (str[0] === "-") sign = 1;

    str = str.replace(/[+-]/, "");
  }

  const [int = "", float = ""] = str.split(".");

  for (let i = 0; i < int.length; i++) {
    num += 10 ** (int.length - i - 1) * map.get(int[i]);
  }

  for (let i = 0; i < float.length; i++) {
    num += 10 ** -(i + 1) * map.get(float[i]);
  }

  if (sign) num *= -1;

  return num;
}

/* 테스트 케이스 */

// no valid
console.log(stringToNumber(""));
console.log(stringToNumber("13abc.009"));
console.log(stringToNumber("+13abc.009"));
console.log(stringToNumber(".009"));

// valid
console.log(stringToNumber("13.009"));
console.log(stringToNumber("-13.009"));
console.log(stringToNumber("+13.009"));
console.log(stringToNumber("13"));
console.log(stringToNumber("-13"));
