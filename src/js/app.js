import getBuffer from "./getBuffer";
import ArrayBufferConverter from "./ArrayBufferConverter";

const buffer = getBuffer();
const converter = new ArrayBufferConverter();

converter.load(buffer);
console.log(converter.buffer);
console.log(getBuffer());

console.log(typeof(converter.toString(buffer)), converter.toString(buffer));
