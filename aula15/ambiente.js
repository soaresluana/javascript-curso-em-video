let n = [20, 8, 9, 5, 11, 90, 44, 55, 2, 14, 23, 801, 37, 50, 0, 104];
console.log(`O vetor é [${n}]`);

//n.sort();

//ordena os valores do array em ordem crescente
n.sort(function (a, b) {
  return a - b;
});

// adiciona um ou mais elementos ao final de um array
n.push(7);

//exibindo o array sem quebra de linha e com espaço entre os valores
console.log(n.join(" "));

console.log(`O vetor tem ${n.length} posições.`);
console.log(` Primeiro valor do vetor: ${n[0]}`);


