const Prime = require('./Prime');
test('Prime.isPrime(1) should return false', () => {
    expect(Prime.isPrime(1)).toBe(false);
});
test('Prime.isPrime(2) should return true', () => {
    expect(Prime.isPrime(2)).toBe(true);
});
test('Prime.isPrime(3) should return true', () => {
    expect(Prime.isPrime(3)).toBe(true);
});
test('Prime.isPrime(4) should return false', () => {
    expect(Prime.isPrime(4)).toBe(false);
});
test('Prime.isPrime(5) should return true', () => {
    expect(Prime.isPrime(5)).toBe(true);
});
test('Prime.isPrime(6) should return false', () => {
    expect(Prime.isPrime(6)).toBe(false);
});
test('Prime.isPrime(7) should return true', () => {
    expect(Prime.isPrime(7)).toBe(true);
});
test('Prime.isPrime(8) should return false', () => {
    expect(Prime.isPrime(8)).toBe(false);
});