// Global Variables
const characters = `abcdefghijklmnopqrstuvwxyz`;
// Functions
const convertToEncryptionSafe = function(input) {
  let result = ``;
  for (let i = 0; i < input.length; i++) {
    if (characters.includes(input[i]) || input[i] === ` `) {
      result += input[i];
    }
  }
  return result;
};

const getCharacter = function(index, offset) {
  const length = characters.length;
  let position = index + offset;
  if (position < 0) {
    position += length;
  } else if (position >= length) {
    position -= length;
  }
  return characters[position];
};
const getIndex = function(char) {
  return characters.indexOf(char);
};

const encrypt = function(plainText, key) {
  // ensure the string is safe to pass through the encryption
  const test = convertToEncryptionSafe(plainText.toLowerCase());
  console.log(`plainText`, plainText);
  console.log(`key`, key);
  console.log(`test`, test);
  let result = ``;
  for (let t = 0; t < test.length; t++) {
    const index = getIndex(test[t]);
    result += test[t] !== ` ` ?  getCharacter(index, key) : ` `;
  }
  return result;
};

// Exports
module.exports = encrypt;