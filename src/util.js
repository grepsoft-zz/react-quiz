export const cleanUpSpecialChars = (str) => {
  return str
    .replace(/[ÀÁÂÃÄÅ]/g, "A")
    .replace(/&quot;/g, '"')
    .replace(/&shy;/g, "-")
    .replace(/[àáâãäå]/g, "a")
    .replace(/&oacute;/g, "Ó")
    .replace(/[ÈÉÊË]/g, "E"); // final clean up
};


export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export const shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    const j = getRandomIntInclusive(0, i);
    const t = arr[j];
    arr[j] = arr[i];
    arr[i] = t;
  }
}