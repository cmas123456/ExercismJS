//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = '';
  if (dna.length === 0) {
    return rna;
  }
  for (let i = 0; i < dna.length; i++){
    if (dna[i] == 'A')
      rna += 'U';
    else if (dna[i] == 'T')
      rna += 'A';
    else if (dna[i] == 'C')
      rna += 'G';
    else if (dna[i] == 'G')
      rna += 'C'
    else rna += dna[i];
  }
  return rna;
};
