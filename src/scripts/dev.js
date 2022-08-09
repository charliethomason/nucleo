import Nucleo from "./nucleo";
import "../styles/nucleo.scss";

function initApp() {
  var app = document.getElementById("app");
  var nucleoEl = new Nucleo(app);
  console.log(nucleoEl.init);
}
if (document.readyState !== 'loading'){
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}