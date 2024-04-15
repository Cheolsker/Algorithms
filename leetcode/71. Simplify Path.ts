{
  function simplifyPath(path: string): string {
    const subPaths = path.split("/").filter((v) => v);
    const stack: string[] = [];

    for (const path of subPaths) {
      if (path === ".") continue;
      if (path === "..") {
        stack.pop();
      } else {
        stack.push(path);
      }
    }

    return "/" + stack.join("/");
  }

  /**
   * 테스트 케이스
   */
  simplifyPath("/home/"); // output: /home
  simplifyPath("/../"); // output: /
  simplifyPath("/home//foo/"); // output: /home/foo
}
