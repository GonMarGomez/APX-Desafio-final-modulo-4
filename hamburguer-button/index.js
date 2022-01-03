function buttonComponent(el) {
  componenteEl = document.createElement("div");
  componenteEl.innerHTML = ` <div class="seccion-options">
    <div class="options"><i class="fas fa-bars"></i></div>
    <div class="ventana">
        <div class="ventana__cruz"><i class="fas fa-times"></i></div>
        <h1 class="ventana__section">Portfolio</h1>
        <h1 class="ventana__section">Servicios</h1> 
        <h1 class="ventana__section">Contacto</h1>
    
    </div>
    </div>`;
  const body = document.body;
  const ventana = componenteEl.querySelector(".ventana");
  const botonAbrir = componenteEl.querySelector(".options");
  const botonCerrar = componenteEl.querySelector(".fa-times");
  botonAbrir.addEventListener("click", () => {
    ventana.style.display = "flex";
    body.style.overflow = "hidden";
  });
  botonCerrar.addEventListener("click", () => {
    ventana.style.display = "";
    body.style.overflow = "";
  });
  el.appendChild(componenteEl);
}
