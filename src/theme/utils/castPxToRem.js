export default function castPxToRem(value, baseNumber = 16) {
  return `${value / baseNumber}rem`;
}
