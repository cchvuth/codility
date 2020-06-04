function solution(A, K) {
  if (A.length !== 0 && A.length !== K) {
    for (let i = 0; i < K; i++) {
      A.unshift(A.pop())
    }
  }
  return A;
}