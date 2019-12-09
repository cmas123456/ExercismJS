//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  let inputString = '';
  if (input % 3 === 0)
    inputString += 'Pling';
  if (input % 5 === 0)
    inputString += 'Plang';
  if (input % 7 === 0)
    inputString += 'Plong';
  if (inputString === '')
    return `${input}`;
  else 
    return inputString;
};
