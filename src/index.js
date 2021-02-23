module.exports = function reverse (n) {
  const arr = Math.abs(n).toString().split('');
  return +arr.reverse().join('');
}
