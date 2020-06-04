function solution(A) {
  // XOR will cancel out repeated numbers, leaving the odd one
  return A.reduce((x, y) => x ^ y)
}