// Import the encryptors functions here.
import { caesarCipher, symbolCipher, reverseCipher } from './encryptors.js';

const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}

const decodeMessage = (str) => {
  
  let reversed = reverseCipher(str);
  let symbolsRemoved = symbolCipher(reversed);
  let decoded = caesarCipher(symbolsRemoved, -6);
  return decoded;
}

export { encodeMessage, decodeMessage };








