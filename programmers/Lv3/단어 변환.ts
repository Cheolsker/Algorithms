function getEdges(words: string[], word: string): string[] {
  const set = new Set<string>();

  for (let j = 0; j < word.length; j++) {
    const ptn = word.slice(0, j) + "[a-z]" + word.slice(j + 1);
    const regex = new RegExp(ptn);

    words.forEach((w) => {
      if (w !== word && regex.test(w)) {
        set.add(w);
      }
    });
  }

  return Array.from(set);
}

function makeGraph(words: string[]) {
  const graph: Record<string, string[]> = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const edges = getEdges(words, word);
    graph[word] = edges;
  }

  return graph;
}

function bfs(
  graph: Record<string, string[]>,
  visited: Record<string, number>,
  begin: string
) {
  const queue = [begin];

  visited[begin] = 0;

  while (queue.length) {
    const v = queue.shift() as string;

    for (const a of graph[v]) {
      if (!visited[a]) {
        visited[a] = visited[v] + 1;
        queue.push(a);
      }
    }
  }
}

function solution(begin: string, target: string, words: string[]) {
  const vertexs = [begin, ...words];
  const graph = makeGraph(vertexs);
  const visited = vertexs.reduce((obj: Record<string, number>, w) => {
    obj[w] = 0;
    return obj;
  }, {});

  bfs(graph, visited, begin);

  return visited[target] || 0;
}
