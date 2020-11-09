import { Sudoku } from './sudoku';
import { Cell } from './cell';
import { Observable, of } from 'rxjs';

export class SudokuGenerator {
  static createNewSudoku(size: number): Observable<Sudoku> {
    const cells = new Array<Cell>();

    for (let i = 0; i < size * size; i++) {
      const index = i;
      const rowIndex = Math.floor(i / size);
      const colIndex = Math.floor(i % size);
      const blockIndex = Math.floor(
        Math.floor(Math.floor(rowIndex / 3)) * 3 + Math.floor(colIndex / 3)
      );

      cells.push({
        value: null,
        blockIndex,
        colIndex,
        cssClasses: [],
        index,
        locked: false,
        rowIndex
      });
    }

    return of(new Sudoku(size, cells));
  }
}
