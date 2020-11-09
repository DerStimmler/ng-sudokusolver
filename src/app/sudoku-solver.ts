import { Sudoku } from './sudoku';
import { Settings } from './settings';
import { Observable } from 'rxjs';

export interface SudokuSolver {
  solve(sudoku: Sudoku, settings: Settings): Observable<Sudoku>;
}
