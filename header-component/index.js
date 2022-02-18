function headerComponent(el) {
  componenteEl = document.createElement("div");
  componenteEl.innerHTML = `<div class="header">
    <a href="./index.html" class="header__icono"><i class="fas fa-laptop-code"></i></a>
    <div class="header__options">
        <div class="boton"><i class="fas fa-bars"></i>
        </div>
            <nav class="header__menu-desktop">
                <a href="./portfolio.html" class="header__menu">Portfolio</a>
                <a href="./servicios.html" class="header__menu">Servicios</a>
                <a href="./contacto.html" class="header__menu">Contacto</a>
            </nav>
        </div>
        
    </div>
    <div class="boton-options">
        <i class="fas fa-times"></i>
        <a href="./portfolio.html" class="boton__texto">Portfolio</a>
        <a href="./servicios.html" class="boton__texto">Servicios</a>
        <a href="./contacto.html" class="boton__texto">Contacto</a>
    </div>`;
  const body = document.body;
  const botonAbrir = componenteEl.querySelector(".fa-bars");
  const botonCerrar = componenteEl.querySelector(".fa-times");
  const ventana = componenteEl.querySelector(".boton-options");
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
