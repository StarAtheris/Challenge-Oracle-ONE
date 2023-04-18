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

  const regex = /^[a-z\s]*$/; 


    if (txt.length !== 0 && regex.test(txt)) {
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
      let encriptado = texto.replace(/e/gi, "enter");
      encriptado = encriptado.replace(/i/gi, "imes");
      encriptado = encriptado.replace(/a/gi, "ai");
      encriptado = encriptado.replace(/o/gi, "ober");
      encriptado = encriptado.replace(/u/gi, "ufat");
      document.getElementById("resultado").innerHTML = encriptado;
      return encriptado;
    }
}

function desencriptarTexto(texto) {
  const txt = document.getElementById("encryptinput").value;
  texto = txt;

  if (validarEntrada(txt)) {
    let desencriptado = texto.replace(/enter/gi, "e");
    desencriptado = desencriptado.replace(/imes/gi, "i");
    desencriptado = desencriptado.replace(/ai/gi, "a");
    desencriptado = desencriptado.replace(/ober/gi, "o");
    desencriptado = desencriptado.replace(/ufat/gi, "u");
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