let n = [8, 1, 7, 4, 2, 9];
console.log(n);

n.sort(function (a, b) {
  return a - b;
});

/**
 * console.log(n[0]);
   console.log(n[1]);
   console.log(n[2]);
   ...


for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}
*/

// 'for' ainda mais simplificado
for (let pos in n) {
  console.log(n[pos]);
}

//buscando valores dentro do array
let pos = n.indexOf(8);

if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor está na posição ${pos}`);
}
