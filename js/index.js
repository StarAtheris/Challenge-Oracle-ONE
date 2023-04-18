const boxContent = document.getElementById("box-content");
const resultado = document.getElementById("resultado");
const copiarBt = document.getElementById("copiarbt");
const buttonencrypt = document.getElementById("encrypt-bt");
const buttondecrypt = document.getElementById("decrypt-bt")
const mostraresultado = document.getElementById("mostraresultado");

function mostrarresultado(show) {
    return mostraresultado.style.display = show;
}

function hiddencontent(show){
    return boxContent.style.display = show;
}

function validarEntrada(txt) {
    if (txt.length !== 0) {
        hiddencontent("none");
        mostrarresultado("block");
      return true;
    } else {
      alert("¡Debe ingresar texto para procesar!");
      hiddencontent("");
      mostrarresultado("none");
      return false;
    }
}

function encriptarTexto(texto) {
    const txt = document.getElementById("encryptinput").value;
    texto = txt;

    if (validarEntrada(txt)) {
      let encriptado = texto.replace(/e/g, "enter");
      encriptado = encriptado.replace(/i/g, "imes");
      encriptado = encriptado.replace(/a/g, "ai");
      encriptado = encriptado.replace(/o/g, "ober");
      encriptado = encriptado.replace(/u/g, "ufat");
      document.getElementById("resultado").innerHTML = encriptado;
      return encriptado;
    }
}

function desencriptarTexto(texto) {
  const txt = document.getElementById("encryptinput").value;
  texto = txt;

  if (validarEntrada(txt)) {
    let desencriptado = texto.replace(/enter/g, "e");
    desencriptado = desencriptado.replace(/imes/g, "i");
    desencriptado = desencriptado.replace(/ai/g, "a");
    desencriptado = desencriptado.replace(/ober/g, "o");
    desencriptado = desencriptado.replace(/ufat/g, "u");
    document.getElementById("resultado").innerHTML = desencriptado;
    return desencriptado;
  }
}

copiarBt.addEventListener("click", function() {
    resultado.select();
    document.execCommand("copy"); 
    alert("Texto copiado al portapapeles");
  });

buttondecrypt.onclick = desencriptarTexto; 
buttonencrypt.onclick = encriptarTexto;
