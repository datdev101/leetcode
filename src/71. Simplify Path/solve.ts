function simplifyPath(path: string): string {
  const stack: string[] = [];

  for (const part of path.split("/")) {
    if (part == "..") {
      stack.pop();
      continue;
    }

    if (part == "." || part == "") continue;

    stack.push(part);
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/home/user/Documents/../Pictures"));
