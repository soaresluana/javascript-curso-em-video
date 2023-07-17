function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Masculino";

      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "imgbebe-m.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "imgjovem-m.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "imghomem.png");
      } else {
        // idoso
        img.setAttribute("src", "imgidoso-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Feminino";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "imgbebe-f.png");
      } else if (idade >= 16 && idade < 30) {
        //jovem
        img.setAttribute("src", "imgjovem-f.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "imgmulher.png");
      } else {
        // idoso
        img.setAttribute("src", "imgidoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Sexo: ${genero}. Idade: ${idade}`;
    res.appendChild(img);
  }
}
