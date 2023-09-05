let num = document.querySelector("#txtn");
let flista = document.querySelector("#lista");
let res = document.getElementById("res");
let valores = [];

function adicionar() {
  let numero = Number(num.value);

  if (numero >= 1 && numero <= 100) {
    valores.push(numero);
    let item = document.createElement("option");
    item.text = `valor ${numero} adicionado`;
    flista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Número fora do intervalo permitido!");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length === 0) {
    alert("Adicione valores antes de finalizar!");
    return;
  }

  let total = valores.length;
  let soma = 0;
  let maior = valores[0];
  let menor = valores[0];

  for (let pos in valores) {
    soma += valores[pos];
    if (valores[pos] > maior) maior = valores[pos];
    if (valores[pos] < menor) menor = valores[pos];
  }
  let media = soma / total;

  res.innerHTML += `Total de valores digitados: <strong>${total}</strong> <br>`;
  res.innerHTML += `Maior valor digitado: <strong>${maior}</strong> <br>`;
  res.innerHTML += `Menor valor digitado: <strong>${menor}</strong> <br>`;
  res.innerHTML += `Soma dos valores digitados: <strong>${soma}</strong> <br>`;
  res.innerHTML += `Média dos valores digitados: <strong>${media.toFixed(
    1
  )}</strong>`;
}
