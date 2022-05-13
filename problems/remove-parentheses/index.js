function removeParentheses(s) {
  let finalString = "";
  const stack = [];
  for (let a = 0; a <= s.length - 1; a++) {
    if (s[a] === "(") stack.push(1);

    if (stack.length === 0) {
      finalString += s[a];
    }

    if (s[a] === ")") {
      stack.pop();
    }
  }

  return finalString;
}

//should equal = "exampleexample"
console.log(removeParentheses("example(unwanted thing)example"));
