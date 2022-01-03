function addServices(params) {
  const template = document.querySelector("#mis-servicios-template");
  const serviciosDiv = document.querySelector(".servicios");
  template.content.querySelector(".compus__img").src = params.img;
  template.content.querySelector(".compus__text").textContent = params.title;
  template.content.querySelector(".compus__parrafo-text").textContent =
    params.description;

  const clone = document.importNode(template.content, true);
  serviciosDiv.appendChild(clone);
}
function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/6i04s7t927m9/environments/master/entries?access_token=e2mGaPLdxAvyOV8VXo5YtwyPVaindzvXp9_LmWw_9mw&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((items) => {
        return {
          title: items.fields.compusTitle,
          description: items.fields.compusParrafoText,
        };
      });
      return fieldsCollection;
    });
}
function servicesIterador() {
  getServices().then(function (services) {
    for (const w of services) {
      addServices(w);
    }
  });
}

function main() {
  const botonHamburg = document.querySelector(".header__options");
  buttonComponent(botonHamburg);
  servicesIterador();
}
main();
