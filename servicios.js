function addContent(params) {
  const template = document.querySelector("#inicio__content-box");
  const inicioDiv = document.querySelector(".inicio");
  template.content.querySelector(".inicio__text").textContent = params.titulo;
  template.content.querySelector(".inicio__parrafo-text").textContent =
    params.subtitulo;
  template.content.querySelector(".contenido__foto").src = params.img;

  const clone = document.importNode(template.content, true);
  inicioDiv.appendChild(clone);
}
function getContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/6i04s7t927m9/environments/master/entries?access_token=e2mGaPLdxAvyOV8VXo5YtwyPVaindzvXp9_LmWw_9mw&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
     
      const fieldsCollection = data.items.map((items) => {
        const obj = {
          titulo: items.fields.titulo,
          subtitulo: items.fields.subtitulo,
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
function contentIterador() {
  getContent().then(function (items) {
    for (const w of items) {
      addContent(w);
    }
  });
}
function main() {
  contentIterador();
  const header = document.querySelector(".inicio__headerEl");
  const footer = document.querySelector(".footerEl");
  headerComponent(header);
  footerComponent(footer);
}
main();
