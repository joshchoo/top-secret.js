# top-secret

Encrypt and decrypt strings without exposing your secret key!

top-secret uses AES for encryption and decryption.

## Installation

<pre>
npm install top-secret
</pre>

## Usage

```javascript
const topSecret = require('top-secret');

let secretKey = 'correct horse battery staple';

// initialize
let secret = topSecret(secretKey);

// clear secret key from environment
secretKey = undefined;

// encrypt plaintext
let ciphertext = secret.encrypt(
  "What's the object-oriented way to become wealthy? ... Inheritance."
);

// decrypt ciphertext
let plaintext = secret.decrypt(ciphertext);

// wipe secret key, and prevent encryption and decryption
secret.wipe();

ciphertext = secret.encrypt('This should fail'); // throws an Error: No secret key. Please initialize another topSecret object.
```
