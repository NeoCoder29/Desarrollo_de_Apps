var boton = document.getElementById("btnSaludar");
var caja = document.getElementById("caja");

    boton.addEventListener("click", function() {
      var nombre = document.getElementById("nombre").value;
      caja.innerHTML = "Hola " + nombre;
    });

    caja.addEventListener("mouseover", function() {
      caja.style.backgroundColor = "yellow";
    });