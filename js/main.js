console.log("Sitio VerdeModa cargado correctamente");

function filtrarCategoria(categoria) {
  const productos = document.querySelectorAll(".producto");

  productos.forEach(producto => {
    if (categoria === "todos") {
      producto.style.display = "block";
    } else {
      producto.style.display = producto.classList.contains(categoria) ? "block" : "none";
    }
  });
}

function simularCompra() {
  const mensaje = document.getElementById("mensaje-compra");
  mensaje.textContent = "Gracias por tu interés. Te contactaremos pronto 😊";
}

function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `Hola! Mi nombre es ${nombre}. Mi correo es ${correo}. Quisiera consultar lo siguiente:\n${mensaje}`;
  const url = `https://wa.me/56912345678?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
