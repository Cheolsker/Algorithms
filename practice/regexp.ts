/* 31.2 정규표현식의 생성 */

// 1. 전화번호 매칭
const tel = "010-1234-5678";
// const regExp = /^\d{3}-\d{4}-\d{4}$/;

// 2. 문자열 검색
const target = "Is this all there is?";

// 3. 정규표현식 리터럴
// const regExp = /is/i;

// 4. RegExp 객체
const regExp = new RegExp(/is/i);
// console.log(regExp.test(target));

// 5. 동적으로 RegExp 객체를 생성
const count = (str: string, char: string) =>
  (str.match(new RegExp(char, "gi")) ?? []).length;
// console.log(count("Is this all there is?", "is"));
// console.log(count("Is this all there is?", "xx"));

/* 31.3 RegExp 메서드 */

// String.prototype.match
const regExp2 = /is/;
// console.log(target.match(regExp));

const regExp3 = /is/g;
// console.log(target.match(regExp3));

/* 31.5.2 임의의 문자열 검색 */

const regExp4 = /.../g;
// console.log(target.match(regExp4));

/* 기타: 서브 패턴 - 그룹화 */

const newTarget = "colour is blue AND";
const regExp5 = /col(o|ou)r/g;
console.log(newTarget.match(regExp5));
