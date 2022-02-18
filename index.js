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
        const obj = {
          title: items.fields.compusTitle,
          description: items.fields.compusParrafoText,
          imgId: items.fields.compusImg.sys.id,
          includes: data.includes.Asset,
        };
        return obj;
      });
      fieldsCollection.forEach((i) => {
        let idEncontrado = buscarAsset(i.imgId, i.includes);
        i.img = idEncontrado.fields.file.url;
      });
      return fieldsCollection;
      function buscarAsset(assetID, includes) {
        return includes.find((item) => {
          return item.sys.id == assetID;
        });
      }
    });
}
function servicesIterador() {
  getServices().then(function (services) {
    for (const w of services) {
      addServices(w);
    }
  });
}

function bienvenidaContent(params) {
  const template = document.querySelector("#bienvenida");
  const bienvenidaDiv = document.querySelector(".titulo1");
  template.content.querySelector(".titulo__texto").textContent = params.titulo;
  template.content.querySelector(".titulo__sub").textContent = params.subtitulo;

  const clone = document.importNode(template.content, true);
  bienvenidaDiv.appendChild(clone);
}
function getBienvenidaContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/6i04s7t927m9/environments/master/entries?access_token=e2mGaPLdxAvyOV8VXo5YtwyPVaindzvXp9_LmWw_9mw&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          titulo: item.fields.titulo,
          subtitulo: item.fields.subtitulo,
        };
      });
      return fieldsCollection;
    });
}

function bienvenidaIterador() {
  getBienvenidaContent().then(function (title) {
    for (const i of title) {
      bienvenidaContent(i);
    }
  });
}

function presentacionContent(params) {
  const template = document.querySelector("#presentacion");
  const presentacionDiv = document.querySelector(".presentacion");
  template.content.querySelector(".contenido__mi-nombre").textContent =
    params.titulo;
  template.content.querySelector(".sobre-mi").textContent = params.parrafo;
  template.content.querySelector(".contenido__foto").src = params.img;

  const clone = document.importNode(template.content, true);
  presentacionDiv.appendChild(clone);
}

function getPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/6i04s7t927m9/environments/master/entries?access_token=e2mGaPLdxAvyOV8VXo5YtwyPVaindzvXp9_LmWw_9mw&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((items) => {
        const obj = {
          titulo: items.fields.titulo,
          parrafo: items.fields.parrafo,
          imgId: items.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
        return obj;
      });
      fieldsCollection.forEach((i) => {
        let idEncontrado = buscarAsset(i.imgId, i.includes);
        i.img = idEncontrado.fields.file.url;
      });
      return fieldsCollection;
      function buscarAsset(assetID, includes) {
        return includes.find((item) => {
          return item.sys.id == assetID;
        });
      }
    });
}
function presentacionIterador() {
  getPresentacion().then(function (items) {
    for (const w of items) {
      presentacionContent(w);
    }
  });
}

function main() {
  const footer = document.querySelector(".footer");
  const header = document.querySelector(".header-El");
  const form = document.querySelector(".formulario-de-contacto");
  formComponent(form);
  footerComponent(footer);
  headerComponent(header);
  servicesIterador();
  bienvenidaIterador();
  presentacionIterador();
}
main();
