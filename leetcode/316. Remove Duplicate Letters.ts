function removeDuplicateLetters(s: string): string {
  const counter = new Map<string, number>(); // 문자 갯수를 담을 map
  const seen = new Map<string, boolean>(); // 처리한 문자를 체크하는 map
  const stack: string[] = []; // 정답, 문자들을 담을 스택

  // 문자열 갯수 저장
  for (const c of s) {
    const cnt = counter.get(c);

    counter.set(c, cnt ? cnt + 1 : 1);
  }

  for (const c of s) {
    // 현재 처리하는 문자는 카운터에서 -1
    const cnt = counter.get(c) as number;
    counter.set(c, cnt - 1);

    // 이미 처리한 문자는 건너뜀
    if (seen.get(c) === true) {
      continue;
    }

    // 스택에 있는 문자가 현재보다 더 뒤에 올 문자라면,
    // 스택에서 POP 한 후, 처리하지 않은 문자로 체크
    while (
      stack.length > 0 &&
      (stack.at(-1) as string) > c &&
      (counter.get(stack.at(-1) as string) as number) > 0
    ) {
      seen.set(stack.pop() as string, false);
    }

    // 현재 문자를 스택에 넣고, 처리한 문자로 체크
    stack.push(c);
    seen.set(c, true);
  }

  return stack.join('');
}
