const nucleo = nucleo || {};
nucleo.init = function() {
  function init() {
    console.log("Hello World");
  }
  init();
}
nucleo.isReady = function() {
  if (document.readyState !== 'loading'){
    nucleo.init();
  } else {
    document.addEventListener('DOMContentLoaded', nucleo.init);
  }
}
