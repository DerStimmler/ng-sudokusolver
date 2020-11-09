import {Sudoku} from './sudoku';
import {Cell} from './cell';

export class RuleChecker{

  constructor(private sudoku: Sudoku) {
  }

  checkInsertion(cellIndex: number, value: number): boolean{
    const cell = this.sudoku.cells.filter(x => x.index === cellIndex)[0];

    if (!this.allowedToInsert(cell, value)) { return false; }
    return true;
  }

  private allowedToInsert(cell: Cell, value: number): boolean {
    if (!(this.allowedInRow(cell, value) && this.allowedInBlock(cell, value) && this.allowedInCol(cell, value))) { return false; }
    return true;
  }

  private allowedInRow(cell: Cell, value: number): boolean {
    return this.sudoku.cells.filter(x => x.rowIndex === cell.rowIndex).filter(x => x.value === value).filter(x => x.index !== cell.index).length === 0;
  }

  private allowedInBlock(cell: Cell, value: number): boolean {
    return this.sudoku.cells.filter(x => x.blockIndex === cell.blockIndex).filter(x => x.value === value).filter(x => x.index !== cell.index).length === 0;
  }

  private allowedInCol(cell: Cell, value: number): boolean{
    return this.sudoku.cells.filter(x => x.colIndex === cell.colIndex).filter(x => x.value === value).filter(x => x.index !== cell.index).length === 0;
  }
}
