//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];
export const value = (colors) => {
  let primaryColor = COLORS.indexOf(colors[0]);
  let secondaryColor = COLORS.indexOf(colors[1]);
  return Number(`${primaryColor}${secondaryColor}`);
};
