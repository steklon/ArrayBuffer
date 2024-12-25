export default class ArrayBufferConverter {
  constructor() {
    this.buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {    
    const view = new Uint16Array(this.buffer);
    return String.fromCharCode(...view);
  }
}