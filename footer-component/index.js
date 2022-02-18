function footerComponent(el) {
  componenteEl = document.createElement("div");
  componenteEl.innerHTML = `<div class="contenedor5">
    <div class="logo-lap">
    <div class="laptop">
        <img class="laptop" src="./Imagenes/laptop.png" alt="">
    </div> 
    <div class="fecha">
        <h3 class="fecha">© 2021 Gonza</h3>
    </div></div>
    <div class="redes">

    <div class="ig">
        <img class="ig" src="./Imagenes/instagram.png" alt=>
        <p class="nomb-redes">Instagram</p>
    </div>
    <div class="link">
        <img class="link" src="./Imagenes/linkedin.png" alt="">
        <p class="nomb-redes"> Linkedin</p>
    </div>
    <div class="git">
        <img class="git" src="./Imagenes/github.png" alt="">
        <p class="nomb-redes"> Github</p>
    </div></div>
</div>`;

  el.appendChild(componenteEl);
}
