function solution(S) {
  const opposites = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const encountered = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(' || S[i] === '[' || S[i] === '{') {
      encountered.push(S[i]);
    } else if ((S[i] === ')' || S[i] === ']' || S[i] === '}') && encountered.pop() !== opposites[S[i]]) {
      return 0;
    }
  }
  return encountered.length === 0 ? 1 : 0
}