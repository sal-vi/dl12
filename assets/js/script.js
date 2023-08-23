// EJERCICIO 1//

const imagenE1 = document.getElementById("imagen-E1.1");

imagenE1.addEventListener("click", () => {
  if (imagenE1.src.endsWith("E1_1.png")) {
    imagenE1.src = "./assets/img/E1_2.png";
  } else {
    imagenE1.src = "./assets/img/E1_1.png";
  }
  imagenE1.classList.toggle("borde-rojo-E1");
});

//EJERCICIO 2//

let botonClickE2 = document.getElementById("verificar-E2").addEventListener('click', ejercicio2);

function ejercicio2() {
    let stickerQty1 = document.getElementById("sticker1").value;
    let stickerQty2 = document.getElementById("sticker2").value;
    let stickerQty3 = document.getElementById("sticker3").value;
    let sumaStickers = Number(stickerQty1) + Number(stickerQty2) + Number(stickerQty3);
    let txtStickers = document.getElementById("txtE2");
    
    if (sumaStickers <= 10) {
        txtStickers.innerHTML = "Llevas " + sumaStickers + " stickers";
    } else {
        txtStickers.innerHTML = "Llevas demasiados stickers";
    }
}

//EJERCICIO 3//

let botonClickE3 = document.getElementById("verificar-E3").addEventListener('click', ejercicio3);

function ejercicio3() {
    let pass1 = document.getElementById("num1").value;
    let pass2 = document.getElementById("num2").value;
    let pass3 = document.getElementById("num3").value;
    let passC = pass1+pass2+pass3
    let txtPassword = document.getElementById("txtE3");

    if (passC == "911") {
        txtPassword.innerHTML = "Clave 1 correcta"
    } else if (passC == "714") {
        txtPassword.innerHTML = "Clave 2 correcta"

    } else {
        txtPassword.innerHTML = "Clave incorrecta"
    }

}