document.addEventListener("DOMContentLoaded", () => {
  const textoPerfil = document.getElementById("texto-perfil");
  const botonHistoria = document.getElementById("boton-historia");
  const botonDetalle = document.getElementById("boton-detalle");
  const textoExtra = document.getElementById("texto-extra");
  const mensajeBienvenida = document.getElementById("mensaje-bienvenida");

  if (mensajeBienvenida) {
    mensajeBienvenida.textContent = "Bienvenido a mi portafolio. Gracias por visitar este espacio.";
  }

  if (botonHistoria && textoPerfil) {
    botonHistoria.addEventListener("click", () => {
      textoPerfil.textContent =
        "Soy Carlos Andres, una persona constante y comprometida, siempre buscando crecer, aprender cosas nuevas y convertir cada reto en una oportunidad para avanzar.";
    });
  }

  if (botonDetalle && textoExtra) {
    botonDetalle.addEventListener("click", () => {
      const estaOculto = textoExtra.classList.toggle("oculto");
      botonDetalle.textContent = estaOculto ? "Mostrar detalle" : "Ocultar detalle";
    });
  }
});
