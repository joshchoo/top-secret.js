const CryptoJS = require('crypto-js');

/**
 * @param  {string} secretKey - secret key to encrypt plaintext or decrypt ciphertext
 * @returns {object} - object with methods to encrypt, decrypt, and wipe secret key
 */
function topSecret(secretKey) {
  let sKey = secretKey.toString();

  function wipeSecretKey() {
    sKey = undefined;
  }

  function encrypt(plaintext) {
    if (typeof sKey === 'undefined') {
      throw new Error(
        'No secret key. Please initialize another topSecret object.'
      );
    }

    return CryptoJS.AES.encrypt(plaintext, sKey).toString();
  }

  function decrypt(ciphertext) {
    if (typeof sKey === 'undefined') {
      throw new Error(
        'No secret key. Please initialize another topSecret object.'
      );
    }

    const bytes = CryptoJS.AES.decrypt(ciphertext, sKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  return {
    encrypt: encrypt,
    decrypt: decrypt,
    wipe: wipeSecretKey,
  };
}

exports = module.exports = topSecret;
