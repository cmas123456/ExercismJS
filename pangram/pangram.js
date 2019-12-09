//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (miscString) => {
  let alphabet = 'abcdefghijklmnopqrstuvqxyz'
  let string = miscString.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) 
  {
      if (string.indexOf(alphabet[i]) === -1)
      {
        return false;
      }
    } 
    return true;
  }
