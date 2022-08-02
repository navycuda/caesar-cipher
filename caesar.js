// Functions
const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const convertToEncryptionSafe = function(input) {
  let result = ``;
  for (let i = 0; i < input.length; i++) {
    if (characters.contains(input[i])) {
      result += input[i];
    }
  }
  return result;
};

const encrypt = function(plainText, key) {




};

// Exports
module.exports = encrypt;