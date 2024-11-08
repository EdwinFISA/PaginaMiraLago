// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay"); // Crea un div con la clase overlay
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        // Añadir el efecto de difuminado
        document.body.appendChild(overlay);
        overlay.style.display = "block"; // Muestra el overlay difuso
  
        // Muestra el contenido de "Ver más" en la tarjeta
        const verMasBtn = card.querySelector(".ver-mas");
        if (verMasBtn) {
          verMasBtn.style.display = "block"; // Asegúrate de que el botón "Ver más" sea visible
        }
  
        // Redirige a la ruta de la tarjeta seleccionada
        card.addEventListener("click", () => {
          window.location.href = card.dataset.url; // Redirige a la ruta especificada en el data-url
        });
      });
    });
  
    // Eliminar el overlay cuando se haga clic fuera de las tarjetas
    overlay.addEventListener("click", () => {
      overlay.style.display = "none";
      document.querySelectorAll(".ver-mas").forEach(button => {
        button.style.display = "none"; // Oculta los botones "Ver más"
      });
    });
  });
  