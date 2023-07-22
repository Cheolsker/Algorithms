function solution(skill: string, skill_trees: string[]) {
  const order = skill.split("");
  const set = new Set(skill);
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let stack = [];
    let skill = skill_trees[i];
    let flag = true;

    for (let j = 0; j < skill.length; j++) {
      if (set.has(skill[j])) {
        stack.push(skill[j]);
      }
    }

    for (let k = 0; k < stack.length; k++) {
      if (order[k] !== stack[k]) flag = false;
    }

    if (flag) answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
