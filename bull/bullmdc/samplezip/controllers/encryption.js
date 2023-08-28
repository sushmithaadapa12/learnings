
const CryptoJS = require('crypto-js');
  const decryptWithAES = (ciphertext) => {
    const passphrase = process.env.salt;
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  module.exports={decryptWithAES}