function removeDuplicateLetters(s: string): string {
  const counter = new Map<string, number>();
  const seen = new Map<string, boolean>();
  const stack: string[] = [];

  for (const c of s) {
    const cnt = counter.get(c);

    counter.set(c, cnt ? cnt + 1 : 1);
  }

  for (const c of s) {
    const cnt = counter.get(c) as number;
    counter.set(c, cnt - 1);

    if (seen.get(c) === true) {
      continue;
    }

    while (
      stack.length > 0 &&
      (stack.at(-1) as string) > c &&
      (counter.get(stack.at(-1) as string) as number) > 0
    ) {
      seen.set(stack.pop() as string, false);
    }

    stack.push(c);
    seen.set(c, true);
  }

  return stack.join('');
}
