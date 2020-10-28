
export class Cell{
  value: number;
  cssClasses: Array<string>;
  index: number;
  rowIndex: number;
  colIndex: number;
  blockIndex: number;
  locked: boolean;

  constructor(value: number, cssClasses: Array<string>, index: number, rowIndex: number, colIndex: number, blockIndex: number, locked: boolean) {
    this.value = value;
    this.cssClasses = cssClasses;
    this.index = index;
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.blockIndex = blockIndex;
    this.locked = locked;
  }
}
