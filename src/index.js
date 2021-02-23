module.exports = function reverse (n) {
  const arr = n.toString().split('');
  return +arr.reverse().join('');
}
