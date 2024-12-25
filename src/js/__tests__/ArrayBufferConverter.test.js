import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

describe("проверка класса ArrayBufferConverter", () => {
  test('проверка метода load', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);

    expect(converter.buffer).toEqual(buffer);
  });

  test("проверка метода toString", () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(converter.toString()).toBe(result);
  });
});