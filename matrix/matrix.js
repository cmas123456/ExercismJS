//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    let lines = input.split("\n");
    this._rows = new Array(lines.length); // creates an array with the number of rows equal to the input
    for (let i = 0; i < this._rows.length; i++){
      let content = lines[i].split(' '); // creates an array of the content on each line of the rows array
      let columns = new Array(content.length); // creates an array of columns
      for (let j = 0; j < columns.length; j++){
        columns[j] = parseInt(content[j], 10); // placing values at each location
      }
      this._rows[i] = columns; //replacing empty rows with values
    } 

    this._columns = new Array(this._rows[0].length)
    for (let i = 0; i < this._columns.length; i++){
      let cols = new Array(this._rows.length);
      for (let j = 0; j < cols.length; j++){
        cols[j] = this._rows[j][i];
      }
      this._columns[i] = cols;
    }
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
