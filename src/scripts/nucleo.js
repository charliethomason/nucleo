class Nucleo {
  constructor(el) {
    this.el = el;
  }
  get init() {
    return this.initNucleo();
  }
  initNucleo() {
    return this.el;
  }
}

export default Nucleo;