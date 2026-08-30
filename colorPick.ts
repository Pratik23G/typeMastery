export {};

const hexToRgb = (hex: string): [number, number, number] => {
  let redColor = hex.slice(0, 2);
  let greenColor = hex.slice(2, 4);
  let blueColor = hex.slice(4, 6);

  return [
    parseInt(redColor, 16),
    parseInt(greenColor, 16),
    parseInt(blueColor, 16),
  ];
};

console.log(hexToRgb("FF5733"));
console.log(hexToRgb("000000"));
console.log(hexToRgb("FFFFFF"));
