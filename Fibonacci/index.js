function fibo(n) {
  if (n === 1) {
    return 1;
  }
  return (n = n + fibo(n - 1));
}

console.log(fibo(5));
console.log(fibo(9));
console.log(fibo(67));
