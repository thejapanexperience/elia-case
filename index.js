function eliacase(str) {
  const arr = str.split('');
  const newArr = arr.map((char, i) => {
    return char === ' ' ? `${char}Elia` : char;
  });
  if (newArr.length !== 0 && newArr[0] !== ' ') {
    newArr.unshift('Elia');
  }
  const finStr = newArr.join('');
  return finStr;
}
eliacase('');
module.exports = eliacase;
