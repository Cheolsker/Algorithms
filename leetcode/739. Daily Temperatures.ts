function dailyTemperatures(temperatures: number[]): number[] {
  const answers = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1] &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const last = stack.pop() as number;

      answers[last] = i - last;
    }

    stack.push(i);
  }

  return answers;
}
