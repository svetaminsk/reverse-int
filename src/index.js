module.exports = function reverse (n) {
    const s = String(n);
    let result = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== '-') {
            result += s[i];
        }
    } return Number(result);
}
