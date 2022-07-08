function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Wrong input');
    return a + b;
}
module.exports = sum;
