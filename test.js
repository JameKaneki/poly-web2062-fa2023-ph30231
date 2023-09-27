const color = 'rgb(16 55 135)';
const rgbaRegex =  /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
const RGBAToHex = (rgba) => {
  const rgb = rgba.replace(/\s/g, '').match(rgbaRegex)
  console.log(rgb)
}

RGBAToHex(color)