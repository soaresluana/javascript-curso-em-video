function parimpar(n) {
  if (n % 2 == 0) {
    return "par!";
  } else {
    return "ímpar!";
  }
}

let res = parimpar(70);
console.log(res);
// ou console.log(parimpar(70));
