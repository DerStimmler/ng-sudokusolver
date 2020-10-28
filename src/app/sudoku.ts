import {Cell} from './cell';

export class Sudoku {
  solved: boolean;
  size: number;
  cells: Array<Cell>;

  constructor(size: number, cells: Array<Cell>) {
    this.size = size;
    this.cells = cells;
    this.solved = false;
  }

  lockCells(): void{
    this.cells.filter(x => x.value !== null).map(x => {
      x.locked = true;
      x.cssClasses.push('locked');
    });
  }
}
