//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const table = {};

  for (const entry of Object.entries(old)){
      const score = parseInt(entry[0], 10);
      
      for (const letter of entry[1]){
        table[letter.toLowerCase()] = score;
      }
  }
  return table;
};
