//mensaje de hora
let hora = new Date().getHours();
let mensaje;

if (hora < 12) {
    mensaje = "¡Buenos días!";
} else if (hora < 18) {
    mensaje = "¡Buenas tardes!";
} else {
    mensaje = "¡Buenas noches!";
}

alert(mensaje);
// Saludo personalizado
let nombreUsuario = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
if (nombreUsuario) {
  document.querySelector("header h3").textContent += nombreUsuario + ", Bienvenid@!";
}
// buscador
document.getElementById("btnBusqueda").addEventListener("click", () => {
  let busqueda = document.getElementById("inputBusqueda").value.toLowerCase();

  document.querySelectorAll(".post-card").forEach(card => {
    if (!card.textContent.toLowerCase().includes(busqueda)) {
      card.style.display = "none";  
    } else {
      card.style.display = "block"; //aca se muestra los que coinciden
    }
  });
});
