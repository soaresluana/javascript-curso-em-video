function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("fotoManha");
  var data = new Date();
  var hora = data.getHours();
  var minutes = data.getMinutes();
  if (minutes < 10) {
    minutes = msg.innerHTML = `Agora são ${hora}:0${minutes}`;
  } else {
    msg.innerHTML = `Agora são ${hora}:0${minutes}`;
  }

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "imgdia.png";
    document.body.style.background = "#e2cd9f";
    msg2.innerHTML = "<p>Bom dia!</p>";
  } else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = "imgtarde.png";
    document.body.style.background = "#b9846f";
    msg2.innerHTML = "<p>Boa tarde!</p>";
  } else {
    //boa noite
    img.src = "imgnoite.png";
    document.body.style.background = "#515154";
    msg2.innerHTML = "<p>Boa noite!</p>";
  }
}
