// Saludo personalizado
let nombreUsuario = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
if (nombreUsuario) {
  document.querySelector("header h3").textContent += nombreUsuario + ", Bienvenid@!";
}

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
