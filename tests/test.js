const topSecret = require('../src');

describe('encrypt, decrypt, wipe', () => {
  it('should decrypt a ciphertext that was encrypted with AES', () => {
    const secret = topSecret('correct horse battery staple');

    const plaintext =
      "What's the object-oriented way to become wealthy? ... Inheritance.";

    const ciphertext = secret.encrypt(plaintext);
    const deciphered = secret.decrypt(ciphertext);

    expect(ciphertext).not.toBe(plaintext);
    expect(deciphered).toStrictEqual(plaintext);
  });

  it('should throw an Error when trying to encrypt/decrypt after a wipe', () => {
    const secret = topSecret('correct horse battery staple');

    const plaintext =
      "What's the object-oriented way to become wealthy? ... Inheritance.";

    const ciphertext = secret.encrypt(plaintext);
    const deciphered = secret.decrypt(ciphertext);

    secret.wipe();

    expect(() => secret.encrypt(plaintext)).toThrow();
    expect(() => secret.decrypt(plaintext)).toThrow();
  });
});
