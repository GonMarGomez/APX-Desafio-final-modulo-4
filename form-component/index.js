function formComponent(el) {
  componenteEl = document.createElement("div");
  componenteEl.innerHTML = `  <div class="formulario-de-contacto">
    <div class="formulario-de-contacto__titulo-cont">
    <div class="formulario-de-contacto__titulo-box">
        <h2 class="formulario-de-contacto__titulo">Escribime</h2>
    </div>
    <form class="inputfield">
        <label for="nombre" class="input-text" >NOMBRE</label>
        <input name= "nombre" class="inp-camp" id="nombre" type="text">
        <label for="Email" class="input-text" >EMAIL</label>
        <input name= "email" class="inp-camp" id="Email" type="email">
        <label class="input-text" for="mensaje">Mensaje</label>
        <textarea class="inp-area" name="mensaje" id="" cols="30" rows="10"></textarea>
        <div class="botton"><button class="button-amarillo">Enviar</button></div> 
    </div></form>
</div>`;
  el.appendChild(componenteEl);
  const form = componenteEl.querySelector(".inputfield");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());

    let emailMessage = dataObject.nombre + " te envío un mensaje! ";
    emailMessage += " > Te quiere decir esto: " + dataObject.mensaje;
    emailMessage += " > Podés contactarte acá: " + dataObject.email;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "gonzalomgomez5@gmail.com",
        message: emailMessage,
      }),
    })
      .then(() => {
        alert("El mensaje fue enviado con éxito!");
        document.querySelectorAll(".inp-camp").forEach((input) => {
          input.value = "";
        });
        document.querySelector(".inp-area").value = "";
      })
      .catch(() => {
        alert("Algo salió mal al enviar el mensaje...");
      });
  });
}
