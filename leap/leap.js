//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let divisibleByFour = (year % 4 === 0);
  let divisibleByFourHundred = (year % 400 === 0);
  let divisibleByOneHundred = (year % 100 === 0);
  if (divisibleByFour)
    {
      if (!divisibleByOneHundred)
        return true;
      if (divisibleByOneHundred && divisibleByFourHundred)
        return true; 
    }
  return false;
};
