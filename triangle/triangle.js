//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.a === 0 || this.b === 0 || this.c === 0)
      throw new Error('a triangle must have 3 sides with positive definate length');
    if (this.a < 0 || this.b < 0 || this.c < 0)
      throw new Error('triangles with negative sides are illegal'); 
    if ((this.a + this.b) <= this.c || (this.a + this.c) <= this.b || (this.b +
      this.c) <= this.a)
      throw new Error('illegal');
    if (this.a === this.b && this.b === this.c)
      return 'equilateral'
    if (this.a === this.b || this.a === this.c || this.b === this.c)
      return 'isosceles'
    return 'scalene'
  }
}
